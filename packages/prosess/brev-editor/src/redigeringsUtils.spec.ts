import { describe, expect, it } from 'vitest';

import {
  erRedigertHtmlGyldig,
  konverterHtmlToEditorJsFormat,
  lagRedigerbartInnholdWrapper,
  leggTilPTagsILiTags,
  utledDelerFraBrev,
  utledRedigerbartInnhold,
  utledStiler,
} from './redigeringsUtils';

const lagBrevHtml = ({
  logo = '<img src="nav-logo.png" alt="NAV" />',
  header = '<h1>Vedtak om foreldrepenger</h1>',
  redigerbartInnhold = '<p>Dette er innholdet i brevet.</p>',
  readonlyInnhold = '<p>Med vennlig hilsen NAV</p>',
  stiler = 'body { font-family: Arial; } .overskrift { margin-top: 48pt; } #header { margin-top: 26pt; }',
} = {}) => `
<html>
  <head>
    <style>${stiler}</style>
  </head>
  <body>
    <div id="logo">${logo}</div>
    <div id="header">${header}</div>
    <div id="redigerbart-innhold" data-editable="data-editable">${redigerbartInnhold}</div>
    <div id="readonly-innhold">${readonlyInnhold}</div>
  </body>
</html>
`;

describe('leggTilPTagsILiTags', () => {
  it('skal legge til p-tags inni li-tags som mangler dem', () => {
    const html = '<ul><li>Punkt 1</li><li>Punkt 2</li></ul>';
    const result = leggTilPTagsILiTags(html);
    expect(result).toBe('<ul><li><p>Punkt 1</p></li><li><p>Punkt 2</p></li></ul>');
  });

  it('skal ikke legge til p-tags inni li-tags som allerede har dem', () => {
    const html = '<ul><li><p>Punkt 1</p></li></ul>';
    const result = leggTilPTagsILiTags(html);
    expect(result).toBe('<ul><li><p>Punkt 1</p></li></ul>');
  });

  it('skal håndtere li-tags med attributter', () => {
    const html = '<ul><li class="item">Punkt</li></ul>';
    const result = leggTilPTagsILiTags(html);
    expect(result).toBe('<ul><li class="item"><p>Punkt</p></li></ul>');
  });

  it('skal returnere uendret tekst uten li-tags', () => {
    const html = '<p>Vanlig avsnitt</p>';
    expect(leggTilPTagsILiTags(html)).toBe(html);
  });
});

describe('lagRedigerbartInnholdWrapper', () => {
  it('skal pakke inn innhold i redigerbart-innhold og readonly-innhold wrapper', () => {
    const result = lagRedigerbartInnholdWrapper('<p>Innhold</p>', '<p>Footer</p>');
    expect(result).toContain('<div id="redigerbart-innhold" data-editable="data-editable">');
    expect(result).toContain('<div id="readonly-innhold">');
    expect(result).toContain('<p>Innhold</p>');
    expect(result).toContain('<p>Footer</p>');
  });

  it('skal bruke tom string for readonly-innhold når footer er undefined', () => {
    const result = lagRedigerbartInnholdWrapper('<p>Innhold</p>', undefined);
    expect(result).toContain('<div id="readonly-innhold"></div>');
  });

  it('skal legge til p-tags i li-tags i redigerbart innhold', () => {
    const result = lagRedigerbartInnholdWrapper('<ul><li>Punkt</li></ul>', undefined);
    expect(result).toContain('<li><p>Punkt</p></li>');
  });
});

describe('erRedigertHtmlGyldig', () => {
  it('skal returnere false for html kortere enn 50 tegn', () => {
    expect(erRedigertHtmlGyldig('<p>Kort</p>')).toBe(false);
  });

  it('skal returnere true for gyldig html med tilstrekkelig lengde', () => {
    const html = '<p>Dette er et langt nok avsnitt som passerer minimumsgrensen på femti tegn.</p>';
    expect(erRedigertHtmlGyldig(html)).toBe(true);
  });

  it('skal returnere false for tom streng', () => {
    expect(erRedigertHtmlGyldig('')).toBe(false);
  });

  it('skal returnere false for streng med bare whitespace', () => {
    expect(erRedigertHtmlGyldig('   ')).toBe(false);
  });
});

