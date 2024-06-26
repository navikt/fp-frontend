import { PencilFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Heading } from '@navikt/ds-react';
import { Datepicker, Form, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { AksjonspunktBox, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { UseFormGetValues, useForm } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Soknad } from '@navikt/fp-types';
import { OverstyringAvklarStartdatoForPeriodenAp } from '@navikt/fp-types-avklar-aksjonspunkter';

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
  begrunnelse: (aksjonspunkt && aksjonspunkt.begrunnelse) || '',
});

const transformValues = (soknad: Soknad, values: FormValues): OverstyringAvklarStartdatoForPeriodenAp => ({
  kode: AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO,
  opprinneligDato: soknad.oppgittFordeling?.startDatoForPermisjon,
  startdatoFraSoknad: values.startdatoFraSoknad!,
  begrunnelse: values.begrunnelse,
});

const getValidateIsBefore2019 = (getValues: UseFormGetValues<FormValues>, intl: IntlShape) => () => {
  const startdatoFraSoknad = getValues('startdatoFraSoknad');
  return dayjs(startdatoFraSoknad).isBefore('2019-01-01')
    ? intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoFør2019' })
    : undefined;
};

interface OwnProps {
  aksjonspunkt?: Aksjonspunkt;
  soknad: Soknad;
  submitCallback: (data: OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * StartdatoForForeldrepengerperiodenForm
 *
 * Overstyring av startdato for foreldrepengerperioden.
 */
const StartdatoForForeldrepengerperiodenForm: FunctionComponent<OwnProps> = ({
  submitCallback,
  aksjonspunkt,
  soknad,
  alleMerknaderFraBeslutter,
  readOnly,
  formData,
  setFormData,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>({
    defaultValues: formData || buildInitialValues(soknad, aksjonspunkt),
  });

  const [visEditeringsmodus, toggleEdit] = useState(false);
  const slåPåEditering = useCallback(() => toggleEdit(true), []);
  const slaAvEditeringAvStartdato = useCallback(() => {
    formMethods.reset();
    toggleEdit(false);
  }, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(soknad, values))}
      setDataOnUnmount={setFormData}
    >
      <Heading size="small">
        <FormattedMessage id="StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden" />
      </Heading>
      <VerticalSpacer sixteenPx />
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
            !!alleMerknaderFraBeslutter[AksjonspunktCode.OVERSTYR_AVKLAR_STARTDATO]?.notAccepted
          }
        >
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Datepicker
                  name="startdatoFraSoknad"
                  label={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.Startdato' })}
                  validate={[required, hasValidDate, getValidateIsBefore2019(formMethods.getValues, intl)]}
                  isReadOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn className={styles.begrunnelsefelt}>
                <TextAreaField
                  name="begrunnelse"
                  label={<FormattedMessage id="StartdatoForForeldrepengerperiodenForm.Vurdering" />}
                  validate={[required, minLength3, maxLength1500, hasValidText]}
                  maxLength={1500}
                  readOnly={readOnly}
                />
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="primary"
                  disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                  loading={formMethods.formState.isSubmitting}
                >
                  <FormattedMessage id="UtlandPanel.lagre" />
                </Button>
              </FlexColumn>
              <Button variant="secondary" size="small" onClick={slaAvEditeringAvStartdato} type="button">
                <FormattedMessage id="UtlandPanel.avbryt" />
              </Button>
              <FlexColumn />
            </FlexRow>
          </FlexContainer>
        </AksjonspunktBox>
      )}
    </Form>
  );
};

export default StartdatoForForeldrepengerperiodenForm;
