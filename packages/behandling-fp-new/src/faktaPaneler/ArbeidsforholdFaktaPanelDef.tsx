import React, {
  FunctionComponent, useEffect,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, InntektArbeidYtelse,
} from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
}

type EndepunktDataVedVisning = {
  inntektArbeidYtelse: InntektArbeidYtelse;
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
}

/**
 * ArbeidsforholdFaktaPanelDef
 *
 * Dette faktapanelet skal alltid vises
 */
const ArbeidsforholdFaktaPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtFaktaSteg,
  arbeidsgiverOpplysningerPerId,
  registrerFaktaPanel,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.ARBEIDSFORHOLD,
    });
  }, []);
  const erPanelValgt = valgtFaktaSteg === faktaPanelCodes.ARBEIDSFORHOLD;

  const { data } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.ARBEIDSFORHOLD,
      tekst: getPackageIntl().formatMessage({ id: 'ArbeidsforholdInfoPanel.Title' }),
      erAktiv: valgtFaktaSteg === faktaPanelCodes.ARBEIDSFORHOLD,
      harAksjonspunkt: standardProps.harApneAksjonspunkter,
    });
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter]);

  if (!erPanelValgt) {
    return null;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <ArbeidsforholdFaktaIndex
      behandling={behandling}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      {...data}
      {...dataEtterVisning}
      {...standardProps}
    />
  );
};

export default ArbeidsforholdFaktaPanelDef;
