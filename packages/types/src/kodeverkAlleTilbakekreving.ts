import type {
  BehandlingArsakType,
  BehandlingResultatType,
  BehandlingType,
  SkjermlenkeTypeTilbakekreving,
  VenteArsakType,
  VergeType,
  VurderÅrsak,
} from '@navikt/fp-kodeverk';

import type { TilbakekrevingKodeverkType } from './kodeverkTypeTilbakekreving';

//TODO Ein del av desse kodeverk-filene er delt mellom fpsak og tilbake. Mange av dei har ulike verdiar og bør delast opp i fleire filer

//Mapping mellom KodeverkTypeTilbakekreving og enums/union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  BehandlingResultatType: BehandlingResultatType;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteArsakType;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
};

type KodeverkMedSammeVerditype = {
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
};

export type AlleKodeverkTilbakekreving = KodeverkMedSammeVerditype;

type EnumOrUnknown<T extends TilbakekrevingKodeverkType> = T extends keyof KodeverkEnumMap
  ? KodeverkEnumMap[T]
  : unknown;

export type KodeverkMedNavnTilbakekreving<T extends TilbakekrevingKodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
