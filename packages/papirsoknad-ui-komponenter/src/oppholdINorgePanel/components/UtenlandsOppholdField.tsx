import React, { ReactElement, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Datepicker, SelectField, PeriodFieldArray } from '@navikt/ft-form-hooks';
import { Landkode } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/fp-types';

import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';
import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { HStack } from '@navikt/ds-react';

const defaultUtenlandsOpphold = {
  land: undefined,
  periodeFom: undefined,
  periodeTom: undefined,
};

export type FormValues = {
  land?: string;
  periodeFom?: string;
  periodeTom?: string;
};

type Keys = 'tidligereOppholdUtenlands' | 'fremtidigeOppholdUtenlands';

const getValue = (
  getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>,
  fieldName: string,
  // @ts-ignore
): string => getValues(fieldName);

const getOverlappingValidator = (getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>, name: Keys) => () => {
  const perioder = getValues(name);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom && periodeFom !== '' && periodeTom && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  // @ts-ignore Fiks
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] =>
  countryCodes
    .filter(({ kode }) => kode !== Landkode.NORGE)
    .map(
      ({ kode, navn }): ReactElement => (
        <option value={kode} key={kode}>
          {navn}
        </option>
      ),
    );

const getValiderFørEllerEtter =
  (getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>, name: string, index: number, sjekkFør: boolean) =>
  () => {
    const fomVerdi = getValue(getValues, `${name}.${index}.periodeFom`);
    const tomVerdi = getValue(getValues, `${name}.${index}.periodeTom`);

    if (!tomVerdi || !fomVerdi) {
      return null;
    }

    return sjekkFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
  };

interface Props {
  erTidligereOpphold?: boolean;
  mottattDato?: string;
  countryCodes: KodeverkMedNavn[];
  readOnly: boolean;
}

/**
 * UtenlandsOppholdField
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
 * som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const UtenlandsOppholdField = ({ erTidligereOpphold = false, mottattDato, readOnly, countryCodes }: Props) => {
  const intl = useIntl();

  const name = erTidligereOpphold ? 'tidligereOppholdUtenlands' : 'fremtidigeOppholdUtenlands';

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = useFormContext<{ [K in Keys]: FormValues[] }>();
  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });

  const land = useMemo(() => countrySelectValues(countryCodes), [countryCodes]);

  return (
    <PeriodFieldArray<FormValues>
      fields={fields}
      titleText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.AngiOpphold' })}
      bodyText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Add' })}
      emptyPeriodTemplate={defaultUtenlandsOpphold}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => (
        <React.Fragment key={field.id}>
          <HStack key={field.id} gap="4" paddingBlock="2">
            <SelectField
              name={`${name}.${index}.land`}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Country' })}
              selectValues={land}
              readOnly={readOnly}
              validate={[required]}
            />

            <Datepicker
              name={`${name}.${index}.periodeFom`}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeFom' })}
              isReadOnly={readOnly}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, name, index, true),
                () => {
                  const fomVerdi = getValue(getValues, `${name}.${index}.periodeFom`);
                  if (erTidligereOpphold) {
                    return dateBeforeOrEqual(dayjs().format(ISO_DATE_FORMAT))(fomVerdi);
                  }
                  return mottattDato ? dateAfterOrEqual(mottattDato)(fomVerdi) : undefined;
                },
                getOverlappingValidator(getValues, name),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <Datepicker
              name={`${name}.${index}.periodeTom`}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeTom' })}
              isReadOnly={readOnly}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(getValues, name, index, false),
                () => {
                  const tomVerdi = getValue(getValues, `${name}.${index}.periodeTom`);
                  if (erTidligereOpphold) {
                    return dateBeforeOrEqual(dayjs().format(ISO_DATE_FORMAT))(tomVerdi);
                  }
                  return mottattDato ? dateAfterOrEqual(mottattDato)(tomVerdi) : undefined;
                },
                getOverlappingValidator(getValues, name),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            {getRemoveButton && <div>{getRemoveButton()}</div>}
          </HStack>
        </React.Fragment>
      )}
    </PeriodFieldArray>
  );
};
