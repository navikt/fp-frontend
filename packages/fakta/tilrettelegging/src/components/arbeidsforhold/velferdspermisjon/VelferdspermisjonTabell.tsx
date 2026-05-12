import { FormattedMessage } from 'react-intl';

import { Table } from '@navikt/ds-react';

import type { Permisjon } from '@navikt/fp-types';

import { VelferdspermisjonTabellRad } from './VelferdspermisjonTabellRad';

interface Props {
  filtrerteVelferdspermisjoner: Permisjon[];
  arbeidsforholdIndex: number;
  readOnly: boolean;
  oppdaterOverstyrtUtbetalingsgrad: (velferdspermisjonprosent: number) => void;
}

export const VelferdspermisjonTabell = ({
  filtrerteVelferdspermisjoner,
  arbeidsforholdIndex,
  readOnly,
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
          readOnly={readOnly}
          arbeidsforholdIndex={arbeidsforholdIndex}
          oppdaterOverstyrtUtbetalingsgrad={oppdaterOverstyrtUtbetalingsgrad}
        />
      ))}
    </Table.Body>
  </Table>
);
