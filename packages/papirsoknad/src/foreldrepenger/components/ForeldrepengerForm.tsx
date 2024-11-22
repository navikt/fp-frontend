import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { KodeverkMedNavn, AlleKodeverk } from '@navikt/fp-types';
import { ForeldreType, KodeverkType, FamilieHendelseType } from '@navikt/fp-kodeverk';
import {
  SoknadData,
  MottattDatoPapirsoknadIndex,
  FrilansPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  SprakPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  VirksomhetPapirsoknadIndex,
  OmsorgOgAdopsjonPapirsoknadIndex,
  InntektsgivendeArbeidPapirsoknadIndex,
  AndreYtelserPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  AnnenForelderPapirsoknadIndex,
  TerminOgFodselPanel,
  BekreftelsePanel,
  DekningsgradIndex,
  PermisjonIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { HGrid } from '@navikt/ds-react';

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]) => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...InntektsgivendeArbeidPapirsoknadIndex.initialValues(),
  ...VirksomhetPapirsoknadIndex.initialValues(),
  ...FrilansPapirsoknadIndex.initialValues(),
  ...AndreYtelserPapirsoknadIndex.initialValues(andreYtelser),
  ...DekningsgradIndex.initialValues(),
  ...TerminOgFodselPanel.initialValues(),
  ...RettigheterPapirsoknadIndex.initialValues(),
  ...OmsorgOgAdopsjonPapirsoknadIndex.initialValues(),
  ...AnnenForelderPapirsoknadIndex.initialValues(),
  ...PermisjonIndex.initialValues(),
  ...BekreftelsePanel.initialValues(),
  ...SprakPapirsoknadIndex.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

type FormValues = ReturnType<typeof buildInitialValues>;

const transformValues = (formValues: FormValues, andreYtelserKodeverk: KodeverkMedNavn[]) => {
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
