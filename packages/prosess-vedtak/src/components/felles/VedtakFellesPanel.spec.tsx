import React from 'react';
import sinon from 'sinon';
import Lenke from 'nav-frontend-lenker';
import { FormattedMessage } from 'react-intl';

import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Behandling } from '@fpsak-frontend/types';

import ManueltVedtaksbrevPanel from './ManueltVedtaksbrevPanel';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-vedtak';
import messages from '../../../i18n/nb_NO.json';
import VedtakFellesPanel from './VedtakFellesPanel';

const intlMock = getIntlMock(messages);

describe('<VedtakFellesPanel>', () => {
  const behandling = {
    behandlingsresultat: {
      type: {
        kode: behandlingResultatType.INNVILGET,
        kodeverk: '',
      },
    },
    behandlingPaaVent: false,
    sprakkode: {
      kode: 'EN',
      kodeverk: '',
    },
    status: {
      kode: behandlingStatus.BEHANDLING_UTREDES,
      kodeverk: '',
    },
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: '',
    },
  };

  it('skal vise lenker for automatisk vedtaksbrev og for overstyring av vedtaksbrev når saksbehandler kan overstyre', () => {
    const wrapper = shallowWithIntl(<VedtakFellesPanel.WrappedComponent
      intl={intlMock}
      behandling={behandling as Behandling}
      aksjonspunkter={[]}
      readOnly={false}
      renderPanel={() => <div>test</div>}
      previewAutomatiskBrev={sinon.spy()}
      previewOverstyrtBrev={sinon.spy()}
      clearFormField={sinon.spy()}
      erBehandlingEtterKlage={false}
      handleSubmit={sinon.spy()}
      submitting={false}
    />);

    const lenker = wrapper.find(Lenke);
    expect(lenker).toHaveLength(2);

    const message1 = lenker.first().find(FormattedMessage);
    expect(message1).toHaveLength(1);
    expect(message1.prop('id')).toEqual('VedtakFellesPanel.AutomatiskVedtaksbrev');

    const message2 = lenker.last().find(FormattedMessage);
    expect(message2).toHaveLength(1);
    expect(message2.prop('id')).toEqual('VedtakFellesPanel.RedigerVedtaksbrev');
  });

  it('skal vise panel for editering av vedtaksbrevet etter at saksbehandler har trykket på lenke', () => {
    const wrapper = shallowWithIntl(<VedtakFellesPanel.WrappedComponent
      intl={intlMock}
      behandling={behandling as Behandling}
      aksjonspunkter={[]}
      readOnly={false}
      renderPanel={() => <div>test</div>}
      previewAutomatiskBrev={sinon.spy()}
      previewOverstyrtBrev={sinon.spy()}
      clearFormField={sinon.spy()}
      erBehandlingEtterKlage={false}
      handleSubmit={sinon.spy()}
      submitting={false}
    />);

    expect(wrapper.find(ManueltVedtaksbrevPanel)).toHaveLength(0);

    const lenker = wrapper.find(Lenke);
    expect(lenker).toHaveLength(2);

    lenker.last().prop('onClick')({} as React.MouseEvent<any>);

    expect(wrapper.find(ManueltVedtaksbrevPanel)).toHaveLength(1);
  });

  it('skal rendre input-panel', () => {
    const wrapper = shallowWithIntl(<VedtakFellesPanel.WrappedComponent
      intl={intlMock}
      behandling={behandling as Behandling}
      aksjonspunkter={[]}
      readOnly={false}
      renderPanel={() => <span>test</span>}
      previewAutomatiskBrev={sinon.spy()}
      previewOverstyrtBrev={sinon.spy()}
      clearFormField={sinon.spy()}
      erBehandlingEtterKlage={false}
      handleSubmit={sinon.spy()}
      submitting={false}
    />);

    expect(wrapper.find('span')).toHaveLength(3);
  });
});
