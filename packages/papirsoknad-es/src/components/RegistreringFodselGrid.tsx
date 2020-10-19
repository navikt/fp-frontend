import React from 'react';
import { FormSection } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import {
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"../../../../node_modules/@fpsak-frontend/... Remove this comment to see the full error message
  SoknadData, OppholdINorgePanel, RettigheterPanel, TilleggsopplysningerPanel, AnnenForelderPanel, OmsorgOgAdopsjonPanel, TerminFodselDatoPanel,
} from '@fpsak-frontend/papirsoknad-felles';

/*
 * RegistreringFodselForm
 *
 * Form som brukes for registrering av fodsel.
 *
 */
const annenForelderFormNamePrefix = 'annenForelder';
const OMSORG_FORM_NAME_PREFIX = 'omsorg';

type OwnProps = {
    form: string;
    readOnly?: boolean;
    soknadData: any; // TODO: PropTypes.instanceOf(SoknadData)
    alleKodeverk: {};
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof RegistreringFodselGrid.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'RegistreringFodselGrid' implicitly has type 'any'... Remove this comment to see the full error message
const RegistreringFodselGrid = ({
  readOnly, form, soknadData, alleKodeverk,
}: Props) => (
  <Row>
    <Column xs="6">
      { soknadData.getForeldreType() !== foreldreType.MOR
        && <RettigheterPanel readOnly={readOnly} soknadData={soknadData} />}
      <OppholdINorgePanel form={form} readOnly={readOnly} soknadData={soknadData} alleKodeverk={alleKodeverk} />
      <TilleggsopplysningerPanel readOnly={readOnly} />
    </Column>
    <Column xs="6">
      { soknadData.getForeldreType() !== foreldreType.MOR
        && (
        <FormSection name={OMSORG_FORM_NAME_PREFIX}>
          <OmsorgOgAdopsjonPanel
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
        <AnnenForelderPanel
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
  ...OppholdINorgePanel.initialValues,
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPanel.initialValues,
};

RegistreringFodselGrid.validate = (values: any, sokerPersonnummer: any) => ({
  ...OppholdINorgePanel.validate(values),
  ...TerminFodselDatoPanel.validate(values),
  [OMSORG_FORM_NAME_PREFIX]: OmsorgOgAdopsjonPanel.validate(values[OMSORG_FORM_NAME_PREFIX], values.rettigheter, values.foedselsDato),
  [annenForelderFormNamePrefix]: AnnenForelderPanel.validate(sokerPersonnummer, values[annenForelderFormNamePrefix]),
});

export default RegistreringFodselGrid;
