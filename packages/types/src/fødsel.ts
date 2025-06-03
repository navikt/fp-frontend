import type { AvklartBarn } from './familieHendelseTsType';

export type Fødsel = {
  søknad: FødselSøknad;
  register: FødselRegister;
  gjeldende: FødselGjeldende;
};

export type FødselSøknad = {
  barn: AvklartBarn[];
  termindato: string;
  utstedtdato: string;
  antallBarn: number;
};

export type FødselRegister = {
  barn: AvklartBarn[];
};

type FødselDtoGjeldendeUtstedtdato = {
  kilde: Kilde;
  utstedtdato: string;
};

export type FødselGjeldende = {
  termindato: FødselDtoGjeldendeTermindato;
  utstedtdato: FødselDtoGjeldendeUtstedtdato;
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
  barn: AvklartBarn;
  kanOverstyres: boolean;
};

type Kilde = 'SAKSBEHANDLER' | 'SØKNAD' | 'FOLKEREGISTER';
