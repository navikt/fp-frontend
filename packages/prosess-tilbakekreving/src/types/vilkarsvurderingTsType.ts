import { Kodeverk } from '@fpsak-frontend/types';

export type AktsomhetInfo = {
  sarligGrunner: Kodeverk[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}

export type VilkarResultatInfo = {
  begrunnelse: string;
  aktsomhet?: Kodeverk;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}

export type VilkarsVurdertPeriode = {
  fom: string;
  tom: string;
  vilkarResultat: Kodeverk;
  begrunnelse: string;
  vilkarResultatInfo: VilkarResultatInfo;
  feilutbetalingBelop?: number;
};

type VilkarsvurderingWrapper = {
  vilkarsVurdertePerioder: VilkarsVurdertPeriode[];
};

export default VilkarsvurderingWrapper;
