import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Alert, Button, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import type { VelferdspermisjonDto } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../../types/TilretteleggingFormValues';

type FormValues = Record<string, VelferdspermisjonDto>;

interface Props {
  velferdspermisjon: VelferdspermisjonDto;
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
    if (!formValues) {
      throw new Error(`Formvalues finnes ikke for index ${permisjonIndex}`);
    }

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

  const erGyldig = formMethods.watch(`${permisjonIndex}.erGyldig`);

  return (
    <FormProvider {...formMethods}>
      <VStack gap="space-16" paddingBlock="space-8">
        <RhfRadioGroup
          name={`${permisjonIndex}.erGyldig`}
          control={formMethods.control}
          legend={<FormattedMessage id="VelferdspermisjonForm.PermisjonGyldig" />}
          description={<FormattedMessage id="VelferdspermisjonForm.PermisjonGyldigDetaljer" />}
          validate={[required]}
          readOnly={readOnly}
        >
          <HStack gap="space-16">
            <Radio value={true} size="small">
              <FormattedMessage id="VelferdspermisjonForm.Ja" />
            </Radio>
            <Radio value={false} size="small">
              <FormattedMessage id="VelferdspermisjonForm.Nei" />
            </Radio>
          </HStack>
        </RhfRadioGroup>

        {erGyldig && velferdspermisjon.permisjonsprosent === 100 && (
          <Alert variant="info" size="small" className="self-start">
            <FormattedMessage id="VelferdspermisjonForm.Permisjon100ProsentOgGyldig" />
          </Alert>
        )}

        <Button
          size="small"
          variant="primary"
          type="button"
          disabled={!formMethods.formState.isDirty || false}
          onClick={formMethods.handleSubmit(lagreForm)}
          className="self-start"
        >
          <FormattedMessage id="VelferdspermisjonForm.Oppdater" />
        </Button>
      </VStack>
    </FormProvider>
  );
};
