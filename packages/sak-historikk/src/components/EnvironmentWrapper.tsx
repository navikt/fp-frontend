import React, { PropsWithChildren, useRef, useState } from 'react';

import { Detail, Popover } from '@navikt/ds-react';

import { Historikkinnslag } from '@navikt/fp-types';

export const EnvironmentWrapper = ({
  historikkinnslag,
  shouldRender,
  children,
}: PropsWithChildren<{
  historikkinnslag: Historikkinnslag;
  shouldRender: boolean;
}>) => {
  const [hoverState, setHoverState] = useState(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  if (shouldRender) {
    return (
      <>
        <div ref={hoverRef} onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
          {children}
        </div>
        <Popover
          placement="left-start"
          anchorEl={hoverRef.current}
          open={hoverState}
          onClose={() => setHoverState(false)}
        >
          <Popover.Content>
            <Detail as="pre">{JSON.stringify(historikkinnslag, null, 2)}</Detail>
          </Popover.Content>
        </Popover>
      </>
    );
  }
  return <>{children}</>;
};
