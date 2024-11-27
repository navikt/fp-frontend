import React, { useEffect } from 'react';
import { useFormContext,UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorMessage,Heading, Label } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { ForeldreType } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import { FormValues as FormValuesGradering,PermisjonGraderingPanel } from './PermisjonGraderingPanel';
import { FormValues as FormValuesOpphold,PermisjonOppholdPanel } from './PermisjonOppholdPanel';
import {
  FormValues as FormValuesOverforing,
  PermisjonOverforingAvKvoterPanel,
} from './PermisjonOverforingAvKvoterPanel';
import { FormValues as FormValuesUtsettelse,PermisjonUtsettelsePanel } from './PermisjonUtsettelsePanel';
import { GRADERING_PERIODE_FIELD_ARRAY_NAME } from './RenderGraderingPeriodeFieldArray';
import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME } from './RenderOppholdPeriodeFieldArray';
import { OVERFORING_PERIODE_FIELD_ARRAY_NAME } from './RenderOverforingAvKvoterFieldArray';
import {
  FormValues as FormValuesPermisjon,
  PERMISJON_PERIODE_FIELD_ARRAY_NAME,
  RenderPermisjonPeriodeFieldArray,
} from './RenderPermisjonPeriodeFieldArray';
import { UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from './RenderUtsettelsePeriodeFieldArray';

import styles from './permisjonPanel.module.css';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';

type VirtuellFeilType = {
  notRegisteredInput?: string;
};

type TidsromPermisjon = {
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
} & FormValuesUtsettelse &
  FormValuesOpphold &
  FormValuesOverforing &
  FormValuesGradering &
  VirtuellFeilType;

export type FormValues = {
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
};

const getIsRequired = (getValues: UseFormGetValues<FormValues>) => {
  const fulltUttak = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;
  const skalGradere = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;
  const skalUtsette = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;
  const skalOvertaKvote = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;
  return !fulltUttak && !skalGradere && !skalUtsette && !skalOvertaKvote;
};

interface Props {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

/**
 * PermisjonPanel
 *
 * Viser permisjonspanel for mor eller far/medmor
 */
export const PermisjonPanel = ({ foreldreType, readOnly, alleKodeverk, erEndringssøknad }: Props) => {
  const intl = useIntl();

  const { watch, setError, clearErrors, getValues, formState } = useFormContext<FormValues>();
  const fulltUttak = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;

  const isError = getIsRequired(getValues);
  useEffect(() => {
    if (isError) {
      setError(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'PermisjonPanel.MinstEnPeriodeRequired' }),
      });
    }
    if (!isError) {
      clearErrors(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [isError]);

  return (
    <BorderBox>
      <div className={styles.flexContainer}>
        <Heading size="small">
          <FormattedMessage id="Registrering.Permisjon.Title" />
        </Heading>
        <VerticalSpacer sixteenPx />
        <VerticalSpacer eightPx />
        <Label size="small">
          <FormattedMessage id="Registrering.Permisjon.FulltUttak" />
        </Label>
        <VerticalSpacer eightPx />
        <CheckboxField
          readOnly={readOnly}
          name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`}
          label={<FormattedMessage id="Registrering.Permisjon.FulltUttak" />}
        />
        {fulltUttak && (
          <RenderPermisjonPeriodeFieldArray
            sokerErMor={foreldreType === ForeldreType.MOR}
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
        )}
        <VerticalSpacer twentyPx />
        <PermisjonOverforingAvKvoterPanel
          readOnly={readOnly}
          foreldreType={foreldreType}
          alleKodeverk={alleKodeverk}
          erEndringssøknad={erEndringssøknad}
        />
        <VerticalSpacer twentyPx />
        <PermisjonUtsettelsePanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <VerticalSpacer twentyPx />
        <PermisjonGraderingPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <VerticalSpacer twentyPx />
        <PermisjonOppholdPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        {formState.isSubmitted && formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX]?.notRegisteredInput?.message && (
          <ErrorMessage>
            {formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX]?.notRegisteredInput?.message}
          </ErrorMessage>
        )}
      </div>
    </BorderBox>
  );
};

PermisjonPanel.transformValues = (values: FormValues) => {
  const permisjonValues = values[TIDSROM_PERMISJON_FORM_NAME_PREFIX]!;
  const newValues = permisjonValues;
  const permisjonsdata = permisjonValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME];
  if (values.tidsromPermisjon?.fulltUttak && permisjonsdata) {
    newValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME] = RenderPermisjonPeriodeFieldArray.transformValues(permisjonsdata);
  }
  const graderingdata = permisjonValues[GRADERING_PERIODE_FIELD_ARRAY_NAME];
  if (values.tidsromPermisjon?.skalGradere && graderingdata) {
    newValues[GRADERING_PERIODE_FIELD_ARRAY_NAME] = PermisjonGraderingPanel.transformValues(permisjonValues);
  }

  if (!values.tidsromPermisjon?.fulltUttak) {
    newValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon?.skalGradere) {
    newValues[GRADERING_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon?.skalUtsette) {
    newValues[UTSETTELSE_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon?.skalOvertaKvote) {
    newValues[OVERFORING_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon?.skalHaOpphold) {
    newValues[OPPHOLD_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }

  return newValues;
};

PermisjonPanel.buildInitialValues = (): any => ({
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    ...PermisjonUtsettelsePanel.buildInitialValues(),
    ...PermisjonGraderingPanel.buildInitialValues(),
    ...PermisjonOverforingAvKvoterPanel.buildInitialValues(),
    ...PermisjonOppholdPanel.buildInitialValues(),
    [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: [{}],
    fulltUttak: false,
  },
});
