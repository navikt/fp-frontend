import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { BarnHendelseData } from '@navikt/fp-types';

interface Props {
  avklartBarn: BarnHendelseData[];
}

export const AvklartBarn = ({ avklartBarn }: Props) => {
  if (avklartBarn.length === 0) {
    return null;
  }

  const erAlleBarnLike = avklartBarn.every(
    barn => barn.fødselsdato === avklartBarn[0].fødselsdato && barn.dødsdato === avklartBarn[0].dødsdato,
  );
  const harDødtBarn = avklartBarn.some(barn => barn.dødsdato);

  return erAlleBarnLike ? (
    <>
      <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
        <DateLabel dateString={avklartBarn[0].fødselsdato} />
      </ValueLabel>
      {avklartBarn[0].dødsdato && (
        <ValueLabel label={<FormattedMessage id="Label.Dodsdato" />}>
          <DateLabel dateString={avklartBarn[0].dødsdato} />
        </ValueLabel>
      )}
    </>
  ) : (
    <Table>
      <Table.Header>
        <Table.HeaderCell>
          <FormattedMessage id="Label.Barn" />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <FormattedMessage id="Label.Fodselsdato" />
        </Table.HeaderCell>
        {harDødtBarn && (
          <Table.HeaderCell>
            <FormattedMessage id="Label.Dodsdato" />
          </Table.HeaderCell>
        )}
      </Table.Header>
      <Table.Body>
        {avklartBarn.map((barn, index) => (
          <Table.Row key={barn.fødselsdato + barn.dødsdato} shadeOnHover={false}>
            <Table.DataCell>{index + 1}</Table.DataCell>
            <Table.DataCell>
              <DateLabel dateString={barn.fødselsdato} />
            </Table.DataCell>
            {harDødtBarn && (
              <Table.DataCell>{barn.dødsdato && <DateLabel dateString={barn.dødsdato} />}</Table.DataCell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
