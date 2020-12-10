import React from 'react';
import { expect } from 'chai';
import { FieldArray } from 'redux-form';
import sinon from 'sinon';

import { SelectField } from '@fpsak-frontend/form';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import shallowWithIntl, { intlMock } from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { PermisjonOverforingAvKvoterPanelImpl as PermisjonOverforingAvKvoterPanel } from './PermisjonOverforingAvKvoterPanel';
import * as useIntl from '../../useIntl';

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

describe('<PermisjonOverforingAvKvoterPanel>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal vise årsaker for overføring i nedtrekksliste når søker ikke er mor', () => {
    const wrapper = shallowWithIntl(<PermisjonOverforingAvKvoterPanel
      overtaKvoteReasons={overtaKvoteReasons}
      soknadData={new SoknadData('', '', 'FAR')}
      skalOvertaKvote
      readOnly={readOnly}
      visFeilMelding={false}
      alleKodeverk={{}}
      form="test"
      namePrefix="test"
    />);

    const fieldArray = wrapper.find(FieldArray);
    expect(fieldArray).has.length(1);

    const values = fieldArray.prop('selectValues');

    expect(values).has.length(overtaKvoteReasons.length);
    expect(values[0].props.value).is.eql('INSTITUSJONSOPPHOLD_ANNEN_FORELDER');
    expect(values[1].props.value).is.eql('SYKDOM_ANNEN_FORELDER');
  });

  it('skal ikke vise select når checkbox ikke er krysset av', () => {
    const wrapper = shallowWithIntl(<PermisjonOverforingAvKvoterPanel
      overtaKvoteReasons={overtaKvoteReasons}
      soknadData={new SoknadData('', '', 'FAR')}
      skalOvertaKvote={false}
      readOnly={readOnly}
      visFeilMelding={false}
      alleKodeverk={{}}
      form="test"
      namePrefix="test"
    />);

    const selectField = wrapper.find(SelectField);
    expect(selectField).has.length(0);
  });
});
