import type { FeilutbetalingÅrsak, FeilutbetalingFakta } from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import type {
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingPerioderWrapper,
} from '@navikt/ft-prosess-tilbakekreving';
import type { ForhandsvisData, Vedtaksbrev } from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import type { FormkravMellomlagretDataType } from '@navikt/fp-prosess-formkrav';
import type { AksjonspunktVerdier } from '@navikt/fp-prosess-klagevurdering';
import type { AvklartRisikoklassifiseringAp } from '@navikt/fp-sak-risikoklassifisering';
import type {
  AnkeVurdering,
  ApiLink,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerWrapper,
  Behandling,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  BeregningsresultatTilbakekreving,
  Dokument,
  DokumentasjonVurderingBehov,
  FaktaArbeidsforhold,
  FamilieHendelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  FodselOgTilrettelegging,
  ForhåndsvisMeldingParams,
  GenererHtmlDokument,
  Innsyn,
  InntektArbeidYtelse,
  Inntektsmelding,
  KlageVurdering,
  KontrollerFaktaPeriode,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
  Medlemskap,
  OmsorgOgRett,
  Oppgave,
  OpprettVergeParams,
  Opptjening,
  PeriodeSoker,
  Personoversikt,
  SimuleringResultat,
  Soknad,
  TilbakekrevingValg,
  Uttaksresultat,
  UttakStonadskontoer,
  Verge,
  VilkarsVurdertePerioderWrapper,
  Ytelsefordeling,
} from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

type SettPaVentParams = {
  ventearsak?: string;
  frist?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
};

type NyBehandlendeEnhet = {
  behandlingUuid: string;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
  behandlingVersjon: number;
};

//TODO (TOR) Bør dela denne i to. Ein eigen for overstyringsaksjonspunkt
type AksjonspunktType = FaktaAksjonspunkt | ProsessAksjonspunkt | AvklartRisikoklassifiseringAp;

export type AksjonspunktArgs = {
  behandlingUuid: string;
  behandlingVersjon: number;
  saksnummer: string;
  bekreftedeAksjonspunktDtoer: ({
    '@type': string;
  } & AksjonspunktType)[];
};

export type OverstyrteAksjonspunktArgs = {
  behandlingUuid: string;
  behandlingVersjon: number;
  saksnummer: string;
  overstyrteAksjonspunktDtoer: ({
    '@type': string;
  } & AksjonspunktType)[];
};

//TODO (Dette bør lagast og eksporterast i ft-panelet)
type PeriodeMedBelop = {
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
};
export type BeregnBeløpParams = {
  behandlingUuid: string;
  perioder: PeriodeMedBelop[];
};

const kyExtended = ky.extend({
  retry: 0,
  timeout: 15000,
  hooks: {
    beforeRequest: [
      request => {
        const navCallId = `CallId_${new Date().getTime()}_${Math.floor(Math.random() * 1000000000)}`;
        request.headers.set('Nav-Callid', navCallId);
      },
    ],
  },
});

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
export const wrapUrl = (url: string) => (isTest ? `http://www.test.com${url}` : url);

const getUrlFromRel = (rel: keyof typeof BehandlingRel, links: ApiLink[]): string => {
  const link = links.find(l => l.rel === BehandlingRel[rel]);
  if (link) {
    return wrapUrl(link.href);
  }
  throw new Error(`Rel ${BehandlingRel[rel]} mangler lenke i behandling-dto`);
};

export const harLenke = (behandling: Behandling, rel: keyof typeof BehandlingRel) =>
  behandling.links.some(link => link.rel === BehandlingRel[rel]);

export const BehandlingUrl = {
  BEHANDLING: wrapUrl('/fpsak/api/behandlinger'),
  BEHANDLING_TILBAKEKREVING: wrapUrl('/fptilbake/api/behandlinger'),
  PREVIEW_MESSAGE: wrapUrl('/fpsak/api/brev/forhandsvis'),
  PREVIEW_VEDTAKSBREV: '/fptilbake/api/dokument/forhandsvis-vedtaksbrev',
  PREVIEW_TILBAKEKREVING_MESSAGE: '/fptilbake/api/dokument/forhandsvis-varselbrev',
};

