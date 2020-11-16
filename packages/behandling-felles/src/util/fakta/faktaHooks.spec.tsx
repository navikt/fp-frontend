import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Behandling, Fagsak } from '@fpsak-frontend/types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import FaktaPanelDef from './FaktaPanelDef';
import faktaHooks from './faktaHooks';
import FaktaPanelUtledet from './FaktaPanelUtledet';
import { DEFAULT_FAKTA_KODE } from './faktaUtils';

const HookWrapper = ({ callback }) => <div {...callback()} />;

const testHook = (callback) => shallow(<HookWrapper callback={callback} />);

describe('<faktaHooks>', () => {
  const fagsak = {
    saksnummer: 123456,
    sakstype: { kode: fagsakYtelseType.FORELDREPENGER, kodeverk: 'test' },
    status: { kode: fagsakStatus.UNDER_BEHANDLING, kodeverk: 'test' },
  } as Fagsak;
  const behandling = {
    id: 1,
    versjon: 2,
    status: { kode: behandlingStatus.BEHANDLING_UTREDES, kodeverk: 'test' },
    type: { kode: behandlingType.FORSTEGANGSSOKNAD, kodeverk: 'test' },
    behandlingPaaVent: false,
    taskStatus: {
      readOnly: false,
    },
    behandlingHenlagt: false,
    links: [],
  };

  class TestFaktaPanelDef extends FaktaPanelDef {
    getUrlKode = () => faktaPanelCodes.ARBEIDSFORHOLD

    getTekstKode = () => 'ArbeidsforholdInfoPanel.Title'

    getAksjonspunktKoder = () => [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]

    getKomponent = (props) => <ArbeidsforholdFaktaIndex {...props} />

    getOverstyrVisningAvKomponent = ({ personopplysninger }) => personopplysninger

    getData = ({ personopplysninger, inntektArbeidYtelse }) => ({ personopplysninger, inntektArbeidYtelse })
  }

  it('skal utlede faktapaneler og valgt panel', () => {
    const panelDef = new TestFaktaPanelDef();
    const ekstraPanelData = {
      personopplysninger: 'test_personopplysninger',
      inntektArbeidYtelse: 'test_inntektArbeidYtelse',
    };
    const rettigheter = {
      writeAccess: {
        isEnabled: true,
        employeeHasAccess: true,
      },
      kanOverstyreAccess: {
        isEnabled: true,
        employeeHasAccess: true,
      },
    };
    const aksjonspunkter = [{
      definisjon: { kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD, kodeverk: 'BEHANDLING_DEF' },
      status: { kode: aksjonspunktStatus.OPPRETTET, kodeverk: 'BEHANDLING_STATUS' },
      kanLoses: true,
      erAktivt: true,
    }];
    const valgtFaktaSteg = 'default';
    const intl = { formatMessage: (data) => data.id };

    const wrapper = testHook(() => faktaHooks.useFaktaPaneler([panelDef], ekstraPanelData, behandling as Behandling, rettigheter,
      aksjonspunkter, valgtFaktaSteg, intl));
    const [faktaPaneler, valgtPanel, formaterteFaktaPaneler] = Object.values(wrapper.find('div').props()).reduce((acc, value) => [...acc, value], []);

    expect(faktaPaneler[0].getPanelDef()).to.eql(panelDef);
    expect(faktaPaneler[0].getHarApneAksjonspunkter()).is.true;
    expect(faktaPaneler[0].getKomponentData(rettigheter, ekstraPanelData, false)).to.eql({
      aksjonspunkter: [aksjonspunkter[0]],
      readOnly: false,
      submittable: true,
      harApneAksjonspunkter: true,
      alleMerknaderFraBeslutter: {
        [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]: { notAccepted: undefined },
      },
      personopplysninger: ekstraPanelData.personopplysninger,
      inntektArbeidYtelse: ekstraPanelData.inntektArbeidYtelse,
    });

    expect(valgtPanel.getUrlKode()).to.eql(faktaPaneler[0].getUrlKode());
    expect(formaterteFaktaPaneler).to.eql([{
      erAktiv: true,
      harAksjonspunkt: true,
      tekst: 'ArbeidsforholdInfoPanel.Title',
    }]);
  });

  it('skal bruke callbacks for å velge faktapanel og for å lagre', () => {
    const aksjonspunkter = [{
      definisjon: { kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD, kodeverk: 'test' },
      status: { kode: aksjonspunktStatus.OPPRETTET, kodeverk: 'test' },
      kanLoses: true,
      erAktivt: true,
    }];

    const panelDef = new TestFaktaPanelDef();

    const panelUtledet = new FaktaPanelUtledet(panelDef, aksjonspunkter, behandling);

    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();
    const lagreAksjonspunkter = sinon.stub();
    lagreAksjonspunkter.returns(Promise.resolve());
    const overstyringApCodes = [];
    const valgtProsessSteg = 'default';

    const wrapper = testHook(() => faktaHooks.useCallbacks([panelUtledet], fagsak, behandling as Behandling, oppdaterProsessStegOgFaktaPanelIUrl,
      valgtProsessSteg, overstyringApCodes, lagreAksjonspunkter));
    const [velgFaktaPanelCallback, bekreftAksjonspunktCallback] = Object.values(wrapper.find('div').props()).reduce((acc, value) => [...acc, value], []);

    velgFaktaPanelCallback(0);

    const opppdaterKall = oppdaterProsessStegOgFaktaPanelIUrl.getCalls();
    expect(opppdaterKall).to.have.length(1);
    expect(opppdaterKall[0].args).to.have.length(2);
    expect(opppdaterKall[0].args[0]).to.eql(DEFAULT_FAKTA_KODE);
    expect(opppdaterKall[0].args[1]).to.eql('arbeidsforhold');

    const aksjonspunkterSomSkalLagres = [{
      kode: aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
    }];
    bekreftAksjonspunktCallback(aksjonspunkterSomSkalLagres);

    const requestKall = lagreAksjonspunkter.getCalls();
    expect(requestKall).to.have.length(1);
    expect(requestKall[0].args).to.have.length(2);
    expect(requestKall[0].args[0]).to.eql({
      saksnummer: fagsak.saksnummer,
      behandlingId: behandling.id,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer: [{
        '@type': aksjonspunkter[0].definisjon.kode,
        kode: aksjonspunkter[0].definisjon.kode,
      }],
    });
  });
});
