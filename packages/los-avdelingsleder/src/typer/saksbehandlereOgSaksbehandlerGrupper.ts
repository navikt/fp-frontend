import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

export type SaksbehandlerGruppe = Readonly<{
  gruppeId: number;
  gruppeNavn?: string;
  saksbehandlere: SaksbehandlerProfil[];
}>;

export type SaksbehandlereOgSaksbehandlerGrupper = Readonly<{
  // saksbehandlere: GruppeSaksbehandler[]; // FIXME Kva treng ein denne til?
  saksbehandlerGrupper: SaksbehandlerGruppe[];
}>;
