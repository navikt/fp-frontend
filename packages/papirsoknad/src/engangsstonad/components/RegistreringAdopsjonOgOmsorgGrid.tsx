import React, { FunctionComponent } from 'react';
import { AlleKodeverk } from '@navikt/fp-types';
import {
  SprakPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  OppholdINorgeFormValues,
  AnnenForelderPapirsoknadIndex,
  AnnenForelderFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  SoknadData,
  OmsorgOgAdopsjonTransformedFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';
import { familieHendelseType } from '@navikt/fp-kodeverk';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './registreringAdopsjonOgOmsorgGrid.module.css';

const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

export type FormValues = {
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & OppholdINorgeFormValues;

export type TransformedFormValues = Omit<FormValues, 'omsorg'> & {
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
};

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
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
  fagsakPersonnummer,
  fodselsdato,
  mottattDato,
}) => (
  <FlexContainer>
    <FlexRow>
      <FlexColumn className={styles.col}>
        <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
        <OppholdINorgePapirsoknadIndex
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          erAdopsjon={soknadData.getFamilieHendelseType() !== familieHendelseType.ADOPSJON}
          mottattDato={mottattDato}
        />
        <SprakPapirsoknadIndex readOnly={readOnly} />
      </FlexColumn>
      <FlexColumn className={styles.col}>
        <OmsorgOgAdopsjonPapirsoknadIndex
          readOnly={readOnly}
          familieHendelseType={soknadData.getFamilieHendelseType()}
          isForeldrepengerFagsak={false}
          fodselsdato={fodselsdato}
        />
        <AnnenForelderPapirsoknadIndex
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          fagsakPersonnummer={fagsakPersonnummer}
        />
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

RegistreringAdopsjonOgOmsorgGrid.transformValues = (values: FormValues): TransformedFormValues => ({
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values[OMSORG_FORM_NAME_PREFIX]),
});

RegistreringAdopsjonOgOmsorgGrid.buildInitialValues = () => ({
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
});

export default RegistreringAdopsjonOgOmsorgGrid;
