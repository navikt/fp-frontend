import type { ForeslaVedtakTilbakekrevingAp } from '@navikt/ft-prosess-tilbakekreving-vedtak';

import type { AksjonspunktKode, OverstyringKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse, OverstyringAksjonspunktTilBekreftelse } from './AksjonspunktTilBekreftelse';

export type ProsessAksjonspunkt =
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLÅ_VEDTAK>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_INNSYN>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FEILUTBETALING>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_KLAGE_NFP>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VARSEL_REVURDERING_MANUELL>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_UTTAKPERIODER>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK>
  // Overstyring
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.SØKERS_OPPLYSNINGSPLIKT_OVST>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_FØDSELSVILKÅRET>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_UTTAKPERIODER>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>
  // Tilbakekreving (ekstern pakke)
  | ForeslaVedtakTilbakekrevingAp;
