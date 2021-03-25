import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { ProsessStegBegrunnelseTextField, ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  RadioGroupField, RadioOption, SelectField, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { DATE_TIME_FORMAT, required, getKodeverknavnFn } from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KlageVurdering, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';
import styles from './formkravKlageForm.less';

export const IKKE_PA_KLAGD_VEDTAK = 'ikkePaklagdVedtak';

export const getPaKlagdVedtak = (klageFormkavResultat?: KlageVurdering['klageFormkravResultatKA']): string => (klageFormkavResultat.paKlagdBehandlingId
  ? `${klageFormkavResultat.paKlagdBehandlingId}` : IKKE_PA_KLAGD_VEDTAK);

const getKlagBareVedtak = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  intl: IntlShape,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
): ReactElement[] => {
  const klagBareVedtak = [<option key="formkrav" value={IKKE_PA_KLAGD_VEDTAK}>{intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' })}</option>];
  return klagBareVedtak.concat(avsluttedeBehandlinger
    .sort((b1, b2) => moment(b1.avsluttet).diff(moment(b2.avsluttet)))
    .map((behandling) => (
      <option key={behandling.id} value={`${behandling.id}`}>
        {`${getKodeverknavn(behandling.type)} ${moment(behandling.avsluttet).format(DATE_TIME_FORMAT)}`}
      </option>
    )));
};

const getLovHjemmeler = (aksjonspunktCode: string): string => (aksjonspunktCode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP
  ? 'Klage.LovhjemmelNFP' : 'Klage.LovhjemmelKA');

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  formProps: InjectedFormProps;
  aksjonspunktCode: string;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * FormkravKlageForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (NFP og KA).
 */
export const FormkravKlageForm: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  behandlingId,
  behandlingVersjon,
  readOnly,
  readOnlySubmitButton,
  aksjonspunktCode,
  avsluttedeBehandlinger,
  intl,
  formProps,
  alleKodeverk,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  const klageBareVedtakOptions = getKlagBareVedtak(avsluttedeBehandlinger, intl, getKodeverknavn);

  return (
    <>
      <Undertittel>{intl.formatMessage({ id: 'Klage.Formkrav.Title' })}</Undertittel>
      <VerticalSpacer fourPx />
      <Undertekst>{intl.formatMessage({ id: getLovHjemmeler(aksjonspunktCode) })}</Undertekst>
      <VerticalSpacer fourPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
        {[<FormattedMessage id="Klage.Formkrav.HelpText" key={aksjonspunktCode} />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="6">
          <ProsessStegBegrunnelseTextField
            readOnly={readOnly}
          />
        </Column>
        <Column xs="6">
          <SelectField
            readOnly={readOnly}
            validate={[required]}
            name="vedtak"
            label={intl.formatMessage({ id: 'Klage.Formkrav.VelgVedtak' })}
            placeholder={intl.formatMessage({ id: 'Klage.Formkrav.SelectVedtakPlaceholder' })}
            selectValues={klageBareVedtakOptions}
            bredde="l"
          />
          <VerticalSpacer sixteenPx />
          <Row>
            <Column xs="4">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErKlagerPart' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField name="erKlagerPart" validate={[required]} readOnly={readOnly}>
                <RadioOption value label={{ id: 'Klage.Formkrav.Ja' }} />
                <RadioOption value={false} label={{ id: 'Klage.Formkrav.Nei' }} />
              </RadioGroupField>
            </Column>
            <Column xs="8">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErKonkret' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField name="erKonkret" validate={[required]} readOnly={readOnly}>
                <RadioOption value label={{ id: 'Klage.Formkrav.Ja' }} />
                <RadioOption value={false} label={{ id: 'Klage.Formkrav.Nei' }} />
              </RadioGroupField>
            </Column>
          </Row>
          <Row>
            <Column xs="4">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErFristOverholdt' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField name="erFristOverholdt" validate={[required]} readOnly={readOnly}>
                <RadioOption value label={{ id: 'Klage.Formkrav.Ja' }} />
                <RadioOption value={false} label={{ id: 'Klage.Formkrav.Nei' }} />
              </RadioGroupField>
            </Column>
            <Column xs="8">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErSignert' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField name="erSignert" validate={[required]} readOnly={readOnly}>
                <RadioOption value label={{ id: 'Klage.Formkrav.Ja' }} />
                <RadioOption value={false} label={{ id: 'Klage.Formkrav.Nei' }} />
              </RadioGroupField>
            </Column>
          </Row>
        </Column>
      </Row>
      <div className={styles.confirmVilkarForm}>
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
      </div>

    </>
  );
};

FormkravKlageForm.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

export default injectIntl(FormkravKlageForm);
