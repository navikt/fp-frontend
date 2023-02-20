import { FagsakStatus, BehandlingStatus, BehandlingType } from '@navikt/ft-kodeverk';

import { NavAnsatt, AksessRettigheter, Aksess } from '@navikt/fp-types';

const kanVeilede = (navAnsatt: NavAnsatt): boolean => navAnsatt && navAnsatt.kanVeilede;
const kanSaksbehandle = (navAnsatt: NavAnsatt): boolean => navAnsatt && navAnsatt.kanSaksbehandle;
const kanOverstyre = (navAnsatt: NavAnsatt): boolean => kanSaksbehandle(navAnsatt) && navAnsatt.kanOverstyre;
const isBehandlingAvTilbakekreving = (type?: string): boolean => (type
  ? (type === BehandlingType.TILBAKEKREVING || type === BehandlingType.TILBAKEKREVING_REVURDERING) : false);

const accessibleFor = (validNavAnsattPredicates: ((navAnsatt: NavAnsatt) => boolean)[]) => (
  navAnsatt: NavAnsatt,
): boolean => validNavAnsattPredicates.some((predicate) => predicate(navAnsatt));

const enabledFor = (validFagsakStauses: string[], validBehandlingStatuses: string[]) => (
  fagsakStatus: string,
  isTilbakekrevingBehandling: boolean,
  behandlingStatus?: string,
): boolean => (
  (isTilbakekrevingBehandling || (fagsakStatus && validFagsakStauses.includes(fagsakStatus)))
  && (!!behandlingStatus && validBehandlingStatuses.includes(behandlingStatus))
);

const accessSelector = (validNavAnsattPredicates: ((navAnsatt: NavAnsatt) => boolean)[], validFagsakStatuses: string[], validBehandlingStatuses: string[]) => (
  navAnsatt: NavAnsatt,
  fagsakStatus: string,
  behandlingStatus?: string,
  behandlingType?: string,
): Aksess => {
  if (kanVeilede(navAnsatt)) {
    return {
      employeeHasAccess: true,
      isEnabled: false,
    };
  }
  const employeeHasAccess = accessibleFor(validNavAnsattPredicates)(navAnsatt);
  const isEnabled = employeeHasAccess
    && (enabledFor(validFagsakStatuses, validBehandlingStatuses)(fagsakStatus, isBehandlingAvTilbakekreving(behandlingType), behandlingStatus));
  return { employeeHasAccess, isEnabled };
};

export const writeAccess = accessSelector(
  [kanSaksbehandle],
  [FagsakStatus.OPPRETTET, FagsakStatus.UNDER_BEHANDLING],
  [BehandlingStatus.OPPRETTET, BehandlingStatus.BEHANDLING_UTREDES],
);

export const kanOverstyreAccess = accessSelector(
  [kanOverstyre],
  [FagsakStatus.UNDER_BEHANDLING],
  [BehandlingStatus.BEHANDLING_UTREDES],
);

const getAccessRights = (
  navAnsatt: NavAnsatt,
  fagsakStatus: string,
  behandlingStatus?: string,
  behandlingType?: string,
): AksessRettigheter => ({
  writeAccess: writeAccess(navAnsatt, fagsakStatus, behandlingStatus, behandlingType),
  kanOverstyreAccess: kanOverstyreAccess(navAnsatt, fagsakStatus, behandlingStatus, behandlingType),
});

export default getAccessRights;
