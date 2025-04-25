import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  BehandlingArsakType,
  BehandlingResultatType,
  BehandlingStatus,
  BehandlingType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import type { Behandling } from '@navikt/fp-types';

export const behandling: Behandling = {
  uuid: 'a47091ce-638c-403a-8ef9-b4419b4d4313',
  versjon: 26,
  type: BehandlingType.FORSTEGANGSSOKNAD,
  status: BehandlingStatus.BEHANDLING_UTREDES,
  opprettet: '2025-03-05T16:42:58',
  avsluttet: null,
  behandlendeEnhetId: '4867',
  behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser foreldrepenger',
  erAktivPapirsoknad: false,
  førsteÅrsak: {
    erAutomatiskRevurdering: false,
    behandlingArsakType: BehandlingArsakType.RE_ENDRET_INNTEKTSMELDING,
    manueltOpprettet: false,
  },
  gjeldendeVedtak: false,
  behandlingHenlagt: false,
  behandlingPåVent: false,
  fristBehandlingPåVent: null,
  venteÅrsakKode: null,
  språkkode: 'NB',
  behandlingKøet: false,
  ansvarligSaksbehandler: null,
  toTrinnsBehandling: false,
  behandlingsresultat: {
    id: 999951,
    type: BehandlingResultatType.IKKE_FASTSATT,
    avslagsarsak: null,
    avslagsarsakFritekst: null,
    rettenTil: '-',
    konsekvenserForYtelsen: [],
    vedtaksbrev: '-',
    overskrift: null,
    fritekstbrev: null,
    harRedigertVedtaksbrev: false,
    erRevurderingMedUendretUtfall: false,
    skjæringstidspunkt: {
      dato: '2025-02-12',
    },
    opphørsdato: null,
    vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
  },
  behandlingÅrsaker: [
    {
      erAutomatiskRevurdering: false,
      behandlingArsakType: BehandlingArsakType.RE_ENDRET_INNTEKTSMELDING,
      manueltOpprettet: false,
    },
  ],
  vilkår: [
    {
      vilkarType: VilkarType.SOKERSOPPLYSNINGSPLIKT,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      avslagKode: null,
      lovReferanse: '§§ 21-3',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.MEDLEMSKAPSVILKARET,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      avslagKode: null,
      lovReferanse: '§ 14-2',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.FODSELSVILKARET_MOR,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      avslagKode: null,
      lovReferanse: '§ 14-5, 1. ledd',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.OPPTJENINGSVILKARET,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      avslagKode: null,
      lovReferanse: '§ 14-6',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
      vilkarStatus: VilkarUtfallType.IKKE_VURDERT,
      avslagKode: null,
      lovReferanse: '§ 14-7',
      overstyrbar: true,
    },
    {
      vilkarType: VilkarType.OPPTJENINGSPERIODE,
      vilkarStatus: VilkarUtfallType.OPPFYLT,
      avslagKode: null,
      lovReferanse: '§ 14-6 og 14-10',
      overstyrbar: true,
    },
  ],
  links: [
    {
      href: '/fpsak/api/behandlinger/bytt-enhet',
      rel: 'bytt-behandlende-enhet',
    },
    {
      href: '/fpsak/api/behandlinger/henlegg',
      rel: 'henlegg-behandling',
    },
    {
      href: '/fpsak/api/behandlinger/gjenoppta',
      rel: 'gjenoppta-behandling',
    },
    {
      href: '/fpsak/api/behandlinger/sett-pa-vent',
      rel: 'sett-behandling-pa-vent',
    },
    {
      href: '/fpsak/api/behandlinger/endre-pa-vent',
      rel: 'endre-pa-vent',
    },
    {
      href: '/fpsak/api/behandling/aksjonspunkt',
      rel: 'lagre-aksjonspunkter',
    },
    {
      href: '/fpsak/api/verge/opprett-verge?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'verge-opprett',
    },
    {
      href: '/fpsak/api/behandling/person/omsorg-og-rett?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'omsorg-og-rett',
    },
    {
      href: '/fpsak/api/verge/opprett',
      rel: 'opprett-verge',
    },
    {
      href: '/fpsak/api/verge/fjern',
      rel: 'fjern-verge',
    },
    {
      href: '/fpsak/api/behandlinger/opne-for-endringer',
      rel: 'opne-for-endringer',
    },
    {
      href: '/fpsak/api/behandling/aksjonspunkt/overstyr',
      rel: 'lagre-overstyr-aksjonspunkter',
    },
    {
      href: '/fpsak/api/behandling/uttak/stonadskontoerGittUttaksperioder',
      rel: 'lagre-stonadskontoer-gitt-uttaksperioder',
    },
    {
      href: '/fpsak/api/behandling/aksjonspunkt-v2?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'aksjonspunkter',
    },
    {
      href: '/fpsak/api/behandling/soknad?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'soknad',
    },
    {
      href: '/fpsak/api/behandling/soknad-backend?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'soknad-backend',
    },
    {
      href: '/fpsak/api/dokument/hent-mottattdokumentliste?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'mottattdokument',
    },
    {
      href: '/fpsak/api/behandling/familiehendelse/v2?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'familiehendelse-v2',
    },
    {
      href: '/fpsak/api/behandling/fodsel/fakta-fodsel?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'fakta-fødsel',
    },
    {
      href: '/fpsak/api/behandling/person/personoversikt?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'behandling-personoversikt',
    },
    {
      href: '/fpsak/api/behandling/person/medlemskap-v3?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'soeker-medlemskap-v3',
    },
    {
      href: '/fpsak/api/behandling/inntekt-arbeid-ytelse?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'inntekt-arbeid-ytelse',
    },
    {
      href: '/fpsak/api/behandling/arbeidsgivere-opplysninger?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'arbeidsgivere-oversikt',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/alle-inntektsmeldinger?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'inntektsmeldinger',
    },
    {
      href: '/fpsak/api/behandling/ytelsefordeling?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'ytelsefordeling',
    },
    {
      href: '/fpsak/api/behandling/omsorg-og-rett?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'omsorg-og-rett',
    },
    {
      href: '/fpsak/api/behandling/opptjening?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'opptjening',
    },
    {
      href: '/fpsak/api/behandling/feriepengegrunnlag?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'feriepengegrunnlag',
    },
    {
      href: '/fpsak/api/behandling/beregningsgrunnlag?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'beregningsgrunnlag',
    },
    {
      href: '/fpsak/api/behandling/uttak/fakta-arbeidsforhold?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'fakta-arbeidsforhold',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'arbeidsforhold-inntektsmelding',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/lagre-arbeidsforhold',
      rel: 'arbeidsforhold-inntektsmelding-registrer',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/lagre-vurdering',
      rel: 'arbeidsforhold-inntektsmelding-vurder',
    },
    {
      href: '/fpsak/api/behandling/arbeid-inntektsmelding/apne-for-ny-vurdering',
      rel: 'arbeidsforhold-inntektsmelding-apne-for-ny-vurdering',
    },
    {
      href: '/fpsak/api/behandling/uttak/kontroller-fakta-perioder-v2?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'uttak-kontroller-fakta-perioder-v2',
    },
  ],
  aksjonspunkt: [
    {
      definisjon: AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: null,
      vilkarType: VilkarType.BEREGNINGSGRUNNLAGVILKARET,
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: null,
      vurderPaNyttArsaker: null,
      besluttersBegrunnelse: null,
      aksjonspunktType: AksjonspunktType.MANUELL,
      kanLoses: true,
      endretTidspunkt: null,
      endretAv: null,
    },
  ],
  harSøknad: true,
  harSattEndringsdato: false,
  alleUttaksperioderAvslått: false,
  sjekkSimuleringResultat: false,
  taskStatus: null,
};
