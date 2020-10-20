import React, { FunctionComponent } from 'react';
import { FormSection } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import OppholdINorgePapirsoknadIndex, { FormValues as OppholdFormValues } from '@fpsak-frontend/papirsoknad-panel-opphold-i-norge';
import TilleggsopplysningerPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-tilleggsopplysninger';
import RettigheterPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-rettigheter';
import OmsorgOgAdopsjonPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-omsorg-og-adopsjon';
import AnnenForelderPapirsoknadIndex from '@fpsak-frontend/papirsoknad-panel-annen-forelder';

/*
 * RegistreringFodselForm
 *
 * Form som brukes for registrering av fodsel.
 */
const annenForelderFormNamePrefix = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

interface OwnProps {
  form: string;
  readOnly?: boolean;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const RegistreringFodselGrid: FunctionComponent<OwnProps> = ({
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
      <TilleggsopplysningerPapirsoknadIndex readOnly={readOnly} />
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
      <TerminFodselDatoPanel readOnly={readOnly} form={form} />
      <FormSection name={annenForelderFormNamePrefix}>
        <AnnenForelderPapirsoknadIndex
          soknadData={soknadData}
          namePrefix={annenForelderFormNamePrefix}
          form={form}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      </FormSection>
    </Column>
  </Row>
);

RegistreringFodselGrid.defaultProps = {
  readOnly: true,
};

RegistreringFodselGrid.initialValues = {
  ...OppholdINorgePapirsoknadIndex.buildInitialValues(),
  [OMSORG_FORM_NAME_PREFIX]: {},
};

type FormValues = {
  rettigheter: {};
  foedselsData: {};
}

RegistreringFodselGrid.validate = (values: FormValues, sokerPersonnummer: any) => ({
  ...OppholdINorgePapirsoknadIndex.validate(values),
  ...TerminFodselDatoPanel.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPapirsoknadIndex.validate(values[OMSORG_FORM_NAME_PREFIX], values.rettigheter, values.foedselsDato),
  [annenForelderFormNamePrefix]: AnnenForelderPapirsoknadIndex.validate(sokerPersonnummer, values[annenForelderFormNamePrefix]),
});

export default RegistreringFodselGrid;
