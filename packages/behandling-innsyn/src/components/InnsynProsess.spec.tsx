import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Behandling, Fagsak } from '@fpsak-frontend/types';
import { ProsessStegContainer } from '@fpsak-frontend/behandling-felles';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import innsynResultatType from '@fpsak-frontend/kodeverk/src/innsynResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';

import InnsynProsess from './InnsynProsess';

describe('<InnsynProsess>', () => {
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
    definisjon: { kode: aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN, kodeverk: 'test' },
    status: { kode: aksjonspunktStatus.OPPRETTET, kodeverk: 'test' },
    kanLoses: true,
    erAktivt: true,
  }];
  const vilkar = [{
    vilkarType: { kode: vilkarType.ADOPSJONSVILKARET, kodeverk: 'test' },
    vilkarStatus: { kode: vilkarUtfallType.IKKE_VURDERT, kodeverk: 'test' },
    overstyrbar: true,
    merknadParametere: {},
  }];
  const innsyn = {
    dokumenter: [],
    innsynMottattDato: '2020.10.10',
    innsynResultatType: {
      kode: innsynResultatType.INNVILGET,
      kodeverk: 'INNSYN_RESULTAT_TYPE',
    },
    vedtaksdokumentasjon: [{
      dokumentId: '1',
      tittel: 'test',
      opprettetDato: '2020.01.01',
    }],
  };
  const innsynDokumenter = [];

  it('skal vise alle aktuelle prosessSteg i meny', () => {
    const wrapper = shallow(
      <InnsynProsess
        data={{
          aksjonspunkter, vilkar, innsyn, innsynDokumenter,
        }}
        fagsak={fagsak}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        rettigheter={rettigheter}
        valgtProsessSteg="default"
        oppdaterBehandlingVersjon={sinon.spy()}
        oppdaterProsessStegOgFaktaPanelIUrl={sinon.spy()}
        opneSokeside={sinon.spy()}
        setBehandling={sinon.spy()}
      />,
    );

    const meny = wrapper.find(ProsessStegContainer);
    expect(meny.prop('formaterteProsessStegPaneler')).is.eql([{
      isActive: false,
      isDisabled: false,
      isFinished: false,
      labelId: 'Behandlingspunkt.Innsyn',
      type: 'default',
    }, {
      isActive: false,
      isDisabled: false,
      isFinished: false,
      labelId: 'Behandlingspunkt.Vedtak',
      type: 'default',
    }]);
  });

  it('skal sette nytt valgt prosessSteg ved trykk i meny', () => {
    const oppdaterProsessStegOgFaktaPanelIUrl = sinon.spy();
    const wrapper = shallow(
      <InnsynProsess
        data={{
          aksjonspunkter, vilkar, innsyn, innsynDokumenter,
        }}
        fagsak={fagsak}
        behandling={behandling as Behandling}
        alleKodeverk={{}}
        rettigheter={rettigheter}
        valgtProsessSteg="default"
        oppdaterBehandlingVersjon={sinon.spy()}
        oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
        opneSokeside={sinon.spy()}
        setBehandling={sinon.spy()}
      />,
    );

    const meny = wrapper.find(ProsessStegContainer);

    meny.prop('velgProsessStegPanelCallback')(1);

    const opppdaterKall = oppdaterProsessStegOgFaktaPanelIUrl.getCalls();
    expect(opppdaterKall).to.have.length(1);
    expect(opppdaterKall[0].args).to.have.length(2);
    expect(opppdaterKall[0].args[0]).to.eql('vedtak');
  });
});
