import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { Button, HStack, Heading, Link } from '@navikt/ds-react';

import styles from './header.module.css';
import Journalpost from '../../typer/journalpostTsType';
import JournalpostSøkModal from './JournalpostSøkModal';

type OwnProps = Readonly<{
  hentJournalpost: (journalpostId: string) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtJournalpost?: Journalpost;
  harSøktOgFunnetIngenMatch: boolean;
  antallOppgaver?: number;
}>;

/**
 * Header - Journalføringsheader, inneholder tittel, tilbakeknapp og søkeknapp for journalpost
 */
const JournalføringHeader: FunctionComponent<OwnProps> = ({
  valgtJournalpost,
  hentJournalpost,
  avbrytVisningAvJournalpost,
  harSøktOgFunnetIngenMatch,
  antallOppgaver,
}) => {
  const [åpenSøkemodal, setÅpenSøkemodal] = useState<boolean>(false);
  const åpneModal = useCallback(() => {
    setÅpenSøkemodal(true);
  }, [åpenSøkemodal]);
  const lukkModal = useCallback(() => {
    setÅpenSøkemodal(false);
  }, []);

  useEffect(() => {
    if (valgtJournalpost) {
      lukkModal();
    }
  }, [valgtJournalpost]);
  const harHentetOppgaver = antallOppgaver || antallOppgaver === 0;

  return (
    <div className={styles.header}>
      {valgtJournalpost && (
        <Link onClick={avbrytVisningAvJournalpost} className={styles.link}>
          <ChevronLeftIcon />
          <FormattedMessage id="Journalforing.Oversikt" />
        </Link>
      )}
      <VerticalSpacer eightPx />
      <HStack gap="8">
        <Heading size="medium">
          <FormattedMessage id="Journalforing.Tittel" />
        </Heading>
        {!valgtJournalpost && (
          <>
            <Button
              size="xsmall"
              variant="secondary-neutral"
              type="button"
              onClick={åpneModal}
              icon={<MagnifyingGlassIcon height="32px" width="32px" />}
            >
              Søk
            </Button>
            <JournalpostSøkModal
              hentJournalpost={hentJournalpost}
              lukkModal={lukkModal}
              erÅpen={åpenSøkemodal}
              harSøktOgFunnetIngenMatch={harSøktOgFunnetIngenMatch}
            />
          </>
        )}
      </HStack>
      {!valgtJournalpost && harHentetOppgaver && (
        <FormattedMessage id="Journalforing.Antall.Oppgaver" values={{ antall: antallOppgaver }} />
      )}
    </div>
  );
};
export default JournalføringHeader;
