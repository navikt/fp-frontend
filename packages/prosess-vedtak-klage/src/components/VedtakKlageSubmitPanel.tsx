import React, {
  FunctionComponent, useCallback, KeyboardEvent, MouseEvent,
} from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import styles from './vedtakKlageSubmitPanel.less';

interface OwnProps {
  previewVedtakCallback: () => Promise<any>;
  behandlingPaaVent: boolean;
  readOnly: boolean;
  lagreVedtak: () => void;
  isSubmitting: boolean;
}

export const VedtakKlageSubmitPanel: FunctionComponent<OwnProps> = ({
  behandlingPaaVent,
  previewVedtakCallback,
  readOnly,
  lagreVedtak,
  isSubmitting,
}) => {
  const forhåndsvis = useCallback((e: KeyboardEvent | MouseEvent) => {
    e.preventDefault();
    previewVedtakCallback();
  }, []);

  return (
    <Row>
      <Column xs="6">
        {!readOnly && (
          <Hovedknapp
            mini
            className={styles.mainButton}
            onClick={lagreVedtak}
            disabled={behandlingPaaVent || isSubmitting}
            spinner={isSubmitting}
          >
            <FormattedMessage id="VedtakKlageForm.TilGodkjenning" />
          </Hovedknapp>
        )}
        <a
          href=""
          onClick={forhåndsvis}
          onKeyDown={(e) => (e.key === 'Enter' ? forhåndsvis(e) : null)}
          className={classNames('lenke lenke--frittstaende')}
        >
          <FormattedMessage id="VedtakKlageForm.ForhandvisBrev" />
        </a>
      </Column>
    </Row>
  );
};

export default VedtakKlageSubmitPanel;
