import { AbstractRequestApi } from '@fpsak-frontend/rest-api';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, Fagsak,
} from '@fpsak-frontend/types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import aksjonspunktType from '@fpsak-frontend/kodeverk/src/aksjonspunktType';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

const getBekreftAksjonspunktProsessCallback = (
  lagringSideEffectsCallback: (aksjonspunktModeller: any) => () => void,
  fagsak: Fagsak,
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<any>,
) => (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => {
  const apListe = Array.isArray(aksjonspunkterSomSkalLagres) ? aksjonspunkterSomSkalLagres : [aksjonspunkterSomSkalLagres];
  const models = apListe.map((ap) => ({
    '@type': ap.kode,
    ...ap,
  }));

  const params = {
    saksnummer: fagsak.saksnummer,
    behandlingId: behandling.id,
    behandlingVersjon: behandling.versjon,
  };

  const etterLagringCallback = lagringSideEffectsCallback(apListe);

  if (lagreOverstyrteAksjonspunkter) {
    const aksjonspunkterTilLagring = aksjonspunkter.filter((ap) => apListe.some((apModel) => apModel.kode === ap.definisjon.kode));
    const erOverstyringsaksjonspunkter = aksjonspunkterTilLagring
      .some((ap) => ap.aksjonspunktType.kode === aksjonspunktType.OVERSTYRING || ap.aksjonspunktType.kode === aksjonspunktType.SAKSBEHANDLEROVERSTYRING);

    if (aksjonspunkterTilLagring.length === 0 || erOverstyringsaksjonspunkter) {
      return lagreOverstyrteAksjonspunkter({
        ...params,
        overstyrteAksjonspunktDtoer: models,
      }, true).then(etterLagringCallback);
    }
  }

  return lagreAksjonspunkter({
    ...params,
    bekreftedeAksjonspunktDtoer: models,
  }, true).then(etterLagringCallback);
};

const getAlleMerknaderFraBeslutter = (behandling: Behandling, aksjonspunkter: Aksjonspunkt[]) => {
  if (behandling.status.kode !== behandlingStatus.BEHANDLING_UTREDES) {
    return {};
  }
  return aksjonspunkter.reduce((obj, ap) => ({
    ...obj,
    [ap.definisjon.kode]: {
      notAccepted: ap.toTrinnsBehandling && ap.toTrinnsBehandlingGodkjent === false,
    },
  }), {});
};

class ProsessData {
  api: AbstractRequestApi;

  behandlingData: {
    fagsak: Fagsak;
    behandling: Behandling;
    alleKodeverk: AlleKodeverk;
  }

  aksjonspunkter: Aksjonspunkt[];

  egneAksjonspunkter: Aksjonspunkt[];

  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<Behandling>;

  lagreOverstyrtAksjonspunkt?: (params: any, keepData?: boolean) => Promise<Behandling>;

  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;

  lagringSideeffekter: (aksjonspunktModeller: any) => () => void;

  constructor(
    api: AbstractRequestApi,
    behandlingData: {
      fagsak: Fagsak;
      behandling: Behandling;
      alleKodeverk: AlleKodeverk;
    },
  ) {
    this.api = api;
    this.behandlingData = behandlingData;
  }

  medAksjonspunkter = (aksjonspunkter: Aksjonspunkt[], aksjonspunktKoder: AksjonspunktCode[]) => {
    this.aksjonspunkter = aksjonspunkter;
    this.egneAksjonspunkter = aksjonspunkter.filter((ap) => aksjonspunktKoder.some((ak) => ak === ap.definisjon.kode));
    return this;
  }

  medLagring = (
    oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void,
    lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<Behandling>,
    lagreOverstyrtAksjonspunkt?: (params: any, keepData?: boolean) => Promise<Behandling>,
  ) => {
    this.oppdaterProsessStegOgFaktaPanelIUrl = oppdaterProsessStegOgFaktaPanelIUrl;
    this.lagreAksjonspunkter = lagreAksjonspunkter;
    this.lagreOverstyrtAksjonspunkt = lagreOverstyrtAksjonspunkt;
    return this;
  }

  medLagringSideeffekter = (lagringSideeffekter: (aksjonspunktModels: { kode: string }[]) => () => void) => {
    this.lagringSideeffekter = lagringSideeffekter;
    return this;
  }

  getAlleMerknaderFraBeslutter = () => () => getAlleMerknaderFraBeslutter(this.behandlingData.behandling, this.aksjonspunkter);

  getSubmitHandler = () => {
    if (!this.lagreAksjonspunkter) {
      throw Error('Har ikke satt lagrefunksjon');
    }

    const standardlagringSideEffekter = () => () => {
      this.oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
    };

    return getBekreftAksjonspunktProsessCallback(
      this.lagringSideeffekter || standardlagringSideEffekter,
      this.behandlingData.fagsak,
      this.behandlingData.behandling,
      this.egneAksjonspunkter,
      this.lagreAksjonspunkter,
      this.lagreOverstyrtAksjonspunkt,
    );
  }
}

export default ProsessData;
