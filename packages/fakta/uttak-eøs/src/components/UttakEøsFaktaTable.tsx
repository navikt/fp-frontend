import { Table, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';

interface Props {
  annenForelderUttakEøs: AnnenforelderUttakEøsPeriode[];
}

export const UttakEøsFaktaTable = ({ annenForelderUttakEøs }: Props) => {
  //const intl = useIntl(); // TODO: legg inn språk

  return (
    <VStack gap="6">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
            <Table.HeaderCell scope="col">Kontotype</Table.HeaderCell>
            <Table.HeaderCell scope="col">Trekkdager</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {annenForelderUttakEøs.map(({ fom, tom, trekkonto, trekkdager }, i) => {
            return (
              <Table.Row key={i + dateFormat(fom)}>
                <Table.DataCell>{`${dateFormat(fom)} - ${dateFormat(tom)}`}</Table.DataCell>
                <Table.DataCell>{trekkonto}</Table.DataCell>
                <Table.DataCell>{trekkdager}</Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </VStack>
  );
};
