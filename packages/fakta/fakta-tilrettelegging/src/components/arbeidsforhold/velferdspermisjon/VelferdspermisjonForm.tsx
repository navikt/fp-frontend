import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, VStack } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import type { Permisjon } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../types/TilretteleggingFormValues';

type FormValues = Record<number, Permisjon>;

interface Props {
  velferdspermisjon: Permisjon;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  lukkRad: () => void;
  oppdaterOverstyrtUtbetalingsgrad: (velferdspermisjonprosent: number) => void;
}

export const VelferdspermisjonForm = ({
  velferdspermisjon,
  arbeidsforholdIndex,
  readOnly,
  lukkRad,
  oppdaterOverstyrtUtbetalingsgrad,
}: Props) => {
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

    const velferdspermisjoner = alleVelferdpermisjoner
      .filter((_v, index) => permisjonIndex !== index)
      .concat(formValues);
    const velferdsprosent = velferdspermisjoner
      .filter(p => p.erGyldig)
      .map(p => p.permisjonsprosent)
      .reduce((sum, prosent) => sum + prosent, 0);

    oppdaterOverstyrtUtbetalingsgrad(velferdsprosent);

    formMethods.reset(values);
    lukkRad();
    return Promise.resolve();
  };

  // @ts-expect-error Fiks denne
  const erGyldig = formMethods.watch(`${permisjonIndex}.erGyldig`);

  return (
    <FormProvider {...formMethods}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          marginTop: '-8px',
          marginBottom: '-8px',
          marginLeft: '-8px',
          marginRight: '-8px',
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
          <div>
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
        </VStack>
      </div>
    </FormProvider>
  );
};
