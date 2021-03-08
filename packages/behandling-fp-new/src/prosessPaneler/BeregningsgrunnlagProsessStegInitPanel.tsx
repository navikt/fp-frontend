import React, {
  FunctionComponent,
} from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsgrunnlagProsessIndex from '@fpsak-frontend/prosess-beregningsgrunnlag';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, useProsessMenyRegistrerer, ProsessPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  aksjonspunktCodes.VURDER_DEKNINGSGRAD,
];

const VILKAR_KODER = [vilkarType.BEREGNINGSGRUNNLAGVILKARET];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.BEREGNINGSGRUNNLAG];
type EndepunktPanelData = {
  beregningsgrunnlag?: Beregningsgrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const BeregningsgrunnlagProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, VILKAR_KODER);

  const skalVises = initState === RestApiState.SUCCESS;

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    initState,
    prosessStegCodes.BEREGNINGSGRUNNLAG,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' }),
    valgtProsessSteg,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={standardPanelProps.status}
      dataState={panelDataState}
    >
      <BeregningsgrunnlagProsessIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default BeregningsgrunnlagProsessStegInitPanel;
