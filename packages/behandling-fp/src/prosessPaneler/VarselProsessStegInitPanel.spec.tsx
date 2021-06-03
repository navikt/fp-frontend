import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import VarselOmRevurderingProsessIndex from '@fpsak-frontend/prosess-varsel-om-revurdering';
import { ProsessDefaultInitPanel, ProsessDefaultInitPanelProps, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, Fagsak, StandardProsessPanelProps,
} from '@fpsak-frontend/types';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { requestFpApi, FpBehandlingApiKeys } from '../data/fpBehandlingApi';
import VarselProsessStegInitPanel from './VarselProsessStegInitPanel';

type INIT_DATA = {
  aksjonspunkter: Aksjonspunkt[];
}

const behandling = {
  uuid: 'test-uuid',
  versjon: 1,
} as Behandling;

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  return {
    ...felles,
    useStandardProsessPanelProps: () => ({
      behandling,
    }),
  };
});

describe('<VarselProsessStegInitPanel>', () => {
  it('skal rendre komponent', () => {
    const wrapper = shallow(<VarselProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={() => {}}
      fagsak={{} as Fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunkter = [{
      definisjon: {
        kode: aksjonspunktCodes.VARSEL_REVURDERING_MANUELL,
        kodeverk: '',
      },
    }] as Aksjonspunkt[];

    expect(panel.props().skalPanelVisesIMeny({ aksjonspunkter } as StandardProsessPanelProps, RestApiState.SUCCESS)).toBe(true);
    expect(panel.props().skalPanelVisesIMeny({} as StandardProsessPanelProps, RestApiState.LOADING)).toBe(false);

    expect(panel.props().renderPanel({}, { aksjonspunkter: [] }).type).toEqual(VarselOmRevurderingProsessIndex);
  });

  it('skal åpne søkeside og ikke oppdatere fagsak-kontekst etter lagring', () => {
    const toggleSkalOppdatereFagsakContext = sinon.spy();
    const opneSokeside = sinon.spy();

    const wrapper = shallow(<VarselProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={toggleSkalOppdatereFagsakContext}
      fagsak={{} as Fagsak}
      opneSokeside={opneSokeside}
      behandling={behandling}
    />);

    const panel = wrapper.find<Required<ProsessDefaultInitPanelProps<INIT_DATA, any>> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    const aksjonspunktModels = [{
      kode: aksjonspunktCodes.VARSEL_REVURDERING_ETTERKONTROLL,
      sendVarsel: true,
    }];

    const callback = panel.props().lagringSideEffekter(aksjonspunktModels);

    expect(toggleSkalOppdatereFagsakContext.getCalls()).toHaveLength(1);
    const { args } = toggleSkalOppdatereFagsakContext.getCalls()[0];
    expect(args).toHaveLength(1);
    expect(args[0]).toEqual(false);

    callback();

    expect(opneSokeside.getCalls()).toHaveLength(1);
    const args1 = opneSokeside.getCalls()[0].args;
    expect(args1).toHaveLength(0);
  });

  it('skal vise forhåndsvisning av melding', () => {
    requestFpApi.mock(FpBehandlingApiKeys.PREVIEW_MESSAGE.name, {});

    const wrapper = shallow(<VarselProsessStegInitPanel
      valgtProsessSteg="default"
      registrerProsessPanel={() => {}}
      toggleSkalOppdatereFagsakContext={() => {}}
      fagsak={{
        fagsakYtelseType: {
          kode: fagsakYtelseType.FORELDREPENGER,
          kodeverk: '',
        },
      } as Fagsak}
      opneSokeside={() => {}}
      behandling={behandling}
    />);

    const panel = wrapper.find<ProsessDefaultInitPanelProps<INIT_DATA, any> & ProsessPanelInitProps>(ProsessDefaultInitPanel);

    panel.props().renderPanel({}, { aksjonspunkter: [] }).props.previewCallback({
      mottaker: 'testMottaker',
      dokumentMal: 'testDokumentMal',
      fritekst: 'testFritekst',
    });

    const response = requestFpApi.getRequestMockData(FpBehandlingApiKeys.PREVIEW_MESSAGE.name);
    expect(response).toHaveLength(1);
    expect(response[0].params).toEqual({
      behandlingUuid: 'test-uuid',
      ytelseType: {
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      },
      mottaker: 'testMottaker',
      dokumentMal: 'testDokumentMal',
      fritekst: 'testFritekst',
    });
  });
});
