import { use } from 'react';

import type { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { type AksjonspunktArgs, type OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';

const DEFAULT_FAKTA_KODE = 'default';
const DEFAULT_PROSESS_STEG_KODE = 'default';

export type StandardFaktaPanelProps = Readonly<{
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  isSubmittable: boolean;
  harÅpentAksjonspunkt: boolean;

  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}>;

export const useStandardFaktaPanelProps = (
  aksjonspunktKoder: Aksjonspunkt['definisjon'][] = [],
  overstyringKoder: Aksjonspunkt['definisjon'][] = [],
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

  const aksjonspunkterForPanel = aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon));

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
    overstyringApCodes?: string[],
  ) =>
  (aksjonspunkter: FaktaAksjonspunkt | FaktaAksjonspunkt[]): Promise<void> => {
    const apListe = Array.isArray(aksjonspunkter) ? aksjonspunkter : [aksjonspunkter];

    const model = apListe.map(ap => ({
      // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      '@type': ap.kode,
      ...ap,
    }));

    const params = {
      saksnummer: fagsak.saksnummer,
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
    };

    if (overstyringApCodes) {
      if (model.length === 0) {
        throw new Error('Det har oppstått en teknisk feil ved lagring av aksjonspunkter. Meld feilen i Porten.');
      }
      // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (overstyringApCodes.includes(model[0].kode)) {
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
