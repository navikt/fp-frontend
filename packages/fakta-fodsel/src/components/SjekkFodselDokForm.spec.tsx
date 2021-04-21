import React from 'react';
import { shallow } from 'enzyme';

import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, FamilieHendelse, Soknad,
} from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../i18n/nb_NO.json';
import { buildInitialValues, SjekkFodselDokForm } from './SjekkFodselDokForm';

const intlMock = getIntlMock(messages);

const soknad = {
  fodselsdatoer: { 1: '2019-01-01' } as {[key: number]: string},
  antallBarn: 1,
  soknadType: {
    kode: soknadType.FODSEL,
    kodeverk: '',
  },
} as Soknad;
const alleMerknaderFraBeslutter = {
  [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL]: {},
};

describe('<SjekkFodselDokForm>', () => {
  it('skal rendre form', () => {
    const wrapper = shallow(<SjekkFodselDokForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      initialValues={{ begrunnelse: 'test' }}
      submittable
      behandlingType={{ kode: behandlingType.FORSTEGANGSSOKNAD, kodeverk: '' }}
      soknad={soknad}
      alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
      gjeldendeFamiliehendelse={{} as FamilieHendelse}
      aksjonspunkt={{} as Aksjonspunkt}
      avklartBarn={[]}
      submitHandler={() => undefined}
      onSubmit={() => undefined}
    />);
    expect(wrapper.find(FodselSammenligningIndex)).toHaveLength(1);
  });

  it('skal sette korrekte initielle verdier når vi har avklarte data', () => {
    const familiehendelse = {
      avklartBarn: [],
      dokumentasjonForeligger: true,
      brukAntallBarnFraTps: false,
    };
    const aksjonspunkter = {
      definisjon: {
        kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
        kodeverk: '',
      },
      begrunnelse: 'test',
    } as Aksjonspunkt;

    const initialValues = buildInitialValues.resultFunc(familiehendelse as FamilieHendelse, aksjonspunkter, 1);

    expect(initialValues).toEqual({
      avklartBarn: [{
        dodsdato: '',
        fodselsdato: '',
        isBarnDodt: false,
      },
      ],
      dokumentasjonForeligger: true,
      brukAntallBarnITps: false,
      begrunnelse: 'test',
    });
  });

  it('skal sette korrekte initielle verdier når vi ikke har avklarte data', () => {
    const familiehendelse = {};
    const aksjonspunkter = {
      definisjon: {
        kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
        kodeverk: '',
      },
      begrunnelse: 'test',
    } as Aksjonspunkt;
    const initialValues = buildInitialValues.resultFunc(familiehendelse as FamilieHendelse, aksjonspunkter, 1);

    expect(initialValues).toEqual({
      avklartBarn: [{
        dodsdato: '',
        fodselsdato: '',
        isBarnDodt: false,
      },
      ],
      dokumentasjonForeligger: undefined,
      brukAntallBarnITps: undefined,
      begrunnelse: 'test',
    });
  });
});
