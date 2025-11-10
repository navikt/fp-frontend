import { type ComponentProps, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type {
  BehandlingFpSak,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  BrevOverstyring,
  Fagsak,
} from '@navikt/fp-types';

import mal from '../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../.storybook/brevmal/redigertInnhold.html?raw';
import { VedtakEditeringProvider } from './VedtakEditeringContext';
import { VedtakProsessIndex } from './VedtakProsessIndex';

const defaultAksjonspunkt = lagAksjonspunkt(AksjonspunktKode.FORESLÅ_VEDTAK);

const defaultBehandling: BehandlingFpSak = {
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
  aksjonspunkt: [defaultAksjonspunkt],
  behandlingÅrsaker: [
    {
      behandlingArsakType: 'RE-ANNET',
      erAutomatiskRevurdering: false,
      manueltOpprettet: false,
    },
  ],
  behandlendeEnhetId: '',
  behandlendeEnhetNavn: '',
  erAktivPapirsoknad: false,
  aktivPapirsøknad: false,
  vilkår: [lagVilkår('FP_VK_1', { vilkarStatus: 'OPPFYLT' })],
  links: [],
  harSøknad: false,
  harSattEndringsdato: false,
  id: 1,
  opprettet: '2017-08-02T00:54:25.455',
};

const defaultberegningresultatDagytelse: BeregningsresultatDagytelse = {
  perioder: undefined,
};

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
    previewCallback: action('preview'),
    ferdigstillOppgave: action('ferdigstill') as (oppgaveId: string) => Promise<void>,
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    behandling: defaultBehandling,
    isReadOnly: false,
    fagsak: defaultSak,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    harHentBrevOverstyringLenke: true,
  },
  render: args => {
    const [redigertHtml, setRedigertHtml] = useState<string | null>(null);

    const mellomlagreBrevOverstyring = (redigert: string | null) => {
      setRedigertHtml(redigert);
      action('mellomlagre')(redigert);
      return Promise.resolve();
    };

    return (
      <VedtakEditeringProvider
        behandling={args.behandling ?? defaultBehandling}
        hentBrevOverstyring={
          args.harHentBrevOverstyringLenke
            ? () => {
                return redigertHtml
                  ? Promise.resolve({
                      opprinneligHtml: args.brevOverstyring.opprinneligHtml,
                      redigertHtml,
                    })
                  : Promise.resolve(args.brevOverstyring);
              }
            : undefined
        }
        hentBrevOverstyringIsPending={false}
        mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
      >
        <VedtakProsessIndex {...args} />
      </VedtakEditeringProvider>
    );
  },
} satisfies Meta<
  PanelDataArgs & { brevOverstyring: BrevOverstyring; harHentBrevOverstyringLenke?: boolean } & ComponentProps<
      typeof VedtakProsessIndex
    >
>;
export default meta;

type Story = StoryObj<typeof meta>;

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const InnvilgetForeldrepengerTilGodkjenningForSaksbehandler: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: defaultberegningresultatDagytelse,
  },
};

export const GodkjentForeldrepengerForSaksbehandler: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: 'AVSLU',
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
    isReadOnly: true,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
    isReadOnly: true,
  },
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
  },
};

export const TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    aksjonspunkterForPanel: [
      defaultAksjonspunkt,
      lagAksjonspunkt(AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK, {
        kanLoses: false,
      }),
      lagAksjonspunkt(AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK, {
        kanLoses: false,
      }),
      lagAksjonspunkt(AksjonspunktKode.VURDERE_INNTEKTSMELDING_FØR_VEDTAK, {
        kanLoses: false,
      }),
      lagAksjonspunkt(AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST, {
        kanLoses: false,
      }),
    ],
    beregningsresultat: defaultberegningresultatDagytelse,
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
  },
};

export const OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    aksjonspunkterForPanel: [
      defaultAksjonspunkt,
      lagAksjonspunkt(AksjonspunktKode.VURDERE_ANNEN_YTELSE_FØR_VEDTAK, {
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      }),
      lagAksjonspunkt(AksjonspunktKode.VURDERE_DOKUMENT_FØR_VEDTAK, {
        begrunnelse: 'Dette er en begrunnelse',
        kanLoses: false,
      }),
    ],
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
      fagsakYtelseType: 'ES',
    },
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
  },
};

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
  },
};

export const InnvilgetEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
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
    } satisfies BehandlingFpSak,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'ES',
    },
  },
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    fagsak: {
      ...defaultSak,
      fagsakYtelseType: 'SVP',
    },
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
    isReadOnly: true,
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
    } satisfies BehandlingFpSak,
    originaltBeregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    originaltBeregningsresultat: defaultberegningresultatDagytelse,
    isReadOnly: true,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
    isReadOnly: true,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
      vilkår: [lagVilkår('FP_VK_3', { vilkarStatus: 'IKKE_OPPFYLT' })],
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
    isReadOnly: true,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: defaultberegningresultatDagytelse,
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
    } satisfies BehandlingFpSak,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
  },
};

export const SkalIkkeKunneRedigereVedtaksbrevNårEnIkkeHarLenke: Story = {
  args: {
    ...InnvilgetForeldrepengerTilGodkjenningForSaksbehandler.args,
    harHentBrevOverstyringLenke: false,
  },
};
