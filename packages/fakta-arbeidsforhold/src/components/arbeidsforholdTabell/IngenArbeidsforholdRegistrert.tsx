import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { Table, TableRow, TableColumn } from '@navikt/ft-ui-komponenter';

interface OwnProps {
  headerColumnContent: React.ReactElement[];
}

const IngenArbeidsforholdRegistrert: FunctionComponent<OwnProps> = ({ headerColumnContent }) => (
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

export default IngenArbeidsforholdRegistrert;
