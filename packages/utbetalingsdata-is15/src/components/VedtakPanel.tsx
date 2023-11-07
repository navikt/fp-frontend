import React, { FunctionComponent, useState } from 'react';

import { Vedtak } from '@navikt/fp-types';
import { PeriodLabel, DateLabel } from '@navikt/ft-ui-komponenter';
import { Table, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import VedtakDetaljerPanel from './detaljer/VedtakDetaljerPanel';

interface OwnProps {
  alleVedtak: Vedtak[];
}

const VedtakPanel: FunctionComponent<OwnProps> = ({ alleVedtak }) => {
  const [valgtVedtak, setValgtVedtak] = useState<Vedtak>();

  return (
    <VStack gap="10">
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Identdato" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Ytelse" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Dekningsgrad" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Periode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Arbeidskategori" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.OpphorFom" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {alleVedtak.map(vedtak => (
            <Table.Row
              key={vedtak.identdato}
              onClick={() => setValgtVedtak(vedtak)}
              selected={vedtak.identdato === valgtVedtak?.identdato}
            >
              <Table.DataCell>
                <DateLabel dateString={vedtak.identdato} />
              </Table.DataCell>
              <Table.DataCell>{vedtak.behandlingstema.termnavn}</Table.DataCell>
              <Table.DataCell>{vedtak.dekningsgrad}</Table.DataCell>
              <Table.DataCell>
                <PeriodLabel dateStringFom={vedtak.periode.fom} dateStringTom={vedtak.periode.tom} />
              </Table.DataCell>
              <Table.DataCell>{vedtak.arbeidskategori.termnavn}</Table.DataCell>
              <Table.DataCell>
                <DateLabel dateString={vedtak.opphørFom} />
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {valgtVedtak && <VedtakDetaljerPanel vedtak={valgtVedtak} />}
    </VStack>
  );
};

export default VedtakPanel;
