import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import classNames from 'classnames';
import { InjectedFormProps } from 'redux-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import { KlageVurdering } from '@fpsak-frontend/types';

import styles from './vedtakKlageSubmitPanel.less';

const getPreviewCallback = (
  formProps: InjectedFormProps,
  previewVedtakCallback: () => Promise<any>,
) => (e: React.MouseEvent | React.KeyboardEvent): void => {
  if (formProps.valid || formProps.pristine) {
    previewVedtakCallback();
  } else {
    // @ts-ignore Fiks
    formProps.submit();
  }
  e.preventDefault();
};

interface OwnProps {
  previewVedtakCallback: () => Promise<any>;
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
  klageResultat,
  formProps,
  readOnly,
}) => {
  const previewBrev = getPreviewCallback(formProps, previewVedtakCallback);

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
