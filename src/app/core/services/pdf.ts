import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import { FontsVFS } from '../../fonts/fonts';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfFonts['GaraNormal'] = FontsVFS['GARA.TTF'];
pdfFonts['GaraBold'] = FontsVFS['GARABD.TTF'];

pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  },
  Garamond: {
    normal: 'GaraNormal',
    bold: 'GaraBold',
  },
};
@Injectable({
  providedIn: 'root',
})
export class Pdf {
  private logoBase64!: string;
  async loadLogo(): Promise<string> {
    const resp = await fetch('/bali-asociados-logo.webp');
    const blob = await resp.blob();

    // Convertir a PNG (pdfMake no soporta webp)
    const bitmap = await createImageBitmap(blob);

    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(bitmap, 0, 0);

    return canvas.toDataURL('image/png'); // <- PNG compatible
  }

  async generatePdf(title: string, content: string) {
    this.logoBase64 = await this.loadLogo();

    const documentDefinition: any = {
      pageSize: 'A4',
      pageMargins: [80, 110, 80, 90], // izq, top, der, bottom

      // Cabecera
      header: {
        margin: [80, 60, 80, 40],
        columns: [
          {
            width: '*',
            stack: [
              {
                text: 'BALI ASOCIADOS EN GESTIÓN, S.L.',
                alignment: 'left',
                style: 'headerFirst',
                margin: [0, 0, 0, 10],
              },
              {
                text: 'Cl. Modesto Lafuente, 41 2º B Madrid (28.003)',
                alignment: 'left',
                style: 'headerSecond',
              },
            ],
          },
          {
            image: this.logoBase64,
            width: 120,
            alignment: 'right',
          },
        ],
      },

      // Pie
      footer: (currentPage: number, pageCount: number) => {
        return {
          margin: [40, 20],
          stack: [
            {
              text: 'Bali asociados, inscrita en el RM de Madrid al Tomo: 20.611, Folio: 67, Sección: 8ª Hoja: M364885, CIF: B84133586',
              style: 'footerCenter',
              alignment: 'center',
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
      defaultStyle: {
        fontSize: 11,
        font: 'Garamond',
      },
      styles: {
        headerFirst: { bold: true, lineHeight: 1.5 },
        footerCenter: { fontSize: 8, color: '#231473' },
        footerRight: { fontSize: 8 },
        title: { fontSize: 16, bold: true, margin: [0, 20, 0, 20] },
        content: { lineHeight: 1.5 },
      },
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
