import React, {
  FunctionComponent, useEffect,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelPropsNew, useSkalViseProsessPanel, ProsessPanelWrapper } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';
import prosessPanelHooks from '../prosessPanelHooks';

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
  useEffect(() => {
    oppdaterBehandlingVersjon(behandling.versjon);
  }, [behandling.versjon]);

  const { data } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const standardProps = useStandardProsessPanelPropsNew(data, aksjonspunktKoder, vilkarKoder);

  const defaultSkalVises = useSkalViseProsessPanel(standardProps.aksjonspunkter, vilkarKoder, standardProps.vilkar);

  const isRevurdering = behandlingType.REVURDERING === behandling.type.kode;
  const hasAp = standardProps.aksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU);
  const skalVises = !(isRevurdering && !hasAp) || defaultSkalVises;
  const erAktiv = !apentFaktaPanelInfo
    && (valgtProsessSteg === prosessStegCodes.OPPLYSNINGSPLIKT || (standardProps.isAksjonspunktOpen && valgtProsessSteg === 'default'));

  const erPanelValgt = prosessPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    prosessStegCodes.OPPLYSNINGSPLIKT,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' }),
    skalVises,
    erAktiv,
    standardProps.isAksjonspunktOpen,
    standardProps.status,
  );

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

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
