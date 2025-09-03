import type { tjenester_behandling_dto_behandling_BehandlingsresultatDto } from './apiDtoGenerert';

// export type Behandlingsresultat = Readonly<{
//   id: number;
//   type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
//   avslagsarsak: Avslagsarsak | null;
//   avslagsarsakFritekst?: string | null;
//   rettenTil?: string;
//   konsekvenserForYtelsen?: KonsekvensForYtelsen[];
//   vedtaksbrev?: string;
//   overskrift: string | null;
//   fritekstbrev: string | null;
//   harRedigertVedtaksbrev: boolean;
//   erRevurderingMedUendretUtfall?: boolean;
//   skjæringstidspunkt?: {
//     dato: string;
//   };
//   opphørsdato: string | null;
//   vedtaksbrevStatus:
//     | 'VEDTAKSBREV_PRODUSERES'
//     | 'INGEN_VEDTAKSBREV'
//     | 'INGEN_VEDTAKSBREV_ANKE'
//     | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
//     | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
//     | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
//     | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
// }>;

export type Behandlingsresultat = tjenester_behandling_dto_behandling_BehandlingsresultatDto;
