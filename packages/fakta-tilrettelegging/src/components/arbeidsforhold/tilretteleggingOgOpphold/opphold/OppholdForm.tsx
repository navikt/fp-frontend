import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { FormProvider, useForm, UseFormGetValues } from 'react-hook-form';
import dayjs from 'dayjs';
import { Button } from '@navikt/ds-react';

import { ArbeidsforholdTilretteleggingDato, SvpAvklartOppholdPeriode } from '@navikt/fp-types';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping, hasValidDate, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './oppholdForm.module.css';

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

interface OwnProps {
  opphold: SvpAvklartOppholdPeriode;
  index: number;
  readOnly: boolean;
  oppdaterOpphold: (values: SvpAvklartOppholdPeriode) => void;
  slettOpphold: (fomDato: string) => void;
  avbrytEditering: () => void;
  alleTilrettelegginger: ArbeidsforholdTilretteleggingDato[];
  alleOpphold: SvpAvklartOppholdPeriode[];
  termindato: string;
}

const OppholdForm: FunctionComponent<OwnProps> = ({
  opphold,
  index,
  readOnly,
  oppdaterOpphold,
  avbrytEditering,
  slettOpphold,
  alleTilrettelegginger,
  alleOpphold,
  termindato,
}) => {
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
    slettOpphold(opphold.fom);
    return Promise.resolve();
  };

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  return (
    <FormProvider {...formMethods}>
      <div
        style={{
          backgroundColor: 'white',
          marginLeft: '-48px',
          marginTop: '-8px',
          marginBottom: '-8px',
          marginRight: '-48px',
          padding: '24px',
        }}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
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
                isReadOnly={readOnly || opphold.forVisning}
              />
            </FlexColumn>
            <FlexColumn>
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
                isReadOnly={readOnly || opphold.forVisning}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer thirtyTwoPx />
        <RadioGroupPanel
          name={`${index}.oppholdÅrsak`}
          label={intl.formatMessage({ id: 'OppholdForm.GrunnTilOpphold' })}
          validate={[required]}
          isReadOnly={readOnly || opphold.forVisning}
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
        <VerticalSpacer thirtyTwoPx />
        {!opphold.forVisning && !readOnly && (
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
                  <FormattedMessage id={erNyPeriode ? 'OppholdForm.LeggTil' : 'OppholdForm.Oppdater'} />
                </Button>
              </FlexColumn>
              <FlexColumn>
                <Button size="small" variant="secondary" onClick={avbryt} type="button">
                  <FormattedMessage id={erNyPeriode ? 'OppholdForm.AvsluttOgSlett' : 'OppholdForm.Avbryt'} />
                </Button>
              </FlexColumn>
              {!erNyPeriode && (
                <FlexColumn className={styles.pushRight}>
                  <Button size="small" variant="secondary" onClick={slett} type="button">
                    <FormattedMessage id="OppholdForm.SlettPeriode" />
                  </Button>
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        )}
      </div>
    </FormProvider>
  );
};

export default OppholdForm;
