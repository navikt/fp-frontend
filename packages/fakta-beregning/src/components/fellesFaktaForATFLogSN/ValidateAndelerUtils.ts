import beregningsgrunnlagAndeltyper from '@fpsak-frontend/kodeverk/src/beregningsgrunnlagAndeltyper';
import { aktivitetstatusTilAndeltypeMap } from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import {BrukersAndelValues, FaktaBeregningError} from '../../typer/FaktaBeregningTypes';
import LabelType from "@fpsak-frontend/form/src/LabelType";
import AndelFieldValue from "../../typer/FieldValues";

export const compareAndeler = (andel1: SortedAndelInfo, andel2: SortedAndelInfo): number => {
  if (andel1.andelsinfo === andel2.andelsinfo) {
    if (andel1.inntektskategori === andel2.inntektskategori) {
      return 0;
    }
    return andel1.inntektskategori > andel2.inntektskategori ? 1 : -1;
  }
  return andel1.andelsinfo > andel2.andelsinfo ? 1 : -1;
};

const mapAndelToSortedObject = (value, andelList) => {
  const {
    nyAndel, andel, inntektskategori, aktivitetStatus,
  } = value;
  if (nyAndel) {
    if (!Number.isNaN(Number(andel))) {
      const matchendeAndelFraListe = andelList.filter((andelValue) => andelValue.andelsnr === parseFloat(andel));
      if (matchendeAndelFraListe.length > 0) {
        return { andelsinfo: matchendeAndelFraListe[0].andel, inntektskategori };
      }
    }
    if (beregningsgrunnlagAndeltyper[andel]) {
      return { andelsinfo: andel, inntektskategori };
    }
    return { andelsinfo: andel, inntektskategori };
  }
  if (aktivitetstatusTilAndeltypeMap[aktivitetStatus]) {
    return { andelsinfo: aktivitetstatusTilAndeltypeMap[aktivitetStatus], inntektskategori };
  }
  return { andelsinfo: andel, inntektskategori };
};

export const ulikeAndelerErrorMessage = (): FaktaBeregningError[] => ([{ id: 'BeregningInfoPanel.FordelBG.Validation.UlikeAndeler' }]);

const erAndelerLike = (andel1: SortedAndelInfo, andel2: SortedAndelInfo): boolean => andel2.andelsinfo === andel1.andelsinfo
  && andel2.inntektskategori === andel1.inntektskategori;

export type SortedAndelInfo = {
  andelsinfo: string;
  inntektskategori: string;
}

export const validateUlikeAndelerWithGroupingFunction = (andelList: BrukersAndelValues[] | AndelFieldValue[], mapToSort: ((andel: BrukersAndelValues,
   andelList: BrukersAndelValues[] | AndelFieldValue[]) => SortedAndelInfo)): any => {
  const mappedAndeler = andelList.map((value) => (mapToSort(value, andelList)));
  const sortedAndeler = mappedAndeler.slice().sort((andel1, andel2) => compareAndeler(andel1, andel2));
  for (let i = 0; i < sortedAndeler.length - 1; i += 1) {
    if (erAndelerLike(sortedAndeler[i], sortedAndeler[i + 1])) {
      return ulikeAndelerErrorMessage();
    }
  }
  return null;
};

export const validateUlikeAndeler = (andelList) => validateUlikeAndelerWithGroupingFunction(andelList, mapAndelToSortedObject);

const minstEnFastsattErrorMessage = () => ([{ id: 'BeregningInfoPanel.Validation.MinstEnFastsatt' }]);

export const validateMinstEnFastsatt = (andelList: AndelFieldValue[]): FaktaBeregningError[] => {
  const harAndelMedFastsattInntekt = andelList.some(({ fastsattBelop }) => fastsattBelop !== null && fastsattBelop !== '');
  if (!harAndelMedFastsattInntekt) {
    return minstEnFastsattErrorMessage();
  }
  return null;
};
