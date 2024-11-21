import React from 'react';

import { AlleKodeverk } from '@navikt/fp-types';
import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';
import {
  SprakPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  OppholdINorgeFormValues,
  TerminOgFodselPanel,
  TerminOgFodselFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  SoknadData,
  SprakFormValues,
  RettigheterFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';

export type FormValues = {
  foedselsData?: string; // brukes denne?
} & RettigheterFormValues &
  OmsorgOgAdopsjonFormValues &
  OppholdINorgeFormValues &
  TerminOgFodselFormValues &
  SprakFormValues;

export type TransformedFormValues = Omit<FormValues, 'omsorg'> &
  ReturnType<typeof OmsorgOgAdopsjonPapirsoknadIndex.transformValues>;

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
        isForeldrepengerFagsak={false}
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

RegistreringFodselGrid.transformValues = (values: FormValues): TransformedFormValues => ({
  ...RettigheterPapirsoknadIndex.transformValues(values),
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  ...OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values),
  ...TerminOgFodselPanel.transformValues(values),
  ...SprakPapirsoknadIndex.transformValues(values),
});

RegistreringFodselGrid.initialValues = () => ({
  ...OppholdINorgePapirsoknadIndex.initialValues(),
  ...OmsorgOgAdopsjonPapirsoknadIndex.initialValues(),
});

export default RegistreringFodselGrid;
