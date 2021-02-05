import React, { FunctionComponent, ReactElement } from 'react';

interface OwnProps {
  children: ReactElement[];
}

const ProsessInnhold: FunctionComponent<OwnProps> = ({
  children,
}) => (
  <div>{children}</div>
);

export default ProsessInnhold;
