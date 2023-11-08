import React, { FunctionComponent } from 'react';

import { VedtakUtbetaling } from '@navikt/fp-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

interface OwnProps {
  utbetalinger?: VedtakUtbetaling[];
}

const UtbetalingerPanel: FunctionComponent<OwnProps> = ({ utbetalinger }) => (
  <VStack gap="4">
    <div />
    {!utbetalinger && (
      <BodyShort size="small">
        <FormattedMessage id="UtbetalingerPanel.IngenUtbetalinger" />
      </BodyShort>
    )}
    {utbetalinger && (
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UtbetalingerPanel.Periode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UtbetalingerPanel.Utbetalingsgrad" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UtbetalingerPanel.Dagsats" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UtbetalingerPanel.Refusjon" />
            </Table.HeaderCell>
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
              <Table.DataCell>
                {utbetaling.erRefusjon ? (
                  <FormattedMessage id="UtbetalingerPanel.Ja" />
                ) : (
                  <FormattedMessage id="UtbetalingerPanel.Nei" />
                )}
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )}
  </VStack>
);

export default UtbetalingerPanel;
