import React, {
  FunctionComponent,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SokersOpplysningspliktVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-sokers-opplysningsplikt';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, useSkalViseProsessPanel, ProsessPanelWrapper, prosessPanelHooks, ProsessPanelMenyData,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_OVST,
  aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU,
];

const vilkarKoder = [vilkarType.SOKERSOPPLYSNINGSPLIKT];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const endepunkterPanelData = [FpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
}

interface OwnProps {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpplysningspliktProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder);

  const defaultSkalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);
  const isRevurdering = behandlingType.REVURDERING === standardPanelProps.behandling.type.kode;
  const hasAp = standardPanelProps.aksjonspunkter.some((ap) => ap.definisjon.kode === aksjonspunktCodes.SOKERS_OPPLYSNINGSPLIKT_MANU);
  const skalVises = !(isRevurdering && !hasAp) || defaultSkalVises;
  const erAktiv = valgtProsessSteg === prosessStegCodes.OPPLYSNINGSPLIKT || (standardPanelProps.isAksjonspunktOpen && valgtProsessSteg === 'default');

  const erPanelValgt = prosessPanelHooks.useMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.OPPLYSNINGSPLIKT,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Opplysningsplikt' }),
    skalVises,
    erAktiv,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={standardPanelProps.status}
      loadingState={panelDataState}
    >
      <SokersOpplysningspliktVilkarProsessIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default OpplysningspliktProsessStegPanelDef;
