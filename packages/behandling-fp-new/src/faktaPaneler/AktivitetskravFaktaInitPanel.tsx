import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AktivitetskravFaktaIndex from '@fpsak-frontend/fakta-aktivitetskrav';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaPanelProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.KONTROLLER_AKTIVITETSKRAV];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  uttakKontrollerAktivitetskrav: UttakKontrollerAktivitetskrav[];
}

/**
 * AktivitetskravFaktaInitPanel
 */
const AktivitetskravFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = !!initData?.uttakKontrollerAktivitetskrav;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.AKTIVITETSKRAV,
    getPackageIntl().formatMessage({ id: 'AktivitetskravInfoPanel.FaktaAktivitetskrav' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} isLoading={!initData && initState !== RestApiState.SUCCESS}>
      <AktivitetskravFaktaIndex {...initData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default AktivitetskravFaktaInitPanel;
