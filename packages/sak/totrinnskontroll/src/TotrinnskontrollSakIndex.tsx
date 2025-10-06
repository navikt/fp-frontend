import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { type Location } from 'history';

import { skjermlenkeCodesFpTilbake as skjermlenkeCodes } from '@navikt/fp-konstanter';
import type {
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
  BehandlingAppKontekst,
  FagsakYtelseType,
  SkjermlenkeType,
  VurderÅrsak,
} from '@navikt/fp-types';
import type { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import { type AksjonspunktGodkjenningData } from './components/AksjonspunktGodkjenningFieldArray';
import { type FormValues, TotrinnskontrollBeslutterForm } from './components/TotrinnskontrollBeslutterForm';
import { TotrinnskontrollSaksbehandlerPanel } from './components/TotrinnskontrollSaksbehandlerPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const sorterteSkjermlenkeCodesForTilbakekreving = [
  skjermlenkeCodes['FAKTA_OM_FEILUTBETALING'],
  skjermlenkeCodes['FORELDELSE'],
  skjermlenkeCodes['TILBAKEKREVING'],
  skjermlenkeCodes['VEDTAK'],
];

const getArsaker = (apData: AksjonspunktGodkjenningData): VurderÅrsak[] => {
  const arsaker = new Array<VurderÅrsak>();
  if (apData.feilFakta) {
    arsaker.push('FEIL_FAKTA');
  }
  if (apData.feilLov) {
    arsaker.push('FEIL_LOV');
  }
  if (apData.feilSkjønn) {
    arsaker.push('SKJØNN');
  }
  if (apData.feilUtredning) {
    arsaker.push('UTREDNING');
  }
  if (apData.feilSaksflyt) {
    arsaker.push('SAKSFLYT');
  }
  if (apData.feilBegrunnelse) {
    arsaker.push('BEGRUNNELSE');
  }
  return arsaker;
};
const finnFaktaOmBeregningTilfeller = (alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving) =>
  'FaktaOmBeregningTilfelle' in alleKodeverk ? alleKodeverk['FaktaOmBeregningTilfelle'] : [];

export type ApData = {
  fatterVedtakAksjonspunktDto: {
    '@type': '5016' | '5005';
  } & FatterVedtakAp;
  erAlleAksjonspunktGodkjent: boolean;
};

interface Props {
  behandling: BehandlingAppKontekst;
  location: Location;
  fagsakYtelseType: FagsakYtelseType;
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  readOnly: boolean;
  onSubmit: (data: ApData) => void;
  forhandsvisVedtaksbrev: () => void;
  createLocationForSkjermlenke: (
    behandlingLocation: Location,
    skjermlenkeCode: SkjermlenkeType,
  ) => Location | undefined;
  beslutterFormData?: FormValues;
  setBeslutterFormData: (data?: FormValues) => void;
}

export const TotrinnskontrollSakIndex = ({
  behandling,
  location,
  fagsakYtelseType,
  readOnly,
  onSubmit,
  forhandsvisVedtaksbrev,
  alleKodeverk,
  createLocationForSkjermlenke,
  beslutterFormData,
  setBeslutterFormData,
}: Props) => {
  const erTilbakekreving = 'BT-007' === behandling.type || 'BT-009' === behandling.type;

  const submitHandler = (values: FormValues) => {
    const aksjonspunktGodkjenningDtos = values.aksjonspunktGodkjenning.map(apData => ({
      aksjonspunktKode: apData.aksjonspunktKode,
      godkjent: !!apData.totrinnskontrollGodkjent,
      begrunnelse: apData.besluttersBegrunnelse,
      arsaker: getArsaker(apData),
    }));

    const kode = erTilbakekreving ? ('5005' as const) : ('5016' as const);
    const fatterVedtakAksjonspunktDto = {
      '@type': kode,
      kode,
      begrunnelse: undefined,
      aksjonspunktGodkjenningDtos,
    };

    return onSubmit({
      fatterVedtakAksjonspunktDto,
      erAlleAksjonspunktGodkjent: values.aksjonspunktGodkjenning.every(ap => ap.totrinnskontrollGodkjent),
    });
  };

  const erBehandlingEtterKlage = behandling.behandlingÅrsaker
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some(bt => bt === 'ETTER_KLAGE' || bt === 'RE-KLAG-U-INNTK' || bt === 'RE-KLAG-M-INNTK');

  const sorterteTotrinnskontrollSkjermlenkeContext = erTilbakekreving
    ? sorterteSkjermlenkeCodesForTilbakekreving.flatMap(s => {
        const context = behandling.totrinnskontrollÅrsaker.find(el => el.skjermlenkeType === s?.kode);
        return context ? [context] : [];
      })
    : behandling.totrinnskontrollÅrsaker;

  const lagLenke = (skjermlenkeCode: SkjermlenkeType): Location | undefined =>
    createLocationForSkjermlenke(location, skjermlenkeCode);

  const erStatusFatterVedtak = behandling.status === 'FVED';
  const skjemalenkeTyper = alleKodeverk['SkjermlenkeType'];
  const vurderArsaker = alleKodeverk['VurderÅrsak'];
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
          erForeldrepengerFagsak={fagsakYtelseType === 'FP'}
          skjemalenkeTyper={skjemalenkeTyper}
          erBehandlingEtterKlage={erBehandlingEtterKlage}
          faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
          erTilbakekreving={erTilbakekreving}
          lagLenke={lagLenke}
          beslutterFormData={beslutterFormData}
          setBeslutterFormData={setBeslutterFormData}
        />
      )}
      {!erStatusFatterVedtak && (
        <TotrinnskontrollSaksbehandlerPanel
          behandling={behandling}
          totrinnskontrollSkjermlenkeContext={sorterteTotrinnskontrollSkjermlenkeContext}
          erForeldrepengerFagsak={fagsakYtelseType === 'FP'}
          erTilbakekreving={erTilbakekreving}
          skjemalenkeTyper={skjemalenkeTyper}
          lagLenke={lagLenke}
          vurderArsaker={vurderArsaker}
          faktaOmBeregningTilfeller={faktaOmBeregningTilfeller}
        />
      )}
    </RawIntlProvider>
  );
};
