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
} from '@fpsak-frontend/papirsoknad-ui-komponenter';

import PermisjonRettigheterPanel from './permisjon/PermisjonRettigheterPanel';
import DekningsgradPanel from './dekningsgrad/DekningsgradPanel';
import PermisjonPanel, { TIDSROM_PERMISJON_FORM_NAME_PREFIX, FormValues as FormValuesPermisjon } from './permisjon/PermisjonPanel';
import BekreftelsePanel from './bekreftelse/BekreftelsePanel';

const FORELDREPENGER_FORM_NAME = 'ForeldrepengerForm';
const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

type FormValues = {
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & AndreYtelserFormValue & IArbeidFormValues & FrilansFormValues & OppholdINorgeFormValues & FormValuesPermisjon;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  ...FrilansPapirsoknadIndex.buildInitialValues(),
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  ...PermisjonPanel.buildInitialValues(),
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

  // TODO Dette er ikkje korrekt. Felta under ligg i permisjonspanel
  const annenForelder = formMethods.watch('annenForelder');

  const sokerHarAleneomsorg = annenForelder ? annenForelder.sokerHarAleneomsorg : undefined;
  const denAndreForelderenHarRettPaForeldrepenger = annenForelder ? annenForelder.denAndreForelderenHarRettPaForeldrepenger : undefined;

  let annenForelderInformertRequired = true;
  if (annenForelder && (sokerHarAleneomsorg || annenForelder.denAndreForelderenHarRettPaForeldrepenger === false)) {
    annenForelderInformertRequired = false;
  }

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(values)}>
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      <OppholdINorgePapirsoknadIndex readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <VirksomhetPapirsoknadIndex
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
      />
      <FrilansPapirsoknadIndex readOnly={readOnly} />
      <AndreYtelserPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <DekningsgradPanel readOnly={readOnly} />
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
            sokerHarAleneomsorg={sokerHarAleneomsorg}
            denAndreForelderenHarRettPaForeldrepenger={denAndreForelderenHarRettPaForeldrepenger}
            sokerErMor={soknadData.getForeldreType() === foreldreType.MOR}
          />
        )}
        alleKodeverk={alleKodeverk}
      />
      <PermisjonPanel
        soknadData={soknadData}
        readOnly={readOnly}
        error={formMethods.formState.errors}
        submitFailed={!formMethods.formState.isSubmitSuccessful}
        sokerHarAleneomsorg={sokerHarAleneomsorg}
        alleKodeverk={alleKodeverk}
      />
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
};*/

export default ForeldrepengerForm;
