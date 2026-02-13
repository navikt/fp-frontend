import type { Driftsmelding } from '../src/typer/driftsmeldingTsType';

export const driftsmeldinger: Driftsmelding[] = [
  {
    id: '1',
    melding:
      'Vi opplever for tiden problemer med tilbakekreving. Vi jobber med å løse problemet så raskt ' +
      'som mulig, og beklager eventuelle ulemper dette måtte medføre.',
  },
  {
    id: '2',
    melding:
      'Varsel om planlagt nedetid\n' +
      'Torsdag 12.01.2024 kl. 18:00 - 19:00  blir det nedetid på saksbehandlingsløsningen. ' +
      'Dette skyldes vedlikehold og oppgradering av systemet. Saksbehandlingsløsningen vil ikke ' +
      'være tilgjengelig i denne perioden, og det vil heller ikke være mulig å logge inn før nedetiden ' +
      'er over. Vi beklager eventuelle ulemper dette måtte medføre, og takker for forståelsen.',
  },
];
