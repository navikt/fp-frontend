import React, { FunctionComponent } from 'react';

import { ArbeidsforholdTilretteleggingDato } from '@navikt/fp-types';
import { Datepicker, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { FormattedMessage, useIntl } from 'react-intl';
import { hasValidDate, required } from '@navikt/ft-form-validators';
import { tilretteleggingType } from '@navikt/fp-kodeverk';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';

type FormValues = ArbeidsforholdTilretteleggingDato;

interface OwnProps {
  tilrettelegging: ArbeidsforholdTilretteleggingDato;
  index: number;
  readOnly: boolean;
  oppdaterTilrettelegging: (values: ArbeidsforholdTilretteleggingDato) => void;
  avbrytEditering: () => void;
}

const TilretteleggingsbehovForm: FunctionComponent<OwnProps> = ({
  tilrettelegging,
  index,
  readOnly,
  oppdaterTilrettelegging,
  avbrytEditering,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [index]: tilrettelegging,
    },
  });

  const lagreIForm = (values: FormValues) => {
    // @ts-ignore fixme
    oppdaterTilrettelegging(values[index]);
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
        <Datepicker
          name={`${index}.fom`}
          label={intl.formatMessage({
            id: 'TilretteleggingsbehovForm.FraOgMed',
          })}
          validate={[required, hasValidDate]}
          isReadOnly={readOnly}
        />
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
                <FormattedMessage id="TilretteleggingsbehovForm.Oppdater" />
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button size="small" variant="secondary" onClick={avbryt} type="button">
                <FormattedMessage id="TilretteleggingsbehovForm.Avbryt" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </div>
    </FormProvider>
  );
};

export default TilretteleggingsbehovForm;
