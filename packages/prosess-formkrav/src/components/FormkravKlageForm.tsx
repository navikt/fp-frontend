import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import {
  FormattedMessage, useIntl, IntlShape,
} from 'react-intl';
import { Detail, Heading } from '@navikt/ds-react';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew,
} from '@fpsak-frontend/prosess-felles';
import { RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import {
  AksjonspunktHelpTextTemp, FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { DATE_TIME_FORMAT } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AlleKodeverk, KlageVurdering } from '@fpsak-frontend/types';
import { getKodeverknavnFn } from '@fpsak-frontend/kodeverk/src/kodeverkUtils';

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
      <Heading size="small">{intl.formatMessage({ id: 'Klage.Formkrav.Title' })}</Heading>
      <VerticalSpacer fourPx />
      <Detail size="small">{intl.formatMessage({ id: getLovHjemmeler(aksjonspunktCode) })}</Detail>
      <VerticalSpacer fourPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
        {[<FormattedMessage id="Klage.Formkrav.HelpText" key={aksjonspunktCode} />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.col}>
            <ProsessStegBegrunnelseTextFieldNew
              readOnly={readOnly}
            />
          </FlexColumn>
          <FlexColumn className={styles.col}>
            <SelectField
              readOnly={readOnly}
              validate={[required]}
              name="vedtak"
              label={intl.formatMessage({ id: 'Klage.Formkrav.VelgVedtak' })}
              selectValues={klageBareVedtakOptions}
              className={styles.selectBredde}
            />
            <VerticalSpacer sixteenPx />
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <RadioGroupPanel
                    name="erKlagerPart"
                    label={intl.formatMessage({ id: 'Klage.Formkrav.ErKlagerPart' })}
                    validate={[required]}
                    isReadOnly={readOnly}
                    isHorizontal
                    isTrueOrFalseSelection
                    radios={[{
                      value: 'true',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                    }, {
                      value: 'false',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                    }]}
                  />
                </FlexColumn>
                <VerticalSpacer sixteenPx />
                <FlexColumn>
                  <RadioGroupPanel
                    name="erKonkret"
                    label={intl.formatMessage({ id: 'Klage.Formkrav.ErKonkret' })}
                    validate={[required]}
                    isReadOnly={readOnly}
                    isHorizontal
                    isTrueOrFalseSelection
                    radios={[{
                      value: 'true',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                    }, {
                      value: 'false',
                      label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                    }]}
                  />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
            <FlexRow>
              <FlexColumn>
                <RadioGroupPanel
                  name="erFristOverholdt"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.ErFristOverholdt' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[{
                    value: 'true',
                    label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                  }, {
                    value: 'false',
                    label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                  }]}
                />
              </FlexColumn>
              <VerticalSpacer sixteenPx />
              <FlexColumn>
                <RadioGroupPanel
                  name="erSignert"
                  label={intl.formatMessage({ id: 'Klage.Formkrav.ErSignert' })}
                  validate={[required]}
                  isReadOnly={readOnly}
                  isHorizontal
                  isTrueOrFalseSelection
                  radios={[{
                    value: 'true',
                    label: intl.formatMessage({ id: 'Klage.Formkrav.Ja' }),
                  }, {
                    value: 'false',
                    label: intl.formatMessage({ id: 'Klage.Formkrav.Nei' }),
                  }]}
                />
              </FlexColumn>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
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
