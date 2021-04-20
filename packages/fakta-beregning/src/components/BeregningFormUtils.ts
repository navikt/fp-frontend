import { createSelector } from 'reselect';
import { getFormInitialValues, getFormValues, isDirty } from 'redux-form';

export const formNameAvklarAktiviteter = 'avklarAktiviteterForm';

export const formNameVurderFaktaBeregning = 'vurderFaktaBeregningForm';

export const getFormValuesForAvklarAktiviteter = createSelector([
  (state) => getFormValues(formNameAvklarAktiviteter)(state)],
(values) => values);

export const getFormInitialValuesForAvklarAktiviteter = createSelector([
  (state) => getFormInitialValues(formNameAvklarAktiviteter)(state)],
(values) => values);

export const getFormValuesForBeregning = createSelector([
  (state) => getFormValues(formNameVurderFaktaBeregning)(state)],
(values) => values);

export const getFormInitialValuesForBeregning = createSelector([
  (state) => getFormInitialValues(formNameVurderFaktaBeregning)(state)],
(values) => values);

export const isBeregningFormDirty = createSelector([
  (state) => isDirty(formNameVurderFaktaBeregning)(state)],
(values) => values);
