import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import opptjeningAktivitetKlassifisering from '@fpsak-frontend/prosess-vilkar-opptjening/src/kodeverk/opptjeningAktivitetKlassifisering';
import { Aksjonspunkt, Behandling, Opptjening } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OpptjeningVilkarProsessIndex from './OpptjeningVilkarProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const opptjening = {
  fastsattOpptjening: {
    opptjeningperiode: {
      måneder: 2,
      dager: 3,
    },
    fastsattOpptjeningAktivitetList: [{
      fom: '2018-01-01',
      tom: '2018-04-04',
      klasse: {
        kode: opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT,
      },
    }],
    opptjeningFom: '2018-01-01',
    opptjeningTom: '2018-10-01',
  },
} as Opptjening;

export default {
  title: 'prosess/prosess-vilkar-opptjening',
  component: OpptjeningVilkarProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[],
}> = ({
  submitCallback,
  aksjonspunkter,
}) => (
  <OpptjeningVilkarProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status={vilkarUtfallType.IKKE_VURDERT}
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    opptjening={opptjening}
    aksjonspunkter={aksjonspunkter}
    lovReferanse="§§Dette er en lovreferanse"
  />
);

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCodes.SVANGERSKAPSVILKARET,
    },
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
    },
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
};

export const HarIkkeAksjonspunkt = Template.bind({});
HarIkkeAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [] as Aksjonspunkt[],
};
