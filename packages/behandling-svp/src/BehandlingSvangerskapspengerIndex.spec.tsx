import React from 'react';
import { shallow } from 'enzyme';

import { BehandlingContainer } from '@fpsak-frontend/behandling-felles';
import { AksessRettigheter, Fagsak } from '@fpsak-frontend/types';

import BehandlingSvangerskapspengerIndex from './BehandlingSvangerskapspengerIndex';
import { requestSvpApi, SvpBehandlingApiKeys } from './data/svpBehandlingApi';

jest.mock('@fpsak-frontend/behandling-felles', () => {
  const felles = jest.requireActual('@fpsak-frontend/behandling-felles');
  return {
    ...felles,
    useBehandling: () => ({
      behandling: {
        uuid: 'test-uuid',
        versjon: 1,
      },
    }),
  };
});

describe('<BehandlingSvangerskapspengerIndex>', () => {
  it('skal rendre korrekt', () => {
    requestSvpApi.mock(SvpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT, {});
    requestSvpApi.mock(SvpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT, {});

    const wrapper = shallow(<BehandlingSvangerskapspengerIndex
      behandlingEventHandler={{
        setHandler: () => {},
        clear: () => {},
      }}
      behandlingId={1}
      oppdaterBehandlingVersjon={() => {}}
      kodeverk={{}}
      fagsak={{} as Fagsak}
      rettigheter={{} as AksessRettigheter}
      oppdaterProsessStegOgFaktaPanelIUrl={() => {}}
      valgtProsessSteg="default"
      valgtFaktaSteg="default"
      opneSokeside={() => {}}
      setRequestPendingMessage={() => {}}
    />);

    const panel = wrapper.find(BehandlingContainer);

    expect(panel).toHaveLength(1);
  });
});
