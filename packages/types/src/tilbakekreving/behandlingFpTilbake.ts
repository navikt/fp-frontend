import type {
  foreldrepenger_behandlingslager_behandling_BehandlingStatus,
  foreldrepenger_behandlingslager_geografisk_Språkkode,
  rest_ResourceLink,
  tjenester_behandling_aksjonspunkt_AksjonspunktDto,
  tjenester_behandling_dto_AsyncPollingStatus,
} from '../apiDtoGenerert';
import type { BehandlingÅrsakDtoFpTilbake } from './behandlingÅrsakDtoFpTilbake';
import type { BehandlingsresultatDtoFpTilbake } from './behandlingsresultatDtoFpTilbake';

export type BehandlingFpTilbake = {
  aksjonspunkt: Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>;
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKøet: boolean;
  behandlingPåVent: boolean;
  behandlingsresultat?: BehandlingsresultatDtoFpTilbake;
  behandlingÅrsaker: Array<BehandlingÅrsakDtoFpTilbake>;
  endret?: string;
  fagsakId?: number;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: BehandlingÅrsakDtoFpTilbake;
  harVerge: boolean;
  id?: number;
  links: Array<rest_ResourceLink>;
  opprettet: string;
  originalVedtaksDato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  taskStatus?: tjenester_behandling_dto_AsyncPollingStatus;
  toTrinnsBehandling: boolean;
  type: 'BT-007' | 'BT-009';
  uuid: string;
  venteÅrsakKode?: string;
  versjon: number;
};
