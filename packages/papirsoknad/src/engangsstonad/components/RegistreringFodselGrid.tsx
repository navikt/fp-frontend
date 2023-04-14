import React, { FunctionComponent } from 'react';

import { AlleKodeverk } from '@navikt/fp-types';
import { familieHendelseType, foreldreType } from '@navikt/fp-kodeverk';
import {
  SprakPapirsoknadIndex,
  RettigheterPapirsoknadIndex,
  OppholdINorgePapirsoknadIndex,
  OppholdINorgeFormValues,
  AnnenForelderPapirsoknadIndex,
  AnnenForelderFormValues,
  FodselPapirsoknadIndex,
  FodselFormValues,
  OmsorgOgAdopsjonPapirsoknadIndex,
  OmsorgOgAdopsjonFormValues,
  SoknadData,
  OmsorgOgAdopsjonTransformedFormValues,
} from '@navikt/fp-papirsoknad-ui-komponenter';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import styles from './registreringFodselGrid.module.css';

/*
 * RegistreringFodselForm
 *
 * Form som brukes for registrering av fodsel.
 */
const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  fodselsdato?: string;
  mottattDato?: string;
}

export type FormValues = {
  rettigheter?: string;
  foedselsData?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & OppholdINorgeFormValues &
  FodselFormValues;

export type TransformedFormValues = Omit<FormValues, 'omsorg'> & {
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonTransformedFormValues;
};

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  transformValues: (values: FormValues) => TransformedFormValues;
}

const RegistreringFodselGrid: FunctionComponent<OwnProps> & StaticFunctions = ({
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
        {soknadData.getForeldreType() !== foreldreType.MOR && (
          <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
        )}
        <OppholdINorgePapirsoknadIndex
          readOnly={readOnly}
          erAdopsjon={soknadData.getFamilieHendelseType() !== familieHendelseType.ADOPSJON}
          alleKodeverk={alleKodeverk}
          mottattDato={mottattDato}
        />
        <SprakPapirsoknadIndex readOnly={readOnly} />
      </FlexColumn>
      <FlexColumn className={styles.col}>
        {soknadData.getForeldreType() !== foreldreType.MOR && (
          <OmsorgOgAdopsjonPapirsoknadIndex
            readOnly={readOnly}
            familieHendelseType={soknadData.getFamilieHendelseType()}
            isForeldrepengerFagsak={false}
            fodselsdato={fodselsdato}
          />
        )}
        <FodselPapirsoknadIndex readOnly={readOnly} />
        <AnnenForelderPapirsoknadIndex
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
          fagsakPersonnummer={fagsakPersonnummer}
        />
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

RegistreringFodselGrid.transformValues = values => ({
  ...OppholdINorgePapirsoknadIndex.transformValues(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values[OMSORG_FORM_NAME_PREFIX]),
});

RegistreringFodselGrid.buildInitialValues = () => ({
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
});

/*
RegistreringFodselGrid.validate = (values, sokerPersonnummer, familieHendelseType) => ({
  ...OppholdINorgePapirsoknadIndex.validate(values),
  ...FodselPapirsoknadIndex.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(familieHendelseType, values.foedselsDato, values[OMSORG_FORM_NAME_PREFIX]),
  [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
});
*/

export default RegistreringFodselGrid;
