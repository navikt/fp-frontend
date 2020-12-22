import React from 'react';

import { FamilieHendelse } from '@fpsak-frontend/types';

import MannAdoptererAleneFaktaForm from './MannAdoptererAleneFaktaForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-adopsjon';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireActual('../../i18n/intl-enzyme-test-helper-fakta-adopsjon');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
  };
});

describe('<MannAdoptererAleneFaktaForm>', () => {
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
    expect(radioFields).toHaveLength(2);
    expect(radioFields.first().prop('label')).toEqual({ id: 'MannAdoptererAleneFaktaForm.AdoptererAlene' });
    expect(radioFields.last().prop('label')).toEqual({ id: 'MannAdoptererAleneFaktaForm.AdoptererIkkeAlene' });
  });

  it('skal sette initielle verdi for mannAdoptererAlene til verdi i avklarte data', () => {
    const familiehendelse = {
      mannAdoptererAlene: true,
    };

    const initialValues = MannAdoptererAleneFaktaForm.buildInitialValues(familiehendelse as FamilieHendelse);

    expect(initialValues).toEqual({
      mannAdoptererAlene: true,
    });
  });
});
