import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Button, HStack, Spacer, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfNumericField, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxValue, minValue, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import { TilretteleggingType } from '@navikt/fp-kodeverk';
import type {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpAvklartOppholdPeriode,
} from '@navikt/fp-types';
import { SvpTilretteleggingFomKilde } from '@navikt/fp-types';

import { TilretteleggingInfoPanel } from './TilretteleggingInfoPanel';

import styles from './tilretteleggingForm.module.css';

const maxValue100 = maxValue(100);
const minValue0 = minValue(0);

type FormValues = Record<string, ArbeidsforholdTilretteleggingDato>;

const validerAtDatoErUnik =
  (
    intl: IntlShape,
    alleTilrettelegginger: ArbeidsforholdTilretteleggingDato[],
    oppholdPerioder: SvpAvklartOppholdPeriode[],
    tilrettelegging: ArbeidsforholdTilretteleggingDato,
  ) =>
  (dato: string) => {
    const tilretteleggingerMinusEditert = alleTilrettelegginger.filter(alle => alle.fom !== tilrettelegging.fom);
    const harDuplikatFomTilrettelegging = tilretteleggingerMinusEditert.some(t => t.fom === dato);
    const harDuplikatFomOpphold = oppholdPerioder.some(t => t.fom === dato);

    return harDuplikatFomTilrettelegging || harDuplikatFomOpphold
      ? intl.formatMessage({ id: 'TilretteleggingForm.DuplikateDatoer' })
      : null;
  };

const validerAtPeriodeErGyldig =
  (intl: IntlShape, tilretteleggingBehovFom: string, termindato: string) => (dato?: string) => {
    if (dayjs(dato).isAfter(dayjs(termindato).subtract(3, 'weeks').subtract(1, 'day'))) {
      return intl.formatMessage({ id: 'TilretteleggingForm.EtterTermindato' });
    }
    if (dayjs(dato).isBefore(tilretteleggingBehovFom)) {
      return intl.formatMessage({ id: 'TilretteleggingForm.ForForsteDato' });
    }
    return null;
  };

export const finnVelferdspermisjonprosent = (arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging): number =>
  arbeidsforhold.velferdspermisjoner
    .filter(p => p.erGyldig)
    .map(p => p.permisjonsprosent)
    .reduce((sum, prosent) => sum + prosent, 0);

const finnUtbetalingsgradForTilrettelegging = (
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
  stillingsprosent: number,
): number => {
  const effektivStillingsprosent = stillingsprosentArbeidsforhold - velferdspermisjonprosent;
  const defaultUtbetalingsgrad =
    effektivStillingsprosent <= 0 ? 0 : 100 * (1 - stillingsprosent / effektivStillingsprosent);
  return defaultUtbetalingsgrad > 0 ? +defaultUtbetalingsgrad.toFixed(2) : 0;
};

export const finnProsentSvangerskapspenger = (
  tilrettelegging: ArbeidsforholdTilretteleggingDato,
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
  brukOverstyrtUtbetalingsgrad = true,
): number | undefined => {
  if (tilrettelegging.type === TilretteleggingType.HEL_TILRETTELEGGING) {
    return undefined;
  }
  if (brukOverstyrtUtbetalingsgrad && tilrettelegging.overstyrtUtbetalingsgrad) {
    return tilrettelegging.overstyrtUtbetalingsgrad;
  }

  return tilrettelegging.type === TilretteleggingType.INGEN_TILRETTELEGGING
    ? 100
    : finnUtbetalingsgradForTilrettelegging(
        stillingsprosentArbeidsforhold,
        velferdspermisjonprosent,
        // Har alltid stillingsprosent her. Bør fikse sjekk mot type så || 0 er unødvendig
        tilrettelegging.stillingsprosent ?? 0,
      );
};

const sjekkOmTomDatoErTreUkerFørTermin = (termindato: string, tom?: string): boolean =>
  dayjs(termindato).subtract(3, 'week').subtract(1, 'day').isSame(dayjs(tom));

