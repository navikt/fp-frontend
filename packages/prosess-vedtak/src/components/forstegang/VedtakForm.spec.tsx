import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
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
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-prosess-vedtak';

describe('<VedtakForm>', () => {
  const sprakkode = {
    kode: 'NO',
    kodeverk: '',
  };
  const aksjonspunktKoder = [
    {
      navn: 'annen ytelse',
      kode: aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
    },
  ];
  const initialValues = {
    skalBrukeOverstyrendeFritekstBrev: false,
    aksjonspunktKoder,
    sprakkode,
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
      behandlingId={1}
      behandlingVersjon={2}
      submitCallback={sinon.spy()}
      clearFormField={sinon.spy()}
    />);

    const fellesPanel = wrapper.find(VedtakFellesPanel);
    expect(fellesPanel).to.have.length(1);
    const avslattPanel = fellesPanel.renderProp('renderPanel')(false, true, false).find(VedtakInnvilgetPanel);
    expect(avslattPanel).to.have.length(1);
  });

  it('skal vise at vedtak er avslått', () => {
    const previewCallback = sinon.spy();
    const behandlingsresultat = {
      id: 1,
      type: {
        kode: BehandlingResultatType.AVSLÅTT,
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
      behandlingId={1}
      behandlingVersjon={2}
      submitCallback={sinon.spy()}
      clearFormField={sinon.spy()}
    />);

    const fellesPanel = wrapper.find(VedtakFellesPanel);
    expect(fellesPanel).to.have.length(1);
    const avslattPanel = fellesPanel.renderProp('renderPanel')(false, false, true).find(VedtakAvslagPanel);
    expect(avslattPanel).to.have.length(1);
  });
});
