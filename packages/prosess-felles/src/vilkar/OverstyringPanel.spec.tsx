import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Knapp, Hovedknapp } from 'nav-frontend-knapper';

import { EditedIcon } from '@fpsak-frontend/shared-components';
import { TextAreaField } from '@fpsak-frontend/form';

import OverstyringPanel from './OverstyringPanel';

describe('<OverstyringPanel>', () => {
  it('skal vise panel når en har valgt å overstyre', () => {
    const wrapper = shallow(
      <OverstyringPanel
        erOverstyrt
        isSolvable
        hasAksjonspunkt
        overrideReadOnly={false}
        isSubmitting
        isPristine
        toggleAv={sinon.spy()}
      >
        <div>test</div>
      </OverstyringPanel>,
    );

    expect(wrapper.find(TextAreaField)).to.have.length(1);
    expect(wrapper.find(Knapp)).to.have.length(1);
    expect(wrapper.find(Hovedknapp)).to.have.length(1);
    expect(wrapper.find(EditedIcon)).to.have.length(0);
  });
});
