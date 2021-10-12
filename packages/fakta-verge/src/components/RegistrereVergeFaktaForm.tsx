import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { WrappedComponentProps } from 'react-intl';

import {
  hasValidDate, hasValidFodselsnummer, hasValidName, required,
} from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import {
  DatepickerField, InputField, SelectField,
} from '@fpsak-frontend/form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KodeverkMedNavn, Verge } from '@fpsak-frontend/types';

import VergeType from '../kodeverk/vergeType';

export type FormValues = {
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
}

export type TransformedValues = {
  vergeType: string,
  navn: string,
  fnr: string,
  organisasjonsnummer: string,
  gyldigFom: string,
  gyldigTom: string,
  kode: aksjonspunktCodes.AVKLAR_VERGE,
}

interface OwnProps {
  readOnly: boolean;
  vergetyper?: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  valgtVergeType?: string;
}

interface StaticFunctions {
  buildInitialValues: (verge: Verge) => FormValues;
  transformValues: (values: FormValues) => TransformedValues;
}

/**
 * RegistrereVergeFaktaForm
 *
 * Formkomponent. Registrering og oppdatering av verge.
 */
export const RegistrereVergeFaktaForm: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunctions = ({
  intl,
  readOnly,
  vergetyper,
  alleMerknaderFraBeslutter,
  valgtVergeType,
}) => (
  <FaktaGruppe merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_VERGE]}>
    <Row>
      <Column xs="5">
        <SelectField
          name="vergeType"
          label={intl.formatMessage({ id: 'Verge.TypeVerge' })}
          placeholder={intl.formatMessage({ id: 'Verge.TypeVerge' })}
          validate={[required]}
          selectValues={vergetyper.map((vt) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
          readOnly={readOnly}
        />
      </Column>
    </Row>
    {valgtVergeType && (
      <>
        <VerticalSpacer eightPx />
        <Row>
          <Column xs="3">
            <InputField
              bredde="XXL"
              name="navn"
              label={intl.formatMessage({ id: 'Verge.Navn' })}
              validate={[required, hasValidName]}
              readOnly={readOnly}
            />
          </Column>
          <Column xs="3">
            {valgtVergeType !== VergeType.ADVOKAT && (
              <InputField
                bredde="S"
                name="fnr"
                label={intl.formatMessage({ id: 'Verge.FodselsNummer' })}
                validate={[required, hasValidFodselsnummer]}
                readOnly={readOnly}
              />
            )}
            {valgtVergeType === VergeType.ADVOKAT && (
              <InputField
                bredde="S"
                name="organisasjonsnummer"
                label={intl.formatMessage({ id: 'Verge.Organisasjonsnummer' })}
                validate={[required]}
                readOnly={readOnly}
              />
            )}
          </Column>
        </Row>
        <VerticalSpacer eightPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <DatepickerField
                name="gyldigFom"
                label={intl.formatMessage({ id: 'Verge.PeriodeFOM' })}
                validate={[required, hasValidDate]}
                readOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <DatepickerField
                name="gyldigTom"
                label={intl.formatMessage({ id: 'Verge.PeriodeTOM' })}
                validate={[hasValidDate]}
                readOnly={readOnly}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </>
    )}
  </FaktaGruppe>
);

RegistrereVergeFaktaForm.defaultProps = {
  vergetyper: [],
};

RegistrereVergeFaktaForm.buildInitialValues = (verge: Verge): FormValues => ({
  navn: verge.navn,
  gyldigFom: verge.gyldigFom,
  gyldigTom: verge.gyldigTom,
  fnr: verge.fnr,
  organisasjonsnummer: verge.organisasjonsnummer,
  vergeType: verge.vergeType ? verge.vergeType.kode : undefined,
});

RegistrereVergeFaktaForm.transformValues = (values: FormValues): TransformedValues => ({
  vergeType: values.vergeType,
  navn: values.navn,
  fnr: values.fnr,
  organisasjonsnummer: values.organisasjonsnummer,
  gyldigFom: values.gyldigFom,
  gyldigTom: values.gyldigTom,
  kode: aksjonspunktCodes.AVKLAR_VERGE,
});

export default RegistrereVergeFaktaForm;
