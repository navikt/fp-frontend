import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Location } from 'history';

import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  Behandling, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import { decodeHtmlEntity } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import TotrinnskontrollBeslutterForm from './TotrinnskontrollBeslutterForm';
import TotrinnskontrollSaksbehandlerForm from './TotrinnskontrollSaksbehandlerForm';
import TotrinnContext from '../TotrinnContextTsType';

const sorterteSkjermlenkeCodesForTilbakekreving = [
  skjermlenkeCodes.FAKTA_OM_FEILUTBETALING,
  skjermlenkeCodes.FORELDELSE,
  skjermlenkeCodes.TILBAKEKREVING,
  skjermlenkeCodes.VEDTAK,
];

const sorterTilbakekrevingContext = (approvals: TotrinnContext[]) => sorterteSkjermlenkeCodesForTilbakekreving
  .map((s) => approvals.find((el) => el.contextCode === s.kode))
  .filter((s) => s);

const håndterSpeiselleTegn = (aksjonspunkter: TotrinnskontrollAksjonspunkt[]): TotrinnskontrollAksjonspunkt[] => aksjonspunkter.map((aksjonspunkt) => ({
  ...aksjonspunkt,
  besluttersBegrunnelse: decodeHtmlEntity(aksjonspunkt.besluttersBegrunnelse),
}));

export const mapPropsToContext = (
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location,
  location: Location,
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[],
  erTilbakekreving?: boolean,
): TotrinnContext[] => {
  const skjemalenkeTyper = alleKodeverk[kodeverkTyper.SKJERMLENKE_TYPE];
  const totrinnsContext = totrinnskontrollSkjermlenkeContext.map((context) => {
    const skjermlenkeTypeKodeverk = skjemalenkeTyper.find((skjemalenkeType) => skjemalenkeType.kode === context.skjermlenkeType);
    return {
      contextCode: context.skjermlenkeType,
      skjermlenke: createLocationForSkjermlenke(location, context.skjermlenkeType),
      skjermlenkeNavn: skjermlenkeTypeKodeverk.navn,
      aksjonspunkter: håndterSpeiselleTegn(context.totrinnskontrollAksjonspunkter),
    };
  });
  if (erTilbakekreving && totrinnsContext) {
    return sorterTilbakekrevingContext(totrinnsContext);
  }
  return totrinnsContext || [];
};

interface OwnProps {
  behandling: Behandling;
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  readOnly: boolean;
  onSubmit: (...args: any[]) => any;
  forhandsvisVedtaksbrev: () => void;
  erForeldrepengerFagsak: boolean;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingsresultat?: Behandling['behandlingsresultat'];
  erBehandlingEtterKlage: boolean;
  lagLenke: (skjermlenkeCode: string) => Location;
  erTilbakekreving: boolean;
}

/**
 * TotrinnskontrollPanel
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
const TotrinnskontrollPanel: FunctionComponent<OwnProps> = ({
  behandling,
  readOnly,
  onSubmit,
  forhandsvisVedtaksbrev,
  behandlingKlageVurdering,
  erForeldrepengerFagsak,
  alleKodeverk,
  erBehandlingEtterKlage,
  erTilbakekreving,
  totrinnskontrollSkjermlenkeContext,
  lagLenke,
}) => {
  if (!behandling.toTrinnsBehandling || !totrinnskontrollSkjermlenkeContext || totrinnskontrollSkjermlenkeContext.length === 0) {
    return null;
  }

  const isReadOnly = behandling.status.kode !== BehandlingStatus.FATTER_VEDTAK || readOnly;

  return (
    <div>
      {!isReadOnly && (
        <>
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage key={1} id="HelpText.ToTrinnsKontroll" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <TotrinnskontrollBeslutterForm
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        behandlingsresultat={behandling.behandlingsresultat}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        onSubmit={onSubmit}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        readOnly={isReadOnly}
        erForeldrepengerFagsak={erForeldrepengerFagsak}
        behandlingKlageVurdering={behandlingKlageVurdering}
        behandlingStatus={behandling.status}
        alleKodeverk={alleKodeverk}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        erTilbakekreving={erTilbakekreving}
        lagLenke={lagLenke}
      />
    </div>
  );
};
export default TotrinnskontrollPanel;
