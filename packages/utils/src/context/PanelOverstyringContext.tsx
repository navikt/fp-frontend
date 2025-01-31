import { createContext, ReactElement, useContext, useMemo, useState } from 'react';

import { OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';

type Props = {
  overrideReadOnly: boolean;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean };
  overstyringApKode: OverstyringAksjonspunkter;
};

type InputProps = {
  toggleOverstyring?: (erOverstyrt: boolean) => void;
};

type InternalProps = { erOverstyrt: boolean; toggleOverstyring: () => void };

export const PanelOverstyringContext = createContext<(Props & InternalProps) | null>(null);

export const PanelOverstyringProvider = (props: Props & InputProps & { children: ReactElement | null }) => {
  const [erOverstyrt, setOverstyrt] = useState(false);

  const { children, toggleOverstyring: toggle, ...otherProps } = props;

  const toggleOverstyring = () => {
    setOverstyrt(!erOverstyrt);
    toggle?.(!erOverstyrt);
  };

  const value = useMemo(
    () => ({
      erOverstyrt,
      toggleOverstyring,
      ...otherProps,
    }),
    [erOverstyrt, toggleOverstyring, otherProps],
  );

  return <PanelOverstyringContext value={value}>{children}</PanelOverstyringContext>;
};

export const usePanelOverstyring = () => {
  const context = useContext<(Props & InternalProps) | null>(PanelOverstyringContext);
  if (!context) {
    throw new Error('PanelOverstyringContext.Provider er ikke satt opp');
  }
  return context;
};
