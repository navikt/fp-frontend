import React, {
  FunctionComponent, useCallback, KeyboardEvent, MouseEvent,
} from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';

import { KlageVurdering } from '@fpsak-frontend/types';

import styles from './vedtakKlageSubmitPanel.less';

interface OwnProps {
  previewVedtakCallback: () => Promise<any>;
  behandlingPaaVent: boolean;
  begrunnelse?: string;
  klageResultat?: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'];
  readOnly: boolean;
  lagreVedtak: () => void;
  isSubmitting: boolean;
}

export const VedtakKlageKaSubmitPanel: FunctionComponent<OwnProps> = ({
  behandlingPaaVent,
  previewVedtakCallback,
  klageResultat,
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
      <Column xs="8">
        {!readOnly && (
          <Hovedknapp
            mini
            className={styles.mainButton}
            onClick={lagreVedtak}
            disabled={behandlingPaaVent || isSubmitting || klageResultat.godkjentAvMedunderskriver}
            spinner={isSubmitting}
          >
            <FormattedMessage id="VedtakKlageForm.TilGodkjenningKa" />
          </Hovedknapp>
        )}
        {!readOnly && (
          <Hovedknapp
            mini
            className={styles.mainButton}
            onClick={lagreVedtak}
            disabled={behandlingPaaVent || isSubmitting || !klageResultat.godkjentAvMedunderskriver}
            spinner={isSubmitting}
          >
            <FormattedMessage id="VedtakKlageForm.FerdigstillKlageKa" />
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

export default VedtakKlageKaSubmitPanel;
