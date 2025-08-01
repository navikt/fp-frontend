import { type ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import { ForeldreType, OverforingArsak } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FormValuesOverforing, PermisjonFormValues } from '../../types';
import { RenderOverforingAvKvoterFieldArray } from './RenderOverforingAvKvoterFieldArray';

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
  arsaker: KodeverkMedNavn<'OverføringÅrsak'>[],
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

  const overtaKvoteReasons = alleKodeverk['OverføringÅrsak'];
  const selectValues = mapArsaker(overtaKvoteReasons, foreldreType === ForeldreType.MOR, erEndringssøknad, intl);

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
      {skalOvertaKvote && <RenderOverforingAvKvoterFieldArray selectValues={selectValues} readOnly={readOnly} />}
    </VStack>
  );
};

PermisjonOverforingAvKvoterPanel.initialValues = (): FormValuesOverforing => ({
  skalOvertaKvote: false,
  overforingsperioder: [],
});
