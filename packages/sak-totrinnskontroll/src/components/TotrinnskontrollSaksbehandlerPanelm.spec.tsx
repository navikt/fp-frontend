import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TotrinnskontrollSaksbehandlerPanel from './TotrinnskontrollSaksbehandlerPanel';
import getAksjonspunktText from './aksjonspunktTekster/aksjonspunktTekstUtleder';

const getTotrinnsaksjonspunkterFødsel = () => (
  [
    {
      aksjonspunktKode: '5027',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '5001',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '7002',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
  ]
);

const getTotrinnsaksjonspunkterOmsorg = () => (
  [
    {
      aksjonspunktKode: '5008',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '5011',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
  ]
);

const getTotrinnsaksjonspunkterForeldreansvar = () => (
  [
    {
      aksjonspunktKode: '5014',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
    {
      aksjonspunktKode: '5013',
      beregningDto: null,
      besluttersBegrunnelse: null,
      opptjeningAktiviteter: [],
      totrinnskontrollGodkjent: null,
      vurderPaNyttArsaker: [],
    },
  ]
);

describe('<TotrinnskontrollSaksbehandlerPanel>', () => {
  it('skal vise korrekt antall element og navn', () => {
    const aksjonspunkterFødsel = getTotrinnsaksjonspunkterFødsel();
    const aksjonspunkterOmsorg = getTotrinnsaksjonspunkterOmsorg();
    const aksjonspunkterForeldreansvar = getTotrinnsaksjonspunkterForeldreansvar();

    const approvalList = [{
      contextCode: 'FOEDSEL',
      skjermlenkeId: 'Behandlingspunkt.Fodselsvilkaret',
      skjermlenke: 'testLocation',
      aksjonspunkter: aksjonspunkterFødsel,
    },
    {
      contextCode: 'OMSORG',
      skjermlenkeId: 'Behandlingspunkt.Omsorgsvilkaret',
      skjermlenke: 'testLocation',
      aksjonspunkter: aksjonspunkterOmsorg,
    },
    {
      contextCode: 'FORELDREANSVAR',
      skjermlenkeId: 'Behandlingspunkt.Foreldreansvar',
      skjermlenke: 'testLocation',
      aksjonspunkter: aksjonspunkterForeldreansvar,
    },
    ];

    const wrapper = shallow(<TotrinnskontrollSaksbehandlerPanel
      approvalList={approvalList}
      getAksjonspunktText={getAksjonspunktText.resultFunc(true, null, null, null, null)}
    />);
    const navFieldGroup = wrapper.find('NavLink');
    expect(navFieldGroup)
      .to
      .have
      .length(3);
    const normaltekst = wrapper.find('pre');
    expect(normaltekst)
      .to
      .have
      .length(7);
  });
});
