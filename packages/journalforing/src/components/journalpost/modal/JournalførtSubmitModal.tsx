import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Link, Modal, VStack } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import type { SaksnummerType } from '../../../typer/saksnummerTsType';

import styles from './journalførtSubmitModal.module.css';

const velgSakLenke = (saksnummer: string): string => `/fagsak/${saksnummer}/`;

type Props = Readonly<{
  saksnummer?: SaksnummerType;
  lukkModal: () => void;
  showModal: boolean;
  isLoading: boolean;
}>;

/**
 * JournalførtSubmitModal - Viser modal som gir saksnummer journalposten ble ført på
 */
export const JournalførtSubmitModal = ({ saksnummer, lukkModal, showModal, isLoading }: Props) => {
  if (!showModal) {
    return null;
  }

  const lenke = saksnummer?.saksnummer ? velgSakLenke(saksnummer?.saksnummer) : undefined;

  return (
    <Modal width="small" open={showModal} onClose={lukkModal} aria-label="journalpost-modal">
      <Modal.Body>
        <VStack gap="space-16">
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
