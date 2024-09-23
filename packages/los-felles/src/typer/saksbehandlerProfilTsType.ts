type SaksbehandlerProfil = Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling: string | null;
}>;

export default SaksbehandlerProfil;
