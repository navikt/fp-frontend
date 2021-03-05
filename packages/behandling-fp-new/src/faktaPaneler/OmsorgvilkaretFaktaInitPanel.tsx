import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.SOKNAD, FpBehandlingApiKeys.FAMILIEHENDELSE, FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  inntektArbeidYtelse: InntektArbeidYtelse;
}

interface OwnProps {
  personoversikt: Personoversikt;
}

/**
 * OmsorgvilkaretFaktaInitPanel
 */
const OmsorgvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  personoversikt,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = !!initData?.aksjonspunkter.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0]);

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.OMSORGSVILKARET,
    getPackageIntl().formatMessage({ id: 'OmsorgOgForeldreansvarInfoPanel.Omsorg' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} isLoading={!panelData && panelDataState !== RestApiState.SUCCESS}>
      <OmsorgOgForeldreansvarFaktaIndex personoversikt={personoversikt} {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default OmsorgvilkaretFaktaInitPanel;
