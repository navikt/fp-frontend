import KodeverkMedNavn from './kodeverkMedNavnTsType';
import Kodeverk from './kodeverkTsType';

type FeilutbetalingAarsak = {
  hendelseTyper: {
    hendelseType?: KodeverkMedNavn;
    hendelseUndertyper?: KodeverkMedNavn[];
  }[];
  ytelseType: Kodeverk;
};

export default FeilutbetalingAarsak;
