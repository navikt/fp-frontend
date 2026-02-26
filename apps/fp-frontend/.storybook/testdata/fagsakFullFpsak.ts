import { type Fagsak } from '@navikt/fp-types';

export const fagsakFullFpsak: Fagsak = {
  saksnummer: '1',
  fagsakYtelseType: 'FP',
  relasjonsRolleType: 'MORA',
  status: 'UBEH',
  aktørId: '9921487132273',
  sakSkalTilInfotrygd: false,
  dekningsgrad: 100,
  bruker: {
    aktørId: '9921487132273',
    navn: 'Kristine Kalv',
    fødselsnummer: '21487132273',
    kjønn: 'K',
    diskresjonskode: 'UDEF',
    fødselsdato: '1993-03-05',

    språkkode: '-',
  },
  brukerManglerAdresse: false,
  annenPart: {
    aktørId: '9921528317364',
    navn: 'Asbjørn Lemur',
    fødselsnummer: '21528317364',
    kjønn: 'M',
    diskresjonskode: 'UDEF',
    fødselsdato: '1991-03-05',

    språkkode: '-',
  },

  familiehendelse: {
    hendelseType: 'FODSL',
    hendelseDato: '2025-03-05',
    antallBarn: 1,
    dødfødsel: false,
  },
  fagsakMarkeringer: [],
  behandlingTypeKanOpprettes: [
    {
      behandlingType: 'BT-002',
      kanOppretteBehandling: false,
    },
    {
      behandlingType: 'BT-004',
      kanOppretteBehandling: false,
    },
    {
      behandlingType: 'BT-008',
      kanOppretteBehandling: false,
    },
    {
      behandlingType: 'BT-003',
      kanOppretteBehandling: false,
    },
    {
      behandlingType: 'BT-006',
      kanOppretteBehandling: true,
    },
  ],
  behandlinger: [
    {
      uuid: 'a47091ce-638c-403a-8ef9-b4419b4d4313',
      versjon: 26,
      type: 'BT-002',
      status: 'UTRED',
      opprettet: '2025-03-05T16:42:58',

      behandlendeEnhetId: '4867',
      behandlendeEnhetNavn: 'Nav familie- og pensjonsytelser foreldrepenger',
      aktivPapirsøknad: false,
      ugunstAksjonspunkt: false,
      gjeldendeVedtak: false,
      behandlingHenlagt: false,
      behandlingPåVent: false,

      språkkode: 'NB',

      toTrinnsBehandling: false,
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
      links: [
        {
          href: '/fpsak/api/behandling/person/personoversikt?uuid=a47091ce-638c-403a-8ef9-b4419b4d4313',
          rel: 'behandling-personoversikt',
          type: 'GET',
        },
        {
          href: '/fpsak/api/brev/bestill',
          rel: 'brev-bestill',
          type: 'GET',
        },
        {
          href: '/fpsak/api/brev/forhandsvis',
          rel: 'brev-vis',
          type: 'GET',
        },
      ],
      behandlingTillatteOperasjoner: {
        behandlingKanBytteEnhet: true,
        behandlingKanHenlegges: true,
        behandlingKanGjenopptas: false,
        behandlingKanOpnesForEndringer: false,
        behandlingKanSettesPaVent: true,
        behandlingKanSendeMelding: true,
        behandlingFraBeslutter: false,
        behandlingTilGodkjenning: false,
        behandlingKanMerkesHaster: false,
        vergeBehandlingsmeny: 'OPPRETT',
        uuid: '',
      },
      brevmaler: [
        {
          kode: 'INNOPP',
          navn: 'Innhente opplysninger',
          tilgjengelig: true,
        },
        {
          kode: 'FORSAK',
          navn: 'Forlenget saksbehandlingstid',
          tilgjengelig: true,
        },
        {
          kode: 'ELYSIM',
          navn: 'Etterlys inntektsmelding',
          tilgjengelig: false,
        },
      ],
      totrinnskontrollÅrsaker: [],

      kontrollResultat: {
        kontrollresultat: 'IKKE_HOY',
      },

      vilkår: [],
    },
  ],
  historikkinnslag: [
    {
      behandlingUuid: 'a47091ce-638c-403a-8ef9-b4419b4d4313',
      aktør: {
        type: 'SOKER',
      },

      opprettetTidspunkt: '2025-03-05T16:43:01.957',
      dokumenter: [
        {
          tag: 'Søknad',
          journalpostId: '35164101',
          dokumentId: '35164101',
          utgått: false,
        },
      ],
      tittel: 'Behandling er startet',
      linjer: [],
    },
    {
      aktør: {
        type: 'ARBEIDSGIVER',
      },

      opprettetTidspunkt: '2025-03-05T16:43:05.499',
      dokumenter: [
        {
          tag: 'Inntektsmelding (utgått)',
          journalpostId: '35164102',
          dokumentId: '35164102',
          utgått: true,
        },
      ],
      tittel: 'Vedlegg er mottatt',
      linjer: [],
    },
  ],
  notater: [],
  kontrollResultat: {
    kontrollresultat: 'IKKE_HOY',
  },
  harVergeIÅpenBehandling: false,
};
