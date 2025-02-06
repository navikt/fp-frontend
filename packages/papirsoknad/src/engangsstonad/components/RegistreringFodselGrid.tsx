import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';
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
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fodselsdato?: string;
  mottattDato?: string;
}

const RegistreringFodselGrid = ({ readOnly, soknadData, alleKodeverk, fodselsdato, mottattDato }: Props) => (
  <>
    {soknadData.getForeldreType() !== ForeldreType.MOR && (
      <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
    )}
    {soknadData.getForeldreType() !== ForeldreType.MOR && (
      <OmsorgOgAdopsjonPapirsoknadIndex
        readOnly={readOnly}
        familieHendelseType={soknadData.getFamilieHendelseType()}
        fodselsdato={fodselsdato}
      />
    )}
    <OppholdINorgePapirsoknadIndex
      readOnly={readOnly}
      erAdopsjon={soknadData.getFamilieHendelseType() === FamilieHendelseType.ADOPSJON}
      alleKodeverk={alleKodeverk}
      mottattDato={mottattDato}
    />
    <TerminOgFodselPanel readOnly={readOnly} erForeldrepenger={false} />
    <SprakPapirsoknadIndex readOnly={readOnly} />
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
export default RegistreringFodselGrid;
