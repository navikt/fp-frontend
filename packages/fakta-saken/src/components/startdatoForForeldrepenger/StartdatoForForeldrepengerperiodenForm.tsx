import React, { FunctionComponent, useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { BodyShort, Heading, Button } from '@navikt/ds-react';
import { hasValidDate, hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { Datepicker, TextAreaField, Form } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow, AksjonspunktBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { PencilFillIcon } from '@navikt/aksel-icons';

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
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <BodyShort size="small">
                <FormattedMessage id="StartdatoForForeldrepengerperiodenForm.StartdatoSomBenyttes" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">
                {soknad.oppgittFordeling
                  ? dayjs(soknad.oppgittFordeling.startDatoForPermisjon).format(DDMMYYYY_DATE_FORMAT)
                  : '-'}
              </BodyShort>
            </FlexColumn>
            <FlexColumn>
              <PencilFillIcon
                title={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.EndreStartdato' })}
                className={readOnly ? styles.editIconReadonly : styles.editIcon}
                onClick={readOnly ? undefined : slåPåEditering}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
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
