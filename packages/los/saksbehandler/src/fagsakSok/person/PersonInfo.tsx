import { useIntl } from 'react-intl';

import { FigureInwardFillIcon, FigureOutwardFillIcon } from '@navikt/aksel-icons';
import { Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { type Person } from '@navikt/fp-types';

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
    <HStack gap="space-16">
      {kjønn === 'K' && (
        <FigureOutwardFillIcon
          className={styles['kvinneIcon']}
          title={intl.formatMessage({ id: 'Person.ImageText' })}
        />
      )}
      {kjønn === 'M' && (
        <FigureInwardFillIcon className={styles['MannIcon']} title={intl.formatMessage({ id: 'Person.ImageText' })} />
      )}
      <VStack gap="space-4">
        <Heading size="small" level="2">
          {navn} <Aldersvisning erDød={!!dødsdato} alder={alder} dødsdato={dødsdato} />
        </Heading>
        <Detail>{fødselsnummer}</Detail>
      </VStack>
      <MerkePanel erDød={!!dødsdato} diskresjonskode={diskresjonskode} />
    </HStack>
  );
};