export const BehandlingRel = {
  OPEN_BEHANDLING_FOR_CHANGES: 'opne-for-endringer',
  BEHANDLING_NY_BEHANDLENDE_ENHET: 'bytt-behandlende-enhet',
  HENLEGG_BEHANDLING: 'henlegg-behandling',
  BEHANDLING_ON_HOLD: 'sett-behandling-pa-vent',
  RESUME_BEHANDLING: 'gjenoppta-behandling',
  VERGE_OPPRETT_V1: 'opprett-verge',
  VERGE_FJERN_V1: 'fjern-verge',
  VERGE_OPPRETT_V2: 'verge-opprett',
  VERGE_FJERN_V2: 'verge-fjern',
  VERGE_HENT: 'verge-hent',
  SAVE_AKSJONSPUNKT: 'lagre-aksjonspunkter',
  SAVE_OVERSTYRT_AKSJONSPUNKT: 'lagre-overstyr-aksjonspunkter',
  ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD: 'arbeidsforhold-inntektsmelding-registrer',
  ARBEID_OG_INNTEKT_LAGRE_VURDERING: 'arbeidsforhold-inntektsmelding-vurder',
  ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING: 'arbeidsforhold-inntektsmelding-apne-for-ny-vurdering',
  ARBEIDSGIVERE_OVERSIKT: 'arbeidsgivere-oversikt',
  BEHANDLING_PERSONOVERSIKT: 'behandling-personoversikt',
  ANKE_VURDERING: 'anke-vurdering',
  KLAGE_VURDERING: 'klage-vurdering',
  SAVE_FORMKRAV_VURDERING: 'mellomlagre-formkrav-klage',
  SAVE_KLAGE_VURDERING: 'mellomlagre-klage',
  INNSYN_DOKUMENTER: 'dokumenter',
  INNSYN: 'innsyn',
  PERIODER_FORELDELSE: 'perioderForeldelse',
  BEREGNE_BELØP: 'beregne-feilutbetalt-belop',
  VILKARVURDERINGSPERIODER: 'vilkarvurderingsperioder',
  VILKARVURDERING: 'vilkarvurdering',
  BEREGNINGSRESULTAT: 'beregningsresultat',
  VEDTAKSBREV: 'vedtaksbrev',
  FEILUTBETALING_FAKTA: 'feilutbetalingFakta',
  FEILUTBETALING_AARSAK: 'feilutbetalingAarsak',
  BEREGNINGRESULTAT_DAGYTELSE: 'beregningsresultat-dagytelse',
  FAMILIEHENDELSE: 'familiehendelse-v2',
  SOKNAD: 'soknad',
  FERIEPENGEGRUNNLAG: 'feriepengegrunnlag',
  TILBAKEKREVINGVALG: 'tilbakekrevingvalg',
  BEREGNINGSGRUNNLAG: 'beregningsgrunnlag',
  SIMULERING_RESULTAT: 'simulering-resultat',
  BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING: 'beregningsresultat-dagytelse-original-behandling',
  ARBEID_OG_INNTEKT: 'arbeidsforhold-inntektsmelding',
  SVANGERSKAPSPENGER_TILRETTELEGGING: 'svangerskapspenger-tilrettelegging',
  OPPTJENING: 'opptjening',
  BEREGNINGRESULTAT_ENGANGSSTONAD: 'beregningsresultat-engangsstonad',
  MEDLEMSKAP: 'soeker-medlemskap-v3',
  UTTAKSRESULTAT: 'uttaksresultat-perioder',
  UTTAK_STONADSKONTOER: 'uttak-stonadskontoer',
  YTELSEFORDELING: 'ytelsefordeling',
  OMSORG_OG_RETT: 'omsorg-og-rett',
  STONADSKONTOER_GITT_UTTAKSPERIODER: 'lagre-stonadskontoer-gitt-uttaksperioder',
  DOKUMENTASJON_VURDERING_BEHOV: 'uttak-vurder-dokumentasjon',
  UTTAK_KONTROLLER_FAKTA_PERIODER_V2: 'uttak-kontroller-fakta-perioder-v2',
  FAKTA_ARBEIDSFORHOLD: 'fakta-arbeidsforhold',
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING: 'familiehendelse-original-behandling',
  SOKNAD_ORIGINAL_BEHANDLING: 'soknad-original-behandling',
  INNTEKTSMELDINGER: 'inntektsmeldinger',
  INNTEKT_ARBEID_YTELSE: 'inntekt-arbeid-ytelse',
  UTLAND_DOK_STATUS: 'utland-dok-status',
  VERGE: 'soeker-verge',
  UPDATE_ON_HOLD: 'endre-pa-vent',
  HENT_OPPGAVER: 'hent-oppgaver',
  BREV_GENERER_HTML: 'brev-generer-html',
  BREV_LAGRE_HTML: 'brev-lagre-html',
  BREV_NULLSTILL_OVERSTYRING: 'brev-nullstill-overstyring',
};

