import { useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { PencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import { capitalizeFirstLetter } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Ytelsefordeling } from '@navikt/fp-types';
import type { OverstyringAvklarStartdatoForPeriodenAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import styles from './startdatoForForeldrepengerperiodenForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  startdatoFraSoknad?: string;
  begrunnelse?: string;
};

const buildInitialValues = (ytelseFordeling: Ytelsefordeling, aksjonspunkt?: Aksjonspunkt): FormValues => ({
  startdatoFraSoknad: ytelseFordeling.startDatoForPermisjon,
  begrunnelse: aksjonspunkt?.begrunnelse ?? '',
});

const transformValues = (
  ytelseFordeling: Ytelsefordeling,
  values: FormValues,
): OverstyringAvklarStartdatoForPeriodenAp => ({
  kode: AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO,
  opprinneligDato: ytelseFordeling.startDatoForPermisjon,
  startdatoFraSoknad: notEmpty(values.startdatoFraSoknad),
  begrunnelse: values.begrunnelse,
});

const getValidateIsBefore2019 = (getValues: UseFormGetValues<FormValues>, intl: IntlShape) => () => {
  const startdatoFraSoknad = getValues('startdatoFraSoknad');
  return dayjs(startdatoFraSoknad).isBefore('2019-01-01')
    ? intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoFør2019' })
    : undefined;
};

interface Props {
  aksjonspunkt?: Aksjonspunkt;
  ytelseFordeling: Ytelsefordeling;
}

/**
 * StartdatoForForeldrepengerperiodenForm
 *
 * Overstyring av startdato for foreldrepengerperioden.
 */
export const StartdatoForForeldrepengerperiodenForm = ({ aksjonspunkt, ytelseFordeling }: Props) => {
  const intl = useIntl();

  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly } =
    usePanelDataContext<OverstyringAvklarStartdatoForPeriodenAp>();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(ytelseFordeling, aksjonspunkt),
  });

  const [visEditeringsmodus, setVisEditeringsmodus] = useState(false);
  const slåPåEditering = () => setVisEditeringsmodus(true);
  const slaAvEditeringAvStartdato = () => {
    formMethods.reset();
    setVisEditeringsmodus(false);
  };

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(ytelseFordeling, values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden" />
        </Heading>
        {!visEditeringsmodus && (
          <HStack gap="space-8">
            <BodyShort size="small">
              {capitalizeFirstLetter(dayjs(ytelseFordeling.startDatoForPermisjon).format('dddd D MMMM YYYY'))}
            </BodyShort>
            <PencilFillIcon
              title={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.EndreStartdato' })}
              className={isReadOnly ? styles['editIconReadonly'] : styles['editIcon']}
              onClick={isReadOnly ? undefined : slåPåEditering}
            />
          </HStack>
        )}
        {visEditeringsmodus && (
          <AksjonspunktBox
            className={styles['aksjonspunktMargin']}
            erAksjonspunktApent={false}
            erIkkeGodkjentAvBeslutter={
              !!alleMerknaderFraBeslutter[AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO]?.notAccepted
            }
          >
            <VStack gap="space-16">
              <RhfDatepicker
                name="startdatoFraSoknad"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.Startdato' })}
                validate={[required, hasValidDate, getValidateIsBefore2019(formMethods.getValues, intl)]}
                readOnly={isReadOnly}
              />
              <RhfTextarea
                name="begrunnelse"
                control={formMethods.control}
                label={<FormattedMessage id="StartdatoForForeldrepengerperiodenForm.Vurdering" />}
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={isReadOnly}
              />
              <HStack gap="space-8">
                <Button
                  size="small"
                  variant="primary"
                  disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                  loading={formMethods.formState.isSubmitting}
                >
                  <FormattedMessage id="UtlandPanel.lagre" />
                </Button>
                <Button variant="secondary" size="small" onClick={slaAvEditeringAvStartdato} type="button">
                  <FormattedMessage id="UtlandPanel.avbryt" />
                </Button>
              </HStack>
            </VStack>
          </AksjonspunktBox>
        )}
      </VStack>
    </RhfForm>
  );
};
