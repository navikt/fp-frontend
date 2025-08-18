import { FormattedMessage } from 'react-intl';

import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { VedtakUtbetaling } from '@navikt/fp-types';

interface Props {
  utbetalinger?: VedtakUtbetaling[];
}

export const UtbetalingerPanel = ({ utbetalinger }: Props) => (
  <VStack gap="space-16">
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
