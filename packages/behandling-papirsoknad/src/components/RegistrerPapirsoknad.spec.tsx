import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakStatus from '@fpsak-frontend/kodeverk/src/fagsakStatus';
import { BehandlingPaVent } from '@fpsak-frontend/behandling-felles';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { Behandling, Fagsak } from '@fpsak-frontend/types';

import RegistrerPapirsoknad from './RegistrerPapirsoknad';
import SoknadRegistrertModal from './SoknadRegistrertModal';
import RegistrerPapirsoknadPanel from './RegistrerPapirsoknadPanel';
import { requestPapirsoknadApi, PapirsoknadApiKeys } from '../data/papirsoknadApi';

const fagsak = {
  saksnummer: '123456',
  fagsakYtelseType: {
    kode: fagsakYtelseType.FORELDREPENGER,
    kodeverk: 'YTELSE_TYPE',
  },
  status: {
    kode: fagsakStatus.UNDER_BEHANDLING,
    kodeverk: 'FAGSAK_STATUS',
  },
} as Fagsak;

const behandling = {
  id: 1,
  versjon: 2,
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

describe('<RegistrerPapirsoknad>', () => {
  it('skal rendre komponenter', () => {
    requestPapirsoknadApi.mock(PapirsoknadApiKeys.AKSJONSPUNKTER, []);

    const wrapper = shallow(<RegistrerPapirsoknad
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      behandling={behandling as Behandling}
      kodeverk={{}}
      rettigheter={rettigheter}
      hentBehandling={sinon.spy()}
      lagreAksjonspunkt={sinon.spy()}
    />);
    expect(wrapper.find(BehandlingPaVent)).toHaveLength(1);
    expect(wrapper.find(SoknadRegistrertModal)).toHaveLength(1);
    const panel = wrapper.find(RegistrerPapirsoknadPanel);
    expect(panel).toHaveLength(1);
    expect(panel.prop('readOnly')).toBe(false);
  });

  it('skal rendre komponenter som readonly når veileder', () => {
    requestPapirsoknadApi.mock(PapirsoknadApiKeys.AKSJONSPUNKTER, []);

    const wrapper = shallow(<RegistrerPapirsoknad
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      behandling={behandling as Behandling}
      kodeverk={{}}
      rettigheter={{
        ...rettigheter,
        writeAccess: {
          isEnabled: false,
          employeeHasAccess: false,
        },
      }}
      hentBehandling={sinon.spy()}
      lagreAksjonspunkt={sinon.spy()}
    />);
    const panel = wrapper.find(RegistrerPapirsoknadPanel);
    expect(panel.prop('readOnly')).toBe(true);
  });

  it('skal rendre komponenter som readonly når behandling er satt på vent', () => {
    requestPapirsoknadApi.mock(PapirsoknadApiKeys.AKSJONSPUNKTER, []);

    const wrapper = shallow(<RegistrerPapirsoknad
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      behandling={{
        ...behandling,
        behandlingPaaVent: true,
      } as Behandling}
      kodeverk={{}}
      rettigheter={rettigheter}
      hentBehandling={sinon.spy()}
      lagreAksjonspunkt={sinon.spy()}
    />);
    expect(wrapper.find(BehandlingPaVent)).toHaveLength(1);
    expect(wrapper.find(SoknadRegistrertModal)).toHaveLength(1);
    const panel = wrapper.find(RegistrerPapirsoknadPanel);
    expect(panel).toHaveLength(1);
    expect(panel.prop('readOnly')).toBe(true);
  });

  it('skal sette nye søknadsdata', () => {
    requestPapirsoknadApi.mock(PapirsoknadApiKeys.AKSJONSPUNKTER, []);

    const wrapper = shallow(<RegistrerPapirsoknad
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      behandling={behandling as Behandling}
      kodeverk={{}}
      rettigheter={rettigheter}
      hentBehandling={sinon.spy()}
      lagreAksjonspunkt={sinon.spy()}
    />);

    const panel = wrapper.find(RegistrerPapirsoknadPanel);
    expect(panel.prop('soknadData')).toBeUndefined();

    const nyeSoknadsdata = new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR);
    panel.prop('setSoknadData')(nyeSoknadsdata);

    const panelV2 = wrapper.find(RegistrerPapirsoknadPanel);
    expect(panelV2.prop('soknadData')).toEqual(nyeSoknadsdata);
  });

  it('skal lagre aksjonspunkt', () => {
    requestPapirsoknadApi.mock(PapirsoknadApiKeys.AKSJONSPUNKTER, [{
      definisjon: {
        kode: aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_FORELDREPENGER,
        kodeverk: 'DEF',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: 'STATUS',
      },
      kanLoses: true,
      erAktivt: true,
    }]);

    const lagreAksjonspunkt = sinon.stub();
    lagreAksjonspunkt.returns(Promise.resolve());

    const wrapper = shallow(<RegistrerPapirsoknad
      fagsak={fagsak}
      fagsakPersonnummer="12343541"
      behandling={behandling as Behandling}
      kodeverk={{}}
      rettigheter={rettigheter}
      hentBehandling={sinon.spy()}
      lagreAksjonspunkt={lagreAksjonspunkt}
    />);

    const panel = wrapper.find(RegistrerPapirsoknadPanel);

    const nyeSoknadsdata = new SoknadData(fagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR);
    panel.prop('setSoknadData')(nyeSoknadsdata);

    const panelV2 = wrapper.find(RegistrerPapirsoknadPanel);
    panelV2.prop('lagreFullstendig')(undefined, undefined, { valuesForRegisteredFieldsOnly: { data: 'test' } });

    const calls = lagreAksjonspunkt.getCalls();
    expect(calls).toHaveLength(1);
    const { args } = calls[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual({
      saksnummer: fagsak.saksnummer,
      behandlingId: behandling.id,
      behandlingVersjon: behandling.versjon,
      bekreftedeAksjonspunktDtoer: [{
        '@type': aksjonspunktCodes.REGISTRER_PAPIRSOKNAD_FORELDREPENGER,
        soker: foreldreType.MOR,
        soknadstype: fagsakYtelseType.FORELDREPENGER,
        tema: familieHendelseType.FODSEL,
        data: 'test',
      }],
    });
  });
});
