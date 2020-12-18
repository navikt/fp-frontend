import React from 'react';
import { shallow } from 'enzyme';
import { Undertekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';

import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import HistorikkAktor from '@fpsak-frontend/kodeverk/src/historikkAktor';

import Snakkeboble from './snakkeboble';

// TODO: AA - refactor to before()? Har provat men fungerer ikke så bra
describe('Snakkeboble', () => {
  it('skal vise opp boble med korrekt class', () => {
    const opprettetTidspunkt = '2017-12-10';
    const aktoer = { kode: HistorikkAktor.SAKSBEHANDLER, kodeverk: '' };
    const kjoenn = { kode: navBrukerKjonn.KVINNE, kodeverk: '' };

    const wrapper = shallow(
      <Snakkeboble
        aktoer={aktoer}
        rolleNavn="Saksbehandler"
        dato={opprettetTidspunkt}
        kjoenn={kjoenn}
        opprettetAv="test"
      >
        <div />
      </Snakkeboble>,
    );

    const panel = wrapper.find(Panel);
    expect(panel.prop('className')).toBe(
      'snakkeboble__panel snakkeboble-panel snakkeboble__snakkebole-panel--saksbehandler',
    );
  });

  it('skal innehalla korrekt type, id og tidpunkt', () => {
    const opprettetTidspunkt = '2017-12-10';
    const aktoer = { kode: HistorikkAktor.SAKSBEHANDLER, kodeverk: '' };
    const kjoenn = { kode: navBrukerKjonn.KVINNE, kodeverk: '' };

    const wrapper = shallow(
      <Snakkeboble
        aktoer={aktoer}
        rolleNavn="Saksbehandler"
        dato={opprettetTidspunkt}
        kjoenn={kjoenn}
        opprettetAv="test"
      >
        <div />
      </Snakkeboble>,
    );

    const undertekst = wrapper.find(Undertekst);
    expect(undertekst.childAt(0).text()).toEqual(expect.arrayContaining(['10.12.2017 -  // Saksbehandler']));
  });
});
