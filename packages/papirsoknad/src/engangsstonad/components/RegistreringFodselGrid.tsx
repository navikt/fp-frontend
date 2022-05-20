import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';

import { AlleKodeverk } from '@navikt/ft-types';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
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
} from '@fpsak-frontend/papirsoknad-ui-komponenter';

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
}

export type FormValues = {
  rettigheter?: string;
  foedselsData?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & OppholdINorgeFormValues & FodselFormValues;

interface StaticFunctions {
  buildInitialValues: () => FormValues;
}

const RegistreringFodselGrid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  soknadData,
  alleKodeverk,
}) => (
  <Row>
    <Column xs="6">
      {soknadData.getForeldreType() !== foreldreType.MOR && (
        <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      )}
      <OppholdINorgePapirsoknadIndex readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <SprakPapirsoknadIndex readOnly={readOnly} />
    </Column>
    <Column xs="6">
      {soknadData.getForeldreType() !== foreldreType.MOR && (
        <OmsorgOgAdopsjonPapirsoknadIndex
          readOnly={readOnly}
          familieHendelseType={soknadData.getFamilieHendelseType()}
          isForeldrepengerFagsak={false}
        />
      )}
      <FodselPapirsoknadIndex readOnly={readOnly} />
      <AnnenForelderPapirsoknadIndex
        readOnly={readOnly}
        alleKodeverk={alleKodeverk}
      />
    </Column>
  </Row>
);

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
