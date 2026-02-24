import type {
  foreldrepenger_behandlingslager_behandling_BehandlingResultatType,
  foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen,
  tjenester_behandling_dto_behandling_BehandlingsresultatDto,
} from './fpsak.gen';

export type Behandlingsresultat = tjenester_behandling_dto_behandling_BehandlingsresultatDto;

export type KonsekvensForYtelsen = foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen;

export type BehandlingResultatType = foreldrepenger_behandlingslager_behandling_BehandlingResultatType;

const klageOmgjortResultatTyper = new Set<BehandlingResultatType>([
  'KLAGE_MEDHOLD',
  'KLAGE_DELVIS_MEDHOLD',
  'KLAGE_OMGJORT_UGUNST',
]);

export const isAvslag = (behandlingResultatTypeKode: BehandlingResultatType): boolean =>
  behandlingResultatTypeKode === 'AVSLÅTT' ||
  behandlingResultatTypeKode === 'KLAGE_AVVIST' ||
  behandlingResultatTypeKode === 'KLAGE_YTELSESVEDTAK_STADFESTET';

export const isOpphor = (behandlingResultatTypeKode: BehandlingResultatType): boolean =>
  behandlingResultatTypeKode === 'OPPHØR';

export const isKlageOmgjort = (behandlingResultatTypeKode: BehandlingResultatType): boolean =>
  klageOmgjortResultatTyper.has(behandlingResultatTypeKode);

export const isKlageAvvist = (behandlingResultatTypeKode?: BehandlingResultatType): boolean =>
  behandlingResultatTypeKode === 'KLAGE_AVVIST';
