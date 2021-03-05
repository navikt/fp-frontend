import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import MedlemskapFaktaIndex from '@fpsak-frontend/fakta-medlemskap';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  AksessRettigheter,
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, InntektArbeidYtelse, Medlemskap, Soknad,
} from '@fpsak-frontend/types';
import {
  useStandardFaktaPanelProps, harBehandlingReadOnlyStatus, useFaktaMenyRegistrerer, FaktaPanelWrapper, FaktaPanelInitProps,
} from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
  aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
  aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
  aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
  aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.SOKNAD];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  soknad: Soknad;
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE, FpBehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
  medlemskap: Medlemskap;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
  hasFetchError: boolean;
}

/**
 * MedlemskapsvilkaretFaktaInitPanel
 */
const MedlemskapsvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  hasFetchError,
}) => {
  const { initData } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER, [], OVERSTYRING_AP_CODES);

  const skalVises = !!initData?.soknad;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.MEDLEMSKAPSVILKARET,
    getPackageIntl().formatMessage({ id: 'MedlemskapInfoPanel.Medlemskap' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} isLoading={!panelData && panelDataState !== RestApiState.SUCCESS}>
      <MedlemskapFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        isForeldrepengerFagsak
        readOnlyForStartdatoForForeldrepenger={!rettigheter.writeAccess.isEnabled
          || hasFetchError
          || standardPanelProps.behandling.behandlingPaaVent
          || harBehandlingReadOnlyStatus(standardPanelProps.behandling)}
        {...initData}
        {...panelData}
        {...standardPanelProps}
      />
    </FaktaPanelWrapper>
  );
};

export default MedlemskapsvilkaretFaktaInitPanel;
