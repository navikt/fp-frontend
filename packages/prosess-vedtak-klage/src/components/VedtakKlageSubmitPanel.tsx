import React, { FunctionComponent, useCallback, KeyboardEvent, MouseEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Button } from '@navikt/ds-react';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import styles from './vedtakKlageSubmitPanel.module.css';

interface OwnProps {
  previewVedtakCallback: () => Promise<any>;
  behandlingPaaVent: boolean;
  readOnly: boolean;
  lagreVedtak: () => void;
  isSubmitting: boolean;
}

const VedtakKlageSubmitPanel: FunctionComponent<OwnProps> = ({
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
    <FlexContainer>
      <FlexRow>
        {!readOnly && (
          <FlexColumn>
            <Button
              variant="primary"
              size="small"
              className={styles.mainButton}
              onClick={lagreVedtak}
              disabled={behandlingPaaVent || isSubmitting}
              loading={isSubmitting}
              type="button"
            >
              <FormattedMessage id="VedtakKlageForm.TilGodkjenning" />
            </Button>
          </FlexColumn>
        )}
        <FlexColumn>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href=""
            onClick={forhåndsvis}
            onKeyDown={e => (e.key === 'Enter' ? forhåndsvis(e) : null)}
            className={classNames('lenke lenke--frittstaende')}
          >
            <FormattedMessage id="VedtakKlageForm.ForhandvisBrev" />
          </a>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

export default VedtakKlageSubmitPanel;
