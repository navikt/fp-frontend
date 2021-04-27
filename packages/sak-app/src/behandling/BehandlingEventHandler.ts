/**
 * Denne brukers til å utføre operasjoner på behandling utenfor behandlingskonteksten.
 */
class BehandlingEventHandler {
    handler?: {[key: string]: (params: any) => Promise<any> }

    setHandler = (handler: {[key: string]: (params: any) => Promise<any> }): void => {
      this.handler = handler;
    }

    clear = (): void => {
      this.handler = undefined;
    }

    endreBehandlendeEnhet = (params: {
      behandlingVersjon: number;
      behandlingId: number;
      enhetNavn: string;
      enhetId: string;
      begrunnelse: string;
    }) => (this.handler ? this.handler.endreBehandlendeEnhet(params) : Promise.reject());

    settBehandlingPaVent = (params: {
      behandlingVersjon: number;
      behandlingId: number;
      frist: string;
      ventearsak: string;
    }) => (this.handler ? this.handler.settBehandlingPaVent(params) : Promise.reject());

    taBehandlingAvVent = (params: {
      behandlingId: number;
      behandlingVersjon: number;
    }) => (this.handler ? this.handler.taBehandlingAvVent(params) : Promise.reject());

    henleggBehandling = (params: {
      behandlingVersjon: number;
      behandlingId: number;
      årsakKode: string;
      begrunnelse: string;
    }) => (this.handler ? this.handler.henleggBehandling(params) : Promise.reject());

    opneBehandlingForEndringer = (params: {
      behandlingId: number;
      behandlingVersjon: number;
    }) => (this.handler ? this.handler.opneBehandlingForEndringer(params) : Promise.reject());

    opprettVerge = (params: {
      behandlingId: number;
      behandlingVersjon: number;
    }) => (this.handler ? this.handler.opprettVerge(params) : Promise.reject());

    fjernVerge = (params: {
      behandlingId: number;
      behandlingVersjon: number;
    }) => (this.handler ? this.handler.fjernVerge(params) : Promise.reject());

    lagreRisikoklassifiseringAksjonspunkt = (params: {
      saksnummer: string;
      behandlingId: number;
      behandlingVersjon: number;
      bekreftedeAksjonspunktDtoer: any[];
    }) => (this.handler ? this.handler.lagreRisikoklassifiseringAksjonspunkt(params) : Promise.reject());
}

export default new BehandlingEventHandler();
