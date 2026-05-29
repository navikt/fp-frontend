import type { AvklartFaktaFeilutbetalingAp } from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';

import { type AksjonspunktKode, AksjonspunktKodeTilbakekreving, OverstyringKode } from '@navikt/fp-kodeverk';

import type {
  AksjonspunktTilBekreftelse,
  OverstyringAksjonspunktTilBekreftelse,
  TilbakekrevingAksjonspunktTilBekreftelse,
} from './AksjonspunktTilBekreftelse';

export type FaktaAksjonspunkt =
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_VERGE>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AUTOMATISK_MARKERING_AV_UTENLANDSSAK>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_AKTIVITETER>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FAKTA_FOR_ATFL_SN>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_TERMINBEKREFTELSE>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_DEKNINGSGRAD>
  | AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE>

  // Overstyring
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_FAKTA_UTTAK>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_AVKLART_STARTDATO>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_DEKNINGSGRAD>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_RETT_OG_OMSORG>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART>
  // Tilbakekreving
  | TilbakekrevingAksjonspunktTilBekreftelse<AksjonspunktKodeTilbakekreving.AVKLAR_VERGE>
  | AvklartFaktaFeilutbetalingAp;
