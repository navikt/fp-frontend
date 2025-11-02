import { type ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Buildings3Icon, SilhouetteIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, CopyButton, ErrorMessage, Heading, HStack, Search, VStack } from '@navikt/ds-react';
import { isValidFodselsnummer } from '@navikt/ft-utils';

import type { ForhåndsvisBrukerRespons } from '../../../typer/forhåndsvisBrukerResponsTsType';
import type { Journalpost } from '../../../typer/journalpostTsType';
import type { OppdaterMedBruker } from '../../../typer/oppdaterBrukerTsType';

import styles from './brukerAvsenderPanel.module.css';

const finnAvsenderBilde = (journalpost: Journalpost): ReactElement => {
  const avsenderId = journalpost.avsender.id;
  if (avsenderId.length === 9) {
    return <Buildings3Icon className={styles['ikon']} />;
  }
  return <SilhouetteIcon className={styles['ikon']} />;
};

interface BrukerAvsenderRadProps {
  navn: string;
  id: string;
  ikon: ReactElement;
  title?: ReactElement;
}

const BrukerAvsenderRad = ({ navn, id, ikon, title }: BrukerAvsenderRadProps): ReactElement => (
  <VStack gap="space-8">
    {title && (
      <Heading size="small" level="4">
        {title}
      </Heading>
    )}
    <HStack gap="space-16">
      <div className={styles['ikonKol']}>{ikon}</div>
      <div>
        <BodyShort>{navn}</BodyShort>
        <HStack gap="space-4" align="center">
          <BodyShort>{id}</BodyShort>
          <CopyButton copyText={id} variant="action" size="small" />
        </HStack>
      </div>
    </HStack>
  </VStack>
);

interface Props {
  journalpost: Journalpost;
  hentForhåndsvisningAvSøker: (fnr: string) => void;
  skalKunneEndreSøker: boolean;
  brukerTilForhåndsvisning?: ForhåndsvisBrukerRespons;
  knyttSøkerTilJournalpost: (params: OppdaterMedBruker) => void;
  lasterBruker: boolean;
}

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
      const fnr = e.currentTarget.value;
      forhåndsvisSøker(fnr);
    }
  };

  return (
    <VStack gap="space-16">
      {skalKunneEndreSøker && (
        <VStack gap="space-8">
          <Heading size="small" level="4">
            <FormattedMessage id="ValgtOppgave.Søker" />
          </Heading>
          <Alert variant="warning" size="small">
            <FormattedMessage id="ValgtOppgave.Søk.Bruker" />
          </Alert>
          <Search
            label={intl.formatMessage({ id: 'ValgtOppgave.Søk.FinnBruker' })}
            onKeyDown={oppdaterMedBrukerKlikk}
            onSearchClick={forhåndsvisSøker}
            hideLabel={false}
          >
            <Search.Button type="button" loading={lasterBruker} />
          </Search>
          {søkerFeilmelding && <ErrorMessage>{søkerFeilmelding}</ErrorMessage>}
          {brukerTilForhåndsvisning && (
            <VStack gap="space-16">
              <BrukerAvsenderRad
                navn={brukerTilForhåndsvisning.navn}
                id={brukerTilForhåndsvisning.fødselsnummer}
                ikon={<SilhouetteIcon className={styles['ikon']} />}
              />
              <Button type="button" onClick={knyttSøkerTilJP}>
                <FormattedMessage id="ValgtOppgave.Søk.KnyttTil" />
              </Button>
            </VStack>
          )}
        </VStack>
      )}

      {journalpost.bruker?.navn && (
        <BrukerAvsenderRad
          navn={journalpost.bruker.navn}
          id={journalpost.bruker.fnr}
          ikon={<SilhouetteIcon className={styles['ikon']} />}
          title={<FormattedMessage id="ValgtOppgave.Søker" />}
        />
      )}
      {journalpost.avsender.navn && (
        <BrukerAvsenderRad
          navn={journalpost.avsender.navn}
          id={journalpost.avsender.id}
          ikon={finnAvsenderBilde(journalpost)}
          title={<FormattedMessage id="ValgtOppgave.Avsender" />}
        />
      )}
    </VStack>
  );
};
