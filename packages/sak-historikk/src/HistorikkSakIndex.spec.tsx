import React from 'react';
import { shallow } from 'enzyme';
import { Location } from 'history';

import History from './components/History';
import HistorikkSakIndex from './HistorikkSakIndex';

describe('<HistorikkSakIndex>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<HistorikkSakIndex
      historikkFpSak={[]}
      historikkFpTilbake={[]}
      alleKodeverkFpTilbake={{} as any}
      alleKodeverkFpSak={{} as any}
      saksnummer="123"
      getBehandlingLocation={() => ({} as Location)}
      createLocationForSkjermlenke={() => ({} as Location)}
      valgtBehandlingId={1}
    />);

    expect(wrapper.find(History)).toHaveLength(1);
  });
});
