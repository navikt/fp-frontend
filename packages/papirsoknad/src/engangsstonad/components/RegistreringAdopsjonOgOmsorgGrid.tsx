import {
  OmsorgOgAdopsjonPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

interface Props {
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fødselsdato: string | undefined;
  mottattDato: string | undefined;
}

/*
 * RegistreringAdopsjonOgOmsorgGrid
 *
 * RhfForm som brukes ved adopsjon for tilleggsopplysninger.
 */
export const RegistreringAdopsjonOgOmsorgGrid = ({ soknadData, alleKodeverk, fødselsdato, mottattDato }: Props) => (
  <>
    <OppholdINorgePapirsoknadIndex
      alleKodeverk={alleKodeverk}
      erAdopsjon={soknadData.getFamilieHendelseType() === 'ADPSJN'}
      mottattDato={mottattDato}
    />
    <RettigheterPapirsoknadIndex soknadData={soknadData} />
    <OmsorgOgAdopsjonPapirsoknadIndex
      familieHendelseType={soknadData.getFamilieHendelseType()}
      fødselsdato={fødselsdato}
    />
    <SprakPapirsoknadIndex />
  </>
);

RegistreringAdopsjonOgOmsorgGrid.initialValues = () => ({
  ...RettigheterPapirsoknadIndex.initialValues(),
  ...OmsorgOgAdopsjonPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...SprakPapirsoknadIndex.initialValues(),
});

RegistreringAdopsjonOgOmsorgGrid.transformValues = (
  values: ReturnType<typeof RegistreringAdopsjonOgOmsorgGrid.initialValues>,
) => ({
  ...RettigheterPapirsoknadIndex.transformValues(values),
  ...OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values),
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  ...SprakPapirsoknadIndex.transformValues(values),
});
