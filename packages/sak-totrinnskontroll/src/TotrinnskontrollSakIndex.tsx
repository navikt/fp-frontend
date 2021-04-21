import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import { createIntl } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import klageBehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { ReduxWrapper } from '@fpsak-frontend/form';
import {
  BehandlingAppKontekst, Kodeverk, KodeverkMedNavn, KlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import { FatterVedtakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TotrinnskontrollBeslutterForm, { FormValues } from './components/TotrinnskontrollBeslutterForm';
import { AksjonspunktGodkjenningData } from './components/AksjonspunktGodkjenningFieldArray';
import TotrinnskontrollSaksbehandlerPanel from './components/TotrinnskontrollSaksbehandlerPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const sorterteSkjermlenkeCodesForTilbakekreving = [
  skjermlenkeCodes.FAKTA_OM_FEILUTBETALING,
  skjermlenkeCodes.FORELDELSE,
  skjermlenkeCodes.TILBAKEKREVING,
  skjermlenkeCodes.VEDTAK,
];

const getArsaker = (apData: AksjonspunktGodkjenningData): string[] => {
  const arsaker = [];
  if (apData.feilFakta) {
    arsaker.push(vurderPaNyttArsakType.FEIL_FAKTA);
  }
  if (apData.feilLov) {
    arsaker.push(vurderPaNyttArsakType.FEIL_LOV);
  }
  if (apData.feilRegel) {
    arsaker.push(vurderPaNyttArsakType.FEIL_REGEL);
  }
  if (apData.annet) {
    arsaker.push(vurderPaNyttArsakType.ANNET);
  }
  return arsaker;
};

interface OwnProps {
  behandling: BehandlingAppKontekst;
  totrinnskontrollSkjermlenkeContext: TotrinnskontrollSkjermlenkeContext[];
  location: Location;
  fagsakYtelseType: Kodeverk;
  behandlingKlageVurdering?: KlageVurdering;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  readOnly: boolean;
  onSubmit: (data: {
    fatterVedtakAksjonspunktDto: {
      '@type': aksjonspunktCodes.FATTER_VEDTAK | aksjonspunktCodesTilbakekreving.FATTER_VEDTAK;
    } & FatterVedtakAp;
    erAlleAksjonspunktGodkjent: boolean;
  }) => Promise<void>;
  forhandsvisVedtaksbrev: () => void;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
}

const TotrinnskontrollSakIndex: FunctionComponent<OwnProps> = ({
  behandling,
  totrinnskontrollSkjermlenkeContext,
  location,
  fagsakYtelseType,
  readOnly,
  onSubmit,
  forhandsvisVedtaksbrev,
  behandlingKlageVurdering,
  alleKodeverk,
  createLocationForSkjermlenke,
}) => {
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandling.type.kode || BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type.kode;

  const submitHandler = useCallback((values: FormValues) => {
    const aksjonspunktGodkjenningDtos = values.aksjonspunktGodkjenning
      .map((apData) => ({
        aksjonspunktKode: apData.aksjonspunktKode,
        godkjent: apData.totrinnskontrollGodkjent,
        begrunnelse: apData.besluttersBegrunnelse,
        arsaker: getArsaker(apData),
      }));

    const kode = erTilbakekreving ? aksjonspunktCodesTilbakekreving.FATTER_VEDTAK : aksjonspunktCodes.FATTER_VEDTAK;
    const fatterVedtakAksjonspunktDto = {
      '@type': kode,
      begrunnelse: null,
      aksjonspunktGodkjenningDtos,
    };

    return onSubmit({
      // @ts-ignore Fiks denne!
      fatterVedtakAksjonspunktDto,
      erAlleAksjonspunktGodkjent: values.aksjonspunktGodkjenning.every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true),
    });
  }, [erTilbakekreving]);

  const erBehandlingEtterKlage = useMemo(() => (behandling ? behandling.behandlingÅrsaker
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some((bt: Kodeverk) => bt.kode === klageBehandlingArsakType.ETTER_KLAGE || bt.kode === klageBehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === klageBehandlingArsakType.KLAGE_M_INNTK) : false),
  [behandling]);

  const sorterteTotrinnskontrollSkjermlenkeContext = useMemo(() => (erTilbakekreving
    ? sorterteSkjermlenkeCodesForTilbakekreving
      .map((s) => totrinnskontrollSkjermlenkeContext.find((el) => el.skjermlenkeType === s.kode))
      .filter((s) => s)
    : totrinnskontrollSkjermlenkeContext),
  [erTilbakekreving, totrinnskontrollSkjermlenkeContext]);

  const lagLenke = useCallback((skjermlenkeCode: string): Location => createLocationForSkjermlenke(location, skjermlenkeCode), [location]);

  const erStatusFatterVedtak = behandling.status.kode === BehandlingStatus.FATTER_VEDTAK;
  const skjemalenkeTyper = alleKodeverk[kodeverkTyper.SKJERMLENKE_TYPE];
  const arbeidsforholdHandlingTyper = alleKodeverk[kodeverkTyper.ARBEIDSFORHOLD_HANDLING_TYPE];
  const vurderArsaker = alleKodeverk[kodeverkTyper.VURDER_AARSAK];
  const faktaOmBeregningTilfeller = alleKodeverk[kodeverkTyper.FAKTA_OM_BEREGNING_TILFELLE];

  return (
    <RawIntlProvider value={intl}>
      {erStatusFatterVedtak && (
        <ReduxWrapper formName="TotrinnskontrollSakIndex">
          <TotrinnskontrollBeslutterForm
            behandling={behandling}
            totrinnskontrollSkjermlenkeContext={sorterteTotrinnskontrollSkjermlenkeContext}
            readOnly={readOnly}
            onSubmit={submitHandler}
            forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
            erForeldrepengerFagsak={fagsakYtelseType.kode === FagsakYtelseType.FORELDREPENGER}
            behandlingKlageVurdering={behandlingKlageVurdering}
            arbeidsforholdHandlingTyper={arbeidsforholdHandlingTyper}
            skjemalenkeTyper={skjemalenkeTyper}
            erBehandlingEtterKlage={erBehandlingEtterKlage}
            faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
            erTilbakekreving={erTilbakekreving}
            lagLenke={lagLenke}
          />
        </ReduxWrapper>
      )}
      {!erStatusFatterVedtak && (
        <TotrinnskontrollSaksbehandlerPanel
          totrinnskontrollSkjermlenkeContext={sorterteTotrinnskontrollSkjermlenkeContext}
          erForeldrepengerFagsak={fagsakYtelseType.kode === FagsakYtelseType.FORELDREPENGER}
          behandlingKlageVurdering={behandlingKlageVurdering}
          behandlingStatus={behandling.status}
          erTilbakekreving={erTilbakekreving}
          arbeidsforholdHandlingTyper={arbeidsforholdHandlingTyper}
          skjemalenkeTyper={skjemalenkeTyper}
          lagLenke={lagLenke}
          vurderArsaker={vurderArsaker}
          faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
        />
      )}
    </RawIntlProvider>
  );
};

export default TotrinnskontrollSakIndex;
