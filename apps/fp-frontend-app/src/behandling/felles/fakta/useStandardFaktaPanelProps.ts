import { use } from 'react';

import { isAksjonspunktOpen } from '@navikt/fp-kodeverk';
import type { Behandling, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import type { StandardFaktaPanelProps } from '../typer/standardFaktaPanelPropsTsType';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

const getBekreftAksjonspunktFaktaCallback =
  (
    fagsak: Fagsak,
    behandling: Behandling,
    oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
    lagreAksjonspunkter: (params: AksjonspunktArgs) => Promise<Behandling>,
    lagreOverstyrteAksjonspunkter: (params: OverstyrteAksjonspunktArgs) => Promise<Behandling>,
    overstyringApCodes?: string[],
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

    if (model && lagreOverstyrteAksjonspunkter && overstyringApCodes) {
      if (model.length === 0) {
        throw Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
      }
      if (overstyringApCodes.includes(model[0].kode)) {
        return lagreOverstyrteAksjonspunkter({
          ...params,
          overstyrteAksjonspunktDtoer: model,
        }).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
      }
    }

    return lagreAksjonspunkter({
      ...params,
      bekreftedeAksjonspunktDtoer: model,
    }).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
  };

export const useStandardFaktaPanelProps = (
  aksjonspunktKoder?: string[],
  overstyringApKoder: string[] = [],
): StandardFaktaPanelProps => {
  const {
    behandling,
    rettigheter,
    fagsak,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    oppdaterProsessStegOgFaktaPanelIUrl,
    alleKodeverk,
  } = use(BehandlingDataContext);

  const { aksjonspunkt } = behandling;

  const aksjonspunkterForPanel =
    aksjonspunkt && aksjonspunktKoder ? aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon)) : [];

  const isReadOnly = erReadOnly(behandling, [], rettigheter, false);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(behandling.status, aksjonspunkterForPanel);

  const submitCallback = getBekreftAksjonspunktFaktaCallback(
    fagsak,
    behandling,
    oppdaterProsessStegOgFaktaPanelIUrl,
    lagreAksjonspunkter,
    lagreOverstyrteAksjonspunkter,
    overstyringApKoder,
  );

  return {
    behandling,
    submittable:
      !aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.status)) ||
      aksjonspunkterForPanel.some(ap => ap.kanLoses),
    harÅpneAksjonspunkter: aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.status) && ap.kanLoses),
    alleKodeverk,
    aksjonspunkterForPanel,
    isReadOnly,
    alleMerknaderFraBeslutter,
    submitCallback,
  };
};
