type Vilkar = Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  merknadParametere: {
    antallDagerSoeknadLevertForSent?: string;
  };
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>

export default Vilkar;
