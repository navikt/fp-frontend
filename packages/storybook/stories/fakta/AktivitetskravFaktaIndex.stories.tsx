import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { Behandling } from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const uttakKontrollerAktivitetskrav = [{
  avklaring: { kode: 'I_AKTIVITET', kodeverk: 'AKTIVITETSKRAV_AVKLARING' },
  begrunnelse: 'Dette er en test',
  fom: '2021-01-01',
  tom: '2021-01-07',
  morsAktivitet: {
    kode: 'INNLAGT',
    kodeverk: 'MORS_AKTIVITET',
  },
  endret: false,
}, {
  avklaring: null,
  begrunnelse: null,
  fom: '2021-01-08',
  tom: '2021-01-13',
  morsAktivitet: {
    kode: 'ARBEID_OG_UTDANNING',
    kodeverk: 'MORS_AKTIVITET',
  },
  endret: false,
}, {
  avklaring: null,
  begrunnelse: null,
  fom: '2021-01-15',
  tom: '2021-01-20',
  morsAktivitet: {
    kode: 'ARBEID_OG_UTDANNING',
    kodeverk: 'MORS_AKTIVITET',
  },
  endret: false,
}];

const merknaderFraBeslutter = {
  notAccepted: true,
};

export default {
  title: 'fakta/fakta-aktivitetskrav',
  component: AktivitetskravFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visAksjonspunktMedToUavklartePerioder = () => (
  <AktivitetskravFaktaIndex
    behandling={behandling}
    uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
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
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    harApneAksjonspunkter={boolean('harApneAksjonspunkter', true)}
    submittable={boolean('submittable', true)}
    alleMerknaderFraBeslutter={{}}
  />
);

export const visAksjonspunktSomErBekreftet = () => (
  <AktivitetskravFaktaIndex
    behandling={behandling}
    uttakKontrollerAktivitetskrav={[uttakKontrollerAktivitetskrav[0]]}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: false,
      erAktivt: false,
    }]}
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={boolean('readOnly', true)}
    harApneAksjonspunkter={boolean('harApneAksjonspunkter', false)}
    submittable={boolean('submittable', false)}
    alleMerknaderFraBeslutter={{}}
  />
);

export const visAksjonspunktSomErReåpnetAvBeslutter = () => (
  <AktivitetskravFaktaIndex
    behandling={behandling}
    uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV,
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
    submitCallback={action('button-click') as (data: any) => Promise<any>}
    readOnly={boolean('readOnly', false)}
    harApneAksjonspunkter={boolean('harApneAksjonspunkter', true)}
    submittable={boolean('submittable', true)}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);
