import React, {
  FunctionComponent, useCallback, KeyboardEvent, MouseEvent,
} from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Button } from '@navikt/ds-react';
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
          <Button
            variant="primary"
            size="small"
            className={styles.mainButton}
            onClick={lagreVedtak}
            disabled={behandlingPaaVent || isSubmitting}
            loading={isSubmitting}
          >
            <FormattedMessage id="VedtakKlageForm.TilGodkjenning" />
          </Button>
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
