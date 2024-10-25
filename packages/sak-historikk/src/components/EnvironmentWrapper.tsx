import React, { PropsWithChildren, useRef, useState } from 'react';
import { Historikkinnslag } from '@navikt/fp-types';
import { Detail, Label, Popover } from '@navikt/ds-react';

export const EnvironmentWrapper = ({
  historikkinnslag,
  malType,
  shouldRender,
  children,
}: PropsWithChildren<{ historikkinnslag: Historikkinnslag; malType: string; shouldRender: boolean }>) => {
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
            <Label>{malType}</Label>
            <Detail as="pre">{JSON.stringify(historikkinnslag, null, 2)}</Detail>
          </Popover.Content>
        </Popover>
      </>
    );
  }
  return <>{children}</>;
};
