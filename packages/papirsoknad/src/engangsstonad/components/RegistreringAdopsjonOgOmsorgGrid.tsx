import React, { FunctionComponent } from 'react';
import { FormSection } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';
import OppholdINorgePapirsoknadIndex, { FormValues as OppholdFormValues } from '@fpsak-frontend/papirsoknad-panel-opphold-i-norge';
import SprakPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-sprak';
import RettigheterPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-rettigheter';
import OmsorgOgAdopsjonPapirsoknadIndex, { FormValues as OmsorgOgAdopsjonFormValues } from '@fpsak-frontend/papirsoknad-panel-omsorg-og-adopsjon';
import AnnenForelderPapirsoknadIndex, { AnnenForelderFormValues } from '@fpsak-frontend/papirsoknad-panel-annen-forelder';

const ANNEN_FORELDER_FORM_NAME_PREFIX = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

interface OwnProps {
  form: string;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

export type FormValues = {
  rettigheter?: string;
  foedselsDato?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & OppholdFormValues;

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  validate: (values: FormValues, sokerPersonnummer: string, familieHendelseType: string) => any;
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
      <SprakPapirsoknadIndex readOnly={readOnly} />
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

RegistreringAdopsjonOgOmsorgGrid.validate = (values, sokerPersonnummer, familieHendelseType): any => ({
  ...OppholdINorgePapirsoknadIndex.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(familieHendelseType, values.foedselsDato, values[OMSORG_FORM_NAME_PREFIX]),
  [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
});

export default RegistreringAdopsjonOgOmsorgGrid;
