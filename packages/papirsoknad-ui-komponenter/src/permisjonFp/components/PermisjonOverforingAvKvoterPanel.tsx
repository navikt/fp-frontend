import React, { ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { KodeverkType, OverforingArsak, ForeldreType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

import { useFormContext } from 'react-hook-form';
import {
  RenderOverforingAvKvoterFieldArray,
  FormValues as KvoterPerioderFormValues,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  OVERFORING_PERIODE_FIELD_ARRAY_NAME,
} from './RenderOverforingAvKvoterFieldArray';

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

export type FormValues = {
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: KvoterPerioderFormValues;
};

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

  const { watch } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalOvertaKvote = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;

  return (
    <>
      <Label size="small">
        <FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvoten" />
      </Label>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`}
        label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvote" />}
      />
      {skalOvertaKvote && <RenderOverforingAvKvoterFieldArray selectValues={selectValues} readOnly={readOnly} />}
    </>
  );
};

PermisjonOverforingAvKvoterPanel.buildInitialValues = () => ({
  skalOvertaKvote: false,
  overforingsperioder: [{}],
});
