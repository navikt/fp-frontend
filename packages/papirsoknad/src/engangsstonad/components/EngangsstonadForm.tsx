import { useForm } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FamilieHendelseType } from '@navikt/fp-kodeverk';
import {
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  SoknadData,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import { RegistreringAdopsjonOgOmsorgGrid } from './RegistreringAdopsjonOgOmsorgGrid';
import { RegistreringFodselGrid } from './RegistreringFodselGrid';

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: EngangsstønadValues) => Promise<void>;
}

export type EngangsstønadValues = ReturnType<typeof transformValues>;

export const EngangsstonadForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmitUfullstendigsoknad,
  onSubmit,
}: Props) => {
  const ComponentForFamilieHendelse = getComponentForFamiliehendelse(soknadData.getFamilieHendelseType());

  const formMethods = useForm({
    defaultValues: initialValues(),
  });

  const foedselsDatoFraTerminOgFodelsPanel = formMethods.watch('foedselsDato');
  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form formMethods={formMethods} onSubmit={values => onSubmit(transformValues(soknadData, values))}>
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
        erEndringssøknad={false}
      />
    </Form>
  );
};

const initialValues = () => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...RegistreringFodselGrid.initialValues(),
  ...RegistreringAdopsjonOgOmsorgGrid.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

const transformValues = (soknadData: SoknadData, values: ReturnType<typeof initialValues>) => {
  return {
    ...MottattDatoPapirsoknadIndex.transformValues(values),
    ...getComponentForFamiliehendelse(soknadData.getFamilieHendelseType()).transformValues(values),
    ...LagreSoknadPapirsoknadIndex.transformValues(values),
  };
};

const getComponentForFamiliehendelse = (familieHendelse: string) => {
  if (familieHendelse === FamilieHendelseType.FODSEL) {
    return RegistreringFodselGrid;
  }
  if (familieHendelse === FamilieHendelseType.ADOPSJON) {
    return RegistreringAdopsjonOgOmsorgGrid;
  }
  throw Error(`Unsupported FamilieHendelseType i papirsoknad for engangsstønad: ${familieHendelse}`);
};
