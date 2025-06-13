export type BarnHendelseData = { fødselsdato: string; dødsdato: string | null };

export type Fødsel = {
  søknad: FødselSøknad;
  register: FødselRegister;
  gjeldende: FødselGjeldende;
};

export type FødselSøknad = {
  barn: BarnHendelseData[];
  termindato: string | null;
  utstedtdato: string | null;
  antallBarn: number;
};

export type FødselRegister = {
  barn: BarnHendelseData[];
};

type FødselDtoGjeldendeUtstedtdato = {
  kilde: Kilde;
  utstedtdato: string;
};

export type FødselGjeldende = {
  termindato: FødselDtoGjeldendeTermindato | null;
  utstedtdato: FødselDtoGjeldendeUtstedtdato | null;
  barn: FødselDtoGjeldendeBarn[];
  antallBarn: number;
};

export type FødselDtoGjeldendeTermindato = {
  kilde: Kilde;
  termindato: string;
  kanOverstyres: boolean;
};

export type FødselDtoGjeldendeBarn = {
  kilde: Kilde;
  barn: BarnHendelseData;
  kanOverstyres: boolean;
};

type Kilde = 'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER';
