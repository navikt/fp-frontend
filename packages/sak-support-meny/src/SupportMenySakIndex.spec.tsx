import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SupportMenySakIndex from './SupportMenySakIndex';
import SupportTabs from './supportTabs';
import TabMeny from './components/TabMeny';

describe('<SupportMenySakIndex>', () => {
  it('skal lage tabs og sette Send melding som valgt', () => {
    const wrapper = shallow(<SupportMenySakIndex
      tilgjengeligeTabs={[SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER]}
      valgbareTabs={[SupportTabs.HISTORIKK, SupportTabs.MELDINGER, SupportTabs.DOKUMENTER]}
      valgtIndex={1}
      onClick={() => undefined}
    />);

    const tabMeny = wrapper.find(TabMeny);
    expect(tabMeny).has.length(1);

    const tabs = tabMeny.prop('tabs');
    expect(tabs[0].isActive).is.false;
    expect(tabs[0].isDisabled).is.false;
    expect(tabs[0].tooltip).is.eql('Historikk');
    expect(tabs[1].isActive).is.true;
    expect(tabs[1].isDisabled).is.false;
    expect(tabs[1].tooltip).is.eql('Send melding');
    expect(tabs[2].isActive).is.false;
    expect(tabs[2].isDisabled).is.false;
    expect(tabs[2].tooltip).is.eql('Dokumenter');
  });

  it('skal lage tabs og sette Send Melding til disablet', () => {
    const wrapper = shallow(<SupportMenySakIndex
      tilgjengeligeTabs={[SupportTabs.HISTORIKK, SupportTabs.MELDINGER]}
      valgbareTabs={[SupportTabs.HISTORIKK]}
      onClick={() => undefined}
    />);

    const tabMeny = wrapper.find(TabMeny);
    expect(tabMeny).has.length(1);

    const tabs = tabMeny.prop('tabs');
    expect(tabs[0].isActive).is.false;
    expect(tabs[0].isDisabled).is.false;
    expect(tabs[0].tooltip).is.eql('Historikk');
    expect(tabs[1].isActive).is.false;
    expect(tabs[1].isDisabled).is.true;
    expect(tabs[1].tooltip).is.eql('Send melding');
  });
});
