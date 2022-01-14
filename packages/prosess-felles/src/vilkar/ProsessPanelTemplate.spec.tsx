import React from 'react';
import { shallow } from 'enzyme';

import { Undertekst } from 'nav-frontend-typografi';

import ProsessPanelTemplate from './ProsessPanelTemplate';

describe('<ProsessPanelTemplate>', () => {
  it('skal ikke vise lovreferanse når dette ikke finnes', () => {
    const wrapper = shallow(
      <ProsessPanelTemplate
        title="Fødsel"
        isAksjonspunktOpen
        readOnlySubmitButton={false}
        isDirty
        readOnly={false}
        erIkkeGodkjentAvBeslutter={false}
        isSubmitting={false}
      >
        <div>test</div>
      </ProsessPanelTemplate>,
    );

    expect(wrapper.find(Undertekst)).toHaveLength(0);
  });

  it('skal vise lovreferanse når dette finnes', () => {
    const wrapper = shallow(
      <ProsessPanelTemplate
        lovReferanse="test lovReferanse"
        title="Fødsel"
        isAksjonspunktOpen
        readOnlySubmitButton={false}
        isDirty
        readOnly={false}
        erIkkeGodkjentAvBeslutter={false}
        isSubmitting={false}
      >
        <div>test</div>
      </ProsessPanelTemplate>,
    );

    expect(wrapper.find(Undertekst)).toHaveLength(1);
  });
});
