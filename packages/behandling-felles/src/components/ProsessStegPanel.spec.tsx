import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Behandling } from '@fpsak-frontend/types';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import InngangsvilkarPanel from './InngangsvilkarPanel';
import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessStegPanel from './ProsessStegPanel';
import MargMarkering from './MargMarkering';
import ProsessStegIkkeBehandletPanel from './ProsessStegIkkeBehandletPanel';
import { ProsessStegDef, ProsessStegPanelDef } from '../util/prosessSteg/ProsessStegDef';
import { ProsessStegUtledet, ProsessStegPanelUtledet } from '../util/prosessSteg/ProsessStegUtledet';

describe('<ProsessStegPanel>', () => {
  const fagsak = {
    saksnummer: 123456,
    fagsakYtelseType: { kode: fagsakYtelseType.FORELDREPENGER, kodeverk: 'test' },
    fagsakStatus: { kode: fagsakStatus.UNDER_BEHANDLING, kodeverk: 'test' },
    fagsakPerson: {
      alder: 30,
      personstatusType: { kode: personstatusType.BOSATT, kodeverk: 'test' },
      erDod: false,
      erKvinne: true,
      navn: 'Espen Utvikler',
      personnummer: '12345',
    },
  };
  const behandling = {
    id: 1,
    versjon: 1,
    status: {
      kode: behandlingStatus.BEHANDLING_UTREDES,
      kodeverk: 'BEHANDLING_STATUS',
    },
    type: {
      kode: behandlingType.FORSTEGANGSSOKNAD,
      kodeverk: 'BEHANDLING_TYPE',
    },
    behandlingPaaVent: false,
    behandlingHenlagt: false,
    links: [],
  };

  const aksjonspunkter = [{
    status: {
      kode: aksjonspunktStatus.OPPRETTET,
      kodeverk: 'AKSJONSPUNKT_STATUS',
    },
    definisjon: {
      kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
      kodeverk: 'AKSJONSPUNKT_KODE',
    },
    kanLoses: true,
    erAktivt: true,
  }];

  const kanOverstyreAccess = { isEnabled: false, employeeHasAccess: false };

  const isReadOnlyCheck = () => false;
  const toggleOverstyring = () => undefined;

  const lagPanelDef = (id, aksjonspunktKoder, aksjonspunktTekstKoder) => {
    class PanelDef extends ProsessStegPanelDef {
      getId = () => ''

      getKomponent = (props) => <div {...props} />

      getAksjonspunktKoder = () => aksjonspunktKoder

      getAksjonspunktTekstkoder = () => aksjonspunktTekstKoder
    }
    return new PanelDef();
  };

  const lagStegDef = (urlKode, panelDefs) => {
    class StegPanelDef extends ProsessStegDef {
      getUrlKode = () => urlKode

      getTekstKode = () => urlKode

      getPanelDefinisjoner = () => panelDefs
    }
    return new StegPanelDef();
  };

  it('skal vise panel for henlagt behandling når valgt panel er vedtakspanelet og behandling er henlagt', () => {
    const vedtakPanelDef = lagPanelDef(prosessStegCodes.VEDTAK, [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL], ['VEDTAK.TEKST']);
    const vedtakStegDef = lagStegDef(prosessStegCodes.VEDTAK, [vedtakPanelDef]);
    const utledetVedtakDelPanel = new ProsessStegPanelUtledet(vedtakStegDef, vedtakPanelDef, isReadOnlyCheck, aksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetVedtakSteg = new ProsessStegUtledet(vedtakStegDef, [utledetVedtakDelPanel]);

    const wrapper = shallow(
      <ProsessStegPanel
        valgtProsessSteg={utledetVedtakSteg}
        fagsak={fagsak}
        behandling={{
          ...behandling,
          behandlingHenlagt: true,
        } as Behandling}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        lagringSideeffekterCallback={sinon.spy()}
        lagreAksjonspunkter={sinon.spy()}
        useMultipleRestApi={() => ({ data: undefined, state: RestApiState.SUCCESS })}
      />,
    );

    expect(wrapper.find(BehandlingHenlagtPanel)).to.have.length(1);
    expect(wrapper.find(MargMarkering)).to.have.length(0);
    expect(wrapper.find(ProsessStegIkkeBehandletPanel)).to.have.length(0);
  });

  it('skal vise panel for steg ikke behandlet når steget ikke er behandlet og saken ikke er henlagt', () => {
    const vedtakPanelDef = lagPanelDef(prosessStegCodes.VEDTAK, [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL], ['VEDTAK.TEKST']);
    const vedtakStegDef = lagStegDef(prosessStegCodes.VEDTAK, [vedtakPanelDef]);
    const utledetVedtakDelPanel = new ProsessStegPanelUtledet(vedtakStegDef, vedtakPanelDef, isReadOnlyCheck, aksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetVedtakSteg = new ProsessStegUtledet(vedtakStegDef, [utledetVedtakDelPanel]);

    const wrapper = shallow(
      <ProsessStegPanel
        valgtProsessSteg={utledetVedtakSteg}
        fagsak={fagsak}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        lagringSideeffekterCallback={sinon.spy()}
        lagreAksjonspunkter={sinon.spy()}
        useMultipleRestApi={() => ({ data: undefined, state: RestApiState.SUCCESS })}
      />,
    );

    expect(wrapper.find(ProsessStegIkkeBehandletPanel)).to.have.length(1);
    expect(wrapper.find(BehandlingHenlagtPanel)).to.have.length(0);
    expect(wrapper.find(MargMarkering)).to.have.length(0);
  });

  it('skal vise panel for inngangsvilkår når det er data for flere panel', () => {
    const fodselAksjonspunkter = [{
      ...aksjonspunkter[0],
      definisjon: {
        kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
        kodeverk: 'AKSJONSPUNKT_KODE',
      },
    }];
    const fodselPanelDef = lagPanelDef('FODSEL', [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL], ['FODSEL.TEKST']);
    const omsorgPanelDef = lagPanelDef('OMSORG', [], ['OMSORG.TEKST']);
    const inngangsvilkarStegDef = lagStegDef(prosessStegCodes.INNGANGSVILKAR, [fodselPanelDef, omsorgPanelDef]);
    const utledetFodselDelPanel = new ProsessStegPanelUtledet(inngangsvilkarStegDef, fodselPanelDef, isReadOnlyCheck, fodselAksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetOmsorgDelPanel = new ProsessStegPanelUtledet(inngangsvilkarStegDef, omsorgPanelDef, isReadOnlyCheck, aksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetInngangsvilkarSteg = new ProsessStegUtledet(inngangsvilkarStegDef, [utledetFodselDelPanel, utledetOmsorgDelPanel]);

    const wrapper = shallow(
      <ProsessStegPanel
        valgtProsessSteg={utledetInngangsvilkarSteg}
        fagsak={fagsak}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        lagringSideeffekterCallback={sinon.spy()}
        lagreAksjonspunkter={sinon.spy()}
        useMultipleRestApi={() => ({ data: undefined, state: RestApiState.SUCCESS })}
      />,
    );

    expect(wrapper.find(MargMarkering)).to.have.length(1);
    expect(wrapper.find(ProsessStegIkkeBehandletPanel)).to.have.length(0);
    expect(wrapper.find(BehandlingHenlagtPanel)).to.have.length(0);

    expect(wrapper.find(InngangsvilkarPanel)).to.have.length(1);
    expect(wrapper.find('DataFetcher')).to.have.length(0);
  });

  it('skal vise kun vise ett panel', () => {
    const fodselAksjonspunkter = [{
      ...aksjonspunkter[0],
      definisjon: {
        kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
        kodeverk: 'AKSJONSPUNKT_KODE',
      },
    }];
    const fodselPanelDef = lagPanelDef('FODSEL', [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL], ['FODSEL.TEKST']);
    const inngangsvilkarStegDef = lagStegDef(prosessStegCodes.INNGANGSVILKAR, [fodselPanelDef]);
    const utledetFodselDelPanel = new ProsessStegPanelUtledet(inngangsvilkarStegDef, fodselPanelDef, isReadOnlyCheck, fodselAksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetInngangsvilkarSteg = new ProsessStegUtledet(inngangsvilkarStegDef, [utledetFodselDelPanel]);

    const wrapper = shallow(
      <ProsessStegPanel
        valgtProsessSteg={utledetInngangsvilkarSteg}
        fagsak={fagsak}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        lagringSideeffekterCallback={sinon.spy()}
        lagreAksjonspunkter={sinon.spy()}
        useMultipleRestApi={() => ({ data: undefined, state: RestApiState.SUCCESS })}
      />,
    );

    expect(wrapper.find(MargMarkering)).to.have.length(1);
    expect(wrapper.find(ProsessStegIkkeBehandletPanel)).to.have.length(0);
    expect(wrapper.find(BehandlingHenlagtPanel)).to.have.length(0);

    const komponent = wrapper.find('div');
    expect(komponent).to.have.length(1);
    expect(komponent.prop('status')).is.eql(vilkarUtfallType.IKKE_VURDERT);
    expect(komponent.prop('isReadOnly')).is.false;
    expect(komponent.prop('readOnlySubmitButton')).is.false;
    expect(komponent.prop('isAksjonspunktOpen')).is.true;
    expect(wrapper.find(InngangsvilkarPanel)).to.have.length(0);
  });

  it('skal lagre aksjonspunkt', () => {
    const fodselAksjonspunkter = [{
      ...aksjonspunkter[0],
      definisjon: {
        kode: aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
        kodeverk: 'AKSJONSPUNKT_KODE',
      },
    }];
    const fodselPanelDef = lagPanelDef('FODSEL', [aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL], ['FODSEL.TEKST']);
    const omsorgPanelDef = lagPanelDef('OMSORG', [], ['OMSORG.TEKST']);
    const inngangsvilkarStegDef = lagStegDef(prosessStegCodes.INNGANGSVILKAR, [fodselPanelDef, omsorgPanelDef]);
    const utledetFodselDelPanel = new ProsessStegPanelUtledet(inngangsvilkarStegDef, fodselPanelDef, isReadOnlyCheck, fodselAksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetOmsorgDelPanel = new ProsessStegPanelUtledet(inngangsvilkarStegDef, omsorgPanelDef, isReadOnlyCheck, aksjonspunkter, [], {},
      toggleOverstyring, kanOverstyreAccess, []);
    const utledetInngangsvilkarSteg = new ProsessStegUtledet(inngangsvilkarStegDef, [utledetFodselDelPanel, utledetOmsorgDelPanel]);

    const lagringSideeffekterCallback = sinon.spy();
    const makeRestApiRequest = sinon.stub();
    makeRestApiRequest.returns(Promise.resolve());

    const wrapper = shallow(
      <ProsessStegPanel
        valgtProsessSteg={utledetInngangsvilkarSteg}
        fagsak={fagsak}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        lagringSideeffekterCallback={lagringSideeffekterCallback}
        lagreAksjonspunkter={makeRestApiRequest}
        useMultipleRestApi={() => ({ data: undefined, state: RestApiState.SUCCESS })}
      />,
    );

    const panel = wrapper.find(InngangsvilkarPanel);

    const aksjonspunktModels = [{
      kode: fodselAksjonspunkter[0].definisjon.kode,
    }];
    panel.prop('submitCallback')(aksjonspunktModels);

    expect(lagringSideeffekterCallback.getCalls()).to.have.length(1);

    const requestKall = makeRestApiRequest.getCalls();
    expect(requestKall).to.have.length(1);
    expect(requestKall[0].args).to.have.length(2);
    expect(requestKall[0].args[0]).to.eql({
      saksnummer: fagsak.saksnummer,
      behandlingId: behandling.id,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer: [{
        '@type': aksjonspunktModels[0].kode,
        kode: aksjonspunktModels[0].kode,
      }],
    });
  });
});