interface Props {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  termindato: string;
  index: number;
  readOnly: boolean;
  oppdaterTilrettelegging: (values: ArbeidsforholdTilretteleggingDato) => void;
  avbrytEditering: () => void;
  stillingsprosentArbeidsforhold: number;
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging;
  tomDatoForTilrettelegging: string;
  slettTilrettelegging: (fomDato: string) => void;
}

export const TilretteleggingForm = ({
  tilrettelegging,
  termindato,
  index,
  readOnly,
  oppdaterTilrettelegging,
  avbrytEditering,
  stillingsprosentArbeidsforhold,
  arbeidsforhold,
  tomDatoForTilrettelegging,
  slettTilrettelegging,
}: Props) => {
  const intl = useIntl();

  const erNyPeriode = !tilrettelegging.fom;

  const erTomDatoTreUkerFørTermin = sjekkOmTomDatoErTreUkerFørTermin(termindato, tomDatoForTilrettelegging);

  const velferdspermisjonprosent = finnVelferdspermisjonprosent(arbeidsforhold);

  const prosentSvangerskapspenger = finnProsentSvangerskapspenger(
    tilrettelegging,
    stillingsprosentArbeidsforhold,
    velferdspermisjonprosent,
  );

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [index]: {
        ...tilrettelegging,
        overstyrtUtbetalingsgrad: prosentSvangerskapspenger,
      },
    },
  });

  useEffect(() => {
    // Denne er nødvendig i tilfelle der en endrer en permisjons gyldighet
    formMethods.reset({
      [index]: {
        ...tilrettelegging,
        overstyrtUtbetalingsgrad: prosentSvangerskapspenger,
      },
    });
  }, [prosentSvangerskapspenger]);

  const formValuesRecord = formMethods.watch();
  const formValues = formValuesRecord[index];

  const lagreIForm = (values: FormValues) => {
    const lagreFormValues = values[index];
    const kilde =
      lagreFormValues.kilde === SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER || erNyPeriode
        ? SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER
        : SvpTilretteleggingFomKilde.ENDRET_AV_SAKSBEHANDLER;
    const v = {
      ...lagreFormValues,
      overstyrtUtbetalingsgrad:
        lagreFormValues.overstyrtUtbetalingsgrad !== prosentSvangerskapspenger
          ? lagreFormValues.overstyrtUtbetalingsgrad
          : undefined,
      kilde,
    };
    oppdaterTilrettelegging(v);
    formMethods.reset({ [index]: v });
    return Promise.resolve();
  };

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  const slett = () => {
    slettTilrettelegging(tilrettelegging.fom);
    return Promise.resolve();
  };

  return (
    <FormProvider {...formMethods}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          marginTop: '-8px',
          marginBottom: '-8px',
          marginLeft: '-8px',
          marginRight: '-8px',
        }}
      >
        <VStack gap="8">
          {!erNyPeriode && (
            <TilretteleggingInfoPanel
              tilrettelegging={formValues}
              termindato={termindato}
              erTomDatoTreUkerFørTermin={erTomDatoTreUkerFørTermin}
              stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
              tomDato={tomDatoForTilrettelegging}
            />
          )}
          <RhfDatepicker
            name={`${index}.fom`}
            control={formMethods.control}
            label={intl.formatMessage({
              id: 'TilretteleggingForm.FraOgMed',
            })}
            validate={[
              required,
              hasValidDate,
              validerAtDatoErUnik(
                intl,
                arbeidsforhold.tilretteleggingDatoer,
                arbeidsforhold.avklarteOppholdPerioder,
                tilrettelegging,
              ),
              validerAtPeriodeErGyldig(intl, arbeidsforhold.tilretteleggingBehovFom, termindato),
            ]}
            isReadOnly={readOnly}
          />
          <RhfRadioGroup
            name={`${index}.type`}
            control={formMethods.control}
            label={intl.formatMessage({ id: 'TilretteleggingForm.Tilretteleggingsbehov' })}
            validate={[required]}
            isReadOnly={readOnly}
            radios={[
              {
                label: intl.formatMessage({ id: 'TilretteleggingForm.KanGjennomfores' }),
                value: TilretteleggingType.HEL_TILRETTELEGGING,
              },
              {
                label: intl.formatMessage({ id: 'TilretteleggingForm.RedusertArbeid' }),
                value: TilretteleggingType.DELVIS_TILRETTELEGGING,
              },
              {
                label: intl.formatMessage({ id: 'TilretteleggingForm.KanIkkeGjennomfores' }),
                value: TilretteleggingType.INGEN_TILRETTELEGGING,
              },
            ]}
          />
          {formValues.type === TilretteleggingType.DELVIS_TILRETTELEGGING && (
            <>
              {(tilrettelegging.stillingsprosent === undefined ||
                tilrettelegging.type !== TilretteleggingType.DELVIS_TILRETTELEGGING ||
                erNyPeriode ||
                formValues.kilde === SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER) && (
                <RhfNumericField
                  name={`${index}.stillingsprosent`}
                  control={formMethods.control}
                  className={styles.arbeidsprosent}
                  readOnly={readOnly}
                  label={intl.formatMessage({ id: 'TilretteleggingForm.Arbeidsprosent' })}
                  description={intl.formatMessage({ id: 'TilretteleggingForm.ArbeidsprosentBeskrivelse' })}
                  validate={[required, minValue0, maxValue100, hasValidDecimal]}
                  forceTwoDecimalDigits
                  onChange={value => {
                    const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(
                      stillingsprosentArbeidsforhold,
                      velferdspermisjonprosent,
                      value,
                    );
                    formMethods.setValue(`${index}.overstyrtUtbetalingsgrad`, utbetalingsgrad, { shouldDirty: true });
                  }}
                />
              )}
              <RhfNumericField
                name={`${index}.overstyrtUtbetalingsgrad`}
                control={formMethods.control}
                className={styles.utbetalingsgrad}
                readOnly={readOnly}
                label={intl.formatMessage({ id: 'TilretteleggingForm.ProsentSvp' })}
                description={intl.formatMessage({ id: 'TilretteleggingForm.ProsentSvpBeskrivelse' })}
                validate={[
                  required,
                  minValue0,
                  maxValue100,
                  hasValidDecimal,
                  (verdi: number) =>
                    !stillingsprosentArbeidsforhold && verdi === 0
                      ? intl.formatMessage({ id: 'TilretteleggingForm.AngiUtbetalingsgrad' })
                      : null,
                ]}
                forceTwoDecimalDigits
                disabled={formValues.stillingsprosent === undefined}
              />
            </>
          )}
          {!readOnly && (
            <HStack gap="2">
              <Button
                size="small"
                variant="primary"
                type="button"
                disabled={!formMethods.formState.isDirty || false}
                loading={false}
                onClick={formMethods.handleSubmit((values: FormValues) => lagreIForm(values))}
              >
                {erNyPeriode ? (
                  <FormattedMessage id="TilretteleggingForm.LeggTil" />
                ) : (
                  <FormattedMessage id="TilretteleggingForm.Oppdater" />
                )}
              </Button>
              <Button size="small" variant="secondary" onClick={avbryt} type="button">
                {erNyPeriode ? (
                  <FormattedMessage id="TilretteleggingForm.AvsluttOgSlett" />
                ) : (
                  <FormattedMessage id="TilretteleggingForm.Avbryt" />
                )}
              </Button>
              {!erNyPeriode && (
                <>
                  <Spacer />
                  <Button size="small" variant="secondary" onClick={slett} type="button">
                    <FormattedMessage id="TilretteleggingForm.SlettPeriode" />
                  </Button>
                </>
              )}
            </HStack>
          )}
        </VStack>
      </div>
    </FormProvider>
  );
};
