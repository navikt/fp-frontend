import React from 'react';
import { shallow } from 'enzyme';
import { Normaltekst } from 'nav-frontend-typografi';
import sinon from 'sinon';

import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import tilbakekrevingVidereBehandling from '@fpsak-frontend/kodeverk/src/tilbakekrevingVidereBehandling';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';

import { FeilutbetalingInfoPanelImpl } from './FeilutbetalingInfoPanel';
import FeilutbetalingAarsak from '../types/feilutbetalingAarsakTsType';

const BEHANDLING_AARSAK_KODEVERK = 'BEHANDLING_AARSAK';
const TILBAKEKR_VIDERE_BEH_KODEVERK = 'TILBAKEKR_VIDERE_BEH';
const BEHANDLING_RESULTAT_TYPE_KODEVERK = 'BEHANDLING_RESULTAT_TYPE';
const KONSEKVENS_FOR_YTELSEN_KODEVERK = 'KONSEKVENS_FOR_YTELSEN';

const feilutbetalingFakta = {
  behandlingFakta: {
    perioder: [{
      fom: '2018-01-01',
      tom: '2019-01-01',
      belop: 1000,
    }],
    antallBarn: 1,
    soknadType: {
      kode: soknadType.FODSEL,
    },
    totalPeriodeFom: '2019-01-01',
    totalPeriodeTom: '2019-01-02',
    aktuellFeilUtbetaltBeløp: 10000,
    tidligereVarseltBeløp: 5000,
    behandlingÅrsaker: [{
      behandlingArsakType: {
        kode: behandlingArsakType.FEIL_I_LOVANDVENDELSE,
        kodeverk: BEHANDLING_AARSAK_KODEVERK,
      },
    }],
    behandlingsresultat: {
      type: {
        kode: behandlingResultatType.INNVILGET,
        kodeverk: BEHANDLING_RESULTAT_TYPE_KODEVERK,
      },
      konsekvenserForYtelsen: [{
        kode: konsekvensForYtelsen.FORELDREPENGER_OPPHØRER,
        kodeverk: KONSEKVENS_FOR_YTELSEN_KODEVERK,
      }, {
        kode: konsekvensForYtelsen.ENDRING_I_BEREGNING,
        kodeverk: KONSEKVENS_FOR_YTELSEN_KODEVERK,
      }],
    },
    tilbakekrevingValg: {
      videreBehandling: {
        kode: tilbakekrevingVidereBehandling.TILBAKEKR_INNTREKK,
        kodeverk: TILBAKEKR_VIDERE_BEH_KODEVERK,
      },
    },
    datoForRevurderingsvedtak: '2019-01-01',
  },
};

const alleKodeverk = {
  [kodeverkTyper.TILBAKEKR_VIDERE_BEH]: [{
    kode: tilbakekrevingVidereBehandling.TILBAKEKR_INNTREKK,
    navn: 'Tilbakekreving inntrekk',
    kodeverk: TILBAKEKR_VIDERE_BEH_KODEVERK,
  }],
};

const fpsakKodeverk = {
  [kodeverkTyper.BEHANDLING_AARSAK]: [{
    kode: behandlingArsakType.FEIL_I_LOVANDVENDELSE,
    navn: 'Feil i lovanvendelse',
    kodeverk: BEHANDLING_AARSAK_KODEVERK,
  }],
  [kodeverkTyper.BEHANDLING_RESULTAT_TYPE]: [{
    kode: behandlingResultatType.INNVILGET,
    navn: 'Innvilget',
    kodeverk: BEHANDLING_RESULTAT_TYPE_KODEVERK,
  }],
  [kodeverkTyper.KONSEKVENS_FOR_YTELSEN]: [{
    kode: konsekvensForYtelsen.FORELDREPENGER_OPPHØRER,
    navn: 'Foreldrepenger opphører',
    kodeverk: KONSEKVENS_FOR_YTELSEN_KODEVERK,
  }, {
    kode: konsekvensForYtelsen.ENDRING_I_BEREGNING,
    navn: 'Endring i beregning',
    kodeverk: KONSEKVENS_FOR_YTELSEN_KODEVERK,
  }],
};

describe('<FeilutbetalingInfoPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<FeilutbetalingInfoPanelImpl
      feilutbetalingFakta={feilutbetalingFakta}
      hasOpenAksjonspunkter
      readOnly={false}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
      årsaker={[]}
      alleMerknaderFraBeslutter={{
        [aksjonspunktCodesTilbakekreving.AVKLAR_FAKTA_FOR_FEILUTBETALING]: {
          notAccepted: false,
        },
      }}
      behandlingId={1}
      behandlingVersjon={1}
      alleKodeverk={alleKodeverk}
      fpsakKodeverk={fpsakKodeverk}
      feilutbetalingAarsak={{} as FeilutbetalingAarsak}
      aksjonspunkter={[]}
      behandlingFormPrefix="test"
      behandlePerioderSamlet
      formValues={{
        perioder: [],
      }}
      {...reduxFormPropsMock}
    />);

    const normaltekstfelter = wrapper.find(Normaltekst);
    expect(normaltekstfelter).toHaveLength(8);

    expect(normaltekstfelter.first().childAt(0).text()).toEqual('01.01.2019 - 02.01.2019');
    expect(normaltekstfelter.at(1).childAt(0).text()).toEqual('10000');
    expect(normaltekstfelter.at(2).childAt(0).text()).toEqual('5000');
    expect(normaltekstfelter.at(3).childAt(0).text()).toEqual('Feil i lovanvendelse');
    expect(normaltekstfelter.at(4).childAt(0).text()).toEqual('01.01.2019');
    expect(normaltekstfelter.at(5).childAt(0).text()).toEqual('Innvilget');
    expect(normaltekstfelter.at(6).childAt(0).text()).toEqual('Foreldrepenger opphører, Endring i beregning');
    // 'valg?'
    expect(normaltekstfelter.at(7).childAt(0).text()).toEqual('Tilbakekreving inntrekk');
  });
});
