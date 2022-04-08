import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { Undertekst } from 'nav-frontend-typografi';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import {
  VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, TextAreaField } from '@fpsak-frontend/form';
import {
  hasValidPeriod, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';

import EndreSoknadsperiode from '../EndreSoknadsperiode';
import PerioderKnapper from './PerioderKnapper';

import styles from './periodeTyper.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

type FormValues = {
  begrunnelse?: string;
  id?: string;
  resultat?: string;
  nyTom?: string;
  nyFom?: string;
  nyArbeidstidsprosent?: number;
  kontoType?: string;
  oppholdArsak?: string;
}

interface PureOwnProps {
  id: string,
  fieldId: string;
  tilDato: string;
  fraDato: string;
  arbeidstidprosent: number;
  uttakPeriodeType: string;
  updatePeriode: (...args: any[]) => any;
  readOnly: boolean;
  cancelEditPeriode: (...args: any[]) => any;
  behandlingStatusKode?: string;
  bekreftet: boolean;
}

interface MappedOwnProps {
  onSubmit: (values: FormValues) => any;
  resultat?: string;
  updated: boolean;
  skalViseResultat: boolean;
  oppholdArsak?: string;
  førsteUttaksdato?: string;
  originalResultat: string;
  initialValues: FormValues;
  form: string;
}

export const FerieOgArbeidsPeriode: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
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
  const periodeOkDisabled = !bekreftet || originalResultat !== uttakPeriodeVurdering.PERIODE_OK;

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

const validateForm = (values: FormValues): any => {
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

const buildInitialValues = createSelector([
  (state: any, ownProps: PureOwnProps) => formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.begrunnelse`),
  (state: any, ownProps: PureOwnProps) => formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.saksebehandlersBegrunnelse`),
  (state: any, ownProps: PureOwnProps) => formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.oppholdÅrsak`),
  (state: any, ownProps: PureOwnProps) => formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.resultat`),
  (_state: any, ownProps: PureOwnProps) => ownProps],
(begrunnelse, saksebehandlersBegrunnelse, oppholdArsak: string, initialResultat, ownProps): FormValues => {
  let initialResultatValue = initialResultat;
  if (oppholdArsak && oppholdArsak !== oppholdArsakType.UDEFINERT && !begrunnelse) {
    initialResultatValue = undefined;
  }
  return {
    begrunnelse: begrunnelse || saksebehandlersBegrunnelse,
    id: ownProps.id,
    resultat: initialResultatValue,
    nyTom: ownProps.tilDato,
    nyFom: ownProps.fraDato,
    nyArbeidstidsprosent: ownProps.arbeidstidprosent,
    kontoType: ownProps.uttakPeriodeType,
    oppholdArsak: oppholdArsak || '',
  };
});

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const formName = `arbeidOgFerieForm-${initialOwnProps.id}`;
  const onSubmit = (values: FormValues) => initialOwnProps.updatePeriode(values);

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const resultat = formValueSelector(formName)(state, 'resultat');
    const førsteUttaksdato = formValueSelector('UttakFaktaForm')(state, 'førsteUttaksdato');
    const originalResultat = formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.originalResultat`) || {};
    const begrunnelse = formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.begrunnelse`);
    const oppholdArsak = formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.oppholdÅrsak`) as string;

    const skalViseResultat = !(ownProps.readOnly && oppholdArsak && oppholdArsak !== oppholdArsakType.UDEFINERT && !begrunnelse);

    return {
      onSubmit,
      resultat,
      skalViseResultat,
      oppholdArsak,
      førsteUttaksdato,
      originalResultat,
      initialValues: buildInitialValues(state, ownProps),
      updated: formValueSelector('UttakFaktaForm')(state, `${ownProps.fieldId}.updated`),
      form: formName,
    };
  };
};

// @ts-ignore Dynamisk navn på form
export default connect(mapStateToPropsFactory)(reduxForm({
  enableReinitialize: true,
  validate: validateForm,
  destroyOnUnmount: false,
})(FerieOgArbeidsPeriode));
