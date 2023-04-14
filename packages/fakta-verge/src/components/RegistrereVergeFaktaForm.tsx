import React, { FunctionComponent } from 'react';
import { WrappedComponentProps } from 'react-intl';

import { hasValidDate, hasValidFodselsnummer, hasValidName, required } from '@navikt/ft-form-validators';
import { VerticalSpacer, FaktaGruppe, FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { Datepicker, InputField, SelectField } from '@navikt/ft-form-hooks';
import { AksjonspunktCode, VergeType } from '@navikt/fp-kodeverk';
import { KodeverkMedNavn, Verge } from '@navikt/fp-types';

import styles from './registrereVergeFaktaForm.module.css';

export type FormValues = {
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
};

export type TransformedValues = {
  vergeType: string;
  navn: string;
  fnr: string;
  organisasjonsnummer: string;
  gyldigFom: string;
  gyldigTom: string;
  kode: AksjonspunktCode.AVKLAR_VERGE;
};

interface OwnProps {
  readOnly: boolean;
  vergetyper?: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
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
const RegistrereVergeFaktaForm: FunctionComponent<OwnProps & WrappedComponentProps> & StaticFunctions = ({
  intl,
  readOnly,
  vergetyper,
  alleMerknaderFraBeslutter,
  valgtVergeType,
}) => (
  <FaktaGruppe merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktCode.AVKLAR_VERGE]}>
    <SelectField
      name="vergeType"
      className={styles.selectWidth}
      label={intl.formatMessage({ id: 'Verge.TypeVerge' })}
      validate={[required]}
      selectValues={vergetyper.map(vt => (
        <option key={vt.kode} value={vt.kode}>
          {vt.navn}
        </option>
      ))}
      readOnly={readOnly}
    />
    <FlexContainer>
      {valgtVergeType && (
        <>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn className={styles.leftCol}>
              <InputField
                name="navn"
                label={intl.formatMessage({ id: 'Verge.Navn' })}
                validate={[required, hasValidName]}
                readOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              {valgtVergeType !== VergeType.ADVOKAT && (
                <InputField
                  name="fnr"
                  label={intl.formatMessage({ id: 'Verge.FodselsNummer' })}
                  validate={[required, hasValidFodselsnummer]}
                  readOnly={readOnly}
                />
              )}
              {valgtVergeType === VergeType.ADVOKAT && (
                <InputField
                  name="organisasjonsnummer"
                  label={intl.formatMessage({ id: 'Verge.Organisasjonsnummer' })}
                  validate={[required]}
                  readOnly={readOnly}
                />
              )}
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <Datepicker
                name="gyldigFom"
                label={intl.formatMessage({ id: 'Verge.PeriodeFOM' })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <Datepicker
                name="gyldigTom"
                label={intl.formatMessage({ id: 'Verge.PeriodeTOM' })}
                validate={[hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
          </FlexRow>
        </>
      )}
    </FlexContainer>
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
  vergeType: verge.vergeType || undefined,
});

RegistrereVergeFaktaForm.transformValues = (values: FormValues): TransformedValues => ({
  vergeType: values.vergeType,
  navn: values.navn,
  fnr: values.fnr,
  organisasjonsnummer: values.organisasjonsnummer,
  gyldigFom: values.gyldigFom,
  gyldigTom: values.gyldigTom,
  kode: AksjonspunktCode.AVKLAR_VERGE,
});

export default RegistrereVergeFaktaForm;
