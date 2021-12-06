import React, { FunctionComponent, ReactNode } from 'react';

import 'nav-frontend-tabell-style';

interface OwnProps {
  children?: number | string | ReactNode;
}

const ETColumn: FunctionComponent<OwnProps> = ({
  children,
}) => (
  <div className="tabell__td" role="cell">
    {children}
  </div>
);

export default ETColumn;
