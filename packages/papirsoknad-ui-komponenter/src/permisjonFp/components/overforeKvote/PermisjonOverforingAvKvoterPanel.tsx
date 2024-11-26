import React, { ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { ForeldreType, KodeverkType, OverforingArsak } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { useFormContext } from 'react-hook-form';
import { RenderOverforingAvKvoterFieldArray } from './RenderOverforingAvKvoterFieldArray';
import { FormValuesOverforing, PermisjonFormValues } from '../../types';
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';

const getText = (intl: IntlShape, kode: string, navn: string): string => {
  if (kode === OverforingArsak.INSTITUSJONSOPPHOLD_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt' });
  }
  if (kode === OverforingArsak.SYKDOM_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk' });
  }
  return navn;
};

const mapArsaker = (
  arsaker: KodeverkMedNavn[],
  sokerErMor: boolean,
  erEndringssøknad: boolean,
  intl: IntlShape,
): ReactElement[] =>
  arsaker
    .filter(
      ({ kode }) =>
        erEndringssøknad || (kode !== OverforingArsak.ALENEOMSORG && kode !== OverforingArsak.IKKE_RETT_ANNEN_FORELDER),
    )
    .map(({ kode, navn }) =>
      !sokerErMor ? (
        <option value={kode} key={kode}>
          {getText(intl, kode, navn)}
        </option>
      ) : (
        <option value={kode} key={kode}>
          {navn}
        </option>
      ),
    );

interface Props {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

/**
 * PermisjonOverforingAvKvoterPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const PermisjonOverforingAvKvoterPanel = ({ foreldreType, alleKodeverk, readOnly, erEndringssøknad }: Props) => {
  const intl = useIntl();

  const overtaKvoteReasons = alleKodeverk[KodeverkType.OVERFOERING_AARSAK_TYPE];
  const selectValues = mapArsaker(overtaKvoteReasons, foreldreType === ForeldreType.MOR, erEndringssøknad, intl);

  const { watch } = useFormContext<PermisjonFormValues>();
  const skalOvertaKvote = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;

  return (
    <VStack gap="2">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvoten" />
      </Label>
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`}
        label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvote" />}
      />
      {skalOvertaKvote && <RenderOverforingAvKvoterFieldArray selectValues={selectValues} readOnly={readOnly} />}
    </VStack>
  );
};

PermisjonOverforingAvKvoterPanel.initialValues = (): FormValuesOverforing => ({
  skalOvertaKvote: false,
  overforingsperioder: [],
});
