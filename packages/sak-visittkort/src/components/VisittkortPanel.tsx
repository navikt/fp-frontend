import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import {
  FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import {
  PersonCard, EmptyPersonCard, Gender,
} from '@navikt/ft-plattform-komponenter';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import { Fagsak, KjønnkodeEnum, FagsakPersoner } from '@fpsak-frontend/types';
import relasjonsRolleType from '@fpsak-frontend/kodeverk/src/relasjonsRolleType';

import VisittkortLabels from './VisittkortLabels';
import VisittkortBarnInfoPanel from './VisittkortBarnInfoPanel';

import styles from './visittkortPanel.less';

const utledKjonn = (kjonn: string): Gender => {
  if (kjonn === navBrukerKjonn.KVINNE) {
    return Gender.female;
  }
  return kjonn === navBrukerKjonn.MANN ? Gender.male : Gender.unknown;
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
  const erMor = fagsak.relasjonsRolleType === relasjonsRolleType.MOR;
  if (erTilbakekreving && harVerge) {
    return (
      <div className={styles.container}>
        <PersonCard
          name={fagsakPerson.navn}
          fodselsnummer={fagsakPerson.fødselsnummer}
          gender={fagsakPerson.kjønn === KjønnkodeEnum.KVINNE ? Gender.female : Gender.male}
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
                fodselsnummer={soker.fødselsnummer}
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
                fodselsnummer={annenPart.fødselsnummer}
                gender={utledKjonn(annenPart.kjønn)}
                url={lenkeTilAnnenPart}
                renderLabelContent={(): JSX.Element => <VisittkortLabels fagsakPerson={annenPart} harVerge={false} />}
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
