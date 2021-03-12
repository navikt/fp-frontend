import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, object, boolean,
} from '@storybook/addon-knobs';

import mottakerTyper from '@fpsak-frontend/kodeverk/src/mottakerTyper';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import {
  Aksjonspunkt, Behandling, Fagsak, TilbakekrevingValg,
} from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';
import withReduxProvider from '../../decorators/withRedux';

const fagsak = {
  saksnummer: '123',
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
  },
} as Fagsak;

const behandling = {
  id: 1,
  versjon: 1,
  sprakkode: {
    kode: 'NO',
  },
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
      mottakerType: {
        kode: mottakerTyper.ARBG,
        kodeverk: 'MOTTAKER_TYPE',
      },
      mottakerIdentifikator: '123',
      mottakerNummer: 'test',
      mottakerNavn: 'test',
      resultatPerFagområde: [{
        fagOmrådeKode: {
          kode: 'FP',
          navn: 'Foreldrepenger',
          kodeverk: 'FAG_OMRAADE_KODE',
        },
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
  simuleringResultatUtenInntrekk: null,
  slåttAvInntrekk: false,
};

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
};

export default {
  title: 'prosess/prosess-avregning',
  component: AvregningProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visAksjonspunktVurderFeilutbetaling = () => (
  <AvregningProsessIndex
    {...standardProsessProps}
    fagsak={object('fagsak', fagsak)}
    aksjonspunkter={object('aksjonspunkter', [{
      definisjon: {
        kode: aksjonspunktCodes.VURDER_FEILUTBETALING,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[])}
    simuleringResultat={object('simuleringResultat', simuleringResultat)}
    previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>}
  />
);

export const visSimuleringspanelUtenAksjonspunkt = () => (
  <AvregningProsessIndex
    {...standardProsessProps}
    fagsak={object('fagsak', fagsak)}
    simuleringResultat={object('simuleringResultat', simuleringResultat)}
    tilbakekrevingvalg={object('tilbakekrevingvalg', {
      videreBehandling: {
        kode: tilbakekrevingVidereBehandling.TILBAKEKR_OPPDATER,
        kodeverk: '',
      },
      varseltekst: 'varsel-eksempel',
    } as TilbakekrevingValg)}
    previewFptilbakeCallback={action('button-click') as (data: any) => Promise<any>}
  />
);
