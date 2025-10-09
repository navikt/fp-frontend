import { type ComponentProps, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData, withRouter } from '@navikt/fp-storybook-utils';
import type {
  Aksjonspunkt,
  Behandling,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  BrevOverstyring,
  Fagsak,
  Vilkar,
} from '@navikt/fp-types';

import mal from '../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../.storybook/brevmal/redigertInnhold.html?raw';
import { VedtakEditeringProvider } from './VedtakEditeringContext';
import { VedtakProsessIndex } from './VedtakProsessIndex';

const defaultAksjonspunkt = {
  definisjon: AksjonspunktKode.FORESLÅ_VEDTAK,
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: false,

  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;
const defaultAksjonspunkter = [defaultAksjonspunkt];

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-002',
  status: 'UTRED',
  språkkode: 'NB',
  behandlingsresultat: {
    type: 'INNVILGET',
    vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
    id: 0,
    harRedigertVedtaksbrev: false,
  },
  behandlingPåVent: false,
  behandlingHenlagt: false,
  aksjonspunkt: defaultAksjonspunkter,
  behandlingÅrsaker: [
    {
      behandlingArsakType: 'RE-ANNET',
      erAutomatiskRevurdering: false,
      manueltOpprettet: false,
    },
  ],
  opprettet: '',
  behandlendeEnhetId: '',
  behandlendeEnhetNavn: '',
  erAktivPapirsoknad: false,
  gjeldendeVedtak: false,
  behandlingKøet: false,
  toTrinnsBehandling: false,
  vilkår: [],
  links: [],
  harSøknad: false,
  harSattEndringsdato: false,
} satisfies Behandling;

const defaultVilkar = [
  {
    lovReferanse: '§§Dette er en lovreferanse',
    vilkarType: 'FP_VK_1',
    vilkarStatus: 'OPPFYLT',
    overstyrbar: true,
  },
] satisfies Vilkar[];

const defaultberegningresultatDagytelse = {
  perioder: undefined,
} satisfies BeregningsresultatDagytelse;

const defaultSak = {
  fagsakYtelseType: 'FP',
  saksnummer: '',
  relasjonsRolleType: '-',
  status: 'AVSLU',
  aktørId: '',
  sakSkalTilInfotrygd: false,
  dekningsgrad: 0,
  bruker: {
    aktørId: undefined,
    navn: '',
    fødselsnummer: '',
    kjønn: '-',
    diskresjonskode: undefined,
    fødselsdato: '',
    dødsdato: undefined,
    dodsdato: undefined,
    språkkode: '-',
  },
  brukerManglerAdresse: false,
  fagsakMarkeringer: [],
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
  historikkinnslag: [],
  notater: [],
  kontrollResultat: {
    kontrollresultat: '-',
    iayFaresignaler: undefined,
    medlFaresignaler: undefined,
    faresignalVurdering: undefined,
  },
  harVergeIÅpenBehandling: false,
} satisfies Fagsak;

const meta = {
  title: 'prosess/prosess-vedtak',
  component: VedtakProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withRouter],
  args: {
    vilkår: defaultVilkar,
    previewCallback: action('button-click'),
    ferdigstillOppgave: action('button-click') as (oppgaveId: string) => Promise<void>,
  },
  render: args => {
    const [redigertHtml, setRedigertHtml] = useState<string | null>(null);

    const mellomlagreBrevOverstyring = (redigert: string | null) => {
      setRedigertHtml(redigert);
      action('button-click')(redigert);
      return Promise.resolve();
    };

    return (
      <VedtakEditeringProvider
        behandling={args.behandling ?? defaultBehandling}
        hentBrevOverstyring={() => {
          return redigertHtml
            ? Promise.resolve({
                opprinneligHtml: args.brevOverstyring.opprinneligHtml,
                redigertHtml,
              })
            : Promise.resolve(args.brevOverstyring);
        }}
        hentBrevOverstyringIsPending={false}
        mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
      >
        <VedtakProsessIndex {...args} />
      </VedtakEditeringProvider>
    );
  },
} satisfies Meta<PanelDataArgs & { brevOverstyring: BrevOverstyring } & ComponentProps<typeof VedtakProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const InnvilgetForeldrepengerTilGodkjenningForSaksbehandler: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentForeldrepengerForSaksbehandler: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'AVSLU',
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'AVSLU',
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: 'INNVILGET',
        harRedigertVedtaksbrev: true,
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: redigertInnhold },
  },
};

