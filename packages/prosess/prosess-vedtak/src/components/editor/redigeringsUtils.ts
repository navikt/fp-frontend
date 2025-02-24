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

export const utledSeksjonerSomKanRedigeres = (html: string) => {
  const heleBrevet = new DOMParser().parseFromString(html, 'application/xhtml+xml');
  return Array.from(heleBrevet.querySelectorAll('body > *, section > *'));
};

export const utledPrefiksInnhold = (seksjoner: Element[]) => htmlForRedigerbartFelt(seksjoner).join('');

export const utledSuffiksInnhold = (seksjoner: Element[]) =>
  htmlForRedigerbartFelt(seksjoner.reverse()).reverse().join('');

export const utledRedigerbartInnhold = (html: string) => {
  // Bruker application/xhtml+xml som datatype, da backend bruker en xhtml parser som
  // ikke støtter feks. <br> som ikke er self-closing (<br/>)
  const heleBrevet = new DOMParser().parseFromString(html, 'application/xhtml+xml');
  return heleBrevet?.querySelector('[data-editable]')?.innerHTML;
};

const htmlForRedigerbartFelt = (elementer: Element[]) => {
  let funnetRedigerbartInnhold = false;
  const prefiks = new Array<string>();
  elementer.forEach(el => {
    if (el.hasAttribute('data-editable')) {
      funnetRedigerbartInnhold = true;
    } else if (!funnetRedigerbartInnhold && !el.hasAttribute('data-hidden')) {
      prefiks.push(el.outerHTML);
    }
  });
  return prefiks;
};

export const erRedigertHtmlGyldig = (html: string) => {
  const innholdet = document.createElement('div');
  innholdet.innerHTML = html;
  const tekst = innholdet.textContent || innholdet.innerText || '';
  //FIXME Feiltekster
  const malInnholdStrenger = ['Fyll inn overskrift', 'Fyll inn brevtekst'];
  const regex = new RegExp(malInnholdStrenger.join('|'), 'gi');
  return !regex.test(tekst);
};
