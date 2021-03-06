import React from 'react';
import { shallow } from 'enzyme';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../../i18n/nb_NO.json';
import BubbleText from './bubbleText';

const intlMock = getIntlMock(messages);

describe('<BubbleText>', () => {
  it('skal kun vise en del av teksten om cutoffpointen vi sender er mindre en tekstens lengde', () => {
    const bodyText = 'My bodytekst is the only thing that keeps me awake at night';
    const cutOffLength = 10;
    const wrapper = shallow(<BubbleText.WrappedComponent
      intl={intlMock}
      bodyText={bodyText}
      cutOffLength={cutOffLength}
    />);
    expect(wrapper.find('div').text()).toEqual('My body...');
  });

  it('skal vise chevron ned om teksten er cutoff', () => {
    const bodyText = 'My bodytekst is the only thing that keeps me awake at night';
    const cutOffLength = 10;
    const wrapper = shallow(<BubbleText.WrappedComponent
      intl={intlMock}
      bodyText={bodyText}
      cutOffLength={cutOffLength}
    />);
    const nedChevron = wrapper.find(NedChevron);
    expect(nedChevron).toHaveLength(1);
  });

  it('skal vise chevron opp om man klikker på chevron', () => {
    const bodyText = 'My bodytekst is the only thing that keeps me awake at night';
    const cutOffLength = 10;
    const wrapper = shallow(<BubbleText.WrappedComponent
      intl={intlMock}
      bodyText={bodyText}
      cutOffLength={cutOffLength}
    />);
    const x = wrapper.find('a');
    x.simulate('click');
    const oppChevron = wrapper.find(OppChevron);
    expect(oppChevron).toHaveLength(1);
  });

  it('skal vise hele teksten om cutoffpointen vi sender er størren en teksten', () => {
    const bodyText = 'My bodytekst is the only thing tha keeps me awake at night';
    const cutOffLength = 50;
    const wrapper = shallow(<BubbleText.WrappedComponent
      intl={intlMock}
      bodyText={bodyText}
      cutOffLength={cutOffLength}
    />);

    expect(wrapper.find('div').text()).toEqual('My bodytekst is the only thing tha keeps me awa...');
  });
});
