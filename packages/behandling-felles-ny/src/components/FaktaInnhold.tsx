import React, { FunctionComponent, ReactElement } from 'react';

interface OwnProps {
  children: ReactElement[];
}

const FaktaInnhold: FunctionComponent<OwnProps> = ({
  children,
}) => (
  <>{children}</>
);

export default FaktaInnhold;
