import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { PersonCard, EmptyPersonCard, Gender } from '@navikt/nap-person-card';

import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import {
  Kodeverk, Fagsak, KjønnkodeEnum, FagsakPersoner,
} from '@fpsak-frontend/types';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';

import VisittkortLabels from './VisittkortLabels';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';

import styles from './visittkortPanel.less';

const utledKjonn = (kjonn: Kodeverk): Gender => {
  if (kjonn.kode === navBrukerKjonn.KVINNE) {
    return Gender.female;
  }
  return kjonn.kode === navBrukerKjonn.MANN ? Gender.male : Gender.unknown;
};

interface OwnProps {
  fagsak: Fagsak;
  fagsakPersoner: FagsakPersoner;
  lenkeTilAnnenPart?: string;
  harVerge: boolean;
  erTilbakekreving: boolean;
}

const VisittkortPanel: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  fagsak,
  fagsakPersoner,
  lenkeTilAnnenPart,
  harVerge,
  erTilbakekreving,
}) => {
  const fagsakPerson = fagsakPersoner.bruker;
  const erMor = fagsak.relasjonsRolleType.kode === relasjonsRolleType.MOR;
  if (erTilbakekreving && harVerge) {
    return (
      <div className={styles.container}>
        <PersonCard
          name={fagsakPerson.navn}
          fodselsnummer={fagsakPerson.personnummer}
          gender={fagsakPerson.kjønn.kode === KjønnkodeEnum.KVINNE ? Gender.female : Gender.male}
          renderLabelContent={(): JSX.Element => <VisittkortLabels fagsakPerson={fagsakPerson} harVerge={harVerge} />}
        />
      </div>
    );
  }
  const soker = erMor || !fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;
  const annenPart = !erMor && fagsakPersoner.annenPart ? fagsakPerson : fagsakPersoner.annenPart;

  return (
    <div className={styles.container}>
      <FlexContainer>
        <FlexRow>
          {soker.aktørId && (
            <FlexColumn>
              <PersonCard
                name={soker.navn}
                fodselsnummer={soker.personnummer}
                gender={utledKjonn(soker.kjønn)}
                url={lenkeTilAnnenPart}
                renderLabelContent={(): JSX.Element => <VisittkortLabels fagsakPerson={soker} harVerge={harVerge} />}
                isActive={erMor}
              />
            </FlexColumn>
          )}
          {!soker.aktørId && (
            <FlexColumn>
              <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
            </FlexColumn>
          )}
          {annenPart && annenPart.aktørId && (
            <FlexColumn>
              <PersonCard
                name={annenPart.navn}
                fodselsnummer={annenPart.personnummer}
                gender={utledKjonn(annenPart.kjønn)}
                url={lenkeTilAnnenPart}
                isActive={!erMor}
              />
            </FlexColumn>
          )}
          {annenPart && !annenPart.aktørId && (
            <FlexColumn>
              <EmptyPersonCard namePlaceholder={intl.formatMessage({ id: 'VisittkortPanel.Ukjent' })} />
            </FlexColumn>
          )}
          {fagsakPersoner.familiehendelse && (
            <FlexColumn className={styles.pushRight}>
              <VisittkortBarnInfoPanel familiehendelse={fagsakPersoner.familiehendelse} />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default injectIntl(VisittkortPanel);
