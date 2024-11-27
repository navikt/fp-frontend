import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { omitOne } from '@navikt/ft-utils';

import { FamilieHendelseType,ForeldreType, KodeverkType } from '@navikt/fp-kodeverk';
import {
  ANDRE_YTELSER_FORM_NAME_PREFIX,
  AndreYtelserFormValue,
  AndreYtelserPapirsoknadIndex,
  AnnenForelderFormValues,
  AnnenForelderPapirsoknadIndex,
  BekreftelsePanel,
  DekningsgradFormValues,
  DekningsgradIndex,
  FodselFormValues,
  FodselPapirsoknadIndex,
  FormValuesPermisjon,
  FrilansFormValues,
  FrilansPapirsoknadIndex,
  IArbeidFormValues,
  InntektsgivendeArbeidPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  MottattDatoFormValues,
  MottattDatoPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OppholdINorgeFormValues,
  OppholdINorgePapirsoknadIndex,
  PermisjonIndex,
  PermisjonRettigheterPanel,
  PermRettigheterFormValues,
  rettighet,
  RettigheterPapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  VirksomhetFormValues,
  VirksomhetPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { AlleKodeverk,KodeverkMedNavn } from '@navikt/fp-types';

const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';
const FRILANS_NAME_PREFIX = 'frilans';

type FormValues = {
  rettigheter?: string;
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
  [FRILANS_NAME_PREFIX]: FrilansFormValues;
} & AndreYtelserFormValue &
  FodselFormValues &
  IArbeidFormValues &
  OppholdINorgeFormValues &
  FormValuesPermisjon &
  PermRettigheterFormValues &
  MottattDatoFormValues &
  VirksomhetFormValues &
  DekningsgradFormValues;

const buildInitialValues = (andreYtelser: KodeverkMedNavn[]): FormValues => ({
  [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.buildInitialValues(),
  ...AndreYtelserPapirsoknadIndex.buildInitialValues(andreYtelser),
  ...InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  ...PermisjonIndex.buildInitialValues(),
});

const transformValues = (values: FormValues, andreYtelserKodeverk: KodeverkMedNavn[]) => {
  let formValues = values;
  if (values.rettigheter === rettighet.IKKE_RELEVANT) {
    formValues = omitOne(values, 'rettigheter');
  }
  return {
    ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
    [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(formValues[OMSORG_FORM_NAME_PREFIX]),
    [ANDRE_YTELSER_FORM_NAME_PREFIX]: AndreYtelserPapirsoknadIndex.transformValues(formValues, andreYtelserKodeverk),
    [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: PermisjonIndex.transformValues(formValues),
    [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.transformValues(formValues[FRILANS_NAME_PREFIX]),
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

  const sokerHarAleneomsorg = formMethods.watch('sokerHarAleneomsorg');
  const denAndreForelderenHarRettPaForeldrepenger = formMethods.watch('denAndreForelderenHarRettPaForeldrepenger');
  const annenForelderInformertRequired = !sokerHarAleneomsorg && denAndreForelderenHarRettPaForeldrepenger !== false;

  const fodselsdato = formMethods.watch('foedselsDato');
  const mottattDato = formMethods.watch('mottattDato');

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => onSubmit(transformValues(values, andreYtelserKodeverk))}
    >
      <MottattDatoPapirsoknadIndex readOnly={readOnly} />
      <OppholdINorgePapirsoknadIndex
        readOnly={readOnly}
        erAdopsjon={soknadData.getFamilieHendelseType() !== FamilieHendelseType.ADOPSJON}
        alleKodeverk={alleKodeverk}
        mottattDato={mottattDato}
      />
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <VirksomhetPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <FrilansPapirsoknadIndex readOnly={readOnly} />
      <AndreYtelserPapirsoknadIndex readOnly={readOnly} alleKodeverk={alleKodeverk} />
      <DekningsgradIndex readOnly={readOnly} />
      {soknadData.getFamilieHendelseType() === FamilieHendelseType.FODSEL && (
        <FodselPapirsoknadIndex readOnly={readOnly} erForeldrepenger />
      )}
      <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      <OmsorgOgAdopsjonPapirsoknadIndex
        readOnly={readOnly}
        familieHendelseType={soknadData.getFamilieHendelseType()}
        fodselsdato={fodselsdato}
        isForeldrepengerFagsak
      />
      <AnnenForelderPapirsoknadIndex
        readOnly={readOnly}
        permisjonRettigheterPanel={
          <PermisjonRettigheterPanel
            readOnly={readOnly}
            denAndreForelderenHarRettPaForeldrepenger={denAndreForelderenHarRettPaForeldrepenger}
            sokerErMor={soknadData.getForeldreType() === ForeldreType.MOR}
          />
        }
        alleKodeverk={alleKodeverk}
        fagsakPersonnummer={fagsakPersonnummer}
      />
      <PermisjonIndex
        foreldreType={soknadData.getForeldreType()}
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
        erEndringssøknad={erEndringssøknad}
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
