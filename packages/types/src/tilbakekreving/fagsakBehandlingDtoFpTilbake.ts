import type {
  foreldrepenger_behandlingslager_behandling_BehandlingStatus,
  foreldrepenger_behandlingslager_geografisk_Språkkode,
  foreldrepenger_kontrakter_formidling_v3_BrevmalDto,
  rest_ResourceLink,
  tjenester_behandling_dto_BehandlingOperasjonerDto,
  tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto,
} from '../apiDtoGenerert';
import type { BehandlingÅrsakDtoFpTilbake } from './behandlingÅrsakDtoFpTilbake';
import type { BehandlingsresultatDtoFpTilbake } from './behandlingsresultatDtoFpTilbake';

export type FagsakBehandlingDtoFpTilbake = {
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKøet: boolean;
  behandlingPåVent: boolean;
  behandlingTillatteOperasjoner?: tjenester_behandling_dto_BehandlingOperasjonerDto;
  behandlingsfristTid?: string;
  behandlingsresultat?: BehandlingsresultatDtoFpTilbake;
  behandlingÅrsaker: Array<BehandlingÅrsakDtoFpTilbake>;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  endret?: string;
  fagsakId?: number;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: BehandlingÅrsakDtoFpTilbake;
  harVerge: boolean;
  id?: number;
  kanHenleggeBehandling: boolean;
  links: Array<rest_ResourceLink>;
  opprettet: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  toTrinnsBehandling: boolean;
  totrinnskontrollReadonly?: boolean;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  type: 'BT-007' | 'BT-009';
  uuid: string;
  venteÅrsakKode?: string;
  versjon: number;
};
