import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, VStack } from '@navikt/ds-react';
import { Datepicker, Form, NumberField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  dateBeforeOrEqual,
  hasValidDate,
  hasValidInteger,
  required,
} from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import {
  type FaktaBegrunnelseFormValues,
  FaktaBegrunnelseTextField,
  FaktaSubmitButton,
  isNotEqual,
} from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fødsel, FødselGjeldende, FødselSøknad } from '@navikt/fp-types';
import type { BekreftTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import {
  maxTerminbekreftelseDato,
  maxTermindato,
  minTerminbekreftelseDato,
  minTermindato,
  terminBekreftelseBeforeTodayOrTermindato,
  useMellomlagretFormData,
  usePanelDataContext,
  validateMaxAntallBarn,
  validateMinAntallBarn,
} from '@navikt/fp-utils';

import styles from './termindatoFaktaForm.module.css';

type FormValues = {
  utstedtdato?: string;
  termindato?: string;
  antallBarn?: number;
} & FaktaBegrunnelseFormValues;

interface Props {
  submittable: boolean;
  aksjonspunkt: Aksjonspunkt;
  fødsel: Fødsel;
}

export const TermindatoFaktaForm = ({ fødsel: { gjeldende, søknad }, submittable, aksjonspunkt }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext<BekreftTerminbekreftelseAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(søknad, gjeldende, aksjonspunkt),
  });

  const termindato = formMethods.watch('termindato');
  const utstedtdato = formMethods.watch('utstedtdato');
  const begrunnelse = formMethods.watch('begrunnelse');

  const isForTidligTerminbekreftelse = erTerminbekreftelseUtstedtForTidlig(utstedtdato, termindato);

  return (
    <FaktaKort
      label={intl.formatMessage({ id: 'TermindatoFaktaForm.Tittel' })}
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
              name="termindato"
              label={intl.formatMessage({ id: 'Label.Termindato' })}
              validate={[required, hasValidDate, dateAfterOrEqual(minTermindato()), dateBeforeOrEqual(maxTermindato())]}
              fromDate={minTermindato().toDate()}
              toDate={maxTermindato().toDate()}
              isReadOnly={isReadOnly}
              isEdited={isNotEqual(søknad.termindato, gjeldende.termindato?.termindato)}
            />
            <Datepicker
              name="utstedtdato"
              label={intl.formatMessage({ id: 'Label.Utstedtdato' })}
              validate={[required, hasValidDate, validerTerminBekreftelse(formMethods.getValues)]}
              isReadOnly={isReadOnly}
              fromDate={minTerminbekreftelseDato().toDate()}
              toDate={maxTerminbekreftelseDato().toDate()}
              isEdited={isNotEqual(søknad.utstedtdato, gjeldende.utstedtdato?.utstedtdato)}
            />
            <NumberField
              name="antallBarn"
              label={intl.formatMessage({ id: 'Label.AntallBarn' })}
              validate={[required, hasValidInteger, validateMinAntallBarn, validateMaxAntallBarn]}
              readOnly={isReadOnly}
              className={styles.bredde}
              isEdited={isNotEqual(søknad.antallBarn, gjeldende.antallBarn)}
            />
          </HStack>

          <FaktaBegrunnelseTextField
            isSubmittable={submittable}
            isReadOnly={isReadOnly}
            hasBegrunnelse={!!begrunnelse}
            hasVurderingText
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
    </FaktaKort>
  );
};

const buildInitialValues = (
  søknad: FødselSøknad,
  gjeldende: FødselGjeldende,
  aksjonspunkt: Aksjonspunkt,
): FormValues => ({
  utstedtdato: gjeldende.utstedtdato?.utstedtdato ?? søknad.utstedtdato ?? undefined,
  termindato: gjeldende.termindato?.termindato ?? søknad.termindato ?? undefined,
  antallBarn: gjeldende.antallBarn ?? søknad.antallBarn,
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
