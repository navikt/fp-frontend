import Vilkarperiode from './vilkarperiodeTsType';

type Vilkar = Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  merknadParametere: {
    antallDagerSoeknadLevertForSent?: string;
  };
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  perioder?: Vilkarperiode[],
}>

export default Vilkar;
