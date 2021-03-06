import React from 'react';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Behandling, TotrinnskontrollSkjermlenkeContext } from '@fpsak-frontend/types';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { TotrinnskontrollBeslutterForm } from './TotrinnskontrollBeslutterForm';
import messages from '../../i18n/nb_NO.json';

const location = {
  pathname: '', search: '', state: {}, hash: '',
};

describe('<TotrinnskontrollBeslutterForm>', () => {
  const behandling = {
    uuid: '1234',
    versjon: 123,
    type: {
      kode: 'BT-001',
      kodeverk: '',
    },
    opprettet: '‎29.08.‎2017‎ ‎09‎:‎54‎:‎22',
    status: {
      kode: 'FVED',
      kodeverk: '',
    },
    toTrinnsBehandling: true,
  } as Behandling;

  it('skal ikke vise preview brev link for tilbakekreving', () => {
    const totrinnskontrollSkjermlenkeContext = [{
      skjermlenkeType: 'test',
      totrinnskontrollAksjonspunkter: [],
    }] as TotrinnskontrollSkjermlenkeContext[];

    const wrapper = shallowWithIntl(<TotrinnskontrollBeslutterForm
      {...reduxFormPropsMock}
      behandling={behandling}
      totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
      forhandsvisVedtaksbrev={sinon.spy()}
      readOnly={false}
      erTilbakekreving
      lagLenke={() => location}
      erForeldrepengerFagsak
      arbeidsforholdHandlingTyper={[]}
      skjemalenkeTyper={[]}
      aksjonspunktGodkjenning={[]}
      initialValues={{
        aksjonspunktGodkjenning: [],
      }}
      faktaOmBeregningTilfeller={[]}
      onSubmit={() => undefined}
    />, messages);

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);

    const button = wrapper.find('button');
    expect(button).toHaveLength(0);
  });
});
