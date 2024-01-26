import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { BodyShort, HStack } from '@navikt/ds-react';
import { SelectField, NumberField } from '@navikt/ft-form-hooks';
import {
  hasValidDecimal,
  hasValidInteger,
  maxLength,
  maxValue,
  minValue,
  notDash,
  required,
} from '@navikt/ft-form-validators';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';

import { uttakPeriodeType, uttakArbeidType as UttakArbeidType } from '@navikt/fp-kodeverk';
import { ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, PeriodeSoker, PeriodeSokerAktivitet } from '@navikt/fp-types';

import { UseFormGetValues, useFieldArray, useFormContext } from 'react-hook-form';
import uttakArbeidTypeTekstCodes from '../../utils/uttakArbeidTypeCodes';
import lagVisningsNavn from '../../utils/lagVisningsNavn';
import { UttakAktivitetType } from './UttakAktivitetType';

import styles from './uttakAktiviteterTabell.module.css';

const maxLength3 = maxLength(3);
const minValue0 = minValue(0);
const maxProsentValue100 = maxValue(100);

const HEADER_TEXT_CODES = [
  'RenderUttakTable.PeriodeData.Aktivitet',
  'RenderUttakTable.PeriodeData.Stonadskonto',
  'RenderUttakTable.PeriodeData.Trekk',
  'RenderUttakTable.PeriodeData.Andel',
  'RenderUttakTable.PeriodeData.Utbetalingsgrad',
];

export const finnArbeidsforholdNavnOgProsentArbeid = (
  aktivitet: PeriodeSokerAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
): { prosentArbeidText: string; arbeidsforhold: string } => {
  const { prosentArbeid, arbeidsgiverReferanse, eksternArbeidsforholdId, uttakArbeidType } = aktivitet;

  const prosentArbeidText = typeof prosentArbeid !== 'undefined' ? `${prosentArbeid}%` : '';
  let arbeidsforhold;
  if (uttakArbeidType && uttakArbeidType !== UttakArbeidType.ORDINÆRT_ARBEID) {
    arbeidsforhold = intl.formatMessage({ id: uttakArbeidTypeTekstCodes[uttakArbeidType] });
  }
  if (arbeidsgiverReferanse) {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
    arbeidsforhold = arbeidsgiverOpplysninger
      ? lagVisningsNavn(arbeidsgiverOpplysninger, eksternArbeidsforholdId)
      : arbeidsgiverReferanse;
  }
  return {
    prosentArbeidText,
    arbeidsforhold: arbeidsforhold || '',
  };
};

const sjekkOmUtbetalingsgradEr0OmAvslått =
  (intl: IntlShape, erOppfylt: boolean, utsettelseType?: string) =>
  (utbetalingsgrad: string): string | null => {
    const harUtsettelse = !erOppfylt && (!utsettelseType || utsettelseType === '-');
    if (harUtsettelse && parseFloat(utbetalingsgrad) > 0) {
      return intl.formatMessage({ id: 'RenderUttakTable.MerEnNullUtaksprosent' });
    }
    return null;
  };

const sjekkOmUtbetalingsgradMårVæreHøyereEnn0 =
  (
    intl: IntlShape,
    valgtPeriode: PeriodeSoker,
    samletUtbetalingsgradForAndreAktiviteter: number,
    erOppfylt?: boolean,
  ) =>
  (utbetalingsgrad: string): string | null => {
    const kontoIkkeSatt = !valgtPeriode.periodeType && valgtPeriode.aktiviteter[0].stønadskontoType === '-';
    const erUttak = valgtPeriode.utsettelseType === '-' && !kontoIkkeSatt;
    if (erUttak && erOppfylt && parseFloat(utbetalingsgrad) <= 0 && samletUtbetalingsgradForAndreAktiviteter === 0) {
      return intl.formatMessage({ id: 'ValidationMessage.HøyereEnn0NårInnvilgetUttak' });
    }
    return null;
  };

