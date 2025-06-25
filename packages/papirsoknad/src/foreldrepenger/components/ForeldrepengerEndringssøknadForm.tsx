import { useForm } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import {
  BekreftelsePanel,
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  PermisjonIndex,
  SoknadData,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

const buildInitialValues = () => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...PermisjonIndex.initialValues(),
  ...BekreftelsePanel.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

type FormValues = ReturnType<typeof buildInitialValues>;

const transformValues = (formValues: FormValues) => {
  return {
    ...MottattDatoPapirsoknadIndex.transformValues(formValues),
    ...PermisjonIndex.transformValues(formValues),
    ...BekreftelsePanel.tranformValues(formValues),
    ...LagreSoknadPapirsoknadIndex.transformValues(formValues),
  };
};

export type ForeldrepengerEndringssøknadValues = ReturnType<typeof transformValues>;

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmit: (values: ForeldrepengerEndringssøknadValues) => Promise<void>;
  onSubmitUfullstendigsoknad: () => Promise<void>;
}

/**
 * ForeldrepengerEndringssøknadForm
 *
 * Form-komponent for registrering av papir-endringssøknad for foreldrepenger.
 */
export const ForeldrepengerEndringssøknadForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(),
  });

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values))}>
      <HGrid columns={{ sm: 1, md: 2 }} gap="4">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <BekreftelsePanel annenForelderInformertRequired readOnly={readOnly} />
      </HGrid>
      <PermisjonIndex
        foreldreType={soknadData.getForeldreType()}
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
        erEndringssøknad
      />
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        submitting={formMethods.formState.isSubmitting}
        erEndringssøknad
      />
    </Form>
  );
};
