import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Alert, Button, HStack, VStack } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { Permisjon } from '@navikt/fp-types';

import TilretteleggingFormValues from '../../../types/TilretteleggingFormValues';

type FormValues = Record<number, Permisjon>;

interface OwnProps {
  velferdspermisjon: Permisjon;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  lukkRad: () => void;
}

const VelferdspermisjonForm: FunctionComponent<OwnProps> = ({
  velferdspermisjon,
  arbeidsforholdIndex,
  readOnly,
  lukkRad,
}) => {
  const intl = useIntl();

  const { setValue, getValues } = useFormContext<TilretteleggingFormValues>();

  const alleVelferdpermisjoner = getValues(`arbeidsforhold.${arbeidsforholdIndex}.velferdspermisjoner`);
  const permisjonIndex = alleVelferdpermisjoner.findIndex(
    v => v.permisjonFom === velferdspermisjon.permisjonFom && v.permisjonTom === velferdspermisjon.permisjonTom,
  );

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

    if (formValues.erGyldig && velferdspermisjon.permisjonsprosent === 100) {
      setValue(`arbeidsforhold.${arbeidsforholdIndex}.skalBrukes`, false, {
        shouldDirty: true,
      });
    }

    formMethods.reset(values);
    lukkRad();
    return Promise.resolve();
  };

  // @ts-ignore Fiks denne
  const erGyldig = formMethods.watch(`${permisjonIndex}.erGyldig`);

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
        <VStack gap="5">
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
          {erGyldig && velferdspermisjon.permisjonsprosent === 100 && (
            <Alert variant="info" size="small">
              <FormattedMessage id="VelferdspermisjonPanel.Permisjon100ProsentOgGyldig" />
            </Alert>
          )}
          <HStack>
            <Button
              size="small"
              variant="primary"
              type="button"
              disabled={!formMethods.formState.isDirty || false}
              onClick={formMethods.handleSubmit(lagreForm)}
            >
              <FormattedMessage id="VelferdspermisjonPanel.Oppdater" />
            </Button>
          </HStack>
        </VStack>
      </div>
    </FormProvider>
  );
};
export default VelferdspermisjonForm;
