import { useEffect } from 'react';
import { FormProvider, useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Button, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping, hasValidDate, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import type { SvpAvklartOppholdPeriode, SvpTilretteleggingDatoDto } from '@navikt/fp-types';

type FormValues = Record<
  string,
  {
    skalVelgeDato: boolean;
  } & SvpAvklartOppholdPeriode
>;

const validerAtDatoErUnik =
  (
    intl: IntlShape,
    oppholdPerioder: SvpAvklartOppholdPeriode[],
    alleTilrettelegginger: SvpTilretteleggingDatoDto[],
    opphold: SvpAvklartOppholdPeriode,
    getValues: UseFormGetValues<FormValues>,
    index: number,
  ) =>
  (dato: string) => {
    const oppholdMinusEditert = oppholdPerioder.filter(alle => alle.fom !== opphold.fom);
    const harDuplikatFomOpphold = oppholdMinusEditert.some(t => t.fom === dato);
    // Ferie kan starte på samme dato som en tilrettelegging (inkludert skjæringstidspunktet)
    const erFerie = getValues(`${index}.oppholdÅrsak`) === 'FERIE';
    const harDuplikatFomTilrettelegging = !erFerie && alleTilrettelegginger.some(t => t.fom === dato);

    return harDuplikatFomTilrettelegging || harDuplikatFomOpphold
      ? intl.formatMessage({ id: 'TilretteleggingForm.DuplikateDatoer' })
      : null;
  };

const validerTomEtterFom =
  (intl: IntlShape, index: number, getValues: UseFormGetValues<FormValues>) => (tom?: string) =>
    dayjs(tom).isBefore(getValues(`${index}.fom`)) ? intl.formatMessage({ id: 'OppholdForm.TomForFom' }) : null;

const validerAtPeriodeErGyldig =
  (intl: IntlShape, tilrettelegginger: SvpTilretteleggingDatoDto[], termindato: string) => (dato?: string) => {
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
    getValues: UseFormGetValues<FormValues>,
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
  disabled: boolean;
  oppdaterOpphold: (values: SvpAvklartOppholdPeriode) => void;
  avbrytEditering: () => void;
  alleTilrettelegginger: SvpTilretteleggingDatoDto[];
  alleOpphold: SvpAvklartOppholdPeriode[];
  termindato: string;
}

export const OppholdForm = ({
  opphold,
  index,
  readOnly,
  disabled,
  oppdaterOpphold,
  avbrytEditering,
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

  // Når årsak endres må fom revalideres slik at en eventuell foreldet «samme fom»-feil
  // forsvinner når bruker bytter til Ferie (ferie kan dele fom med en tilrettelegging).
  const valgtÅrsak = formMethods.watch(`${index}.oppholdÅrsak`);
  useEffect(() => {
    if (formMethods.getValues(`${index}.fom`)) {
      void formMethods.trigger(`${index}.fom`);
    }
  }, [valgtÅrsak, index, formMethods]);

  const lagreIForm = (values: FormValues) => {
    oppdaterOpphold(values[index]!);
    formMethods.reset(values);
    return Promise.resolve();
  };

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  const forVisning = readOnly || opphold.oppholdKilde === 'INNTEKTSMELDING';

  return (
    <FormProvider {...formMethods}>
      <VStack gap="space-16" paddingBlock="space-8">
        <HStack gap="space-16">
          <RhfDatepicker
            name={`${index}.fom`}
            control={formMethods.control}
            label={<FormattedMessage id="OppholdForm.FraOgMed" />}
            validate={[
              required,
              hasValidDate,
              validerAtDatoErUnik(intl, alleOpphold, alleTilrettelegginger, opphold, formMethods.getValues, index),
              validerAtPeriodeErGyldig(intl, alleTilrettelegginger, termindato),
            ]}
            readOnly={forVisning}
            disabled={disabled}
          />
          <RhfDatepicker
            name={`${index}.tom`}
            control={formMethods.control}
            label={<FormattedMessage id="OppholdForm.TilOgMed" />}
            validate={[
              required,
              hasValidDate,
              validerTomEtterFom(intl, index, formMethods.getValues),
              validerAtPeriodeErGyldig(intl, alleTilrettelegginger, termindato),
              validerAtPeriodeIkkeOverlapper(formMethods.getValues, index, opphold, alleOpphold),
            ]}
            readOnly={forVisning}
            disabled={disabled}
          />
        </HStack>
        <RhfRadioGroup
          name={`${index}.oppholdÅrsak`}
          control={formMethods.control}
          legend={<FormattedMessage id="OppholdForm.GrunnTilOpphold" />}
          validate={[required]}
          readOnly={forVisning}
          disabled={disabled}
        >
          <Radio value="SYKEPENGER" size="small">
            <FormattedMessage id="OppholdForm.Sykepenger" />
          </Radio>
          <Radio value="FERIE" size="small">
            <FormattedMessage id="OppholdForm.Ferie" />
          </Radio>
        </RhfRadioGroup>
        {!(forVisning || disabled) && (
          <HStack gap="space-8">
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
            <Button size="small" variant="secondary" type="button" data-color="accent" onClick={avbryt}>
              {erNyPeriode ? (
                <FormattedMessage id="OppholdForm.AvsluttOgSlett" />
              ) : (
                <FormattedMessage id="OppholdForm.Avbryt" />
              )}
            </Button>
          </HStack>
        )}
      </VStack>
    </FormProvider>
  );
};