const getArbeidsgiverOversiktOptions =
  (links: ApiLink[]) => (behandling: Behandling, erFørstegangssøknadEllerRevurdering: boolean) =>
    queryOptions({
      queryKey: [BehandlingRel.ARBEIDSGIVERE_OVERSIKT, behandling.uuid, behandling.versjon],
      queryFn: () =>
        kyExtended.get(getUrlFromRel('ARBEIDSGIVERE_OVERSIKT', links)).json<ArbeidsgiverOpplysningerWrapper>(),
      enabled: erFørstegangssøknadEllerRevurdering,
      staleTime: Infinity,
    });

const getBehandlingPersonoversiktOptions =
  (links: ApiLink[]) => (behandling: Behandling, erFørstegangssøknadEllerRevurdering: boolean) =>
    queryOptions({
      queryKey: [BehandlingRel.BEHANDLING_PERSONOVERSIKT, behandling.uuid, behandling.versjon],
      queryFn: () => kyExtended.get(getUrlFromRel('BEHANDLING_PERSONOVERSIKT', links)).json<Personoversikt>(),
      enabled: erFørstegangssøknadEllerRevurdering,
      staleTime: Infinity,
    });

const getAnkeVurderingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.ANKE_VURDERING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('ANKE_VURDERING', links)).json<AnkeVurdering>(),
    staleTime: Infinity,
  });

const getKlageVurderingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.KLAGE_VURDERING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('KLAGE_VURDERING', links)).json<KlageVurdering>(),
    staleTime: Infinity,
  });

const getInnsynDokumenterOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNSYN_DOKUMENTER, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('INNSYN_DOKUMENTER', links)).json<Dokument[]>(),
    staleTime: Infinity,
  });

const getInnsynOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNSYN, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('INNSYN', links)).json<Innsyn>(),
    staleTime: Infinity,
  });

const getPerioderForeldelseOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.PERIODER_FORELDELSE, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('PERIODER_FORELDELSE', links)).json<FeilutbetalingPerioderWrapper>(),
    enabled: harLenke(behandling, 'PERIODER_FORELDELSE'),
    staleTime: Infinity,
  });

const getVilkårsvurderingsperioderOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VILKARVURDERINGSPERIODER, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('VILKARVURDERINGSPERIODER', links)).json<DetaljerteFeilutbetalingsperioder>(),
    enabled: harLenke(behandling, 'VILKARVURDERINGSPERIODER'),
    staleTime: Infinity,
  });

const getVilkårsvurderingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VILKARVURDERING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('VILKARVURDERING', links)).json<VilkarsVurdertePerioderWrapper>(),
    enabled: harLenke(behandling, 'VILKARVURDERING'),
    staleTime: Infinity,
  });

const getBeregningsresultatOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGSRESULTAT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('BEREGNINGSRESULTAT', links)).json<BeregningsresultatTilbakekreving>(),
    enabled: harLenke(behandling, 'BEREGNINGSRESULTAT'),
    staleTime: Infinity,
  });

const getVedtaksbrevOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VEDTAKSBREV, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('VEDTAKSBREV', links)).json<Vedtaksbrev>(),
    enabled: harLenke(behandling, 'VEDTAKSBREV'),
    staleTime: Infinity,
  });

const getFeilutbetalingFaktaOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FEILUTBETALING_FAKTA, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('FEILUTBETALING_FAKTA', links)).json<FeilutbetalingFakta>(),
    enabled: harLenke(behandling, 'FEILUTBETALING_FAKTA'),
    staleTime: Infinity,
  });

const getFeilutbetalingÅrsakOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FEILUTBETALING_AARSAK, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('FEILUTBETALING_AARSAK', links)).json<FeilutbetalingÅrsak[]>(),
    enabled: harLenke(behandling, 'FEILUTBETALING_AARSAK'),
    staleTime: Infinity,
  });

const getBeregningsresultatDagytelseOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('BEREGNINGRESULTAT_DAGYTELSE', links)).json<BeregningsresultatDagytelse>(),
    enabled: harLenke(behandling, 'BEREGNINGRESULTAT_DAGYTELSE'),
    staleTime: Infinity,
  });

const getFamiliehendelseOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FAMILIEHENDELSE, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('FAMILIEHENDELSE', links)).json<FamilieHendelseSamling>(),
    staleTime: Infinity,
  });

const getSøknadOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SOKNAD, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('SOKNAD', links)).json<Soknad>(),
    staleTime: Infinity,
  });

const getFeriepengegrunnlagOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FERIEPENGEGRUNNLAG, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('FERIEPENGEGRUNNLAG', links)).json<Feriepengegrunnlag>(),
    staleTime: Infinity,
  });

const getTilbakekrevingValgOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.TILBAKEKREVINGVALG, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('TILBAKEKREVINGVALG', links)).json<TilbakekrevingValg>(),
    enabled: harLenke(behandling, 'TILBAKEKREVINGVALG'),
    staleTime: Infinity,
  });

const getBeregningsgrunnlagOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGSGRUNNLAG, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('BEREGNINGSGRUNNLAG', links)).json<Beregningsgrunnlag>(),
    enabled: harLenke(behandling, 'BEREGNINGSGRUNNLAG'),
    staleTime: Infinity,
  });

const getSimuleringResultatOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SIMULERING_RESULTAT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('SIMULERING_RESULTAT', links)).json<SimuleringResultat>(),
    enabled: harLenke(behandling, 'SIMULERING_RESULTAT'),
    staleTime: Infinity,
  });

const getBeregningDagytelseOriginalBehandlingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING', links)).json<{
        'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
        'beregningsresultat-foreldrepenger'?: BeregningsresultatDagytelse;
      }>(),
    enabled: harLenke(behandling, 'BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING'),
    staleTime: Infinity,
  });

const getArbeidOgInntektOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.ARBEID_OG_INNTEKT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('ARBEID_OG_INNTEKT', links)).json<ArbeidOgInntektsmelding>(),
    enabled: harLenke(behandling, 'ARBEID_OG_INNTEKT'),
    staleTime: Infinity,
  });

const getSvangerskapspengerTilretteleggingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SVANGERSKAPSPENGER_TILRETTELEGGING, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('SVANGERSKAPSPENGER_TILRETTELEGGING', links)).json<FodselOgTilrettelegging>(),
    staleTime: Infinity,
  });

const getOpptjeningOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.OPPTJENING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('OPPTJENING', links)).json<Opptjening>(),
    staleTime: Infinity,
  });

const getBeregningsresultatEngangsstønadOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGRESULTAT_ENGANGSSTONAD, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('BEREGNINGRESULTAT_ENGANGSSTONAD', links)).json<BeregningsresultatEs>(),
    enabled: harLenke(behandling, 'BEREGNINGRESULTAT_ENGANGSSTONAD'),
    staleTime: Infinity,
  });

const getMedlemskapOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.MEDLEMSKAP, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('MEDLEMSKAP', links)).json<Medlemskap>(),
    staleTime: Infinity,
  });

const getUttaksresultatOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTTAKSRESULTAT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('UTTAKSRESULTAT', links)).json<Uttaksresultat>(),
    enabled: harLenke(behandling, 'UTTAKSRESULTAT'),
    staleTime: Infinity,
  });

const getUttakStønadskontoerOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTTAK_STONADSKONTOER, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('UTTAK_STONADSKONTOER', links)).json<UttakStonadskontoer>(),
    enabled: harLenke(behandling, 'UTTAK_STONADSKONTOER'),
    staleTime: Infinity,
  });

const getYtelsefordelingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.YTELSEFORDELING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('YTELSEFORDELING', links)).json<Ytelsefordeling>(),
    staleTime: Infinity,
  });

const getFaktaOmsorgOgRettOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.OMSORG_OG_RETT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('OMSORG_OG_RETT', links)).json<OmsorgOgRett>(),
    staleTime: Infinity,
  });

const getDokumentasjonVurderingBehovOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.DOKUMENTASJON_VURDERING_BEHOV, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('DOKUMENTASJON_VURDERING_BEHOV', links)).json<DokumentasjonVurderingBehov[]>(),
    enabled: harLenke(behandling, 'DOKUMENTASJON_VURDERING_BEHOV'),
    staleTime: Infinity,
  });

const getUttakKontrollerFaktaPerioderOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTTAK_KONTROLLER_FAKTA_PERIODER_V2, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('UTTAK_KONTROLLER_FAKTA_PERIODER_V2', links)).json<KontrollerFaktaPeriode[]>(),
    enabled: harLenke(behandling, 'UTTAK_KONTROLLER_FAKTA_PERIODER_V2'),
    staleTime: Infinity,
  });

const getFaktaArbeidsforholdOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FAKTA_ARBEIDSFORHOLD, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('FAKTA_ARBEIDSFORHOLD', links)).json<FaktaArbeidsforhold[]>(),
    enabled: harLenke(behandling, 'FAKTA_ARBEIDSFORHOLD'),
    staleTime: Infinity,
  });

const getFamiliehendelseOrigninalBehandlingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FAMILIEHENDELSE_ORIGINAL_BEHANDLING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('FAMILIEHENDELSE_ORIGINAL_BEHANDLING', links)).json<FamilieHendelse>(),
    enabled: harLenke(behandling, 'FAMILIEHENDELSE_ORIGINAL_BEHANDLING'),
    staleTime: Infinity,
  });

const getSøknadOriginalBehandlingOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SOKNAD_ORIGINAL_BEHANDLING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('SOKNAD_ORIGINAL_BEHANDLING', links)).json<Soknad>(),
    enabled: harLenke(behandling, 'SOKNAD_ORIGINAL_BEHANDLING'),
    staleTime: Infinity,
  });

const getInntektsmeldingerOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNTEKTSMELDINGER, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('INNTEKTSMELDINGER', links)).json<Inntektsmelding[]>(),
    staleTime: Infinity,
  });

const getInntektArbeidYtelseOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNTEKT_ARBEID_YTELSE, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('INNTEKT_ARBEID_YTELSE', links)).json<InntektArbeidYtelse>(),
    staleTime: Infinity,
  });

const getUtlandDokStatusOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTLAND_DOK_STATUS, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('UTLAND_DOK_STATUS', links)).json<{
        dokStatus?: string;
      }>(),
    enabled: harLenke(behandling, 'UTLAND_DOK_STATUS'),
    staleTime: Infinity,
  });

const getVergeOptions = (links: ApiLink[]) => (behandling: Behandling, isEnabled: boolean) =>
  queryOptions({
    queryKey: [BehandlingRel.VERGE, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('VERGE', links)).json<Verge>(),
    enabled: isEnabled,
    staleTime: Infinity,
  });

const getOppgaverOptions = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.HENT_OPPGAVER, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('HENT_OPPGAVER', links)).json<Oppgave[]>(),
    enabled: harLenke(behandling, 'HENT_OPPGAVER'),
    staleTime: Infinity,
  });
