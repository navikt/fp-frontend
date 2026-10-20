import { createContext, type ReactNode, use } from 'react';

const ReadOnlyContext = createContext<boolean | undefined>(undefined);

interface Props {
  readOnly: boolean;
  children: ReactNode;
}

/**
 * Gir readOnly-status til alle komponenter under seg, slik at den ikke må sendes ned som prop.
 * Kan nøstes for å overstyre verdien for et deltre (f.eks. overstyring eller redigering av en enkelt rad).
 */
export const ReadOnlyProvider = ({ readOnly, children }: Props) => (
  <ReadOnlyContext value={readOnly}>{children}</ReadOnlyContext>
);

export const useReadOnly = (): boolean => {
  const readOnly = use(ReadOnlyContext);
  if (readOnly === undefined) {
    throw new Error('ReadOnlyProvider er ikke satt opp');
  }
  return readOnly;
};
