import type { foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak } from '../fpsak.gen.ts';
import type { VergeType } from '../index';

export type BekreftetTilbakekrevingAksjonspunktDto = (
  | ({ kode: '5030' } & AvklarVergeDto)
  | ({ kode: '5005' } & FatterVedtakAksjonspunktDto)
) & {
  begrunnelse?: string;
  kode: string;
};

export type AvklarVergeDto = {
  begrunnelse?: string;
  fnr?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  navn?: string;
  organisasjonsnummer?: string;
  vergeType: VergeType;
};

export type FatterVedtakAksjonspunktDto = {
  aksjonspunktGodkjenningDtos?: Array<AksjonspunktGodkjenningDto>;
  begrunnelse?: string;
};

export type AksjonspunktGodkjenningDto = {
  aksjonspunktKode?: string;
  arsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  begrunnelse?: string;
  godkjent?: boolean;
};
