export { ReactECharts } from './src/ReactECharts';
export { OppgaveReservasjonEndringDatoModal } from './src/endreReservasjon/OppgaveReservasjonEndringDatoModal';
export { FlyttReservasjonModal } from './src/flyttReservasjon/FlyttReservasjonModal';
export { AktiveOgTilgjengeligeOppgaverGraf } from './src/graf/AktiveOgTilgjengeligeOppgaverGraf';

export type { ReservasjonStatus } from './src/typer/reservasjonStatus';
export type { statistikk_AktiveOgTilgjenglige } from './src/typer/oppgaveFilterStatistikk';
export {
  getAkselVariable,
  createBarSeries,
  createToolboxWithFilename,
  formaterMånedÅr,
  getStyle,
  layoutOptions,
} from './src/echartUtils';
