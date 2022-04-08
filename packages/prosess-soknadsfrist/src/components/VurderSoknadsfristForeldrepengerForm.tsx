import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import {
  Element, Normaltekst, Undertekst, Undertittel,
} from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';

import {
  Form, Datepicker, RadioGroupField, RadioOption,
} from '@fpsak-frontend/form-hooks';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import {
  dateBeforeOrEqualToToday, DDMMYYYY_DATE_FORMAT, hasValidDate, required,
} from '@fpsak-frontend/utils';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, UttakPeriodeGrense } from '@fpsak-frontend/types';
import { VurderSoknadsfristAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import styles from './vurderSoknadsfristForeldrepengerForm.less';

const isEdited = (hasAksjonspunkt: boolean, gyldigSenFremsetting?: boolean): boolean => hasAksjonspunkt && gyldigSenFremsetting !== undefined;

type FormValues = {
  gyldigSenFremsetting?: boolean;
  ansesMottatt?: string;
  begrunnelse?: string;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  mottattDato: string,
  uttaksperiodegrense?: UttakPeriodeGrense,
): FormValues => {
  const upgMottattDato = uttaksperiodegrense ? uttaksperiodegrense.mottattDato : undefined;
  return {
    gyldigSenFremsetting: isAksjonspunktOpen(aksjonspunkter[0].status) ? undefined : upgMottattDato !== mottattDato,
    ansesMottatt: upgMottattDato,
    ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): VurderSoknadsfristAp => ({
  harGyldigGrunn: values.gyldigSenFremsetting,
  ansesMottattDato: values.ansesMottatt,
  kode: AksjonspunktCode.VURDER_SOKNADSFRIST_FORELDREPENGER,
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
});

interface OwnProps {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  mottattDato: string;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: VurderSoknadsfristAp) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  isApOpen: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * VurderSoknadsfristForeldrepengerForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
const VurderSoknadsfristForeldrepengerForm: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  readOnly,
  readOnlySubmitButton,
  mottattDato,
  uttakPeriodeGrense,
  isApOpen,
  submitCallback,
  formData,
  setFormData,
}) => {
  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, mottattDato, uttakPeriodeGrense), [aksjonspunkter, mottattDato, uttakPeriodeGrense]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const gyldigSenFremsetting = formMethods.watch('gyldigSenFremsetting');

  const soknadsperiodeStart = uttakPeriodeGrense?.soknadsperiodeStart;
  const soknadsperiodeSlutt = uttakPeriodeGrense?.soknadsperiodeSlutt;
  const soknadsfristdato = uttakPeriodeGrense?.soknadsfristForForsteUttaksdato;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(formValues: FormValues) => submitCallback(transformValues(formValues))}
      setDataOnUnmount={setFormData}
    >
      <Undertittel><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Soknadsfrist" /></Undertittel>
      <VerticalSpacer twentyPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
        {[<FormattedMessage
          key="VurderSoknadsfristForeldrepengerForm"
          id="VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText"
          values={{
            numberOfDays: uttakPeriodeGrense?.antallDagerLevertForSent,
            soknadsfristdato: soknadsfristdato ? moment(soknadsfristdato).format(DDMMYYYY_DATE_FORMAT) : '',
          }}
        />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer twentyPx />
      <Row>
        <Column xs="6">
          <Panel className={styles.panel}>
            <Element><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Vurder" /></Element>
            <ul className={styles.hyphen}>
              <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt1" /></li>
              <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt2" /></li>
              <li><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt3" /></li>
            </ul>
          </Panel>
        </Column>
        <Column xs="6">
          <Row className={styles.marginBottom}>
            <Column xs="6">
              <Undertekst><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadMottatt" /></Undertekst>
              {mottattDato
                && <Normaltekst>{moment(mottattDato).format(DDMMYYYY_DATE_FORMAT)}</Normaltekst>}
            </Column>
            {soknadsperiodeStart && soknadsperiodeSlutt && (
              <Column xs="6">
                <Undertekst><FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadPeriode" /></Undertekst>
                <Normaltekst>
                  {`${moment(soknadsperiodeStart).format(DDMMYYYY_DATE_FORMAT)} - ${moment(soknadsperiodeSlutt).format(DDMMYYYY_DATE_FORMAT)}`}
                </Normaltekst>
              </Column>
            )}
          </Row>
        </Column>
      </Row>
      <div className={styles.marginTop}>
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
        <VerticalSpacer sixteenPx />
        <RadioGroupField
          name="gyldigSenFremsetting"
          validate={[required]}
          readOnly={readOnly}
          isEdited={isEdited(aksjonspunkter.length > 0, gyldigSenFremsetting)}
          parse={(value) => value === 'true'}
        >
          <RadioOption value="true" label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.GyldigGrunn" />} />
          <RadioOption value="false" label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn" />} />
        </RadioGroupField>
        {gyldigSenFremsetting && (
          <Row>
            <Column xs="4">
              <ArrowBox>
                <Datepicker
                  name="ansesMottatt"
                  isReadOnly={readOnly}
                  label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.NyMottattDato" />}
                  validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                />
              </ArrowBox>
            </Column>
          </Row>
        )}
        <VerticalSpacer twentyPx />
        <ProsessStegSubmitButtonNew
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </div>
    </Form>
  );
};

export default VurderSoknadsfristForeldrepengerForm;
