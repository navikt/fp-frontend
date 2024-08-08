type SaksbehandlerProfil = Readonly<{
  brukerIdent: string;
  navn: string;
  ansattAvdeling?: string;
}>;

export default SaksbehandlerProfil;
