import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Behandling, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollAksjonspunkt, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import ApprovalPanel from './components/ApprovalPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const getArsaker = (totrinnskontrollAksjonspunkt: TotrinnskontrollAksjonspunkt) => ([{
  code: vurderPaNyttArsakType.FEIL_FAKTA,
  isSet: totrinnskontrollAksjonspunkt.feilFakta,
}, {
  code: vurderPaNyttArsakType.FEIL_LOV,
  isSet: totrinnskontrollAksjonspunkt.feilLov,
}, {
  code: vurderPaNyttArsakType.FEIL_REGEL,
  isSet: totrinnskontrollAksjonspunkt.feilRegel,
}, {
  code: vurderPaNyttArsakType.ANNET,
  isSet: totrinnskontrollAksjonspunkt.annet,
}].filter((arsak) => arsak.isSet)
  .map((arsak) => arsak.code)
);

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadOnlySkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  behandlingStatus: Kodeverk;
  toTrinnsBehandling: boolean;
  location: Location;
  skjemalenkeTyper: KodeverkMedNavn[];
  isForeldrepengerFagsak: boolean;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  erBehandlingEtterKlage: boolean;
  readOnly: boolean;
  onSubmit: (...args: any[]) => any;
  forhandsvisVedtaksbrev: () => void;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
  erTilbakekreving?: boolean;
}

type Values = {
  approvals: {
    aksjonspunkter: TotrinnskontrollAksjonspunkt[];
  }[];
  erAlleAksjonspunktGodkjent: boolean
};

const TotrinnskontrollSakIndex: FunctionComponent<OwnProps> = ({
  behandlingId,
  behandlingVersjon,
  behandlingsresultat,
  totrinnskontrollSkjermlenkeContext,
  totrinnskontrollReadOnlySkjermlenkeContext,
  behandlingStatus,
  location,
  readOnly,
  onSubmit,
  forhandsvisVedtaksbrev,
  toTrinnsBehandling,
  skjemalenkeTyper,
  isForeldrepengerFagsak,
  behandlingKlageVurdering,
  alleKodeverk,
  erBehandlingEtterKlage,
  erTilbakekreving = false,
  createLocationForSkjermlenke,
}) => {
  const submitHandler = (values: Values) => {
    const aksjonspunkter = values.approvals
      .map((context) => context.aksjonspunkter)
      .reduce((a, b) => a.concat(b));

    const aksjonspunktGodkjenningDtos = aksjonspunkter
      .map((toTrinnsAksjonspunkt) => ({
        aksjonspunktKode: toTrinnsAksjonspunkt.aksjonspunktKode,
        godkjent: toTrinnsAksjonspunkt.totrinnskontrollGodkjent,
        begrunnelse: toTrinnsAksjonspunkt.besluttersBegrunnelse,
        arsaker: getArsaker(toTrinnsAksjonspunkt),
      }));

    // TODO (TOR) Fjern hardkodinga av 5005
    const fatterVedtakAksjonspunktDto = {
      '@type': erTilbakekreving ? '5005' : aksjonspunktCodes.FATTER_VEDTAK,
      begrunnelse: null,
      aksjonspunktGodkjenningDtos,
    };

    return onSubmit({
      fatterVedtakAksjonspunktDto,
      erAlleAksjonspunktGodkjent: aksjonspunkter.every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true),
    });
  };

  return (
    <RawIntlProvider value={intl}>
      <ApprovalPanel
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        behandlingsresultat={behandlingsresultat}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        totrinnskontrollReadOnlySkjermlenkeContext={totrinnskontrollReadOnlySkjermlenkeContext}
        behandlingStatus={behandlingStatus}
        location={location}
        readOnly={readOnly}
        onSubmit={submitHandler}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        toTrinnsBehandling={toTrinnsBehandling}
        skjemalenkeTyper={skjemalenkeTyper}
        isForeldrepengerFagsak={isForeldrepengerFagsak}
        behandlingKlageVurdering={behandlingKlageVurdering}
        alleKodeverk={alleKodeverk}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        erTilbakekreving={erTilbakekreving}
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
    </RawIntlProvider>
  );
};

export default TotrinnskontrollSakIndex;
