import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import VarselOmRevurderingProsessIndex from '@fpsak-frontend/prosess-varsel-om-revurdering';
import {
  Aksjonspunkt, Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad,
} from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
  behandlingÅrsaker: [{
    erAutomatiskRevurdering: true,
  }],
  sprakkode: {
    kode: 'NN',
  },
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
  },
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [{
      fodselsdato: '2019-01-10',
      dodsdato: undefined,
    }],
  },
  gjeldende: {
    termindato: '2019-01-01',
    vedtaksDatoSomSvangerskapsuke: '2019-01-01',
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as {[key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
} as Soknad;

const soknadOriginalBehandling = {
  ...soknad,
} as Soknad;

const familiehendelseOriginalBehandling = {
  avklartBarn: [{
    fodselsdato: '2019-01-10',
  }],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
  },
  begrunnelse: undefined,
}] as Aksjonspunkt[];

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: true,
  status: '',
  vilkar: [],
};

export default {
  title: 'prosess/prosess-varsel-om-revurdering',
  component: VarselOmRevurderingProsessIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visForFørstegangsbehandling = () => (
  <VarselOmRevurderingProsessIndex
    {...standardProsessProps}
    familiehendelse={object('familieHendelse', familieHendelse)}
    soknad={object('soknad', soknad)}
    soknadOriginalBehandling={object('soknadOriginalBehandling', soknadOriginalBehandling)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelseOriginalBehandling)}
    previewCallback={action('button-click') as any}
  />
);

export const visForRevurdering = () => (
  <VarselOmRevurderingProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      behandlingType: {
        kode: behandlingType.REVURDERING,
      },
    } as Behandling}
    familiehendelse={object('familieHendelse', familieHendelse)}
    soknad={object('soknad', soknad)}
    soknadOriginalBehandling={object('soknadOriginalBehandling', soknadOriginalBehandling)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelseOriginalBehandling)}
    previewCallback={action('button-click') as any}
  />
);
