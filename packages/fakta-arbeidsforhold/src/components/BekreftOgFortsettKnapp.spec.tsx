import React from 'react';
import { shallow } from 'enzyme';

import { Hovedknapp } from 'nav-frontend-knapper';
import { BekreftOgForsettKnapp } from './BekreftOgForsettKnapp';

describe('<BekreftOgForsettKnapp>', () => {
  it('Skal vise en enablet hovedknapp hvis readOnly, isBekreftButtonReadOnly, og isSubmitting er false', () => {
    const wrapper = shallow(
      <BekreftOgForsettKnapp
        behandlingId={1}
        behandlingVersjon={2}
        readOnly={false}
        isBekreftButtonReadOnly={false}
        isSubmitting={false}
      />,
    );
    const hovedKnapp = wrapper.find(Hovedknapp);
    expect(hovedKnapp).toHaveLength(1);
    expect(hovedKnapp.props().disabled).toEqual(false);
  });
  it('Skal vise en disablet hovedknapp hvis readOnly er true', () => {
    const wrapper = shallow(
      <BekreftOgForsettKnapp
        behandlingId={1}
        behandlingVersjon={2}
        readOnly
        isBekreftButtonReadOnly={false}
        isSubmitting={false}
      />,
    );
    const hovedKnapp = wrapper.find(Hovedknapp);
    expect(hovedKnapp).toHaveLength(1);
    expect(hovedKnapp.props().disabled).toEqual(true);
  });
  it('Skal vise en disablet hovedknapp hvis isBekreftButtonReadOnly er true', () => {
    const wrapper = shallow(
      <BekreftOgForsettKnapp
        behandlingId={1}
        behandlingVersjon={2}
        readOnly={false}
        isBekreftButtonReadOnly
        isSubmitting={false}
      />,
    );
    const hovedKnapp = wrapper.find(Hovedknapp);
    expect(hovedKnapp).toHaveLength(1);
    expect(hovedKnapp.props().disabled).toEqual(true);
  });
  it('Skal vise en disablet hovedknapp hvis isSubmitting er true', () => {
    const wrapper = shallow(
      <BekreftOgForsettKnapp
        behandlingId={1}
        behandlingVersjon={2}
        readOnly={false}
        isBekreftButtonReadOnly={false}
        isSubmitting
      />,
    );
    const hovedKnapp = wrapper.find(Hovedknapp);
    expect(hovedKnapp).toHaveLength(1);
    expect(hovedKnapp.props().disabled).toEqual(true);
  });
});
