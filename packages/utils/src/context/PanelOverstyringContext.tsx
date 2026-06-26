import { createContext, type ReactElement, use, useCallback, useMemo, useState } from 'react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

interface ContextProps {
  overrideReadOnly: boolean;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean };
  overstyringApKode: AksjonspunktKode;
  initialToggleState?: boolean;
  toggleOverstyring?: (erOverstyrt: boolean) => void;
}

interface ContextValues<T extends AksjonspunktKode> {
  overrideReadOnly: boolean;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean };
  overstyringApKode: T;
  erOverstyrt: boolean;
  toggleOverstyring: () => void;
}

const PanelOverstyringContext = createContext<ContextValues<AksjonspunktKode> | null>(null);

export const PanelOverstyringProvider = (
  props: {
    children: ReactElement | null;
  } & ContextProps,
) => {
  const [erOverstyrt, setErOverstyrt] = useState(props.initialToggleState ?? false);

  const { children, toggleOverstyring: toggle, ...otherProps } = props;

  const toggleOverstyring = useCallback(() => {
    const neste = !erOverstyrt;
    setErOverstyrt(neste);
    toggle?.(neste);
  }, [erOverstyrt, toggle]);

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

export const usePanelOverstyring = <T extends AksjonspunktKode>() => {
  const context = use(PanelOverstyringContext) as ContextValues<T> | null;
  if (!context) {
    throw new Error('PanelOverstyringContext.Provider er ikke satt opp');
  }
  return context;
};
