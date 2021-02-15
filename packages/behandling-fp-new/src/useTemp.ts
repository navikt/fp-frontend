import { useEffect, useState } from "react";

const useTemp = (
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void,
  prosessStegKode: string,
) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegKode,
    });
  }, []);

  useEffect(() => {
    oppdaterBehandlingVersjon(behandling.versjon);
  }, [behandling.versjon]);

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter);

  useEffect(() => {
    if (skalVises) {
      const erValgt = !apentFaktaPanelInfo
        && (valgtProsessSteg === prosessStegCodes.AVREGNING || (standardProps.isAksjonspunktOpen && valgtProsessSteg === 'default'));
      registrerFaktaPanel({
        id: prosessStegCodes.AVREGNING,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' }),
        erAktiv: erValgt,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: data.simuleringResultat ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT,
      });
      setPanelValgt(erValgt);
    } else {
      registrerFaktaPanel({
        id: prosessStegCodes.AVREGNING,
      });
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state, harAktivtVedtakspanel]);


  return {
    data: {
      ...data,
      ...dataEtterVisning,
      ...standardProps,
    };
  };
};

export default useTemp;
