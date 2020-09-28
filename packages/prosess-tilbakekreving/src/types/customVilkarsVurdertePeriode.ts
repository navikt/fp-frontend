import VilkarResultat from '../kodeverk/vilkarResultat';

type ForstoBurdeForstatt = {
  FORSTO_BURDE_FORSTAATT?: {
    erBelopetIBehold: boolean;
  };
}
type FeilOpplysninger = {
  FEIL_OPPLYSNINGER?: {
    erBelopetIBehold: boolean;
  };
}
type MangelfullOpplysning = {
  MANGELFULL_OPPLYSNING?: {
    erBelopetIBehold: boolean;
  };
}
type GodTro = {
  GOD_TRO?: {
    erBelopetIBehold: boolean;
  };
}

type CustomVilkarsVurdertePeriode = {
  fom: string;
  tom: string;
  erSplittet: boolean;
  begrunnelse: string;
  vurderingBegrunnelse: string;
  erForeldet: boolean;
  valgtVilkarResultatType: VilkarResultat;
  feilutbetaling: number;
} & (ForstoBurdeForstatt | FeilOpplysninger | MangelfullOpplysning | GodTro);

export default CustomVilkarsVurdertePeriode;
