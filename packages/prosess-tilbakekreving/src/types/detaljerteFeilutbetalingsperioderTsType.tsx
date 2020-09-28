import { Kodeverk } from '@fpsak-frontend/types';

export type DetaljertFeilutbetalingPeriode = {
  fom: string;
  tom: string;
  årsak: {
    hendelseType: Kodeverk;
    hendelseUndertype?: Kodeverk;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: Kodeverk;
  foreldet: boolean;
};

type DetaljerteFeilutbetalingsperioder = {
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
};

export default DetaljerteFeilutbetalingsperioder;
