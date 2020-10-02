import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import relatertYtelseTilstand from '@fpsak-frontend/kodeverk/src/relatertYtelseTilstand';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import {
  Behandling, FamilieHendelseSamling, InntektArbeidYtelse, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import withReduxProvider from '../../decorators/withRedux';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  id: 1,
  versjon: 1,
} as Behandling;

const familieHendelse = {
  gjeldende: {
    termindato: '2019-01-01',
    utstedtdato: '2019-01-01',
    antallBarnTermin: 1,
    dokumentasjonForeligger: true,
  },
} as FamilieHendelseSamling;

const soknad = {
  fodselsdatoer: { 1: '2019-01-10' } as { [key: number]: string },
  utstedtdato: '2019-01-02',
  antallBarn: 1,
  soknadType: {
    kode: soknadType.FODSEL,
    kodeverk: '',
  },
  farSokerType: {
    kode: 'ADOPTERER_ALENE',
    kodeverk: 'FAR_SOEKER_TYPE',
  },
} as Soknad;

const personopplysninger = {
  aktoerId: '1',
  navn: 'Espen Utvikler',
  navBrukerKjonn: {
    kode: navBrukerKjonn.KVINNE,
    kodeverk: '',
  },
  personstatus: {
    kode: personstatusType.BOSATT,
    kodeverk: '',
  },
  barnSoktFor: [],
} as Personopplysninger;

const inntektArbeidYtelse = {
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [{
    tilgrensendeYtelserListe: [{
      status: relatertYtelseTilstand.LOPENDE,
      periodeFraDato: '2019-01-01',
      saksNummer: '2323',
    }],
    relatertYtelseType: relatertYtelseType.FORELDREPENGER,
  }],
  skalKunneLeggeTilNyeArbeidsforhold: false,
} as InntektArbeidYtelse;

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
  title: 'fakta/fakta-omsorg-og-foreldreansvar',
  component: OmsorgOgForeldreansvarFaktaIndex,
  decorators: [withKnobs, withReduxProvider],
};

export const visÅpentAksjonspunktForOmsorgovertakelse = () => (
  <OmsorgOgForeldreansvarFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familieHendelse)}
    personopplysninger={object('personopplysninger', personopplysninger)}
    inntektArbeidYtelse={object('inntektArbeidYtelse', inntektArbeidYtelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.OMSORGSOVERTAKELSE,
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
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.OMSORGSOVERTAKELSE]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visÅpentAksjonspunktForAvklareVilkårForForeldreansvar = () => (
  <OmsorgOgForeldreansvarFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={object('soknad', soknad)}
    familiehendelse={object('familiehendelse', familieHendelse)}
    personopplysninger={object('personopplysninger', personopplysninger)}
    inntektArbeidYtelse={object('inntektArbeidYtelse', inntektArbeidYtelse)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
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
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
    alleKodeverk={alleKodeverk as any}
  />
);
