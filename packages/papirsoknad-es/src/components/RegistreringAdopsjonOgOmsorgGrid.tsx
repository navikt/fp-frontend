import React, { FunctionComponent } from 'react';
import { FormSection } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import OppholdINorgePapirsoknadIndex, { FormValues as OppholdFormValues } from '@fpsak-frontend/papirsoknad-panel-opphold-i-norge';
import TilleggsopplysningerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-tilleggsopplysninger';
import RettigheterPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-rettigheter';
import OmsorgOgAdopsjonPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-omsorg-og-adopsjon';
import AnnenForelderPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-annen-forelder';

const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

interface OwnProps {
  form: string;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

export type FormValues = {
  rettigheter: string;
  foedselsDato: string;
} & OppholdFormValues;

interface StaticFunctions {
  buildInitialValues?: () => any;
  validate?: (values: FormValues, sokerPersonnummer: string) => any;
}

/*
 * RegistreringAdopsjonOgOmsorgGrid
 *
 * Form som brukes vid adopsjon for tilleggsopplysninger. Containerkomponent for AnnenForelderForm
 */
const RegistreringAdopsjonOgOmsorgGrid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  soknadData,
  alleKodeverk,
}) => (
  <Row>
    <Column xs="6">
      <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />
      <OppholdINorgePapirsoknadIndex form={form} readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <TilleggsopplysningerPapirsoknadIndex readOnly={readOnly} />
    </Column>
    <Column xs="6">
      <FormSection name={OMSORG_FORM_NAME_PREFIX}>
        <OmsorgOgAdopsjonPapirsoknadIndex
          form={form}
          namePrefix={OMSORG_FORM_NAME_PREFIX}
          readOnly={readOnly}
          familieHendelseType={soknadData.getFamilieHendelseType()}
          isForeldrepengerFagsak={false}
        />
      </FormSection>
      <FormSection name={ANNEN_FORELDER_FORM_NAME_PREFIX}>
        <AnnenForelderPapirsoknadIndex
          soknadData={soknadData}
          namePrefix={ANNEN_FORELDER_FORM_NAME_PREFIX}
          form={form}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      </FormSection>
    </Column>
  </Row>
);

RegistreringAdopsjonOgOmsorgGrid.buildInitialValues = () => ({
  [OMSORG_FORM_NAME_PREFIX]: {},
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
});

RegistreringAdopsjonOgOmsorgGrid.validate = (values: FormValues, sokerPersonnummer: string) => ({
  ...OppholdINorgePapirsoknadIndex.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(values[OMSORG_FORM_NAME_PREFIX], values.rettigheter, values.foedselsDato),
  [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
});

export default RegistreringAdopsjonOgOmsorgGrid;
