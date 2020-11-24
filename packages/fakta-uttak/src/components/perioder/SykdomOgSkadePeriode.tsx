import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FieldArray, InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import overforingArsakCodes from '@fpsak-frontend/kodeverk/src/overforingArsakCodes';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import {
  ArrowBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm, behandlingFormValueSelector, getBehandlingFormSyncErrors,
} from '@fpsak-frontend/form';
import {
  hasValidPeriod, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import { FamilieHendelse, Kodeverk } from '@fpsak-frontend/types';

import PerioderKnapper from './PerioderKnapper';
import DokumentertePerioderPeriodePicker from './DokumentertePerioderPeriodePicker';

import styles from './periodeTyper.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

const finnTextTilRadio1 = (erHeimevern: boolean, erNavTiltak: boolean): string => {
  if (erHeimevern) {
    return 'SykdomOgSkadePeriode.HeimevernetErDok';
  }
  return erNavTiltak ? 'SykdomOgSkadePeriode.TiltakIRegiNavErDok' : 'UttakInfoPanel.SykdomSkadenDokumentertAngiAvklartPeriode';
};

const finnTextTilRadio2 = (erHeimevern: boolean, erNavTiltak: boolean): string => {
  if (erHeimevern) {
    return 'SykdomOgSkadePeriode.HeimevernetErIkkeDok';
  }
  return erNavTiltak ? 'SykdomOgSkadePeriode.TiltakIRegiNavErIkkeDok' : 'UttakInfoPanel.SykdomSkadenIkkeDokumentert';
};

type FormValues = {
  begrunnelse?: string;
  id?: string;
  resultat?: string;
  dokumentertePerioder?: any;
}

interface PureOwnProps {
  id: string;
  behandlingId: number;
  behandlingVersjon: number;
  fieldId: string;
  gjeldendeFamiliehendelse: FamilieHendelse;
  vilkarForSykdomExists: boolean;
  overforingArsak?: Kodeverk;
  updatePeriode: (...args: any[]) => any;
  resultat?: string;
  cancelEditPeriode: (...args: any[]) => any;
  bekreftet: boolean;
  readOnly: boolean;
  dokumentertePerioder?: { fom: string; tom: string }[];
  fraDato: string;
  tilDato: string;
  formSyncErrors?: { dokumentertePerioder: any[] };
  behandlingStatusKode?: string;
  erHeimevern?: boolean;
  erNavTiltak?: boolean;
}

interface MappedOwnProps {
  formSyncErrors?: { dokumentertePerioder: any[] };
  dokumentertePerioder?: { fom: string; tom: string }[];
  resultat?: string;
  bekreftet: boolean;
  updated: boolean;
  onSubmit: (values: FormValues) => any;
  validate: (values: FormValues) => any;
  initialValues: FormValues;
  form: string;
}

// TODO slå sammen ForeldreAnsvarPeriode, SykdomOgSkadePeriode og InnleggelsePeriode

export const SykdomOgSkadePeriode: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  resultat,
  fraDato,
  tilDato,
  id,
  cancelEditPeriode,
  updated,
  bekreftet,
  readOnly,
  dokumentertePerioder,
  formSyncErrors,
  behandlingStatusKode,
  erHeimevern,
  erNavTiltak,
  ...formProps
}) => {
  let errorHeight = 0;

  if (
    Object.keys(formSyncErrors).length !== 0
    && formProps.submitFailed
    && (formSyncErrors.dokumentertePerioder.length - 1) > 0) {
    formSyncErrors.dokumentertePerioder.forEach((error) => {
      errorHeight += error !== undefined && error.fom[0].id === 'ValidationMessage.NotEmpty' ? 30 : 52;
    });
  }

  const isEdited = resultat === uttakPeriodeVurdering.PERIODE_OK_ENDRET
    && readOnly && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK;

  // const periodeOkDisabled = !bekreftet;

  const inlineheight = dokumentertePerioder
    && resultat === uttakPeriodeVurdering.PERIODE_OK
    && !readOnly
    ? (dokumentertePerioder.length * 58) + errorHeight + 170 : 'auto';

  const inlineStyle = {
    radioOption: {
      height: inlineheight,
    },
  };
  return (
    <FlexContainer wrap>
      {formProps.error}
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
            validate={[required]}
            readOnly={readOnly}
            isEdited={isEdited}
          >
            <RadioOption
              label={{ id: finnTextTilRadio1(erHeimevern, erNavTiltak) }}
              value={uttakPeriodeVurdering.PERIODE_OK}
              style={inlineStyle.radioOption}
            />
            <RadioOption
              label={{ id: finnTextTilRadio2(erHeimevern, erNavTiltak) }}
              value={uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES}
            />
          </RadioGroupField>
          {resultat === uttakPeriodeVurdering.PERIODE_OK && !readOnly && (
            <div className={styles.addPeriodeSykdom}>
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
              label={{ id: 'UttakInfoPanel.Vurdering' }}
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

SykdomOgSkadePeriode.defaultProps = {
  dokumentertePerioder: [],
  formSyncErrors: { dokumentertePerioder: [] },
  erHeimevern: false,
  erNavTiltak: false,
};

const validateSykdomOgSkadeForm = (
  values: FormValues,
  familieHendelse: FamilieHendelse,
  overforingArsak: Kodeverk,
  vilkarForSykdomOppfyltExists: boolean,
) => {
  const errors = {
    dokumentertePerioder: [],
  };
  const morForSykVedFodsel = familieHendelse.morForSykVedFodsel
    ? [uttakPeriodeVurdering.PERIODE_OK, uttakPeriodeVurdering.PERIODE_OK_ENDRET]
    : [uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES];

  if (overforingArsak && overforingArsak.kode === overforingArsakCodes.SYKDOM_ANNEN_FORELDER
    && !morForSykVedFodsel.includes(values.resultat)
    && vilkarForSykdomOppfyltExists) {
    return {
      resultat: values.resultat ? [{ id: 'UttakInfoPanel.IkkeDokumentertSykdom' }] : [{ id: 'UttakInfoPanel.DokumentertSykdom' }],
    };
  }

  if (values.dokumentertePerioder) {
    values.dokumentertePerioder.forEach((periode, index) => {
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
(begrunnelse, initialResultat, initialDokumentertePerioder, id): FormValues => ({
  begrunnelse,
  id,
  resultat: initialResultat ? initialResultat.kode : undefined,
  dokumentertePerioder: initialDokumentertePerioder !== undefined ? initialDokumentertePerioder : [],
}));

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: PureOwnProps) => {
  const {
    behandlingId,
    behandlingVersjon,
    gjeldendeFamiliehendelse,
    vilkarForSykdomExists,
  } = initialOwnProps;
  const formName = `sykdomOgSkadeForm-${initialOwnProps.id}`;
  const familiehendelse = gjeldendeFamiliehendelse;
  const validate = (values: FormValues) => validateSykdomOgSkadeForm(values, familiehendelse, initialOwnProps.overforingArsak, vilkarForSykdomExists);
  const onSubmit = (values: FormValues) => initialOwnProps.updatePeriode((values));

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    onSubmit,
    validate,
    formSyncErrors: getBehandlingFormSyncErrors(formName, behandlingId, behandlingVersjon)(state),
    dokumentertePerioder: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'dokumentertePerioder'),
    resultat: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'resultat'),
    initialValues: buildInitialValues(state, ownProps),
    updated: behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.updated`),
    bekreftet: behandlingFormValueSelector('UttakFaktaForm', behandlingId, behandlingVersjon)(state, `${ownProps.fieldId}.bekreftet`),
    form: formName,
  });
};

// @ts-ignore Dynamisk navn på form
export default connect(mapStateToPropsFactory)(behandlingForm({
  enableReinitialize: true,
})(SykdomOgSkadePeriode));
