import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { AlleKodeverk } from '@navikt/ft-types';

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
} from '@fpsak-frontend/papirsoknad-ui-komponenter';

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
}

interface OwnProps {
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
  fagsakPersonnummer: string;
  fodselsdato?: string;
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
}) => (
  <Row>
    <Column xs="6">
      <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      <OppholdINorgePapirsoknadIndex readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <SprakPapirsoknadIndex readOnly={readOnly} />
    </Column>
    <Column xs="6">
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
    </Column>
  </Row>
);

RegistreringAdopsjonOgOmsorgGrid.transformValues = (values: FormValues): TransformedFormValues => ({
  ...values,
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values[OMSORG_FORM_NAME_PREFIX]),
});

RegistreringAdopsjonOgOmsorgGrid.buildInitialValues = () => ({
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
});

/*
RegistreringAdopsjonOgOmsorgGrid.validate = (values, sokerPersonnummer, familieHendelseType): any => ({
  ...OppholdINorgePapirsoknadIndex.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(familieHendelseType, values.foedselsDato, values[OMSORG_FORM_NAME_PREFIX]),
  [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
});
*/

export default RegistreringAdopsjonOgOmsorgGrid;
