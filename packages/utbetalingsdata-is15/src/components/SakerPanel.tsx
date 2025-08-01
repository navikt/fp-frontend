import { FormattedMessage } from 'react-intl';

import { Box, Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { Sak } from '@navikt/fp-types';

interface Props {
  saker: Sak[];
}

export const SakerPanel = ({ saker }: Props) => (
  <Box.New background="neutral-moderate" padding="5" borderRadius="medium">
    <Table size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Registrert" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Sak" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Stonad" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Type" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Resultat" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Vedtatt" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="SakerPanel.Niva" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {saker.map(sak => (
          <Table.Row key={sak.sakId}>
            <Table.DataCell>
              <DateLabel dateString={sak.registrert} />
            </Table.DataCell>
            <Table.DataCell>{sak.sakId}</Table.DataCell>
            <Table.DataCell>{sak.valg}</Table.DataCell>
            <Table.DataCell>{sak.type}</Table.DataCell>
            <Table.DataCell>{sak.resultat}</Table.DataCell>
            <Table.DataCell>
              <DateLabel dateString={sak.vedtatt} />
            </Table.DataCell>
            <Table.DataCell>{sak.nivaa}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Box.New>
);
