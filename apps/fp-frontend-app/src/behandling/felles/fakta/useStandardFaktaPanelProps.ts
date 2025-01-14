import { useContext, useEffect, useState } from 'react';

import { isAksjonspunktOpen } from '@navikt/fp-kodeverk';
import { Behandling, Fagsak, StandardFaktaPanelProps } from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { AksjonspunktArgs, OverstyrteAksjonspunktArgs } from '../../../data/behandlingApi';
import { getAlleMerknaderFraBeslutter } from '../utils/getAlleMerknaderFraBeslutter';
import { erReadOnly } from '../utils/readOnlyPanelUtils';
import { StandardPropsStateContext } from '../utils/standardPropsStateContext';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

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
  overstyringApCodes: string[] = [],
): StandardFaktaPanelProps => {
  const [formData, setFormData] = useState();
  const value = useContext(StandardPropsStateContext);

  useEffect(() => {
    if (formData) {
      setFormData(undefined);
    }
  }, [value.behandling.versjon]);

  const { aksjonspunkt } = value.behandling;

  const aksjonspunkterForSteg =
    aksjonspunkt && aksjonspunktKoder ? aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon)) : [];

  const readOnly = erReadOnly(value.behandling, [], value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkterForSteg);

  const submitCallback = getBekreftAksjonspunktFaktaCallback(
    value.fagsak,
    value.behandling,
    value.oppdaterProsessStegOgFaktaPanelIUrl,
    value.lagreAksjonspunkter,
    value.lagreOverstyrteAksjonspunkter,
    overstyringApCodes,
  );

  return {
    behandling: value.behandling,
    submittable:
      !aksjonspunkterForSteg.some(ap => isAksjonspunktOpen(ap.status)) || aksjonspunkterForSteg.some(ap => ap.kanLoses),
    harApneAksjonspunkter: aksjonspunkterForSteg.some(ap => isAksjonspunktOpen(ap.status) && ap.kanLoses),
    alleKodeverk: value.alleKodeverk,
    aksjonspunkter: aksjonspunkterForSteg,
    readOnly,
    alleMerknaderFraBeslutter,
    submitCallback,
    formData,
    setFormData,
  };
};
