import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Location } from 'history';
import { createIntl } from '@navikt/ft-utils';

import {
  KodeverkType,
  behandlingStatus as BehandlingStatus,
  AksjonspunktCode,
  AksjonspunktCodeTilbakekreving,
  fagsakYtelseType as FagsakYtelseType,
  behandlingType as BehandlingType,
  behandlingArsakType as BehandlingÅrsakType,
  vurderPaNyttArsakType,
} from '@navikt/fp-kodeverk';
import { skjermlenkeCodes } from '@navikt/fp-konstanter';
import { BehandlingAppKontekst, AlleKodeverk, AlleKodeverkTilbakekreving, KodeverkMedNavn } from '@navikt/fp-types';
import { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

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

const TOMT_KODEVERK = [] as KodeverkMedNavn[];

const getArsaker = (apData: AksjonspunktGodkjenningData): string[] => {
  const arsaker = [];
  if (apData.feilFakta) {
    arsaker.push(vurderPaNyttArsakType.FEIL_FAKTA);
  }
  if (apData.feilLov) {
    arsaker.push(vurderPaNyttArsakType.FEIL_LOV);
  }
  if (apData.feilSkjønn) {
    arsaker.push(vurderPaNyttArsakType.SKJØNN);
  }
  if (apData.feilUtredning) {
    arsaker.push(vurderPaNyttArsakType.UTREDNING);
  }
  if (apData.annet) {
    arsaker.push(vurderPaNyttArsakType.ANNET);
  }
  return arsaker;
};

const finnArbeidsforholdHandlingTyper = (alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving) =>
  KodeverkType.ARBEIDSFORHOLD_HANDLING_TYPE in alleKodeverk
    ? (alleKodeverk as AlleKodeverk)[KodeverkType.ARBEIDSFORHOLD_HANDLING_TYPE]
    : TOMT_KODEVERK;
const finnFaktaOmBeregningTilfeller = (alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving) =>
  KodeverkType.FAKTA_OM_BEREGNING_TILFELLE in alleKodeverk
    ? (alleKodeverk as AlleKodeverk)[KodeverkType.FAKTA_OM_BEREGNING_TILFELLE]
    : TOMT_KODEVERK;

interface OwnProps {
  behandling: BehandlingAppKontekst;
  location: Location;
  fagsakYtelseType: string;
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  readOnly: boolean;
  onSubmit: (data: {
    fatterVedtakAksjonspunktDto: {
      '@type': AksjonspunktCode.FATTER_VEDTAK | AksjonspunktCodeTilbakekreving.FATTER_VEDTAK;
    } & FatterVedtakAp;
    erAlleAksjonspunktGodkjent: boolean;
  }) => Promise<void>;
  forhandsvisVedtaksbrev: () => void;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  beslutterFormData?: any;
  setBeslutterForData: (data?: any) => void;
}

const TotrinnskontrollSakIndex: FunctionComponent<OwnProps> = ({
  behandling,
  location,
  fagsakYtelseType,
  readOnly,
  onSubmit,
  forhandsvisVedtaksbrev,
  alleKodeverk,
  createLocationForSkjermlenke,
  beslutterFormData,
  setBeslutterForData,
}) => {
  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandling.type || BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type;

  const submitHandler = useCallback(
    (values: FormValues) => {
      const aksjonspunktGodkjenningDtos = values.aksjonspunktGodkjenning.map(apData => ({
        aksjonspunktKode: apData.aksjonspunktKode,
        godkjent: apData.totrinnskontrollGodkjent,
        begrunnelse: apData.besluttersBegrunnelse,
        arsaker: getArsaker(apData),
      }));

      const kode = erTilbakekreving ? AksjonspunktCodeTilbakekreving.FATTER_VEDTAK : AksjonspunktCode.FATTER_VEDTAK;
      const fatterVedtakAksjonspunktDto = {
        '@type': kode,
        begrunnelse: null,
        aksjonspunktGodkjenningDtos,
      };

      return onSubmit({
        // @ts-ignore Fiks denne!
        fatterVedtakAksjonspunktDto,
        erAlleAksjonspunktGodkjent: values.aksjonspunktGodkjenning.every(ap => ap.totrinnskontrollGodkjent),
      });
    },
    [erTilbakekreving],
  );

  const erBehandlingEtterKlage = useMemo(
    () =>
      behandling
        ? behandling.behandlingÅrsaker
            .map(({ behandlingArsakType }) => behandlingArsakType)
            .some(
              bt =>
                bt === BehandlingÅrsakType.ETTER_KLAGE ||
                bt === BehandlingÅrsakType.KLAGE_U_INNTK ||
                bt === BehandlingÅrsakType.KLAGE_M_INNTK,
            )
        : false,
    [behandling],
  );

  const sorterteTotrinnskontrollSkjermlenkeContext = useMemo(
    () =>
      erTilbakekreving
        ? sorterteSkjermlenkeCodesForTilbakekreving.flatMap(s => {
            const context = behandling.totrinnskontrollÅrsaker.find(el => el.skjermlenkeType === s.kode);
            return context ? [context] : [];
          })
        : behandling.totrinnskontrollÅrsaker,
    [erTilbakekreving, behandling.totrinnskontrollÅrsaker],
  );

  const lagLenke = useCallback(
    (skjermlenkeCode: string): Location | undefined => createLocationForSkjermlenke(location, skjermlenkeCode),
    [location],
  );

  const erStatusFatterVedtak = behandling.status === BehandlingStatus.FATTER_VEDTAK;
  const skjemalenkeTyper = alleKodeverk[KodeverkType.SKJERMLENKE_TYPE];
  const vurderArsaker = alleKodeverk[KodeverkType.VURDER_AARSAK];
  const arbeidsforholdHandlingTyper = finnArbeidsforholdHandlingTyper(alleKodeverk);
  const faktaOmBeregningTilfeller = finnFaktaOmBeregningTilfeller(alleKodeverk);

  return (
    <RawIntlProvider value={intl}>
      {erStatusFatterVedtak && (
        <TotrinnskontrollBeslutterForm
          behandling={behandling}
          totrinnskontrollSkjermlenkeContext={sorterteTotrinnskontrollSkjermlenkeContext}
          readOnly={readOnly}
          onSubmit={submitHandler}
          forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
          erForeldrepengerFagsak={fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
          arbeidsforholdHandlingTyper={arbeidsforholdHandlingTyper}
          skjemalenkeTyper={skjemalenkeTyper}
          erBehandlingEtterKlage={erBehandlingEtterKlage}
          faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
          erTilbakekreving={erTilbakekreving}
          lagLenke={lagLenke}
          beslutterFormData={beslutterFormData}
          setBeslutterForData={setBeslutterForData}
        />
      )}
      {!erStatusFatterVedtak && (
        <TotrinnskontrollSaksbehandlerPanel
          behandling={behandling}
          totrinnskontrollSkjermlenkeContext={sorterteTotrinnskontrollSkjermlenkeContext}
          erForeldrepengerFagsak={fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
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
