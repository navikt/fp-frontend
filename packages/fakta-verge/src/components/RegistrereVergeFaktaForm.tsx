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
} from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import vergeType from '../kodeverk/vergeType';

interface OwnProps {
  readOnly: boolean;
  vergetyper?: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  valgtVergeType?: string;
}

interface StaticFunctions {
  buildInitialValues: (verge: any) => {
    navn: string,
    gyldigFom: string,
    gyldigTom: string,
    fnr: string,
    organisasjonsnummer: string,
    vergeType?: string,
  },
  transformValues: (values: any) => {
    vergeType: string,
    navn: string,
    fnr: string,
    organisasjonsnummer: string,
    gyldigFom: string,
    gyldigTom: string,
    kode: string,
  },
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
    <div>
      <Row>
        <Column xs="5">
          <SelectField
            name="vergeType"
            label={intl.formatMessage({ id: 'Verge.TypeVerge' })}
            placeholder={intl.formatMessage({ id: 'Verge.TypeVerge' })}
            validate={[required]}
            selectValues={vergetyper.map((vt: any) => <option key={vt.kode} value={vt.kode}>{vt.navn}</option>)}
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
                label={{ id: 'Verge.Navn' }}
                validate={[required, hasValidName]}
                readOnly={readOnly}
              />
            </Column>
            <Column xs="3">
              {valgtVergeType !== vergeType.ADVOKAT && (
                <InputField
                  bredde="S"
                  name="fnr"
                  label={{ id: 'Verge.FodselsNummer' }}
                  validate={[required, hasValidFodselsnummer]}
                  readOnly={readOnly}
                />
              )}
              {valgtVergeType === vergeType.ADVOKAT && (
                <InputField
                  bredde="S"
                  name="organisasjonsnummer"
                  label={{ id: 'Verge.Organisasjonsnummer' }}
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
                  label={{ id: 'Verge.PeriodeFOM' }}
                  validate={[required, hasValidDate]}
                  readOnly={readOnly}
                />
              </FlexColumn>
              <FlexColumn>
                <DatepickerField
                  name="gyldigTom"
                  label={{ id: 'Verge.PeriodeTOM' }}
                  validate={[hasValidDate]}
                  readOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </div>
  </FaktaGruppe>
);

RegistrereVergeFaktaForm.defaultProps = {
  vergetyper: [],
  valgtVergeType: undefined,
};

RegistrereVergeFaktaForm.buildInitialValues = (verge: any) => ({
  navn: verge.navn,
  gyldigFom: verge.gyldigFom,
  gyldigTom: verge.gyldigTom,
  fnr: verge.fnr,
  organisasjonsnummer: verge.organisasjonsnummer,
  vergeType: verge.vergeType ? verge.vergeType.kode : undefined,
});

RegistrereVergeFaktaForm.transformValues = (values: any) => ({
  vergeType: values.vergeType,
  navn: values.navn,
  fnr: values.fnr,
  organisasjonsnummer: values.organisasjonsnummer,
  gyldigFom: values.gyldigFom,
  gyldigTom: values.gyldigTom,
  kode: aksjonspunktCodes.AVKLAR_VERGE,
});

export default RegistrereVergeFaktaForm;
