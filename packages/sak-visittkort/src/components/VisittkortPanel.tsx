import React from 'react';
import { useIntl } from 'react-intl';

import { HStack, Spacer } from '@navikt/ds-react';
import { EmptyPersonCard, Gender, PersonCard } from '@navikt/ft-plattform-komponenter';

import { NavBrukerKjonn } from '@navikt/fp-kodeverk';
import { FagsakHendelse, FagsakPerson } from '@navikt/fp-types';

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
  bruker: FagsakPerson;
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  lenkeTilAnnenPart?: string;
  harVerge: boolean;
  erTilbakekreving: boolean;
}

export const VisittkortPanel = ({
  erMor,
  bruker,
  annenPart,
  familiehendelse,
  lenkeTilAnnenPart,
  harVerge,
  erTilbakekreving,
}: Props) => {
  const intl = useIntl();

  if (erTilbakekreving && harVerge) {
    return (
      <div className={styles.container}>
        <PersonCard
          name={bruker.navn}
          fodselsnummer={bruker.fødselsnummer}
          gender={utledKjonn(bruker.kjønn)}
          renderLabelContent={() => <VisittkortLabels fagsakPerson={bruker} harVerge={harVerge} />}
        />
      </div>
    );
  }

  const primærBruker = erMor || !annenPart ? bruker : annenPart;
  const sekundærBruker = !erMor && annenPart ? bruker : annenPart;

  return (
    <div className={styles.container}>
      <HStack wrap={false} align="center">
        {primærBruker.aktørId ? (
          <PersonCard
            name={primærBruker.navn}
            fodselsnummer={primærBruker.fødselsnummer}
            gender={utledKjonn(primærBruker.kjønn)}
            url={lenkeTilAnnenPart}
            renderLabelContent={() => <VisittkortLabels fagsakPerson={primærBruker} harVerge={harVerge} />}
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
