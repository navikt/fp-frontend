import React from 'react';

import { FamilieHendelse } from '@fpsak-frontend/types';

import { EktefelleFaktaForm } from './EktefelleFaktaForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-adopsjon';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireMock('../../i18n/intl-enzyme-test-helper-fakta-adopsjon');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
  };
});

describe('<EktefelleFaktaForm>', () => {
  it('skal rendre form som lar NAV-ansatt velge om barnet er ektefelles barn eller ei', () => {
    const wrapper = shallowWithIntl(<EktefelleFaktaForm
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
    />);

    const radioFields = wrapper.find('RadioOption');
    expect(radioFields).toHaveLength(2);
    expect(radioFields.first().prop('label')).toEqual({ id: 'EktefelleFaktaForm.ErIkkeValg' });
    expect(radioFields.last().prop('label')).toEqual({ id: 'EktefelleFaktaForm.ErValg' });
  });

  it('skal sette initielle verdi for ektefellesBarn til undefined når ingen data finnes i avklarte data', () => {
    const initialValues = EktefelleFaktaForm.buildInitialValues({} as FamilieHendelse);

    expect(initialValues).toEqual({
      ektefellesBarn: undefined,
    });
  });

  it('skal sette initielle verdi for ektefellesBarn til verdi i avklarte data', () => {
    const familiehendelse = {
      ektefellesBarn: true,
    };

    const initialValues = EktefelleFaktaForm.buildInitialValues(familiehendelse as FamilieHendelse);

    expect(initialValues).toEqual({
      ektefellesBarn: true,
    });
  });
});
