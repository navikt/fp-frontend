import React from 'react';
import { FieldArray } from 'redux-form';

import { SelectField } from '@fpsak-frontend/form';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';

import messages from '../../../i18n/nb_NO.json';
import { PermisjonOverforingAvKvoterPanelImpl as PermisjonOverforingAvKvoterPanel } from './PermisjonOverforingAvKvoterPanel';

const overtaKvoteReasons = [{
  navn: 'Den andre forelderen er innlagt i helseinstitusjon',
  kode: 'INSTITUSJONSOPPHOLD_ANNEN_FORELDER',
  kodeverk: '',
}, {
  navn: 'Den andre forelderen er pga sykdom avhengig av hjelp for å ta seg av barnet/barna',
  kode: 'SYKDOM_ANNEN_FORELDER',
  kodeverk: '',
}];

const readOnly = false;

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  const intlMessages = jest.requireActual('../../../i18n/nb_NO.json');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(intlMessages),
  };
});

describe('<PermisjonOverforingAvKvoterPanel>', () => {
  it('skal vise årsaker for overføring i nedtrekksliste når søker ikke er mor', () => {
    const wrapper = shallowWithIntl(<PermisjonOverforingAvKvoterPanel
      overtaKvoteReasons={overtaKvoteReasons}
      soknadData={new SoknadData('', '', 'FAR')}
      skalOvertaKvote
      readOnly={readOnly}
      visFeilMelding={false}
      alleKodeverk={{} as AlleKodeverk}
      form="test"
      namePrefix="test"
    />, messages);

    const fieldArray = wrapper.find(FieldArray);
    expect(fieldArray).toHaveLength(1);

    const values = fieldArray.prop('selectValues');

    expect(values).toHaveLength(overtaKvoteReasons.length);
    expect(values[0].props.value).toEqual('INSTITUSJONSOPPHOLD_ANNEN_FORELDER');
    expect(values[1].props.value).toEqual('SYKDOM_ANNEN_FORELDER');
  });

  it('skal ikke vise select når checkbox ikke er krysset av', () => {
    const wrapper = shallowWithIntl(<PermisjonOverforingAvKvoterPanel
      overtaKvoteReasons={overtaKvoteReasons}
      soknadData={new SoknadData('', '', 'FAR')}
      skalOvertaKvote={false}
      readOnly={readOnly}
      visFeilMelding={false}
      alleKodeverk={{} as AlleKodeverk}
      form="test"
      namePrefix="test"
    />, messages);

    const selectField = wrapper.find(SelectField);
    expect(selectField).toHaveLength(0);
  });
});
