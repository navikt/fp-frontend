import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  BehandlingArsakTypeEnum,
  BehandlingResultatType,
  BehandlingStatusEnum,
  BehandlingTypeEnum,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import type { Behandling } from '@navikt/fp-types';

export const behandling: Behandling = {
  uuid: 'a47091ce-638c-403a-8ef9-b4419b4d4313',
  versjon: 26,
  type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
  status: BehandlingStatusEnum.BEHANDLING_UTREDES,
  opprettet: '2025-03-05T16:42:58',

  behandlendeEnhetId: '4867',
  behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser foreldrepenger',
  erAktivPapirsoknad: false,
  førsteÅrsak: {
    erAutomatiskRevurdering: false,
    behandlingArsakType: BehandlingArsakTypeEnum.RE_ENDRET_INNTEKTSMELDING,
    manueltOpprettet: false,
  },
  gjeldendeVedtak: false,
  behandlingHenlagt: false,
  behandlingPåVent: false,

  språkkode: 'NB',
  behandlingKøet: false,

  toTrinnsBehandling: false,
  behandlingsresultat: {
    id: 999951,
    type: BehandlingResultatType.IKKE_FASTSATT,

    rettenTil: '-',
    konsekvenserForYtelsen: [],
    vedtaksbrev: '-',

    harRedigertVedtaksbrev: false,
    erRevurderingMedUendretUtfall: false,
    skjæringstidspunkt: {
      dato: '2025-02-12',
    },

    vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
  },
  behandlingÅrsaker: [
    {
      erAutomatiskRevurdering: false,
      behandlingArsakType: BehandlingArsakTypeEnum.RE_ENDRET_INNTEKTSMELDING,
      manueltOpprettet: false,
    },
  ],
  vilkår: [
    {
      vilkarType: VilkarType.SOKERSOPPLYSNINGSPLIKT,
      vilkarStatus: VilkarUtfallType.OPPFYLT,

      lovReferanse: '§§ 21-3',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.MEDLEMSKAPSVILKARET,
      vilkarStatus: VilkarUtfallType.OPPFYLT,

      lovReferanse: '§ 14-2',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.FODSELSVILKARET_MOR,
      vilkarStatus: VilkarUtfallType.OPPFYLT,

      lovReferanse: '§ 14-5, 1. ledd',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.OPPTJENINGSVILKARET,
      vilkarStatus: VilkarUtfallType.OPPFYLT,

      lovReferanse: '§ 14-6',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
      vilkarStatus: VilkarUtfallType.IKKE_VURDERT,

      lovReferanse: '§ 14-7',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.OPPTJENINGSPERIODE,
      vilkarStatus: VilkarUtfallType.OPPFYLT,

      lovReferanse: '§ 14-6 og 14-10',
      overstyrbar: true,
    },
  ],
  links: [
    {
      href: '/fpsak/api/behandlinger/bytt-enhet',
      rel: 'bytt-behandlende-enhet',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandlinger/henlegg',
      rel: 'henlegg-behandling',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandlinger/gjenoppta',
      rel: 'gjenoppta-behandling',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandlinger/sett-pa-vent',
      rel: 'sett-behandling-pa-vent',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandlinger/endre-pa-vent',
      rel: 'endre-pa-vent',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/aksjonspunkt',
      rel: 'lagre-aksjonspunkter',
      type: 'GET',
    },
    {
      href: '/fpsak/api/verge/opprett-verge?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'verge-opprett',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/person/omsorg-og-rett?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'omsorg-og-rett',
      type: 'GET',
    },
    {
      href: '/fpsak/api/verge/opprett',
      rel: 'opprett-verge',
      type: 'GET',
    },
    {
      href: '/fpsak/api/verge/fjern',
      rel: 'fjern-verge',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandlinger/opne-for-endringer',
      rel: 'opne-for-endringer',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/aksjonspunkt/overstyr',
      rel: 'lagre-overstyr-aksjonspunkter',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/uttak/stonadskontoerGittUttaksperioder',
      rel: 'lagre-stonadskontoer-gitt-uttaksperioder',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/aksjonspunkt-v2?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'aksjonspunkter',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/soknad?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'soknad',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/soknad-backend?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'soknad-backend',
      type: 'GET',
    },
    {
      href: '/fpsak/api/dokument/hent-mottattdokumentliste?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'mottattdokument',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/fodsel/fakta-fodsel?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'fakta-fødsel',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/person/personoversikt?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'behandling-personoversikt',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/person/medlemskap-v3?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'soeker-medlemskap-v3',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/inntekt-arbeid-ytelse?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'inntekt-arbeid-ytelse',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/arbeidsgivere-opplysninger?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'arbeidsgivere-oversikt',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/alle-inntektsmeldinger?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'inntektsmeldinger',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/ytelsefordeling?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'ytelsefordeling',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/omsorg-og-rett?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'omsorg-og-rett',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/opptjening?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'opptjening',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/feriepengegrunnlag?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'feriepengegrunnlag',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/beregningsgrunnlag?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'beregningsgrunnlag',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/uttak/fakta-arbeidsforhold?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'fakta-arbeidsforhold',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'arbeidsforhold-inntektsmelding',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/lagre-arbeidsforhold',
      rel: 'arbeidsforhold-inntektsmelding-registrer',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/lagre-vurdering',
      rel: 'arbeidsforhold-inntektsmelding-vurder',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/apne-for-ny-vurdering',
      rel: 'arbeidsforhold-inntektsmelding-apne-for-ny-vurdering',
      type: 'GET',
    },
    {
      href: '/fpsak/api/behandling/uttak/kontroller-fakta-perioder-v2?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'uttak-kontroller-fakta-perioder-v2',
      type: 'GET',
    },
  ],
  aksjonspunkt: [
    {
      definisjon: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
      status: AksjonspunktStatus.OPPRETTET,

      vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
      toTrinnsBehandling: true,

      aksjonspunktType: AksjonspunktType.MANUELL,
      kanLoses: true,
      erAktivt: true,
    },
  ],
  harSøknad: true,
  harSattEndringsdato: false,
  alleUttaksperioderAvslått: false,
  sjekkSimuleringResultat: false,
};
