import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { FamilieHendelse } from '@fpsak-frontend/types';

import * as useIntl from '../useIntl';
import { EktefelleFaktaForm } from './EktefelleFaktaForm';
import shallowWithIntl, { intlMock } from '../../i18n/intl-enzyme-test-helper-fakta-adopsjon';

describe('<EktefelleFaktaForm>', () => {
  let contextStub;
  beforeEach(() => {
    contextStub = sinon.stub(useIntl, 'default').callsFake(() => intlMock);
  });

  afterEach(() => {
    contextStub.restore();
  });

  it('skal rendre form som lar NAV-ansatt velge om barnet er ektefelles barn eller ei', () => {
    const wrapper = shallowWithIntl(<EktefelleFaktaForm
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
    />);

    const radioFields = wrapper.find('RadioOption');
    expect(radioFields).to.have.length(2);
    expect(radioFields.first().prop('label')).to.eql({ id: 'EktefelleFaktaForm.ErIkkeValg' });
    expect(radioFields.last().prop('label')).to.eql({ id: 'EktefelleFaktaForm.ErValg' });
  });

  it('skal sette initielle verdi for ektefellesBarn til undefined når ingen data finnes i avklarte data', () => {
    const initialValues = EktefelleFaktaForm.buildInitialValues({} as FamilieHendelse);

    expect(initialValues).to.eql({
      ektefellesBarn: undefined,
    });
  });

  it('skal sette initielle verdi for ektefellesBarn til verdi i avklarte data', () => {
    const familiehendelse = {
      ektefellesBarn: true,
    };

    const initialValues = EktefelleFaktaForm.buildInitialValues(familiehendelse as FamilieHendelse);

    expect(initialValues).to.eql({
      ektefellesBarn: true,
    });
  });
});
