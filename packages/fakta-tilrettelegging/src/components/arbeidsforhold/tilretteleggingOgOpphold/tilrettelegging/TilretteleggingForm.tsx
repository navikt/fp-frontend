import React, { FunctionComponent, useMemo } from 'react';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Button } from '@navikt/ds-react';

import {
  ArbeidsforholdFodselOgTilrettelegging,
  ArbeidsforholdTilretteleggingDato,
  SvpAvklartOppholdPeriode,
  SvpTilretteleggingFomKilde,
} from '@navikt/fp-types';
import { Datepicker, NumberField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { tilretteleggingType } from '@navikt/fp-kodeverk';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import TilretteleggingInfoPanel from './TilretteleggingInfoPanel';

import styles from './tilretteleggingForm.module.css';

const maxValue100 = maxValue(100);
const minValue0 = minValue(0);

type FormValues = Record<number, ArbeidsforholdTilretteleggingDato>;

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

export const finnVelferdspermisjonprosent = (arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging) =>
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
  return defaultUtbetalingsgrad > 0 ? defaultUtbetalingsgrad : 0;
};

export const finnProsentSvangerskapspenger = (
  tilrettelegging: ArbeidsforholdTilretteleggingDato,
  stillingsprosentArbeidsforhold: number,
  velferdspermisjonprosent: number,
): number | undefined => {
  if (tilrettelegging.type === tilretteleggingType.HEL_TILRETTELEGGING) {
    return undefined;
  }
  if (tilrettelegging.overstyrtUtbetalingsgrad) {
    return tilrettelegging.overstyrtUtbetalingsgrad;
  }

  return tilrettelegging.type === tilretteleggingType.INGEN_TILRETTELEGGING
    ? 100
    : finnUtbetalingsgradForTilrettelegging(
        stillingsprosentArbeidsforhold,
        velferdspermisjonprosent,
        // Har alltid stillingsprosent her. Bør fikse sjekk mot type så || 0 er unødvendig
        tilrettelegging.stillingsprosent || 0,
      );
};

const sjekkOmTomDatoErTreUkerFørTermin = (termindato: string, tom?: string): boolean =>
  dayjs(termindato).subtract(3, 'week').subtract(1, 'day').isSame(dayjs(tom));

