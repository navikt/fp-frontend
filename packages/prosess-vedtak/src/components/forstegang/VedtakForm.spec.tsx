import React from 'react';
import sinon from 'sinon';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BehandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { Behandling, BeregningsresultatEs } from '@fpsak-frontend/types';

import VedtakFellesPanel from '../felles/VedtakFellesPanel';
import { VedtakForm } from './VedtakForm';
import VedtakInnvilgetPanel from './VedtakInnvilgetPanel';
import VedtakAvslagPanel from './VedtakAvslagPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<VedtakForm>', () => {
  const sprakkode = {
    kode: 'NO',
    kodeverk: '',
  };
  const aksjonspunktKoder = [aksjonspunktCodes.VURDERE_ANNEN_YTELSE];
  const initialValues = {
    aksjonspunktKoder,
  };

  it('skal vise at vedtak er innvilget', () => {
    const previewCallback = sinon.spy();
    const behandlingsresultat = {
      id: 1,
      type: {
        kode: BehandlingResultatType.INNVILGET,
        kodeverk: '',
      },
      avslagsarsak: null,
      avslagsarsakFritekst: null,
      vedtaksbrev: {
        kode: 'FRITEKST',
        kodeverk: '',
      },
    };
    const aksjonspunkter = [];

    const wrapper = shallowWithIntl(<VedtakForm
      {...reduxFormPropsMock}
      intl={intlMock}
      behandling={{
        behandlingsresultat,
        sprakkode,
        status: {
          kode: behandlingStatus.BEHANDLING_UTREDES,
          kodeverk: '',
        },
        behandlingPaaVent: false,
      } as Behandling}
      readOnly={false}
      aksjonspunkter={aksjonspunkter}
      previewCallback={previewCallback}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      resultatstruktur={{
        antallBarn: 2,
      } as BeregningsresultatEs}
      alleKodeverk={{}}
      initialValues={initialValues}
      vilkar={[]}
      beregningErManueltFastsatt={false}
      submitCallback={sinon.spy()}
      clearFormField={sinon.spy()}
      onSubmit={sinon.spy()}
    />, messages);

    const fellesPanel = wrapper.find(VedtakFellesPanel);
    expect(fellesPanel).toHaveLength(1);
    const avslattPanel = fellesPanel.renderProp('renderPanel')(false, true, false).find(VedtakInnvilgetPanel);
    expect(avslattPanel).toHaveLength(1);
  });

  it('skal vise at vedtak er avslått', () => {
    const previewCallback = sinon.spy();
    const behandlingsresultat = {
      id: 1,
      type: {
        kode: BehandlingResultatType.AVSLATT,
        kodeverk: '',
      },
      avslagsarsak: null,
      avslagsarsakFritekst: null,
      vedtaksbrev: {
        kode: 'FRITEKST',
        kodeverk: '',
      },
    };
    const aksjonspunkter = [];

    const wrapper = shallowWithIntl(<VedtakForm
      {...reduxFormPropsMock}
      intl={intlMock}
      behandling={{
        behandlingsresultat,
        sprakkode,
        status: {
          kode: behandlingStatus.BEHANDLING_UTREDES,
          kodeverk: '',
        },
        behandlingPaaVent: false,
      } as Behandling}
      readOnly={false}
      aksjonspunkter={aksjonspunkter}
      previewCallback={previewCallback}
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      resultatstruktur={{
        antallBarn: 2,
      } as BeregningsresultatEs}
      alleKodeverk={{}}
      initialValues={initialValues}
      vilkar={[]}
      beregningErManueltFastsatt={false}
      submitCallback={sinon.spy()}
      clearFormField={sinon.spy()}
      onSubmit={sinon.spy()}
    />, messages);

    const fellesPanel = wrapper.find(VedtakFellesPanel);
    expect(fellesPanel).toHaveLength(1);
    const avslattPanel = fellesPanel.renderProp('renderPanel')(false, false, true).find(VedtakAvslagPanel);
    expect(avslattPanel).toHaveLength(1);
  });
});
