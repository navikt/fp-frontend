import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Heading, Detail } from '@navikt/ds-react';
import {
  FlexContainer, FlexRow, FlexColumn, Image,
} from '@navikt/ft-ui-komponenter';

import urlKvinne from '@fpsak-frontend/assets/images/kvinne.svg';
import urlMann from '@fpsak-frontend/assets/images/mann.svg';

import Person from '../../../typer/personTsType';
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
 * <PersonInfo person={navn:"Ola" alder:{40} personnummer:"12345678910" erKvinne:false
 * erDod:false diskresjonskode:"6" dødsdato:"1990.03.03"} medPanel />
 * ```
 */
const PersonInfo: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  person,
  intl,
}) => {
  const {
    erKvinne, dødsdato, diskresjonskode, alder, navn, personnummer,
  } = person;
  return (
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Image
            className={styles.icon}
            src={erKvinne ? urlKvinne : urlMann}
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
            {personnummer}
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
