import { EGEN_VIRKSOMHET_NAME_PREFIX } from './constants';

type IdFormValues = {
  fom?: string;
  tom?: string;
  navn?: string;
  virksomhetRegistrertINorge?: boolean;
  organisasjonsnummer?: string;
  landJobberFra?: string;
};

type RegnskapFormValues = {
  harRegnskapsforer?: boolean;
  navnRegnskapsforer?: string;
  tlfRegnskapsforer?: string;
};

type RelasjonFormValues = {
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

type TypeNaringFormValues = {
  typeVirksomhet: string[];
};

export type RegistrerVirksomhetFormValues = IdFormValues &
  RelasjonFormValues &
  RegnskapFormValues &
  StartedEndretFormValues &
  TypeNaringFormValues;

type VirksomhetSubFormValues = {
  harArbeidetIEgenVirksomhet?: boolean;
  virksomheter: RegistrerVirksomhetFormValues[];
};

export type VirksomhetFormValues = {
  [EGEN_VIRKSOMHET_NAME_PREFIX]: VirksomhetSubFormValues;
};
