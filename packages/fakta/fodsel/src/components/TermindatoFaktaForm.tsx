import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { Datepicker, InputField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { DateLabel, FaktaGruppe } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { FaktaBegrunnelseTextField, isFieldEdited } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, FamilieHendelse, Soknad } from '@navikt/fp-types';
import type { BekreftTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './termindatoFaktaForm.module.css';

const minValue1 = minValue(1);
const maxValue9 = maxValue(9);

const erTerminbekreftelseUtstedtForTidlig = (utstedtdato?: string, termindato?: string): boolean =>
  !!utstedtdato &&
  !!termindato &&
  !dayjs(utstedtdato).isAfter(dayjs(termindato).subtract(18, 'weeks').subtract(4, 'days'));

export type FormValues = {
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
  begrunnelse?: string;
};

interface Props {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  readOnly: boolean;
  submittable: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * TermindatoFaktaForm
 *
 * Setter opp aksjonspunktet for avklaring av termindato (Fødselsvilkåret).
 */
export const TermindatoFaktaForm = ({
  readOnly,
  soknad,
  gjeldendeFamiliehendelse,
  submittable,
  alleMerknaderFraBeslutter,
}: Props) => {
  const intl = useIntl();
  const editedStatus = isFieldEdited(soknad, gjeldendeFamiliehendelse);

  const { watch } = useFormContext<FormValues>();

  const termindato = watch('termindato');
  const utstedtdato = watch('utstedtdato');
  const begrunnelse = watch('begrunnelse');
  const isForTidligTerminbekreftelse = erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato);

  const { avklartBarn } = gjeldendeFamiliehendelse;
  const fodselsdatoTps = avklartBarn && avklartBarn.length > 0 ? avklartBarn[0].fodselsdato : undefined;
  const antallBarnTps = avklartBarn ? avklartBarn.length : 0;
  const isOverridden = gjeldendeFamiliehendelse.erOverstyrt || false;

  return (
    <>
      <FaktaGruppe
        title={intl.formatMessage({ id: 'TermindatoFaktaForm.ApplicationInformation' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.TERMINBEKREFTELSE]}
      >
        <HStack gap="4">
          <Datepicker
            name="utstedtdato"
            label={intl.formatMessage({ id: 'TermindatoFaktaForm.UtstedtDato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
            isEdited={editedStatus.utstedtdato}
          />
          <Datepicker
            name="termindato"
            label={intl.formatMessage({ id: 'TermindatoFaktaForm.Termindato' })}
            validate={[required, hasValidDate]}
            isReadOnly={readOnly}
            isEdited={editedStatus.termindato}
          />
          <InputField
            name="antallBarn"
            label={intl.formatMessage({ id: 'TermindatoFaktaForm.AntallBarn' })}
            parse={value => {
              const parsedValue = parseInt(value.toString(), 10);
              return Number.isNaN(parsedValue) ? value : parsedValue;
            }}
            validate={[required, hasValidInteger, minValue1, maxValue9]}
            readOnly={readOnly}
            className={styles.bredde}
            isEdited={editedStatus.antallBarn}
          />
        </HStack>
      </FaktaGruppe>
      <VStack gap="4">
        {fodselsdatoTps && !isOverridden && (
          <FaktaGruppe title={intl.formatMessage({ id: 'TermindatoFaktaForm.OpplysningerTPS' })}>
            <HStack gap="10">
              <VStack gap="2">
                <Label size="small">
                  <FormattedMessage id="TermindatoFaktaForm.FodselsdatoTps" />
                </Label>
                <BodyShort size="small">
                  <DateLabel dateString={fodselsdatoTps} />
                </BodyShort>
              </VStack>
              <VStack gap="2">
                <Label size="small">
                  <FormattedMessage id="TermindatoFaktaForm.AntallBarnTps" />
                </Label>
                <BodyShort size="small">{antallBarnTps}</BodyShort>
              </VStack>
            </HStack>
          </FaktaGruppe>
        )}
        <FaktaBegrunnelseTextField isSubmittable={submittable} isReadOnly={readOnly} hasBegrunnelse={!!begrunnelse} />
        {isForTidligTerminbekreftelse && (
          <Alert variant="warning" className={styles.marginBottom}>
            <FormattedMessage id="TermindatoFaktaForm.AdvarselForTidligUtstedtdato" />
          </Alert>
        )}
      </VStack>
    </>
  );
};

TermindatoFaktaForm.buildInitialValues = (
  soknad: Soknad,
  familiehendelse: FamilieHendelse,
  aksjonspunkt: Aksjonspunkt,
): FormValues => {
  const antallBarn = soknad.antallBarn ? soknad.antallBarn : NaN;
  const soknadUtstedtdato = soknad.utstedtdato ?? undefined;
  return {
    utstedtdato: familiehendelse.utstedtdato ?? soknadUtstedtdato,
    termindato: familiehendelse.termindato ?? soknad.termindato,
    antallBarn: familiehendelse.antallBarnTermin ?? antallBarn,
    ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
  };
};

TermindatoFaktaForm.transformValues = (values: FormValues): BekreftTerminbekreftelseAp => ({
  kode: AksjonspunktKode.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato!,
  termindato: values.termindato!,
  antallBarn: values.antallBarn!,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
