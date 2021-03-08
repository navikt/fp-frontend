import React, {
  FunctionComponent,
} from 'react';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';
import {
  useStandardFaktaPanelProps, FaktaPanelInitProps, FaktaPanelWrapper, useFaktaMenyRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

/**
 * YtelserFaktaInitPanel
 */
const YtelserFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps();

  const skalVises = initData?.inntektArbeidYtelse?.relatertTilgrensendeYtelserForSoker
    && initData.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0;

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.YTELSER,
    getPackageIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={initState}>
      <YtelserFaktaIndex {...initData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default YtelserFaktaInitPanel;
