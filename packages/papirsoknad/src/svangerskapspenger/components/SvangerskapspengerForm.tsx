import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';

import { FamilieHendelseType, KodeverkType } from '@navikt/fp-kodeverk';
import {
  ANDRE_YTELSER_FORM_NAME_PREFIX,
  AndreYtelserFormValue,
  AndreYtelserPapirsoknadIndex,
  BehovForTilretteleggingFormValues,
  BehovForTilretteleggingPanel,
  FrilansFormValues,
  FrilansPapirsoknadIndex,
  IArbeidFormValues,
  InntektsgivendeArbeidPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  MottattDatoFormValues,
  MottattDatoPapirsoknadIndex,
  OppholdINorgeFormValues,
  OppholdINorgePapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
  TerminFodselSvpFormValues,
  TerminFodselSvpPanel,
  Tilrettelegging,
  VirksomhetPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/fp-types';

const FRILANS_NAME_PREFIX = 'frilans';

type FormValues = {
  rettigheter?: string;
  [FRILANS_NAME_PREFIX]: FrilansFormValues;
} & AndreYtelserFormValue &
  IArbeidFormValues &
  OppholdINorgeFormValues &
  BehovForTilretteleggingFormValues &
  TerminFodselSvpFormValues &
  MottattDatoFormValues;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  ...BehovForTilretteleggingPanel.buildInitialValues(),
  [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.buildInitialValues(),
});

type TilretteleggingArbeidsforhold = {
  '@type': string;
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilrettelegginger?: Tilrettelegging[];
};

const transformTilretteleggingsArbeidsforhold = (formValues: FormValues): TilretteleggingArbeidsforhold[] => {
  let transformerteVerdier = [] as TilretteleggingArbeidsforhold[];

  const { tilretteleggingArbeidsforhold } = formValues;

  if (
    tilretteleggingArbeidsforhold?.sokForArbeidsgiver &&
    tilretteleggingArbeidsforhold?.tilretteleggingForArbeidsgiver
  ) {
    transformerteVerdier = transformerteVerdier.concat(
      tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.map(ta => ({
        '@type': 'VI',
        behovsdato: ta.behovsdato,
        organisasjonsnummer: ta.organisasjonsnummer,
        tilrettelegginger: ta.tilretteleggingArbeidsgiver,
      })),
    );
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

const transformValues = (formValues: FormValues, andreYtelserKodeverk: KodeverkMedNavn[]): any => ({
  ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
  foedselsDato: formValues.foedselsDato,
  tilretteleggingArbeidsforhold: transformTilretteleggingsArbeidsforhold(formValues),
  [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.transformValues(formValues[FRILANS_NAME_PREFIX]),
  [ANDRE_YTELSER_FORM_NAME_PREFIX]: AndreYtelserPapirsoknadIndex.transformValues(formValues, andreYtelserKodeverk),
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
    defaultValues: useMemo(() => buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]), []),
  });

  const andreYtelserKodeverk = alleKodeverk[KodeverkType.ARBEID_TYPE];

  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => onSubmit(transformValues(values, andreYtelserKodeverk))}
    >
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
