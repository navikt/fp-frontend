import React, { FunctionComponent, ReactElement } from 'react';

interface OwnProps {
  children: ReactElement[];
}

const FaktaInnhold: FunctionComponent<OwnProps> = ({
  children,
}) => (
  <div>{children}</div>
);

export default FaktaInnhold;
