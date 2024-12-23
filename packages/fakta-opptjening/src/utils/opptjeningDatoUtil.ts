import { addDaysToDate } from '@navikt/ft-utils';
import dayjs from 'dayjs';

const addDay = (date: string): string => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (activityDate: string, opptjeningsperiodeDate: string): string =>
  dayjs(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate;

export const finnOpptjeningFom = (
  opptjeningFom: string,
  opptjeningsperiodeFom?: string,
  opptjeningsperiodeTom?: string,
): string | undefined => {
  if (!opptjeningsperiodeFom || !opptjeningsperiodeTom) {
    return undefined;
  }

  return dayjs(opptjeningFom).isBefore(opptjeningsperiodeFom)
    ? opptjeningsperiodeFom
    : getOpptjeningsperiodeIfEqual(opptjeningFom, opptjeningsperiodeTom);
};

export const finnOpptjeningTom = (
  opptjeningTom: string,
  opptjeningsperiodeFom?: string,
  opptjeningsperiodeTom?: string,
) => {
  if (!opptjeningsperiodeFom || !opptjeningsperiodeTom) {
    return undefined;
  }
  return dayjs(opptjeningTom).isAfter(opptjeningsperiodeTom)
    ? opptjeningsperiodeTom
    : getOpptjeningsperiodeIfEqual(opptjeningTom, opptjeningsperiodeFom);
};
