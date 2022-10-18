import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Heading, Detail } from '@navikt/ds-react';
import {
  FlexContainer, FlexRow, FlexColumn, Image,
} from '@navikt/ft-ui-komponenter';

import urlKvinne from '@fpsak-frontend/assets/images/kvinne.svg';
import urlMann from '@fpsak-frontend/assets/images/mann.svg';
import { KjønnkodeEnum, Person } from '@fpsak-frontend/types';

import AlderVisning from './Aldervisning';
import MerkePanel from './Merkepanel';

import styles from './personInfo.less';

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
const PersonInfo: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  person,
  intl,
}) => {
  const {
    kjønn, dødsdato, diskresjonskode, fødselsdato, navn, fødselsnummer,
  } = person;

  const alder = dayjs().diff(fødselsdato, 'years');

  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Image
            className={styles.icon}
            src={kjønn === KjønnkodeEnum.KVINNE ? urlKvinne : urlMann}
            alt={intl.formatMessage({ id: 'Person.ImageText' })}
          />
        </FlexColumn>
        <FlexColumn>
          <Heading size="small">
            {navn}
            {' '}
            <AlderVisning erDod={!!dødsdato} alder={alder} dodsdato={dødsdato} />
          </Heading>
          <Detail size="small">
            {fødselsnummer}
          </Detail>
        </FlexColumn>
        <FlexColumn>
          <MerkePanel erDod={!!dødsdato} diskresjonskode={diskresjonskode} />
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  );
};

export default injectIntl(PersonInfo);