export const AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'AVSLU',
      behandlingsresultat: {
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const AvslåttForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: 'AVSLÅTT',
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        ...defaultAksjonspunkter,
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK,
          status: 'OPPR',

          kanLoses: false,
          toTrinnsBehandling: true,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK,
          status: 'OPPR',

          kanLoses: false,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK,
          status: 'OPPR',

          kanLoses: false,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
          status: 'OPPR',

          kanLoses: false,
          toTrinnsBehandling: true,
        },
      ],
    },
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        ...defaultAksjonspunkter,
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK,
          status: 'OPPR',
          begrunnelse: 'Dette er en begrunnelse',
          kanLoses: false,
          toTrinnsBehandling: true,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK,
          status: 'OPPR',
          begrunnelse: 'Dette er en begrunnelse',
          kanLoses: false,
        },
      ],
    },
    oppgaver: [
      {
        oppgaveId: '1',
        oppgavetype: 'VUR_KONSEKVENS',
        beskrivelser: [
          {
            kommentarer: ['VL: Se sto mottatt 24.02.25'],
          },
        ],
        dokumenter: [],
      },
      {
        oppgaveId: '2',
        oppgavetype: 'VUR_KONSEKVENS',
        beskrivelser: [
          {
            header: '--- 19.03.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---',
            kommentarer: [
              'Fullmektig tar kontakt. Ber om fristutsettelse 4 uker, ettersom bruker først mottok brevet i dag. ' +
                'Jeg har utsatt 14 dager, men han ønsker ytterligere 2 uker utover det, altså 28.09.24.',
              'Kan dere gi tilbakemelding på dette?',
            ],
          },
          {
            kommentarer: ['VL: Se sto mottatt 20.02.25'],
          },
        ],
        dokumenter: [],
      },
      {
        oppgaveId: '3',
        oppgavetype: 'VUR_DOKUMENT',
        beskrivelser: [{ kommentarer: ['VL: Bekreftelse fra arbeidsgiver'] }],
        dokumenter: [
          {
            journalpostId: '123',
            dokumentId: '321',
            tittel: 'Dokumentasjon av mors deltakelse i kvalifiseringsprogrammet',
          },
          {
            journalpostId: '123',
            dokumentId: '987',
            tittel: 'Dokumentasjon på reiser til og fra Norge',
          },
          {
            journalpostId: '123',
            dokumentId: '678',
            tittel: 'Ettersendelse til søknad om foreldrepenger ved fødsel',
          },
        ],
      },
      {
        oppgaveId: '4',
        oppgavetype: 'VUR_DOKUMENT',
        beskrivelser: [{ kommentarer: ['VL: Bekreftelse fra studiested/skole'] }],
        dokumenter: [
          {
            journalpostId: '123',
            dokumentId: '456',
            tittel: 'Dokumentasjon på at mor studerer på heltid',
          },
        ],
      },
      {
        oppgaveId: '5',
        oppgavetype: 'VUR_DOKUMENT',
        beskrivelser: [
          {
            header: '--- 19.01.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---',
            kommentarer: [
              'Bruker sier at han har søkt Foreldrepenger, han er i permisjon nå. Han har ikke fått svar, han skriver at saksnr er: 12341234.',
            ],
          },
          {
            kommentarer: [
              'Han har AAP, så det er greit å vite om han får Foreldrepenger før man evt stanser denne ytelsen.',
            ],
          },
          {
            header: '--- 19.02.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---',
            kommentarer: ['Må ringe bruker for å avklare AAP og Foreldrepenger', 'Undersøk dette før vi går videre'],
          },
          { kommentarer: ['VL: Søknad om foreldrepenger ved fødsel'] },
        ],
        dokumenter: [
          {
            journalpostId: '321',
            dokumentId: '456',
            tittel: 'Dokumentasjon av termindato (lev. kun av mor), fødsel eller dato for omsorgsovertakelse',
          },
          {
            journalpostId: '321',
            dokumentId: '678',
            tittel: 'Ettersendelse til søknad om svangerskapspenger til selvstendig næringsdrivende og frilanser',
          },
        ],
      },
    ],
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

