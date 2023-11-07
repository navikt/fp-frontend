import React, { FunctionComponent } from 'react';

import { VedtakUtbetaling } from '@navikt/fp-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { Table } from '@navikt/ds-react';

interface OwnProps {
  utbetalinger?: VedtakUtbetaling[];
}

const UtbetalingerPanel: FunctionComponent<OwnProps> = ({ utbetalinger }) => (
  <>
    {!utbetalinger && <>Ingen utbetalinger</>}
    {utbetalinger && (
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">periode</Table.HeaderCell>
            <Table.HeaderCell scope="col">utbetalingsgrad</Table.HeaderCell>
            <Table.HeaderCell scope="col">dagsats</Table.HeaderCell>
            <Table.HeaderCell scope="col">refusjon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {utbetalinger.map(utbetaling => (
            <Table.Row key={utbetaling.identdato}>
              <Table.DataCell>
                <PeriodLabel dateStringFom={utbetaling.periode.fom} dateStringTom={utbetaling.periode.tom} />
              </Table.DataCell>
              <Table.DataCell>{utbetaling.utbetalingsgrad}</Table.DataCell>
              <Table.DataCell>{utbetaling.dagsats}</Table.DataCell>
              <Table.DataCell>{utbetaling.erRefusjon}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )}
  </>
);

export default UtbetalingerPanel;
