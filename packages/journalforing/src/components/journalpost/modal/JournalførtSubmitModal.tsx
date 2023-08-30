import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, Button, BodyShort, Link } from '@navikt/ds-react';
import { CheckmarkCircleIcon } from '@navikt/aksel-icons';

import { FlexColumn, FlexRow, LoadingPanel } from '@navikt/ft-ui-komponenter';
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
    <Modal width="small" open={showModal} onClose={lukkModal}>
      <Modal.Body>
        {isLoading && (
          <>
            <FlexRow className={styles.sentrerRad}>
              <FlexColumn>
                <LoadingPanel />
              </FlexColumn>
            </FlexRow>
            <FlexRow className={styles.sentrerRad}>
              <FlexColumn>
                <BodyShort>
                  <FormattedMessage id="Journalfør.Modal.Ferdigstiller" />
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          </>
        )}
        {!isLoading && lenke && (
          <>
            <FlexRow className={styles.sentrerRad}>
              <FlexColumn>
                <CheckmarkCircleIcon className={styles.ferdigIkon} />
              </FlexColumn>
            </FlexRow>
            <FlexRow className={styles.sentrerRad}>
              <FlexColumn>
                <BodyShort>
                  <FormattedMessage id="Journalfør.Modal.Journalført" />{' '}
                  <Link target="_blank" rel="noreferrer" href={lenke}>
                    {saksnummer?.saksnummer}
                  </Link>
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          </>
        )}
        <FlexRow className={styles.sentrerRad}>
          <FlexColumn>
            <Button size="small" variant="primary" onClick={lukkModal} disabled={false} autoFocus type="button">
              <FormattedMessage id="Journalfør.Modal.Ok" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </Modal.Body>
    </Modal>
  );
};
export default JournalførtSubmitModal;
