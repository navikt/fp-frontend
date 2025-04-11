import { type ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Buildings3Icon, SilhouetteIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, CopyButton, Heading, HStack, Search, VStack } from '@navikt/ds-react';
import { isValidFodselsnummer } from '@navikt/ft-utils';

import type { ForhåndsvisBrukerRespons } from '../../../typer/forhåndsvisBrukerResponsTsType';
import type { Journalpost } from '../../../typer/journalpostTsType';
import type { OppdaterMedBruker } from '../../../typer/oppdaterBrukerTsType';

import styles from './brukerAvsenderPanel.module.css';

const finnAvsenderBilde = (journalpost: Journalpost): ReactElement => {
  const avsenderId = journalpost.avsender?.id;
  if (avsenderId && avsenderId.length === 9) {
    return <Buildings3Icon className={styles.ikon} />;
  }
  return <SilhouetteIcon className={styles.ikon} />;
};

interface BrukerAvsenderRadProps {
  navn: string;
  id: string;
  ikon: ReactElement;
  title?: string;
}

const BrukerAvsenderRad = ({ navn, id, ikon, title }: BrukerAvsenderRadProps): ReactElement => (
  <VStack gap="2" className={styles.kolBredde}>
    {title && (
      <Heading size="small">
        <FormattedMessage id={title} />
      </Heading>
    )}
    <HStack gap="2">
      <div className={styles.ikonKol}>{ikon}</div>
      <VStack gap="1">
        <BodyShort>{navn}</BodyShort>
        <HStack gap="1">
          <div className={styles.kopiTekst}>
            <BodyShort>{id}</BodyShort>
          </div>
          <div className={styles.clipBoard}>
            <CopyButton copyText={id} variant="action" />
          </div>
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

type Props = Readonly<{
  journalpost: Journalpost;
  hentForhåndsvisningAvSøker: (fnr: string) => void;
  skalKunneEndreSøker: boolean;
  brukerTilForhåndsvisning?: ForhåndsvisBrukerRespons;
  knyttSøkerTilJournalpost: (params: OppdaterMedBruker) => void;
  lasterBruker: boolean;
}>;

/**
 * BrukerAvsenderPanel - Inneholder detaljer om bruker og avsender
 */
export const BrukerAvsenderPanel = ({
  journalpost,
  hentForhåndsvisningAvSøker,
  skalKunneEndreSøker,
  brukerTilForhåndsvisning,
  knyttSøkerTilJournalpost,
  lasterBruker,
}: Props) => {
  const intl = useIntl();
  const [søkerFeilmelding, setSøkerFeilmelding] = useState<string | undefined>(undefined);
  const [fnrSomSkalForhåndsvises, setFnrSomSkalForhåndsvises] = useState<string | undefined>(undefined);

  const knyttSøkerTilJP = () => {
    if (fnrSomSkalForhåndsvises) {
      knyttSøkerTilJournalpost({
        journalpostId: journalpost.journalpostId,
        fødselsnummer: fnrSomSkalForhåndsvises,
      });
    }
  };

  const forhåndsvisSøker = (fnr: string | undefined) => {
    if (!fnr) {
      setSøkerFeilmelding(undefined);
    } else if (!isValidFodselsnummer(fnr)) {
      setSøkerFeilmelding(intl.formatMessage({ id: 'ValgtOppgave.Søk.BrukerFeil' }, { fødselsnummer: fnr }));
    } else {
      setFnrSomSkalForhåndsvises(fnr);
      setSøkerFeilmelding(undefined);
      hentForhåndsvisningAvSøker(fnr);
    }
  };

  const oppdaterMedBrukerKlikk = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-expect-error Fiks!
      const fnr = e.target?.value;
      forhåndsvisSøker(fnr);
    }
  };

  return (
    <div className={styles.brukerAvsenderRad}>
      <div>
        {skalKunneEndreSøker && (
          <VStack gap="4">
            <Heading size="small">
              <FormattedMessage id="ValgtOppgave.Bruker" />
            </Heading>
            <Alert variant="warning">
              <BodyShort>
                <FormattedMessage id="ValgtOppgave.Søk.Bruker" />
              </BodyShort>
            </Alert>
            <VStack gap="2">
              <Search
                label={intl.formatMessage({ id: 'ValgtOppgave.Søk.FinnBruker' })}
                onKeyDown={oppdaterMedBrukerKlikk}
                onSearchClick={forhåndsvisSøker}
                hideLabel={false}
              >
                <Search.Button type="button" loading={lasterBruker} />
              </Search>
              {søkerFeilmelding && <BodyShort className={styles.error}>{søkerFeilmelding}</BodyShort>}
              {brukerTilForhåndsvisning && (
                <VStack gap="4">
                  <BrukerAvsenderRad
                    navn={brukerTilForhåndsvisning.navn}
                    id={brukerTilForhåndsvisning.fødselsnummer}
                    ikon={<SilhouetteIcon className={styles.ikon} />}
                  />
                  <Button type="button" onClick={knyttSøkerTilJP}>
                    <FormattedMessage id="ValgtOppgave.Søk.KnyttTil" />
                  </Button>
                </VStack>
              )}
            </VStack>
          </VStack>
        )}
      </div>
      {journalpost.bruker?.navn && (
        <BrukerAvsenderRad
          navn={journalpost.bruker.navn}
          id={journalpost.bruker.fnr}
          ikon={<SilhouetteIcon className={styles.ikon} />}
          title="ValgtOppgave.Bruker"
        />
      )}
      {journalpost.avsender?.navn && (
        <BrukerAvsenderRad
          navn={journalpost.avsender.navn}
          id={journalpost.avsender.id}
          ikon={finnAvsenderBilde(journalpost)}
          title="ValgtOppgave.Avsender"
        />
      )}
    </div>
  );
};
