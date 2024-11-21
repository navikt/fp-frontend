import { usePrevious } from '@navikt/ft-ui-komponenter';

export const useBehandlingEndret = (behandlingUuid?: string, behandlingVersjon?: number): boolean => {
  const erBehandlingUuidEndretFraUndefined = !usePrevious(behandlingUuid) && !!behandlingUuid;
  const erBehandlingVersjonEndretFraUndefined = !usePrevious(behandlingVersjon) && !!behandlingVersjon;
  return erBehandlingUuidEndretFraUndefined || erBehandlingVersjonEndretFraUndefined;
};
