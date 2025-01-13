import { FeilutbetalingAarsak, FeilutbetalingFakta } from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { DetaljerteFeilutbetalingsperioder, FeilutbetalingPerioderWrapper } from '@navikt/ft-prosess-tilbakekreving';
import { ForhandsvisData, Vedtaksbrev } from '@navikt/ft-prosess-tilbakekreving-vedtak';
import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import { FormkravMellomlagretDataType } from '@navikt/fp-prosess-formkrav';
import { AksjonspunktVerdier } from '@navikt/fp-prosess-klagevurdering';
import { Link } from '@navikt/fp-rest-api';
import { AvklartRisikoklassifiseringAp } from '@navikt/fp-sak-risikoklassifisering';
import {
  AnkeVurdering,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerWrapper,
  Behandling,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  BeregningsresultatTilbakekreving,
  Dokument,
  DokumentasjonVurderingBehov,
  Fagsak,
  FaktaArbeidsforhold,
  FamilieHendelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  FodselOgTilrettelegging,
  ForhåndsvisMeldingParams,
  Innsyn,
  InntektArbeidYtelse,
  Inntektsmelding,
  KlageVurdering,
  KontrollerFaktaPeriode,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
  Medlemskap,
  Opptjening,
  PeriodeSoker,
  Personoversikt,
  SimuleringResultat,
  Soknad,
  TilbakekrevingValg,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  Verge,
  VilkarsVurdertePerioderWrapper,
  Ytelsefordeling,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

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

const getUrlFromRel = (rel: string, links: Link[] = []): string => {
  const link = links.find(l => l.rel === rel);
  return link ? wrapUrl(link.href) : '';
};

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
  VERGE_OPPRETT: 'opprett-verge',
  VERGE_FJERN: 'fjern-verge',
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
  UTTAKSRESULTAT_PERIODER: 'uttaksresultat-perioder',
  UTTAK_STONADSKONTOER: 'uttak-stonadskontoer',
  YTELSEFORDELING: 'ytelsefordeling',
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
};

const getArbeidsgiverOversiktOptions =
  (links?: Link[]) => (behandlingVersjon: number, erFørstegangssøknadEllerRevurdering: boolean) =>
    queryOptions({
      queryKey: [BehandlingRel.ARBEIDSGIVERE_OVERSIKT, behandlingVersjon],
      queryFn: () =>
        kyExtended
          .get(getUrlFromRel(BehandlingRel.ARBEIDSGIVERE_OVERSIKT, links))
          .json<ArbeidsgiverOpplysningerWrapper>(),
      enabled: erFørstegangssøknadEllerRevurdering,
    });

const getBehandlingPersonoversiktOptions =
  (links?: Link[]) => (behandlingVersjon: number, erFørstegangssøknadEllerRevurdering: boolean) =>
    queryOptions({
      queryKey: [BehandlingRel.BEHANDLING_PERSONOVERSIKT, behandlingVersjon],
      queryFn: () =>
        kyExtended.get(getUrlFromRel(BehandlingRel.BEHANDLING_PERSONOVERSIKT, links)).json<Personoversikt>(),
      enabled: erFørstegangssøknadEllerRevurdering,
    });

const getAnkeVurderingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.ANKE_VURDERING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.ANKE_VURDERING, links)).json<AnkeVurdering>(),
  });

const getKlageVurderingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.KLAGE_VURDERING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.KLAGE_VURDERING, links)).json<KlageVurdering>(),
  });

//TODO (TOR) Denne lenka får med uuid fra backend, men treng saksnummer. Sett heller saksnummer backend så slepp ein det her
const getInnsynDokumenterOptions = (links?: Link[]) => (fagsak: Fagsak, behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNSYN_DOKUMENTER, fagsak.saksnummer, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(BehandlingRel.INNSYN_DOKUMENTER, links), {
          searchParams: {
            saksnummer: fagsak.saksnummer,
          },
        })
        .json<Dokument[]>(),
  });

const getInnsynOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNSYN, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.INNSYN, links)).json<Innsyn>(),
  });

const getPerioderForeldelseOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.PERIODER_FORELDELSE, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.PERIODER_FORELDELSE, links)).json<FeilutbetalingPerioderWrapper>(),
  });

const getVilkårsvurderingsperioderOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VILKARVURDERINGSPERIODER, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(BehandlingRel.VILKARVURDERINGSPERIODER, links))
        .json<DetaljerteFeilutbetalingsperioder>(),
  });

const getVilkårsvurderingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VILKARVURDERING, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.VILKARVURDERING, links)).json<VilkarsVurdertePerioderWrapper>(),
  });

const getBeregningsresultatOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGSRESULTAT, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.BEREGNINGSRESULTAT, links)).json<BeregningsresultatTilbakekreving>(),
  });

const getVedtaksbrevOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VEDTAKSBREV, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.VEDTAKSBREV, links)).json<Vedtaksbrev>(),
  });

const getFeilutbetalingFaktaOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FEILUTBETALING_FAKTA, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.FEILUTBETALING_FAKTA, links)).json<FeilutbetalingFakta>(),
  });

const getFeilutbetalingÅrsakOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FEILUTBETALING_AARSAK, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.FEILUTBETALING_AARSAK, links)).json<FeilutbetalingAarsak[]>(),
  });

const getBeregningsresultatDagytelseOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(BehandlingRel.BEREGNINGRESULTAT_DAGYTELSE, links))
        .json<BeregningsresultatDagytelse>(),
  });

const getFamiliehendelseOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FAMILIEHENDELSE, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.FAMILIEHENDELSE, links)).json<FamilieHendelseSamling>(),
  });

const getSøknadOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SOKNAD, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.SOKNAD, links)).json<Soknad>(),
  });

const getFeriepengegrunnlagOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FERIEPENGEGRUNNLAG, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.FERIEPENGEGRUNNLAG, links)).json<Feriepengegrunnlag>(),
  });

const getTilbakekrevingValgOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.TILBAKEKREVINGVALG, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.TILBAKEKREVINGVALG, links)).json<TilbakekrevingValg>(),
  });

const getBeregningsgrunnlagOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGSGRUNNLAG, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.BEREGNINGSGRUNNLAG, links)).json<Beregningsgrunnlag>(),
  });

const getSimuleringResultatOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SIMULERING_RESULTAT, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.SIMULERING_RESULTAT, links)).json<SimuleringResultat>(),
  });

const getBeregningDagytelseOriginalBehandlingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING, links)).json<{
        'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
        'beregningsresultat-foreldrepenger'?: BeregningsresultatDagytelse;
      }>(),
  });

const getArbeidOgInntektOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.ARBEID_OG_INNTEKT, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.ARBEID_OG_INNTEKT, links)).json<ArbeidOgInntektsmelding>(),
  });

const getSvangerskapspengerTilretteleggingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SVANGERSKAPSPENGER_TILRETTELEGGING, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(BehandlingRel.SVANGERSKAPSPENGER_TILRETTELEGGING, links))
        .json<FodselOgTilrettelegging>(),
  });

const getOpptjeningOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.OPPTJENING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.OPPTJENING, links)).json<Opptjening>(),
  });

const getBeregningsresultatEngangsstønadOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.BEREGNINGRESULTAT_ENGANGSSTONAD, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.BEREGNINGRESULTAT_ENGANGSSTONAD, links)).json<BeregningsresultatEs>(),
  });

const getMedlemskapOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.MEDLEMSKAP, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.MEDLEMSKAP, links)).json<Medlemskap>(),
  });

const getUttaksresultatPerioderOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTTAKSRESULTAT_PERIODER, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.UTTAKSRESULTAT_PERIODER, links)).json<UttaksresultatPeriode>(),
  });

const getUttakStønadskontoerOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTTAK_STONADSKONTOER, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.UTTAK_STONADSKONTOER, links)).json<UttakStonadskontoer>(),
  });

const getYtelsefordelingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.YTELSEFORDELING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.YTELSEFORDELING, links)).json<Ytelsefordeling>(),
  });

const getDokumentasjonVurderingBehovOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.DOKUMENTASJON_VURDERING_BEHOV, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(BehandlingRel.DOKUMENTASJON_VURDERING_BEHOV, links))
        .json<DokumentasjonVurderingBehov[]>(),
  });

const getUttakKontrollerFaktaPerioderOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTTAK_KONTROLLER_FAKTA_PERIODER_V2, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(BehandlingRel.UTTAK_KONTROLLER_FAKTA_PERIODER_V2, links))
        .json<KontrollerFaktaPeriode[]>(),
  });

const getFaktaArbeidsforholdOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FAKTA_ARBEIDSFORHOLD, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.FAKTA_ARBEIDSFORHOLD, links)).json<FaktaArbeidsforhold[]>(),
  });

const getFamiliehendelseOrigninalBehandlingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.FAMILIEHENDELSE_ORIGINAL_BEHANDLING, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.FAMILIEHENDELSE_ORIGINAL_BEHANDLING, links)).json<FamilieHendelse>(),
  });

const getSøknadOriginalBehandlingOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.SOKNAD_ORIGINAL_BEHANDLING, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.SOKNAD_ORIGINAL_BEHANDLING, links)).json<Soknad>(),
  });

const getInntektsmeldingerOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNTEKTSMELDINGER, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.INNTEKTSMELDINGER, links)).json<Inntektsmelding[]>(),
  });

const getInntektArbeidYtelseOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.INNTEKT_ARBEID_YTELSE, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.INNTEKT_ARBEID_YTELSE, links)).json<InntektArbeidYtelse>(),
  });

const getUtlandDokStatusOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.UTLAND_DOK_STATUS, behandling.uuid, behandling.versjon],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(BehandlingRel.UTLAND_DOK_STATUS, links)).json<{
        dokStatus?: string;
      }>(),
  });

const getVergeOptions = (links?: Link[]) => (behandling: Behandling) =>
  queryOptions({
    queryKey: [BehandlingRel.VERGE, behandling.uuid, behandling.versjon],
    queryFn: () => kyExtended.get(getUrlFromRel(BehandlingRel.VERGE, links)).json<Verge>(),
  });

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

