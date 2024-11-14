import React from 'react';
import { useIntl } from 'react-intl';
import { PersonCard, EmptyPersonCard, Gender } from '@navikt/ft-plattform-komponenter';
import { Fagsak, FagsakPersoner } from '@navikt/fp-types';
import { relasjonsRolleType, navBrukerKjonn } from '@navikt/fp-kodeverk';

import { HStack, Spacer } from '@navikt/ds-react';
import { VisittkortLabels } from './VisittkortLabels';
import { VisittkortBarnInfoPanel } from './VisittkortBarnInfoPanel';

import styles from './visittkortPanel.module.css';

const utledKjonn = (kjonn: string): Gender => {
  if (kjonn === navBrukerKjonn.KVINNE) {
    return Gender.female;
  }
  return kjonn === navBrukerKjonn.MANN ? Gender.male : Gender.unknown;
};

interface Props {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge: boolean;
  erTilbakekreving: boolean;
}

export const VisittkortPanel = ({ fagsak, fagsakPersoner, lenkeTilAnnenPart, harVerge, erTilbakekreving }: Props) => {
  const intl = useIntl();

  const fagsakPerson = fagsakPersoner.bruker;
  const erMor = fagsak.relasjonsRolleType === relasjonsRolleType.MOR;
  if (erTilbakekreving && harVerge) {
    return (
      <div className={styles.container}>
        <PersonCard
          name={fagsakPerson.navn}
          fodselsnummer={fagsakPerson.fødselsnummer}
          gender={fagsakPerson.kjønn === navBrukerKjonn.KVINNE ? Gender.female : Gender.male}
          renderLabelContent={() => <VisittkortLabels fagsakPerson={fagsakPerson} harVerge={harVerge} />}
        />
      </div>
    );
  }
  const soker = erMor || !fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;
  const annenPart = !erMor && fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;

  return (
    <div className={styles.container}>
      <HStack wrap={false} align="center">
        {soker.aktørId && (
          <PersonCard
            name={soker.navn}
            fodselsnummer={soker.fødselsnummer}
            gender={utledKjonn(soker.kjønn)}
            url={lenkeTilAnnenPart}
            renderLabelContent={() => <VisittkortLabels fagsakPerson={soker} harVerge={harVerge} />}
            isActive={erMor}
          />
        )}
        {!soker.aktørId && <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />}
        {annenPart?.aktørId && (
          <PersonCard
            name={annenPart.navn}
            fodselsnummer={annenPart.fødselsnummer}
            gender={utledKjonn(annenPart.kjønn)}
            url={lenkeTilAnnenPart}
            renderLabelContent={() => <VisittkortLabels fagsakPerson={annenPart} harVerge={false} />}
            isActive={!erMor}
          />
        )}
        {annenPart && !annenPart.aktørId && (
          <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
        )}
        {fagsakPersoner.familiehendelse && (
          <>
            <Spacer />
            <VisittkortBarnInfoPanel familiehendelse={fagsakPersoner.familiehendelse} />
          </>
        )}
      </HStack>
    </div>
  );
};
