import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import classNames from 'classnames';
import { InjectedFormProps } from 'redux-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import { KlageVurdering, Kodeverk } from '@fpsak-frontend/types';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';

import styles from './vedtakKlageSubmitPanel.less';

const getBrevKode = (klageVurdering: Kodeverk, klageVurdertAvKa: boolean): string | null => {
  switch (klageVurdering.kode) {
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

export type ForhandsvisData = {
  fritekst: string;
  mottaker: string;
  brevmalkode?: string;
  klageVurdertAv: string;
  erOpphevet: boolean;
}

const getPreviewCallback = (
  formProps: InjectedFormProps,
  previewVedtakCallback: (data: ForhandsvisData) => Promise<any>,
  begrunnelse?: string,
  klageResultat?: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'],
) => (e: React.MouseEvent | React.KeyboardEvent): void => {
  const klageVurdertAvNK = klageResultat.klageVurdertAv === 'NFP';
  const data = {
    fritekst: begrunnelse || '',
    mottaker: '',
    brevmalkode: getBrevKode(klageResultat.klageVurdering, klageVurdertAvNK),
    klageVurdertAv: klageResultat.klageVurdertAv,
    erOpphevet: klageResultat.klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK,
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
  previewVedtakCallback: (data: ForhandsvisData) => Promise<any>;
  behandlingPaaVent: boolean;
  begrunnelse?: string;
  klageResultat?: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'];
  readOnly: boolean;
  formProps: InjectedFormProps;
}

export const VedtakKlageSubmitPanelImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  behandlingPaaVent,
  previewVedtakCallback,
  begrunnelse,
  klageResultat,
  formProps,
  readOnly,
}) => {
  const previewBrev = getPreviewCallback(formProps, previewVedtakCallback, begrunnelse, klageResultat);

  return (
    <Row>
      <Column xs="6">
        {!readOnly
        && (
        <Hovedknapp
          mini
          className={styles.mainButton}
          onClick={formProps.handleSubmit}
          disabled={behandlingPaaVent || formProps.submitting}
          spinner={formProps.submitting}
        >
          {intl.formatMessage({ id: 'VedtakKlageForm.TilGodkjenning' })}
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

export default injectIntl(VedtakKlageSubmitPanelImpl);
