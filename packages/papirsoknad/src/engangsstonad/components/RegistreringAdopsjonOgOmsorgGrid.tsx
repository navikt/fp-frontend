import React from 'react';
import { AlleKodeverk } from '@navikt/fp-types';
import {
  SprakPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  OmsorgOgAdopsjonPapirsoknadIndex,
  SoknadData,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { FamilieHendelseType } from '@navikt/fp-kodeverk';

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
 * Form som brukes ved adopsjon for tilleggsopplysninger.
 */
const RegistreringAdopsjonOgOmsorgGrid = ({ readOnly, soknadData, alleKodeverk, fodselsdato, mottattDato }: Props) => (
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
      erAdopsjon={soknadData.getFamilieHendelseType() !== FamilieHendelseType.ADOPSJON}
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

export default RegistreringAdopsjonOgOmsorgGrid;
