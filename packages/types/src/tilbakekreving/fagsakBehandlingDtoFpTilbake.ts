import type { BehandlingÅrsakDtoFpTilbake } from './behandlingÅrsakDtoFpTilbake';
import type { BehandlingsresultatDtoFpTilbake } from './behandlingsresultatDtoFpTilbake';
import type { SkjermlenkeTypeFpTilbake } from './sakFullDtoFpTilbake';

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

type VergeBehandlingsmenyEnumFpTilbake = 'SKJUL' | 'OPPRETT' | 'FJERN';

type BehandlingOperasjonerDtoFpTilbake = {
  behandlingFraBeslutter: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingTilGodkjenning: boolean;
  uuid?: string;
  vergeBehandlingsmeny: VergeBehandlingsmenyEnumFpTilbake;
};

type BrevmalDtoFpTilbake = {
  kode: string;
  navn: string;
  tilgjengelig?: boolean;
};

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

export type TotrinnskontrollAksjonspunkterDtoFpTilbake = {
  aksjonspunktKode: string;
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<VurderÅrsakFpTilbake>;
};

export type TotrinnskontrollSkjermlenkeContextDtoFpTilbake = {
  skjermlenkeType: SkjermlenkeTypeFpTilbake;
  totrinnskontrollAksjonspunkter: Array<TotrinnskontrollAksjonspunkterDtoFpTilbake>;
};

export type FagsakBehandlingDtoFpTilbake = {
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKøet: boolean;
  behandlingPåVent: boolean;
  behandlingTillatteOperasjoner?: BehandlingOperasjonerDtoFpTilbake;
  behandlingsfristTid?: string;
  behandlingsresultat?: BehandlingsresultatDtoFpTilbake;
  behandlingÅrsaker: Array<BehandlingÅrsakDtoFpTilbake>;
  brevmaler: Array<BrevmalDtoFpTilbake>;
  endret?: string;
  fagsakId?: number;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: BehandlingÅrsakDtoFpTilbake;
  harVerge: boolean;
  id?: number;
  kanHenleggeBehandling: boolean;
  links: Array<ResourceLinkFpTilbake>;
  opprettet: string;
  språkkode: SpråkkodeFpTilbake;
  status: BehandlingStatusFpTilbake;
  toTrinnsBehandling: boolean;
  totrinnskontrollReadonly?: boolean;
  totrinnskontrollÅrsaker: Array<TotrinnskontrollSkjermlenkeContextDtoFpTilbake>;
  type: 'BT-007' | 'BT-009';
  uuid: string;
  venteÅrsakKode?: string;
  versjon: number;
};
