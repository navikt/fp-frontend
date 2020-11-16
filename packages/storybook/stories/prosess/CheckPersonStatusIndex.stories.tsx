import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import CheckPersonStatusIndex from '@fpsak-frontend/prosess-saksopplysninger';
import {
  Aksjonspunkt, Behandling, Medlemskap, Personopplysninger,
} from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const personstatusKodeverk = 'PERSONSTATUS_TYPE';

const behandling = {
  id: 1,
  versjon: 1,
  behandlingHenlagt: false,
} as Behandling;

const medlemskap = {
  fom: '2019-01-01',
} as Medlemskap;

const personopplysninger = {
  personstatus: {
    kode: personstatusType.DOD,
    kodeverk: personstatusKodeverk,
  },
  avklartPersonstatus: {
    orginalPersonstatus: {
      kode: personstatusType.BOSATT,
      kodeverk: personstatusKodeverk,
    },
    overstyrtPersonstatus: {
      kode: personstatusType.DOD,
      kodeverk: personstatusKodeverk,
    },
  },
} as Personopplysninger;

const standardProsessProps = {
  behandling: object('behandling', behandling),
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
  title: 'prosess/prosess-saksopplysninger',
  component: CheckPersonStatusIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visÅpentAksjonspunkt = () => (
  <CheckPersonStatusIndex
    {...standardProsessProps}
    medlemskap={object('medlemskap', medlemskap)}
    personopplysninger={object('personopplysninger', personopplysninger)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_PERSONSTATUS,
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: undefined,
    }] as Aksjonspunkt[]}
  />
);

export const visUtførtAksjonspunkt = () => (
  <CheckPersonStatusIndex
    {...standardProsessProps}
    medlemskap={object('medlemskap', medlemskap)}
    personopplysninger={object('personopplysninger', personopplysninger)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_PERSONSTATUS,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      begrunnelse: 'Dette er en begrunnelse',
    }] as Aksjonspunkt[]}
    isReadOnly
    readOnlySubmitButton
  />
);
