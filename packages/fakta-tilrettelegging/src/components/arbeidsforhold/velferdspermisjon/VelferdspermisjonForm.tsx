import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Button } from '@navikt/ds-react';

import { Permisjon } from '@navikt/fp-types';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

type FormValues = Record<number, Permisjon>;

interface OwnProps {
  velferdspermisjon: Permisjon;
  arbeidsforholdIndex: number;
  permisjonIndex: number;
  readOnly: boolean;
  lukkRad: () => void;
}

const VelferdspermisjonForm: FunctionComponent<OwnProps> = ({
  velferdspermisjon,
  permisjonIndex,
  arbeidsforholdIndex,
  readOnly,
  lukkRad,
}) => {
  const intl = useIntl();

  const { setValue } = useFormContext();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      [permisjonIndex]: {
        ...velferdspermisjon,
      },
    },
  });

  const lagreForm = (values: FormValues) => {
    const formValues = values[permisjonIndex];
    setValue(`arbeidsforhold.${arbeidsforholdIndex}.velferdspermisjoner.${permisjonIndex}`, formValues, {
      shouldDirty: true,
    });
    formMethods.reset(values);
    lukkRad();
    return Promise.resolve();
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
        <RadioGroupPanel
          name={`${permisjonIndex}.erGyldig`}
          label={intl.formatMessage({ id: 'VelferdspermisjonPanel.PermisjonGyldig' })}
          description={intl.formatMessage({ id: 'VelferdspermisjonPanel.PermisjonGyldigDetaljer' })}
          validate={[required]}
          isReadOnly={readOnly}
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'VelferdspermisjonPanel.Ja' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'VelferdspermisjonPanel.Nei' }),
              value: 'false',
            },
          ]}
        />
        <VerticalSpacer sixteenPx />
        <Button
          size="small"
          variant="primary"
          type="button"
          disabled={!formMethods.formState.isDirty || false}
          onClick={formMethods.handleSubmit(lagreForm)}
        >
          <FormattedMessage id="VelferdspermisjonPanel.Oppdater" />
        </Button>
      </div>
    </FormProvider>
  );
};
export default VelferdspermisjonForm;
