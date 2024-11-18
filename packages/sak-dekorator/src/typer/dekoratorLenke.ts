export type DekoratorLenke = Readonly<{
  tekst: string;
  href?: string;
  callback?: (event: React.SyntheticEvent) => void;
}>;
