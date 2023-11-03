import React, { FunctionComponent, useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { Button, Heading, Link } from '@navikt/ds-react';

import styles from './header.module.css';
import Journalpost from '../../typer/journalpostTsType';
import JournalpostSøkModal from './JournalpostSøkModal';

type OwnProps = Readonly<{
  hentJournalpost: (journalpostId: string) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtJournalpost?: Journalpost;
}>;

/**
 * Header - Journalføringsheader, inneholder tittel, tilbakeknapp og søkeknapp for journalpost
 */
const Header: FunctionComponent<OwnProps> = ({ valgtJournalpost, hentJournalpost, avbrytVisningAvJournalpost }) => {
  const [åpenSøkemodal, setÅpenSøkemodal] = useState<boolean>(false);
  const åpneModal = useCallback(() => {
    setÅpenSøkemodal(true);
  }, [åpenSøkemodal]);
  const lukkModal = useCallback(() => {
    setÅpenSøkemodal(false);
  }, []);
  return (
    <div className={styles.header}>
      {valgtJournalpost && (
        <Link onClick={avbrytVisningAvJournalpost} className={styles.link}>
          <ChevronLeftIcon />
          <FormattedMessage id="Journalforing.Oversikt" />
        </Link>
      )}
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.tittelKol}>
            <Heading size="medium">
              <FormattedMessage id="Journalforing.Tittel" />
            </Heading>
          </FlexColumn>
          <FlexColumn className={styles.søkeKol}>
            <Button
              size="xsmall"
              variant="secondary-neutral"
              type="button"
              onClick={åpneModal}
              icon={<MagnifyingGlassIcon height="32px" width="32px" />}
            >
              Søk
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <JournalpostSøkModal hentJournalpost={hentJournalpost} lukkModal={lukkModal} erÅpen={åpenSøkemodal} />
    </div>
  );
};
export default Header;
