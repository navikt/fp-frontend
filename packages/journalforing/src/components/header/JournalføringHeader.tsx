import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronLeftIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { Button, Heading, HStack, Link } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { Journalpost } from '../../typer/journalpostTsType';
import { JournalpostSøkModal } from './JournalpostSøkModal';

import styles from './header.module.css';

type Props = Readonly<{
  hentJournalpost: (journalpostId: string) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtJournalpost?: Journalpost;
  harHentetFerdigJournalpost: boolean;
  antallOppgaver?: number;
}>;

/**
 * Header - Journalføringsheader, inneholder tittel, tilbakeknapp og søkeknapp for journalpost
 */
export const JournalføringHeader = ({
  valgtJournalpost,
  hentJournalpost,
  avbrytVisningAvJournalpost,
  harHentetFerdigJournalpost,
  antallOppgaver,
}: Props) => {
  const [åpenSøkemodal, setÅpenSøkemodal] = useState(false);

  useEffect(() => {
    if (valgtJournalpost) {
      setÅpenSøkemodal(false);
    }
  }, [valgtJournalpost]);

  const harHentetOppgaver = antallOppgaver ?? antallOppgaver === 0;

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
              onClick={() => {
                setÅpenSøkemodal(true);
              }}
              icon={<MagnifyingGlassIcon height="32px" width="32px" />}
            >
              Søk
            </Button>
            <JournalpostSøkModal
              hentJournalpost={hentJournalpost}
              lukkModal={() => {
                setÅpenSøkemodal(false);
              }}
              erÅpen={åpenSøkemodal}
              harSøktOgFunnetIngenMatch={harHentetFerdigJournalpost && !valgtJournalpost}
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
