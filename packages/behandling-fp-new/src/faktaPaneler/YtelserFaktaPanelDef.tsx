import React, {
  FunctionComponent, useEffect,
} from 'react';

import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { Behandling, InntektArbeidYtelse } from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const endepunkter = [
  { key: FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE },
];

type EndepunktData = {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandling: Behandling;
  registrerFaktaPanel: (id: string) => void;
  leggFaktaPanelTilMeny: (data: {
    id: string;
    tekst: string;
    erAktiv: boolean;
    harAksjonspunkt: boolean;
  }) => void;
}

/**
 * YtelserFaktaPanelDef
 */
const YtelserFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  leggFaktaPanelTilMeny,
  registrerFaktaPanel,
}) => {
  useEffect(() => {
    registrerFaktaPanel(faktaPanelCodes.YTELSER);
  }, []);
  const erPanelValgt = valgtFaktaSteg === faktaPanelCodes.YTELSER;

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const standardProps = useStandardFaktaProps();

  useEffect(() => {
    if (data && data.inntektArbeidYtelse && data.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker
      && data.inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker.length > 0) {
      leggFaktaPanelTilMeny({
        id: faktaPanelCodes.YTELSER,
        tekst: getPackageIntl().formatMessage({ id: 'YtelserFaktaIndex.Ytelser' }),
        erAktiv: valgtFaktaSteg === faktaPanelCodes.YTELSER,
        harAksjonspunkt: standardProps.harApneAksjonspunkter,
      });
    }
  }, [valgtFaktaSteg, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return <YtelserFaktaIndex {...data} {...standardProps} />;
};

export default YtelserFaktaPanelDef;
