import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk, TidsromPermisjonDto } from '@navikt/fp-types';

import { OVERFØRING_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FormValuesOverforing, PermisjonFormValues } from '../../types';
import { RenderOverforingAvKvoterFieldArray } from './RenderOverforingAvKvoterFieldArray';

interface Props {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  søkerErMor: boolean;
  erEndringssøknad: boolean;
}

/**
 * PermisjonOverforingAvKvoterPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const PermisjonOverforingAvKvoterPanel = ({ søkerErMor, alleKodeverk, readOnly, erEndringssøknad }: Props) => {
  const { watch, control } = useFormContext<PermisjonFormValues>();
  const skalOvertaKvote = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;

  return (
    <VStack gap="space-8">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvoten" />
      </Label>
      <RhfCheckbox
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`}
        control={control}
        readOnly={readOnly}
        label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvote" />}
      />
      {skalOvertaKvote && (
        <RenderOverforingAvKvoterFieldArray
          søkerErMor={søkerErMor}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          erEndringssøknad={erEndringssøknad}
        />
      )}
    </VStack>
  );
};

PermisjonOverforingAvKvoterPanel.initialValues = (): FormValuesOverforing => ({
  skalOvertaKvote: false,
  overføringsperioder: [],
});

PermisjonOverforingAvKvoterPanel.transformValues = (
  values: FormValuesOverforing,
): Pick<TidsromPermisjonDto, 'overføringsperioder'> => ({
  [OVERFØRING_PERIODE_FIELD_ARRAY_NAME]: values.skalOvertaKvote ? values.overføringsperioder : undefined,
});
