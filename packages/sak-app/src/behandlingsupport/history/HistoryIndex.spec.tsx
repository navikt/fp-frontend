import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import HistorikkSakIndex from '@fpsak-frontend/sak-historikk';

import * as useLocation from '../../app/useLocation';
import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import HistoryIndex from './HistoryIndex';

describe('<HistoryIndex>', () => {
  const locationMock = {
    pathname: 'test',
    search: 'test',
    state: {},
    hash: 'test',
  };

  let contextStubLocation;

  beforeEach(() => {
    contextStubLocation = sinon.stub(useLocation, 'default').callsFake(() => locationMock);
  });

  afterEach(() => {
    contextStubLocation.restore();
  });

  it('skal slå sammen og sortere historikk for fpsak og fptilbake', () => {
    requestApi.mock(FpsakApiKeys.INIT_FETCH_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.KODEVERK, {});
    requestApi.mock(FpsakApiKeys.KODEVERK_FPTILBAKE, {});
    requestApi.mock(FpsakApiKeys.HISTORY_FPSAK, [{
      opprettetTidspunkt: '2019-01-01',
      historikkinnslagDeler: [],
      type: {
        kode: 'Test fpsak 1',
      },
    }, {
      opprettetTidspunkt: '2019-01-06',
      historikkinnslagDeler: [],
      type: {
        kode: 'Test fpsak 2',
      },
    }]);
    requestApi.mock(FpsakApiKeys.HISTORY_FPTILBAKE, [{
      opprettetTidspunkt: '2019-01-04',
      historikkinnslagDeler: [],
      type: {
        kode: 'Test fptilbake',
      },
    }]);

    const wrapper = shallow(<HistoryIndex
      saksnummer={12345}
      behandlingId={1}
      behandlingVersjon={2}
    />);

    const index = wrapper.find(HistorikkSakIndex);
    expect(index).to.have.length(3);
    expect((index.at(0).prop('historieInnslag') as { opprettetTidspunkt: string }).opprettetTidspunkt).to.eql('2019-01-06');
    expect((index.at(1).prop('historieInnslag') as { opprettetTidspunkt: string }).opprettetTidspunkt).to.eql('2019-01-04');
    expect((index.at(2).prop('historieInnslag') as { opprettetTidspunkt: string }).opprettetTidspunkt).to.eql('2019-01-01');
  });
});
