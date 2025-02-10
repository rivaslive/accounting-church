import { INITIAL_MARGIN_Y } from './constants';

export type ColumnType<Row = any> = {
  field: string;
  headerName: string;
  renderHeader?: (context: {
    index: number;
    x: number;
    y: number;
    width: number;
    headerName: string;
  }) => PDFKit.PDFDocument;
  renderField?: (
    row: Row,
    context: {
      index: number;
      x: number;
      y: number;
      width: number;
    },
  ) => PDFKit.PDFDocument;
  width?: number;
  bold?: boolean;
};

const headerHeight = 18;

export function drawTable<Row = any>(
  doc: PDFKit.PDFDocument,
  args: {
    x: number;
    y: number;
    rowHeight: number;
    headerFill?: string;
    hiddenCount?: boolean;
    hiddenHeader?: boolean;
    headerTextColor?: string;
    rowTextColor?: string;
    columnWidths?: Record<number, number>;
    columns: ColumnType<Row>[];
    rows: Row[];
  },
) {
  const {
    columns,
    x,
    y,
    rows,
    rowHeight,
    columnWidths,
    headerFill,
    hiddenHeader,
    hiddenCount,
    rowTextColor = 'black',
    headerTextColor = 'black',
  } = args;

  let startX = x;
  let startY = y;

  if (!hiddenCount) {
    const rowLength = rows.length.toString().length;
    columns.unshift({
      field: 'index',
      headerName: '#',
      width: rowLength > 2 ? rowLength * 8.5 : 15,
      renderField: (_, context) =>
        doc.text(`${context.index + 1}`, context.x, context.y, {
          width: context.width,
        }),
    });
  }

  const pageHeight = doc.page.height;
  const bottomMargin = INITIAL_MARGIN_Y;

  const drawHeaders = () => {
    startX = x;
    doc.font('Helvetica-Bold');
    columns.forEach((header, index) => {
      const isHeaderConstructor = typeof header?.renderHeader === 'function';
      const width = header?.width ?? (columnWidths?.[index] ?? 30) - 10;

      if (headerFill) {
        doc.rect(startX, startY, width, headerHeight).fillColor(headerFill).fill();
      }

      // Dibujar bordes del encabezado
      doc.rect(startX, startY, width, headerHeight).stroke();

      doc.fillColor(headerTextColor);

      if (isHeaderConstructor) {
        header.renderHeader({
          index,
          x: startX + 5,
          y: startY + 5,
          width: width,
          headerName: header?.headerName,
        });
      } else {
        doc.text(header.headerName, startX + 5, startY + 5, {
          width: width,
        });
      }
      startX += width;
    });
    startY += headerHeight;
  };

  if (!hiddenHeader) {
    // Dibujar encabezados
    drawHeaders();
  }

  // Dibujar filas
  doc.font('Helvetica');
  doc.fillColor(rowTextColor);

  // startY += rowHeight;
  rows.forEach((row, rowIndex) => {
    if (startY + rowHeight + bottomMargin > pageHeight) {
      doc.addPage();
      startY = INITIAL_MARGIN_Y; // Reiniciar posición Y
      // if (!hiddenHeader) {
      //   drawHeaders(); // Dibujar encabezados en la nueva página
      // }
    }

    startX = x;

    columns.forEach((column, index) => {
      const isFieldConstructor = typeof column?.renderField === 'function';
      const width = column?.width ?? (columnWidths?.[index] ?? 30) - 10;
      const isBold = column?.bold;

      doc.rect(startX, startY, width, rowHeight).stroke(); // Dibujar celda

      if (isFieldConstructor) {
        column.renderField(row, {
          x: startX + 5,
          y: startY + 5,
          width: width,
          index: rowIndex,
        });
      } else {
        isBold && doc.font('Helvetica-Bold');
        doc.text(row[column.field], startX + 5, startY + 5, {
          width: width,
        });
        isBold && doc.font('Helvetica');
      }
      startX += width;
    });

    startY += rowHeight;
  });

  return startY;
}
