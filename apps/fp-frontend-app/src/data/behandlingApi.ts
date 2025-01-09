import { DetaljerteFeilutbetalingsperioder, FeilutbetalingPerioderWrapper } from '@navikt/ft-prosess-tilbakekreving';
import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import { FormkravMellomlagretDataType } from '@navikt/fp-prosess-formkrav';
import { Link } from '@navikt/fp-rest-api';
import { AvklartRisikoklassifiseringAp } from '@navikt/fp-sak-risikoklassifisering';
import {
  AnkeVurdering,
  ArbeidsgiverOpplysningerWrapper,
  Behandling,
  Dokument,
  Fagsak,
  ForhåndsvisMeldingParams,
  Innsyn,
  KlageVurdering,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
  Personoversikt,
  VilkarsVurdertePerioderWrapper,
} from '@navikt/fp-types';
import { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

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
    .json();

const getHenleggBehandling =
  (links?: Link[]) =>
  (params: { behandlingUuid: string; årsakKode: string; begrunnelse: string; behandlingVersjon: number }) =>
    kyExtended
      .post(getUrlFromRel(BehandlingRel.HENLEGG_BEHANDLING, links), {
        json: params,
      })
      .json();

const getSettBehandlingPåVent =
  (links?: Link[]) =>
  (params: { behandlingUuid: string; behandlingVersjon: number; frist: string; ventearsak: string }) =>
    kyExtended
      .post(getUrlFromRel(BehandlingRel.BEHANDLING_ON_HOLD, links), {
        json: params,
      })
      .json();

const getFortsettBehandling = (links?: Link[]) => (params: { behandlingUuid: string; behandlingVersjon: number }) =>
  kyExtended.post(getUrlFromRel(BehandlingRel.RESUME_BEHANDLING, links), {
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

const getMellomlagreKlageVurdering = (links?: Link[]) => (params: any) =>
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

export const useBehandlingApi = (behandling: Behandling) => {
  const links = behandling.links;
  return {
    arbeidsgiverOversiktOptions: getArbeidsgiverOversiktOptions(links),
    behandlingPersonoversiktOptions: getBehandlingPersonoversiktOptions(links),
    endreBehandlendeEnhet: getNyBehandlendeEnhet(links),
    henleggBehandling: getHenleggBehandling(links),
    settBehandlingPåVent: getSettBehandlingPåVent(links),
    registrerArbeidsforholdForAOI: getRegistrerArbeidsforholdForAOI(links),
    lagreVurderingForAOI: getLagreVurderingForAOI(links),
    åpneForNyVurderingAOI: getÅpneForNyVurderingAOI(links),
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
