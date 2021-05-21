import React from 'react';

import { AlleKodeverk, FamilieHendelse } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import MannAdoptererAleneFaktaForm from './MannAdoptererAleneFaktaForm';
import messages from '../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const meldinger = jest.requireActual('../../i18n/nb_NO.json');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(meldinger),
  };
});

describe('<MannAdoptererAleneFaktaForm>', () => {
  it('skal rendre form som lar NAV-ansatt velge om mann adopterer alene eller ei', () => {
    const wrapper = shallowWithIntl(
      <MannAdoptererAleneFaktaForm
        readOnly={false}
        mannAdoptererAlene
        alleKodeverk={{} as AlleKodeverk}
        alleMerknaderFraBeslutter={{}}
      />, messages,
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
