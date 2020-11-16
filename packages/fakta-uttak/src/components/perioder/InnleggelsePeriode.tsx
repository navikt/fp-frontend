import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FieldArray, InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm, getBehandlingFormSyncErrors, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import {
  hasValidPeriod, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';

import PerioderKnapper from './PerioderKnapper';
import DokumentertePerioderPeriodePicker from './DokumentertePerioderPeriodePicker';

import styles from './periodeTyper.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

interface PureOwnProps {
  fieldId: string;
  updatePeriode: (...args: any[]) => any;
  id: string;
  cancelEditPeriode: (...args: any[]) => any;
  readOnly: boolean;
  fraDato: string;
  tilDato: string;
  behandlingStatusKode?: string;
  behandlingId: number;
  behandlingVersjon: number;
}

interface MappedOwnProps {
  formSyncErrors?: { dokumentertePerioder: any[] };
  dokumentertePerioder?: { fom: string; tom: string }[];
  resultat?: string;
  updated: boolean;
  bekreftet: boolean;
}

// TODO slå sammen ForeldreAnsvarPeriode, SykdomOgSkadePeriode og InnleggelsePeriode

export const InnleggelsePeriode: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  fraDato,
  tilDato,
  resultat,
  id,
  cancelEditPeriode,
  updated,
  bekreftet,
  dokumentertePerioder,
  readOnly,
  formSyncErrors,
  behandlingStatusKode,
  ...formProps
}) => {
  let errorHeight = 0;

  if (
    Object.keys(formSyncErrors).length !== 0
    && formProps.submitFailed
    && formSyncErrors.dokumentertePerioder.length - 1 > 0
  ) {
    formSyncErrors.dokumentertePerioder.forEach((error: any) => {
      errorHeight
        += error !== undefined && error.fom[0].id === 'ValidationMessage.NotEmpty'
          ? 30
          : 52;
    });
  }
  const isEdited = resultat === uttakPeriodeVurdering.PERIODE_OK_ENDRET
    && readOnly
    && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK;

  // const periodeOkDisabled = !bekreftet;

  const inlineheight = dokumentertePerioder
    && resultat === uttakPeriodeVurdering.PERIODE_OK
    && !readOnly
    ? dokumentertePerioder.length * 58 + errorHeight + 170
    : 'auto';

  const inlineStyle = {
    radioOption: {
      height: inlineheight,
    },
  };
  return (
    <FlexContainer wrap>
      <FlexRow wrap>
        <FlexColumn className={styles.fieldColumn}>
          <Undertekst>
            <FormattedMessage id="UttakInfoPanel.FastsettResultat" />
          </Undertekst>
          <VerticalSpacer fourPx />
          <RadioGroupField
            direction="vertical"
            name="resultat"
            DOMName={`resultat_${id}`}
            bredde="M"
            isEdited={isEdited}
            validate={[required]}
            readOnly={readOnly}
          >
            <RadioOption
              label={{
                id:
                  'UttakInfoPanel.InnleggelsenErDokumentertAngiAvklartPeriode',
              }}
              value={uttakPeriodeVurdering.PERIODE_OK}
              style={inlineStyle.radioOption}
            />
            <RadioOption
              label={{ id: 'UttakInfoPanel.InnleggelsenErIkkeDokumentert' }}
              value={uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES}
            />
          </RadioGroupField>
          {resultat === uttakPeriodeVurdering.PERIODE_OK && !readOnly && (
            <div className={styles.addPeriodeInnleggelse}>
              <ArrowBox>
                <FieldArray
                  name="dokumentertePerioder"
                  component={DokumentertePerioderPeriodePicker}
                  props={{ fraDato, tilDato, readOnly }}
                />
              </ArrowBox>
            </div>
          )}
          <VerticalSpacer twentyPx />
          <div className={styles.textAreaStyle}>
            <TextAreaField
              name="begrunnelse"
              label={{ id: 'UttakInfoPanel.BegrunnEndringene' }}
              readOnly={readOnly}
              validate={[required, minLength3, maxLength4000, hasValidText]}
              textareaClass={styles.textAreaStyle}
              maxLength={4000}
            />
          </div>
        </FlexColumn>

      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <PerioderKnapper
            resultat={resultat}
            updatePeriode={formProps.handleSubmit}
            resetPeriode={formProps.reset}
            updated={updated}
            bekreftet={bekreftet}
            cancelEditPeriode={cancelEditPeriode}
            id={id}
            readOnly={readOnly}
          />
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

InnleggelsePeriode.defaultProps = {
  dokumentertePerioder: [],
  formSyncErrors: { dokumentertePerioder: [] },
};

const validateInnleggelseForm = (values: any) => {
  const errors = {
    dokumentertePerioder: [],
  };
  if (values && values.dokumentertePerioder) {
    values.dokumentertePerioder.forEach((periode: any, index: any) => {
      const invalid = required(periode.fom) || hasValidPeriod(periode.fom, periode.tom);
      if (invalid) {
        errors.dokumentertePerioder[index] = {
          fom: invalid,
        };
      }
    });
  }
  return errors;
};

const buildInitialValues = createSelector([
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector(
    'UttakFaktaForm',
    ownProps.behandlingId,
    ownProps.behandlingVersjon,
  )(state, `${ownProps.fieldId}.begrunnelse`),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector(
    'UttakFaktaForm',
    ownProps.behandlingId,
    ownProps.behandlingVersjon,
  )(state, `${ownProps.fieldId}.resultat`),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector(
    'UttakFaktaForm',
    ownProps.behandlingId,
    ownProps.behandlingVersjon,
  )(state, `${ownProps.fieldId}.dokumentertePerioder`),
  (_state: any, ownProps: PureOwnProps) => ownProps.id],
(begrunnelse, initialResultat, initialDokumentertePerioder, id) => ({
  begrunnelse,
  id,
  resultat: initialResultat ? initialResultat.kode : undefined,
  dokumentertePerioder:
        initialDokumentertePerioder !== undefined
          ? initialDokumentertePerioder
          : [],
}));

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = initialOwnProps;
  const formName = `innleggelseForm-${initialOwnProps.id}`;
  const onSubmit = (values: any) => initialOwnProps.updatePeriode(values);

  return (state: any, ownProps: PureOwnProps) => ({
    formSyncErrors: getBehandlingFormSyncErrors(formName, behandlingId, behandlingVersjon)(state),
    dokumentertePerioder: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'dokumentertePerioder'),
    resultat: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'resultat'),
    initialValues: buildInitialValues(state, ownProps),
    updated: behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.updated`),
    bekreftet: behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.bekreftet`),
    form: formName,
    onSubmit,
  });
};

// @ts-ignore Dynamisk navn på form
export default connect(mapStateToPropsFactory)(behandlingForm({
  enableReinitialize: true,
  validate: (values) => validateInnleggelseForm(values),
})(InnleggelsePeriode));
