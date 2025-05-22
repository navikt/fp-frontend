import { HStack, VStack } from '@navikt/ds-react';
import { Datepicker, InputField, SelectField } from '@navikt/ft-form-hooks';
import {
  hasValidDate,
  hasValidFodselsnummer,
  hasValidName,
  hasValidOrgNumber,
  required,
} from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import { VergeType } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn, OpprettVergeParams, Verge } from '@navikt/fp-types';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type VergeFormValues = {
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
};

interface Props {
  readOnly: boolean;
  vergetyper: KodeverkMedNavn<'VergeType'>[];
  valgtVergeType: string | undefined;
}

/**
 * RegistrereVergeFaktaForm
 *
 * Formkomponent. Registrering og oppdatering av verge.
 */
export const RegistrereVergeForm = ({ readOnly, vergetyper = [], valgtVergeType }: Props) => (
  <VStack gap="4">
    <SelectField
      name="vergeType"
      label={intl.formatMessage({ id: 'Verge.TypeVerge' })}
      validate={[required]}
      selectValues={vergetyper.map(vt => (
        <option key={vt.kode} value={vt.kode}>
          {vt.navn}
        </option>
      ))}
      readOnly={readOnly}
    />
    {valgtVergeType && (
      <>
        <HStack gap="4">
          <InputField
            name="navn"
            label={intl.formatMessage({ id: 'Verge.Navn' })}
            validate={[required, hasValidName]}
            readOnly={readOnly}
          />
          {valgtVergeType === VergeType.ADVOKAT ? (
            <InputField
              name="organisasjonsnummer"
              label={intl.formatMessage({ id: 'Verge.Organisasjonsnummer' })}
              validate={[required, hasValidOrgNumber]}
              readOnly={readOnly}
            />
          ) : (
            <InputField
              name="fnr"
              label={intl.formatMessage({ id: 'Verge.FodselsNummer' })}
              validate={[required, hasValidFodselsnummer]}
              readOnly={readOnly}
            />
          )}
        </HStack>
        <HStack gap="4">
          <Datepicker
            name="gyldigFom"
            label={intl.formatMessage({ id: 'Verge.PeriodeFOM' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
          />
          <Datepicker
            name="gyldigTom"
            label={intl.formatMessage({ id: 'Verge.PeriodeTOM' })}
            validate={[hasValidDate]}
            isReadOnly={readOnly}
          />
        </HStack>
      </>
    )}
  </VStack>
);

RegistrereVergeForm.buildInitialValues = (verge: Verge | undefined): VergeFormValues => ({
  ...verge,
  gyldigTom: verge?.gyldigTom ?? undefined,
});

RegistrereVergeForm.transformValues = (values: VergeFormValues): OpprettVergeParams => ({
  vergeType: values.vergeType!,
  navn: values.navn!,
  gyldigFom: values.gyldigFom!,
  gyldigTom: values.gyldigTom,
  ...(values.vergeType === VergeType.ADVOKAT
    ? { organisasjonsnummer: values.organisasjonsnummer! }
    : { fnr: values.fnr! }),
});
