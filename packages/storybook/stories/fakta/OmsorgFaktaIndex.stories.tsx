import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import OmsorgFaktaIndex from '@fpsak-frontend/fakta-omsorg';
import {
  Behandling, Personopplysninger, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const soknad = {
  oppgittRettighet: {
    omsorgForBarnet: true,
    aleneomsorgForBarnet: true,
  },
} as Soknad;

const personopplysninger = {
  navn: 'Espen Utvikler',
  ektefelle: {
    navn: 'Petra Utvikler',
    personstatus: {
      kode: personstatusType.BOSATT,
      kodeverk: 'PERSONSTATUS_TYPE',
    },
    adresser: [],
  },
  personstatus: {
    kode: personstatusType.BOSATT,
    kodeverk: 'PERSONSTATUS_TYPE',
  },
  barn: [{
    navn: 'Tutta Utvikler',
    dodsdato: '2019-01-01',
    fodselsdato: '2018-01-01',
    adresser: [],
    personstatus: {
      kode: personstatusType.DOD,
      kodeverk: 'PERSONSTATUS_TYPE',
    },
  }],
  adresser: [],
} as Personopplysninger;

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visÅpentAksjonspunktForKontrollAvOmBrukerHarAleneomsorg = () => (
  <OmsorgFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    soknad={object('soknad', soknad)}
    personopplysninger={object('personopplysninger', personopplysninger)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg = () => (
  <OmsorgFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    soknad={object('soknad', soknad)}
    personopplysninger={object('personopplysninger', personopplysninger)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);
