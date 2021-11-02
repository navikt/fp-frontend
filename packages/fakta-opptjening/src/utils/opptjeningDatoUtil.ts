import moment from 'moment';

import { addDaysToDate } from '@fpsak-frontend/utils';

const addDay = (date: string): string => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (
  activityDate: string, opptjeningsperiodeDate: string,
): string => (moment(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate);

export const finnOpptjeningFom = (
  opptjeningFom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) => (moment(opptjeningFom).isBefore(opptjeningsperiodeFom)
  ? opptjeningsperiodeFom
  : getOpptjeningsperiodeIfEqual(opptjeningFom, opptjeningsperiodeTom));

export const finnOpptjeningTom = (
  opptjeningTom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) => (moment(opptjeningTom).isAfter(opptjeningsperiodeTom)
  ? opptjeningsperiodeTom
  : getOpptjeningsperiodeIfEqual(opptjeningTom, opptjeningsperiodeFom));
