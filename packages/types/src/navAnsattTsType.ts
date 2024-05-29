type NavAnsatt = Readonly<{
  navn: string;
  brukernavn: string;
  funksjonellTid?: string;
  kanBehandleKode6: boolean; // los
  kanOppgavestyre: boolean; // los
  kanOverstyre: boolean;
  kanSaksbehandle: boolean;
  kanVeilede: boolean;
}>;

export default NavAnsatt;
