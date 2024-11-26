import { EGEN_VIRKSOMHET_NAME_PREFIX } from './constants';
export type IdFormValues = {
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
};
export type RegnskapFormValues = {
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
};

export type RelasjonFormValues = {
  familieEllerVennerTilknyttetNaringen?: boolean;
};

export type StartedEndretFormValues = {
  varigEndretEllerStartetSisteFireAr?: boolean;
  varigEndretEllerStartetSisteFireArArsak: string[];

  varigEndringGjeldendeFom?: string;
  nyIArbeidslivetFom?: string;
  beskrivelseAvEndring?: string;
  inntekt?: number;
};

export type TypeNaringFormValues = {
  typeVirksomhet: string[];
};

export type RegistrerVirksomhetFormValues = IdFormValues &
  RelasjonFormValues &
  RegnskapFormValues &
  StartedEndretFormValues &
  TypeNaringFormValues;
export type VirksomhetSubFormValues = {
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
};

export type VirksomhetFormValues = {
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
};
