import React, { FunctionComponent, useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import {
  hasValidDate, hasValidText, maxLength, minLength, required,
} from '@navikt/ft-form-validators';
import { Datepicker, TextAreaField, Form } from '@navikt/ft-form-hooks';
import {
  FlexColumn, FlexContainer, FlexRow, AksjonspunktBox, VerticalSpacer, Image,
} from '@navikt/ft-ui-komponenter';

import editUtlandIcon from '@fpsak-frontend/assets/images/endre.svg';
import editUtlandDisabledIcon from '@fpsak-frontend/assets/images/endre_disablet.svg';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';
import { OverstyringAvklarStartdatoForPeriodenAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import styles from './startdatoForForeldrepengerperiodenForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  startdatoFraSoknad?: string;
  opprinneligDato?: string;
  begrunnelse?: string;
}

const buildInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  soknad: Soknad,
): FormValues => ({
  opprinneligDato: soknad.oppgittFordeling?.startDatoForPermisjon,
  startdatoFraSoknad: soknad.oppgittFordeling?.startDatoForPermisjon,
  begrunnelse: (aksjonspunkt && aksjonspunkt.begrunnelse) || '',
});

const transformValues = (
  values: FormValues,
): OverstyringAvklarStartdatoForPeriodenAp => ({
  kode: aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
  opprinneligDato: values.opprinneligDato,
  startdatoFraSoknad: values.startdatoFraSoknad,
  begrunnelse: values.begrunnelse,
});

const getValidateIsBefore2019 = (
  getValues: UseFormGetValues<FormValues>,
  intl: IntlShape,
) => () => {
  const startdatoFraSoknad = getValues('startdatoFraSoknad');
  return dayjs(startdatoFraSoknad).isBefore('2019-01-01')
    ? intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.StartdatoFør2019' })
    : undefined;
};

interface OwnProps {
  aksjonspunkt: Aksjonspunkt;
  soknad: Soknad;
  submitCallback: (data: OverstyringAvklarStartdatoForPeriodenAp) => Promise<void>;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  formData?: FormValues,
  setFormData: (data: FormValues) => void,
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
    defaultValues: formData || buildInitialValues(aksjonspunkt, soknad),
  });

  const [visEditeringsmodus, toggleEdit] = useState(false);
  const slåPåEditering = useCallback(() => toggleEdit(true), []);
  const slaAvEditeringAvUtland = useCallback(() => { formMethods.reset(); toggleEdit(false); }, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
      <Undertittel>
        <FormattedMessage id="StartdatoForForeldrepengerperiodenForm.StartdatoForPerioden" />
      </Undertittel>
      <VerticalSpacer sixteenPx />
      {!visEditeringsmodus && (
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Normaltekst>
                <FormattedMessage id="StartdatoForForeldrepengerperiodenForm.StartdatoSomBenyttes" />
              </Normaltekst>
            </FlexColumn>
            <FlexColumn>
              <Element>
                {soknad.oppgittFordeling ? dayjs(soknad.oppgittFordeling.startDatoForPermisjon).format(DDMMYYYY_DATE_FORMAT) : '-'}
              </Element>
            </FlexColumn>
            <FlexColumn>
              <Image
                className={styles.editIcon}
                src={readOnly ? editUtlandDisabledIcon : editUtlandIcon}
                onClick={readOnly ? undefined : slåPåEditering}
                alt={intl.formatMessage({ id: 'StartdatoForForeldrepengerperiodenForm.EndreStartdato' })}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      )}
      {visEditeringsmodus && (
        <AksjonspunktBox
          className={styles.aksjonspunktMargin}
          erAksjonspunktApent={false}
          erIkkeGodkjentAvBeslutter={!!alleMerknaderFraBeslutter[aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO]?.notAccepted}
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
            <VerticalSpacer eightPx />
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
                <Hovedknapp
                  mini
                  htmlType="submit"
                  disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                  spinner={formMethods.formState.isSubmitting}
                >
                  <FormattedMessage id="UtlandPanel.lagre" />
                </Hovedknapp>
              </FlexColumn>
              <Knapp
                htmlType="button"
                mini
                onClick={slaAvEditeringAvUtland}
              >
                <FormattedMessage id="UtlandPanel.avbryt" />
              </Knapp>
              <FlexColumn />
            </FlexRow>
          </FlexContainer>
        </AksjonspunktBox>
      )}
    </Form>
  );
};

export default StartdatoForForeldrepengerperiodenForm;