const getBrevHtml = (links: ApiLink[]) => (params: GenererHtmlDokument) =>
  kyExtended
    .get(getUrlFromRel('BREV_GENERER_HTML', links), {
      json: params,
    })
    .json<string>();

export const hentBehandling = (behandlingUuid: string) =>
  kyExtended.post<Behandling>(BehandlingUrl.BEHANDLING, {
    json: { behandlingUuid },
  });

export const hentBehandlingTilbakekreving = (behandlingUuid: string) =>
  kyExtended.post<Behandling>(BehandlingUrl.BEHANDLING_TILBAKEKREVING, {
    json: { behandlingUuid },
  });

export const forhåndsvisMelding = (params: ForhåndsvisMeldingParams) =>
  kyExtended
    .post(BehandlingUrl.PREVIEW_MESSAGE, {
      json: params,
    })
    .blob();

export const forhåndsvisVedtaksbrev = (params: ForhandsvisData) =>
  kyExtended
    .post(BehandlingUrl.PREVIEW_VEDTAKSBREV, {
      json: params,
    })
    .blob();

export const forhåndsvisTilbakekrevingMelding = (params: {
  behandlingUuid: string;
  fagsakYtelseType: string;
  varseltekst: string;
}) =>
  kyExtended
    .post(BehandlingUrl.PREVIEW_TILBAKEKREVING_MESSAGE, {
      json: params,
    })
    .blob();

const getÅpneBehandlingForEndring = (links: ApiLink[]) => (behandlingUuid: string, behandlingVersjon: number) =>
  kyExtended.post(getUrlFromRel('OPEN_BEHANDLING_FOR_CHANGES', links), {
    json: { behandlingUuid, behandlingVersjon },
  });

const getNyBehandlendeEnhet = (links: ApiLink[]) => (params: NyBehandlendeEnhet) =>
  kyExtended
    .post(getUrlFromRel('BEHANDLING_NY_BEHANDLENDE_ENHET', links), {
      json: params,
    })
    .json<void>();

const getHenleggBehandling =
  (links: ApiLink[]) =>
  (params: { behandlingUuid: string; årsakKode: string; begrunnelse: string; behandlingVersjon: number }) =>
    kyExtended
      .post(getUrlFromRel('HENLEGG_BEHANDLING', links), {
        json: params,
      })
      .json<void>();

const getSettBehandlingPåVent =
  (links: ApiLink[]) =>
  (params: { behandlingUuid: string; behandlingVersjon: number; frist: string; ventearsak: string }) =>
    kyExtended
      .post(getUrlFromRel('BEHANDLING_ON_HOLD', links), {
        json: params,
      })
      .json<void>();

const getOppdaterPåVent = (links: ApiLink[]) => (params: SettPaVentParams) =>
  kyExtended
    .post(getUrlFromRel('UPDATE_ON_HOLD', links), {
      json: params,
    })
    .json<void>();

