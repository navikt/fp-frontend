import { FeilutbetalingPeriode } from '@fpsak-frontend/types';

type ForeldelsesresultatActivity = Readonly<{
  feilutbetaling: number;
  foreldet: string;
  erSplittet?: boolean;
}> & FeilutbetalingPeriode;

export default ForeldelsesresultatActivity;