const sjekkOmUtbetalingsgradErHøyereEnnSamtidigUttaksprosent =
  (intl: IntlShape, getValues: UseFormGetValues<UttakAktivitetType>) =>
  (utbetalingsgrad: string): string | null => {
    const samtidigUttak = getValues('samtidigUttak');
    const samtidigUttaksprosent = getValues('samtidigUttaksprosent');
    if (samtidigUttak && samtidigUttaksprosent && samtidigUttaksprosent < utbetalingsgrad) {
      return intl.formatMessage({
        id: 'ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent',
      });
    }
    return null;
  };

const sjekkOmDetErTrektMinstEnDagNårUtbetalingsgradErMerEnn0 =
  (intl: IntlShape, getValues: UseFormGetValues<UttakAktivitetType>, index: number) =>
  (utbetalingsgrad: string): string | null => {
    const aktiviteter = getValues('aktiviteter');
    const aktivitet = aktiviteter[index];
    if (parseFloat(aktivitet.weeks) === 0 && parseFloat(aktivitet.days) === 0 && parseFloat(utbetalingsgrad) > 0) {
      return intl.formatMessage({
        id: 'ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage',
      });
    }
    return null;
  };

const GYLDIGE_UTTAK_PERIODER = [
  uttakPeriodeType.FELLESPERIODE,
  uttakPeriodeType.FEDREKVOTE,
  uttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  uttakPeriodeType.FORELDREPENGER,
  uttakPeriodeType.MODREKVOTE,
  uttakPeriodeType.UDEFINERT,
];

const lagPeriodeTypeOptions = (typer: KodeverkMedNavn[]): ReactElement[] =>
  typer
    .filter(({ kode }) => GYLDIGE_UTTAK_PERIODER.includes(kode))
    .map(({ kode, navn }) => (
      <option value={kode} key={kode}>
        {navn}
      </option>
    ));

const validerUkerOgDager = (getValues: UseFormGetValues<UttakAktivitetType>, index: number) => (value: string) => {
  const weeks = getValues(`aktiviteter.${index}.weeks`);
  const days = getValues(`aktiviteter.${index}.days`);
  const skalSjekke = parseFloat(weeks) !== 0 || parseFloat(days) !== 0;
  if (skalSjekke) {
    const requiredMessage = required(value);
    if (requiredMessage) {
      return requiredMessage;
    }
    const notDashMessage = notDash(value);
    if (notDashMessage) {
      return notDashMessage;
    }
  }
  return null;
};

const validerAtUkerEllerDagerErStørreEnn0NårUtsettelseOgOppfylt =
  (getValues: UseFormGetValues<UttakAktivitetType>, utsettelseType: string, intl: IntlShape) =>
  (ukerEllerDager: string) => {
    const harUtsettelsestype = utsettelseType && utsettelseType !== '-';
    return harUtsettelsestype && getValues('erOppfylt') && parseFloat(ukerEllerDager) > 0
      ? intl.formatMessage({ id: 'ValidationMessage.trekkdagerErMerEnnNullUtsettelse' })
      : null;
  };

interface OwnProps {
  periodeTyper: KodeverkMedNavn[];
  isReadOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktiviteter: PeriodeSokerAktivitet[];
  erOppfylt?: boolean;
  valgtPeriode: PeriodeSoker;
}

