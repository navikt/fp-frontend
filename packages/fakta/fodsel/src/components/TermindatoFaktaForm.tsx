import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, maxValue, minValue, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton, isFieldEdited } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, FamilieHendelse, Soknad } from '@navikt/fp-types';
import type { BekreftTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

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
} & FaktaBegrunnelseFormValues;

interface Props {
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  submittable: boolean;
  aksjonspunkt: Aksjonspunkt;
}

/**
 * TermindatoFaktaForm
 *
 * Setter opp aksjonspunktet for avklaring av termindato (Fødselsvilkåret).
 */
export const TermindatoFaktaForm = ({ soknad, gjeldendeFamiliehendelse, submittable, aksjonspunkt }: Props) => {
  const intl = useIntl();
  const editedStatus = isFieldEdited(soknad, gjeldendeFamiliehendelse);

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<BekreftTerminbekreftelseAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(soknad, gjeldendeFamiliehendelse, aksjonspunkt),
  });

  const termindato = formMethods.watch('termindato');
  const utstedtdato = formMethods.watch('utstedtdato');
  const begrunnelse = formMethods.watch('begrunnelse');

  const isForTidligTerminbekreftelse = erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato);

  return (
    <FaktaGruppe
      title={intl.formatMessage({ id: 'TermindatoFaktaForm.ApplicationInformation' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.TERMINBEKREFTELSE]}
    >
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="2">
          <HStack gap="4">
            <Datepicker
              name="utstedtdato"
              label={intl.formatMessage({ id: 'TermindatoFaktaForm.UtstedtDato' })}
              validate={[required, hasValidDate]}
              isReadOnly={isReadOnly}
              isEdited={editedStatus.utstedtdato}
            />
            <Datepicker
              name="termindato"
              label={intl.formatMessage({ id: 'TermindatoFaktaForm.Termindato' })}
              validate={[required, hasValidDate]}
              isReadOnly={isReadOnly}
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
              readOnly={isReadOnly}
              className={styles.bredde}
              isEdited={editedStatus.antallBarn}
            />
          </HStack>

          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
          />
          {isForTidligTerminbekreftelse && (
            <Alert variant="warning" className={styles.marginBottom}>
              <FormattedMessage id="TermindatoFaktaForm.AdvarselForTidligUtstedtdato" />
            </Alert>
          )}

          {aksjonspunkt && !isReadOnly && (
            <FaktaSubmitButton
              isSubmittable={submittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </Form>
    </FaktaGruppe>
  );
};

const buildInitialValues = (
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

const transformValues = (values: FormValues): BekreftTerminbekreftelseAp => ({
  kode: AksjonspunktKode.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato!,
  termindato: values.termindato!,
  antallBarn: values.antallBarn!,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
