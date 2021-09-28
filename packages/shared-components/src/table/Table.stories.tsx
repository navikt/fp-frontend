import React from 'react';

import Table from './Table';
import TableRow from './TableRow';
import TableColumn from './TableColumn';

export default {
  title: 'sharedComponents/Table',
  component: Table,
};

export const TabellMedRadhoover = () => (
  <Table headerColumnContent={[<div>Navn</div>, <div>Alder</div>]}>
    <TableRow isDashedBottomBorder>
      <TableColumn>
        Espen Utvikler
      </TableColumn>
      <TableColumn>
        41
      </TableColumn>
    </TableRow>
    <TableRow isApLeftBorder>
      <TableColumn>
        Auto Joakim
      </TableColumn>
      <TableColumn>
        35
      </TableColumn>
    </TableRow>
  </Table>
);

export const TabellUtenRadhoover = () => (
  <Table headerColumnContent={[<div>Navn</div>, <div>Alder</div>]} noHover>
    <TableRow isSelected>
      <TableColumn>
        Espen Utvikler
      </TableColumn>
      <TableColumn>
        41
      </TableColumn>
    </TableRow>
    <TableRow isBold>
      <TableColumn>
        Auto Joakim
      </TableColumn>
      <TableColumn>
        35
      </TableColumn>
    </TableRow>
  </Table>
);
