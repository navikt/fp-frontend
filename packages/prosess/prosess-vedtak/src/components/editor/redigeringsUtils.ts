import { generate, parse, walk } from 'css-tree';

export const utledStiler = (html: string) => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');
  const stiler = heleBrevet.querySelector('style')?.innerHTML;

  if (!stiler) {
    throw new Error('Fant ikke stiler i brevet');
  }

  const styleAst = parse(stiler);

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

export const utledReadonlyInnhold = (html: string) => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');
  const navLogo = heleBrevet.getElementById('logo')?.innerHTML ?? '';
  const header = heleBrevet.getElementById('header')?.innerHTML ?? '';
  const footer = heleBrevet.getElementById('readonly-innhold')?.innerHTML ?? '';
  return { navLogo, header, footer };
};

export const utledRedigerbartInnhold = (html: string) => {
  const heleBrevet = new DOMParser().parseFromString(html, 'text/html');
  return heleBrevet.querySelector('[data-editable]')?.innerHTML;
};

export const erRedigertHtmlGyldig = (html: string) => {
  if (html.trim() === '' && html.trim().length < 50) {
    return false;
  }
  const doc = document.createElement('div');
  doc.innerHTML = html;
  return doc.innerHTML === html;
};
