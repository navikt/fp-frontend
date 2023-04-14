type NavAnsatt = Readonly<{
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean;
  kanBehandleKode7: boolean;
  kanBehandleKodeEgenAnsatt: boolean;
  kanBeslutte: boolean;
  kanOppgavestyre: boolean;
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
  navn: string;
  skalViseDetaljerteFeilmeldinger: boolean;
}>;

export default NavAnsatt;
