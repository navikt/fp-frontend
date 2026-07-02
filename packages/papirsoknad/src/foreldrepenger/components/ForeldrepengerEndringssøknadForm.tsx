import { useForm } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  BekreftelsePanel,
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  PermisjonIndex,
  SoknadData,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../../PapirsøknadAp';

const buildInitialValues = () => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...PermisjonIndex.initialValues(),
  ...BekreftelsePanel.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

type FormValues = ReturnType<typeof buildInitialValues>;

const transformValues = (
  soknadData: SoknadData,
  formValues: FormValues,
): AksjonspunktTilBekreftelse<AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER> => {
  if (formValues.ufullstendigSøknad) {
    return {
      kode: AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
      tema: soknadData.familieHendelseType,
      søknadstype: soknadData.fagsakYtelseType,
      søker: soknadData.foreldreType,
    };
  }
  return {
    kode: AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER,
    tema: soknadData.familieHendelseType,
    søknadstype: soknadData.fagsakYtelseType,
    søker: soknadData.foreldreType,
    ...MottattDatoPapirsoknadIndex.transformValues(formValues),
    ...PermisjonIndex.transformValues(formValues),
    ...BekreftelsePanel.tranformValues(formValues),
    ...LagreSoknadPapirsoknadIndex.transformValues(formValues),
  };
};

export type ForeldrepengerEndringssøknadValues = ReturnType<typeof transformValues>;

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmit: (values: ForeldrepengerEndringssøknadValues) => Promise<void>;
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onMellomlagre?: (values: Record<string, unknown>) => void;
  mellomlagretData?: Record<string, unknown>;
}

/**
 * ForeldrepengerEndringssøknadForm
 *
 * RhfForm-komponent for registrering av papir-endringssøknad for foreldrepenger.
 */
export const ForeldrepengerEndringssøknadForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmit,
  onSubmitUfullstendigsoknad,
  onMellomlagre,
  mellomlagretData,
}: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: { ...buildInitialValues(), ...mellomlagretData },
  });

  return (
    <RhfForm formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(soknadData, values))}>
      <HGrid columns={{ sm: 1, md: 2 }} gap="space-16">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <BekreftelsePanel annenForelderInformertRequired readOnly={readOnly} />
      </HGrid>
      <PermisjonIndex
        foreldreType={soknadData.getForeldreType()}
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
        erEndringssøknad
      />
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        onMellomlagre={onMellomlagre ? () => onMellomlagre(formMethods.getValues()) : undefined}
        submitting={formMethods.formState.isSubmitting}
        erEndringssøknad
      />
    </RhfForm>
  );
};
