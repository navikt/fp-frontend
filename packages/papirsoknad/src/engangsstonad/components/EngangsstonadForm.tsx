import { useForm, useWatch } from 'react-hook-form';

import { HGrid } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  LagreSoknadPapirsoknadIndex,
  MottattDatoPapirsoknadIndex,
  SoknadData,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../../PapirsøknadAp';
import { RegistreringAdopsjonOgOmsorgGrid } from './RegistreringAdopsjonOgOmsorgGrid';
import { RegistreringFodselGrid } from './RegistreringFodselGrid';

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  onSubmitUfullstendigsoknad: () => Promise<void>;
  onSubmit: (values: EngangsstønadValues) => Promise<void>;
  onMellomlagre?: (values: Record<string, unknown>) => void;
  mellomlagretData?: Record<string, unknown>;
}

export type EngangsstønadValues = ReturnType<typeof transformValues>;

export const EngangsstonadForm = ({
  readOnly,
  soknadData,
  alleKodeverk,
  onSubmitUfullstendigsoknad,
  onSubmit,
  onMellomlagre,
  mellomlagretData,
}: Props) => {
  const formMethods = useForm({
    defaultValues: { ...initialValues(), ...mellomlagretData },
  });

  const foedselsDatoFraTerminOgFodelsPanel = useWatch({ control: formMethods.control, name: 'fødselsdato' });
  const mottattDato = useWatch({ control: formMethods.control, name: 'mottattDato' });

  return (
    <RhfForm formMethods={formMethods} onSubmit={values => onSubmit(transformValues(soknadData, values))}>
      <HGrid columns={{ sm: 1, md: 2 }} gap="space-16">
        <MottattDatoPapirsoknadIndex readOnly={readOnly} />
        {soknadData.getFamilieHendelseType() === 'ADPSJN' ? (
          <RegistreringAdopsjonOgOmsorgGrid
            soknadData={soknadData}
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
            fodselsdato={foedselsDatoFraTerminOgFodelsPanel}
            mottattDato={mottattDato}
          />
        ) : (
          <RegistreringFodselGrid
            soknadData={soknadData}
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
            fodselsdato={foedselsDatoFraTerminOgFodelsPanel}
            mottattDato={mottattDato}
          />
        )}
      </HGrid>
      <LagreSoknadPapirsoknadIndex
        readOnly={readOnly}
        submitting={formMethods.formState.isSubmitting}
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        onMellomlagre={onMellomlagre ? () => onMellomlagre(formMethods.getValues()) : undefined}
        erEndringssøknad={false}
      />
    </RhfForm>
  );
};

const initialValues = () => ({
  ...MottattDatoPapirsoknadIndex.initialValues(),
  ...RegistreringFodselGrid.initialValues(),
  ...RegistreringAdopsjonOgOmsorgGrid.initialValues(),
  ...LagreSoknadPapirsoknadIndex.initialValues(),
});

const transformValues = (
  soknadData: SoknadData,
  values: ReturnType<typeof initialValues>,
): AksjonspunktTilBekreftelse<AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD> => {
  return {
    kode: AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD,
    tema: soknadData.familieHendelseType,
    søknadstype: soknadData.fagsakYtelseType,
    søker: soknadData.foreldreType,
    ...MottattDatoPapirsoknadIndex.transformValues(values),
    ...(soknadData.getFamilieHendelseType() === 'ADPSJN'
      ? RegistreringAdopsjonOgOmsorgGrid.transformValues(values)
      : RegistreringFodselGrid.transformValues(values)),
    ...LagreSoknadPapirsoknadIndex.transformValues(values),
  };
};
