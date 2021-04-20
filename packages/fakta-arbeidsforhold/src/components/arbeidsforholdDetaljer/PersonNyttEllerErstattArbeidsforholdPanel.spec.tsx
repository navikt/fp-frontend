import React from 'react';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { SelectField } from '@fpsak-frontend/form';
import { Arbeidsforhold } from '@fpsak-frontend/types';

import PersonNyttEllerErstattArbeidsforholdPanel from './PersonNyttEllerErstattArbeidsforholdPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<PersonNyttEllerErstattArbeidsforholdPanel>', () => {
  const arbeidsgiverOpplysningerPerId = {
    123456789: {
      erPrivatPerson: false,
      identifikator: '123456789',
      navn: 'Svendsen Eksos',
    },
  };

  it('skal vise dropdown med tidligere arbeidsforhold når en har valgt å erstatte gammelt med nytt', () => {
    const wrapper = shallowWithIntl(<PersonNyttEllerErstattArbeidsforholdPanel.WrappedComponent
      intl={intlMock}
      readOnly
      isErstattArbeidsforhold
      arbeidsforholdList={[{
        id: '1',
        arbeidsgiverReferanse: '123456789',
        arbeidsforholdId: '1234-1232',
        fomDato: '2019-10-10',
      }] as Arbeidsforhold[]}
      formName="form"
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);

    const select = wrapper.find(SelectField);
    expect(select).toHaveLength(1);
    expect(select.prop('selectValues').map((v: any) => v.props.children)).toEqual(['Svendsen Eksos(123456789)...1232']);
  });

  it('skal ikke vise dropdown når en ikke har valgt å erstatte gammelt med nytt', () => {
    const wrapper = shallowWithIntl(<PersonNyttEllerErstattArbeidsforholdPanel.WrappedComponent
      intl={intlMock}
      readOnly
      isErstattArbeidsforhold={false}
      arbeidsforholdList={[{
        id: '1',
        arbeidsgiverReferanse: '123456789',
        arbeidsforholdId: '1234-1232',
        fomDato: '2019-10-10',
      }] as Arbeidsforhold[]}
      formName="form"
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />, messages);
    expect(wrapper.find(SelectField)).toHaveLength(0);
  });
});
