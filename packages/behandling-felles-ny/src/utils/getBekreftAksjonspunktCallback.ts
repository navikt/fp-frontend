import aksjonspunktType from '@fpsak-frontend/kodeverk/src/aksjonspunktType';
import { Aksjonspunkt, Behandling, Fagsak } from '@fpsak-frontend/types';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

export const getBekreftAksjonspunktFaktaCallback = (
  fagsak: Fagsak,
  behandling: Behandling,
  oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<any>,
  overstyringApCodes?: string[],
) => (aksjonspunkter) => {
  const model = aksjonspunkter.map((ap) => ({
    '@type': ap.kode,
    ...ap,
  }));

  const params = {
    saksnummer: fagsak.saksnummer,
    behandlingId: behandling.id,
    behandlingVersjon: behandling.versjon,
  };

  if (model && overstyringApCodes && overstyringApCodes.includes(model[0].kode)) {
    return lagreOverstyrteAksjonspunkter({
      ...params,
      overstyrteAksjonspunktDtoer: model,
    }, true).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
  }

  return lagreAksjonspunkter({
    ...params,
    bekreftedeAksjonspunktDtoer: model,
  }, true).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
};

export const getBekreftAksjonspunktProsessCallback = (
  lagringSideEffectsCallback: (aksjonspunktModeller: any) => () => void,
  fagsak: Fagsak,
  behandling: Behandling,
  aksjonspunkter: Aksjonspunkt[],
  lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<any>,
  lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<any>,
) => (aksjonspunktModels) => {
  const models = aksjonspunktModels.map((ap) => ({
    '@type': ap.kode,
    ...ap,
  }));

  const params = {
    saksnummer: fagsak.saksnummer,
    behandlingId: behandling.id,
    behandlingVersjon: behandling.versjon,
  };

  const etterLagringCallback = lagringSideEffectsCallback(aksjonspunktModels);

  if (lagreOverstyrteAksjonspunkter) {
    const aksjonspunkterTilLagring = aksjonspunkter.filter((ap) => aksjonspunktModels.some((apModel) => apModel.kode === ap.definisjon.kode));
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
