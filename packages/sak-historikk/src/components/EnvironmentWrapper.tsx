import React, { PropsWithChildren, useRef, useState } from 'react';
import { Historikkinnslag } from '@navikt/fp-types';
import { Detail, Label, Popover } from '@navikt/ds-react';

type Env = 'local' | 'dev' | 'production';

function getEnvironment(): Env {
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'local';
  } else if (hostname.includes('intern.dev.nav.no')) {
    return 'dev';
  }
  return 'production';
}

export const EnvironmentWrapper = ({
  historikkinnslag,
  malType,
  children,
}: PropsWithChildren<{ historikkinnslag: Historikkinnslag; malType: string }>) => {
  const [hoverState, setHoverState] = useState(false);
  const hoverRef = useRef<HTMLDivElement>(null);

  if (['local', 'dev'].includes(getEnvironment())) {
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
