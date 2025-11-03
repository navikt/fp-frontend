import type { SkjermlenkeType, SkjermlenkeTypeFpTilbake } from '@navikt/fp-types';

import { FaktaPanelCode } from './faktaPanelCodes';
import { ProsessStegCode } from './prosessStegCodes';

type SkjermlenkeDataFpSak = Record<
  SkjermlenkeType,
  { faktaNavn: FaktaPanelCode | ''; punktNavn: ProsessStegCode | '' }
>;
type SkjermlenkeDataFpTilbake = Record<
  SkjermlenkeTypeFpTilbake,
  { faktaNavn: FaktaPanelCode | ''; punktNavn: ProsessStegCode | '' }
>;

const skjermlenkeCodesFpsak: SkjermlenkeDataFpSak = {
  BEREGNING_ENGANGSSTOENAD: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.BEREGNING,
  },
  BEREGNING_FORELDREPENGER: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.BEREGNINGSGRUNNLAG,
  },
  BESTEBEREGNING: {
    faktaNavn: FaktaPanelCode.BESTEBEREGNING,
    punktNavn: ProsessStegCode.DEFAULT,
  },
  FAKTA_OM_ARBEIDSFORHOLD_PERMISJON: {
    faktaNavn: FaktaPanelCode.ARBEIDSFORHOLD,
    punktNavn: '',
  },
  FAKTA_OM_BEREGNING: {
    faktaNavn: FaktaPanelCode.BEREGNING,
    punktNavn: '',
  },
  FAKTA_OM_FOEDSEL: {
    faktaNavn: FaktaPanelCode.FODSELSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_FORDELING: {
    faktaNavn: FaktaPanelCode.FORDELING,
    punktNavn: '',
  },
  FAKTA_OM_MEDLEMSKAP: {
    faktaNavn: FaktaPanelCode.MEDLEMSKAPSVILKARET,
    punktNavn: '',
  },
  FAKTA_FOR_OMSORG: {
    faktaNavn: FaktaPanelCode.OMSORG,
    punktNavn: '',
  },
  FAKTA_FOR_OPPTJENING: {
    faktaNavn: FaktaPanelCode.OPPTJENINGSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_OPPTJENING: {
    faktaNavn: FaktaPanelCode.OPPTJENINGSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_OMSORGSOVERTAKELSE: {
    faktaNavn: FaktaPanelCode.OMSORGSOVERTAKELSE,
    punktNavn: '',
  },
  FAKTA_OM_ARBEIDSFORHOLD: {
    faktaNavn: FaktaPanelCode.ARBEIDSFORHOLD,
    punktNavn: '',
  },
  FAKTA_OM_AKTIVITETSKRAV: {
    faktaNavn: FaktaPanelCode.UTTAK_DOKUMENTASJON,
    punktNavn: '',
  },
  KLAGE_BEH_NFP: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON,
  },
  KLAGE_BEH_NK: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.KLAGE_NAV_KLAGEINSTANS,
  },
  FORMKRAV_KLAGE_NFP: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,
  },
  FORMKRAV_KLAGE_KA: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,
  },
  ANKE_VURDERING: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.ANKEBEHANDLING,
  },
  ANKE_MERKNADER: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.ANKE_MERKNADER,
  },
  OPPLYSNINGSPLIKT: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.OPPLYSNINGSPLIKT,
  },
  PUNKT_FOR_FOEDSEL: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  PUNKT_FOR_MEDLEMSKAP: {
    faktaNavn: FaktaPanelCode.MEDLEMSKAPSVILKARET,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  PUNKT_FOR_OPPTJENING: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  SOEKNADSFRIST: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.SOEKNADSFRIST,
  },
  VEDTAK: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.VEDTAK,
  },
  FAKTA_OM_UTTAK: {
    faktaNavn: FaktaPanelCode.UTTAK,
    punktNavn: '',
  },
  FAKTA_UTTAK: {
    faktaNavn: FaktaPanelCode.UTTAK,
    punktNavn: '',
  },
  FAKTA_UTTAK_EØS: {
    faktaNavn: FaktaPanelCode.UTTAK_EØS,
    punktNavn: '',
  },
  FAKTA_OM_UTTAK_DOKUMENTASJON: {
    faktaNavn: FaktaPanelCode.UTTAK_DOKUMENTASJON,
    punktNavn: '',
  },
  KONTROLL_AV_SAKSOPPLYSNINGER: {
    faktaNavn: FaktaPanelCode.SAKEN,
    punktNavn: '',
  },
  UTTAK: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.UTTAK,
  },
  FAKTA_OM_VERGE: {
    faktaNavn: FaktaPanelCode.VERGE,
    punktNavn: '',
  },
  TILKJENT_YTELSE: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.TILKJENT_YTELSE,
  },
  FAKTA_OM_SIMULERING: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.SIMULERING,
  },
  UTLAND: {
    faktaNavn: FaktaPanelCode.SAKEN,
    punktNavn: '',
  },
  PUNKT_FOR_SVP_INNGANG: {
    faktaNavn: FaktaPanelCode.FODSELTILRETTELEGGING,
    punktNavn: '',
  },
  PUNKT_FOR_SVANGERSKAPSPENGER: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  VURDER_FARESIGNALER: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: '',
  },
  PUNKT_FOR_MEDLEMSKAP_LØPENDE: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORTSATTMEDLEMSKAP,
  },
  FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING: {
    faktaNavn: FaktaPanelCode.ARBEID_OG_INNTEKT,
    punktNavn: ProsessStegCode.DEFAULT,
  },
  FAKTA_OMSORG_OG_RETT: {
    faktaNavn: FaktaPanelCode.OMSORG_OG_RETT,
    punktNavn: '',
  },
  // Denne blir aldri brukt men må ligge her for å tilfredsstille typen SkjermlenkeData
  '-': {
    faktaNavn: '',
    punktNavn: '',
  },
};

export const skjermlenkeCodesFpTilbake: SkjermlenkeDataFpTilbake = {
  FAKTA_OM_FEILUTBETALING: {
    faktaNavn: FaktaPanelCode.FEILUTBETALING,
    punktNavn: '',
  },
  TILBAKEKREVING: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.TILBAKEKREVING,
  },
  FORELDELSE: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORELDELSE,
  },
  VEDTAK: {
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.VEDTAK,
  },
  FAKTA_OM_VERGE: {
    faktaNavn: FaktaPanelCode.VERGE,
    punktNavn: '',
  },
  // Denne blir aldri brukt men må ligge her for å tilfredsstille typen SkjermlenkeDataFpTilbake
  '-': {
    faktaNavn: '',
    punktNavn: '',
  },
};

export const skjermlenkeCodes = { ...skjermlenkeCodesFpsak, ...skjermlenkeCodesFpTilbake };
