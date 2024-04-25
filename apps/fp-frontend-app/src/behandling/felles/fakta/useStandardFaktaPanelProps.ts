import { useContext, useEffect, useMemo, useState } from 'react';
import { Behandling, Fagsak } from '@navikt/ft-types';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';

import { StandardFaktaPanelProps } from '@navikt/fp-types';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { erReadOnly } from '../utils/readOnlyPanelUtils';
import getAlleMerknaderFraBeslutter from '../utils/getAlleMerknaderFraBeslutter';
import { StandardPropsStateContext } from '../utils/standardPropsStateContext';

export const DEFAULT_FAKTA_KODE = 'default';
export const DEFAULT_PROSESS_STEG_KODE = 'default';

const getBekreftAksjonspunktFaktaCallback =
  (
    fagsak: Fagsak,
    behandling: Behandling,
    oppdaterProsessStegOgFaktaPanelIUrl: (prosessPanel?: string, faktanavn?: string) => void,
    lagreAksjonspunkter: (params: any, keepData?: boolean) => Promise<Behandling | undefined>,
    lagreOverstyrteAksjonspunkter?: (params: any, keepData?: boolean) => Promise<Behandling | undefined>,
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
        return lagreOverstyrteAksjonspunkter(
          {
            ...params,
            overstyrteAksjonspunktDtoer: model,
          },
          true,
        ).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
      }
    }

    return lagreAksjonspunkter(
      {
        ...params,
        bekreftedeAksjonspunktDtoer: model,
      },
      true,
    ).then(() => oppdaterProsessStegOgFaktaPanelIUrl(DEFAULT_PROSESS_STEG_KODE, DEFAULT_FAKTA_KODE));
  };

const useStandardFaktaPanelProps = (
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

  const aksjonspunkterForSteg = useMemo(
    () =>
      aksjonspunkt && aksjonspunktKoder ? aksjonspunkt.filter(ap => aksjonspunktKoder.includes(ap.definisjon)) : [],
    [aksjonspunkt, aksjonspunktKoder],
  );

  const readOnly = erReadOnly(value.behandling, [], value.rettigheter, value.hasFetchError);
  const alleMerknaderFraBeslutter = useMemo(
    () => getAlleMerknaderFraBeslutter(value.behandling, aksjonspunkterForSteg),
    [value.behandling.versjon, aksjonspunkterForSteg],
  );

  const submitCallback = useMemo(
    () =>
      getBekreftAksjonspunktFaktaCallback(
        value.fagsak,
        value.behandling,
        value.oppdaterProsessStegOgFaktaPanelIUrl,
        value.lagreAksjonspunkter,
        value.lagreOverstyrteAksjonspunkter,
        overstyringApCodes,
      ),
    [value.behandling.versjon, overstyringApCodes],
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

export default useStandardFaktaPanelProps;
