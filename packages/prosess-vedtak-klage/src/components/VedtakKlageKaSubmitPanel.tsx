import React, {
  FunctionComponent, useCallback, KeyboardEvent, MouseEvent,
} from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Button } from '@navikt/ds-react';

import { KlageVurdering } from '@fpsak-frontend/types';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import styles from './vedtakKlageSubmitPanel.less';

interface OwnProps {
  previewVedtakCallback: () => Promise<any>;
  behandlingPaaVent: boolean;
  begrunnelse?: string;
  klageResultat?: KlageVurdering['klageVurderingResultatNK'] | KlageVurdering['klageVurderingResultatNFP'];
  readOnly: boolean;
  lagreVedtak: () => void;
  isSubmitting: boolean;
  kabalisert: boolean;
}

export const VedtakKlageKaSubmitPanel: FunctionComponent<OwnProps> = ({
  behandlingPaaVent,
  previewVedtakCallback,
  klageResultat,
  readOnly,
  lagreVedtak,
  isSubmitting,
  kabalisert,
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
              size="small"
              variant="primary"
              className={styles.mainButton}
              onClick={lagreVedtak}
              disabled={behandlingPaaVent || isSubmitting || klageResultat.godkjentAvMedunderskriver}
              loading={isSubmitting}
              type="button"
            >
              <FormattedMessage id="VedtakKlageForm.TilGodkjenningKa" />
            </Button>
          </FlexColumn>
        )}
        {!readOnly && (
          <FlexColumn>
            <Button
              size="small"
              variant="primary"
              className={styles.mainButton}
              onClick={lagreVedtak}
              disabled={behandlingPaaVent || isSubmitting || !klageResultat.godkjentAvMedunderskriver}
              loading={isSubmitting}
              type="button"
            >
              <FormattedMessage id="VedtakKlageForm.FerdigstillKlageKa" />
            </Button>
          </FlexColumn>
        )}
        {!kabalisert && (
          <FlexColumn>
            <a
              href=""
              onClick={forhåndsvis}
              onKeyDown={(e) => (e.key === 'Enter' ? forhåndsvis(e) : null)}
              className={classNames('lenke lenke--frittstaende')}
            >
              <FormattedMessage id="VedtakKlageForm.ForhandvisBrev" />
            </a>
          </FlexColumn>
        )}
      </FlexRow>
    </FlexContainer>
  );
};

export default VedtakKlageKaSubmitPanel;
