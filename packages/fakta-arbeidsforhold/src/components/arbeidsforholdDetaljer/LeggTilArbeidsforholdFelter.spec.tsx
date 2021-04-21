import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import LeggTilArbeidsforholdFelter from './LeggTilArbeidsforholdFelter';
import CustomArbeidsforhold from '../../typer/CustomArbeidsforholdTsType';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<LeggTilArbeidsforholdFelter>', () => {
  it('Skal sjekke at LeggTilArbeidsforholdFelter rendrer korrekt', () => {
    const wrapper = shallow(
      <LeggTilArbeidsforholdFelter
        readOnly={false}
        formName=""
      />,
    );
    expect(wrapper.find('[name=\'navn\']')).toHaveLength(1);
    expect(wrapper.find('[name=\'fomDato\']')).toHaveLength(1);
    expect(wrapper.find('[name=\'tomDato\']')).toHaveLength(1);
    expect(wrapper.find('[name=\'stillingsprosent\']')).toHaveLength(1);
  });
  it('Skal sjekke at LeggTilArbeidsforholdFelter validerer med fom og tom lik', () => {
    const values = {
      fomDato: '2019-01-01',
      tomDato: '2019-01-01',
    } as CustomArbeidsforhold;
    expect(LeggTilArbeidsforholdFelter.validate(values, intlMock)).toEqual(null);
  });
  it('Skal sjekke at LeggTilArbeidsforholdFelter validerer med fom og tom ikke satt', () => {
    const values = {
      fomDato: '2019-01-01',
      tomDato: undefined,
    } as CustomArbeidsforhold;
    expect(LeggTilArbeidsforholdFelter.validate(values, intlMock)).toEqual(null);
  });
  it('Skal sjekke at LeggTilArbeidsforholdFelter validerer med fom før tom', () => {
    const values = {
      fomDato: '2019-01-01',
      tomDato: '2019-01-02',
    } as CustomArbeidsforhold;
    expect(LeggTilArbeidsforholdFelter.validate(values, intlMock)).toEqual(null);
  });
  it('Skal sjekke at LeggTilArbeidsforholdFelter validerer med fom etter tom', () => {
    const values = {
      fomDato: '2019-01-02',
      tomDato: '2019-01-01',
    } as CustomArbeidsforhold;
    const result = LeggTilArbeidsforholdFelter.validate(values, intlMock);
    expect(result.tomDato).toEqual('Dato kan ikke være før startdato 02.01.2019');
    expect(result.fomDato).toEqual('Dato kan ikke være etter sluttdato 01.01.2019.');
  });
});
