import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import classNames from 'classnames';
import { InjectedFormProps } from 'redux-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

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
  readOnly: boolean;
  formProps: InjectedFormProps;
}

export const VedtakKlageSubmitPanelImpl: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  behandlingPaaVent,
  previewVedtakCallback,
  formProps,
  readOnly,
}) => {
  const previewBrev = getPreviewCallback(formProps, previewVedtakCallback);

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
          onKeyDown={(e) => (e.key === 'Enter' ? previewBrev(e) : null)}
          className={classNames('lenke lenke--frittstaende')}
        >
          <FormattedMessage id="VedtakKlageForm.ForhandvisBrev" />
        </a>
      </Column>
    </Row>
  );
};

export default injectIntl(VedtakKlageSubmitPanelImpl);
