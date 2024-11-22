import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext, UseFormGetValues } from 'react-hook-form';
import { ErrorMessage, Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk } from '@navikt/fp-types';

import { PermisjonFulltUttak } from './fulltUttak/PermisjonFulltUttak';
import { PermisjonUtsettelsePanel } from './utsettelse/PermisjonUtsettelsePanel';
import { PermisjonGraderingPanel } from './gradering/PermisjonGraderingPanel';
import { PermisjonOverforingAvKvoterPanel } from './overforeKvote/PermisjonOverforingAvKvoterPanel';
import { RenderPermisjonPeriodeFieldArray } from './fulltUttak/RenderPermisjonPeriodeFieldArray';
import { PermisjonOppholdPanel } from './opphold/PermisjonOppholdPanel';

import {
  GRADERING_PERIODE_FIELD_ARRAY_NAME,
  OPPHOLD_PERIODE_FIELD_ARRAY_NAME,
  OVERFORING_PERIODE_FIELD_ARRAY_NAME,
  PERMISJON_PERIODE_FIELD_ARRAY_NAME,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  UTSETTELSE_PERIODE_FIELD_ARRAY_NAME,
} from '../constants';
import { PermisjonFormValues } from '../types';

const getIsRequired = (getValues: UseFormGetValues<PermisjonFormValues>) => {
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

  const { setError, clearErrors, getValues, formState } = useFormContext<PermisjonFormValues>();

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
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="Registrering.Permisjon.Title" />
        </Heading>
        <PermisjonFulltUttak foreldreType={foreldreType} readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <PermisjonOverforingAvKvoterPanel
          readOnly={readOnly}
          foreldreType={foreldreType}
          alleKodeverk={alleKodeverk}
          erEndringssøknad={erEndringssøknad}
        />
        <PermisjonUtsettelsePanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <PermisjonGraderingPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <PermisjonOppholdPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        {formState.isSubmitted && formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX]?.notRegisteredInput?.message && (
          <ErrorMessage>
            {formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX]?.notRegisteredInput?.message}
          </ErrorMessage>
        )}
      </VStack>
    </BorderBox>
  );
};

PermisjonPanel.transformValues = (values: PermisjonFormValues) => {
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

  return { [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: newValues };
};

PermisjonPanel.initialValues = (): PermisjonFormValues => ({
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    ...PermisjonFulltUttak.initialValues(),
    ...PermisjonOverforingAvKvoterPanel.initialValues(),
    ...PermisjonUtsettelsePanel.initialValues(),
    ...PermisjonGraderingPanel.initialValues(),
    ...PermisjonOppholdPanel.initialValues(),
  },
});
