import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import classNames from 'classnames';
import { InjectedFormProps } from 'redux-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import { KlageVurdering } from '@fpsak-frontend/types';

import styles from './vedtakKlageSubmitPanel.less';

const getBrevKode = (klageVurdering: any, klageVurdertAvKa: any) => {
  switch (klageVurdering) {
    case klageVurderingType.STADFESTE_YTELSESVEDTAK:
      return klageVurdertAvKa ? dokumentMalType.KLAGE_STADFESTET : dokumentMalType.KLAGE_OVERSENDT_KLAGEINSTANS;
    case klageVurderingType.OPPHEVE_YTELSESVEDTAK:
      return dokumentMalType.KLAGE_YTELSESVEDTAK_OPPHEVET;
    case klageVurderingType.HJEMSENDE_UTEN_Å_OPPHEVE:
      return dokumentMalType.KLAGE_YTELSESVEDTAK_OPPHEVET;
    case klageVurderingType.MEDHOLD_I_KLAGE:
      return dokumentMalType.KLAGE_OMGJORING;
    case klageVurderingType.AVVIS_KLAGE:
      return dokumentMalType.KLAGE_AVVIST;
    default:
      return null;
  }
};

const getPreviewCallback = (formProps: InjectedFormProps, begrunnelse: string,
  previewVedtakCallback: (data: any) => Promise<any>,
  klageResultat: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP']) => (e: any) => {
  const klageVurdertAvNK = klageResultat.klageVurdertAv === 'KA';
  const data = {
    fritekst: begrunnelse || '',
    mottaker: '',
    dokumentMal: getBrevKode(klageResultat.klageVurdering, klageVurdertAvNK),
    klageVurdertAv: klageResultat.klageVurdertAv,
    erOpphevetKlage: klageResultat.klageVurdering === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
  };
  if (formProps.valid || formProps.pristine) {
    previewVedtakCallback(data);
  } else {
    // @ts-ignore Fiks
    formProps.submit();
  }
  e.preventDefault();
};

interface OwnProps {
  previewVedtakCallback: (data: any) => Promise<any>;
  behandlingPaaVent: boolean;
  begrunnelse?: string;
  klageResultat?: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'];
  readOnly: boolean;
  formProps: InjectedFormProps;
}

export const VedtakKlageKaSubmitPanelImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  behandlingPaaVent,
  previewVedtakCallback,
  begrunnelse,
  klageResultat,
  formProps,
  readOnly,
}) => {
  const previewBrev = getPreviewCallback(formProps, begrunnelse, previewVedtakCallback, klageResultat);

  return (
    <Row>
      <Column xs="8">
        {!readOnly
        && (
        <Hovedknapp
          mini
          className={styles.mainButton}
          onClick={formProps.handleSubmit}
          disabled={behandlingPaaVent || formProps.submitting || klageResultat.godkjentAvMedunderskriver}
          spinner={formProps.submitting}
        >
          {intl.formatMessage({ id: 'VedtakKlageForm.TilGodkjenningKa' })}
        </Hovedknapp>
        )}
        {!readOnly
        && (
          <Hovedknapp
            mini
            className={styles.mainButton}
            onClick={formProps.handleSubmit}
            disabled={behandlingPaaVent || formProps.submitting || !klageResultat.godkjentAvMedunderskriver}
            spinner={formProps.submitting}
          >
            {intl.formatMessage({ id: 'VedtakKlageForm.FerdigstillKlageKa' })}
          </Hovedknapp>
        )}
        <a
          href=""
          onClick={previewBrev}
          onKeyDown={(e) => (e.keyCode === 13 ? previewBrev(e) : null)}
          className={classNames('lenke lenke--frittstaende')}
        >
          <FormattedMessage id="VedtakKlageForm.ForhandvisBrev" />
        </a>
      </Column>
    </Row>
  );
};

export default injectIntl(VedtakKlageKaSubmitPanelImpl);
