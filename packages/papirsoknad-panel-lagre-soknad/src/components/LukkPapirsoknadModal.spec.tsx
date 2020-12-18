import React from 'react';
import sinon from 'sinon';
import ModalWrapper from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import Image from '@fpsak-frontend/shared-components/src/Image';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-lagre-soknad';
import { LukkPapirSoknadModal } from './LukkPapirsoknadModal';

describe('<LukkPapirSoknadModal>', () => {
  const submitEventCallback = sinon.spy();
  const cancelEventCallback = sinon.spy();
  const form = 'TEST';

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(<LukkPapirSoknadModal
      cancelEvent={cancelEventCallback}
      form={form}
      handleSubmit={submitEventCallback}
      intl={intlMock}
      showModal
    />);

    const modal = wrapper.find(ModalWrapper);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('closeButton')).toBe(false);
    expect(modal.prop('contentLabel')).toEqual('Registrering av søknaden avsluttes');
    expect(modal.prop('onRequestClose')).toEqual(cancelEventCallback);
    expect(modal.prop('onAfterOpen')).not.toBeNull();

    const image = modal.find(Image);
    expect(image).toHaveLength(1);

    const okKnapp = modal.find(Hovedknapp);
    expect(okKnapp).toHaveLength(1);
    expect(okKnapp.prop('mini')).toBe(true);

    const avbrytKnapp = modal.find(Knapp);
    expect(avbrytKnapp).toHaveLength(1);
    expect(avbrytKnapp.prop('mini')).toBe(true);
    expect(avbrytKnapp.prop('onClick')).toEqual(cancelEventCallback);
  });

  it('skal kalle submit ved klikk på ok-knapp', () => {
    const wrapper = shallowWithIntl(<LukkPapirSoknadModal
      showModal
      handleSubmit={submitEventCallback}
      cancelEvent={cancelEventCallback}
      intl={intlMock}
      form="TEST"
    />);

    wrapper.find(Hovedknapp).simulate('click');
    expect(submitEventCallback).toHaveProperty('callCount', 1);
  });

  it('skal lukke modal ved klikk på avbryt-knapp', () => {
    const wrapper = shallowWithIntl(<LukkPapirSoknadModal
      showModal
      handleSubmit={submitEventCallback}
      cancelEvent={cancelEventCallback}
      intl={intlMock}
      form="TEST"
    />);

    wrapper.find(Knapp).simulate('click');
    expect(cancelEventCallback).toHaveProperty('callCount', 1);
  });
});
