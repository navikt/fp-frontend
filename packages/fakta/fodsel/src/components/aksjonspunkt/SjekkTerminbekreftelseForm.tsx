import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidInteger, required } from '@navikt/ft-form-validators';
import dayjs from 'dayjs';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Fødsel, FødselGjeldende } from '@navikt/fp-types';
import type { SjekkTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import {
  maxTerminbekreftelseDato,
  minTerminbekreftelseDato,
  notEmpty,
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
  aksjonspunkt: Aksjonspunkt;
  fødsel: Fødsel;
}

export const SjekkTerminbekreftelseForm = ({ fødsel: { gjeldende }, aksjonspunkt }: Props) => {
  const intl = useIntl();

  const { submitCallback, isSubmittable, alleMerknaderFraBeslutter, isReadOnly } =
    usePanelDataContext<SjekkTerminbekreftelseAp>();

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
      merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.SJEKK_TERMINBEKREFTELSE]}
    >
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values))}
        setDataOnUnmount={setMellomlagretFormData}
      >
        <VStack gap="space-16">
          <HStack gap="space-16">
            <Termindato isReadOnly={isReadOnly} isRequired />

            <RhfDatepicker
              control={formMethods.control}
              name="utstedtdato"
              size="medium"
              label={intl.formatMessage({ id: 'Label.Utstedtdato' })}
              validate={[required, hasValidDate, validerTerminBekreftelse(formMethods.getValues)]}
              readOnly={isReadOnly}
              fromDate={minTerminbekreftelseDato().toDate()}
              toDate={maxTerminbekreftelseDato().toDate()}
              defaultMonth={new Date()}
            />

            <RhfTextField
              control={formMethods.control}
              name="antallBarn"
              size="medium"
              label={intl.formatMessage({ id: 'Label.AntallBarn' })}
              parse={value => {
                const parsedValue = Number.parseInt(value.toString(), 10);
                return Number.isNaN(parsedValue) ? value : parsedValue;
              }}
              validate={[required, hasValidInteger, validateMinAntallBarn, validateMaxAntallBarn]}
              readOnly={isReadOnly}
              htmlSize={6}
              className={styles['rightAlign']}
            />
          </HStack>

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
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

          {!isReadOnly && (
            <FaktaSubmitButton
              isSubmittable={isSubmittable}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </RhfForm>
    </FaktaKort>
  );
};

const initialValues = (gjeldende: FødselGjeldende, aksjonspunkt: Aksjonspunkt): FormValues => ({
  utstedtdato: gjeldende.utstedtdato?.utstedtdato,
  antallBarn: gjeldende.antallBarn.antall,
  ...Termindato.initialValues(gjeldende),
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): SjekkTerminbekreftelseAp => ({
  kode: AksjonspunktKode.SJEKK_TERMINBEKREFTELSE,
  utstedtdato: notEmpty(values.utstedtdato, 'utstedtdato må være satt ved submit'),
  antallBarn: notEmpty(values.antallBarn, 'antallBarn må være satt ved submit'),
  ...Termindato.transformValues(values),
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
