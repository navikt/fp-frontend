import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronLeftIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, Link, Spacer } from '@navikt/ds-react';

import type { Journalpost } from '../../typer/journalpostTsType';
import { JournalpostSøkModal } from './JournalpostSøkModal';

import styles from './header.module.css';

interface Props {
  hentJournalpost: (journalpostId: string) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtJournalpost?: Journalpost;
  harHentetFerdigJournalpost: boolean;
  antallOppgaver?: number;
}

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
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setÅpenSøkemodal(false);
    }
  }, [valgtJournalpost]);

  return (
    <HStack className={styles['header']}>
      <div>
        <HStack gap="space-32" align="center">
          {valgtJournalpost && (
            <BodyShort as={Link} size="large" onClick={avbrytVisningAvJournalpost}>
              <ChevronLeftIcon height="28px" width="28px" />
              <FormattedMessage id="Journalforing.Oversikt" />
            </BodyShort>
          )}
          <Heading size="medium" level="2">
            <FormattedMessage id="Journalforing.Tittel" />
          </Heading>
        </HStack>
        {!valgtJournalpost && antallOppgaver != undefined && antallOppgaver > 0 && (
          <BodyShort>
            <FormattedMessage id="Journalforing.Antall.Oppgaver" values={{ antall: antallOppgaver }} />
          </BodyShort>
        )}
      </div>
      <Spacer />
      {!valgtJournalpost && (
        <>
          <Button
            variant="secondary"
            type="button"
            icon={<MagnifyingGlassIcon aria-hidden height="32px" width="32px" />}
            onClick={() => {
              setÅpenSøkemodal(true);
            }}
          >
            <FormattedMessage id="Journalpost.Søk.Tittel" />
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
  );
};
