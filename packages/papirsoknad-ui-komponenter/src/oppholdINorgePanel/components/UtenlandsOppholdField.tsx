import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import classnames from 'classnames/bind';
import { useIntl } from 'react-intl';
import {
  formHooks, Datepicker, SelectField, PeriodFieldArray,
} from '@navikt/ft-form-hooks';
import { landkoder as Landkode } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn } from '@navikt/ft-types';

import {
  dateAfterOrEqual, dateBeforeOrEqual, dateRangesNotOverlapping, hasValidDate, required,
} from '@navikt/ft-form-validators';
import { UseFormGetValues } from 'react-hook-form';
import moment from 'moment';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  AvsnittSkiller, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import styles from './utenlandsOppholdField.module.css';

const classNames = classnames.bind(styles);

const defaultUtenlandsOpphold = {
  land: '',
  periodeFom: '',
  periodeTom: '',
};

export type FormValues = {
  land?: string;
  periodeFom: string;
  periodeTom: string;
};

type Keys = 'tidligereOppholdUtenlands' | 'fremtidigeOppholdUtenlands';

const getValue = (
  getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>,
  fieldName: string,
// @ts-ignore
): string => getValues(fieldName);

const getOverlappingValidator = (
  getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>,
  name: Keys,
) => () => {
  const perioder = getValues(name);
  const periodeMap = perioder
    .filter(({ periodeFom, periodeTom }) => periodeFom && periodeFom !== '' && periodeTom && periodeTom !== '')
    .map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]);
  return periodeMap.length > 0 ? dateRangesNotOverlapping(periodeMap) : undefined;
};

const countrySelectValues = (countryCodes: KodeverkMedNavn[]): ReactElement[] => countryCodes
  .filter(({ kode }) => kode !== Landkode.NORGE)
  .map(({ kode, navn }): ReactElement => <option value={kode} key={kode}>{navn}</option>);

const getValiderFørEllerEtter = (
  getValues: UseFormGetValues<{ [K in Keys]: FormValues[] }>,
  name: string,
  index: number,
  sjekkFør: boolean,
) => () => {
  const fomVerdi = getValue(getValues, `${name}.${index}.periodeFom`);
  const tomVerdi = getValue(getValues, `${name}.${index}.periodeTom`);

  if (!tomVerdi || !fomVerdi) {
    return null;
  }

  return sjekkFør ? dateBeforeOrEqual(tomVerdi)(fomVerdi) : dateAfterOrEqual(fomVerdi)(tomVerdi);
};

interface OwnProps {
  erTidligereOpphold: boolean;
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
const UtenlandsOppholdField: FunctionComponent<OwnProps> = ({
  erTidligereOpphold,
  mottattDato,
  readOnly,
  countryCodes,
}) => {
  const intl = useIntl();

  const name = erTidligereOpphold ? 'tidligereOppholdUtenlands' : 'fremtidigeOppholdUtenlands';

  const {
    control,
    getValues,
    trigger,
    formState: { isSubmitted },
  } = formHooks.useFormContext<{ [K in Keys]: FormValues[] }>();
  const { fields, remove, append } = formHooks.useFieldArray({
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
      createAddButtonInsteadOfImageLink
      readOnly={readOnly}
      remove={remove}
      append={append}
    >
      {(field, index, getRemoveButton) => (
        <React.Fragment key={field.id}>
          {index > 0 && (
            <>
              <AvsnittSkiller />
              <VerticalSpacer sixteenPx />
            </>
          )}
          <SelectField
            name={`${name}.${index}.land`}
            label={intl.formatMessage({ id: 'Registrering.RegistreringOpphold.Country' })}
            selectValues={land}
            className={styles.selectBredde}
            readOnly={readOnly}
            validate={[required]}
          />
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow className={classNames({ datesRowWithRemoveButton: index > 0 })}>
              <FlexColumn>
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
                        return dateBeforeOrEqual(moment().format(ISO_DATE_FORMAT))(fomVerdi);
                      }
                      return mottattDato ? dateAfterOrEqual(mottattDato)(fomVerdi) : undefined;
                    },
                    getOverlappingValidator(getValues, name),
                  ]}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </FlexColumn>
              <FlexColumn>
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
                        return dateBeforeOrEqual(moment().format(ISO_DATE_FORMAT))(tomVerdi);
                      }
                      return mottattDato ? dateAfterOrEqual(mottattDato)(tomVerdi) : undefined;
                    },
                    getOverlappingValidator(getValues, name),
                  ]}
                  onChange={() => (isSubmitted ? trigger() : undefined)}
                />
              </FlexColumn>
              <FlexColumn>
                {getRemoveButton()}
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
          <VerticalSpacer sixteenPx />
        </React.Fragment>
      )}
    </PeriodFieldArray>
  );
};

export default UtenlandsOppholdField;
