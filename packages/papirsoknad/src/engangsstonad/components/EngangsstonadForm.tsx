import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

import { AlleKodeverk } from '@navikt/fp-types';
import { FamilieHendelseType } from '@navikt/fp-kodeverk';
import {
  SoknadData,
  MottattDatoPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  MottattDatoFormValues,
  LagreSoknadFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';

import RegistreringAdopsjonOgOmsorgGrid, { FormValues as FormValuesAdopsjon } from './RegistreringAdopsjonOgOmsorgGrid';
import RegistreringFodselGrid, { FormValues as FormValuesFodsel } from './RegistreringFodselGrid';
import { HGrid } from '@navikt/ds-react';

type FormValues = MottattDatoFormValues & (FormValuesFodsel | FormValuesAdopsjon) & LagreSoknadFormValues;

const getComponentForFamiliehendelse = (familieHendelse: string) => {
  if (familieHendelse === FamilieHendelseType.FODSEL) {
    return RegistreringFodselGrid;
  }
  if (familieHendelse === FamilieHendelseType.ADOPSJON) {
    return RegistreringAdopsjonOgOmsorgGrid;
  }
  throw Error(`Unsupported FamilieHendelseType i papirsoknad for engangsstønad: ${familieHendelse}`);
};

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (values: any) => Promise<any>;
}

export const EngangsstonadForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmitUfullstendigsoknad,
  onSubmit,
}: Props) => {
  const ComponentForFamilieHendelse = getComponentForFamiliehendelse(soknadData.getFamilieHendelseType());
  const formMethods = useForm<FormValues>({
    defaultValues: ComponentForFamilieHendelse.initialValues(),
  });

  const foedselsDatoFraTerminOgFodelsPanel = formMethods.watch('foedselsDato');
  const mottattDato = formMethods.watch('mottattDato');

  const transformValues = (values: FormValues) => {
    return {
      ...MottattDatoPapirsoknadIndex.transformValues(values),
      ...ComponentForFamilieHendelse.transformValues(values),
      ...LagreSoknadPapirsoknadIndex.transformValues(values),
    };
  };

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values))}>
      <HGrid columns={{ sm: 1, md: 2 }} gap="4">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <ComponentForFamilieHendelse
          soknadData={soknadData}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          fodselsdato={foedselsDatoFraTerminOgFodelsPanel}
          mottattDato={mottattDato}
        />
      </HGrid>
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        submitting={formMethods.formState.isSubmitting}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      />
    </Form>
  );
};
