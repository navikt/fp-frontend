import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import arbeidsforholdHandlingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdHandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import stonadskontoType from '@fpsak-frontend/kodeverk/src/stonadskontoType';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import {
  Aksjonspunkt,
  Behandling, BeregningsresultatFp, Fagsak, FamilieHendelse, FamilieHendelseSamling, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TilkjentYtelseProsessIndex from './TilkjentYtelseProsessIndex';

const fagsak = {
  fagsakYtelseType: fagsakYtelseType.FORELDREPENGER,
} as Fagsak;

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const familiehendelse = {
  gjeldende: {
    avklartBarn: [{
      fodselsdato: '2019-01-01',
    }],
    omsorgsovertakelseDato: '2019-01-01',
    soknadType: soknadType.FODSEL,
  } as FamilieHendelse,
} as FamilieHendelseSamling;

const personoversikt = {
  bruker: {
    kjønn: navBrukerKjonn.KVINNE,
  },
} as Personoversikt;

const beregningresultat = {
  sokerErMor: true,
  perioder: [{
    andeler: [{
      uttak: {
        stonadskontoType: stonadskontoType.FELLESPERIODE,
      },
      aktivitetStatus: aktivitetStatus.ARBEIDSTAKER,
      arbeidsforholdType: arbeidsforholdHandlingType.NYTT_ARBEIDSFORHOLD,
    }],
    fom: '2019-01-01',
    tom: '2019-01-10',
    dagsats: 1000,
  }],
} as BeregningsresultatFp;

const soknad = {
  mottattDato: '2019-01-01',
  soknadType: soknadType.FODSEL,
  omsorgsovertakelseDato: '2019-01-10',
  fodselsdatoer: {
    1: '2019-01-01',
  } as {[key: number]: string},
  adopsjonFodelsedatoer: {
    1: '2019-01-01',
  } as {[key: number]: string},
  termindato: '2019-02-01',
} as Soknad;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

export default {
  title: 'prosess/prosess-tilkjent-ytelse',
  component: TilkjentYtelseProsessIndex,
};

const Template: Story<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
}> = ({
  submitCallback,
  aksjonspunkter,
}) => (
  <TilkjentYtelseProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={false}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    beregningresultat={beregningresultat}
    familiehendelse={familiehendelse}
    personoversikt={personoversikt}
    soknad={soknad}
    fagsak={fagsak}
    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
  />
);

export const UtenAksjonspunkt = Template.bind({});
UtenAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [],
};

export const ÅpentAksjonspunkt = Template.bind({});
ÅpentAksjonspunkt.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.VURDER_TILBAKETREKK,
    status: aksjonspunktStatus.OPPRETTET,
  }] as Aksjonspunkt[],
};
