import React, {
  FunctionComponent, useCallback, useEffect,
} from 'react';

import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AvregningProsessIndex from '@fpsak-frontend/prosess-avregning';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Fagsak, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, MargMarkering, ProsessStegIkkeBehandletPanel } from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const forhandsvis = (data) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data);
  } else if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};

const getForhandsvisFptilbakeCallback = (
  forhandsvisTilbakekrevingMelding: (params?: any, keepData?: boolean) => Promise<Behandling>,
  fagsak: Fagsak,
  behandling: Behandling,
) => (
  mottaker: string, brevmalkode: string, fritekst: string, saksnummer: number,
) => {
  const data = {
    behandlingUuid: behandling.uuid,
    fagsakYtelseType: fagsak.sakstype,
    varseltekst: fritekst,
    mottaker,
    brevmalkode,
    saksnummer,
  };
  return forhandsvisTilbakekrevingMelding(data).then((response) => forhandsvis(response));
};

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_FEILUTBETALING,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.SIMULERING_RESULTAT },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.TILBAKEKREVINGVALG },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
}

type EndepunktDataVedVisning = {
  tilbakekrevingvalg?: TilbakekrevingValg;
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
  oppdaterBehandlingVersjon: (versjon: number) => void;
  fagsak: Fagsak;
  forhandsvisTilbakekrevingMelding: (params?: any, keepData?: boolean) => Promise<Behandling>;
}

const SimuleringProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  oppdaterBehandlingVersjon,
  fagsak,
  forhandsvisTilbakekrevingMelding,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.AVREGNING,
    });
  }, []);

  useEffect(() => {
    oppdaterBehandlingVersjon(behandling.versjon);
  }, [behandling.versjon]);

  const previewFptilbakeCallback = useCallback(getForhandsvisFptilbakeCallback(forhandsvisTilbakekrevingMelding, fagsak, behandling), [behandling.versjon]);

  const erPanelValgt = valgtProsessSteg === prosessStegCodes.AVREGNING;

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

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter);

  const skalVises = state === RestApiState.SUCCESS;

  useEffect(() => {
    if (skalVises) {
      registrerFaktaPanel({
        id: prosessStegCodes.AVREGNING,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' }),
        erAktiv: valgtProsessSteg === prosessStegCodes.AVREGNING,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status: data.simuleringResultat ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT,
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
        <AvregningProsessIndex
          behandling={behandling}
          fagsak={fagsak}
          previewFptilbakeCallback={previewFptilbakeCallback}
          simuleringResultat={data.simuleringResultat}
          {...dataEtterVisning}
          {...standardProps}
        />
      </FadingPanel>
    </MargMarkering>
  );
};

export default SimuleringProsessStegPanelDef;
