import React, { FC, PropsWithChildren } from 'react';
import { Tooltip } from '@navikt/ds-react';

interface OwnProps {
  content: string;
  isDevelopment?: boolean;
}

export const DevModeTooltip: FC<PropsWithChildren<OwnProps>> = ({
  children,
  content,
  isDevelopment = import.meta.env.MODE === 'development',
}) =>
  isDevelopment ? (
    <Tooltip content={content}>
      <div>{children}</div>
    </Tooltip>
  ) : (
    <>{children}</>
  );
