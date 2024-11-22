import React from 'react';
import { useForm } from 'react-hook-form';
import { HGrid } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';
import { FamilieHendelseType, KodeverkType } from '@navikt/fp-kodeverk';

import {
  SoknadData,
  MottattDatoPapirsoknadIndex,
  FrilansPapirsoknadIndex,
  FrilansFormValues,
  OppholdINorgePapirsoknadIndex,
  OppholdINorgeFormValues,
  SprakPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  VirksomhetPapirsoknadIndex,
  InntektsgivendeArbeidPapirsoknadIndex,
  InntektsgivendeArbeidFormValues,
  AndreYtelserPapirsoknadIndex,
  AndreYtelserFormValue,
  BehovForTilretteleggingPanel,
  BehovForTilretteleggingFormValues,
  TerminOgFodselPanelSvp,
  TerminOgFodselSvpFormValues,
  MottattDatoFormValues,
  VirksomhetFormValues,
  LagreSoknadFormValues,
  SprakFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';

type FormValues = AndreYtelserFormValue &
  MottattDatoFormValues &
  OppholdINorgeFormValues &
  FrilansFormValues &
  InntektsgivendeArbeidFormValues &
  TerminOgFodselSvpFormValues &
  BehovForTilretteleggingFormValues &
  VirksomhetFormValues &
  SprakFormValues &
  LagreSoknadFormValues;

type TransformValuesUnion<T extends { transformValues: (values: FormValues, ...args: any) => any }[]> =
  T[number] extends infer U
    ? U extends { transformValues: (values: FormValues) => any }
      ? ReturnType<U['transformValues']>
      : never
    : never;

type TransformedFormValues = TransformValuesUnion<
  [
    typeof MottattDatoPapirsoknadIndex,
    typeof OppholdINorgePapirsoknadIndex,
    typeof InntektsgivendeArbeidPapirsoknadIndex,
    typeof VirksomhetPapirsoknadIndex,
    typeof FrilansPapirsoknadIndex,
    typeof AndreYtelserPapirsoknadIndex,
    typeof TerminOgFodselPanelSvp,
    typeof BehovForTilretteleggingPanel,
    typeof SprakPapirsoknadIndex,
    typeof LagreSoknadPapirsoknadIndex,
  ]
>;

export type TransformedFormValuess = Omit<FormValues, 'andreYtelser' | 'egenVirksomhet'> &
  ReturnType<typeof AndreYtelserPapirsoknadIndex.transformValues> &
  ReturnType<typeof BehovForTilretteleggingPanel.transformValues> &
  ReturnType<typeof VirksomhetPapirsoknadIndex.transformValues>;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  ...AndreYtelserPapirsoknadIndex.initialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...BehovForTilretteleggingPanel.initialValues(),
  ...FrilansPapirsoknadIndex.initialValues(),
  ...VirksomhetPapirsoknadIndex.initialValues(),
});

const transformValues = (formValues: FormValues, andreYtelserKodeverk: KodeverkMedNavn[]): TransformedFormValues => ({
  ...MottattDatoPapirsoknadIndex.transformValues(formValues),
  ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
  ...InntektsgivendeArbeidPapirsoknadIndex.transformValues(formValues),
  ...VirksomhetPapirsoknadIndex.transformValues(formValues),
  ...FrilansPapirsoknadIndex.transformValues(formValues),
  ...AndreYtelserPapirsoknadIndex.transformValues(formValues, andreYtelserKodeverk),
  ...TerminOgFodselPanelSvp.transformValues(formValues),
  ...BehovForTilretteleggingPanel.transformValues(formValues),
  ...SprakPapirsoknadIndex.transformValues(formValues),
  ...LagreSoknadPapirsoknadIndex.transformValues(formValues),
});

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmit: (values: any) => Promise<any>;
  onSubmitUfullstendigsoknad: () => Promise<any>;
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
    defaultValues: buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]),
  });

  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => onSubmit(transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))}
    >
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
