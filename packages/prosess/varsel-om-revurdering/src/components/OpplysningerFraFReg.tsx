import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, HStack, Table, Tag, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { AvklartBarn } from '@navikt/fp-types';

interface Props {
  avklartBarn: AvklartBarn[] | undefined;
  harDødtBarn: boolean;
}

export const OpplysningerFraFReg = ({ avklartBarn, harDødtBarn }: Props) => {
  return (
    <VStack gap="4">
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="FodselsammenligningPanel.OpplysningerFReg" />
        </Heading>
        {harDødtBarn && (
          <Tag variant="info" size="small">
            <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
          </Tag>
        )}
      </HStack>
      {avklartBarn?.length ? (
        <Table size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />
              </Table.HeaderCell>
              {harDødtBarn && (
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="FodselsammenligningPanel.Dodsdato" />
                </Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {avklartBarn.map((barn, index) => {
              const key = barn.fodselsdato + barn.dodsdato + index;
              return (
                <Table.Row key={key}>
                  <Table.DataCell>
                    <BodyShort>
                      <DateLabel dateString={barn.fodselsdato} />
                    </BodyShort>
                  </Table.DataCell>
                  {harDødtBarn && (
                    <Table.DataCell>
                      {barn.dodsdato ? (
                        <HStack gap="4" align="center">
                          <DateLabel dateString={barn.dodsdato} />
                          <Tag variant="info" size="small">
                            <FormattedMessage id="FodselsammenligningPanel.Dod" />
                          </Tag>
                        </HStack>
                      ) : (
                        '-'
                      )}
                    </Table.DataCell>
                  )}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      ) : (
        <BodyShort>-</BodyShort>
      )}
    </VStack>
  );
};
