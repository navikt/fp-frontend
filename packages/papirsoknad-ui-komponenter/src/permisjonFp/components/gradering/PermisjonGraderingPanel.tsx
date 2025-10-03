import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk } from '@navikt/fp-types';

import { GRADERING_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FormValuesGradering } from '../../types';
import { RenderGraderingPeriodeFieldArray } from './RenderGraderingPeriodeFieldArray';

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * PermisjonGraderingPanel
 *
 * Viser panel for gradering
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent
 */
export const PermisjonGraderingPanel = ({ readOnly, alleKodeverk }: Props) => {
  const graderingKvoter = alleKodeverk['UttakPeriodeType'];
  const arbeidskategoriTyper = alleKodeverk['Arbeidskategori'];

  const { watch, control } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValuesGradering }>();
  const skalGradere = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;

  return (
    <VStack gap="space-8">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.Gradering.Title" />
      </Label>
      <RhfCheckbox
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`}
        control={control}
        readOnly={readOnly}
        label={<FormattedMessage id="Registrering.Permisjon.Gradering.GraderUttaket" />}
      />
      {skalGradere && (
        <RenderGraderingPeriodeFieldArray
          graderingKvoter={graderingKvoter}
          arbeidskategoriTyper={arbeidskategoriTyper}
          readOnly={readOnly}
        />
      )}
    </VStack>
  );
};

PermisjonGraderingPanel.transformValues = (formValues: FormValuesGradering) => {
  const perioder = formValues[GRADERING_PERIODE_FIELD_ARRAY_NAME];
  if (!perioder) {
    return [];
  }
  return perioder.map(periode => {
    if (periode.arbeidskategoriType) {
      return {
        ...periode,
        erArbeidstaker: periode.arbeidskategoriType === 'ARBEIDSTAKER',
        erFrilanser: periode.arbeidskategoriType === 'FRILANSER',
        erSelvstNæringsdrivende: periode.arbeidskategoriType === 'SELVSTENDIG_NÆRINGSDRIVENDE',
      };
    }
    return periode;
  });
};

PermisjonGraderingPanel.initialValues = (): FormValuesGradering => ({
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]: [],
  skalGradere: false,
});
