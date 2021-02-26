import VarselProsessStegPanelDef from './prosessStegPaneler/VarselProsessStegPanelDef';
import OpplysningspliktProsessStegPanelDef from './prosessStegPaneler/OpplysningspliktProsessStegPanelDef';
import InngangsvilkarProsessStegPanelDef from './prosessStegPaneler/InngangsvilkarProsessStegPanelDef';
import SoknadsfristProsessStegPanelDef from './prosessStegPaneler/SoknadsfristProsessStegPanelDef';
import SimuleringProsessStegPanelDef from './prosessStegPaneler/SimuleringProsessStegPanelDef';
import VedtakProsessStegPanelDef from './prosessStegPaneler/VedtakProsessStegPanelDef';
import BeregningProsessStegPanelDef from './prosessStegPaneler/BeregningProsessStegPanelDef';

const prosessStegPanelDefinisjoner = [
  new VarselProsessStegPanelDef(),
  new OpplysningspliktProsessStegPanelDef(),
  new InngangsvilkarProsessStegPanelDef(),
  new SoknadsfristProsessStegPanelDef(),
  new BeregningProsessStegPanelDef(),
  new SimuleringProsessStegPanelDef(),
  new VedtakProsessStegPanelDef(),
];

export default prosessStegPanelDefinisjoner;
