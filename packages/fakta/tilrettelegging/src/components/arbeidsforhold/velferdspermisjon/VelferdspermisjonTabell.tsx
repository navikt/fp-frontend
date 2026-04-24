import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
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
  harUavklartVelferdspermisjon,
  arbeidsforholdIndex,
  readOnly,
  oppdaterOverstyrtUtbetalingsgrad,
}: Props) => {
  const intl = useIntl();

  return (
    <Table size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan={4} textSize="small">
            <HStack gap="space-8">
              <FormattedMessage tagName="span" id="VelferdspermisjonPanel.Velferdspermisjon" />
              {harUavklartVelferdspermisjon && (
                <ExclamationmarkTriangleFillIcon
                  title={intl.formatMessage({ id: 'VelferdspermisjonPanel.ErPermisjonGyldg' })}
                  fontSize="1.25rem"
                  color="var(--ax-warning-700)"
                />
              )}
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
