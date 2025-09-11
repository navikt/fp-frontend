import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
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
import type { SjekkTerminbekreftelseAp } from '@navikt/fp-types-avklar-aksjonspunkter';
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
  aksjonspunkt: Aksjonspunkt;
  fødsel: Fødsel;
}

export const SjekkTerminbekreftelseForm = ({ fødsel: { gjeldende, søknad }, aksjonspunkt }: Props) => {
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
            <Termindato
              isReadOnly={isReadOnly}
              isEdited={isNotEqual(søknad.termindato, gjeldende.termin?.termindato)}
            />
            <RhfDatepicker
              control={formMethods.control}
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
            <RhfTextField
              control={formMethods.control}
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
              isEdited={isNotEqual(søknad.antallBarn, gjeldende.antallBarn.antall)}
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

          {aksjonspunkt && !isReadOnly && (
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
  termindato: gjeldende.termin?.termindato,
  antallBarn: gjeldende.antallBarn.antall,
  ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
});

const transformValues = (values: FormValues): SjekkTerminbekreftelseAp => ({
  kode: AksjonspunktKode.SJEKK_TERMINBEKREFTELSE,
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
