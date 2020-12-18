import React from 'react';
import { shallow } from 'enzyme';
import { Knapp } from 'nav-frontend-knapper';

import { MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import TilretteleggingForArbeidsgiverFieldArray from './TilretteleggingForArbeidsgiverFieldArray';

describe('<TilretteleggingForArbeidsgiverFieldArray>', () => {
  it('skal vise vertical skillelinje mellom arbeidsgivere og knapp etter siste arbeidsgiver', () => {
    const fields = new MockFieldsWithContent('arbeidsgiver', [{ arbeidsgiverOrgNr: 1 }, { arbeidsgiverOrgNr: 2 }]);
    const wrapper = shallow(<TilretteleggingForArbeidsgiverFieldArray
      fields={fields}
      readOnly={false}
    />);

    const containers = wrapper.find('div');
    expect(containers).toHaveLength(2);
    const arbeidsgiverRad1 = containers.first();
    expect(arbeidsgiverRad1.find(Knapp)).toHaveLength(0);
    expect(arbeidsgiverRad1.find(VerticalSpacer)).toHaveLength(1);

    const arbeidsgiverRad2 = containers.last();
    expect(arbeidsgiverRad2.find(Knapp)).toHaveLength(1);
    expect(arbeidsgiverRad2.find(VerticalSpacer)).toHaveLength(0);
  });
});
