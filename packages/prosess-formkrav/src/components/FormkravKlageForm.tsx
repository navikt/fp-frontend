import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import {
  FormattedMessage, useIntl, IntlShape,
} from 'react-intl';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew,
} from '@fpsak-frontend/prosess-felles';
import { RadioGroupField, RadioOption, SelectField } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DATE_TIME_FORMAT, required, getKodeverknavnFn } from '@navikt/ft-utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AlleKodeverk, KlageVurdering } from '@fpsak-frontend/types';

import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';
import styles from './formkravKlageForm.less';

export const IKKE_PA_KLAGD_VEDTAK = 'ikkePaklagdVedtak';

export const getPaKlagdVedtak = (klageFormkavResultat?: KlageVurdering['klageFormkravResultatKA']): string => (klageFormkavResultat.paKlagdBehandlingUuid
  ? `${klageFormkavResultat.paKlagdBehandlingUuid}` : IKKE_PA_KLAGD_VEDTAK);

const getKlagBareVedtak = (
  avsluttedeBehandlinger: AvsluttetBehandling[],
  intl: IntlShape,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): ReactElement[] => {
  const klagBareVedtak = [<option key="formkrav" value={IKKE_PA_KLAGD_VEDTAK}>{intl.formatMessage({ id: 'Klage.Formkrav.IkkePåklagdVedtak' })}</option>];
  return klagBareVedtak.concat([...avsluttedeBehandlinger]
    .sort((b1, b2) => moment(b1.avsluttet).diff(moment(b2.avsluttet)))
    .map((behandling) => (
      <option key={behandling.uuid} value={`${behandling.uuid}`}>
        {`${getKodeverknavn(behandling.type, KodeverkType.BEHANDLING_TYPE)} ${moment(behandling.avsluttet).format(DATE_TIME_FORMAT)}`}
      </option>
    )));
};

const getLovHjemmeler = (aksjonspunktCode: string): string => (aksjonspunktCode === aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP
  ? 'Klage.LovhjemmelNFP' : 'Klage.LovhjemmelKA');

interface OwnProps {
  avsluttedeBehandlinger: AvsluttetBehandling[];
  aksjonspunktCode: string;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  isSubmitting: boolean;
  isDirty: boolean;
}

/**
 * FormkravKlageForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (NFP og KA).
 */
export const FormkravKlageForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  aksjonspunktCode,
  avsluttedeBehandlinger,
  alleKodeverk,
  isSubmitting,
  isDirty,
}) => {
  const intl = useIntl();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
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
          <ProsessStegBegrunnelseTextFieldNew
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
              <RadioGroupField
                name="erKlagerPart"
                validate={[required]}
                readOnly={readOnly}
                parse={(value) => value === 'true'}
              >
                <RadioOption value="true" label={intl.formatMessage({ id: 'Klage.Formkrav.Ja' })} />
                <RadioOption value="false" label={intl.formatMessage({ id: 'Klage.Formkrav.Nei' })} />
              </RadioGroupField>
            </Column>
            <Column xs="8">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErKonkret' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField
                name="erKonkret"
                validate={[required]}
                readOnly={readOnly}
                parse={(value) => value === 'true'}
              >
                <RadioOption value="true" label={intl.formatMessage({ id: 'Klage.Formkrav.Ja' })} />
                <RadioOption value="false" label={intl.formatMessage({ id: 'Klage.Formkrav.Nei' })} />
              </RadioGroupField>
            </Column>
          </Row>
          <Row>
            <Column xs="4">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErFristOverholdt' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField
                name="erFristOverholdt"
                validate={[required]}
                readOnly={readOnly}
                parse={(value) => value === 'true'}
              >
                <RadioOption value="true" label={intl.formatMessage({ id: 'Klage.Formkrav.Ja' })} />
                <RadioOption value="false" label={intl.formatMessage({ id: 'Klage.Formkrav.Nei' })} />
              </RadioGroupField>
            </Column>
            <Column xs="8">
              <Undertekst>
                {intl.formatMessage({ id: 'Klage.Formkrav.ErSignert' })}
              </Undertekst>
              <VerticalSpacer sixteenPx />
              <RadioGroupField
                name="erSignert"
                validate={[required]}
                readOnly={readOnly}
                parse={(value) => value === 'true'}
              >
                <RadioOption value="true" label={intl.formatMessage({ id: 'Klage.Formkrav.Ja' })} />
                <RadioOption value="false" label={intl.formatMessage({ id: 'Klage.Formkrav.Nei' })} />
              </RadioGroupField>
            </Column>
          </Row>
        </Column>
      </Row>
      <div className={styles.confirmVilkarForm}>
        <ProsessStegSubmitButtonNew
          isReadOnly={readOnly}
          isSubmittable={!readOnlySubmitButton}
          isSubmitting={isSubmitting}
          isDirty={isDirty}
        />
      </div>

    </>
  );
};

export default FormkravKlageForm;
