import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Modal from 'nav-frontend-modal';

import { Hovedknapp } from 'nav-frontend-knapper';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';

import IverksetterVedtakStatusModal from './IverksetterVedtakStatusModal';

describe('<IverksetterVedtakStatusModal>', () => {
  it('skal rendre modal', () => {
    const closeEventCallback = sinon.spy();
    const wrapper = shallow(<IverksetterVedtakStatusModal
      visModal
      lukkModal={closeEventCallback}
      behandlingsresultat={{
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: 'test',
        },
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
