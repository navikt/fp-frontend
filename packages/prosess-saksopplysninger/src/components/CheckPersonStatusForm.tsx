import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import moment from 'moment';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT, required, getKodeverknavnFn } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import {
  RadioGroupField, RadioOption, behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType, isBehandlingFormDirty,
  isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt, KodeverkMedNavn, Personopplysninger } from '@fpsak-frontend/types';
import { ProsessStegBegrunnelseTextField, ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';

import styles from './checkPersonStatusForm.less';

type FormValues = {
  fortsettBehandling?: boolean;
  personstatus?: string;
  begrunnelse?: string;
  originalPersonstatusName?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingHenlagt: boolean;
  gjeldeneFom?: string;
  personopplysninger: Personopplysninger;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
}

interface MappedOwnProps {
  fortsettBehandling?: boolean;
  originalPersonstatusName?: string;
  personStatuser: KodeverkMedNavn[];
}

/**
 * CheckPersonStatusForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for kontroll av personstatus.
 */
export const CheckPersonStatusForm: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  intl,
  behandlingId,
  behandlingVersjon,
  readOnly,
  readOnlySubmitButton,
  fortsettBehandling,
  originalPersonstatusName,
  personStatuser,
  gjeldeneFom,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <Undertittel>{intl.formatMessage({ id: 'CheckPersonStatusForm.CheckInformation' })}</Undertittel>
    <VerticalSpacer twentyPx />
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton && !readOnly}>
      {[intl.formatMessage({ id: 'CheckPersonStatusForm.PersonStatus' }, { status: originalPersonstatusName })]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer twentyPx />
    { gjeldeneFom && (
      <Normaltekst>
        <FormattedMessage
          id="CheckPersonStatusForm.GjeldendeFom"
          values={{ dato: moment(gjeldeneFom).format(DDMMYYYY_DATE_FORMAT) }}
        />
      </Normaltekst>
    )}
    <VerticalSpacer twentyPx />
    <div className={styles.radioGroup}>
      <Row>
        <Column xs="12">
          <RadioGroupField name="fortsettBehandling" validate={[required]} readOnly={readOnly}>
            <RadioOption label={{ id: 'CheckPersonStatusForm.HaltBehandling' }} value={false} />
            <RadioOption label={{ id: 'CheckPersonStatusForm.ContinueBehandling' }} value />
          </RadioGroupField>
        </Column>
      </Row>
      {(fortsettBehandling === true) && (
        <ArrowBox alignOffset={readOnly ? 0 : 198}>
          <Undertekst>{intl.formatMessage({ id: 'CheckPersonStatusForm.SetPersonStatus' })}</Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField name="personstatus" validate={[required]} readOnly={readOnly}>
            {personStatuser.map((d: any) => <RadioOption key={d.kode} value={d.kode} label={d.navn} />)}
          </RadioGroupField>
        </ArrowBox>
      )}
    </div>
    <VerticalSpacer sixteenPx />
    <ProsessStegBegrunnelseTextField readOnly={readOnly} />
    <VerticalSpacer sixteenPx />
    <ProsessStegSubmitButton
      formName={formProps.form}
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      isReadOnly={readOnly}
      isSubmittable={!readOnlySubmitButton}
      isBehandlingFormSubmitting={isBehandlingFormSubmitting}
      isBehandlingFormDirty={isBehandlingFormDirty}
      hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
    />
  </form>
);

const getValgtOpplysning = (avklartPersonstatus: Personopplysninger['avklartPersonstatus']): string | undefined => {
  if (avklartPersonstatus && avklartPersonstatus.overstyrtPersonstatus) {
    const statusKode = avklartPersonstatus.overstyrtPersonstatus.kode;
    if (statusKode === personstatusType.DOD || statusKode === personstatusType.BOSATT || statusKode === personstatusType.UTVANDRET) {
      return statusKode;
    }
  }
  return undefined;
};

export const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingHenlagt,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.personopplysninger,
    (ownProps: PureOwnProps) => ownProps.alleKodeverk],
  (behandlingHenlagt, aksjonspunkter, personopplysning, alleKodeverk): FormValues => {
    const shouldContinueBehandling = !behandlingHenlagt;
    const { avklartPersonstatus, personstatus } = personopplysning;
    const aksjonspunkt = aksjonspunkter[0];
    const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
    return {
      originalPersonstatusName: avklartPersonstatus && avklartPersonstatus.orginalPersonstatus
        ? getKodeverknavn(avklartPersonstatus.orginalPersonstatus) : getKodeverknavn(personstatus),
      fortsettBehandling: isAksjonspunktOpen(aksjonspunkt.status.kode) ? undefined : shouldContinueBehandling,
      personstatus: getValgtOpplysning(avklartPersonstatus),
      ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
    };
  },
);

const getFilteredKodeverk = createSelector(
  [(ownProps: PureOwnProps) => ownProps.alleKodeverk[kodeverkTyper.PERSONSTATUS_TYPE]], (kodeverk): KodeverkMedNavn[] => kodeverk
    .filter((ps) => ps.kode === personstatusType.DOD || ps.kode === personstatusType.BOSATT || ps.kode === personstatusType.UTVANDRET),
);

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): any => ({
  fortsettBehandling: values.fortsettBehandling,
  personstatus: values.personstatus,
  kode: aksjonspunkter[0].definisjon.kode,
  ...ProsessStegBegrunnelseTextField.transformValues(values),
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunkter)]));

const formName = 'CheckPersonStatusForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const { behandlingId, behandlingVersjon } = ownProps;
  return {
    initialValues: buildInitialValues(ownProps),
    ...behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'fortsettBehandling', 'originalPersonstatusName'),
    personStatuser: getFilteredKodeverk(ownProps),
    onSubmit: lagSubmitFn(ownProps),
  };
};

export default connect(mapStateToProps)(behandlingForm({
  form: formName,
})(injectIntl(CheckPersonStatusForm)));
