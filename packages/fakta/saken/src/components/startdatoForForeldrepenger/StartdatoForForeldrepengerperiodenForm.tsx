import { useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { PencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Soknad } from '@navikt/fp-types';
import type { OverstyringAvklarStartdatoForPeriodenAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData } from '@navikt/fp-utils';

import styles from './startdatoForForeldrepengerperiodenForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  startdatoFraSoknad?: string;
  begrunnelse?: string;
};

const capitalizeFirstLetter = (landNavn: string): string => {
  const string = landNavn.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const buildInitialValues = (soknad: Soknad, aksjonspunkt?: Aksjonspunkt): FormValues => ({
  startdatoFraSoknad: soknad.oppgittFordeling?.startDatoForPermisjon,
  begrunnelse: aksjonspunkt?.begrunnelse ?? '',
});

const transformValues = (soknad: Soknad, values: FormValues): OverstyringAvklarStartdatoForPeriodenAp => ({
  kode: AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO,
  opprinneligDato: soknad.oppgittFordeling?.startDatoForPermisjon,
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
  soknad: Soknad;
  submitCallback: (data: OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}

/**
 * StartdatoForForeldrepengerperiodenForm
 *
 * Overstyring av startdato for foreldrepengerperioden.
 */
export const StartdatoForForeldrepengerperiodenForm = ({
  submitCallback,
  aksjonspunkt,
  soknad,
  alleMerknaderFraBeslutter,
  readOnly,
}: Props) => {
  const intl = useIntl();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(soknad, aksjonspunkt),
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
      onSubmit={(values: FormValues) => submitCallback(transformValues(soknad, values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="4">
        <Heading size="small">
          <FormattedMessage id="StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden" />
        </Heading>
        {!visEditeringsmodus && (
          <HStack gap="2">
            <BodyShort size="small">
              {soknad.oppgittFordeling
                ? capitalizeFirstLetter(dayjs(soknad.oppgittFordeling.startDatoForPermisjon).format('dddd D MMMM YYYY'))
                : '-'}
            </BodyShort>
            <PencilFillIcon
              title={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.EndreStartdato' })}
              className={readOnly ? styles.editIconReadonly : styles.editIcon}
              onClick={readOnly ? undefined : slåPåEditering}
            />
          </HStack>
        )}
        {visEditeringsmodus && (
          <AksjonspunktBox
            className={styles.aksjonspunktMargin}
            erAksjonspunktApent={false}
            erIkkeGodkjentAvBeslutter={
              !!alleMerknaderFraBeslutter[AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO]?.notAccepted
            }
          >
            <VStack gap="4">
              <RhfDatepicker
                name="startdatoFraSoknad"
                control={formMethods.control}
                label={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.Startdato' })}
                validate={[required, hasValidDate, getValidateIsBefore2019(formMethods.getValues, intl)]}
                isReadOnly={readOnly}
              />
              <RhfTextarea
                name="begrunnelse"
                control={formMethods.control}
                label={<FormattedMessage id="StartdatoForForeldrepengerperiodenForm.Vurdering" />}
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={readOnly}
              />
              <HStack gap="2">
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
