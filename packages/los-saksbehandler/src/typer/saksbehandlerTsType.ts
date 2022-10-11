type Saksbehandler = Readonly<{
  brukerIdent: {
    brukerIdent: string;
    verdi: string;
  };
  navn: string;
  avdelingsnavn: string[];
}>

export default Saksbehandler;
