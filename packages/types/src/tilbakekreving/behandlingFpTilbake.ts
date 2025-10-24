import type { BehandlingÅrsakDtoFpTilbake } from './behandlingÅrsakDtoFpTilbake';
import type { BehandlingsresultatDtoFpTilbake } from './behandlingsresultatDtoFpTilbake';

type HttpMethodFpTilbake = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
type ResourceLinkFpTilbake = {
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: HttpMethodFpTilbake;
};
type SpråkkodeFpTilbake = 'NB' | 'NN' | 'EN' | '-';
type BehandlingStatusFpTilbake = 'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED';

type StatusFpTilbake = 'PENDING' | 'COMPLETE' | 'DELAYED' | 'CANCELLED' | 'HALTED';

type AsyncPollingStatusFpTilbake = {
  cancelUri?: string;
  eta?: string;
  location?: string;
  message: string;
  pollIntervalMillis?: number;
  readOnly?: boolean;
  status?: StatusFpTilbake;
};

type AksjonspunktStatusFpTilbake = 'AVBR' | 'OPPR' | 'UTFO';

type AksjonspunktTypeFpTilbake = 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';

type AksjonspunktDefinisjonFpTilbake = '5002' | '5003' | '5004' | '5005' | '5030' | '7003' | '7001' | '7002';

type VurderÅrsakFpTilbake =
  | 'FEIL_FAKTA'
  | 'FEIL_LOV'
  | 'SKJØNN'
  | 'UTREDNING'
  | 'SAKSFLYT'
  | 'BEGRUNNELSE'
  | '-'
  | 'ANNET'
  | 'FEIL_REGEL';

type AksjonspunktDtoFpTilbake = {
  aksjonspunktType: AksjonspunktTypeFpTilbake;
  besluttersBegrunnelse?: string;
  definisjon: AksjonspunktDefinisjonFpTilbake;
  erAktivt: boolean;
  kanLoses: boolean;
  status: AksjonspunktStatusFpTilbake;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<VurderÅrsakFpTilbake>;
};

export type BehandlingFpTilbake = {
  aksjonspunkt: Array<AksjonspunktDtoFpTilbake>;
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
  links: Array<ResourceLinkFpTilbake>;
  opprettet: string;
  originalVedtaksDato?: string;
  språkkode: SpråkkodeFpTilbake;
  status: BehandlingStatusFpTilbake;
  taskStatus?: AsyncPollingStatusFpTilbake;
  toTrinnsBehandling: boolean;
  type: 'BT-007' | 'BT-009';
  uuid: string;
  venteÅrsakKode?: string;
  versjon: number;
};
