import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ManueltVedtaksbrevPanel from './ManueltVedtaksbrevPanel';

describe('<ManueltVedtaksbrevPanel>', () => {
  const eventCallback = sinon.spy();
  const sprakkode = {
    kode: 'EN',
    kodeverk: '',
  };
  it('skal vise alle felter i readonly modus', () => {
    const wrapper = shallow(<ManueltVedtaksbrevPanel
      previewOverstyrtBrev={eventCallback}
      readOnly
      sprakkode={sprakkode}
      skalViseLink
    />);

    const overskrift = wrapper.find('TextAreaField');
    expect(overskrift).toHaveLength(2);
    expect(overskrift.at(0).prop('readOnly')).toBe(true);
    expect(overskrift.at(1).prop('readOnly')).toBe(true);
  });
});
