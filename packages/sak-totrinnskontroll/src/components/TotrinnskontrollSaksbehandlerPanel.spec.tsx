import React from 'react';
import { shallow } from 'enzyme';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext } from '@fpsak-frontend/types';

import TotrinnskontrollSaksbehandlerPanel from './TotrinnskontrollSaksbehandlerPanel';

const getTotrinnsaksjonspunkterFødsel = () => (
  [
    {
      aksjonspunktKode: '5027',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '5001',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '7002',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
  ] as TotrinnskontrollAksjonspunkt[]
);

const getTotrinnsaksjonspunkterOmsorg = () => (
  [
    {
      aksjonspunktKode: '5008',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '5011',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
  ] as TotrinnskontrollAksjonspunkt[]
);

const getTotrinnsaksjonspunkterForeldreansvar = () => (
  [
    {
      aksjonspunktKode: '5014',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '5013',
      opptjeningAktiviteter: [],
      vurderPaNyttArsaker: [],
    },
  ] as TotrinnskontrollAksjonspunkt[]
);

const totrinnskontrollSkjermlenkeContext = [{
  skjermlenkeType: 'FOEDSEL',
  totrinnskontrollAksjonspunkter: getTotrinnsaksjonspunkterFødsel(),
}, {
  skjermlenkeType: 'OMSORG',
  totrinnskontrollAksjonspunkter: getTotrinnsaksjonspunkterOmsorg(),
}, {
  skjermlenkeType: 'FORELDREANSVAR',
  totrinnskontrollAksjonspunkter: getTotrinnsaksjonspunkterForeldreansvar(),
}] as TotrinnskontrollSkjermlenkeContext[];

const location = {
  pathname: '', search: '', state: {}, hash: '',
};

describe('<TotrinnskontrollSaksbehandlerPanel>', () => {
  it('skal vise korrekt antall element og navn', () => {
    const wrapper = shallow(<TotrinnskontrollSaksbehandlerPanel
      totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
      erForeldrepengerFagsak
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      arbeidsforholdHandlingTyper={[]}
      erTilbakekreving={false}
      vurderArsaker={[]}
      faktaOmBeregningTilfeller={[]}
      skjemalenkeTyper={[{
        kode: 'FOEDSEL',
        navn: 'Fødsel',
        kodeverk: '',
      }, {
        kode: 'OMSORG',
        navn: 'Omsorg',
        kodeverk: '',
      }, {
        kode: 'FORELDREANSVAR',
        navn: 'Foreldreansvar',
        kodeverk: '',
      }]}
      lagLenke={() => location}
    />);
    const navFieldGroup = wrapper.find('NavLink');
    expect(navFieldGroup).toHaveLength(3);
    const normaltekst = wrapper.find('pre');
    expect(normaltekst).toHaveLength(7);
  });
});
