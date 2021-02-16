import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { fodselsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Personopplysninger, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import {
  FaktaPanelMenyData, useStandardFaktaProps, faktaPanelHooks, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.TERMINBEKREFTELSE,
  aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const endepunkterPanelData = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  FpBehandlingApiKeys.SOKNAD,
  FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
  FpBehandlingApiKeys.PERSONOPPLYSNINGER,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  personopplysninger: Personopplysninger;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}

/**
 * FodselvilkaretFaktaPanelDef
 */
const FodselvilkaretFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, aksjonspunktKoder);

  const skalVises = initData && initData.vilkar.some((v) => fodselsvilkarene.includes(v.vilkarType.kode));
  const erAktiv = valgtFaktaSteg === faktaPanelCodes.FODSELSVILKARET
    || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.FODSELSVILKARET,
    getPackageIntl().formatMessage({ id: 'FodselInfoPanel.Fodsel' }),
    skalVises,
    erAktiv,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <FodselFaktaIndex {...initData} {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default FodselvilkaretFaktaPanelDef;
