import { ForeldelsePerioder } from './foreldelsePerioderTsType';

type ForeldelsesresultatActivity = Readonly<{
  feilutbetaling: number;
  foreldet: string;
  erSplittet?: boolean;
}> & ForeldelsePerioder;

export default ForeldelsesresultatActivity;
