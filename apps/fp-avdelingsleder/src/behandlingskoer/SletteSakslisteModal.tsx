import { FormattedMessage, useIntl } from 'react-intl';

import { Button, Heading, Modal } from '@navikt/ds-react';

import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';

import styles from './sletteSakslisteModal.module.css';

interface Props {
  valgtSaksliste: SakslisteAvdeling;
  cancel: () => void;
  submit: (saksliste: SakslisteAvdeling) => void;
}

/**
 * SletteSakslisteModal
 *
 * Modal som lar en avdelingsleder fjerne sakslister.
 */
export const SletteSakslisteModal = ({ valgtSaksliste, cancel, submit }: Props) => {
  const intl = useIntl();
  return (
    <Modal
      width="small"
      open
      aria-label={intl.formatMessage({ id: 'SletteSakslisteModal.SletteModal' })}
      onClose={cancel}
    >
      <Modal.Header>
        <Heading size="small" level="2">
          <FormattedMessage id="SletteSakslisteModal.SletteSaksliste" values={{ sakslisteNavn: valgtSaksliste.navn }} />
        </Heading>
      </Modal.Header>
      <Modal.Footer>
        <Button
          className={styles.submitButton}
          size="small"
          variant="primary"
          onClick={() => submit(valgtSaksliste)}
          autoFocus
          type="button"
        >
          <FormattedMessage id="SletteSakslisteModal.Ja" />
        </Button>
        <Button className={styles.cancelButton} size="small" variant="secondary" onClick={cancel} type="button">
          <FormattedMessage id="SletteSakslisteModal.Nei" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
