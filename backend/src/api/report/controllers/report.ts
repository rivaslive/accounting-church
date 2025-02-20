import { factories } from '@strapi/strapi';
import dayjs from 'dayjs';
import esEs from 'dayjs/locale/es';
import fs from 'fs';
import path from 'path';
import { CreateTreasuryReport } from '../../../pdf/create-report';

dayjs.locale(esEs);

export default factories.createCoreController(
  'api::report.report',
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;

      try {
        // 1️⃣ Generar el reporte PDF
        const Report = new CreateTreasuryReport(strapi, dayjs(data.date));
        const pdfPath = await Report.create();

        // 2️⃣ Crear el reporte en Strapi sin archivo aún
        const report = await strapi.entityService.create('api::report.report', {
          data,
        });

        // 3️⃣ Verificar que el archivo existe
        if (!fs.existsSync(pdfPath)) {
          ctx.throw(500, 'Error: No se pudo generar el PDF');
        }

        // 4️⃣ Leer el archivo PDF
        const fileStat = fs.statSync(pdfPath);
        const fileName = path.basename(pdfPath);

        // 5️⃣ Subir el archivo a Strapi usando el servicio de `upload`
        const uploadedFiles =
          await strapi.plugins.upload.services.upload.upload({
            data: {
              fileInfo: {
                name: fileName,
                alternativeText: 'Reporte generado automáticamente',
                caption: 'Reporte PDF',
              },
            },
            files: {
              path: pdfPath, // Ruta del archivo en el sistema
              name: fileName,
              type: 'application/pdf',
              size: fileStat.size,
            },
          });

        if (!uploadedFiles || uploadedFiles.length === 0) {
          ctx.throw(500, 'Error al subir el archivo PDF');
        }

        // 6️⃣ Obtener el ID del archivo subido y actualizar el `report`
        const fileId = uploadedFiles[0].id;

        await strapi.entityService.update('api::report.report', report.id, {
          data: {
            state: 'active',
            files: fileId, // Asociar el archivo al campo `files`
          },
        });

        // 7️⃣ Retornar la respuesta con el reporte actualizado
        ctx.send({ report });
      } catch (error) {
        console.error(`Error creating report: ${error.message}`);
        ctx.throw(500, error?.message ?? 'Failed to create report');
      }
    },
  }),
);
