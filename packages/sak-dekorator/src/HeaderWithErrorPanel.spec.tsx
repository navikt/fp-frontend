import React from 'react';
import { shallow } from 'enzyme';
import Header from '@navikt/nap-header';

import EventType from '@fpsak-frontend/rest-api/src/requestApi/eventType';

import ErrorMessagePanel from './ErrorMessagePanel';
import HeaderWithErrorPanel from './HeaderWithErrorPanel';

describe('<HeaderWithErrorPanel>', () => {
  it('skal sjekke at navn blir vist', () => {
    const wrapper = shallow(<HeaderWithErrorPanel
      navAnsattName="Per"
      removeErrorMessage={() => undefined}
      setSiteHeight={() => undefined}
      hideErrorMessages={false}
      queryStrings={{}}
    />);
    const header = wrapper.find(Header);
    expect(header.prop('title')).toBe('Svangerskap, fødsel og adopsjon');
  });

  it('skal', () => {
    const wrapper = shallow(<HeaderWithErrorPanel
      navAnsattName="Per"
      removeErrorMessage={() => undefined}
      setSiteHeight={() => undefined}
      hideErrorMessages={false}
      queryStrings={{}}
      errorMessages={[{
        type: EventType.REQUEST_ERROR,
        feilmelding: 'Dette er en feilmelding',
      }]}
    />);
    const panel = wrapper.find(ErrorMessagePanel);
    expect(panel.prop('errorMessages')).toEqual([{
      message: 'Dette er en feilmelding',
      additionalInfo: undefined,
    }]);
  });
});
