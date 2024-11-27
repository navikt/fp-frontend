import React from 'react';
import { FormProvider, useForm, UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { Button, HStack, Spacer, VStack } from '@navikt/ds-react';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';

type FormValues = Record<
  number,
  {
    skalVelgeDato: boolean;
  } & SvpAvklartOppholdPeriode
>;

const validerAtDatoErUnik =
  (
    intl: IntlShape,
    oppholdPerioder: SvpAvklartOppholdPeriode[],
    alleTilrettelegginger: ArbeidsforholdTilretteleggingDato[],
    opphold: SvpAvklartOppholdPeriode,
  ) =>
  (dato: string) => {
    const oppholdMinusEditert = oppholdPerioder.filter(alle => alle.fom !== opphold.fom);
    const harDuplikatFomOpphold = oppholdMinusEditert.some(t => t.fom === dato);
    const harDuplikatFomTilrettelegging = alleTilrettelegginger.some(t => t.fom === dato);

    return harDuplikatFomTilrettelegging || harDuplikatFomOpphold
      ? intl.formatMessage({ id: 'TilretteleggingForm.DuplikateDatoer' })
      : null;
  };

const validerTomEtterFom = (intl: IntlShape, index: number, getValues: UseFormGetValues<any>) => (tom?: string) =>
  dayjs(tom).isBefore(getValues(`${index}.fom`)) ? intl.formatMessage({ id: 'OppholdForm.TomForFom' }) : null;

const validerAtPeriodeErGyldig =
  (intl: IntlShape, tilrettelegginger: ArbeidsforholdTilretteleggingDato[], termindato: string) => (dato?: string) => {
    if (dayjs(dato).isAfter(dayjs(termindato).subtract(3, 'weeks').subtract(1, 'day'))) {
      return intl.formatMessage({ id: 'OppholdForm.EtterTermindato' });
    }
    const førsteDato = tilrettelegginger.reduce<string | undefined>((a, t) => {
      if (a === undefined || dayjs(t.fom).isBefore(a)) {
        return t.fom;
      }
      return a;
    }, undefined);
    if (dayjs(dato).isBefore(førsteDato)) {
      return intl.formatMessage({ id: 'OppholdForm.ForForsteDato' });
    }
    return null;
  };

const validerAtPeriodeIkkeOverlapper =
  (
    getValues: UseFormGetValues<any>,
    index: number,
    valgtOpphold: SvpAvklartOppholdPeriode,
    alleOpphold: SvpAvklartOppholdPeriode[],
  ) =>
  () => {
    const fomDato = getValues(`${index}.fom`);
    const tomDato = getValues(`${index}.tom`);
    const periodeMap = alleOpphold
      .filter(p => p.fom !== valgtOpphold.fom)
      .map(({ fom, tom }) => [fom, tom])
      .concat([[fomDato, tomDato]]);
    return periodeMap.length > 0 && dayjs(fomDato).isBefore(dayjs(tomDato))
      ? dateRangesNotOverlapping(periodeMap)
      : undefined;
  };

interface Props {
  opphold: SvpAvklartOppholdPeriode;
  index: number;
  readOnly: boolean;
  oppdaterOpphold: (values: SvpAvklartOppholdPeriode) => void;
  slettOpphold: (opphold: SvpAvklartOppholdPeriode) => void;
  avbrytEditering: () => void;
  alleTilrettelegginger: ArbeidsforholdTilretteleggingDato[];
  alleOpphold: SvpAvklartOppholdPeriode[];
  termindato: string;
}

export const OppholdForm = ({
  opphold,
  index,
  readOnly,
  oppdaterOpphold,
  avbrytEditering,
  slettOpphold,
  alleTilrettelegginger,
  alleOpphold,
  termindato,
}: Props) => {
  const intl = useIntl();

  const erNyPeriode = !opphold.fom;

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [index]: opphold,
    },
  });

  const lagreIForm = (values: FormValues) => {
    oppdaterOpphold(values[index]);
    formMethods.reset(values);
    return Promise.resolve();
  };

  const slett = () => {
    slettOpphold(opphold);
    return Promise.resolve();
  };

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  const forVisning = readOnly || opphold.oppholdKilde === 'INNTEKTSMELDING';

  return (
    <FormProvider {...formMethods}>
      <div
        style={{
          backgroundColor: 'white',
          marginLeft: '-56px',
          marginTop: '-9px',
          marginBottom: '-8px',
          marginRight: '-56px',
          padding: '24px',
        }}
      >
        <VStack gap="10">
          <HStack gap="4">
            <Datepicker
              name={`${index}.fom`}
              label={intl.formatMessage({
                id: 'OppholdForm.FraOgMed',
              })}
              validate={[
                required,
                hasValidDate,
                validerAtDatoErUnik(intl, alleOpphold, alleTilrettelegginger, opphold),
                validerAtPeriodeErGyldig(intl, alleTilrettelegginger, termindato),
              ]}
              isReadOnly={forVisning}
            />
            <Datepicker
              name={`${index}.tom`}
              label={intl.formatMessage({
                id: 'OppholdForm.TilOgMed',
              })}
              validate={[
                required,
                hasValidDate,
                validerTomEtterFom(intl, index, formMethods.getValues),
                validerAtPeriodeErGyldig(intl, alleTilrettelegginger, termindato),
                validerAtPeriodeIkkeOverlapper(formMethods.getValues, index, opphold, alleOpphold),
              ]}
              isReadOnly={forVisning}
            />
          </HStack>
          <RadioGroupPanel
            name={`${index}.oppholdÅrsak`}
            label={intl.formatMessage({ id: 'OppholdForm.GrunnTilOpphold' })}
            validate={[required]}
            isReadOnly={forVisning}
            radios={[
              {
                label: intl.formatMessage({ id: 'OppholdForm.Sykepenger' }),
                value: 'SYKEPENGER',
              },
              {
                label: intl.formatMessage({ id: 'OppholdForm.Ferie' }),
                value: 'FERIE',
              },
            ]}
          />
          {!forVisning && (
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
                  <FormattedMessage id="OppholdForm.LeggTil" />
                ) : (
                  <FormattedMessage id="OppholdForm.Oppdater" />
                )}
              </Button>
              <Button size="small" variant="secondary" onClick={avbryt} type="button">
                {erNyPeriode ? (
                  <FormattedMessage id="OppholdForm.AvsluttOgSlett" />
                ) : (
                  <FormattedMessage id="OppholdForm.Avbryt" />
                )}
              </Button>
              {!erNyPeriode && (
                <>
                  <Spacer />
                  <Button size="small" variant="secondary" onClick={slett} type="button">
                    <FormattedMessage id="OppholdForm.SlettPeriode" />
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
