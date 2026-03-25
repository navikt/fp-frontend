export { ReactECharts } from './src/ReactECharts';
export { EndreReservasjonDato } from './src/endreReservasjondato/EndreReservasjonDato';
export { FlyttReservasjonModal } from './src/flyttReservasjon/FlyttReservasjonModal';
export { AktiveOgTilgjengeligeOppgaverGraf } from './src/graf/oppgaver/AktiveOgTilgjengeligeOppgaverGraf';
export { LukkedeOppgaverPanel } from './src/graf/lukkedeOppgaver/LukkedeOppgaverPanel';
export { OppgaveLabels } from './src/oppgaveLabels/OppgaveLabels';

export {
  getAkselVariable,
  createBarSeries,
  createLineSeries,
  createToolboxWithFilename,
  formaterMånedÅr,
  getStyle,
} from './src/echartUtils';

export type { ColorPair } from './src/echartUtils';

export { LosUrlFelles, losKodeverkOptions, flyttReservasjon } from './src/api/fplosFellesApi';
