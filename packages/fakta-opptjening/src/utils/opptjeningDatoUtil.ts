import dayjs from 'dayjs';

import { addDaysToDate } from '@navikt/ft-utils';

const addDay = (date: string): string => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (activityDate: string, opptjeningsperiodeDate: string): string =>
  dayjs(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate;

export const finnOpptjeningFom = (
  opptjeningFom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) =>
  dayjs(opptjeningFom).isBefore(opptjeningsperiodeFom)
    ? opptjeningsperiodeFom
    : getOpptjeningsperiodeIfEqual(opptjeningFom, opptjeningsperiodeTom);

export const finnOpptjeningTom = (
  opptjeningTom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) =>
  dayjs(opptjeningTom).isAfter(opptjeningsperiodeTom)
    ? opptjeningsperiodeTom
    : getOpptjeningsperiodeIfEqual(opptjeningTom, opptjeningsperiodeFom);
