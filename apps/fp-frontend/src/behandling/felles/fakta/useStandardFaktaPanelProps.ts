import type { Aksjonspunkt, AlleKodeverk, Behandling, BehandlingFpSak, Fagsak, Vilkar } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

export type StandardFaktaPanelProps<T extends Behandling> = Readonly<{
  behandling: T;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkårForPanel: Vilkar[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}>;

export const useStandardFaktaPanelProps = <T extends Behandling = BehandlingFpSak>(
  aksjonspunktKoder: Aksjonspunkt['definisjon'][] = [],
): StandardFaktaPanelProps<T> => {
  const {
    behandling,
    rettigheter,
    fagsak,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
    alleKodeverk,
  } = useBehandlingDataContext<T>();

  const aksjonspunkterForPanel = behandling.aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon));
  const overstyringKoder = aksjonspunktKoder.filter(kode => kode.startsWith('6'));

  const vilkårTypeFraAP = aksjonspunkterForPanel.map(ap => ap.vilkarType).filter(vt => vt !== undefined);
  const vilkårForPanel =
    'vilkår' in behandling ? behandling.vilkår.filter(v => vilkårTypeFraAP.includes(v.vilkarType)) : [];

  const isReadOnly = erReadOnly(behandling, [], rettigheter, false);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(behandling.status, aksjonspunkterForPanel);

  const submitCallback = getBekreftAksjonspunktFaktaCallback(
    fagsak,
    behandling,
    oppdaterProsessStegOgFaktaPanelIUrl,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    overstyringKoder,
  );

  return {
    behandling,
    isSubmittable: !aksjonspunkterForPanel.some(erAksjonspunktÅpent) || aksjonspunkterForPanel.some(ap => ap.kanLoses),
    harÅpentAksjonspunkt: aksjonspunkterForPanel.some(ap => erAksjonspunktÅpent(ap) && ap.kanLoses),
    alleKodeverk,
    aksjonspunkterForPanel,
    vilkårForPanel,
    isReadOnly,
    alleMerknaderFraBeslutter,
    submitCallback,
  };
};

const getBekreftAksjonspunktFaktaCallback =
  (
    fagsak: Fagsak,
    behandling: Behandling,
    oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
    lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<Behandling>,
    lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<Behandling>,
    overstyringApCodes: string[],
  ) =>
  (aksjonspunkter: FaktaAksjonspunkt | FaktaAksjonspunkt[]): Promise<void> => {
    const apListe = Array.isArray(aksjonspunkter) ? aksjonspunkter : [aksjonspunkter];

    const model = apListe.map(ap => ({
      '@type': ap.kode,
      ...ap,
    }));

    const params = {
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    };

    if (overstyringApCodes.length > 0) {
      if (model.length === 0) {
        throw new Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
      }
      if (overstyringApCodes.includes(model[0]?.kode ?? '')) {
        return lagreOverstyrteAksjonspunkter({
          ...params,
          overstyrteAksjonspunktDtoer: model,
        }).then(() => {
          oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
          globalThis.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        });
      }
    }

    return lagreAksjonspunkter({
      ...params,
      bekreftedeAksjonspunktDtoer: model,
    }).then(() => {
      oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE);
      globalThis.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };
