import {
  OmsorgOgAdopsjonPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
  TerminOgFodselPanel,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

interface Props {
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fødselsdato: string | undefined;
  mottattDato: string | undefined;
}

export const RegistreringFodselGrid = ({ soknadData, alleKodeverk, fødselsdato, mottattDato }: Props) => (
  <>
    <OppholdINorgePapirsoknadIndex
      erAdopsjon={soknadData.getFamilieHendelseType() === 'ADPSJN'}
      alleKodeverk={alleKodeverk}
      mottattDato={mottattDato}
    />
    {soknadData.getForeldreType() !== 'MOR' && <RettigheterPapirsoknadIndex soknadData={soknadData} />}
    {soknadData.getForeldreType() !== 'MOR' && (
      <OmsorgOgAdopsjonPapirsoknadIndex
        familieHendelseType={soknadData.getFamilieHendelseType()}
        fødselsdato={fødselsdato}
      />
    )}
    <TerminOgFodselPanel erForeldrepenger={false} />
    <SprakPapirsoknadIndex />
  </>
);

RegistreringFodselGrid.initialValues = () => ({
  ...RettigheterPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...OmsorgOgAdopsjonPapirsoknadIndex.initialValues(),
  ...TerminOgFodselPanel.initialValues(),
  ...SprakPapirsoknadIndex.initialValues(),
});

RegistreringFodselGrid.transformValues = (values: ReturnType<typeof RegistreringFodselGrid.initialValues>) => ({
  ...RettigheterPapirsoknadIndex.transformValues(values),
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  ...OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values),
  ...TerminOgFodselPanel.transformValues(values),
  ...SprakPapirsoknadIndex.transformValues(values),
});
