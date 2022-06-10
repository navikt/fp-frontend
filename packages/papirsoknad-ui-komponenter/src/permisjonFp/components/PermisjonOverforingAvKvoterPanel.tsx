import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';

import ForeldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import overforingArsak from '@fpsak-frontend/kodeverk/src/overforingArsak';

import RenderOverforingAvKvoterFieldArray, {
  FormValues as KvoterPerioderFormValues,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  OVERFORING_PERIODE_FIELD_ARRAY_NAME,
} from './RenderOverforingAvKvoterFieldArray';

const getText = (intl: IntlShape, kode: string, navn: string): string => {
  if (kode === overforingArsak.INSTITUSJONSOPPHOLD_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt' });
  }
  if (kode === overforingArsak.SYKDOM_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk' });
  }
  return navn;
};

const mapArsaker = (
  arsaker: KodeverkMedNavn[],
  sokerErMor: boolean,
  erEndringssøknad: boolean,
  intl: IntlShape,
): ReactElement[] => arsaker
  .filter(({ kode }) => erEndringssøknad || (kode !== overforingArsak.ALENEOMSORG && kode !== overforingArsak.IKKE_RETT_ANNEN_FORELDER))
  .map(({
    kode,
    navn,
  }) => (!sokerErMor
    ? <option value={kode} key={kode}>{getText(intl, kode, navn)}</option>
    : <option value={kode} key={kode}>{navn}</option>));

export type FormValues = {
  skalOvertaKvote: boolean;
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]: KvoterPerioderFormValues;
};

interface OwnProps {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  erEndringssøknad: boolean;
}

interface StaticFunctions {
  buildInitialValues?: () => any;
}

/**
 * PermisjonOverforingAvKvoterPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
const PermisjonOverforingAvKvoterPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  foreldreType,
  alleKodeverk,
  readOnly,
  erEndringssøknad,
}) => {
  const intl = useIntl();

  const overtaKvoteReasons = alleKodeverk[KodeverkType.OVERFOERING_AARSAK_TYPE];
  const selectValues = mapArsaker(overtaKvoteReasons, foreldreType === ForeldreType.MOR, erEndringssøknad, intl);

  const { watch } = formHooks.useFormContext<{[TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalOvertaKvote = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;

  return (
    <>
      <Element><FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvoten" /></Element>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`}
        label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvote" />}
      />
      {skalOvertaKvote && (
        <RenderOverforingAvKvoterFieldArray
          selectValues={selectValues}
          readOnly={readOnly}
        />
      )}
    </>
  );
};

PermisjonOverforingAvKvoterPanel.buildInitialValues = () => ({
  skalOvertaKvote: false,
  overforingsperioder: [{}],
});

export default PermisjonOverforingAvKvoterPanel;
