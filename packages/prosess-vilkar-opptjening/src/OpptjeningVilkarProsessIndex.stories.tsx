import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { vilkarUtfallType, aksjonspunktStatus, AksjonspunktCode } from '@navikt/fp-kodeverk';
import opptjeningAktivitetKlassifisering from '@navikt/fp-prosess-vilkar-opptjening/src/kodeverk/opptjeningAktivitetKlassifisering';
import { Aksjonspunkt, Behandling, Opptjening } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import OpptjeningVilkarProsessIndex from './OpptjeningVilkarProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

const defaultOpptjening = {
  fastsattOpptjening: {
    opptjeningperiode: {
      måneder: 2,
      dager: 3,
    },
    fastsattOpptjeningAktivitetList: [{
      fom: '2018-01-01',
      tom: '2018-04-04',
      klasse: opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT,
    }, {
      fom: '2018-04-05',
      tom: '2018-04-10',
      klasse: opptjeningAktivitetKlassifisering.ANTATT_AVVIST,
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
  opptjening: Opptjening;
}> = ({
  submitCallback,
  aksjonspunkter,
  opptjening,
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
  opptjening: defaultOpptjening,
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.SVANGERSKAPSVILKARET,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
};

export const ÅpentAksjonspunktMenUtenAktiviteter = Template.bind({});
ÅpentAksjonspunktMenUtenAktiviteter.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  opptjening: {
    ...defaultOpptjening,
    fastsattOpptjening: {
      ...defaultOpptjening.fastsattOpptjening,
      fastsattOpptjeningAktivitetList: [],
    },
  },
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.SVANGERSKAPSVILKARET,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
  }] as Aksjonspunkt[],
};

export const HarIkkeAksjonspunkt = Template.bind({});
HarIkkeAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  opptjening: defaultOpptjening,
  aksjonspunkter: [] as Aksjonspunkt[],
};
