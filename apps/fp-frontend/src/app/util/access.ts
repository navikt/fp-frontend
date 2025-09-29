import {
  type BehandlingStatus,
  BehandlingStatusEnum,
  type BehandlingType,
  type FagsakStatus,
  FagsakStatusEnum,
} from '@navikt/fp-kodeverk';
import type { Aksess, AksessRettigheter, NavAnsatt } from '@navikt/fp-types';

const kanVeilede = (navAnsatt: NavAnsatt): boolean => navAnsatt.kanVeilede;
const kanSaksbehandle = (navAnsatt: NavAnsatt): boolean => navAnsatt.kanSaksbehandle;
const kanOverstyre = (navAnsatt: NavAnsatt): boolean => kanSaksbehandle(navAnsatt) && navAnsatt.kanOverstyre;
const isBehandlingAvTilbakekreving = (type?: BehandlingType): boolean =>
  type ? type === 'BT-007' || type === 'BT-009' : false;

const accessibleFor =
  (validNavAnsattPredicates: ((navAnsatt: NavAnsatt) => boolean)[]) =>
  (navAnsatt: NavAnsatt): boolean =>
    validNavAnsattPredicates.some(predicate => predicate(navAnsatt));

const enabledFor =
  (validFagsakStauses: FagsakStatus[], validBehandlingStatuses: BehandlingStatus[]) =>
  (fagsakStatus: FagsakStatus, isTilbakekrevingBehandling: boolean, behandlingStatus?: BehandlingStatus): boolean =>
    (isTilbakekrevingBehandling || validFagsakStauses.includes(fagsakStatus)) &&
    !!behandlingStatus &&
    validBehandlingStatuses.includes(behandlingStatus);

const accessSelector =
  (
    validNavAnsattPredicates: ((navAnsatt: NavAnsatt) => boolean)[],
    validFagsakStatuses: FagsakStatus[],
    validBehandlingStatuses: BehandlingStatus[],
  ) =>
  (
    navAnsatt: NavAnsatt,
    fagsakStatus: FagsakStatus,
    behandlingStatus?: BehandlingStatus,
    behandlingType?: BehandlingType,
  ): Aksess => {
    if (kanVeilede(navAnsatt)) {
      return {
        employeeHasAccess: true,
        isEnabled: false,
      };
    }
    const employeeHasAccess = accessibleFor(validNavAnsattPredicates)(navAnsatt);
    const isEnabled =
      employeeHasAccess &&
      enabledFor(validFagsakStatuses, validBehandlingStatuses)(
        fagsakStatus,
        isBehandlingAvTilbakekreving(behandlingType),
        behandlingStatus,
      );
    return { employeeHasAccess, isEnabled };
  };

export const writeAccess = accessSelector(
  [kanSaksbehandle],
  [FagsakStatusEnum.OPPRETTET, FagsakStatusEnum.UNDER_BEHANDLING],
  [BehandlingStatusEnum.OPPRETTET, BehandlingStatusEnum.BEHANDLING_UTREDES],
);

export const kanOverstyreAccess = accessSelector(
  [kanOverstyre],
  [FagsakStatusEnum.UNDER_BEHANDLING],
  [BehandlingStatusEnum.BEHANDLING_UTREDES],
);

export const getAccessRights = (
  navAnsatt: NavAnsatt,
  fagsakStatus: FagsakStatus,
  behandlingStatus?: BehandlingStatus,
  behandlingType?: BehandlingType,
): AksessRettigheter => ({
  writeAccess: writeAccess(navAnsatt, fagsakStatus, behandlingStatus, behandlingType),
  kanOverstyreAccess: kanOverstyreAccess(navAnsatt, fagsakStatus, behandlingStatus, behandlingType),
});
