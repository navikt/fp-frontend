import SoknadsfristProsessStegPanelDef from './prosessStegPaneler/SoknadsfristProsessStegPanelDef';
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
