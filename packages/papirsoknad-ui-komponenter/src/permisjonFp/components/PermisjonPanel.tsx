import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorMessage, Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, ForeldreType } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import {
  GRADERING_PERIODE_FIELD_ARRAY_NAME,
  OPPHOLD_PERIODE_FIELD_ARRAY_NAME,
  OVERFØRING_PERIODE_FIELD_ARRAY_NAME,
  PERMISJON_PERIODE_FIELD_ARRAY_NAME,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  UTSETTELSE_PERIODE_FIELD_ARRAY_NAME,
} from '../constants';
import type { PermisjonFormValues } from '../types';
import { PermisjonFulltUttak } from './fulltUttak/PermisjonFulltUttak';
import { RenderPermisjonPeriodeFieldArray } from './fulltUttak/RenderPermisjonPeriodeFieldArray';
import { PermisjonGraderingPanel } from './gradering/PermisjonGraderingPanel';
import { PermisjonOppholdPanel } from './opphold/PermisjonOppholdPanel';
import { PermisjonOverforingAvKvoterPanel } from './overforeKvote/PermisjonOverforingAvKvoterPanel';
import { harOverlappMellomPeriodetypar, hentUtfylteTidsrom } from './permisjonOverlappValidering';
import { PermisjonUtsettelsePanel } from './utsettelse/PermisjonUtsettelsePanel';

interface Props {
  foreldreType: ForeldreType;
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

  const { setError, clearErrors, formState, watch } = useFormContext<PermisjonFormValues>();
  const [fulltUttak, skalGradere, skalUtsette, skalOvertaKvote, skalHaOpphold] = watch([
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`,
  ]);
  const [permisjonsPerioder, graderingPerioder, utsettelsePerioder, overføringsPerioder, oppholdPerioder] = watch([
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${PERMISJON_PERIODE_FIELD_ARRAY_NAME}`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${GRADERING_PERIODE_FIELD_ARRAY_NAME}`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OVERFØRING_PERIODE_FIELD_ARRAY_NAME}`,
    `${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.${OPPHOLD_PERIODE_FIELD_ARRAY_NAME}`,
  ]);

  useEffect(() => {
    const isError = !fulltUttak && !skalGradere && !skalUtsette && !skalOvertaKvote;
    if (isError) {
      setError(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'PermisjonPanel.MinstEnPeriodeRequired' }),
      });
    } else {
      clearErrors(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [fulltUttak, skalGradere, skalUtsette, skalOvertaKvote, setError, clearErrors, intl]);

  // Perioder frå kvar periodetype skal ikkje overlappe i tid med perioder frå andre periodetypar,
  // sjølv om dei ikkje overlappar med andre perioder innanfor same periodetype.
  const periodeGrupper = [
    fulltUttak ? hentUtfylteTidsrom(permisjonsPerioder) : [],
    skalGradere ? hentUtfylteTidsrom(graderingPerioder) : [],
    skalUtsette ? hentUtfylteTidsrom(utsettelsePerioder) : [],
    skalOvertaKvote ? hentUtfylteTidsrom(overføringsPerioder) : [],
    skalHaOpphold ? hentUtfylteTidsrom(oppholdPerioder) : [],
  ].filter(periodeGruppe => periodeGruppe.length > 0);
  const harOverlapp = periodeGrupper.length > 1 && harOverlappMellomPeriodetypar(periodeGrupper);

  // Vi held RHF-feilstatus i synk med den utrekna verdien slik at submit blir blokkert.
  // setError/clearErrors kan ikkje kallast under render, difor ligg synkinga i ein effekt med primitiv avhengigheit.
  useEffect(() => {
    if (harOverlapp) {
      setError(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.periodeOverlapper`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'PermisjonPanel.DateRangesOverlappingPeriodTypes' }),
      });
    } else {
      clearErrors(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.periodeOverlapper`);
    }
  }, [harOverlapp, setError, clearErrors, intl]);

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
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
          <ErrorMessage>{formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX].notRegisteredInput.message}</ErrorMessage>
        )}
        {formState.isSubmitted && formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX]?.periodeOverlapper?.message && (
          <ErrorMessage>{formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX].periodeOverlapper.message}</ErrorMessage>
        )}
      </VStack>
    </BorderBox>
  );
};

PermisjonPanel.transformValues = (values: PermisjonFormValues) => {
  const permisjonValues = notEmpty(values[TIDSROM_PERMISJON_FORM_NAME_PREFIX]);
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
    newValues[OVERFØRING_PERIODE_FIELD_ARRAY_NAME] = undefined;
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
