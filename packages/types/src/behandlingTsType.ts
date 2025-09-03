import type { tjenester_behandling_dto_behandling_UtvidetBehandlingDto } from './apiDtoGenerert';

// export type Behandling = BehandlingFellesData &
//   Readonly<{
//     aksjonspunkt: Aksjonspunkt[];
//     harSøknad: boolean;
//     harSattEndringsdato: boolean;
//     sjekkSimuleringResultat: boolean;
//     taskStatus?: {
//       message: string;
//       pending: boolean;
//       status: string;
//       readOnly: boolean;
//       eta?: string;
//     } | null;
//     vilkår: Vilkar[];
//     alleUttaksperioderAvslått: boolean;
//   }>;

export type Behandling = tjenester_behandling_dto_behandling_UtvidetBehandlingDto;
