import React from 'react';
import { AlleKodeverk } from '@navikt/fp-types';
import {
  SprakPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  OppholdINorgeFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  SoknadData,
  SprakFormValues,
  RettigheterFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { FamilieHendelseType } from '@navikt/fp-kodeverk';

export type FormValues = {
  foedselsDato?: string; // kan denne fjernes
} & RettigheterFormValues &
  OmsorgOgAdopsjonFormValues &
  OppholdINorgeFormValues &
  SprakFormValues;

export type TransformedFormValues = Omit<FormValues, 'omsorg'> &
  ReturnType<typeof OmsorgOgAdopsjonPapirsoknadIndex.transformValues>;

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
      isForeldrepengerFagsak={false}
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

RegistreringAdopsjonOgOmsorgGrid.transformValues = (values: FormValues): TransformedFormValues => ({
  ...RettigheterPapirsoknadIndex.transformValues(values),
  ...OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values),
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  ...SprakPapirsoknadIndex.transformValues(values),
});

RegistreringAdopsjonOgOmsorgGrid.initialValues = () => ({
  ...OmsorgOgAdopsjonPapirsoknadIndex.initialValues(),
  ...OppholdINorgePapirsoknadIndex.initialValues(),
});

export default RegistreringAdopsjonOgOmsorgGrid;