interface OwnProps {
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

const TilretteleggingForm: FunctionComponent<OwnProps> = ({
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
}) => {
  const intl = useIntl();

  const erNyPeriode = !tilrettelegging.fom;

  const erTomDatoTreUkerFørTermin = sjekkOmTomDatoErTreUkerFørTermin(termindato, tomDatoForTilrettelegging);

  const velferdspermisjonprosent = finnVelferdspermisjonprosent(arbeidsforhold);

  const prosentSvangerskapspenger = useMemo(
    () => finnProsentSvangerskapspenger(tilrettelegging, stillingsprosentArbeidsforhold, velferdspermisjonprosent),
    [tilrettelegging, stillingsprosentArbeidsforhold, velferdspermisjonprosent],
  );

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [index]: {
        ...tilrettelegging,
        overstyrtUtbetalingsgrad: prosentSvangerskapspenger,
      },
    },
  });

  const lagreIForm = (values: FormValues) => {
    const formValues = values[index];
    const kilde =
      formValues.kilde === SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER || erNyPeriode
        ? SvpTilretteleggingFomKilde.REGISTRERT_AV_SAKSBEHANDLER
        : SvpTilretteleggingFomKilde.ENDRET_AV_SAKSBEHANDLER;
    const v = {
      ...formValues,
      overstyrtUtbetalingsgrad:
        formValues.overstyrtUtbetalingsgrad !== prosentSvangerskapspenger
          ? formValues.overstyrtUtbetalingsgrad
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

  const formValues = formMethods.watch();

  return (
    <FormProvider {...formMethods}>
      <div
        style={{
          backgroundColor: 'white',
          marginLeft: '-48px',
          marginTop: '-8px',
          marginBottom: '-8px',
          marginRight: '-48px',
          padding: '30px',
        }}
      >
        {!erNyPeriode && (
          <>
            <TilretteleggingInfoPanel
              tilrettelegging={tilrettelegging}
              termindato={termindato}
              erTomDatoTreUkerFørTermin={erTomDatoTreUkerFørTermin}
              stillingsprosentArbeidsforhold={stillingsprosentArbeidsforhold}
              prosentSvangerskapspenger={prosentSvangerskapspenger}
              tomDato={tomDatoForTilrettelegging}
            />
            <VerticalSpacer twentyPx />
          </>
        )}
        <Datepicker
          name={`${index}.fom`}
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
        <VerticalSpacer thirtyTwoPx />
        <RadioGroupPanel
          name={`${index}.type`}
          label={intl.formatMessage({ id: 'TilretteleggingForm.Tilretteleggingsbehov' })}
          validate={[required]}
          isReadOnly={readOnly}
          radios={[
            {
              label: intl.formatMessage({ id: 'TilretteleggingForm.KanGjennomfores' }),
              value: tilretteleggingType.HEL_TILRETTELEGGING,
            },
            {
              label: intl.formatMessage({ id: 'TilretteleggingForm.RedusertArbeid' }),
              value: tilretteleggingType.DELVIS_TILRETTELEGGING,
            },
            {
              label: intl.formatMessage({ id: 'TilretteleggingForm.KanIkkeGjennomfores' }),
              value: tilretteleggingType.INGEN_TILRETTELEGGING,
            },
          ]}
          onChange={value => {
            if (value === tilretteleggingType.INGEN_TILRETTELEGGING) {
              // @ts-ignore Fiks
              formMethods.setValue(`${index}.overstyrtUtbetalingsgrad`, 100);
            }
            if (value === tilretteleggingType.DELVIS_TILRETTELEGGING) {
              const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(
                stillingsprosentArbeidsforhold,
                velferdspermisjonprosent,
                // Har alltid stillingsprosent her. Bør fikse sjekk mot type så || 0 er unødvendig
                tilrettelegging.stillingsprosent || 0,
              );
              // @ts-ignore Fiks
              formMethods.setValue(`${index}.overstyrtUtbetalingsgrad`, utbetalingsgrad);
            }
          }}
        />
        {formValues[index].type !== tilretteleggingType.HEL_TILRETTELEGGING && (
          <>
            <VerticalSpacer sixteenPx />
            <NumberField
              name={`${index}.overstyrtUtbetalingsgrad`}
              className={styles.utbetalingsgrad}
              readOnly={readOnly}
              label={intl.formatMessage({ id: 'TilretteleggingForm.ProsentSvp' })}
              validate={[required, minValue0, maxValue100, hasValidDecimal]}
              disabled={formValues[index].type === tilretteleggingType.INGEN_TILRETTELEGGING}
            />
          </>
        )}
        <VerticalSpacer thirtyTwoPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Button
                size="small"
                variant="primary"
                type="button"
                disabled={!formMethods.formState.isDirty || false}
                loading={false}
                onClick={formMethods.handleSubmit((values: FormValues) => lagreIForm(values))}
              >
                <FormattedMessage id={erNyPeriode ? 'TilretteleggingForm.LeggTil' : 'TilretteleggingForm.Oppdater'} />
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button size="small" variant="secondary" onClick={avbryt} type="button">
                <FormattedMessage
                  id={erNyPeriode ? 'TilretteleggingForm.AvsluttOgSlett' : 'TilretteleggingForm.Avbryt'}
                />
              </Button>
            </FlexColumn>
            {!erNyPeriode && (
              <FlexColumn className={styles.pushRight}>
                <Button size="small" variant="secondary" onClick={slett} type="button">
                  <FormattedMessage id="TilretteleggingForm.SlettPeriode" />
                </Button>
              </FlexColumn>
            )}
          </FlexRow>
        </FlexContainer>
      </div>
    </FormProvider>
  );
};

export default TilretteleggingForm;
