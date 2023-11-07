import React, { FunctionComponent, useState } from 'react';

import { InfotrygdVedtak, Vedtak } from '@navikt/fp-types';
import { VStack, Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import VedtakPanel from './VedtakPanel';

interface OwnProps {
  infotrygdVedtak: InfotrygdVedtak;
}

const UtbetalingsdataPanel: FunctionComponent<OwnProps> = ({ infotrygdVedtak }) => {
  const [valgtVedtak, setValgtVedtak] = useState<Vedtak[]>();

  return (
    <VStack gap="10">
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UtbetalingsdataPanel.Gruppe" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="UtbetalingsdataPanel.Ytelse" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.values(infotrygdVedtak.vedtakKjedeForIdentdato).map(v => (
            <Table.Row key={v.opprinneligIdentdato} onClick={() => setValgtVedtak(v.vedtak)}>
              <Table.DataCell>
                <DateLabel dateString={v.opprinneligIdentdato} />
              </Table.DataCell>
              <Table.DataCell>{v.vedtak[0].behandlingstema.termnavn}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {valgtVedtak && <VedtakPanel alleVedtak={valgtVedtak} />}
    </VStack>
  );
};

export default UtbetalingsdataPanel;
