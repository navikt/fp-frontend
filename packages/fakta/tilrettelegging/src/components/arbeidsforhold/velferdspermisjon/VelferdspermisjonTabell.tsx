import { FormattedMessage } from 'react-intl';

import { HStack, Table } from '@navikt/ds-react';

import type { Permisjon } from '@navikt/fp-types';

import { VelferdspermisjonTabellRad } from './VelferdspermisjonTabellRad';

interface Props {
  filtrerteVelferdspermisjoner: Permisjon[];
  harUavklartVelferdspermisjon: boolean;
  arbeidsforholdIndex: number;
  readOnly: boolean;
  oppdaterOverstyrtUtbetalingsgrad: (velferdspermisjonprosent: number) => void;
}

export const VelferdspermisjonTabell = ({
  filtrerteVelferdspermisjoner,
  arbeidsforholdIndex,
  readOnly,
  oppdaterOverstyrtUtbetalingsgrad,
}: Props) => {
  return (
    <Table size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={3} textSize="small">
            <HStack gap="space-8">
              <FormattedMessage tagName="span" id="VelferdspermisjonTabell.RegistrerteVelferdspermisjoner" />
            </HStack>
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
};
