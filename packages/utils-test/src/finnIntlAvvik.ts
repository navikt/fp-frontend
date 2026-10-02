import { globSync, readFileSync } from 'node:fs';
import * as ts from 'typescript';

import { extractMessageIds } from './extractMessageIds';

interface Valg {
  kildefiler?: string;
  ignorer?: string[];
}

interface IntlAvvik {
  manglerIFil: string[];
  ubrukteNøkler: string[];
}

/**
 * Nøkler regnes som brukt hvis de finnes som streng-literal i koden (dekker id-er som sendes rundt
 * i variabler, maps og union-typer), eller starter med den statiske starten av en template-literal
 * (dekker `` `Prefiks.${kode}` ``).
 */
export const finnIntlAvvik = (
  meldinger: Record<string, string>,
  { kildefiler = 'src/**/*.{ts,tsx}', ignorer = [] }: Valg = {},
): IntlAvvik => {
  const filer = globSync(kildefiler);
  const nøkler = Object.keys(meldinger);
  const { literaler, prefikser } = finnStrengerIKode(filer);
  const ignorerte = new Set(ignorer);

  const manglerIFil = extractMessageIds(filer).filter(id => !(id in meldinger));
  const ubrukteNøkler = nøkler.filter(
    nøkkel =>
      !ignorerte.has(nøkkel) && !literaler.has(nøkkel) && !prefikser.some(prefiks => nøkkel.startsWith(prefiks)),
  );

  return { manglerIFil, ubrukteNøkler };
};

const finnStrengerIKode = (filer: string[]) => {
  const literaler = new Set<string>();
  const prefikser = new Set<string>();

  const besøk = (node: ts.Node): void => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      literaler.add(node.text);
    } else if (ts.isTemplateExpression(node) && node.head.text !== '') {
      prefikser.add(node.head.text);
    }
    ts.forEachChild(node, besøk);
  };

  for (const fil of filer) {
    const scriptKind = fil.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    besøk(ts.createSourceFile(fil, readFileSync(fil, 'utf8'), ts.ScriptTarget.Latest, true, scriptKind));
  }

  return { literaler, prefikser: [...prefikser] };
};
