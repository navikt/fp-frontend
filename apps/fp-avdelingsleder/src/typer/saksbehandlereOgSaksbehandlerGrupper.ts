import type { SaksbehandlerProfil } from '@navikt/fp-types';

export type SaksbehandlerGruppe = Readonly<{
  gruppeId: number;
  gruppeNavn?: string;
  saksbehandlere: SaksbehandlerProfil[];
}>;

export type SaksbehandlereOgSaksbehandlerGrupper = Readonly<{
  saksbehandlerGrupper: SaksbehandlerGruppe[];
}>;
