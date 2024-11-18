import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { omitOne } from '@navikt/ft-utils';

import { AlleKodeverk } from '@navikt/fp-types';
import { FamilieHendelseType } from '@navikt/fp-kodeverk';
import {
  SoknadData,
  MottattDatoPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  rettighet,
  MottattDatoFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';

import RegistreringAdopsjonOgOmsorgGrid, { FormValues as FormValuesAdopsjon } from './RegistreringAdopsjonOgOmsorgGrid';
import RegistreringFodselGrid, { FormValues as FormValuesFodsel } from './RegistreringFodselGrid';

type FormValues = MottattDatoFormValues & (FormValuesFodsel | FormValuesAdopsjon);

const buildInitialValues = (erFødsel: boolean, erAdopsjon: boolean): FormValues => {
  if (erFødsel) {
    return RegistreringFodselGrid.buildInitialValues();
  }
  if (erAdopsjon) {
    return RegistreringAdopsjonOgOmsorgGrid.buildInitialValues();
  }
  return {};
};

const transformValues = (values: FormValues, erFødsel: boolean, erAdopsjon: boolean) => {
  let formValues = values;
  if (values.rettigheter === rettighet.IKKE_RELEVANT) {
    formValues = omitOne(values, 'rettigheter');
  }
  return {
    ...formValues,
    ...(erFødsel ? RegistreringFodselGrid.transformValues(formValues) : {}),
    ...(erAdopsjon ? RegistreringAdopsjonOgOmsorgGrid.transformValues(formValues) : {}),
  };
};

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
}

const EngangsstonadForm = ({ readOnly, soknadData, alleKodeverk, onSubmitUfullstendigsoknad, onSubmit }: Props) => {
  const erFødsel = soknadData.getFamilieHendelseType() === FamilieHendelseType.FODSEL;
  const erAdopsjon = soknadData.getFamilieHendelseType() === FamilieHendelseType.ADOPSJON;

  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(erFødsel, erAdopsjon),
  });

  const fodselsdato = formMethods.watch('foedselsDato');
  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => onSubmit(transformValues(values, erFødsel, erAdopsjon))}
    >
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      {erFødsel && (
        <RegistreringFodselGrid
          soknadData={soknadData}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          fodselsdato={fodselsdato}
          mottattDato={mottattDato}
        />
      )}
      {erAdopsjon && (
        <RegistreringAdopsjonOgOmsorgGrid
          soknadData={soknadData}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          fodselsdato={fodselsdato}
          mottattDato={mottattDato}
        />
      )}
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        submitting={formMethods.formState.isSubmitting}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      />
    </Form>
  );
};

export default EngangsstonadForm;
