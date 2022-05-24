import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { AlleKodeverk, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
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
  IArbeidFormValues,
  AndreYtelserPapirsoknadIndex,
  AndreYtelserFormValue,
  RettigheterPapirsoknadIndex,
  AnnenForelderPapirsoknadIndex,
  AnnenForelderFormValues,
  FodselPapirsoknadIndex,
  BekreftelsePanel,
  DekningsgradIndex,
  PermisjonRettigheterPanel,
  PermisjonPanel,
  FormValuesPermisjon,
  PermRettigheterFormValues,
  MottattDatoFormValues,
  VirksomhetFormValues,
  DekningsgradFormValues,
  FodselFormValues,
} from '@fpsak-frontend/papirsoknad-ui-komponenter';

const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

type FormValues = {
  rettigheter?: string;
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & AndreYtelserFormValue
  & FodselFormValues
  & IArbeidFormValues
  & FrilansFormValues
  & OppholdINorgeFormValues
  & FormValuesPermisjon
  & PermRettigheterFormValues
  & MottattDatoFormValues
  & VirksomhetFormValues
  & DekningsgradFormValues;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  ...FrilansPapirsoknadIndex.buildInitialValues(),
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  ...PermisjonPanel.buildInitialValues(),
});

const transformValues = (values: FormValues) => ({
  ...values,
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values[OMSORG_FORM_NAME_PREFIX]),
});

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  onSubmit: (values: any) => Promise<any>;
  onSubmitUfullstendigsoknad: () => Promise<any>;
}

/**
 * ForeldrepengerForm
 *
 * Form-komponent for registrering av papirsøknad for foreldrepenger.
 */
const ForeldrepengerForm: FunctionComponent<OwnProps> = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: useMemo(() => buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]), []),
  });

  const sokerHarAleneomsorg = formMethods.watch('sokerHarAleneomsorg');
  const denAndreForelderenHarRettPaForeldrepenger = formMethods.watch('denAndreForelderenHarRettPaForeldrepenger');
  const annenForelderInformertRequired = !sokerHarAleneomsorg && denAndreForelderenHarRettPaForeldrepenger !== false;

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values))}>
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      <OppholdINorgePapirsoknadIndex readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <VirksomhetPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <FrilansPapirsoknadIndex readOnly={readOnly} />
      <AndreYtelserPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <DekningsgradIndex readOnly={readOnly} />
      {soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL && (
        <FodselPapirsoknadIndex readOnly={readOnly} erForeldrepenger />
      )}
      <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      <OmsorgOgAdopsjonPapirsoknadIndex
        readOnly={readOnly}
        familieHendelseType={soknadData.getFamilieHendelseType()}
        isForeldrepengerFagsak
      />
      <AnnenForelderPapirsoknadIndex
        readOnly={readOnly}
        permisjonRettigheterPanel={(
          <PermisjonRettigheterPanel
            readOnly={readOnly}
            denAndreForelderenHarRettPaForeldrepenger={denAndreForelderenHarRettPaForeldrepenger}
            sokerErMor={soknadData.getForeldreType() === foreldreType.MOR}
          />
        )}
        alleKodeverk={alleKodeverk}
      />
      <PermisjonPanel soknadData={soknadData} readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <BekreftelsePanel annenForelderInformertRequired={annenForelderInformertRequired} readOnly={readOnly} />
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
const getValidation = (soknadData: SoknadData, andreYtelser: KodeverkMedNavn[], sokerPersonnummer: string): any => {
  if (soknadData.getFamilieHendelseType() === familieHendelseType.FODSEL) {
    return (values: FormValues) => ({
      ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
      ...InntektsgivendeArbeidPapirsoknadIndex.validate(values),
      ...FrilansPapirsoknadIndex.validate(values),
      ...OppholdINorgePapirsoknadIndex.validate(values),
      ...FodselPapirsoknadIndex.validate(values),
      [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(
        soknadData.familieHendelseType, values.foedselsDato, values[OMSORG_FORM_NAME_PREFIX],
      ),
      ...PermisjonPanel.validate(values),
      [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
    });
  }
  if (soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON) {
    return (values: FormValues) => ({
      ...AndreYtelserPapirsoknadIndex.validate(values, andreYtelser),
      ...InntektsgivendeArbeidPapirsoknadIndex.validate(values),
      ...FrilansPapirsoknadIndex.validate(values),
      ...OppholdINorgePapirsoknadIndex.validate(values),
      [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(
        soknadData.familieHendelseType, values.foedselsDato, values[OMSORG_FORM_NAME_PREFIX],
      ),
      ...PermisjonPanel.validate(values),
      [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
    });
  }
  return null;
}; */

export default ForeldrepengerForm;
