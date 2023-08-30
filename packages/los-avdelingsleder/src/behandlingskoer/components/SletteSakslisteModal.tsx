import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Modal as NavModal, Heading } from '@navikt/ds-react';

import Saksliste from '../../typer/sakslisteAvdelingTsType';

import styles from './sletteSakslisteModal.module.css';

interface OwnProps {
  valgtSaksliste: Saksliste;
  cancel: () => void;
  submit: (saksliste: Saksliste) => void;
}

/**
 * SletteSakslisteModal
 *
 * Modal som lar en avdelingsleder fjerne sakslister.
 */
const SletteSakslisteModal: FunctionComponent<OwnProps> = ({ valgtSaksliste, cancel, submit }) => {
  const intl = useIntl();
  return (
    <NavModal
      width="small"
      open
      aria-label={intl.formatMessage({ id: 'SletteSakslisteModal.SletteModal' })}
      onClose={cancel}
    >
      <NavModal.Header>
        <Heading size="small">
          <FormattedMessage id="SletteSakslisteModal.SletteSaksliste" values={{ sakslisteNavn: valgtSaksliste.navn }} />
        </Heading>
      </NavModal.Header>
      <NavModal.Footer>
        <Button
          className={styles.submitButton}
          size="small"
          variant="primary"
          onClick={() => submit(valgtSaksliste)}
          autoFocus
          type="button"
        >
          {intl.formatMessage({ id: 'SletteSakslisteModal.Ja' })}
        </Button>
        <Button className={styles.cancelButton} size="small" variant="secondary" onClick={cancel} type="button">
          {intl.formatMessage({ id: 'SletteSakslisteModal.Nei' })}
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};

export default SletteSakslisteModal;
