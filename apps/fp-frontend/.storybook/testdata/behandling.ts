import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagVilkår } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak } from '@navikt/fp-types';

export const behandling: BehandlingFpSak = {
  uuid: 'a47091ce-638c-403a-8ef9-b4419b4d4313',
  versjon: 26,
  type: 'BT-002',
  status: 'UTRED',

  behandlendeEnhetId: '4867',
  behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser foreldrepenger',
  aktivPapirsøknad: false,
  behandlingHenlagt: false,
  behandlingPåVent: false,

  språkkode: 'NB',

  behandlingsresultat: {
    id: 999951,
    type: 'IKKE_FASTSATT',

    konsekvenserForYtelsen: [],

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
      behandlingArsakType: 'RE-END-INNTEKTSMELD',
      manueltOpprettet: false,
    },
  ],
  vilkår: [
    lagVilkår('FP_VK_34', {
      vilkarStatus: 'OPPFYLT',
    }),
    lagVilkår('FP_VK_2', {
      vilkarStatus: 'OPPFYLT',
    }),
    lagVilkår('FP_VK_1', {
      vilkarStatus: 'OPPFYLT',
    }),
    lagVilkår('FP_VK_23', {
      vilkarStatus: 'OPPFYLT',
    }),
    lagVilkår('FP_VK_41', {
      vilkarStatus: 'IKKE_VURDERT',
    }),
    lagVilkår('FP_VK_21', {
      vilkarStatus: 'OPPFYLT',
    }),
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
      href: '/fpsak/api/behandling/søknad?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
      rel: 'søknad',
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
      status: 'OPPR',
      vilkarType: 'FP_VK_41',
      toTrinnsBehandling: true,
      aksjonspunktType: 'MANU',
      kanLoses: true,
    },
  ],
  harSøknad: true,
  harSattEndringsdato: false,
  alleUttaksperioderAvslått: false,
  id: 1,
  opprettet: '2017-08-02T00:54:25.455',
};
