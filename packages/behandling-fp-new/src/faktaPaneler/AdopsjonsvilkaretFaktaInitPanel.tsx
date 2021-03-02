import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { adopsjonsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, Fagsak, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaProps, FaktaPanelWrapper, useFaktaMenyRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.SOKNAD,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
}

interface OwnProps {
  fagsak: Fagsak;
}

/**
 * AdopsjonsvilkaretFaktaInitPanel
 */
const AdopsjonsvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  fagsak,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = initData && initData.vilkar.some((v) => adopsjonsvilkarene.includes(v.vilkarType.kode));

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.ADOPSJONSVILKARET,
    getPackageIntl().formatMessage({ id: 'AdopsjonInfoPanel.Adopsjon' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <AdopsjonFaktaIndex
        isForeldrepengerFagsak={fagsak.sakstype.kode === fagsakYtelseType.FORELDREPENGER}
        {...panelData}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default AdopsjonsvilkaretFaktaInitPanel;
