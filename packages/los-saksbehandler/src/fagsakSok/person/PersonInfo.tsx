import React from 'react';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { Heading, Detail, HStack, VStack } from '@navikt/ds-react';

import { KjønnkodeEnum, Person } from '@navikt/fp-types';
import { FigureInwardFillIcon, FigureOutwardFillIcon } from '@navikt/aksel-icons';

import { Aldersvisning } from './Aldersvisning';
import { MerkePanel } from './Merkepanel';

import styles from './personInfo.module.css';

interface Props {
  person: Person;
}

export const PersonInfo = ({ person }: Props) => {
  const intl = useIntl();
  const { kjønn, dødsdato, diskresjonskode, fødselsdato, navn, fødselsnummer } = person;

  const alder = dayjs().diff(fødselsdato, 'years');

  return (
    <HStack gap="4">
      {kjønn === KjønnkodeEnum.KVINNE && (
        <FigureOutwardFillIcon className={styles.kvinneIcon} title={intl.formatMessage({ id: 'Person.ImageText' })} />
      )}
      {kjønn === KjønnkodeEnum.MANN && (
        <FigureInwardFillIcon className={styles.MannIcon} title={intl.formatMessage({ id: 'Person.ImageText' })} />
      )}
      <VStack gap="1">
        <Heading size="small">
          {navn} <Aldersvisning erDød={!!dødsdato} alder={alder} dødsdato={dødsdato} />
        </Heading>
        <Detail>{fødselsnummer}</Detail>
      </VStack>
      <MerkePanel erDød={!!dødsdato} diskresjonskode={diskresjonskode} />
    </HStack>
  );
};
