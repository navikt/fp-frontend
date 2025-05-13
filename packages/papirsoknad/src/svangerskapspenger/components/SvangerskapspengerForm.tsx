import { useForm } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FamilieHendelseType } from '@navikt/fp-kodeverk';
import {
  AndreYtelserPapirsoknadIndex,
  BehovForTilretteleggingPanel,
  FrilansPapirsoknadIndex,
  InntektsgivendeArbeidPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
  TerminOgFodselPanelSvp,
  VirksomhetPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

const buildInitialValues = () => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...InntektsgivendeArbeidPapirsoknadIndex.initialValues(),
  ...VirksomhetPapirsoknadIndex.initialValues(),
  ...FrilansPapirsoknadIndex.initialValues(),
  ...AndreYtelserPapirsoknadIndex.initialValues(),
  ...TerminOgFodselPanelSvp.initialValues(),
  ...BehovForTilretteleggingPanel.initialValues(),
  ...SprakPapirsoknadIndex.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

type FormValues = ReturnType<typeof buildInitialValues>;

const transformValues = (formValues: FormValues) => ({
  ...MottattDatoPapirsoknadIndex.transformValues(formValues),
  ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
  ...InntektsgivendeArbeidPapirsoknadIndex.transformValues(formValues),
  ...VirksomhetPapirsoknadIndex.transformValues(formValues),
  ...FrilansPapirsoknadIndex.transformValues(formValues),
  ...AndreYtelserPapirsoknadIndex.transformValues(formValues),
  ...TerminOgFodselPanelSvp.transformValues(formValues),
  ...BehovForTilretteleggingPanel.transformValues(formValues),
  ...SprakPapirsoknadIndex.transformValues(formValues),
  ...LagreSoknadPapirsoknadIndex.transformValues(formValues),
});

export type SvangerskapsValues = ReturnType<typeof transformValues>;

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmit: (values: SvangerskapsValues) => Promise<void>;
  onSubmitUfullstendigsoknad: () => Promise<void>;
}

/**
 * SvangerskapspengerForm
 *
 * Form-komponent for registrering av papirsøknad for svangerskapspenger.
 */
export const SvangerskapspengerForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(),
  });

  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values))}>
      <HGrid columns={{ sm: 1, md: 2 }} gap="4">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <OppholdINorgePapirsoknadIndex
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          erAdopsjon={soknadData.getFamilieHendelseType() !== FamilieHendelseType.ADOPSJON}
          mottattDato={mottattDato}
        />
        <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <VirksomhetPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <FrilansPapirsoknadIndex readOnly={readOnly} />
        <AndreYtelserPapirsoknadIndex readOnly={readOnly} kunMiliterEllerSiviltjeneste alleKodeverk={alleKodeverk} />
        <TerminOgFodselPanelSvp readOnly={readOnly} />
        <BehovForTilretteleggingPanel readOnly={readOnly} />
        <SprakPapirsoknadIndex readOnly={readOnly} />
      </HGrid>
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        submitting={formMethods.formState.isSubmitting}
      />
    </Form>
  );
};
