import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, Modal as NavModal, Heading } from '@navikt/ds-react';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import styles from './sletteSaksbehandlerModal.module.css';

type OwnProps = Readonly<{
  valgtSaksbehandler: SaksbehandlerProfil;
  closeSletteModal: () => void;
  fjernSaksbehandler: (saksbehandler: SaksbehandlerProfil) => void;
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
    <NavModal
      width="small"
      open
      aria-label={intl.formatMessage({ id: 'SletteSaksbehandlerModal.SletteModal' })}
      onClose={closeSletteModal}
    >
      <NavModal.Header>
        <Heading size="small">
          <FormattedMessage
            id="SletteSaksbehandlerModal.SletteSaksbehandler"
            values={{ saksbehandlerNavn: valgtSaksbehandler.navn }}
          />
        </Heading>
      </NavModal.Header>
      <NavModal.Footer>
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
        <Button
          className={styles.cancelButton}
          size="small"
          variant="secondary"
          onClick={closeSletteModal}
          type="button"
        >
          {intl.formatMessage({ id: 'SletteSaksbehandlerModal.Nei' })}
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};

export default SletteSaksbehandlerModal;
