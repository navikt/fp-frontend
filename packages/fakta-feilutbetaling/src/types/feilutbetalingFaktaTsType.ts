import { Kodeverk } from '@fpsak-frontend/types';

type FeilutbetalingFakta = {
  behandlingFakta?: {
    perioder?: {
      fom: string;
      tom: string;
      belop: number;
    }[];
    totalPeriodeFom: string;
    totalPeriodeTom: string;
    aktuellFeilUtbetaltBeløp: number;
    tidligereVarseltBeløp?: number;
    behandlingÅrsaker?: {
      behandlingArsakType: Kodeverk;
    }[];
    behandlingsresultat?: {
      type: Kodeverk;
      konsekvenserForYtelsen: Kodeverk[];
    };
    tilbakekrevingValg?: {
      videreBehandling: Kodeverk;
    };
    datoForRevurderingsvedtak: string;
    begrunnelse?: string;
  };
};

export default FeilutbetalingFakta;
