import type { BehandlingType, VurderÅrsak } from '../index';
import type { HistorikkAktør } from '../historikkinnslagTsType';
import type { TilbakekrevingVidereBehandling } from '../tilbakekrevingVidereBehandling';
import type { VergeType } from '../vergeTsType';
import type { Aktsomhet } from './aktsomhet';
import type { BehandlingÅrsakTypeFpTilbake } from './behandlingÅrsakTypeFpTilbake';
import type { BehandlingResultatTypeFpTilbake } from './behandlingResultatTypeFpTilbake';
import type { ForeldelseVurderingType } from './foreldelseVurderingType';
import type { HendelseType } from './hendelseType';
import type { HendelseUnderType } from './hendelseUnderType';
import type { SærligGrunn } from './særligGrunn';
import type { SkjermlenkeTypeTilbakekreving } from './skjermlenkeTypeTilbakekreving';
import type { VedtakResultatType } from './vedtakResultatType';
import type { VenteÅrsakTypeFpTilbake } from './venteÅrsakTypeFpTilbake';
import type { VilkårResultat } from './vilkårResultat';

//TODO Ein del av desse kodeverk-filene er delt mellom fpsak og tilbake. Mange av dei har ulike verdiar og bør delast opp i fleire filer

//Mapping mellom KodeverkTypeTilbakekreving og union-types med verdier
type KodeverkEnumMap = {
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingÅrsakTypeFpTilbake;
  BehandlingResultatType: BehandlingResultatTypeFpTilbake;
  HistorikkAktør: HistorikkAktør;
  SkjermlenkeType: SkjermlenkeTypeTilbakekreving;
  Venteårsak: VenteÅrsakTypeFpTilbake;
  VurderÅrsak: VurderÅrsak;
  VergeType: VergeType;
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkårResultat;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
  ForeldelseVurderingType: ForeldelseVurderingType;
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
}>;
