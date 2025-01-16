import { Aksjonspunkt } from './aksjonspunktTsType';
import { BehandlingFellesData } from './behandlingAppKontekstTsType';
import { Vilkar } from './vilkarTsType';

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
    };
    vilkår: Vilkar[];
    alleUttaksperioderAvslått: boolean;
  }>;
