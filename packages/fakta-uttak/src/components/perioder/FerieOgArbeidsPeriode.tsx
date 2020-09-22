import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { Undertekst } from 'nav-frontend-typografi';

import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import {
  hasValidPeriod, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { Kodeverk } from '@fpsak-frontend/types';

import EndreSoknadsperiode from '../EndreSoknadsperiode';
import PerioderKnapper from './PerioderKnapper';

import styles from './periodeTyper.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

interface OwnProps {
  resultat?: string;
  updatePeriode: (...args: any[]) => any;
  cancelEditPeriode: (...args: any[]) => any;
  id: string;
  updated: boolean;
  bekreftet: boolean;
  readOnly: boolean;
  arbeidstidprosent?: number;
  skalViseResultat: boolean;
  oppholdArsak?: Kodeverk;
  behandlingStatusKode?: string;
  førsteUttaksdato?: string;
  originalResultat: Kodeverk;
}

export const FerieOgArbeidsPeriode: FunctionComponent<OwnProps & InjectedFormProps> = ({
  resultat,
  id,
  cancelEditPeriode,
  updated,
  bekreftet,
  arbeidstidprosent,
  readOnly,
  behandlingStatusKode,
  skalViseResultat,
  førsteUttaksdato,
  originalResultat,
  oppholdArsak,
  ...formProps
}) => {
  const isEdited = resultat === uttakPeriodeVurdering.PERIODE_OK_ENDRET
  && readOnly && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK;

  const inlineStyle = {
    radioOption: {
      height: resultat === uttakPeriodeVurdering.PERIODE_OK_ENDRET && !readOnly ? 260 : 'auto',
    },
  };

  const withGradering = arbeidstidprosent !== null && arbeidstidprosent !== undefined && arbeidstidprosent > 0;
  const periodeOkDisabled = !bekreftet || originalResultat.kode !== uttakPeriodeVurdering.PERIODE_OK;

  return (
    <div>
      {skalViseResultat
    && (
      <>
        <FlexContainer>
          <FlexRow wrap>
            <FlexColumn className={styles.fieldColumn}>
              <Undertekst><FormattedMessage id="UttakInfoPanel.FastsettResultat" /></Undertekst>
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
                  label={{ id: 'UttakInfoPanel.PeriodenErOk' }}
                  value={uttakPeriodeVurdering.PERIODE_OK}
                  disabled={periodeOkDisabled}
                />
                <RadioOption
                  label={{ id: 'UttakInfoPanel.EndreSoknadsperioden' }}
                  value={uttakPeriodeVurdering.PERIODE_OK_ENDRET}
                  style={inlineStyle.radioOption}
                />
                <RadioOption
                  label={{ id: 'UttakInfoPanel.PeriodenKanIkkeAvklares' }}
                  value={uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES}
                />
              </RadioGroupField>
              {resultat === uttakPeriodeVurdering.PERIODE_OK_ENDRET && !readOnly
            && (
              <div className={styles.endreSoknadsperiode}>
                <EndreSoknadsperiode oppholdArsak={oppholdArsak} withGradering={withGradering} førsteUttaksdato={førsteUttaksdato} />
              </div>
            )}
              <VerticalSpacer twentyPx />
              <div className={styles.textAreaStyle}>
                <TextAreaField
                  name="begrunnelse"
                  label={{ id: 'UttakInfoPanel.BegrunnEndringene' }}
                  readOnly={readOnly}
                  validate={[required,
                    minLength3,
                    maxLength4000,
                    hasValidText,
                  ]}
                  maxLength={4000}
                />
              </div>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
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
      </>
    )}
    </div>
  );
};

const validateForm = (values: any) => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { nyFom, nyTom } = values;

  const invalid = required(nyFom) || hasValidPeriod(nyFom, nyTom);

  if (invalid) {
    return {
      nyFom: invalid,
    };
  }

  return errors;
};

interface PureOwnProps {
  id: string,
  behandlingId: number;
  behandlingVersjon: number;
  fieldId: string;
  tilDato: string;
  fraDato: string;
  arbeidstidprosent: number;
  uttakPeriodeType: Kodeverk;
  updatePeriode: (...args: any[]) => any;
  readOnly: boolean;
  bekreftet: boolean;
}

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
  )(state, `${ownProps.fieldId}.saksebehandlersBegrunnelse`),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector(
    'UttakFaktaForm',
    ownProps.behandlingId,
    ownProps.behandlingVersjon,
  )(state, `${ownProps.fieldId}.oppholdÅrsak`),
  (state: any, ownProps: PureOwnProps) => behandlingFormValueSelector(
    'UttakFaktaForm',
    ownProps.behandlingId,
    ownProps.behandlingVersjon,
  )(state, `${ownProps.fieldId}.resultat`),
  (_state: any, ownProps: PureOwnProps) => ownProps],
(begrunnelse, saksebehandlersBegrunnelse, oppholdArsak, initialResultat, ownProps) => {
  let initialResultatValue = initialResultat ? initialResultat.kode : undefined;
  if (oppholdArsak && oppholdArsak.kode !== oppholdArsakType.UDEFINERT && !begrunnelse) {
    initialResultatValue = undefined;
  }
  return {
    begrunnelse: begrunnelse || saksebehandlersBegrunnelse,
    id: ownProps.id,
    resultat: initialResultatValue,
    nyTom: ownProps.tilDato,
    nyFom: ownProps.fraDato,
    nyArbeidstidsprosent: ownProps.arbeidstidprosent,
    kontoType: ownProps.uttakPeriodeType.kode,
    oppholdArsak: oppholdArsak ? oppholdArsak.kode : '',
  };
});

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = initialOwnProps;
  const formName = `arbeidOgFerieForm-${initialOwnProps.id}`;
  const onSubmit = (values: any) => initialOwnProps.updatePeriode(values);

  return (state: any, ownProps: PureOwnProps) => {
    const resultat = behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'resultat');
    const førsteUttaksdato = behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, 'førsteUttaksdato');
    const originalResultat = behandlingFormValueSelector(
      'UttakFaktaForm',
      behandlingId,
      behandlingVersjon,
    )(state, `${ownProps.fieldId}.originalResultat`) || {};
    const begrunnelse = behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.begrunnelse`);
    const oppholdArsak = behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.oppholdÅrsak`);

    const skalViseResultat = !(ownProps.readOnly && oppholdArsak && oppholdArsak.kode !== oppholdArsakType.UDEFINERT && !begrunnelse);
    const { bekreftet } = ownProps;

    return {
      onSubmit,
      resultat,
      bekreftet,
      skalViseResultat,
      oppholdArsak,
      førsteUttaksdato,
      originalResultat,
      initialValues: buildInitialValues(state, ownProps),
      updated: behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.updated`),
      form: formName,
    };
  };
};

// @ts-ignore Dynamisk navn på form
export default connect(mapStateToPropsFactory)(behandlingForm({
  enableReinitialize: true,
  validate: validateForm,
})(FerieOgArbeidsPeriode));
