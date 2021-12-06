import React, { FunctionComponent, ReactElement } from 'react';

import 'nav-frontend-tabell-style';

interface OwnProps {
  headers: string[] | ReactElement[];
  children: ReactElement | ReactElement[];
}

const ExpandableTable: FunctionComponent<OwnProps> = ({
  headers,
  children,
}) => (
  <div className="tabell" role="table">
    <div className="tabell__thead" role="row-group">
      <div className="tabell__tr" role="row">
        {headers.map((header) => (
          <div className="tabell__th" role="columnheader">
            {header}
          </div>
        ))}
        <div className="tabell__th" role="columnheader" />
      </div>
    </div>
    <div className="tabell__tbody" role="row-group">
      {children}
    </div>
  </div>
);

export default ExpandableTable;
