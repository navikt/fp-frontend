import { Kodeverk } from '@fpsak-frontend/types';

export type Vilkarvurderingsperiode = {
  feilutbetaling: number;
  fom: string;
  tom: string;
  foreldet: boolean;
  hendelseType: Kodeverk;
  hendelseUndertype?: Kodeverk;
  oppfyltValg?: Kodeverk;
  redusertBeloper: {}[];
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  årsak: {
    hendelseType: Kodeverk;
    hendelseUndertype?: Kodeverk;
  };
};

type Vilkarvurderingsperioder = {
  perioder: Vilkarvurderingsperiode[];
  rettsgebyr: number;
};

export default Vilkarvurderingsperioder;
