import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { ArbeidsgiverOpplysningerPerId, SimuleringResultat, TilbakekrevingValg } from '@navikt/fp-types';

import { SimuleringProsessIndex } from './SimuleringProsessIndex';

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  123: {
    erPrivatPerson: false,
    identifikator: '123',
    referanse: '123',
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
        mottakerType: 'ARBG_ORG',
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
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    arbeidsgiverOpplysningerPerId,
    simuleringResultat,
    previewFptilbakeCallback: action('button-click') as (data: { mottaker: string; fritekst: string }) => Promise<void>,
  },
  render: args => <SimuleringProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SimuleringProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AksjonspunktVurderFeilutbetaling: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VURDER_FEILUTBETALING)],
  },
};

export const AksjonspunktKontrollerEtterbetaling: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER)],
  },
};

export const AksjonspunktVurderFeilutbetalingOgEtterbetaling: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.VURDER_FEILUTBETALING),
      lagAksjonspunkt(AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER),
    ],
  },
};

export const SimuleringspanelUtenAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [],
    tilbakekrevingvalg: {
      videreBehandling: 'TILBAKEKR_OPPDATER',
      varseltekst: 'varsel-eksempel',
    } as TilbakekrevingValg,
  },
};