describe('konverterHtmlToEditorJsFormat', () => {
  it('skal konvertere p-tags til paragraph-blokker', () => {
    const html = '<p>Første avsnitt</p><p>Andre avsnitt</p>';
    const result = konverterHtmlToEditorJsFormat(html);
    expect(result.blocks).toHaveLength(2);
    expect(result.blocks[0]).toEqual({ type: 'paragraph', data: { text: 'Første avsnitt' } });
    expect(result.blocks[1]).toEqual({ type: 'paragraph', data: { text: 'Andre avsnitt' } });
  });

  it('skal konvertere h1 til header-blokk med level 1', () => {
    const html = '<h1>Overskrift</h1>';
    const result = konverterHtmlToEditorJsFormat(html);
    expect(result.blocks).toHaveLength(1);
    expect(result.blocks[0]).toEqual({ type: 'header', data: { text: 'Overskrift', level: 1 } });
  });

  it('skal konvertere h2 til header-blokk med level 2', () => {
    const html = '<h2>Underoverskrift</h2>';
    const result = konverterHtmlToEditorJsFormat(html);
    expect(result.blocks[0]).toEqual({ type: 'header', data: { text: 'Underoverskrift', level: 2 } });
  });

  it('skal konvertere ul til list-blokk med unordered stil', () => {
    const html = '<ul><li><p>Punkt 1</p></li><li><p>Punkt 2</p></li></ul>';
    const result = konverterHtmlToEditorJsFormat(html);
    expect(result.blocks).toHaveLength(1);
    expect(result.blocks[0]).toEqual({
      type: 'list',
      data: {
        style: 'unordered',
        items: ['<p>Punkt 1</p>', '<p>Punkt 2</p>'],
      },
    });
  });

  it('skal konvertere blandet HTML med p, h2 og ul', () => {
    const html = '<h2>Tittel</h2><p>Avsnitt</p><ul><li>Punkt</li></ul>';
    const result = konverterHtmlToEditorJsFormat(html);
    expect(result.blocks).toHaveLength(3);
    expect(result.blocks[0]!.type).toBe('header');
    expect(result.blocks[1]!.type).toBe('paragraph');
    expect(result.blocks[2]!.type).toBe('list');
  });

  it('skal returnere en OutputData-struktur med version og time', () => {
    const result = konverterHtmlToEditorJsFormat('<p>Tekst</p>');
    expect(result.version).toBeDefined();
    expect(result.time).toBeDefined();
    expect(Array.isArray(result.blocks)).toBe(true);
  });

  it('skal returnere tom blokk-liste for tom HTML', () => {
    const result = konverterHtmlToEditorJsFormat('');
    expect(result.blocks).toHaveLength(0);
  });
});

describe('utledDelerFraBrev', () => {
  it('skal hente ut navLogo, header og footer fra brev HTML', () => {
    const html = lagBrevHtml({
      logo: '<img src="nav.png" />',
      header: '<h1>Vedtak</h1>',
      readonlyInnhold: '<p>Footer tekst</p>',
    });

    const { navLogo, header, footer } = utledDelerFraBrev(html);

    expect(navLogo).toContain('nav.png');
    expect(header).toContain('Vedtak');
    expect(footer).toContain('Footer tekst');
  });

  it('skal kaste feil om logo-element mangler', () => {
    const html = '<html><body><div id="header"><h1>H</h1></div><div id="readonly-innhold"><p>F</p></div></body></html>';
    expect(() => utledDelerFraBrev(html)).toThrow('Nav-logo finnes ikke i mal');
  });

  it('skal kaste feil om header-element mangler', () => {
    const html = '<html><body><div id="logo"><img /></div><div id="readonly-innhold"><p>F</p></div></body></html>';
    expect(() => utledDelerFraBrev(html)).toThrow('Header finnes ikke i mal');
  });

  it('skal returnere undefined footer om readonly-innhold mangler', () => {
    const html = '<html><body><div id="logo"><img /></div><div id="header"><h1>H</h1></div></body></html>';
    const { footer } = utledDelerFraBrev(html);
    expect(footer).toBeUndefined();
  });
});

