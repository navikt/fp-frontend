import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import {
  type FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  isNotEqual,
} from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fødsel, FødselGjeldende } from '@navikt/fp-types';
import type { BekreftTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import {
  maxTerminbekreftelseDato,
  minTerminbekreftelseDato,
  terminBekreftelseBeforeTodayOrTermindato,
  useMellomlagretFormData,
  usePanelDataContext,
  validateMaxAntallBarn,
  validateMinAntallBarn,
} from '@navikt/fp-utils';

import { Termindato, type TermindatoFormValues } from '../form/Termindato';

import styles from './sjekkTerminbekreftelseForm.module.css';

type FormValues = {
  utstedtdato?: string;
  antallBarn?: number;
} & TermindatoFormValues &
  FaktaBegrunnelseFormValues;

interface Props {
  submittable: boolean;
  aksjonspunkt: Aksjonspunkt;
  fødsel: Fødsel;
}

export const SjekkTerminbekreftelseForm = ({ fødsel: { gjeldende, søknad }, submittable, aksjonspunkt }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<BekreftTerminbekreftelseAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues(gjeldende, aksjonspunkt),
  });

  const termindato = formMethods.watch('termindato');
  const utstedtdato = formMethods.watch('utstedtdato');
  const begrunnelse = formMethods.watch('begrunnelse');

  const isForTidligTerminbekreftelse = erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato);

  return (
    <FaktaKort
      label={intl.formatMessage({ id: 'SjekkTerminbekreftelseForm.Tittel' })}
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.TERMINBEKREFTELSE]}
    >
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="4">
          <HStack gap="4">
            <Termindato
              isReadOnly={isReadOnly}
              isEdited={isNotEqual(søknad.termindato, gjeldende.termin?.termindato)}
            />
            <Datepicker
              name="utstedtdato"
              size="medium"
              label={intl.formatMessage({ id: 'Label.Utstedtdato' })}
              validate={[required, hasValidDate, validerTerminBekreftelse(formMethods.getValues)]}
              isReadOnly={isReadOnly}
              fromDate={minTerminbekreftelseDato().toDate()}
              toDate={maxTerminbekreftelseDato().toDate()}
              isEdited={isNotEqual(søknad.utstedtdato, gjeldende.utstedtdato?.utstedtdato)}
              defaultMonth={new Date()}
            />
            <InputField
              name="antallBarn"
              size="medium"
              label={intl.formatMessage({ id: 'Label.AntallBarn' })}
              parse={value => {
                const parsedValue = parseInt(value.toString(), 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
              validate={[required, hasValidInteger, validateMinAntallBarn, validateMaxAntallBarn]}
              readOnly={isReadOnly}
              className={styles.bredde}
              isEdited={isNotEqual(søknad.antallBarn, gjeldende.termin?.antallBarn)}
            />
          </HStack>

          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
            size="medium"
            hasVurderingText
          />

          {isForTidligTerminbekreftelse && (
            <Alert variant="warning">
              <FormattedMessage id="SjekkTerminbekreftelseForm.AdvarselForTidligUtstedtdato" />
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
    </FaktaKort>
  );
};

const initialValues = (gjeldende: FødselGjeldende, aksjonspunkt: Aksjonspunkt): FormValues => ({
  utstedtdato: gjeldende.utstedtdato?.utstedtdato,
  termindato: gjeldende.termin?.termindato,
  antallBarn: gjeldende.termin?.antallBarn,
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): BekreftTerminbekreftelseAp => ({
  kode: AksjonspunktKode.TERMINBEKREFTELSE,
  utstedtdato: values.utstedtdato!,
  termindato: values.termindato!,
  antallBarn: values.antallBarn!,
  ...FaktaBegrunnelseTextField.transformValues(values),
});

const erTerminbekreftelseUtstedtForTidlig = (utstedtdato?: string, termindato?: string): boolean =>
  !!utstedtdato &&
  !!termindato &&
  !dayjs(utstedtdato).isAfter(dayjs(termindato).subtract(18, 'weeks').subtract(4, 'days'));

const validerTerminBekreftelse = (getValues: UseFormGetValues<FormValues>) => (terminbekreftelseDato: string) => {
  const termindato = getValues('termindato');
  return terminBekreftelseBeforeTodayOrTermindato(termindato, terminbekreftelseDato);
};
