import { type ReactElement } from 'react';
import { useFieldArray, useFormContext, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, HStack, Table } from '@navikt/ds-react';
import { RhfNumericField, RhfSelect } from '@navikt/ft-form-hooks';
import {
  hasValidDecimal,
  hasValidInteger,
  maxLength,
  maxValue,
  minValue,
  notDash,
  required,
} from '@navikt/ft-form-validators';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import { UttakArbeidType, UttakPeriodeType } from '@navikt/fp-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  KodeverkMedNavn,
  PeriodeSoker,
  PeriodeSokerAktivitet,
} from '@navikt/fp-types';

import { uttakArbeidTypeTekstCodes } from '../../utils/uttakArbeidTypeCodes';
import type { UttakAktivitetType } from './UttakAktivitetType';

import styles from './uttakAktiviteterTabell.module.css';

const maxLength3 = maxLength(3);
const minValue0 = minValue(0);
const maxProsentValue100 = maxValue(100);

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
      ? formaterArbeidsgiver(arbeidsgiverOpplysninger, eksternArbeidsforholdId)
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
  (intl: IntlShape, valgtPeriode: PeriodeSoker, samletUtbetalingsgradForAndreAktiviteter: number, erOppfylt: boolean) =>
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
  UttakPeriodeType.FELLESPERIODE,
  UttakPeriodeType.FEDREKVOTE,
  UttakPeriodeType.FORELDREPENGER_FOR_FODSEL,
  UttakPeriodeType.FORELDREPENGER,
  UttakPeriodeType.MODREKVOTE,
  UttakPeriodeType.UDEFINERT,
];

const lagPeriodeTypeOptions = (typer: KodeverkMedNavn<'UttakPeriodeType'>[]): ReactElement[] =>
  typer
    .filter(({ kode }) => GYLDIGE_UTTAK_PERIODER.some(p => p === kode))
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

interface Props {
  periodeTyper: KodeverkMedNavn<'UttakPeriodeType'>[];
  isReadOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktiviteter: PeriodeSokerAktivitet[];
  erOppfylt: boolean;
  valgtPeriode: PeriodeSoker;
}

export const UttakAktiviteterTabell = ({
  periodeTyper,
  isReadOnly,
  arbeidsgiverOpplysningerPerId,
  aktiviteter,
  erOppfylt,
  valgtPeriode,
}: Props) => {
  const intl = useIntl();

  const { control, getValues, watch } = useFormContext<UttakAktivitetType>();
  const { fields } = useFieldArray({
    control,
    name: 'aktiviteter',
  });

  const periodeTypeOptions = lagPeriodeTypeOptions(periodeTyper);

  const { utsettelseType } = valgtPeriode;

  const aktiviteterFraFormState = watch('aktiviteter');

  return (
    <div className={styles.tableOverflow}>
      {fields.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="RenderUttakTable.PeriodeData.Aktivitet" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="RenderUttakTable.PeriodeData.Stonadskonto" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="RenderUttakTable.PeriodeData.Trekk" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="RenderUttakTable.PeriodeData.Andel" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="RenderUttakTable.PeriodeData.Utbetalingsgrad" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
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
                <Table.Row key={field.id}>
                  <Table.DataCell>
                    <BodyShort size="small" className={styles.forsteKolWidth}>
                      {arbeidsforholdData.arbeidsforhold}
                    </BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <div className={styles.selectStonad}>
                      <RhfSelect
                        name={`aktiviteter.${index}.stønadskontoType`}
                        control={control}
                        selectValues={periodeTypeOptions}
                        hideLabel
                        label=""
                        readOnly={isReadOnly}
                        validate={[validerUkerOgDager(getValues, index)]}
                      />
                    </div>
                  </Table.DataCell>
                  <Table.DataCell>
                    <HStack gap="space-8" align="center">
                      <span className={styles.weekPosition}>
                        <RhfNumericField
                          name={`aktiviteter.${index}.weeks`}
                          control={control}
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
                      <RhfNumericField
                        name={`aktiviteter.${index}.days`}
                        control={control}
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
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">{arbeidsforholdData.prosentArbeidText}</BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <div className={styles.utbetalingsgrad}>
                      <RhfNumericField
                        name={`aktiviteter.${index}.utbetalingsgrad`}
                        control={control}
                        validate={[
                          required,
                          minValue0,
                          maxProsentValue100,
                          hasValidDecimal,
                          sjekkOmUtbetalingsgradMårVæreHøyereEnn0(
                            intl,
                            valgtPeriode,
                            samletUtbetalingsgradForAndreAktiviteter,
                            erOppfylt,
                          ),
                          sjekkOmUtbetalingsgradEr0OmAvslått(intl, erOppfylt, utsettelseType),
                          sjekkOmDetErTrektMinstEnDagNårUtbetalingsgradErMerEnn0(intl, getValues, index),
                          sjekkOmUtbetalingsgradErHøyereEnnSamtidigUttaksprosent(intl, getValues),
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
                  </Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};