export const doGetRequest = <T>(url: string) => kyExtended.get(url).json<T>();

const getÅpneBehandlingForEndring = (links?: Link[]) => (behandlingUuid: string, behandlingVersjon: number) =>
  kyExtended.post(getUrlFromRel(BehandlingRel.OPEN_BEHANDLING_FOR_CHANGES, links), {
    json: { behandlingUuid, behandlingVersjon },
  });

const getNyBehandlendeEnhet = (links?: Link[]) => (params: NyBehandlendeEnhet) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.BEHANDLING_NY_BEHANDLENDE_ENHET, links), {
      json: params,
    })
    .json<void>();

const getHenleggBehandling =
  (links?: Link[]) =>
  (params: { behandlingUuid: string; årsakKode: string; begrunnelse: string; behandlingVersjon: number }) =>
    kyExtended
      .post(getUrlFromRel(BehandlingRel.HENLEGG_BEHANDLING, links), {
        json: params,
      })
      .json<void>();

const getSettBehandlingPåVent =
  (links?: Link[]) =>
  (params: { behandlingUuid: string; behandlingVersjon: number; frist: string; ventearsak: string }) =>
    kyExtended
      .post(getUrlFromRel(BehandlingRel.BEHANDLING_ON_HOLD, links), {
        json: params,
      })
      .json<void>();

const getOppdaterPåVent = (links?: Link[]) => (params: SettPaVentParams) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.UPDATE_ON_HOLD, links), {
      json: params,
    })
    .json<void>();

const getFortsettBehandling = (links?: Link[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post<Behandling>(getUrlFromRel(BehandlingRel.RESUME_BEHANDLING, links), {
    json: params,
  });

const getOpprettVerge = (links?: Link[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post<Behandling>(getUrlFromRel(BehandlingRel.VERGE_OPPRETT, links), {
    json: params,
  });

const getFjernVerge = (links?: Link[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post<Behandling>(getUrlFromRel(BehandlingRel.VERGE_FJERN, links), {
    json: params,
  });

const getLagreAksjonspunkt = (links?: Link[]) => (params: AksjonspunktArgs) =>
  kyExtended.post<Behandling>(getUrlFromRel(BehandlingRel.SAVE_AKSJONSPUNKT, links), {
    json: params,
  });

const getLagreOverstyrtAksjonspunkt = (links?: Link[]) => (params: OverstyrteAksjonspunktArgs) =>
  kyExtended.post<Behandling>(getUrlFromRel(BehandlingRel.SAVE_OVERSTYRT_AKSJONSPUNKT, links), {
    json: params,
  });

const getRegistrerArbeidsforholdForAOI = (links?: Link[]) => (params: ManueltArbeidsforhold) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD, links), {
      json: params,
    })
    .json<void>();

const getLagreVurderingForAOI = (links?: Link[]) => (params: ManglendeInntektsmeldingVurdering) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.ARBEID_OG_INNTEKT_LAGRE_VURDERING, links), {
      json: params,
    })
    .json<void>();

const getÅpneForNyVurderingAOI = (links?: Link[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING, links), {
      json: params,
    })
    .json<void>();

const getMellomlagreFormkravVurdering = (links?: Link[]) => (params: FormkravMellomlagretDataType) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.SAVE_FORMKRAV_VURDERING, links), {
      json: params,
    })
    .json<void>();

const getMellomlagreKlageVurdering =
  (links?: Link[]) =>
  (
    params: AksjonspunktVerdier & {
      behandlingUuid: string;
    },
  ) =>
    kyExtended
      .post(getUrlFromRel(BehandlingRel.SAVE_KLAGE_VURDERING, links), {
        json: params,
      })
      .json<void>();

const getBeregneBeløp = (links?: Link[]) => (params: BeregnBeløpParams) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.BEREGNE_BELØP, links), {
      json: params,
    })
    .json<void>();

const getOppdaterStønadskontoer = (links?: Link[]) => (params: { behandlingUuid: string; perioder: PeriodeSoker[] }) =>
  kyExtended
    .post(getUrlFromRel(BehandlingRel.STONADSKONTOER_GITT_UTTAKSPERIODER, links), {
      json: params,
    })
    .json<void>();

export const useBehandlingApi = (behandling: Behandling) => {
  const links = behandling.links;
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
    uttaksresultatPerioderOptions: getUttaksresultatPerioderOptions(links),
    uttakStønadskontoerOptions: getUttakStønadskontoerOptions(links),
    ytelsefordelingOptions: getYtelsefordelingOptions(links),
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
    pollForResponse: {
      gjenopptaBehandling: getFortsettBehandling(links),
      åpneBehandlingForEndring: getÅpneBehandlingForEndring(links),
      lagreAksjonspunkt: getLagreAksjonspunkt(links),
      lagreOverstyrtAksjonspunkt: getLagreOverstyrtAksjonspunkt(links),
      opprettVerge: getOpprettVerge(links),
      fjernVerge: getFjernVerge(links),
    },
  };
};
