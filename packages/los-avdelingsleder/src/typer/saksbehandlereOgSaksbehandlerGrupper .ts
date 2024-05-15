export type GruppeSaksbehandler = Readonly<{
  saksbehandlerDto: {
    brukerIdent: string;
    navn: string;
  };
  avdelingsnavn: string[];
}>;

export type SaksbehandlerGruppe = Readonly<{
  gruppeId: number;
  gruppeNavn?: string;
  saksbehandlere: GruppeSaksbehandler[];
}>;

type SaksbehandlereOgSaksbehandlerGrupper = Readonly<{
  // saksbehandlere: GruppeSaksbehandler[]; // FIXME Kva treng ein denne til?
  saksbehandlerGrupper: SaksbehandlerGruppe[];
}>;

export default SaksbehandlereOgSaksbehandlerGrupper;
