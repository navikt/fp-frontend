import React from 'react';
import { shallow } from 'enzyme';
import { FieldArray } from 'redux-form';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';

import { PermisjonPanel } from './PermisjonPanel';
import PermisjonOverforingAvKvoterPanel from './PermisjonOverforingAvKvoterPanel';
import PermisjonUtsettelsePanel from './PermisjonUtsettelsePanel';
import PermisjonGraderingPanel from './PermisjonGraderingPanel';

const form = 'form';
const readOnly = false;

describe('<PermisjonPanel>', () => {
  it('skal render Rettigheter og PeriodeFieldArray når type ikkje er endring foreldrepenger', () => {
    const wrapper = shallow(<PermisjonPanel
      form={form}
      soknadData={new SoknadData('', '', '')}
      readOnly={readOnly}
      visFeilMelding={false}
      fulltUttak
      alleKodeverk={{} as AlleKodeverk}
      submitFailed={false}
    />);
    const fieldArray = wrapper.find(FieldArray);
    expect(fieldArray).toHaveLength(1);
  });

  it('skal vise alle paneler ved overføring av kvoter, utsettelse og gradering', () => {
    const wrapper = shallow(<PermisjonPanel
      soknadData={new SoknadData('', '', '')}
      form={form}
      readOnly={readOnly}
      visFeilMelding={false}
      fulltUttak
      alleKodeverk={{} as AlleKodeverk}
      submitFailed={false}
    />);

    const permisjonOverforingAvKvoterPanel = wrapper.find(PermisjonOverforingAvKvoterPanel);
    expect(permisjonOverforingAvKvoterPanel).toHaveLength(1);

    const permisjonUtsettelsePanel = wrapper.find(PermisjonUtsettelsePanel);
    expect(permisjonUtsettelsePanel).toHaveLength(1);

    const permisjonGraderingPanel = wrapper.find(PermisjonGraderingPanel);
    expect(permisjonGraderingPanel).toHaveLength(1);
  });
});
