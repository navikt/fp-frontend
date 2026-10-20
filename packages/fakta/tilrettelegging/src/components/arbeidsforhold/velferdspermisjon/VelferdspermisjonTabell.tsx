import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { VelferdspermisjonDto } from '@navikt/fp-types';

import { VelferdspermisjonTabellRad } from './VelferdspermisjonTabellRad';

interface Props {
  filtrerteVelferdspermisjoner: VelferdspermisjonDto[];
  arbeidsforholdIndex: number;
  oppdaterOverstyrtUtbetalingsgrad: (velferdspermisjonprosent: number) => void;
}

export const VelferdspermisjonTabell = ({
  filtrerteVelferdspermisjoner,
  arbeidsforholdIndex,
  oppdaterOverstyrtUtbetalingsgrad,
}: Props) => (
  <Table size="small">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan={3} textSize="small">
          <FormattedMessage id="VelferdspermisjonTabell.RegistrerteVelferdspermisjoner" />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {filtrerteVelferdspermisjoner.map(permisjon => (
        <VelferdspermisjonTabellRad
          key={permisjon.permisjonFom}
          velferdspermisjon={permisjon}
          arbeidsforholdIndex={arbeidsforholdIndex}
          oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
        />
      ))}
    </Table.Body>
  </Table>
);
