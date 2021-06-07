import React, { FunctionComponent } from 'react';
import { FormSection } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { AlleKodeverk } from '@fpsak-frontend/types';
import OppholdINorgePapirsoknadIndex, { FormValues as OppholdFormValues } from '@fpsak-frontend/papirsoknad-panel-opphold-i-norge';
import SprakPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-sprak';
import RettigheterPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-rettigheter';
import AnnenForelderPapirsoknadIndex, { AnnenForelderFormValues } from '@fpsak-frontend/papirsoknad-panel-annen-forelder';
import FodselPapirsoknadIndex, { FormValues as FodselFormValues } from '@fpsak-frontend/papirsoknad-panel-fodsel';
import OmsorgOgAdopsjonPapirsoknadIndex, { FormValues as OmsorgOgAdopsjonFormValues } from '@fpsak-frontend/papirsoknad-panel-omsorg-og-adopsjon';

/*
 * RegistreringFodselForm
 *
 * Form som brukes for registrering av fodsel.
 */
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
  foedselsData?: string;
  [OMSORG_FORM_NAME_PREFIX]?: OmsorgOgAdopsjonFormValues;
  [ANNEN_FORELDER_FORM_NAME_PREFIX]?: AnnenForelderFormValues;
} & OppholdFormValues & FodselFormValues;

interface StaticFunctions {
  buildInitialValues: () => FormValues;
  validate: (values: FormValues, sokerPersonnummer: string, familieHendelseType: string) => any;
}

const RegistreringFodselGrid: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  soknadData,
  alleKodeverk,
}) => (
  <Row>
    <Column xs="6">
      { soknadData.getForeldreType() !== foreldreType.MOR
        && <RettigheterPapirsoknadIndex readOnly={readOnly} soknadData={soknadData} />}
      <OppholdINorgePapirsoknadIndex form={form} readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <SprakPapirsoknadIndex readOnly={readOnly} />
    </Column>
    <Column xs="6">
      { soknadData.getForeldreType() !== foreldreType.MOR
        && (
        <FormSection name={OMSORG_FORM_NAME_PREFIX}>
          <OmsorgOgAdopsjonPapirsoknadIndex
            form={form}
            namePrefix={OMSORG_FORM_NAME_PREFIX}
            readOnly={readOnly}
            familieHendelseType={soknadData.getFamilieHendelseType()}
            isForeldrepengerFagsak={false}
          />
        </FormSection>
        )}
      <FodselPapirsoknadIndex readOnly={readOnly} form={form} />
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

RegistreringFodselGrid.buildInitialValues = () => ({
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
});

RegistreringFodselGrid.validate = (values, sokerPersonnummer, familieHendelseType) => ({
  ...OppholdINorgePapirsoknadIndex.validate(values),
  ...FodselPapirsoknadIndex.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(familieHendelseType, values.foedselsDato, values[OMSORG_FORM_NAME_PREFIX]),
  [ANNEN_FORELDER_FORM_NAME_PREFIX]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[ANNEN_FORELDER_FORM_NAME_PREFIX]),
});

export default RegistreringFodselGrid;
