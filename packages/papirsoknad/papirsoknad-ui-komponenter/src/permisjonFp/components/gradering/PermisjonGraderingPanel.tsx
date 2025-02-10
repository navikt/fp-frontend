import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';

import { Arbeidskategori, KodeverkType } from '@navikt/fp-kodeverk';
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
  const graderingKvoter = alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE];
  const arbeidskategoriTyper = alleKodeverk[KodeverkType.ARBEIDSKATEGORI];

  const { watch } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValuesGradering }>();
  const skalGradere = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;

  return (
    <VStack gap="2">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.Gradering.Title" />
      </Label>
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`}
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
        erArbeidstaker: periode.arbeidskategoriType === Arbeidskategori.ARBEIDSTAKER,
        erFrilanser: periode.arbeidskategoriType === Arbeidskategori.FRILANSER,
        erSelvstNæringsdrivende: periode.arbeidskategoriType === Arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE,
      };
    }
    return periode;
  });
};

PermisjonGraderingPanel.initialValues = (): FormValuesGradering => ({
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]: [],
  skalGradere: false,
});
