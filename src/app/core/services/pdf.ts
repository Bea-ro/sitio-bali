import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts;

@Injectable({
  providedIn: 'root',
})
export class Pdf {
  generatePdf(title: string, content: string) {
    const documentDefinition: any = {
      pageSize: 'A4',
      pageMargins: [40, 100, 40, 80], // izq, top, der, bottom

      // Cabecera
      header: {
        margin: [40, 40],
        columns: [
          {
            text: 'BALI ASOCIADOS EN GESTIÓN, S.L.',
            alignment: 'left',
            style: 'headerFirst',
            margin: [0, 25, 0, 0],
          },
          {
            text: 'Cl. Modesto Lafuente, 41 2º B Madrid (28.003)',
            alignment: 'left',
            style: 'headerSecond',
            margin: [0, 25, 0, 0],
          },
          // {
          //   image: 'data:image/png;base64,...',
          //   width: 120,
          // },
        ],
      },

      // Pie
      footer: (currentPage: number, pageCount: number) => {
        return {
          margin: [40, 20],
          columns: [
            {
              text: 'Bali asociados, inscrita en el RM de Madrid al Tomo: 20.611, Folio: 67, Sección: 8ª Hoja: M364885, CIF: B84133586',
              style: 'footerLeft',
            },
            {
              text: `${currentPage}/${pageCount}`,
              alignment: 'right',
              style: 'footerRight',
            },
          ],
        };
      },

      content: [
        { text: title, style: 'title' },
        { text: content, style: 'content' },
      ],

      styles: {
        headerFirst: { fontSize: 11, bold: true },
        headerSecond: { fontSize: 11 },
        footerLeft: { fontSize: 8 },
        footerRight: { fontSize: 8 },
        title: { fontSize: 16, bold: true, margin: [0, 20, 0, 20] },
        content: { fontSize: 11, lineHeight: 1.4 },
      },
    };

    pdfMake.createPdf(documentDefinition).download(`${title}.pdf`);
  }
}
