import { usePrevious } from '@fpsak-frontend/shared-components';

const useBehandlingEndret = (behandlingUuid?: string, behandlingVersjon?: number): boolean => {
  const erBehandlingUuidEndretFraUndefined = !usePrevious(behandlingUuid) && !!behandlingUuid;
  const erBehandlingVersjonEndretFraUndefined = !usePrevious(behandlingVersjon) && !!behandlingVersjon;
  return erBehandlingUuidEndretFraUndefined || erBehandlingVersjonEndretFraUndefined;
};

export default useBehandlingEndret;
