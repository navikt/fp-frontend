import { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Button, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfNumericField, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxValue, minValue, required } from '@navikt/ft-form-validators';
import dayjs, { type Dayjs } from 'dayjs';

import type { SvpAvklartOppholdPeriode, SvpTilretteleggingDatoDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import type { Tilrettelegging } from '../../../../types/TilretteleggingFormValues';
import { TilretteleggingInfoPanel } from './TilretteleggingInfoPanel';

const maxValue100 = maxValue(100);
const minValue0 = minValue(0);

type FormValues = Record<string, SvpTilretteleggingDatoDto>;

const validerAtDatoErUnik =
  (
    intl: IntlShape,
    alleTilrettelegginger: SvpTilretteleggingDatoDto[],
    oppholdPerioder: SvpAvklartOppholdPeriode[],
    tilretteleggingDato: SvpTilretteleggingDatoDto,
  ) =>
  (dato: string) => {
    const tilretteleggingerMinusEditert = alleTilrettelegginger.filter(alle => alle.fom !== tilretteleggingDato.fom);
    const harDuplikatFomTilrettelegging = tilretteleggingerMinusEditert.some(t => t.fom === dato);
    // Ferie kan dele fom med en tilrettelegging, så ferieopphold skal ikke regnes som duplikat her.
    const harDuplikatFomOpphold = oppholdPerioder.filter(o => o.oppholdÅrsak !== 'FERIE').some(t => t.fom === dato);

    return harDuplikatFomTilrettelegging || harDuplikatFomOpphold
      ? intl.formatMessage({ id: 'TilretteleggingForm.DuplikateDatoer' })
      : null;
  };

const treUkerFørTermindato = (termindato: string) => dayjs(termindato).subtract(3, 'weeks').subtract(1, 'day');

const validerAtPeriodeErGyldig = (intl: IntlShape, minDato: Dayjs, maksDato: Dayjs) => (dato?: string) => {
  if (dayjs(dato).isAfter(maksDato)) {
    return intl.formatMessage({ id: 'TilretteleggingForm.EtterTermindato' });
  }
  if (dayjs(dato).isBefore(minDato)) {
    return intl.formatMessage({ id: 'TilretteleggingForm.ForForsteDato' });
  }
  return null;
};

export const finnVelferdspermisjonprosent = (arbeidsforhold: Tilrettelegging): number =>
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
  tilrettelegging: SvpTilretteleggingDatoDto,
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
  brukOverstyrtUtbetalingsgrad = true,
): number | undefined => {
  if (tilrettelegging.type === 'HEL_TILRETTELEGGING') {
    return undefined;
  }
  if (brukOverstyrtUtbetalingsgrad && tilrettelegging.overstyrtUtbetalingsgrad) {
    return tilrettelegging.overstyrtUtbetalingsgrad;
  }

  if (tilrettelegging.type === 'INGEN_TILRETTELEGGING') {
    return 100;
  }

  return finnUtbetalingsgradForTilrettelegging(
    stillingsprosentArbeidsforhold,
    velferdspermisjonprosent,
    // Har alltid stillingsprosent her. Bør fikse sjekk mot type så || 0 er unødvendig
    tilrettelegging.stillingsprosent ?? 0,
  );
};

interface Props {
  tilrettelegging: SvpTilretteleggingDatoDto;
  termindato: string;
  index: number;
  readOnly: boolean;
  disabled: boolean;
  oppdaterTilrettelegging: (values: SvpTilretteleggingDatoDto) => void;
  avbrytEditering: () => void;
  stillingsprosentArbeidsforhold: number;
  arbeidsforhold: Tilrettelegging;
  tomDatoForTilrettelegging: string;
}

