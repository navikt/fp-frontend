import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Fagsak } from '@fpsak-frontend/types';

import NoSelectedBehandling from './components/NoSelectedBehandling';
import { BehandlingerIndex } from './BehandlingerIndex';
import BehandlingAppKontekst from './behandlingAppKontekstTsType';

describe('BehandlingerIndex', () => {
  it('skal rendre komponent korrekt', () => {
    const fagsak = {
      saksnummer: 123,
    };
    const alleBehandlinger = [{
      id: 1,
    }];

    const wrapper = shallow(<BehandlingerIndex
      fagsak={fagsak as Fagsak}
      alleBehandlinger={alleBehandlinger as BehandlingAppKontekst[]}
    />);

    const noBehandling = wrapper.find(NoSelectedBehandling);
    expect(noBehandling).to.have.length(1);
    expect(noBehandling.prop('numBehandlinger')).to.eql(1);
  });
});
