import React from 'react';
import Modal from 'nav-frontend-modal';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { Behandlingsresultat } from '@fpsak-frontend/types';

import { VedtakFritekstbrevModal } from './VedtakFritekstbrevModal';
import messages from '../../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VedtakFritekstbrevModal>', () => {
  it('skal vise modal når behandlingsresultat er AVSLATT', () => {
    const wrapper = shallowWithIntl(<VedtakFritekstbrevModal
      intl={intlMock}
      readOnly={false}
      behandlingsresultat={{
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
      } as Behandlingsresultat}
    />, messages);
    const modal = wrapper.find(Modal);
    const isOpen = modal.prop('isOpen');
    expect(modal).toHaveLength(1);
    expect(isOpen).toEqual(true);
  });

  it('skal vise modal når behandlingsresultat er OPPHOR', () => {
    const wrapper = shallowWithIntl(<VedtakFritekstbrevModal
      intl={intlMock}
      readOnly={false}
      behandlingsresultat={{
        type: {
          kode: behandlingResultatType.OPPHOR,
          kodeverk: '',
        },
      } as Behandlingsresultat}
    />, messages);
    const modal = wrapper.find(Modal);
    const isOpen = modal.prop('isOpen');
    expect(modal).toHaveLength(1);
    expect(isOpen).toEqual(true);
  });

  it('skal ikke vise modal når behandlingsresultat er noe annet en OPPHOR og AVSLATT', () => {
    const wrapper = shallowWithIntl(<VedtakFritekstbrevModal
      intl={intlMock}
      readOnly={false}
      behandlingsresultat={{
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
      } as Behandlingsresultat}
    />, messages);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(0);
  });

  it('skal ikke vise modal når readOnly er true', () => {
    const wrapper = shallowWithIntl(<VedtakFritekstbrevModal
      intl={intlMock}
      readOnly
      behandlingsresultat={{
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
      } as Behandlingsresultat}
    />, messages);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(0);
  });
});
