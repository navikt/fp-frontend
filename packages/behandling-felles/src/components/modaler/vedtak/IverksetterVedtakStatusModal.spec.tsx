import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Modal from 'nav-frontend-modal';
import { Hovedknapp } from 'nav-frontend-knapper';
import { BehandlingResultatType } from '@navikt/ft-kodeverk';

import IverksetterVedtakStatusModal from './IverksetterVedtakStatusModal';

describe('<IverksetterVedtakStatusModal>', () => {
  it('skal rendre modal', () => {
    const closeEventCallback = sinon.spy();
    const wrapper = shallow(<IverksetterVedtakStatusModal
      visModal
      lukkModal={closeEventCallback}
      behandlingsresultat={{
        type: BehandlingResultatType.AVSLATT,
      }}
    />);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual('Avslått');

    const button = wrapper.find(Hovedknapp);
    expect(button).toHaveLength(1);
  });
});
