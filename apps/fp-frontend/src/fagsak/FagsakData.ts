import type {
  BehandlingOppretting,
  Fagsak,
  FagsakBehandlingDto,
  Historikkinnslag,
  HistorikkinnslagDtoFpTilbake,
  SakFullDtoFpTilbake,
} from '@navikt/fp-types';

export class FagsakData {
  private $$fagsak: Fagsak;

  private $$fpTilbakeFagsakData?: SakFullDtoFpTilbake;

  private $$behandlingOppretting: BehandlingOppretting[];

  private $$alleBehandlinger: FagsakBehandlingDto[];

  constructor(fagsak: Fagsak, fpTilbakeFagsakData?: SakFullDtoFpTilbake) {
    this.$$fagsak = fagsak;
    this.$$fpTilbakeFagsakData = fpTilbakeFagsakData;

    this.$$behandlingOppretting = [];
    this.$$alleBehandlinger = [];

    this.slåSammenData();
  }

  private slåSammenData(): void {
    if (this.$$fpTilbakeFagsakData) {
      this.$$behandlingOppretting = this.$$fagsak.behandlingTypeKanOpprettes.concat(
        this.$$fpTilbakeFagsakData.behandlingTypeKanOpprettes,
      );

      this.$$alleBehandlinger = [...this.$$fagsak.behandlinger, ...this.$$fpTilbakeFagsakData.behandlinger];
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

  getAlleBehandlinger(): FagsakBehandlingDto[] {
    return this.$$alleBehandlinger;
  }

  getBehandling(uuid?: string): FagsakBehandlingDto | undefined {
    return this.$$alleBehandlinger.find(b => b.uuid === uuid);
  }

  getHistorikkFpSak(): Historikkinnslag[] {
    return this.$$fagsak.historikkinnslag;
  }

  getHistorikkFpTilbake(): HistorikkinnslagDtoFpTilbake[] | undefined {
    return this.$$fpTilbakeFagsakData?.historikkinnslag;
  }
}
