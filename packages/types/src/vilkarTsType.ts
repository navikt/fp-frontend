import Kodeverk from './kodeverkTsType';

type Vilkar = Readonly<{
  vilkarType: Kodeverk;
  vilkarStatus: Kodeverk;
  merknadParametere: {
    antallDagerSoeknadLevertForSent?: string;
  };
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>

export default Vilkar;
