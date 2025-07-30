import { useFormContext } from 'react-hook-form';

import { HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import {
  hasValidDate,
  hasValidFodselsnummer,
  hasValidName,
  hasValidOrgNumber,
  required,
} from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import type { FaktaBegrunnelseFormValues } from '@navikt/fp-fakta-felles';
import type {
  KodeverkMedNavn,
  KodeverkMedNavnTilbakekreving,
  OpprettVergeParams,
  Verge,
  VergeType,
} from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export type VergeFormValues = {
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType: VergeType;
};

interface Props {
  readOnly: boolean;
  vergetyper: KodeverkMedNavn<'VergeType'>[] | KodeverkMedNavnTilbakekreving<'VergeType'>[];
  valgtVergeType: VergeType | undefined;
}

/**
 * RegistrereVergeFaktaForm
 *
 * Formkomponent. Registrering og oppdatering av verge.
 */
export const RegistrereVergeForm = ({ readOnly, vergetyper = [], valgtVergeType }: Props) => {
  const { control } = useFormContext<VergeFormValues & FaktaBegrunnelseFormValues>();
  return (
    <VStack gap="4">
      <RhfSelect
        name="vergeType"
        control={control}
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
            <RhfTextField
              name="navn"
              control={control}
              label={intl.formatMessage({ id: 'Verge.Navn' })}
              validate={[required, hasValidName]}
              readOnly={readOnly}
            />
            {valgtVergeType === 'ADVOKAT' ? (
              <RhfTextField
                name="organisasjonsnummer"
                control={control}
                label={intl.formatMessage({ id: 'Verge.Organisasjonsnummer' })}
                validate={[required, hasValidOrgNumber]}
                readOnly={readOnly}
              />
            ) : (
              <RhfTextField
                name="fnr"
                control={control}
                label={intl.formatMessage({ id: 'Verge.FodselsNummer' })}
                validate={[required, hasValidFodselsnummer]}
                readOnly={readOnly}
              />
            )}
          </HStack>
          <HStack gap="4">
            <RhfDatepicker
              name="gyldigFom"
              control={control}
              label={intl.formatMessage({ id: 'Verge.PeriodeFOM' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
            />
            <RhfDatepicker
              name="gyldigTom"
              control={control}
              label={intl.formatMessage({ id: 'Verge.PeriodeTOM' })}
              validate={[hasValidDate]}
              isReadOnly={readOnly}
            />
          </HStack>
        </>
      )}
    </VStack>
  );
};

RegistrereVergeForm.buildInitialValues = (verge: Verge): VergeFormValues => ({
  ...verge,
  gyldigTom: verge?.gyldigTom ?? undefined,
});

RegistrereVergeForm.transformValues = (values: VergeFormValues): OpprettVergeParams => ({
  vergeType: values.vergeType,
  navn: values.navn,
  gyldigFom: values.gyldigFom,
  gyldigTom: values.gyldigTom,
  ...(values.vergeType === 'ADVOKAT'
    ? { organisasjonsnummer: notEmpty(values.organisasjonsnummer) }
    : { fnr: notEmpty(values.fnr) }),
});
