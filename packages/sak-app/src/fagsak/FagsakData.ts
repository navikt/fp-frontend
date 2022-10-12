import {
  BehandlingAppKontekst, BehandlingOppretting, Fagsak, FagsakDataFpTilbake, Historikkinnslag,
} from '@fpsak-frontend/types';

class FagsakData {
  private $$fagsak: Fagsak;

  private $$fpTilbakeFagsakData?: FagsakDataFpTilbake;

  private $$behandlingOppretting?: BehandlingOppretting[];

  private $$alleBehandlinger?: BehandlingAppKontekst[];

  constructor(fagsak: Fagsak, fpTilbakeFagsakData?: FagsakDataFpTilbake) {
    this.$$fagsak = fagsak;
    this.$$fpTilbakeFagsakData = fpTilbakeFagsakData;

    this.slåSammenData();
  }

  private slåSammenData(): void {
    if (this.$$fpTilbakeFagsakData) {
      this.$$behandlingOppretting = this.$$fagsak.behandlingTypeKanOpprettes
        .concat(this.$$fpTilbakeFagsakData.behandlingTypeKanOpprettes);

      this.$$alleBehandlinger = this.$$fagsak.behandlinger
        .concat(this.$$fpTilbakeFagsakData.behandlinger);
    } else {
      this.$$behandlingOppretting = this.$$fagsak.behandlingTypeKanOpprettes;
      this.$$alleBehandlinger = this.$$fagsak.behandlinger;
    }
  }

  getFagsak(): Fagsak {
    return this.$$fagsak;
  }

  getBehandlingOppretting(): BehandlingOppretting[] {
    return this.$$behandlingOppretting;
  }

  getAlleBehandlinger(): BehandlingAppKontekst[] {
    return this.$$alleBehandlinger;
  }

  getHistorikkFpTilbake(): Historikkinnslag[] {
    return this.$$fpTilbakeFagsakData?.historikkinnslag;
  }
}

export default FagsakData;
