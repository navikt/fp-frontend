import type { OutputData } from '@editorjs/editorjs';
import { generate, parse, walk } from 'css-tree';

import { notEmpty } from '@navikt/fp-utils';

export const lagRedigerbartInnholdWrapper = (redigerbartInnhold: string, readonlyFooter: string | undefined) =>
  `<div id="redigerbart-innhold" data-editable="data-editable">${redigerbartInnhold.replaceAll(
    '<br>',
    '<br />',
  )}</div><div id="readonly-innhold">${readonlyFooter ?? ''}</div>`;

export const utledStiler = (html: string) => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');
  const stiler = heleBrevet.querySelector('style')?.innerHTML;
  const stilerMedJustertHeader = stiler
    ?.replaceAll('margin-top: 48pt', 'margin-top: 0pt')
    .replaceAll('margin-top: 26pt', 'margin-top: 0pt');

  if (!stilerMedJustertHeader) {
    throw new Error('Fant ikke stiler i brevet');
  }

  const styleAst = parse(stilerMedJustertHeader);

  walk(styleAst, (nodeRef, item, list) => {
    const node = nodeRef;
    if (node.type === 'Atrule' && node.name === 'page') list.remove(item);
    if (['ClassSelector', 'IdSelector', 'TypeSelector'].includes(node.type)) {
      if ('name' in node && node.name === 'body') {
        node.name = 'brev-wrapper';
      } else {
        switch (node.type) {
          case 'ClassSelector':
            node.name = `brev-wrapper .${node.name}`;
            break;
          case 'IdSelector':
            node.name = `brev-wrapper #${node.name}`;
            break;
          case 'TypeSelector':
            node.name = `brev-wrapper ${node.name}`;
            break;
          default:
            break;
        }
      }
      node.type = 'ClassSelector';
    }
  });

  return generate(styleAst);
};

export const utledDelerFraBrev = (html: string) => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');
  const navLogo = notEmpty(heleBrevet.getElementById('logo')?.innerHTML, 'Nav-logo finnes ikke i mal');
  const header = notEmpty(heleBrevet.getElementById('header')?.innerHTML, 'Header finnes ikke i mal');
  const footer = notEmpty(
    heleBrevet.getElementById('readonly-innhold')?.innerHTML,
    'Readonly-innhold finnes ikke i mal',
  );

  return { navLogo, header, footer };
};

export const utledRedigerbartInnhold = (html: string, harPraksisUtsettelse: boolean): string => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');

  const editertbartInnhold = notEmpty(
    heleBrevet.querySelector('[data-editable]')?.innerHTML,
    'Redigerbart innhold finnes ikke i mal',
  );

  if (harPraksisUtsettelse) {
    return (
      editertbartInnhold +
      notEmpty(heleBrevet.getElementById('readonly-innhold')?.innerHTML, 'Readonly-innhold finnes ikke i mal')
    );
  }

  return editertbartInnhold;
};

export const erRedigertHtmlGyldig = (html: string): boolean => {
  if (html.trim().length < 50) {
    return false;
  }
  const doc = document.createElement('div');
  doc.innerHTML = html;
  return doc.innerHTML === html;
};

// renderFromHTML frå editorjs håndterar ikkje br-tags korrekt. Såg dessutan ein kommentar på at den ikkje burde brukast i produksjonskode
export const htmlToEditorJsFormat = (html: string): OutputData => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const blocks: OutputData['blocks'] = [];

  const processNode = (node: Node): void => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      blocks.push({ type: 'paragraph', data: { text: node.textContent.trim() } });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      switch (element.tagName.toLowerCase()) {
        case 'h1':
        case 'h2':
          blocks.push({ type: 'header', data: { text: element.innerHTML, level: parseInt(element.tagName[1]) } });
          break;
        case 'p':
          blocks.push({ type: 'paragraph', data: { text: element.innerHTML } });
          break;
        case 'ul':
          blocks.push({
            type: 'list',
            data: { style: 'unordered', items: Array.from(element.querySelectorAll('li')).map(li => li.innerHTML) },
          });
          break;
        default:
          node.childNodes.forEach(processNode);
      }
    }
  };

  doc.body.childNodes.forEach(processNode);

  return { time: Date.now(), blocks, version: '2.30.8' };
};
