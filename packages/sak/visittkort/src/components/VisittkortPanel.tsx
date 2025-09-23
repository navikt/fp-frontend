import { useIntl } from 'react-intl';

import { HStack, Spacer } from '@navikt/ds-react';
import { EmptyPersonCard, Gender, PersonCard } from '@navikt/ft-plattform-komponenter';

import { NavBrukerKjonn } from '@navikt/fp-kodeverk';
import type { FagsakHendelse, Person } from '@navikt/fp-types';

import { VisittkortBarnInfoPanel } from './VisittkortBarnInfoPanel';
import { VisittkortLabels } from './VisittkortLabels';

import styles from './visittkortPanel.module.css';

const utledKjonn = (kjonn: string): Gender => {
  if (kjonn === NavBrukerKjonn.KVINNE) {
    return Gender.female;
  }
  return kjonn === NavBrukerKjonn.MANN ? Gender.male : Gender.unknown;
};

interface Props {
  erMor: boolean;
  bruker: Person;
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  lenkeTilAnnenPart?: string;
  harVergeIÅpenBehandling: boolean;
  erTilbakekreving: boolean;
}

export const VisittkortPanel = ({
  erMor,
  bruker,
  annenPart,
  familiehendelse,
  lenkeTilAnnenPart,
  harVergeIÅpenBehandling,
  erTilbakekreving,
}: Props) => {
  const intl = useIntl();

  if (erTilbakekreving && harVergeIÅpenBehandling) {
    return (
      <div className={styles['container']}>
        <PersonCard
          name={bruker.navn}
          fodselsnummer={bruker.fødselsnummer}
          gender={utledKjonn(bruker.kjønn)}
          renderLabelContent={() => (
            <VisittkortLabels fagsakPerson={bruker} harVergeIÅpenBehandling={harVergeIÅpenBehandling} />
          )}
        />
      </div>
    );
  }

  const primærBruker = erMor || !annenPart ? bruker : annenPart;
  const sekundærBruker = !erMor && annenPart ? bruker : annenPart;

  return (
    <div className={styles['container']}>
      <HStack wrap={false} align="center">
        {primærBruker.aktørId ? (
          <PersonCard
            name={primærBruker.navn}
            fodselsnummer={primærBruker.fødselsnummer}
            gender={utledKjonn(primærBruker.kjønn)}
            url={lenkeTilAnnenPart}
            renderLabelContent={() => (
              <VisittkortLabels fagsakPerson={primærBruker} harVergeIÅpenBehandling={harVergeIÅpenBehandling} />
            )}
            isActive={erMor}
          />
        ) : (
          <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
        )}
        {sekundærBruker &&
          (sekundærBruker.aktørId ? (
            <PersonCard
              name={sekundærBruker.navn}
              fodselsnummer={sekundærBruker.fødselsnummer}
              gender={utledKjonn(sekundærBruker.kjønn)}
              url={lenkeTilAnnenPart}
              renderLabelContent={() => <VisittkortLabels fagsakPerson={sekundærBruker} />}
              isActive={!erMor}
            />
          ) : (
            <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
          ))}
        {familiehendelse && (
          <>
            <Spacer />
            <VisittkortBarnInfoPanel familiehendelse={familiehendelse} />
          </>
        )}
      </HStack>
    </div>
  );
};
