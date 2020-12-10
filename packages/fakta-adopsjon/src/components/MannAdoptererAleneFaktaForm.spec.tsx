import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { FamilieHendelse } from '@fpsak-frontend/types';

import MannAdoptererAleneFaktaForm from './MannAdoptererAleneFaktaForm';
import * as useIntl from '../useIntl';
import shallowWithIntl, { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-adopsjon';

describe('<MannAdoptererAleneFaktaForm>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal rendre form som lar NAV-ansatt velge om mann adopterer alene eller ei', () => {
    const wrapper = shallowWithIntl(
      <MannAdoptererAleneFaktaForm
        readOnly={false}
        mannAdoptererAlene
        alleKodeverk={{}}
        alleMerknaderFraBeslutter={{}}
      />,
    );

    const radioFields = wrapper.find('RadioOption');
    expect(radioFields).to.have.length(2);
    expect(radioFields.first().prop('label')).to.eql({ id: 'MannAdoptererAleneFaktaForm.AdoptererAlene' });
    expect(radioFields.last().prop('label')).to.eql({ id: 'MannAdoptererAleneFaktaForm.AdoptererIkkeAlene' });
  });

  it('skal sette initielle verdi for mannAdoptererAlene til verdi i avklarte data', () => {
    const familiehendelse = {
      mannAdoptererAlene: true,
    };

    const initialValues = MannAdoptererAleneFaktaForm.buildInitialValues(familiehendelse as FamilieHendelse);

    expect(initialValues).to.eql({
      mannAdoptererAlene: true,
    });
  });
});
