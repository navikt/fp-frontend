import React, { FunctionComponent } from 'react';

import { HStack } from '@navikt/ds-react';

import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';
import {
  FodselFormValues,
  FodselPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonTransformedFormValues,
  OppholdINorgeFormValues,
  OppholdINorgePapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  SoknadData,
  SprakPapirsoknadIndex,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { AlleKodeverk } from '@navikt/fp-types';

import styles from './registreringFodselGrid.module.css';

const OMSORG_FORM_NAME_PREFIX = 'omsorg';

export type FormValues = {
  rettigheter?: string;
  foedselsData?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
} & OppholdINorgeFormValues &
  FodselFormValues;

export type TransformedFormValues = Omit<FormValues, 'omsorg'> & {
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
};

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  transformValues: (values: FormValues) => TransformedFormValues;
}

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fodselsdato?: string;
  mottattDato?: string;
}

const RegistreringFodselGrid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  soknadData,
  alleKodeverk,
  fodselsdato,
  mottattDato,
}) => (
  <HStack justify="space-between">
    <div className={styles.col}>
      {soknadData.getForeldreType() !== ForeldreType.MOR && (
        <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      )}
      <OppholdINorgePapirsoknadIndex
        readOnly={readOnly}
        erAdopsjon={soknadData.getFamilieHendelseType() !== FamilieHendelseType.ADOPSJON}
        alleKodeverk={alleKodeverk}
        mottattDato={mottattDato}
      />
      <SprakPapirsoknadIndex readOnly={readOnly} />
    </div>
    <div className={styles.col}>
      {soknadData.getForeldreType() !== ForeldreType.MOR && (
        <OmsorgOgAdopsjonPapirsoknadIndex
          readOnly={readOnly}
          familieHendelseType={soknadData.getFamilieHendelseType()}
          isForeldrepengerFagsak={false}
          fodselsdato={fodselsdato}
        />
      )}
      <FodselPapirsoknadIndex readOnly={readOnly} erForeldrepenger={false} />
    </div>
  </HStack>
);

RegistreringFodselGrid.transformValues = values => ({
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values[OMSORG_FORM_NAME_PREFIX]!),
});

RegistreringFodselGrid.buildInitialValues = () => ({
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
});

export default RegistreringFodselGrid;
