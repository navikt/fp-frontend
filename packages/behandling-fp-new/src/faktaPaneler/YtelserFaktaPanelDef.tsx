import React, {
  FunctionComponent,
} from 'react';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';
import { useStandardFaktaProps, faktaPanelHooks, FaktaPanelMenyData } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../data/fpBehandlingApi';

const endepunkterInit = [FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktInitData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}

/**
 * YtelserFaktaPanelDef
 */
const YtelserFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);

  const standardPanelProps = useStandardFaktaProps();

  const skalVises = initData?.inntektArbeidYtelse?.relatertTilgrensendeYtelserForSoker
    && initData.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0;
  const erAktiv = valgtFaktaSteg === faktaPanelCodes.YTELSER
      || (standardPanelProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');

  const erPanelValgt = faktaPanelHooks.useMenyRegistrerer(
    registrerFaktaPanel,
    faktaPanelCodes.YTELSER,
    getPackageIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' }),
    skalVises,
    erAktiv,
    standardPanelProps.harApneAksjonspunkter,
  );

  if (!erPanelValgt) {
    return null;
  }
  if (initState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }
  return <YtelserFaktaIndex {...initData} {...standardPanelProps} />;
};

export default YtelserFaktaPanelDef;
