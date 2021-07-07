import beregningsgrunnlagAndeltyper from '@fpsak-frontend/kodeverk/src/beregningsgrunnlagAndeltyper';
import { aktivitetstatusTilAndeltypeMap } from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { IntlShape } from 'react-intl';
import { BrukersAndelValues } from '../../typer/FaktaBeregningTypes';
import AndelFieldValue from '../../typer/FieldValues';

export type SortedAndelInfo = {
  andelsinfo: string;
  inntektskategori: string;
  arbeidsforholdId?: string;
}

export const compareAndeler = (andel1: SortedAndelInfo, andel2: SortedAndelInfo): number => {
  if (andel1.andelsinfo === andel2.andelsinfo) {
    if (andel1.inntektskategori === andel2.inntektskategori) {
      return 0;
    }
    return andel1.inntektskategori > andel2.inntektskategori ? 1 : -1;
  }
  return andel1.andelsinfo > andel2.andelsinfo ? 1 : -1;
};

const mapAndelToSortedObject = (value, andelList): SortedAndelInfo => {
  const {
    nyAndel, andel, inntektskategori, aktivitetStatus, arbeidsforholdId,
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
  return { andelsinfo: andel, inntektskategori, arbeidsforholdId };
};

export const ulikeAndelerErrorMessage = (intl: IntlShape): string => intl.formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.UlikeAndeler' });

const erAndelerLike = (andel1: SortedAndelInfo, andel2: SortedAndelInfo): boolean => andel2.andelsinfo === andel1.andelsinfo
  && andel2.inntektskategori === andel1.inntektskategori && andel1.arbeidsforholdId === andel2.arbeidsforholdId;

export const validateUlikeAndelerWithGroupingFunction = (andelList: BrukersAndelValues[] | AndelFieldValue[], mapToSort: ((andel: BrukersAndelValues,
   andelList: BrukersAndelValues[] | AndelFieldValue[]) => SortedAndelInfo), intl: IntlShape): string => {
  const mappedAndeler = andelList.map((value) => (mapToSort(value, andelList)));
  const sortedAndeler = mappedAndeler.slice().sort((andel1, andel2) => compareAndeler(andel1, andel2));
  for (let i = 0; i < sortedAndeler.length - 1; i += 1) {
    if (erAndelerLike(sortedAndeler[i], sortedAndeler[i + 1])) {
      return ulikeAndelerErrorMessage(intl);
    }
  }
  return null;
};

export const validateUlikeAndeler = (andelList: AndelFieldValue[],
  intl: IntlShape): string => validateUlikeAndelerWithGroupingFunction(andelList, mapAndelToSortedObject, intl);

const minstEnFastsattErrorMessage = (intl: IntlShape): string => intl.formatMessage({ id: 'BeregningInfoPanel.Validation.MinstEnFastsatt' });

export const validateMinstEnFastsatt = (andelList: AndelFieldValue[], intl: IntlShape): string => {
  const harAndelMedFastsattInntekt = andelList.some(({ fastsattBelop }) => fastsattBelop !== null && fastsattBelop !== '');
  if (!harAndelMedFastsattInntekt) {
    return minstEnFastsattErrorMessage(intl);
  }
  return null;
};
