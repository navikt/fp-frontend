import React from 'react';
import Popover from '@navikt/nap-popover';
import { Knapp } from 'nav-frontend-knapper';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import MenySakIndex from './MenySakIndex';
import MenyData from './MenyData';
import messages from '../i18n/nb_NO.json';

describe('<MenySakIndex>', () => {
  it('skal toggle menyvisning ved trykk på knapp', () => {
    const wrapper = shallowWithIntl(<MenySakIndex
      data={[new MenyData(true, 'Lag ny behandling')
        .medModal((lukkModal) => <button type="button" onClick={lukkModal} />)]}
    />, messages);

    const popover = wrapper.find(Popover);
    expect(popover).toHaveLength(1);

    expect(popover.prop('popperIsVisible')).toBe(false);

    // @ts-ignore
    const wrapper2 = shallowWithIntl(popover.prop('referenceProps').children('ref'));

    const knapp = wrapper2.find(Knapp);
    expect(knapp).toHaveLength(1);
    const { onClick } = knapp.props();
    if (onClick) {
      onClick({} as React.MouseEvent<any>);
    }

    expect(wrapper.find(Popover).prop('popperIsVisible')).toBe(true);
  });

  it('skal åpne modal ved trykk på menyinnslag og så lukke den ved å bruke funksjon for lukking', () => {
    const wrapper = shallowWithIntl(<MenySakIndex
      data={[new MenyData(true, 'Lag ny behandling')
        .medModal((lukkModal) => <button type="button" onClick={lukkModal} />)]}
    />, messages);

    expect(wrapper.find('button')).toHaveLength(0);

    const popover = wrapper.find(Popover);
    const wrapper2 = shallowWithIntl(popover.prop('popperProps').children(), messages);

    const button = wrapper2.find('button');
    expect(button).toHaveLength(1);
    const onClickButton = button.props().onClick;
    if (onClickButton) {
      onClickButton({} as React.MouseEvent<any>);
    }

    const span = wrapper.find('button');
    expect(span).toHaveLength(1);

    const onClickSpan = span.props().onClick;
    if (onClickSpan) {
      onClickSpan({} as React.MouseEvent<any>);
    }

    expect(wrapper.find('button')).toHaveLength(0);
  });
});
