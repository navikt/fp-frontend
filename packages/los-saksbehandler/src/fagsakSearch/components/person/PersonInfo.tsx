import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { Heading, Detail } from '@navikt/ds-react';
import { FlexContainer, FlexRow, FlexColumn } from '@navikt/ft-ui-komponenter';

import { KjønnkodeEnum, Person } from '@navikt/fp-types';
import { FigureInwardFillIcon, FigureOutwardFillIcon } from '@navikt/aksel-icons';

import AlderVisning from './Aldervisning';
import MerkePanel from './Merkepanel';

import styles from './personInfo.module.css';

interface OwnProps {
  person: Person;
}

/**
 * PersonInfo
 *
 * Definerer visning av personen relatert til fagsak. (Søker)
 *
 * Eksempel:
 * ```html
 * <PersonInfo person={navn:"Ola" alder:{40} fødselsnummer:"12345678910" erKvinne:false
 * erDod:false diskresjonskode:"6" dødsdato:"1990.03.03"} medPanel />
 * ```
 */
const PersonInfo: FunctionComponent<OwnProps> = ({ person }) => {
  const intl = useIntl();
  const { kjønn, dødsdato, diskresjonskode, fødselsdato, navn, fødselsnummer } = person;

  const alder = dayjs().diff(fødselsdato, 'years');

  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          {kjønn === KjønnkodeEnum.KVINNE && (
            <FigureOutwardFillIcon
              className={styles.kvinneIcon}
              title={intl.formatMessage({ id: 'Person.ImageText' })}
            />
          )}
          {kjønn === KjønnkodeEnum.MANN && (
            <FigureInwardFillIcon className={styles.MannIcon} title={intl.formatMessage({ id: 'Person.ImageText' })} />
          )}
        </FlexColumn>
        <FlexColumn>
          <Heading size="small">
            {navn} <AlderVisning erDod={!!dødsdato} alder={alder} dodsdato={dødsdato} />
          </Heading>
          <Detail>{fødselsnummer}</Detail>
        </FlexColumn>
        <FlexColumn>
          <MerkePanel erDod={!!dødsdato} diskresjonskode={diskresjonskode} />
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

export default PersonInfo;
