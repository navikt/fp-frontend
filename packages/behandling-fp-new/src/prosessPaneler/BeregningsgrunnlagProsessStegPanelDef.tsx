import React, {
  FunctionComponent, useEffect,
} from 'react';

import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsgrunnlagProsessIndex from '@fpsak-frontend/prosess-beregningsgrunnlag';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Beregningsgrunnlag, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, MargMarkering, ProsessStegIkkeBehandletPanel } from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  aksjonspunktCodes.VURDER_DEKNINGSGRAD,
];

const vilkarKoder = [vilkarType.BEREGNINGSGRUNNLAGVILKARET];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.VILKAR },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.BEREGNINGSGRUNNLAG },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

type EndepunktDataVedVisning = {
  beregningsgrunnlag?: Beregningsgrunnlag;
}

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const BeregningsgrunnlagProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  arbeidsgiverOpplysningerPerId,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.BEREGNINGSGRUNNLAG,
    });
  }, []);

  const erPanelValgt = valgtProsessSteg === prosessStegCodes.BEREGNINGSGRUNNLAG;

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
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
  const filtrerteVilkar = data ? data.vilkar.filter((v) => vilkarKoder.includes(v.vilkarType.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter, filtrerteVilkar);

  const skalVises = state === RestApiState.SUCCESS;

  useEffect(() => {
    if (skalVises) {
      registrerFaktaPanel({
        id: prosessStegCodes.BEREGNINGSGRUNNLAG,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' }),
        erAktiv: valgtProsessSteg === prosessStegCodes.BEREGNINGSGRUNNLAG,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: standardProps.status,
      });
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (standardProps.status === vilkarUtfallType.IKKE_VURDERT) {
    // FIXME Lag ein wrapper med style rundt denne. Samme som MargMarkering?
    return <ProsessStegIkkeBehandletPanel />;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <MargMarkering
      behandlingStatus={behandling.status}
      aksjonspunkter={filtrerteAksjonspunkter}
      isReadOnly={standardProps.isReadOnly}
      visAksjonspunktMarkering
    >
      <FadingPanel>
        <BeregningsgrunnlagProsessIndex
          behandling={behandling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          {...dataEtterVisning}
          {...standardProps}
        />
      </FadingPanel>
    </MargMarkering>
  );
};

export default BeregningsgrunnlagProsessStegPanelDef;