const UttakAktiviteterTabell: FunctionComponent<OwnProps> = ({
  periodeTyper,
  isReadOnly,
  arbeidsgiverOpplysningerPerId,
  aktiviteter,
  erOppfylt,
  valgtPeriode,
}) => {
  const intl = useIntl();

  const { control, getValues, watch } = useFormContext<UttakAktivitetType>();
  const { fields } = useFieldArray({
    control,
    name: 'aktiviteter',
  });

  const periodeTypeOptions = useMemo(() => lagPeriodeTypeOptions(periodeTyper), [periodeTyper]);

  const { utsettelseType } = valgtPeriode;

  const aktiviteterFraFormState = watch('aktiviteter');

  return (
    <div className={styles.tableOverflow}>
      {fields.length > 0 && (
        <Table headerTextCodes={HEADER_TEXT_CODES} noHover>
          {fields.map((field, index: number) => {
            const arbeidsforholdData = finnArbeidsforholdNavnOgProsentArbeid(
              aktiviteter[index],
              arbeidsgiverOpplysningerPerId,
              intl,
            );

            const samletUtbetalingsgradForAndreAktiviteter = aktiviteterFraFormState.reduce(
              (sum, aktivitet, i) => (i !== index ? sum + parseInt(aktivitet.utbetalingsgrad, 10) : sum),
              0,
            );

            return (
              <TableRow key={field.id}>
                <TableColumn>
                  <BodyShort size="small" className={styles.forsteKolWidth}>
                    {arbeidsforholdData.arbeidsforhold}
                  </BodyShort>
                </TableColumn>
                <TableColumn>
                  <div className={styles.selectStonad}>
                    <SelectField
                      name={`aktiviteter.${index}.stønadskontoType`}
                      selectValues={periodeTypeOptions}
                      hideLabel
                      label=""
                      readOnly={isReadOnly}
                      validate={[validerUkerOgDager(getValues, index)]}
                    />
                  </div>
                </TableColumn>
                <TableColumn>
                  <HStack gap="2" align="center">
                    <span className={styles.weekPosition}>
                      <NumberField
                        name={`aktiviteter.${index}.weeks`}
                        className={styles.numberWidth}
                        readOnly={isReadOnly}
                        validate={[
                          required,
                          hasValidInteger,
                          maxLength3,
                          validerAtUkerEllerDagerErStørreEnn0NårUtsettelseOgOppfylt(getValues, utsettelseType, intl),
                        ]}
                      />
                    </span>
                    {isReadOnly ? <div>/</div> : <div className={styles.verticalCharPlacementInTable}>/</div>}
                    <NumberField
                      name={`aktiviteter.${index}.days`}
                      className={styles.numberWidth}
                      readOnly={isReadOnly}
                      validate={[
                        required,
                        hasValidDecimal,
                        maxLength3,
                        validerAtUkerEllerDagerErStørreEnn0NårUtsettelseOgOppfylt(getValues, utsettelseType, intl),
                      ]}
                    />
                  </HStack>
                </TableColumn>
                <TableColumn>
                  <BodyShort size="small">{arbeidsforholdData.prosentArbeidText}</BodyShort>
                </TableColumn>
                <TableColumn>
                  <div className={styles.utbetalingsgrad}>
                    <NumberField
                      name={`aktiviteter.${index}.utbetalingsgrad`}
                      // @ts-ignore Fiks typen til utbetalingsgrad. Bør vera number
                      validate={[
                        required,
                        minValue0,
                        maxProsentValue100,
                        hasValidDecimal,
                        // @ts-ignore Fiks typen til utbetalingsgrad. Bør vera number
                        sjekkOmUtbetalingsgradMårVæreHøyereEnn0(
                          intl,
                          valgtPeriode,
                          samletUtbetalingsgradForAndreAktiviteter,
                          erOppfylt,
                        ),
                        // @ts-ignore Fiks typen til utbetalingsgrad. Bør vera number
                        sjekkOmUtbetalingsgradEr0OmAvslått(intl, erOppfylt, utsettelseType),
                        // @ts-ignore Fiks typen til utbetalingsgrad. Bør vera number
                        sjekkOmDetErTrektMinstEnDagNårUtbetalingsgradErMerEnn0(intl, getValues, index),
                        // @ts-ignore Fiks typen til utbetalingsgrad. Bør vera number
                        sjekkOmUtbetalingsgradErHøyereEnnSamtidigUttaksprosent(intl, getValues),
                        // @ts-ignore Fiks typen til utbetalingsgrad. Bør vera number
                        (utbetalingsgrad: string) => {
                          const harUtsettelsestype = utsettelseType && utsettelseType !== '-';
                          return harUtsettelsestype && getValues('erOppfylt') && parseFloat(utbetalingsgrad) > 0
                            ? intl.formatMessage({ id: 'ValidationMessage.utbetalingMerEnnNullUtsettelse' })
                            : null;
                        },
                      ]}
                      readOnly={isReadOnly}
                      forceTwoDecimalDigits
                    />
                  </div>
                </TableColumn>
              </TableRow>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default UttakAktiviteterTabell;
