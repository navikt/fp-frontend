import { useIntl } from 'react-intl';

import { Datepicker, InputField, SelectField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidFodselsnummer, hasValidName, required } from '@navikt/ft-form-validators';
import { FaktaGruppe, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, VergeType } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn, Verge } from '@navikt/fp-types';

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
  gyldigTom?: string;
  kode: AksjonspunktKode.AVKLAR_VERGE;
};

interface Props {
  readOnly: boolean;
  vergetyper?: KodeverkMedNavn[];
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  valgtVergeType?: string;
}

/**
 * RegistrereVergeFaktaForm
 *
 * Formkomponent. Registrering og oppdatering av verge.
 */
export const RegistrereVergeFaktaForm = ({
  readOnly,
  vergetyper = [],
  alleMerknaderFraBeslutter,
  valgtVergeType,
}: Props) => {
  const intl = useIntl();
  return (
    <FaktaGruppe merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.AVKLAR_VERGE]}>
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
  vergeType: values.vergeType!,
  navn: values.navn!,
  fnr: values.fnr!,
  organisasjonsnummer: values.organisasjonsnummer!,
  gyldigFom: values.gyldigFom!,
  gyldigTom: values.gyldigTom,
  kode: AksjonspunktKode.AVKLAR_VERGE,
});
