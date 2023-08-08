import React, { FunctionComponent } from 'react';

import { SvpAvklartOppholdPeriode } from '@navikt/fp-types';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { FormattedMessage, useIntl } from 'react-intl';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';

type FormValues = SvpAvklartOppholdPeriode;

interface OwnProps {
  opphold: SvpAvklartOppholdPeriode;
  index: number;
  readOnly: boolean;
  oppdaterOpphold: (values: SvpAvklartOppholdPeriode) => void;
  avbrytEditering: () => void;
}

const OppholdForm: FunctionComponent<OwnProps> = ({ opphold, index, readOnly, oppdaterOpphold, avbrytEditering }) => {
  const intl = useIntl();

  const erNyPeriode = !opphold.fom;

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [index]: opphold,
    },
  });

  const lagreIForm = (values: FormValues) => {
    // @ts-ignore fixme
    oppdaterOpphold(values[index]);
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
          padding: '30px',
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
                validate={[required, hasValidDate]}
                isReadOnly={readOnly || opphold.forVisning}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name={`${index}.tom`}
                label={intl.formatMessage({
                  id: 'OppholdForm.TilOgMed',
                })}
                validate={[required, hasValidDate]}
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
        {!opphold.forVisning && (
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
            </FlexRow>
          </FlexContainer>
        )}
      </div>
    </FormProvider>
  );
};

export default OppholdForm;
