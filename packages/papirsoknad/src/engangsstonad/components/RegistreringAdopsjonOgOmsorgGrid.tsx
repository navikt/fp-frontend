import React, { FunctionComponent } from 'react';
import { AlleKodeverk } from '@navikt/fp-types';
import {
  SprakPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  OppholdINorgeFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  SoknadData,
  OmsorgOgAdopsjonTransformedFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { familieHendelseType } from '@navikt/fp-kodeverk';

import { HStack } from '@navikt/ds-react';
import styles from './registreringAdopsjonOgOmsorgGrid.module.css';

const OMSORG_FORM_NAME_PREFIX = 'omsorg';

export type FormValues = {
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
} & OppholdINorgeFormValues;

export type TransformedFormValues = Omit<FormValues, 'omsorg'> & {
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
};

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fodselsdato?: string | string[];
  mottattDato?: string;
}

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  transformValues: (values: FormValues) => TransformedFormValues;
}

/*
 * RegistreringAdopsjonOgOmsorgGrid
 *
 * Form som brukes ved adopsjon for tilleggsopplysninger.
 */
const RegistreringAdopsjonOgOmsorgGrid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  soknadData,
  alleKodeverk,
  fodselsdato,
  mottattDato,
}) => (
  <HStack justify="space-between">
    <div className={styles.col}>
      <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      <OppholdINorgePapirsoknadIndex
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
        erAdopsjon={soknadData.getFamilieHendelseType() !== familieHendelseType.ADOPSJON}
        mottattDato={mottattDato}
      />
      <SprakPapirsoknadIndex readOnly={readOnly} />
    </div>
    <div className={styles.col}>
      <OmsorgOgAdopsjonPapirsoknadIndex
        readOnly={readOnly}
        familieHendelseType={soknadData.getFamilieHendelseType()}
        isForeldrepengerFagsak={false}
        fodselsdato={fodselsdato}
      />
    </div>
  </HStack>
);

RegistreringAdopsjonOgOmsorgGrid.transformValues = (values: FormValues): TransformedFormValues => ({
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values[OMSORG_FORM_NAME_PREFIX]!),
});

RegistreringAdopsjonOgOmsorgGrid.buildInitialValues = () => ({
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
});

export default RegistreringAdopsjonOgOmsorgGrid;
