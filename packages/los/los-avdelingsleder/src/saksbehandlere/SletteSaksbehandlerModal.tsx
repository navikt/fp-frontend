import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal as NavModal } from '@navikt/ds-react';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import styles from './sletteSaksbehandlerModal.module.css';

type Props = Readonly<{
  valgtSaksbehandler: SaksbehandlerProfil;
  closeSletteModal: () => void;
  fjernSaksbehandler: (saksbehandler: SaksbehandlerProfil) => void;
}>;

/**
 * SletteSaksbehandlerModal
 *
 * Presentasjonskomponent. Modal som lar en avdelingsleder fjerne tilgjengelige saksbehandlere.
 */
export const SletteSaksbehandlerModal = ({ valgtSaksbehandler, closeSletteModal, fjernSaksbehandler }: Props) => {
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
          <FormattedMessage id="SletteSaksbehandlerModal.Ja" />
        </Button>
        <Button
          className={styles.cancelButton}
          size="small"
          variant="secondary"
          onClick={closeSletteModal}
          type="button"
        >
          <FormattedMessage id="SletteSaksbehandlerModal.Nei" />
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};
