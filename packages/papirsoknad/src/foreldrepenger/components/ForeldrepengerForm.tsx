import { useForm } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';
import {
  AndreYtelserPapirsoknadIndex,
  AnnenForelderPapirsoknadIndex,
  BekreftelsePanel,
  DekningsgradIndex,
  FrilansPapirsoknadIndex,
  InntektsgivendeArbeidPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  PermisjonIndex,
  RettigheterPapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
  TerminOgFodselPanel,
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

const transformValues = (formValues: FormValues) => {
  return {
    ...MottattDatoPapirsoknadIndex.transformValues(formValues),
    ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
    ...InntektsgivendeArbeidPapirsoknadIndex.transformValues(formValues),
    ...VirksomhetPapirsoknadIndex.transformValues(formValues),
    ...FrilansPapirsoknadIndex.transformValues(formValues),
    ...AndreYtelserPapirsoknadIndex.transformValues(formValues),
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

export type ForeldrepengerValues = ReturnType<typeof transformValues>;

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  onSubmit: (values: ForeldrepengerValues) => Promise<void>;
  onSubmitUfullstendigsoknad: () => Promise<void>;
}

/**
 * ForeldrepengerForm
 *
 * RhfForm-komponent for registrering av papirsøknad for foreldrepenger.
 */
export const ForeldrepengerForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
  fagsakPersonnummer,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: buildInitialValues(),
  });

  const sokerHarAleneomsorg = formMethods.watch(`annenForelder.sokerHarAleneomsorg`);
  const denAndreForelderenHarRettPaForeldrepenger = formMethods.watch(
    `annenForelder.denAndreForelderenHarRettPaForeldrepenger`,
  );
  const annenForelderInformertRequired = !sokerHarAleneomsorg && denAndreForelderenHarRettPaForeldrepenger !== false;

  const foedselsDatoFraTerminOgFodelsPanel = formMethods.watch('foedselsDato');
  const mottattDato = formMethods.watch('mottattDato');

  return (
    <RhfForm formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(values))}>
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
          erEndringssøknad={false}
        />
        <BekreftelsePanel annenForelderInformertRequired={annenForelderInformertRequired} readOnly={readOnly} />
        <SprakPapirsoknadIndex readOnly={readOnly} />
      </HGrid>
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        submitting={formMethods.formState.isSubmitting}
        erEndringssøknad={false}
      />
    </RhfForm>
  );
};
