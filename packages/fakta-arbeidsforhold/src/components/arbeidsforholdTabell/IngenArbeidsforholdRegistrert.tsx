import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  Table, TableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';

interface OwnProps {
  headerColumnContent: React.ReactElement[];
}

const IngenArbeidsforholdRegistrert: FunctionComponent<OwnProps> = ({
  headerColumnContent,
}) => (
  <Table headerColumnContent={headerColumnContent} noHover>
    <TableRow>
      <TableColumn>
        <Normaltekst>
          <FormattedMessage id="PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert" />
        </Normaltekst>
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
