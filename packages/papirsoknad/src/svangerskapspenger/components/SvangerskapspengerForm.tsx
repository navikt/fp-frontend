import { useForm, useWatch } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  AndreYtelserPapirsoknadIndex,
  BehovForTilretteleggingPanel,
  FrilansPapirsoknadIndex,
  InntektsgivendeArbeidPapirsoknadIndex,
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
  TerminOgFodselPanelSvp,
  VirksomhetPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../../PapirsøknadAp';

const buildInitialValues = () => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...InntektsgivendeArbeidPapirsoknadIndex.initialValues(),
  ...VirksomhetPapirsoknadIndex.initialValues(),
  ...FrilansPapirsoknadIndex.initialValues(),
  ...AndreYtelserPapirsoknadIndex.initialValues(),
  ...TerminOgFodselPanelSvp.initialValues(),
  ...BehovForTilretteleggingPanel.initialValues(),
  ...SprakPapirsoknadIndex.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

type FormValues = ReturnType<typeof buildInitialValues>;

const transformValues = (
  soknadData: SoknadData,
  formValues: FormValues,
): AksjonspunktTilBekreftelse<AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER> => {
  if (formValues.ufullstendigSøknad) {
    return {
      kode: AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER,
      tema: soknadData.familieHendelseType,
      søknadstype: soknadData.fagsakYtelseType,
      søker: soknadData.foreldreType,
    };
  }

  return {
    kode: AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER,
    tema: soknadData.familieHendelseType,
    søknadstype: soknadData.fagsakYtelseType,
    søker: soknadData.foreldreType,
    ...MottattDatoPapirsoknadIndex.transformValues(formValues),
    ...OppholdINorgePapirsoknadIndex.transformValues(formValues),
    ...InntektsgivendeArbeidPapirsoknadIndex.transformValues(formValues),
    ...VirksomhetPapirsoknadIndex.transformValues(formValues),
    ...FrilansPapirsoknadIndex.transformValues(formValues),
    ...AndreYtelserPapirsoknadIndex.transformValues(formValues),
    ...TerminOgFodselPanelSvp.transformValues(formValues),
    ...BehovForTilretteleggingPanel.transformValues(formValues),
    ...SprakPapirsoknadIndex.transformValues(formValues),
    ...LagreSoknadPapirsoknadIndex.transformValues(formValues),
  };
};

export type SvangerskapsValues = ReturnType<typeof transformValues>;

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmit: (values: SvangerskapsValues) => Promise<void>;
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onMellomlagre?: (values: Record<string, unknown>) => void;
  mellomlagretData?: Record<string, unknown>;
}

/**
 * SvangerskapspengerForm
 *
 * RhfForm-komponent for registrering av papirsøknad for svangerskapspenger.
 */
export const SvangerskapspengerForm = ({
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

  const mottattDato = useWatch({ control: formMethods.control, name: 'mottattDato' });

  return (
    <RhfForm formMethods={formMethods} onSubmit={(values: FormValues) => onSubmit(transformValues(soknadData, values))}>
      <HGrid columns={{ sm: 1, md: 2 }} gap="space-16">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        <OppholdINorgePapirsoknadIndex
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          erAdopsjon={soknadData.getFamilieHendelseType() !== 'ADPSJN'}
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
        onMellomlagre={onMellomlagre ? () => onMellomlagre(formMethods.getValues()) : undefined}
        submitting={formMethods.formState.isSubmitting}
        erEndringssøknad={false}
      />
    </RhfForm>
  );
};
