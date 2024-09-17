import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { toTitleCapitalization } from './stringUtils';

export const getLandnavnFraLandkode = (landKode: string | null, alleKodeverk: AlleKodeverk) => {
  const landnavn = alleKodeverk[KodeverkType.LANDKODER].find(kv => kv.kode == landKode)?.navn;
  return landnavn ? toTitleCapitalization(landnavn) : undefined;
};
