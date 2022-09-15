import React from 'react';
import { shallow } from 'enzyme';

import { Detail } from '@navikt/ds-react';

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

    expect(wrapper.find(Detail)).toHaveLength(0);
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

    expect(wrapper.find(Detail)).toHaveLength(1);
  });
});
