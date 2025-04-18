import type { Aksjonspunkt } from './aksjonspunktTsType';
import type { ApiLink } from './apiLink';
import type { Behandlingsresultat } from './behandlingsresultatTsType';
import type { Risikoklassifisering } from './risikoklassifiseringTsType';
import type { TotrinnskontrollAksjonspunkt } from './totrinnskontrollAksjonspunktTsType';

export type BehandlingFellesData = Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>;

export type BehandlingÅrsak = {
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
};

type Brevmal = {
  kode: string;
  navn: string;
  tilgjengelig: boolean;
};

export type TotrinnskontrollSkjermlenkeContext = Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>;

export enum VergeBehandlingmenyValg {
  OPPRETT = 'OPPRETT',
  FJERN = 'FJERN',
  SKJUL = 'SKJUL',
}

export type BehandlingTillatteOperasjoner = Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>;

export type BehandlingAppKontekst = BehandlingFellesData &
  Readonly<{
    behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
    brevmaler: Brevmal[];
    totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
    totrinnskontrollReadonly: boolean;
    risikoAksjonspunkt: Aksjonspunkt | null;
    kontrollResultat: Risikoklassifisering;
    ugunstAksjonspunkt: boolean | null;
  }>;
