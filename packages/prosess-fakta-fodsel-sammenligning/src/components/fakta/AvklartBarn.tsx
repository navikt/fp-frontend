import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Table, Tag, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { AvklartBarn as AvklartBarnType } from '@navikt/fp-types';

interface Props {
  avklartBarn: AvklartBarnType[];
}

export const AvklartBarn = ({ avklartBarn }: Props) => {
  return (
    <VStack gap="4">
      {avklartBarn && (
        <>
          <ValueLabel label="Avklart antall barn">{avklartBarn.length}</ValueLabel>
          {avklartBarn.length === 1 && (
            <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />}>
              <HStack as={BodyShort} gap="4">
                <DateLabel dateString={avklartBarn[0].fodselsdato} />
                {avklartBarn[0].dodsdato && (
                  <Tag variant="info" size="small">
                    <FormattedMessage id="FodselsammenligningPanel.Dodsdato" />{' '}
                    <DateLabel dateString={avklartBarn[0].dodsdato} />
                  </Tag>
                )}
              </HStack>
            </ValueLabel>
          )}
          {avklartBarn.length > 1 && (
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope="col">
                    <FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <FormattedMessage id="FodselsammenligningPanel.Dodsdato" />
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col" />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {avklartBarn.map(barn => {
                  const key = barn.fodselsdato + barn.dodsdato;
                  return (
                    <Table.Row key={key} id={key}>
                      <Table.DataCell>
                        <BodyShort size="small">{dateFormat(barn.fodselsdato)}</BodyShort>
                      </Table.DataCell>
                      <Table.DataCell>
                        <BodyShort size="small">{barn.dodsdato ? dateFormat(barn.dodsdato) : '-'}</BodyShort>
                      </Table.DataCell>
                      <Table.DataCell>
                        {barn.dodsdato && (
                          <Tag variant="info">
                            <FormattedMessage id="FodselsammenligningPanel.Dod" />
                          </Tag>
                        )}
                      </Table.DataCell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          )}
        </>
      )}
    </VStack>
  );
};
