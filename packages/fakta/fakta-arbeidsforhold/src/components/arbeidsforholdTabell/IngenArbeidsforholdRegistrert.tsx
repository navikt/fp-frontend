import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';

interface Props {
  headerColumnContent: React.ReactElement[];
}

export const IngenArbeidsforholdRegistrert = ({ headerColumnContent }: Props) => (
  <Table headerColumnContent={headerColumnContent} noHover>
    <TableRow>
      <TableColumn>
        <BodyShort size="small">
          <FormattedMessage id="PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert" />
        </BodyShort>
      </TableColumn>
      <TableColumn />
      <TableColumn />
      <TableColumn />
      <TableColumn />
      <TableColumn />
    </TableRow>
  </Table>
);