const getFortsettBehandling = (links: ApiLink[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post<Behandling>(getUrlFromRel('RESUME_BEHANDLING', links), {
    json: params,
  });

const getOpprettVergeV1 = (links: ApiLink[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post<Behandling>(getUrlFromRel('VERGE_OPPRETT_V1', links), {
    json: params,
  });

const getOpprettVergeV2 = (links: ApiLink[]) => (params: OpprettVergeParams) =>
  kyExtended.post(getUrlFromRel('VERGE_OPPRETT_V2', links), {
    json: params,
  });

const getFjernVergeV1 = (links: ApiLink[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post<Behandling>(getUrlFromRel('VERGE_FJERN_V1', links), {
    json: params,
  });

const getLagreBrevHtml = (links: ApiLink[]) => (params: { behandlingUuid: string; html: string }) =>
  kyExtended
    .post<string>(getUrlFromRel('BREV_LAGRE_HTML', links), {
      json: params,
    })
    .json<void>();

const getForkastManueltBrev = (links: ApiLink[]) => (params: { behandlingUuid: string }) =>
  kyExtended
    .post(getUrlFromRel('BREV_NULLSTILL_OVERSTYRING', links), {
      json: params,
    })
    .json<void>();

const getFjernVergeV2 = (links: ApiLink[]) => () => kyExtended.post(getUrlFromRel('VERGE_FJERN_V2', links));

const getVerge = (links: ApiLink[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VERGE_HENT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel('VERGE_HENT', links)).json<Verge>(),
    enabled: harLenke(behandling, 'VERGE_HENT'),
    staleTime: Infinity,
  });

const getLagreAksjonspunkt = (links: ApiLink[]) => (params: AksjonspunktArgs) =>
  kyExtended.post<Behandling>(getUrlFromRel('SAVE_AKSJONSPUNKT', links), {
    json: params,
  });

const getLagreOverstyrtAksjonspunkt = (links: ApiLink[]) => (params: OverstyrteAksjonspunktArgs) =>
  kyExtended.post<Behandling>(getUrlFromRel('SAVE_OVERSTYRT_AKSJONSPUNKT', links), {
    json: params,
  });

const getRegistrerArbeidsforholdForAOI = (links: ApiLink[]) => (params: ManueltArbeidsforhold) =>
  kyExtended
    .post(getUrlFromRel('ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD', links), {
      json: params,
    })
    .json<void>();

const getLagreVurderingForAOI = (links: ApiLink[]) => (params: ManglendeInntektsmeldingVurdering) =>
  kyExtended
    .post(getUrlFromRel('ARBEID_OG_INNTEKT_LAGRE_VURDERING', links), {
      json: params,
    })
    .json<void>();

const getÅpneForNyVurderingAOI =
  (links: ApiLink[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
    kyExtended
      .post(getUrlFromRel('ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING', links), {
        json: params,
      })
      .json<void>();

const getMellomlagreFormkravVurdering = (links: ApiLink[]) => (params: FormkravMellomlagretDataType) =>
  kyExtended
    .post(getUrlFromRel('SAVE_FORMKRAV_VURDERING', links), {
      json: params,
    })
    .json<void>();

const getMellomlagreKlageVurdering =
  (links: ApiLink[]) =>
  (
    params: AksjonspunktVerdier & {
      behandlingUuid: string;
    },
  ) =>
    kyExtended
      .post(getUrlFromRel('SAVE_KLAGE_VURDERING', links), {
        json: params,
      })
      .json<void>();

const getBeregneBeløp = (links: ApiLink[]) => (params: BeregnBeløpParams) =>
  kyExtended
    .post(getUrlFromRel('BEREGNE_BELØP', links), {
      json: params,
    })
    .json<void>();

const getOppdaterStønadskontoer =
  (links: ApiLink[]) => (params: { behandlingUuid: string; perioder: PeriodeSoker[] }) =>
    kyExtended
      .post(getUrlFromRel('STONADSKONTOER_GITT_UTTAKSPERIODER', links), {
        json: params,
      })
      .json<void>();

export const useBehandlingApi = (behandling: Behandling) => {
  const { links } = behandling;
  return {
    arbeidsgiverOversiktOptions: getArbeidsgiverOversiktOptions(links),
    behandlingPersonoversiktOptions: getBehandlingPersonoversiktOptions(links),
    endreBehandlendeEnhet: getNyBehandlendeEnhet(links),
    henleggBehandling: getHenleggBehandling(links),
    settBehandlingPåVent: getSettBehandlingPåVent(links),
    oppdaterPåVent: getOppdaterPåVent(links),
    registrerArbeidsforholdForAOI: getRegistrerArbeidsforholdForAOI(links),
    lagreVurderingForAOI: getLagreVurderingForAOI(links),
    åpneForNyVurderingAOI: getÅpneForNyVurderingAOI(links),
    søknadOptions: getSøknadOptions(links),
    familiehendelseOptions: getFamiliehendelseOptions(links),
    beregningsresultatDagytelseOptions: getBeregningsresultatDagytelseOptions(links),
    beregningDagytelseOriginalBehandlingOptions: getBeregningDagytelseOriginalBehandlingOptions(links),
    simuleringResultatOptions: getSimuleringResultatOptions(links),
    tilbakekrevingValgOptions: getTilbakekrevingValgOptions(links),
    medlemskapOptions: getMedlemskapOptions(links),
    feriepengegrunnlagOptions: getFeriepengegrunnlagOptions(links),
    uttaksresultatPerioderOptions: getUttaksresultatOptions(links),
    uttakStønadskontoerOptions: getUttakStønadskontoerOptions(links),
    ytelsefordelingOptions: getYtelsefordelingOptions(links),
    omsorgOgRettOptions: getFaktaOmsorgOgRettOptions(links),
    oppdaterStønadskontoer: getOppdaterStønadskontoer(links),
    beregningsgrunnlagOptions: getBeregningsgrunnlagOptions(links),
    opptjeningOptions: getOpptjeningOptions(links),
    dokumentasjonVurderingBehovOptions: getDokumentasjonVurderingBehovOptions(links),
    uttakKontrollerFaktaPerioderOptions: getUttakKontrollerFaktaPerioderOptions(links),
    faktaArbeidsforholdOptions: getFaktaArbeidsforholdOptions(links),
    familiehendelseOrigninalBehandlingOptions: getFamiliehendelseOrigninalBehandlingOptions(links),
    søknadOriginalBehandlingOptions: getSøknadOriginalBehandlingOptions(links),
    arbeidOgInntektOptions: getArbeidOgInntektOptions(links),
    inntektsmeldingerOptions: getInntektsmeldingerOptions(links),
    inntektArbeidYtelseOptions: getInntektArbeidYtelseOptions(links),
    utlandDokStatusOptions: getUtlandDokStatusOptions(links),
    vergeOptions: getVergeOptions(links),
    getBrevHtml: getBrevHtml(links),
    lagreBrevHtml: getLagreBrevHtml(links),
    forkastManueltBrev: getForkastManueltBrev(links),
    verge: {
      hent: getVerge(links),
      opprettVergeV2: getOpprettVergeV2(links),
      fjernVergeV2: getFjernVergeV2(links),
    },
    oppgaverOptions: getOppgaverOptions(links),
    anke: {
      ankeVurderingOptions: getAnkeVurderingOptions(links),
    },
    klage: {
      klageVurderingOptions: getKlageVurderingOptions(links),
      mellomlagreFormkravVurdering: getMellomlagreFormkravVurdering(links),
      mellomlagreKlageVurdering: getMellomlagreKlageVurdering(links),
    },
    innsyn: {
      innsynDokumenterOptions: getInnsynDokumenterOptions(links),
      innsynOptions: getInnsynOptions(links),
    },
    tilbakekreving: {
      perioderForeldelseOptions: getPerioderForeldelseOptions(links),
      beregneBeløp: getBeregneBeløp(links),
      vilkårsvurderingsperioderOptions: getVilkårsvurderingsperioderOptions(links),
      vilkårsvurderingOptions: getVilkårsvurderingOptions(links),
      beregningsresultatOptions: getBeregningsresultatOptions(links),
      vedtaksbrevOptions: getVedtaksbrevOptions(links),
      feilutbetalingFaktaOptions: getFeilutbetalingFaktaOptions(links),
      feilutbetalingÅrsakOptions: getFeilutbetalingÅrsakOptions(links),
    },
    svp: {
      svangerskapspengerTilretteleggingOptions: getSvangerskapspengerTilretteleggingOptions(links),
    },
    es: {
      beregningsresultatEngangsstønadOptions: getBeregningsresultatEngangsstønadOptions(links),
    },
    pollingApi: {
      gjenopptaBehandling: getFortsettBehandling(links),
      åpneBehandlingForEndring: getÅpneBehandlingForEndring(links),
      lagreAksjonspunkt: getLagreAksjonspunkt(links),
      lagreOverstyrtAksjonspunkt: getLagreOverstyrtAksjonspunkt(links),
      opprettVergeV1: getOpprettVergeV1(links),
      fjernVergeV1: getFjernVergeV1(links),
    },
  };
};