export const TilretteleggingForm = ({
  tilrettelegging,
  termindato,
  index,
  readOnly,
  disabled,
  oppdaterTilrettelegging,
  avbrytEditering,
  stillingsprosentArbeidsforhold,
  arbeidsforhold,
  tomDatoForTilrettelegging,
}: Props) => {
  const intl = useIntl();

  const erNyPeriode = !tilrettelegging.fom;

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
  }, [formMethods, index, prosentSvangerskapspenger, tilrettelegging]);

  const formValues = useWatch({
    control: formMethods.control,
    name: `${index}`,
  });

  const lagreIForm = (values: FormValues) => {
    const lagreFormValues = notEmpty(
      values[index],
      `TilretteleggingForm sine submitted values finnes ikke for index ${index}`,
    );

    const kilde =
      lagreFormValues.kilde === 'REGISTRERT_AV_SAKSBEHANDLER' || erNyPeriode
        ? 'REGISTRERT_AV_SAKSBEHANDLER'
        : 'ENDRET_AV_SAKSBEHANDLER';

    const v = {
      ...lagreFormValues,
      overstyrtUtbetalingsgrad:
        lagreFormValues.overstyrtUtbetalingsgrad === prosentSvangerskapspenger
          ? undefined
          : lagreFormValues.overstyrtUtbetalingsgrad,
      kilde,
    } as const;
    oppdaterTilrettelegging(v);
    formMethods.reset({ [index]: v });
    return Promise.resolve();
  };

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  const minDato = dayjs(arbeidsforhold.tilretteleggingBehovFom);
  const maksDato = treUkerFørTermindato(termindato);

  return (
    <FormProvider {...formMethods}>
      <VStack gap="space-16" paddingBlock="space-8">
        {!erNyPeriode && (
          <TilretteleggingInfoPanel
            tilretteleggingDato={formValues}
            termindato={termindato}
            stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
            tomDatoForTilrettelegging={tomDatoForTilrettelegging}
            arbeidsforholdErSplittet={arbeidsforhold.arbeidsforholdetErSplittet}
          />
        )}

        <RhfDatepicker
          name={`${index}.fom`}
          control={formMethods.control}
          label={<FormattedMessage id="TilretteleggingForm.FraOgMed" />}
          validate={[
            required,
            hasValidDate,
            validerAtDatoErUnik(
              intl,
              arbeidsforhold.tilretteleggingDatoer,
              arbeidsforhold.avklarteOppholdPerioder,
              tilrettelegging,
            ),
            validerAtPeriodeErGyldig(intl, minDato, maksDato),
          ]}
          readOnly={readOnly}
          disabled={disabled}
          fromDate={minDato.toDate()}
          toDate={maksDato.toDate()}
        />

        <RhfRadioGroup
          name={`${index}.type`}
          control={formMethods.control}
          legend={<FormattedMessage id="TilretteleggingForm.Tilretteleggingsbehov" />}
          validate={[required]}
          readOnly={readOnly}
          disabled={disabled}
        >
          <Radio value="HEL_TILRETTELEGGING" size="small">
            <FormattedMessage id="TilretteleggingForm.KanGjennomfores" />
          </Radio>
          <Radio value="DELVIS_TILRETTELEGGING" size="small">
            <FormattedMessage id="TilretteleggingForm.RedusertArbeid" />
          </Radio>
          <Radio value="INGEN_TILRETTELEGGING" size="small">
            <FormattedMessage id="TilretteleggingForm.KanIkkeGjennomfores" />
          </Radio>
        </RhfRadioGroup>
        {formValues.type === 'DELVIS_TILRETTELEGGING' && (
          <>
            {!arbeidsforhold.arbeidsforholdetErSplittet &&
              (tilrettelegging.stillingsprosent === undefined ||
                tilrettelegging.type !== 'DELVIS_TILRETTELEGGING' ||
                erNyPeriode ||
                formValues.kilde === 'REGISTRERT_AV_SAKSBEHANDLER') && (
                <RhfNumericField
                  name={`${index}.stillingsprosent`}
                  control={formMethods.control}
                  htmlSize={10}
                  readOnly={readOnly}
                  disabled={disabled}
                  label={<FormattedMessage id="TilretteleggingForm.Arbeidsprosent" />}
                  description={<FormattedMessage id="TilretteleggingForm.ArbeidsprosentBeskrivelse" />}
                  validate={[required, minValue0, maxValue100, hasValidDecimal]}
                  forceTwoDecimalDigits
                  onChange={value => {
                    const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(
                      stillingsprosentArbeidsforhold,
                      velferdspermisjonprosent,
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- [JOHANNES] bedre typede forms
                      value,
                    );
                    formMethods.setValue(`${index}.overstyrtUtbetalingsgrad`, utbetalingsgrad, { shouldDirty: true });
                  }}
                />
              )}
            <RhfNumericField
              name={`${index}.overstyrtUtbetalingsgrad`}
              control={formMethods.control}
              htmlSize={10}
              readOnly={readOnly}
              disabled={
                disabled || (formValues.stillingsprosent === undefined && !arbeidsforhold.arbeidsforholdetErSplittet)
              }
              label={<FormattedMessage id="TilretteleggingForm.ProsentSvp" />}
              description={<FormattedMessage id="TilretteleggingForm.ProsentSvpBeskrivelse" />}
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
            />
          </>
        )}
        {!(readOnly || disabled) && (
          <HStack gap="space-8">
            <Button
              size="small"
              variant="primary"
              type="button"
              disabled={!formMethods.formState.isDirty || false}
              loading={false}
              onClick={formMethods.handleSubmit(lagreIForm)}
            >
              {erNyPeriode ? (
                <FormattedMessage id="TilretteleggingForm.LeggTil" />
              ) : (
                <FormattedMessage id="TilretteleggingForm.Oppdater" />
              )}
            </Button>
            <Button size="small" variant="secondary" type="button" data-color="accent" onClick={avbryt}>
              {erNyPeriode ? (
                <FormattedMessage id="TilretteleggingForm.AvsluttOgSlett" />
              ) : (
                <FormattedMessage id="TilretteleggingForm.Avbryt" />
              )}
            </Button>
          </HStack>
        )}
      </VStack>
    </FormProvider>
  );
};
