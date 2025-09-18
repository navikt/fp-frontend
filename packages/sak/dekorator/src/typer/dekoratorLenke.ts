export type DekoratorLenke = Readonly<{
  tekst: string;
  callback?: (event: React.SyntheticEvent) => void;
}>;
