import { createContext, type ReactElement, useContext, useMemo, useState } from 'react';

import { type OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';

type ContextProps = {
  overrideReadOnly: boolean;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean };
  overstyringApKode: OverstyringAksjonspunkter;
  initialToggleState?: boolean;
  toggleOverstyring?: (erOverstyrt: boolean) => void;
};

type ContextValues = {
  overrideReadOnly: boolean;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean };
  overstyringApKode: OverstyringAksjonspunkter;
  erOverstyrt: boolean;
  toggleOverstyring: () => void;
};

const PanelOverstyringContext = createContext<ContextValues | null>(null);

export const PanelOverstyringProvider = (props: { children: ReactElement | null } & ContextProps) => {
  const [erOverstyrt, setErOverstyrt] = useState(props.initialToggleState ?? false);

  const { children, toggleOverstyring: toggle, ...otherProps } = props;

  const toggleOverstyring = () => {
    setErOverstyrt(!erOverstyrt);
    toggle?.(!erOverstyrt);
  };

  const value = useMemo<ContextValues>(
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
  const context = useContext<ContextValues | null>(PanelOverstyringContext);
  if (!context) {
    throw new Error('PanelOverstyringContext.Provider er ikke satt opp');
  }
  return context;
};
