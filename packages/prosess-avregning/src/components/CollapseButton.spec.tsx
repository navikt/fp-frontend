import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CollapseButton from './CollapseButton';

describe('<CollapseButton>', () => {
  const mockProps = {
    toggleDetails: sinon.spy(),
    mottakerIndex: 1,
  };
  it('skal vise CollapseButton med OppChevron og tilsvarende tekst når showDetails er true', () => {
    const props = {
      ...mockProps,
      showDetails: true,
    };
    const wrapper = shallow(<CollapseButton
      {...props}
    />);

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.prop('id')).toEqual('Avregning.headerText.VisFærreDetaljer');
    const oppChevron = wrapper.find('OppChevron');
    expect(oppChevron).toHaveLength(1);
  });

  it('skal vise CollapseButton med NedChevron og tilsvarende tekst når showDetails er false', () => {
    const props = {
      ...mockProps,
      showDetails: false,
    };
    const wrapper = shallow(<CollapseButton
      {...props}
    />);

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).toHaveLength(1);
    expect(formattedMessage.prop('id')).toEqual('Avregning.headerText.VisFlereDetaljer');
    const nedChevron = wrapper.find('NedChevron');
    expect(nedChevron).toHaveLength(1);
  });
});
