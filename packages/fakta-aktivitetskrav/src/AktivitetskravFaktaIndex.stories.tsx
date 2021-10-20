import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { Behandling, UttakKontrollerAktivitetskrav, Aksjonspunkt } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const uttakKontrollerAktivitetskravListe = [{
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
}] as UttakKontrollerAktivitetskrav[];

const merknaderFraBeslutter = {
  notAccepted: true,
};

export default {
  title: 'fakta/fakta-aktivitetskrav',
  component: AktivitetskravFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}> = ({
  aksjonspunkter,
  uttakKontrollerAktivitetskrav,
  submitCallback,
  readOnly,
  submittable,
  alleMerknaderFraBeslutter = {},
}) => (
  <AktivitetskravFaktaIndex
    behandling={behandling}
    uttakKontrollerAktivitetskrav={uttakKontrollerAktivitetskrav}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    readOnly={readOnly}
    harApneAksjonspunkter={aksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktStatus.OPPRETTET)}
    submittable={submittable}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    setFormData={() => undefined}
  />
);

export const AksjonspunktMedToUavklartePerioder = Template.bind({});
AksjonspunktMedToUavklartePerioder.args = {
  aksjonspunkter: [{
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
  }],
  uttakKontrollerAktivitetskrav: uttakKontrollerAktivitetskravListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
};

export const AksjonspunktSomErBekreftet = Template.bind({});
AksjonspunktSomErBekreftet.args = {
  aksjonspunkter: [{
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
  }],
  uttakKontrollerAktivitetskrav: [uttakKontrollerAktivitetskravListe[0]],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: true,
  submittable: false,
};

export const AksjonspunktSomErReåpnetAvBeslutter = Template.bind({});
AksjonspunktSomErReåpnetAvBeslutter.args = {
  aksjonspunkter: [{
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
  }],
  uttakKontrollerAktivitetskrav: uttakKontrollerAktivitetskravListe,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  submittable: true,
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV]: merknaderFraBeslutter,
  },
};