describe('utledRedigerbartInnhold', () => {
  it('skal hente ut redigerbart innhold fra brev HTML', () => {
    const html = lagBrevHtml({ redigerbartInnhold: '<p>Redigerbart innhold</p>' });
    const result = utledRedigerbartInnhold(html);
    expect(result).toContain('Redigerbart innhold');
  });

  it('skal inkludere readonly-innhold når inkluderReadonlyInnhold er true', () => {
    const html = lagBrevHtml({
      redigerbartInnhold: '<p>Redigerbart</p>',
      readonlyInnhold: '<p>Readonly</p>',
    });

    const result = utledRedigerbartInnhold(html, true);
    expect(result).toContain('Redigerbart');
    expect(result).toContain('Readonly');
  });

  it('skal ikke inkludere readonly-innhold når inkluderReadonlyInnhold er false (standard)', () => {
    const html = lagBrevHtml({
      redigerbartInnhold: '<p>Redigerbart</p>',
      readonlyInnhold: '<p>KunReadonly</p>',
    });

    const result = utledRedigerbartInnhold(html);
    expect(result).not.toContain('KunReadonly');
  });

  it('skal kaste feil om verken data-editable eller #content finnes', () => {
    const html = '<html><body><p>Ingen editable div</p></body></html>';
    expect(() => utledRedigerbartInnhold(html)).toThrow('Redigerbart innhold finnes ikke i mal');
  });

  it('skal bruke #content minus #header som fallback når data-editable mangler (opprinneligHtml)', () => {
    const html = `
      <html><body>
        <div id="logo"><img /></div>
        <div id="content">
          <div id="header"><table>...</table></div>
          <h1>Vedtakstekst</h1>
          <p>Innhold i brev</p>
        </div>
      </body></html>`;
    const result = utledRedigerbartInnhold(html);
    expect(result).toContain('Vedtakstekst');
    expect(result).toContain('Innhold i brev');
    expect(result).not.toContain('id="header"');
  });

  it('skal fjerne mellomrom og p-tags inni li-tags', () => {
    const html = lagBrevHtml({ redigerbartInnhold: '<ul><li><p>Punkt</p></li></ul>' });
    const result = utledRedigerbartInnhold(html);
    expect(result).toContain('<li>Punkt</li>');
    expect(result).not.toContain('<li><p>Punkt</p></li>');
  });
});

describe('utledStiler', () => {
  it('skal hente ut og transformere CSS-stiler fra brev HTML', () => {
    const html = lagBrevHtml({ stiler: 'body { font-family: Arial; }' });
    const result = utledStiler(html);
    expect(result).toContain('brev-wrapper');
    expect(result).not.toContain('body');
  });

  it('skal fjerne margin-top: 48pt og erstatte med 0pt', () => {
    const html = lagBrevHtml({ stiler: '.overskrift { margin-top: 48pt; }' });
    const result = utledStiler(html);
    expect(result).not.toContain('48pt');
    expect(result).toContain('0pt');
  });

  it('skal fjerne margin-top: 26pt og erstatte med 0pt', () => {
    const html = lagBrevHtml({ stiler: '#header { margin-top: 26pt; }' });
    const result = utledStiler(html);
    expect(result).not.toContain('26pt');
    expect(result).toContain('0pt');
  });

  it('skal scope klasse-selektorer til brev-wrapper', () => {
    const html = lagBrevHtml({ stiler: '.minKlasse { color: red; }' });
    const result = utledStiler(html);
    expect(result).toContain('brev-wrapper');
  });

  it('skal kaste feil om style-element mangler i HTML', () => {
    const html = '<html><body><p>Ingen stiler</p></body></html>';
    expect(() => utledStiler(html)).toThrow('Fant ikke stiler i brevet');
  });
});
