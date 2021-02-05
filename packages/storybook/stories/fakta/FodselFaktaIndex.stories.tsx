import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import {
  Behandling, FamilieHendelse, FamilieHendelseSamling, Soknad,
} from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

const behandling = {
  id: 1,
  versjon: 1,
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
} as Behandling;

const familieHendelse = {
  register: {
    avklartBarn: [{
      fodselsdato: '2019-01-10',
    }],
  },
  gjeldende: {
    avklartBarn: [{
      fodselsdato: '2019-01-01',
    }],
    termindato: '2019-01-01',
    utstedtdato: '2019-01-01',
    antallBarnTermin: 1,
    vedtaksDatoSomSvangerskapsuke: '2019-01-01',
    erOverstyrt: false,
    morForSykVedFodsel: true,
    dokumentasjonForeligger: true,
    brukAntallBarnFraTps: true,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  termindato: '2019-01-01',
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: {
    kode: soknadType.FODSEL,
    kodeverk: '',
  },
} as Soknad;

const soknadOriginalBehandling = {
  ...soknad,
};

const familiehendelseOriginalBehandling = {
  avklartBarn: [{
    fodselsdato: '2019-01-10',
  }],
  termindato: '2019-01-01',
  antallBarnTermin: 1,
} as FamilieHendelse;

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.TERMINBEKREFTELSE,
    kodeverk: '',
  },
  status: {
    kode: aksjonspunktStatus.OPPRETTET,
    kodeverk: '',
  },
  begrunnelse: undefined,
  kanLoses: true,
  erAktivt: true,
}];

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
  title: 'fakta/fakta-fodsel',
  component: FodselFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visAksjonspunktTerminbekreftelse = () => (
  <FodselFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familieHendelse)}
    soknadOriginalBehandling={object('soknadOriginalBehandling', soknadOriginalBehandling)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelseOriginalBehandling)}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.TERMINBEKREFTELSE]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visAksjonspunktSjekkManglendeFødsel = () => (
  <FodselFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familieHendelse)}
    soknadOriginalBehandling={object('soknadOriginalBehandling', soknadOriginalBehandling)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelseOriginalBehandling)}
    aksjonspunkter={aksjonspunkter.map((a) => ({
      ...a,
      definisjon: {
        kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
        kodeverk: '',
      },
    }))}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visAksjonspunktVurderOmVilkårForSykdomErOppfylt = () => (
  <FodselFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familieHendelse)}
    soknadOriginalBehandling={object('soknadOriginalBehandling', soknadOriginalBehandling)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelseOriginalBehandling)}
    aksjonspunkter={aksjonspunkter.map((a) => ({
      ...a,
      definisjon: {
        kode: aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
        kodeverk: '',
      },
    }))}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visPanelForFødselssammenligningNårDetIkkeFinnesAksjonspunkter = () => (
  <FodselFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familieHendelse)}
    soknadOriginalBehandling={object('soknadOriginalBehandling', soknadOriginalBehandling)}
    familiehendelseOriginalBehandling={object('familiehendelseOriginalBehandling', familiehendelseOriginalBehandling)}
    aksjonspunkter={[]}
  />
);
