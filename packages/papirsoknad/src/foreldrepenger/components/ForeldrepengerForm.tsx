import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { KodeverkMedNavn, AlleKodeverk } from '@navikt/fp-types';
import { ForeldreType, KodeverkType, FamilieHendelseType } from '@navikt/fp-kodeverk';
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
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  InntektsgivendeArbeidPapirsoknadIndex,
  AndreYtelserPapirsoknadIndex,
  AndreYtelserFormValue,
  RettigheterPapirsoknadIndex,
  AnnenForelderPapirsoknadIndex,
  AnnenForelderFormValues,
  TerminOgFodselPanel,
  BekreftelsePanel,
  DekningsgradIndex,
  PermisjonIndex,
  MottattDatoFormValues,
  VirksomhetFormValues,
  DekningsgradFormValues,
  TerminOgFodselFormValues,
  LagreSoknadFormValues,
  RettigheterFormValues,
  SprakFormValues,
  BekreftelseFormValues,
  PermisjonFormValues,
  InntektsgivendeArbeidFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { HGrid } from '@navikt/ds-react';

type FormValues = MottattDatoFormValues &
  OppholdINorgeFormValues &
  InntektsgivendeArbeidFormValues &
  VirksomhetFormValues &
  FrilansFormValues &
  AndreYtelserFormValue &
  DekningsgradFormValues &
  TerminOgFodselFormValues &
  RettigheterFormValues &
  OmsorgOgAdopsjonFormValues &
  AnnenForelderFormValues &
  PermisjonFormValues &
  BekreftelseFormValues &
  SprakFormValues &
  LagreSoknadFormValues;

type TransformedFormValues = MottattDatoFormValues &
  OppholdINorgeFormValues &
  InntektsgivendeArbeidFormValues &
  ReturnType<typeof VirksomhetPapirsoknadIndex.transformValues> &
  FrilansFormValues &
  ReturnType<typeof AndreYtelserPapirsoknadIndex.transformValues> &
  DekningsgradFormValues &
  TerminOgFodselFormValues &
  RettigheterFormValues &
  ReturnType<typeof OmsorgOgAdopsjonPapirsoknadIndex.transformValues> &
  AnnenForelderFormValues &
  PermisjonFormValues &
  BekreftelseFormValues &
  SprakFormValues &
  LagreSoknadFormValues;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  ...FrilansPapirsoknadIndex.initialValues(),
  ...AndreYtelserPapirsoknadIndex.initialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.initialValues(),
  ...OmsorgOgAdopsjonPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...PermisjonIndex.initialValues(),
  ...VirksomhetPapirsoknadIndex.initialValues(),
});

const transformValues = (formValues: FormValues, andreYtelserKodeverk: KodeverkMedNavn[]): TransformedFormValues => {
  return {
    ...MottattDatoPapirsoknadIndex.transformValues(formValues),
    ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
    ...InntektsgivendeArbeidPapirsoknadIndex.transformValues(formValues),
    ...VirksomhetPapirsoknadIndex.transformValues(formValues),
    ...FrilansPapirsoknadIndex.transformValues(formValues),
    ...AndreYtelserPapirsoknadIndex.transformValues(formValues, andreYtelserKodeverk),
    ...DekningsgradIndex.transformValues(formValues),
    ...TerminOgFodselPanel.transformValues(formValues),
    ...RettigheterPapirsoknadIndex.transformValues(formValues),
    ...OmsorgOgAdopsjonPapirsoknadIndex.transformValues(formValues),
    ...AnnenForelderPapirsoknadIndex.transformValues(formValues),
    ...PermisjonIndex.transformValues(formValues),
    ...BekreftelsePanel.tranformValues(formValues),
    ...SprakPapirsoknadIndex.transformValues(formValues),
    ...LagreSoknadPapirsoknadIndex.transformValues(formValues),
  };
};

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  onSubmit: (values: any) => Promise<any>;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  erEndringssøknad: boolean;
}

/**
 * ForeldrepengerForm
 *
 * Form-komponent for registrering av papirsøknad for foreldrepenger.
 */
export const ForeldrepengerForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
  fagsakPersonnummer,
  erEndringssøknad,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: useMemo(() => buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]), []),
  });

  const andreYtelserKodeverk = alleKodeverk[KodeverkType.ARBEID_TYPE];

  const sokerHarAleneomsorg = formMethods.watch(`${AnnenForelderPapirsoknadIndex.PREFIX}.sokerHarAleneomsorg`);
  const denAndreForelderenHarRettPaForeldrepenger = formMethods.watch(
    `${AnnenForelderPapirsoknadIndex.PREFIX}.denAndreForelderenHarRettPaForeldrepenger`,
  );
  const annenForelderInformertRequired = !sokerHarAleneomsorg && denAndreForelderenHarRettPaForeldrepenger !== false;

  const foedselsDatoFraTerminOgFodelsPanel = formMethods.watch('foedselsDato');
  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => onSubmit(transformValues(values, andreYtelserKodeverk))}
    >
      <HGrid columns={{ sm: 1, md: 2 }} gap="4">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <OppholdINorgePapirsoknadIndex
          readOnly={readOnly}
          erAdopsjon={soknadData.getFamilieHendelseType() === FamilieHendelseType.ADOPSJON}
          alleKodeverk={alleKodeverk}
          mottattDato={mottattDato}
        />
        <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <VirksomhetPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <FrilansPapirsoknadIndex readOnly={readOnly} />
        <AndreYtelserPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
        <DekningsgradIndex readOnly={readOnly} />
        {soknadData.getFamilieHendelseType() === FamilieHendelseType.FODSEL && (
          <TerminOgFodselPanel readOnly={readOnly} erForeldrepenger />
        )}
        <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
        <OmsorgOgAdopsjonPapirsoknadIndex
          readOnly={readOnly}
          familieHendelseType={soknadData.getFamilieHendelseType()}
          fodselsdato={foedselsDatoFraTerminOgFodelsPanel}
          isForeldrepengerFagsak
        />
        <AnnenForelderPapirsoknadIndex
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          fagsakPersonnummer={fagsakPersonnummer}
          sokerErMor={soknadData.getForeldreType() === ForeldreType.MOR}
        />
        <PermisjonIndex
          foreldreType={soknadData.getForeldreType()}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          erEndringssøknad={erEndringssøknad}
        />
        <BekreftelsePanel annenForelderInformertRequired={annenForelderInformertRequired} readOnly={readOnly} />
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
