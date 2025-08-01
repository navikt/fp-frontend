import { FaktaPanelCode } from './faktaPanelCodes';
import { ProsessStegCode } from './prosessStegCodes';

type SkjermlenkeData = Record<string, { kode: string; faktaNavn: string; punktNavn: string }>;

const skjermlenkeCodesFpsak: SkjermlenkeData = {
  BEREGNING_ENGANGSSTOENAD: {
    kode: 'BEREGNING_ENGANGSSTOENAD',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.BEREGNING,
  },
  BEREGNING_FORELDREPENGER: {
    kode: 'BEREGNING_FORELDREPENGER',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.BEREGNINGSGRUNNLAG,
  },
  BESTEBEREGNING: {
    kode: 'BESTEBEREGNING',
    faktaNavn: FaktaPanelCode.BESTEBEREGNING,
    punktNavn: ProsessStegCode.DEFAULT,
  },
  FAKTA_OM_ADOPSJON: {
    kode: 'FAKTA_OM_ADOPSJON',
    faktaNavn: FaktaPanelCode.ADOPSJONSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_ARBEIDSFORHOLD_PERMISJON: {
    kode: 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON',
    faktaNavn: FaktaPanelCode.ARBEIDSFORHOLD,
    punktNavn: '',
  },
  FAKTA_OM_BEREGNING: {
    kode: 'FAKTA_OM_BEREGNING',
    faktaNavn: FaktaPanelCode.BEREGNING,
    punktNavn: '',
  },
  FAKTA_OM_FOEDSEL: {
    kode: 'FAKTA_OM_FOEDSEL',
    faktaNavn: FaktaPanelCode.FODSELSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_FORDELING: {
    kode: 'FAKTA_OM_FORDELING',
    faktaNavn: FaktaPanelCode.FORDELING,
    punktNavn: '',
  },
  FAKTA_OM_MEDLEMSKAP: {
    kode: 'FAKTA_OM_MEDLEMSKAP',
    faktaNavn: FaktaPanelCode.MEDLEMSKAPSVILKARET,
    punktNavn: '',
  },
  FAKTA_FOR_OMSORG: {
    kode: 'FAKTA_FOR_OMSORG',
    faktaNavn: FaktaPanelCode.OMSORG,
    punktNavn: '',
  },
  FAKTA_FOR_OPPTJENING: {
    kode: 'FAKTA_FOR_OPPTJENING',
    faktaNavn: FaktaPanelCode.OPPTJENINGSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_OPPTJENING: {
    kode: 'FAKTA_OM_OPPTJENING',
    faktaNavn: FaktaPanelCode.OPPTJENINGSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_OMSORG_OG_FORELDREANSVAR: {
    kode: 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR',
    faktaNavn: FaktaPanelCode.OMSORGSVILKARET,
    punktNavn: '',
  },
  FAKTA_OM_ARBEIDSFORHOLD: {
    kode: 'FAKTA_OM_ARBEIDSFORHOLD',
    faktaNavn: FaktaPanelCode.ARBEIDSFORHOLD,
    punktNavn: '',
  },
  FAKTA_OM_AKTIVITETSKRAV: {
    kode: 'FAKTA_OM_AKTIVITETSKRAV',
    faktaNavn: FaktaPanelCode.UTTAK_DOKUMENTASJON,
    punktNavn: '',
  },
  PUNKT_FOR_FORELDREANSVAR: {
    kode: 'PUNKT_FOR_FORELDREANSVAR',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  KLAGE_BEH_NFP: {
    kode: 'KLAGE_BEH_NFP',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON,
  },
  KLAGE_BEH_NK: {
    kode: 'KLAGE_BEH_NK',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.KLAGE_NAV_KLAGEINSTANS,
  },
  FORMKRAV_KLAGE_NFP: {
    kode: 'FORMKRAV_KLAGE_NFP',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,
  },
  FORMKRAV_KLAGE_KA: {
    kode: 'FORMKRAV_KLAGE_KA',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,
  },
  ANKE_VURDERING: {
    kode: 'ANKE_VURDERING',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.ANKEBEHANDLING,
  },
  ANKE_MERKNADER: {
    kode: 'ANKE_MERKNADER',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.ANKE_MERKNADER,
  },
  OPPLYSNINGSPLIKT: {
    kode: 'OPPLYSNINGSPLIKT',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.OPPLYSNINGSPLIKT,
  },
  PUNKT_FOR_ADOPSJON: {
    kode: 'PUNKT_FOR_ADOPSJON',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  PUNKT_FOR_FOEDSEL: {
    kode: 'PUNKT_FOR_FOEDSEL',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  PUNKT_FOR_MEDLEMSKAP: {
    kode: 'PUNKT_FOR_MEDLEMSKAP',
    faktaNavn: FaktaPanelCode.MEDLEMSKAPSVILKARET,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  PUNKT_FOR_OMSORG: {
    kode: 'PUNKT_FOR_OMSORG',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  PUNKT_FOR_OPPTJENING: {
    kode: 'PUNKT_FOR_OPPTJENING',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  SOEKNADSFRIST: {
    kode: 'SOEKNADSFRIST',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.SOEKNADSFRIST,
  },
  VEDTAK: {
    kode: 'VEDTAK',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.VEDTAK,
  },
  FAKTA_OM_UTTAK: {
    kode: 'FAKTA_OM_UTTAK',
    faktaNavn: FaktaPanelCode.UTTAK,
    punktNavn: '',
  },
  FAKTA_UTTAK: {
    kode: 'FAKTA_UTTAK',
    faktaNavn: FaktaPanelCode.UTTAK,
    punktNavn: '',
  },
  FAKTA_OM_UTTAK_DOKUMENTASJON: {
    kode: 'FAKTA_OM_UTTAK_DOKUMENTASJON',
    faktaNavn: FaktaPanelCode.UTTAK_DOKUMENTASJON,
    punktNavn: '',
  },
  KONTROLL_AV_SAKSOPPLYSNINGER: {
    kode: 'KONTROLL_AV_SAKSOPPLYSNINGER',
    faktaNavn: FaktaPanelCode.SAKEN,
    punktNavn: '',
  },
  UTTAK: {
    kode: 'UTTAK',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.UTTAK,
  },
  FAKTA_OM_VERGE: {
    kode: 'FAKTA_OM_VERGE',
    faktaNavn: FaktaPanelCode.VERGE,
    punktNavn: '',
  },
  TILKJENT_YTELSE: {
    kode: 'TILKJENT_YTELSE',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.TILKJENT_YTELSE,
  },
  FAKTA_OM_SIMULERING: {
    kode: 'SIMULERING',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.SIMULERING,
  },
  UTLAND: {
    kode: 'UTLAND',
    faktaNavn: FaktaPanelCode.SAKEN,
    punktNavn: '',
  },
  PUNKT_FOR_SVP_INNGANG: {
    kode: 'SVANGERSKAP',
    faktaNavn: FaktaPanelCode.FODSELTILRETTELEGGING,
    punktNavn: '',
  },
  PUNKT_FOR_SVANGERSKAPSPENGER: {
    kode: 'SVANGERSKAP',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.INNGANGSVILKAR,
  },
  VURDER_FARESIGNALER: {
    kode: 'VURDER_FARESIGNALER',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: '',
  },
  VURDER_UTTAK_DOKUMENTASJON: {
    kode: 'VURDER_UTTAK_DOKUMENTASJON',
    faktaNavn: FaktaPanelCode.UTTAK_DOKUMENTASJON,
    punktNavn: '',
  },
  PUNKT_FOR_MEDLEMSKAP_LØPENDE: {
    kode: 'PUNKT_FOR_MEDLEMSKAP_LØPENDE',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORTSATTMEDLEMSKAP,
  },
  FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING: {
    kode: 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING',
    faktaNavn: FaktaPanelCode.ARBEID_OG_INNTEKT,
    punktNavn: ProsessStegCode.DEFAULT,
  },
  FAKTA_OMSORG_OG_RETT: {
    kode: 'FAKTA_OMSORG_OG_RETT',
    faktaNavn: FaktaPanelCode.OMSORG_OG_RETT,
    punktNavn: '',
  },
} as SkjermlenkeData;

export const skjermlenkeCodesFpTilbake: SkjermlenkeData = {
  FAKTA_OM_FEILUTBETALING: {
    kode: 'FAKTA_OM_FEILUTBETALING',
    faktaNavn: FaktaPanelCode.FEILUTBETALING,
    punktNavn: '',
  },
  TILBAKEKREVING: {
    kode: 'TILBAKEKREVING',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.TILBAKEKREVING,
  },
  FORELDELSE: {
    kode: 'FORELDELSE',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.FORELDELSE,
  },
  VEDTAK: {
    kode: 'VEDTAK',
    faktaNavn: FaktaPanelCode.DEFAULT,
    punktNavn: ProsessStegCode.VEDTAK,
  },
  FAKTA_OM_VERGE: {
    kode: 'FAKTA_OM_VERGE',
    faktaNavn: FaktaPanelCode.VERGE,
    punktNavn: '',
  },
};

export const skjermlenkeCodes = { ...skjermlenkeCodesFpsak, ...skjermlenkeCodesFpTilbake };
