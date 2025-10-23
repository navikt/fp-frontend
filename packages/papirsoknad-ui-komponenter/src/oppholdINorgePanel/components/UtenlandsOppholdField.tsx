import React, { type ReactElement } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfFieldArray, RhfSelect } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  dateRangesNotOverlapping,
  hasValidDate,
  required,
} from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { KodeverkMedNavn } from '@navikt/fp-types';

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

const getOverlappingValidator = (getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>, name: Keys) => () => {
  const perioder = getValues(name);

  const periodeMap: string[][] = perioder
    .filter(
      (p): p is { periodeFom: string; periodeTom: string } =>
        typeof p.periodeFom === 'string' &&
        p.periodeFom !== '' &&
        typeof p.periodeTom === 'string' &&
        p.periodeTom !== '',
    )
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);

  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const countrySelectValues = (countryCodes: KodeverkMedNavn<'Landkoder'>[]): ReactElement[] =>
  countryCodes
    .filter(({ kode }) => kode !== 'NOR')
    .map(
      ({ kode, navn }): ReactElement => (
        <option value={kode} key={kode}>
          {navn}
        </option>
      ),
    );

const getValiderFørEllerEtter = (sjekkFør: boolean, fomVerdi?: string, tomVerdi?: string) => () => {
  if (!tomVerdi || !fomVerdi) {
    return null;
  }

  return sjekkFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
};

interface Props {
  erTidligereOpphold?: boolean;
  mottattDato?: string;
  countryCodes: KodeverkMedNavn<'Landkoder'>[];
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

  const land = countrySelectValues(countryCodes);

  return (
    <RhfFieldArray
      fields={fields}
      titleText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.AngiOpphold' })}
      addButtonText={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Add' })}
      emptyTemplate={defaultUtenlandsOpphold}
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, removeButton) => (
        <React.Fragment key={field.id}>
          <HStack gap="space-16" paddingBlock="2" align="end">
            <RhfSelect
              name={`${name}.${index}.land`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Country' })}
              hideLabel={index > 0}
              selectValues={land}
              readOnly={readOnly}
              validate={[required]}
            />

            <RhfDatepicker
              name={`${name}.${index}.periodeFom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeFom' })}
              hideLabel={index > 0}
              readOnly={readOnly}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(
                  true,
                  getValues(`${name}.${index}.periodeFom`),
                  getValues(`${name}.${index}.periodeTom`),
                ),
                () => {
                  const fomVerdi = getValues(`${name}.${index}.periodeFom`);
                  if (erTidligereOpphold) {
                    return dateBeforeOrEqual(dayjs().format(ISO_DATE_FORMAT))(fomVerdi);
                  }
                  return mottattDato ? dateAfterOrEqual(mottattDato)(fomVerdi) : undefined;
                },
                getOverlappingValidator(getValues, name),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />

            <RhfDatepicker
              name={`${name}.${index}.periodeTom`}
              control={control}
              label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.periodeTom' })}
              hideLabel={index > 0}
              readOnly={readOnly}
              validate={[
                required,
                hasValidDate,
                getValiderFørEllerEtter(
                  false,
                  getValues(`${name}.${index}.periodeFom`),
                  getValues(`${name}.${index}.periodeTom`),
                ),
                () => {
                  const tomVerdi = getValues(`${name}.${index}.periodeTom`);
                  if (erTidligereOpphold) {
                    return dateBeforeOrEqual(dayjs().format(ISO_DATE_FORMAT))(tomVerdi);
                  }
                  return mottattDato ? dateAfterOrEqual(mottattDato)(tomVerdi) : undefined;
                },
                getOverlappingValidator(getValues, name),
              ]}
              onChange={() => (isSubmitted ? trigger() : undefined)}
            />
            <div>{removeButton}</div>
          </HStack>
        </React.Fragment>
      )}
    </RhfFieldArray>
  );
};
