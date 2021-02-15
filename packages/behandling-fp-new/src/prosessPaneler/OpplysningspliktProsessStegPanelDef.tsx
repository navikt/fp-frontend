import React, {
  FunctionComponent, useEffect, useState,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel, ProsessPanelWrapper } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_OVST,
  aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
];

const vilkarKoder = [vilkarType.SOKERSOPPLYSNINGSPLIKT];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.SOKNAD },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  soknad: Soknad;
}

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpplysningspliktProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  oppdaterBehandlingVersjon,
  apentFaktaPanelInfo,
  arbeidsgiverOpplysningerPerId,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.OPPLYSNINGSPLIKT,
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
  const filtrerteVilkar = data ? data.vilkar.filter((v) => vilkarKoder.includes(v.vilkarType.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter, filtrerteVilkar);

  const skalVises = useSkalViseProsessPanel(filtrerteAksjonspunkter, vilkarKoder, filtrerteVilkar);

  useEffect(() => {
    const isRevurdering = behandlingType.REVURDERING === behandling.type.kode;
    const hasAp = filtrerteAksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU);
    if (!(isRevurdering && !hasAp) || skalVises) {
      const erValgt = !apentFaktaPanelInfo
      && (valgtProsessSteg === prosessStegCodes.OPPLYSNINGSPLIKT || (standardProps.isAksjonspunktOpen && valgtProsessSteg === 'default'));
      registrerFaktaPanel({
        id: prosessStegCodes.OPPLYSNINGSPLIKT,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' }),
        erAktiv: erValgt,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: standardProps.status,
      });
      setPanelValgt(erValgt);
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state]);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardProps.isAksjonspunktOpen}
      status={standardProps.status}
      loadingState={stateEtterVisning}
    >
      <SokersOpplysningspliktVilkarProsessIndex
        behandling={behandling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...dataEtterVisning}
        {...standardProps}
      />
    </ProsessPanelWrapper>
  );
};

export default OpplysningspliktProsessStegPanelDef;
