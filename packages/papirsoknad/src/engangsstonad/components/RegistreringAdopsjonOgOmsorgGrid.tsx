import {
  OmsorgOgAdopsjonPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import type { AlleKodeverk } from '@navikt/fp-types';

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fodselsdato?: string | string[];
  mottattDato?: string;
}

/*
 * RegistreringAdopsjonOgOmsorgGrid
 *
 * RhfForm som brukes ved adopsjon for tilleggsopplysninger.
 */
export const RegistreringAdopsjonOgOmsorgGrid = ({
  readOnly,
  soknadData,
  alleKodeverk,
  fodselsdato,
  mottattDato,
}: Props) => (
  <>
    <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
    <OmsorgOgAdopsjonPapirsoknadIndex
      readOnly={readOnly}
      familieHendelseType={soknadData.getFamilieHendelseType()}
      fodselsdato={fodselsdato}
    />
    <OppholdINorgePapirsoknadIndex
      readOnly={readOnly}
      alleKodeverk={alleKodeverk}
      erAdopsjon={soknadData.getFamilieHendelseType() !== 'ADPSJN'}
      mottattDato={mottattDato}
    />
    <SprakPapirsoknadIndex readOnly={readOnly} />
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
