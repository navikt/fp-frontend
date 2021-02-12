import React, {
  FunctionComponent, useEffect, useState,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningFaktaIndex from '@fpsak-frontend/fakta-beregning';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Beregningsgrunnlag,
} from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_FAKTA_FOR_ATFL_SN,
  aksjonspunktCodes.AVKLAR_AKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.BEREGNINGSGRUNNLAG },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harAksjonspunkt?: boolean;
  }) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * BeregningFaktaPanelDef
 */
const BeregningFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.BEREGNING,
    });
  }, []);

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    if (data && data.beregningsgrunnlag) {
      const erValgt = valgtFaktaSteg === faktaPanelCodes.BEREGNING
      || (standardProps.harApneAksjonspunkter && valgtFaktaSteg === 'default');
      registrerFaktaPanel({
        id: faktaPanelCodes.BEREGNING,
        tekst: getPackageIntl().formatMessage({ id: 'BeregningInfoPanel.Title' }),
        erAktiv: erValgt,
        harAksjonspunkt: standardProps.harApneAksjonspunkter,
      });
      setPanelValgt(erValgt);
    }
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (state !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <BeregningFaktaIndex
      behandling={behandling}
      erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      {...data}
      {...standardProps}
    />
  );
};

export default BeregningFaktaPanelDef;
