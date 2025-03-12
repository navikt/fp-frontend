import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  MottakerType,
  TilbakekrevingVidereBehandling,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, SimuleringResultat, TilbakekrevingValg } from '@navikt/fp-types';

import { SimuleringProsessIndex } from './SimuleringProsessIndex';

const arbeidsgiverOpplysningerPerId = {
  123: {
    erPrivatPerson: false,
    identifikator: '123',
    navn: 'test',
  },
};

const simuleringResultat = {
  simuleringResultat: {
    periode: {
      fom: '2019-01-01',
      tom: '2019-03-31',
    },
    sumEtterbetaling: 0,
    sumFeilutbetaling: -49863,
    sumInntrekk: -10899,
    ingenPerioderMedAvvik: false,
    perioderPerMottaker: [
      {
        mottakerType: MottakerType.ARBG,
        mottakerIdentifikator: '123',
        mottakerNummer: 'test',
        resultatPerFagområde: [
          {
            fagOmrådeKode: 'FP',
            rader: [
              {
                feltnavn: 'nyttBeløp',
                resultaterPerMåned: [
                  {
                    periode: {
                      fom: '2019-01-01',
                      tom: '2019-01-31',
                    },
                    beløp: 52619,
                  },
                ],
              },
              {
                feltnavn: 'tidligereUtbetalt',
                resultaterPerMåned: [
                  {
                    periode: {
                      fom: '2019-01-01',
                      tom: '2019-01-31',
                    },
                    beløp: 61795,
                  },
                ],
              },
              {
                feltnavn: 'differanse',
                resultaterPerMåned: [
                  {
                    periode: {
                      fom: '2019-01-01',
                      tom: '2019-01-31',
                    },
                    beløp: -9176,
                  },
                ],
              },
            ],
          },
        ],
        resultatOgMotregningRader: [
          {
            feltnavn: 'inntrekkNesteMåned',
            resultaterPerMåned: [
              {
                periode: {
                  fom: '2019-01-01',
                  tom: '2019-01-31',
                },
                beløp: 0,
              },
            ],
          },
          {
            feltnavn: 'resultat',
            resultaterPerMåned: [
              {
                periode: {
                  fom: '2019-01-01',
                  tom: '2019-01-31',
                },
                beløp: -26486,
              },
            ],
          },
        ],
        nesteUtbPeriode: {
          fom: '2019-10-01',
          tom: '2019-10-31',
        },
      },
    ],
  },
  slåttAvInntrekk: false,
} as SimuleringResultat;

const meta = {
  title: 'prosess/prosess-simulering',
  component: SimuleringProsessIndex,
  decorators: [withFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId,
    simuleringResultat,
    previewFptilbakeCallback: action('button-click') as (data: any) => Promise<void>,
  },
  render: args => <SimuleringProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SimuleringProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktVurderFeilutbetaling: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
        begrunnelse: null,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
  },
};

export const AksjonspunktKontrollerEtterbetaling: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
        begrunnelse: null,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
  },
};

export const AksjonspunktVurderFeilutbetalingOgEtterbetaling: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
        begrunnelse: null,
        status: AksjonspunktStatus.OPPRETTET,
      },
      {
        definisjon: AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
        begrunnelse: null,
      },
    ] as Aksjonspunkt[],
  },
};

export const SimuleringspanelUtenAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: TilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
      varseltekst: 'varsel-eksempel',
    } as TilbakekrevingValg,
  },
};
