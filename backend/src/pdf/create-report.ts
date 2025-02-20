import path from 'path';
import dayjs from 'dayjs';
import { Core } from '@strapi/types';

import {
  calcHeight,
  findPackageJsonDir,
  formatToDate,
  formatToMoney,
} from './utils';
import fs from 'fs';
import PDFDocument, { page } from 'pdfkit';
import { drawTable } from './draw-table';
import { INITIAL_MARGIN_X, INITIAL_MARGIN_Y, SIZES } from './constants';
import { TREASURY_TYPE_MAP_LABEL } from '../constants/maps';

const FORMAT_COMPLETE_DATE = 'dddd DD [de] MMMM YYYY';

export class CreateTreasuryReport {
  Stripe: Core.Strapi;
  startMonth: dayjs.Dayjs;
  endMonth: dayjs.Dayjs;

  constructor(Stripe: Core.Strapi, date: dayjs.Dayjs) {
    this.Stripe = Stripe;
    this.startMonth = date.startOf('month');
    this.endMonth = date.endOf('month');
  }

  async create() {
    const treasuries = await strapi.entityService.findMany(
      'api::treasury.treasury',
      {
        populate: '*',
        filters: {
          date: {
            $gte: this.startMonth.toISOString(),
            $lte: this.endMonth.toISOString(),
          },
        },
      },
    );

    const currenBalance =
      (
        await strapi.entityService.findMany(
          'api::general-balance.general-balance',
          {
            filters: {
              month: {
                $gte: this.startMonth.toISOString(),
                $lte: this.endMonth.toISOString(),
              },
            },
          },
        )
      )?.[0]?.total ?? 0;

    const beforeBalance =
      (
        await strapi.entityService.findMany(
          'api::general-balance.general-balance',
          {
            filters: {
              month: {
                $gte: this.startMonth.subtract(1, 'month').toISOString(),
                $lte: this.endMonth.subtract(1, 'month').toISOString(),
              },
            },
          },
        )
      )?.[0]?.total ?? 0;

    const { collaborators, credits, debits } = treasuries.reduce(
      (acc, treasury) => {
        if (treasury?.direction === 'debit') {
          acc.debits.push({
            note: treasury.note || '-',
            type: treasury.type,
            typeLabel: TREASURY_TYPE_MAP_LABEL[treasury.type],
            amountInt: treasury.amount,
            date: formatToDate(treasury.date, FORMAT_COMPLETE_DATE),
            amount: formatToMoney(treasury.amount),
          });
        } else if (treasury.direction === 'credit') {
          acc.credits.push({
            note: treasury.note || '-',
            type: treasury.type,
            typeLabel: TREASURY_TYPE_MAP_LABEL[treasury.type],
            amountInt: treasury.amount,
            date: formatToDate(treasury.date, FORMAT_COMPLETE_DATE),
            amount: formatToMoney(treasury.amount),
          });
        }

        // verificamos si es un diezmo
        if (treasury.type === 'tithe') {
          acc.collaborators.push({
            name: [
              (treasury as any)?.collaborator?.firstName,
              (treasury as any)?.collaborator?.lastName,
            ]
              .filter(Boolean)
              .join(' '),
            date: formatToDate(treasury.date, FORMAT_COMPLETE_DATE),
            amountInt: treasury.amount,
            typeLabel: TREASURY_TYPE_MAP_LABEL[treasury.type],
            amount: formatToMoney(treasury.amount),
            dui: (treasury as any)?.collaborator?.dui,
            note: treasury?.note || '-',
          });
        }

        return acc;
      },
      {
        collaborators: [],
        debits: [],
        credits: [],
      },
    );

    const totalTithe = collaborators.reduce((acc, { amountInt }) => {
      return acc + amountInt;
    }, 0);

    const totalInputs = debits.reduce((acc, { amountInt, type }) => {
      return acc + amountInt;
    }, 0);

    const totalOutput = credits.reduce((acc, { amountInt }) => {
      return acc + amountInt;
    }, 0);

    const baseDir = findPackageJsonDir();
    const pdfPath = path.join(baseDir, 'public', 'treasury.pdf');

    if (fs.existsSync(pdfPath)) {
      fs.unlinkSync(pdfPath);
    }

    const doc = new PDFDocument({
      size: 'LETTER',
      margins: {
        top: INITIAL_MARGIN_Y,
        bottom: INITIAL_MARGIN_Y,
        left: INITIAL_MARGIN_X,
        right: INITIAL_MARGIN_X,
      },
    });

    let pageY: number = INITIAL_MARGIN_Y;
    doc.pipe(fs.createWriteStream(pdfPath)); // write to PDF   // HTTP response

    doc.fontSize(SIZES.title);
    // doc.fillColor(32);
    doc.font('Helvetica-Bold');
    doc.text(
      `Informe de Tesorería de la IEA de La Reina Chalatenango, correspondiente al mes de ${this.startMonth.format('MMMM, YYYY')}`,
      INITIAL_MARGIN_X,
      pageY,
    );

    doc.font('Helvetica');
    doc.fontSize(SIZES.subTitle);

    // diezmos del mes
    pageY += calcHeight(SIZES.title * 5);
    doc.text('Hermanos Diezmadores', INITIAL_MARGIN_X, pageY);

    pageY += SIZES.subTitle * 1.2;
    doc.fontSize(SIZES.textSm);
    pageY = drawTable(doc, {
      x: INITIAL_MARGIN_X,
      y: pageY,
      rowHeight: SIZES.rowSm,
      headerFill: '#d0d0d0',
      // headerTextColor: 'black',
      columns: [
        {
          field: 'date',
          headerName: 'Fecha',
          width: 130,
        },
        {
          field: 'name',
          headerName: 'Nombre',
          width: 170,
        },
        {
          field: 'dui',
          headerName: 'Dui',
          width: 75,
        },
        {
          field: 'amount',
          headerName: 'Monto',
          width: 70,
        },
      ],
      rows: collaborators,
    });

    // ofrendas del mes
    pageY = calcHeight(pageY, SIZES.text * 2);

    doc.fontSize(SIZES.subTitle);
    doc.text('Otros Ingresos', INITIAL_MARGIN_X, pageY);
    pageY = calcHeight(pageY, SIZES.subTitle * 1.2);

    doc.fontSize(SIZES.textSm);
    pageY = drawTable(doc, {
      x: INITIAL_MARGIN_X,
      y: pageY,
      rowHeight: SIZES.rowSm,
      headerFill: '#d0d0d0',
      // headerTextColor: 'black',
      columns: [
        {
          field: 'date',
          headerName: 'Fecha',
          width: 130,
        },
        {
          field: 'typeLabel',
          headerName: 'Tipo',
          width: 100,
        },
        {
          field: 'amount',
          headerName: 'Monto',
          width: 70,
        },
        {
          field: 'note',
          headerName: 'Nota',
          width: 140,
        },
      ],
      rows: debits.filter(item => item.type !== 'tithe'),
    });

    pageY += SIZES.text * 5;
    doc.font('Helvetica');
    doc.fontSize(SIZES.subTitle);

    // egresos del mes
    doc.text(
      `Egresos mes de ${formatToDate(this.startMonth, 'MMMM')}`,
      INITIAL_MARGIN_X,
      pageY,
    );

    pageY += SIZES.subTitle * 1.2;
    doc.fontSize(SIZES.textSm);
    pageY = drawTable(doc, {
      x: INITIAL_MARGIN_X,
      y: calcHeight(pageY),
      rowHeight: SIZES.rowSm,
      headerFill: '#d0d0d0',
      // headerTextColor: 'black',
      columns: [
        {
          field: 'date',
          headerName: 'Fecha',
          width: 130,
        },
        {
          field: 'typeLabel',
          headerName: 'Tipo',
          width: 125,
        },
        {
          field: 'amount',
          headerName: 'Monto',
          width: 70,
        },
        {
          field: 'note',
          headerName: 'Nota',
          width: 150,
        },
      ],
      rows: credits,
    });

    doc.addPage();
    pageY = INITIAL_MARGIN_Y;

    // Total de ingresos
    doc.fontSize(SIZES.subTitle);
    doc.text(
      `Total Ingresos ${formatToDate(this.startMonth, 'MMMM')}:`,
      INITIAL_MARGIN_X,
      pageY,
    );
    doc.fontSize(SIZES.textSm);
    pageY = calcHeight(pageY, SIZES.subTitle * 1.2);
    pageY = drawTable(doc, {
      x: INITIAL_MARGIN_X,
      y: pageY,
      rowHeight: SIZES.rowSm,
      hiddenHeader: true,
      hiddenCount: true,
      columns: [
        {
          width: 200,
          field: 'label',
          headerName: 'Tipo',
          renderField: (row, context) => {
            if ([4, 5].includes(row.id)) {
              doc.font('Helvetica-Bold');
            }

            doc.text(row.label, context.x, context.y, {
              width: context.width,
            });
            return doc.font('Helvetica');
          },
        },
        {
          width: 80,
          field: 'total',
          headerName: 'Tipo',
          renderField: (row, context) => {
            if ([5].includes(row.id)) {
              doc.font('Helvetica-Bold');
            }

            doc.text(row.total, context.x, context.y, {
              width: context.width,
            });
            return doc.font('Helvetica');
          },
        },
      ],
      rows: [
        {
          id: 1,
          label: 'Total de diezmos',
          total: formatToMoney(totalTithe),
        },
        {
          id: 2,
          label: 'Total de ofrendas',
          total: formatToMoney(totalInputs - totalTithe),
        },
        {
          id: 3,
          label: `Total ingresos`,
          total: formatToMoney(totalInputs),
        },
        {
          id: 4,
          label: `Saldo anterior`,
          total: formatToMoney(beforeBalance),
        },
        {
          id: 5,
          label: `Saldo Anterior + Total ingresos`,
          total: formatToMoney(beforeBalance + totalInputs),
        },
      ],
    });

    pageY = calcHeight(pageY, SIZES.subTitle * 1.2);
    doc.fontSize(SIZES.subTitle);
    doc.text(
      `Total Egresos ${formatToDate(this.startMonth, 'MMMM')}:`,
      INITIAL_MARGIN_X,
      pageY,
    );
    doc.fontSize(SIZES.textSm);
    pageY = calcHeight(pageY, SIZES.subTitle * 1.2);
    pageY = drawTable(doc, {
      x: INITIAL_MARGIN_X,
      y: pageY,
      rowHeight: SIZES.rowSm,
      hiddenHeader: true,
      hiddenCount: true,
      columns: [
        {
          width: 200,
          field: 'label',
          headerName: 'Tipo',
          renderField: (row, context) => {
            if ([3].includes(row.id)) {
              doc.font('Helvetica-Bold');
            }

            doc.text(row.label, context.x, context.y, {
              width: context.width,
            });
            return doc.font('Helvetica');
          },
        },
        {
          width: 80,
          field: 'total',
          headerName: 'total',
          renderField: (row, context) => {
            if ([3].includes(row.id)) {
              doc
                .rect(
                  context.x - 4.5,
                  context.y - 4.5,
                  context.width - 1,
                  SIZES.rowSm - 1,
                )
                .fillColor(row.totalInt > 0 ? '#C5E0B4' : '#d5a9a1')
                .fill();
              doc.font('Helvetica-Bold');
              doc.fillColor('black');
            }

            doc.text(formatToMoney(row.totalInt), context.x, context.y, {
              width: context.width,
            });
            doc.fillColor('black');
            return doc.font('Helvetica');
          },
        },
      ],
      rows: [
        {
          id: 1,
          label: 'Total de egresos',
          totalInt: totalOutput,
          total: formatToMoney(totalOutput),
        },
        {
          id: 2,
          label: 'Ingresos - Egresos',
          totalInt: totalInputs - totalOutput,
          total: formatToMoney(totalInputs - totalOutput),
        },
        {
          id: 3,
          label: `Saldo para mes de ${formatToDate(this.startMonth.add(1, 'month'), 'MMMM, YYYY')}`,
          totalInt: totalInputs - totalOutput,
          total: formatToMoney(totalInputs - totalOutput),
        },
      ],
    });

    // finalize the PDF and end the stream
    doc.end();
    return pdfPath;
  }
}
