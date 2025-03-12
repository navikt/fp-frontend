import type { Aksjonspunkt } from './aksjonspunktTsType';
import type { BehandlingFellesData } from './behandlingAppKontekstTsType';
import type { Vilkar } from './vilkarTsType';

export type Behandling = BehandlingFellesData &
  Readonly<{
    aksjonspunkt: Aksjonspunkt[];
    harSøknad: boolean;
    harSattEndringsdato: boolean;
    sjekkSimuleringResultat: boolean;
    taskStatus?: {
      message: string;
      pending: boolean;
      status: string;
      readOnly: boolean;
      eta?: string;
    } | null;
    vilkår: Vilkar[];
    alleUttaksperioderAvslått: boolean;
  }>;
