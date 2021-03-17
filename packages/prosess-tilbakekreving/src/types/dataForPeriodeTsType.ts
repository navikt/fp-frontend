import { DetaljertFeilutbetalingPeriode } from '@fpsak-frontend/types';

export type DataForPeriode = {
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode

export default DataForPeriode;
