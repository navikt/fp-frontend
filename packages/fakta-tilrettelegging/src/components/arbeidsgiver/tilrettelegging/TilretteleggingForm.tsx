import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '@navikt/ds-react';

import { ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { tilretteleggingType } from '@navikt/fp-kodeverk';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import TilretteleggingInfoPanel from './TilretteleggingInfoPanel';

import styles from './tilretteleggingForm.module.css';

type FormValues = Record<
  number,
  {
    skalVelgeDato: boolean;
  } & ArbeidsforholdTilretteleggingDato
>;

const sjekkOmTomDatoErTreUkerFørTermin = (termindato: string, tom?: string): boolean =>
  dayjs(termindato).subtract(3, 'week').isSame(dayjs(tom));

interface OwnProps {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  termindato: string;
  index: number;
  readOnly: boolean;
  oppdaterTilrettelegging: (values: ArbeidsforholdTilretteleggingDato) => void;
  avbrytEditering: () => void;
}

const TilretteleggingForm: FunctionComponent<OwnProps> = ({
  tilrettelegging,
  termindato,
  index,
  readOnly,
  oppdaterTilrettelegging,
  avbrytEditering,
}) => {
  const intl = useIntl();

  const erNyPeriode = !tilrettelegging.fom;

  const erTomDatoTreUkerFørTermin = sjekkOmTomDatoErTreUkerFørTermin(termindato, tilrettelegging.tom);

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [index]: {
        ...tilrettelegging,
        skalVelgeDato: !erTomDatoTreUkerFørTermin,
      },
    },
  });

  const lagreIForm = (values: FormValues) => {
    const formValues = values[index];
    const tomDato = formValues.skalVelgeDato
      ? formValues.tom
      : dayjs(termindato).subtract(3, 'week').format(ISO_DATE_FORMAT);
    oppdaterTilrettelegging({
      fom: formValues.fom,
      type: formValues.type,
      overstyrtUtbetalingsgrad: formValues.overstyrtUtbetalingsgrad,
      stillingsprosent: formValues.stillingsprosent,
      tom: tomDato,
      manueltEndret: !erNyPeriode,
      manueltLagtTil: erNyPeriode,
    });
    return Promise.resolve();
  };

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  // @ts-ignore Fiks type
  const skalVelgeDato = formMethods.watch(`${index}.skalVelgeDato`);

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
        <TilretteleggingInfoPanel
          tilrettelegging={tilrettelegging}
          termindato={termindato}
          erTomDatoTreUkerFørTermin={erTomDatoTreUkerFørTermin}
        />
        <VerticalSpacer twentyPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name={`${index}.fom`}
                label={intl.formatMessage({
                  id: 'TilretteleggingsbehovForm.FraOgMed',
                })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn className={styles.dateMargin}>
              <RadioGroupPanel
                name={`${index}.skalVelgeDato`}
                label={intl.formatMessage({ id: 'TilretteleggingsbehovForm.TilOgMed' })}
                validate={[required]}
                isReadOnly={readOnly}
                isTrueOrFalseSelection
                radios={[
                  {
                    label: intl.formatMessage({ id: 'TilretteleggingsbehovForm.TreUker' }),
                    value: 'false',
                  },
                  {
                    label: intl.formatMessage({ id: 'TilretteleggingsbehovForm.VelgDato' }),
                    value: 'true',
                  },
                ]}
              />
              {skalVelgeDato && (
                <Datepicker name={`${index}.tom`} validate={[required, hasValidDate]} isReadOnly={readOnly} />
              )}
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer thirtyTwoPx />
        <RadioGroupPanel
          name={`${index}.type`}
          label={intl.formatMessage({ id: 'TilretteleggingsbehovForm.Tilretteleggingsbehov' })}
          validate={[required]}
          isReadOnly={readOnly}
          radios={[
            {
              label: intl.formatMessage({ id: 'TilretteleggingsbehovForm.KanGjennomfores' }),
              value: tilretteleggingType.HEL_TILRETTELEGGING,
            },
            {
              label: intl.formatMessage({ id: 'TilretteleggingsbehovForm.RedusertArbeid' }),
              value: tilretteleggingType.DELVIS_TILRETTELEGGING,
            },
            {
              label: intl.formatMessage({ id: 'TilretteleggingsbehovForm.KanIkkeGjennomfores' }),
              value: tilretteleggingType.INGEN_TILRETTELEGGING,
            },
          ]}
        />
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
                <FormattedMessage
                  id={erNyPeriode ? 'TilretteleggingsbehovForm.LeggTil' : 'TilretteleggingsbehovForm.Oppdater'}
                />
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button size="small" variant="secondary" onClick={avbryt} type="button">
                <FormattedMessage
                  id={erNyPeriode ? 'TilretteleggingsbehovForm.AvsluttOgSlett' : 'TilretteleggingsbehovForm.Avbryt'}
                />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
    </FormProvider>
  );
};

export default TilretteleggingForm;
