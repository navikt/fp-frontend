import React from 'react';
import { action } from '@storybook/addon-actions';

import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import relatertYtelseTilstand from '@fpsak-frontend/kodeverk/src/relatertYtelseTilstand';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import {
  Behandling, FamilieHendelseSamling, InntektArbeidYtelse, Soknad,
} from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
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
  adopsjonFodelsedatoer: { 1: '2019-01-10', 2: '2019-01-11' } as { [key: number]: string },
  utstedtdato: '2019-01-02',
  antallBarn: 2,
  soknadType: {
    kode: soknadType.ADOPSJON,
    kodeverk: '',
  },
  farSokerType: {
    kode: 'ADOPTERER_ALENE',
    kodeverk: 'FAR_SOEKER_TYPE',
  },
} as Soknad;

const personoversikt = {
  bruker: {
    fnr: '',
    navn: 'Olga Utvikler',
    aktoerId: '2',
    diskresjonskode: {
      kode: '',
      kodeverk: '',
    },
    kjønn: {
      kode: navBrukerKjonn.KVINNE,
      kodeverk: '',
    },
    sivilstand: {
      kode: '',
      kodeverk: '',
    },
    fødselsdato: '1979-01-01',
    adresser: [{
      adresseType: {
        kode: opplysningAdresseType.POSTADRESSE,
        kodeverk: '',
      },
      adresselinje1: 'Gateadresse 1',
      postNummer: '1000',
      poststed: 'Oslo',
      land: 'Norge',
    }],
  },
  annenPart: {
    fnr: '',
    navn: 'Espen Utvikler',
    aktoerId: '1',
    diskresjonskode: {
      kode: '',
      kodeverk: '',
    },
    kjønn: {
      kode: navBrukerKjonn.MANN,
      kodeverk: '',
    },
    sivilstand: {
      kode: '',
      kodeverk: '',
    },
    fødselsdato: '1989-01-01',
    dødsdato: '2021-01-01',
    adresser: [],
  },
  barn: [],
};

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
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-omsorg-og-foreldreansvar',
  component: OmsorgOgForeldreansvarFaktaIndex,
};

export const visÅpentAksjonspunktForOmsorgovertakelse = () => (
  <OmsorgOgForeldreansvarFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={soknad}
    familiehendelse={familieHendelse}
    personoversikt={personoversikt}
    inntektArbeidYtelse={inntektArbeidYtelse}
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
      [aksjonspunktCodes.OMSORGSOVERTAKELSE]: merknaderFraBeslutter,
    }}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visÅpentAksjonspunktForAvklareVilkårForForeldreansvar = () => (
  <OmsorgOgForeldreansvarFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    soknad={soknad}
    familiehendelse={familieHendelse}
    personoversikt={personoversikt}
    inntektArbeidYtelse={inntektArbeidYtelse}
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
      [aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR]: merknaderFraBeslutter,
    }}
    alleKodeverk={alleKodeverk as any}
  />
);
