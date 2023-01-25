import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import mottakerTyper from '@navikt/fp-kodeverk/src/mottakerTyper';
import tilbakekrevingVidereBehandling from '@navikt/fp-kodeverk/src/tilbakekrevingVidereBehandling';
import fagsakYtelseType from '@navikt/fp-kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import AvregningProsessIndex from '@navikt/fp-prosess-avregning';
import {
  Aksjonspunkt, Behandling, Fagsak, SimuleringResultat, TilbakekrevingValg,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

const fagsak = {
  saksnummer: '123',
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: '1',
  versjon: 1,
  sprakkode: 'NO',
} as Behandling;

const simuleringResultat = {
  simuleringResultat: {
    periodeFom: '2019-01-01',
    periodeTom: '2019-03-31',
    sumEtterbetaling: 0,
    sumFeilutbetaling: -49863,
    sumInntrekk: -10899,
    ingenPerioderMedAvvik: false,
    perioderPerMottaker: [{
      mottakerType: mottakerTyper.ARBG,
      mottakerIdentifikator: '123',
      mottakerNummer: 'test',
      mottakerNavn: 'test',
      resultatPerFagområde: [{
        fagOmrådeKode: 'FP',
        rader: [{
          feltnavn: 'nyttBeløp',
          resultaterPerMåned: [{
            periode: {
              fom: '2019-01-01',
              tom: '2019-01-31',
            },
            beløp: 52619,
          }],
        }, {
          feltnavn: 'tidligereUtbetalt',
          resultaterPerMåned: [{
            periode: {
              fom: '2019-01-01',
              tom: '2019-01-31',
            },
            beløp: 61795,
          }],
        }, {
          feltnavn: 'differanse',
          resultaterPerMåned: [{
            periode: {
              fom: '2019-01-01',
              tom: '2019-01-31',
            },
            beløp: -9176,
          }],
        }],
      }],
      resultatOgMotregningRader: [{
        feltnavn: 'inntrekkNesteMåned',
        resultaterPerMåned: [{
          periode: {
            fom: '2019-01-01',
            tom: '2019-01-31',
          },
          beløp: 0,
        }],
      }, {
        feltnavn: 'resultat',
        resultaterPerMåned: [{
          periode: {
            fom: '2019-01-01',
            tom: '2019-01-31',
          },
          beløp: -26486,
        }],
      }],
      nesteUtbPeriodeFom: '2019-10-01',
      nestUtbPeriodeTom: '2019-10-31',
    }],
  },
  slåttAvInntrekk: false,
} as SimuleringResultat;

export default {
  title: 'prosess/prosess-avregning',
  component: AvregningProsessIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  tilbakekrevingvalg?: TilbakekrevingValg;
  isAksjonspunktOpen: boolean;
}> = ({
  aksjonspunkter,
  submitCallback,
  tilbakekrevingvalg,
  isAksjonspunktOpen,
}) => (
  <AvregningProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen={isAksjonspunktOpen}
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    fagsak={fagsak}
    aksjonspunkter={aksjonspunkter}
    simuleringResultat={simuleringResultat}
    tilbakekrevingvalg={tilbakekrevingvalg}
    previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const AksjonspunktVurderFeilutbetaling = Template.bind({});
AksjonspunktVurderFeilutbetaling.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_FEILUTBETALING,
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
  isAksjonspunktOpen: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const SimuleringspanelUtenAksjonspunkt = Template.bind({});
SimuleringspanelUtenAksjonspunkt.args = {
  aksjonspunkter: [],
  isAksjonspunktOpen: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  tilbakekrevingvalg: {
    videreBehandling: tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
    varseltekst: 'varsel-eksempel',
  } as TilbakekrevingValg,
};
