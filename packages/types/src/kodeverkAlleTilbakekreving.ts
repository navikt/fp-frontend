import {
  type Aktsomhet,
  BehandlingArsakTypeEnum,
  type BehandlingResultatTypeTilbakekreving,
  type BehandlingType,
  ForeldelseVurderingType,
  type HendelseType,
  type HendelseUnderType,
  type HistorikkAktor,
  type SærligGrunn,
  type SkjermlenkeTypeTilbakekreving,
  TilbakekrevingVidereBehandling,
  VedtakResultatType,
  type VenteArsakType,
  type VilkårResultat,
  type VurderÅrsak,
} from '@navikt/fp-kodeverk';

import type { VergeType } from './vergeTsType';

//TODO Ein del av desse kodeverk-filene er delt mellom fpsak og tilbake. Mange av dei har ulike verdiar og bør delast opp i fleire filer

//Mapping mellom KodeverkTypeTilbakekreving og enums/union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  BehandlingResultatType: BehandlingResultatTypeTilbakekreving;
  HistorikkAktør: HistorikkAktor;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteArsakType;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  ForeldelseVurderingType: ForeldelseVurderingType;
  VilkårResultat: VilkårResultat;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
};

export type TilbakekrevingKodeverkType = keyof KodeverkEnumMap;

export type AlleKodeverkTilbakekreving = {
  [K in TilbakekrevingKodeverkType]: KodeverkMedNavnTilbakekreving<
    K extends TilbakekrevingKodeverkType ? K : unknown
  >[];
};

type EnumOrUnknown<T extends TilbakekrevingKodeverkType> = T extends keyof KodeverkEnumMap
  ? KodeverkEnumMap[T]
  : unknown;

export type KodeverkMedNavnTilbakekreving<T extends TilbakekrevingKodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