/*
 * Førstegangssøknad - Engangsstøand
 */

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentEngangsstønadForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'AVSLU',
    },
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const AvslåttEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: 'AVSLÅTT',
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'SVP',
    },
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

/*
 * Revurdering - Foreldrepenger
 */

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'INNVILGET',
        konsekvenserForYtelsen: ['ENDRING_I_BEREGNING', 'FORELDREPENGER_OPPHØRER'],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      status: 'AVSLU',
      behandlingsresultat: {
        type: 'INNVILGET',
        konsekvenserForYtelsen: ['ENDRING_I_BEREGNING', 'FORELDREPENGER_OPPHØRER'],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'INNVILGET',
        konsekvenserForYtelsen: ['ENDRING_I_BEREGNING', 'FORELDREPENGER_OPPHØRER'],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      status: 'AVSLU',
      behandlingsresultat: {
        type: 'INNVILGET',
        konsekvenserForYtelsen: ['ENDRING_I_BEREGNING', 'FORELDREPENGER_OPPHØRER'],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      status: 'AVSLU',
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: 'INNVILGET',
        konsekvenserForYtelsen: ['FORELDREPENGER_OPPHØRER'],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'AVSLÅTT',
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    originaltBeregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      status: 'AVSLU',
      behandlingsresultat: {
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    originaltBeregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'OPPHØR',
        opphørsdato: '2024-11-01',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'INNVILGET',
        konsekvenserForYtelsen: ['ENDRING_I_BEREGNING'],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'AVSLÅTT',
        konsekvenserForYtelsen: ['ENDRING_I_BEREGNING'],
        avslagsarsak: '1006',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    vilkår: [
      {
        lovReferanse: '§§Dette er en lovreferanse',
        vilkarType: 'FP_VK_3',
        vilkarStatus: 'IKKE_OPPFYLT',
        overstyrbar: true,
      },
    ],
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
      behandlingsresultat: {
        type: 'OPPHØR',
        opphørsdato: '2024-11-01',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const LegacyOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'AVSLU',
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: 'INNVILGET',
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er en fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const LegacyOverstyringHarSendtTilbakeFraBeslutter: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'OPPRE',
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: 'INNVILGET',
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er en fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: defaultSak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const SkalKunneRedigereFooterNårEnHarFagsakmarkeringPraksisUtsettelse: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      ...defaultSak,
      saksnummer: '1234567',
      fagsakYtelseType: 'FP',
      bruker: {
        navn: 'Kari Nordmann',
        fødselsnummer: '',
        kjønn: '-',
        fødselsdato: '',
        språkkode: '-',
      },
      annenPart: {
        navn: 'Ola Nordmann',
        fødselsnummer: '',
        kjønn: '-',
        fødselsdato: '',
        språkkode: '-',
      },
      relasjonsRolleType: 'MORA',
      annenpartBehandling: {
        relasjonsRolleType: 'FARA',
        saksnummer: '',
        behandlingUuid: '',
      },
      fagsakMarkeringer: [
        {
          fagsakMarkering: 'PRAKSIS_UTSETTELSE',
          kortNavn: 'Utsettelse',
        },
      ],
    },
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const SkalIkkeProduseresBrev: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: 'INNVILGET',
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
        id: 0,
        harRedigertVedtaksbrev: false,
      },
    } satisfies Behandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};
