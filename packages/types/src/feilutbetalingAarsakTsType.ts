import { Kodeverk } from '@fpsak-frontend/types';

type FeilutbetalingAarsak = {
  hendelseTyper: {
    hendelseType?: {
      kode: string;
      navn: string;
    };
    hendelseUndertyper?: {
      kode: string;
      navn: string;
    }[];
  }[];
  ytelseType: Kodeverk;
};

export default FeilutbetalingAarsak;
