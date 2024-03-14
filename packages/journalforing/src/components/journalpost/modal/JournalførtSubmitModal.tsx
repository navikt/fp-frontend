import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, Button, BodyShort, Link, HStack, VStack } from '@navikt/ds-react';
import { CheckmarkCircleIcon } from '@navikt/aksel-icons';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import SaksnummerType from '../../../typer/saksnummerTsType';
import styles from './journalførtSubmitModal.module.css';

const velgSakLenke = (saksnummer: string): string => `/fagsak/${saksnummer}/`;

type OwnProps = Readonly<{
  saksnummer?: SaksnummerType;
  lukkModal: () => void;
  showModal: boolean;
  isLoading: boolean;
}>;

/**
 * JournalførtSubmitModal - Viser modal som gir saksnummer journalposten ble ført på
 */
const JournalførtSubmitModal: FunctionComponent<OwnProps> = ({ saksnummer, lukkModal, showModal, isLoading }) => {
  if (!showModal) {
    return null;
  }
  const lenke = saksnummer?.saksnummer ? velgSakLenke(saksnummer?.saksnummer) : undefined;
  return (
    <Modal width="small" open={showModal} onClose={lukkModal} aria-label="journalpost-modal">
      <Modal.Body>
        <VStack gap="4">
          {isLoading && (
            <>
              <HStack justify="center">
                <LoadingPanel />
              </HStack>
              <HStack justify="center">
                <BodyShort>
                  <FormattedMessage id="Journalfør.Modal.Ferdigstiller" />
                </BodyShort>
              </HStack>
            </>
          )}
          {!isLoading && lenke && (
            <>
              <HStack justify="center">
                <CheckmarkCircleIcon className={styles.ferdigIkon} />
              </HStack>
              <HStack justify="center">
                <BodyShort>
                  <FormattedMessage id="Journalfør.Modal.Journalført" />{' '}
                  <Link target="_blank" rel="noreferrer" href={lenke}>
                    {saksnummer?.saksnummer}
                  </Link>
                </BodyShort>
              </HStack>
            </>
          )}
          <HStack justify="center">
            <Button size="small" variant="primary" onClick={lukkModal} disabled={false} autoFocus type="button">
              <FormattedMessage id="Journalfør.Modal.Ok" />
            </Button>
          </HStack>
        </VStack>
      </Modal.Body>
    </Modal>
  );
};
export default JournalførtSubmitModal;
