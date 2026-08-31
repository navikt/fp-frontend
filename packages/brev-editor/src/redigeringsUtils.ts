import type { OutputData } from '@editorjs/editorjs';
import { generate, parse, walk } from 'css-tree';

import { notEmpty } from '@navikt/fp-utils';

const REMOVE_P_IN_LI_REGEX = /<li([^>]*)>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/g; // Fjern p-tags inni li-tags for å få korrekt styling i editor.js
const ADD_P_IN_LI_REGEX = /<li([^>]*)>(?!\s*<p>)([\s\S]*?)(?!<\/p>)<\/li>/g; // Legg til p-tags inni li-tags for å få korrekt styling i pdf

// Mellomrom skal berre fjernast rundt tags som ikkje er ei opnande lenkje. Tom tag (`<>`) tel ikkje som
// ein tag, slik at teksten blir ståande urørt — same som originalregexen, som kravde minst eitt teikn inni.
const skalBeholdeMellomrom = (tagInnhold: string): boolean => tagInnhold.length === 0 || /^a\s+href/.test(tagInnhold);

// Fjernar mellomrom rundt html-tags (utanom framfor <a href>). Gjer eitt lineært gjennomsyn av strengen
// i staden for regex med \s* på begge sider av ei tag-gruppe, som kan gi super-lineær køyretid ved backtracking.
const fjernMellomromRundtTags = (html: string): string => {
  let resultat = '';
  let posisjon = 0;

  while (posisjon < html.length) {
    const tagStart = html.indexOf('<', posisjon);
    const tagEnd = tagStart === -1 ? -1 : html.indexOf('>', tagStart);

    if (tagStart === -1 || tagEnd === -1) {
      resultat += html.slice(posisjon);
      break;
    }

    const tagInnhold = html.slice(tagStart + 1, tagEnd);

    if (skalBeholdeMellomrom(tagInnhold)) {
      resultat += html.slice(posisjon, tagEnd + 1);
      posisjon = tagEnd + 1;
    } else {
      resultat += html.slice(posisjon, tagStart).trimEnd() + html.slice(tagStart, tagEnd + 1);

      let etterTag = tagEnd + 1;
      while (etterTag < html.length && /\s/.test(html[etterTag]!)) {
        etterTag += 1;
      }
      posisjon = etterTag;
    }
  }

  return resultat;
};

const fjernMellomromOgPTagsILiTags = (html: string): string =>
  fjernMellomromRundtTags(html).replaceAll(REMOVE_P_IN_LI_REGEX, '<li$1>$2</li>');

export const leggTilPTagsILiTags = (html: string): string => html.replaceAll(ADD_P_IN_LI_REGEX, '<li$1><p>$2</p></li>');

export const lagRedigerbartInnholdWrapper = (redigerbartInnhold: string, readonlyFooter: string | undefined) =>
  `<div id="redigerbart-innhold" data-editable="data-editable">${leggTilPTagsILiTags(
    redigerbartInnhold,
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
          case 'ClassSelector': {
            node.name = `brev-wrapper .${node.name}`;
            break;
          }
          case 'IdSelector': {
            node.name = `brev-wrapper #${node.name}`;
            break;
          }
          case 'TypeSelector': {
            node.name = `brev-wrapper ${node.name}`;
            break;
          }
          default: {
            break;
          }
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
  const footer = heleBrevet.getElementById('readonly-innhold')?.innerHTML;

  return { navLogo, header, footer };
};

export const utledRedigerbartInnhold = (html: string): string => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');

  const editerbartInnhold = notEmpty(
    heleBrevet.querySelector('[data-editable]')?.innerHTML,
    'Redigerbart innhold finnes ikke i mal',
  );

  return fjernMellomromOgPTagsILiTags(editerbartInnhold);
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
export const konverterHtmlToEditorJsFormat = (html: string): OutputData => {
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
        case 'h2': {
          blocks.push({
            type: 'header',
            data: { text: element.innerHTML, level: Number.parseInt(element.tagName[1]!) },
          });
          break;
        }
        case 'p': {
          blocks.push({ type: 'paragraph', data: { text: element.innerHTML } });
          break;
        }
        case 'ul': {
          blocks.push({
            type: 'list',
            data: { style: 'unordered', items: Array.from(element.querySelectorAll('li')).map(li => li.innerHTML) },
          });
          break;
        }
        default: {
          for (const child of node.childNodes) {
            processNode(child);
          }
        }
      }
    }
  };

  for (const child of doc.body.childNodes) {
    processNode(child);
  }

  return { time: Date.now(), blocks, version: '2.30.8' };
};
