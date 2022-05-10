/**
 * Denne brukers til å utføre operasjoner på behandling utenfor behandlingskonteksten.
 */
class BehandlingEventHandler {
  handler?: {[key: string]: (params?: any) => Promise<any> };

  setHandler = (handler: {[key: string]: (params: any) => Promise<any> }): void => {
    this.handler = handler;
  };

  clear = (): void => {
    this.handler = undefined;
  };

  endreBehandlendeEnhet = (params: {
      enhetNavn: string;
      enhetId: string;
      begrunnelse: string;
    }) => (this.handler ? this.handler.endreBehandlendeEnhet(params) : Promise.reject());

  settBehandlingPaVent = (params: {
      frist: string;
      ventearsak: string;
    }) => (this.handler ? this.handler.settBehandlingPaVent(params) : Promise.reject());

  taBehandlingAvVent = () => (this.handler ? this.handler.taBehandlingAvVent() : Promise.reject());

  henleggBehandling = (params: {
      årsakKode: string;
      begrunnelse: string;
    }) => (this.handler ? this.handler.henleggBehandling(params) : Promise.reject());

  opneBehandlingForEndringer = () => (this.handler ? this.handler.opneBehandlingForEndringer() : Promise.reject());

  opprettVerge = () => (this.handler ? this.handler.opprettVerge() : Promise.reject());

  fjernVerge = () => (this.handler ? this.handler.fjernVerge() : Promise.reject());

  lagreRisikoklassifiseringAksjonspunkt = (params: {
      saksnummer: string;
      bekreftedeAksjonspunktDtoer: any[];
    }) => (this.handler ? this.handler.lagreRisikoklassifiseringAksjonspunkt(params) : Promise.reject());
}

export default new BehandlingEventHandler();
