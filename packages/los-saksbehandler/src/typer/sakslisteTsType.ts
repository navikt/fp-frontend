type AnnetKriterie = Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>;

type Saksliste = Readonly<{
  sakslisteId: number;
  navn: string;
  behandlingTyper: string[];
  fagsakYtelseTyper: string[];
  andreKriterier: AnnetKriterie[];
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
}>

export default Saksliste;
