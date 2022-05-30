import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { Form } from '@navikt/ft-form-hooks';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';

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
  IArbeidFormValues,
  AndreYtelserPapirsoknadIndex,
  AndreYtelserFormValue,
  BehovForTilretteleggingPanel,
  BehovForTilretteleggingFormValues,
  TerminFodselSvpPanel,
  TerminFodselSvpFormValues,
  Tilrettelegging,
  MottattDatoFormValues,
} from '@fpsak-frontend/papirsoknad-ui-komponenter';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';

type FormValues = AndreYtelserFormValue
  & IArbeidFormValues
  & FrilansFormValues
  & OppholdINorgeFormValues
  & BehovForTilretteleggingFormValues
  & TerminFodselSvpFormValues
  & MottattDatoFormValues;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  ...FrilansPapirsoknadIndex.buildInitialValues(),
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  ...BehovForTilretteleggingPanel.buildInitialValues(),
});

type TilretteleggingArbeidsforhold = {
  '@type': string;
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilrettelegginger?: Tilrettelegging[];
}

const transformTilretteleggingsArbeidsforhold = (
  formValues: FormValues,
): TilretteleggingArbeidsforhold[] => {
  let transformerteVerdier = [] as TilretteleggingArbeidsforhold[];

  const { tilretteleggingArbeidsforhold } = formValues;

  if (tilretteleggingArbeidsforhold?.sokForArbeidsgiver && tilretteleggingArbeidsforhold?.tilretteleggingForArbeidsgiver) {
    transformerteVerdier = transformerteVerdier.concat(tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.map((ta) => ({
      '@type': 'VI',
      behovsdato: ta.behovsdato,
      organisasjonsnummer: ta.organisasjonsnummer,
      tilrettelegginger: ta.tilretteleggingArbeidsgiver,
    })));
  }
  if (tilretteleggingArbeidsforhold?.sokForFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoFrilans,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans,
    });
  }
  if (tilretteleggingArbeidsforhold?.sokForSelvstendigNaringsdrivende) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoSN,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende,
    });
  }

  return transformerteVerdier;
};

const transformValues = (values: FormValues): any => ({
  ...values,
  foedselsDato: [values.foedselsDato],
  tilretteleggingArbeidsforhold: transformTilretteleggingsArbeidsforhold(values),
});

interface OwnProps {
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
const SvangerskapspengerForm: FunctionComponent<OwnProps> = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: useMemo(() => buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]), []),
  });

  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values))}>
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      <OppholdINorgePapirsoknadIndex
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
        erAdopsjon={soknadData.getFamilieHendelseType() !== familieHendelseType.ADOPSJON}
        mottattDato={mottattDato}
      />
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <VirksomhetPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <FrilansPapirsoknadIndex readOnly={readOnly} />
      <AndreYtelserPapirsoknadIndex readOnly={readOnly} kunMiliterEllerSiviltjeneste alleKodeverk={alleKodeverk} />
      <TerminFodselSvpPanel readOnly={readOnly} />
      <BehovForTilretteleggingPanel readOnly={readOnly} />
      <SprakPapirsoknadIndex readOnly={readOnly} />
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        submitting={formMethods.formState.isSubmitting}
      />
    </Form>
  );
};

/*
const getValidation = (andreYtelser: KodeverkMedNavn[]) => (values: FormValues): any => ({
  ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.validate(values),
  ...FrilansPapirsoknadIndex.validate(values),
  ...OppholdINorgePapirsoknadIndex.validate(values),
});
*/

export default SvangerskapspengerForm;
