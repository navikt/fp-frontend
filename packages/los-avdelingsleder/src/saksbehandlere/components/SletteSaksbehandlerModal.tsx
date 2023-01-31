import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, BodyShort } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';
import { Modal } from '@navikt/fp-los-felles';

import advarselImageUrl from '../../images/advarsel.svg';
import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';

import styles from './sletteSaksbehandlerModal.less';

type OwnProps = Readonly<{
  valgtSaksbehandler: Saksbehandler;
  closeSletteModal: () => void;
  fjernSaksbehandler: (saksbehandler: Saksbehandler) => void;
}>;

/**
 * SletteSaksbehandlerModal
 *
 * Presentasjonskomponent. Modal som lar en avdelingsleder fjerne tilgjengelige saksbehandlere.
 */
const SletteSaksbehandlerModal: FunctionComponent<OwnProps> = ({
  valgtSaksbehandler,
  closeSletteModal,
  fjernSaksbehandler,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      closeButton={false}
      open
      aria-label={intl.formatMessage({ id: 'SletteSaksbehandlerModal.SletteModal' })}
      onClose={closeSletteModal}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Image
              className={styles.image}
              alt={intl.formatMessage({ id: 'SletteSaksbehandlerModal.SletteModal' })}
              src={advarselImageUrl}
            />
            <div className={styles.divider} />
          </FlexColumn>
          <FlexColumn className={styles.text}>
            <BodyShort size="small">
              <FormattedMessage id="SletteSaksbehandlerModal.SletteSaksbehandler" values={{ saksbehandlerNavn: valgtSaksbehandler.navn }} />
            </BodyShort>
          </FlexColumn>
          <FlexColumn>
            <Button
              className={styles.submitButton}
              size="small"
              variant="primary"
              onClick={() => fjernSaksbehandler(valgtSaksbehandler)}
              autoFocus
              type="button"
            >
              {intl.formatMessage({ id: 'SletteSaksbehandlerModal.Ja' })}
            </Button>
          </FlexColumn>
          <FlexColumn>
            <Button
              className={styles.cancelButton}
              size="small"
              variant="secondary"
              onClick={closeSletteModal}
              type="button"
            >
              {intl.formatMessage({ id: 'SletteSaksbehandlerModal.Nei' })}
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Modal>
  );
};

export default SletteSaksbehandlerModal;
