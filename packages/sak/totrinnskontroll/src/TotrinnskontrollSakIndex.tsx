import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { type Location } from 'history';

import {
  AksjonspunktKode,
  AksjonspunktKodeTilbakekreving,
  BehandlingArsakTypeEnum,
  BehandlingStatusEnum,
  type FagsakYtelseType,
  SkjermlenkeType,
  VurderÅrsak,
} from '@navikt/fp-kodeverk';
import { skjermlenkeCodesFpTilbake as skjermlenkeCodes } from '@navikt/fp-konstanter';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, BehandlingAppKontekst } from '@navikt/fp-types';
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

const getArsaker = (apData: AksjonspunktGodkjenningData): string[] => {
  const arsaker = [];
  if (apData.feilFakta) {
    arsaker.push(VurderÅrsak.FEIL_FAKTA);
  }
  if (apData.feilLov) {
    arsaker.push(VurderÅrsak.FEIL_LOV);
  }
  if (apData.feilSkjønn) {
    arsaker.push(VurderÅrsak.SKJØNN);
  }
  if (apData.feilUtredning) {
    arsaker.push(VurderÅrsak.UTREDNING);
  }
  if (apData.feilSaksflyt) {
    arsaker.push(VurderÅrsak.SAKSFLYT);
  }
  if (apData.feilBegrunnelse) {
    arsaker.push(VurderÅrsak.BEGRUNNELSE);
  }
  return arsaker;
};
const finnFaktaOmBeregningTilfeller = (alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving) =>
  'FaktaOmBeregningTilfelle' in alleKodeverk ? alleKodeverk['FaktaOmBeregningTilfelle'] : [];

export type ApData = {
  fatterVedtakAksjonspunktDto: {
    '@type': AksjonspunktKode.FATTER_VEDTAK | AksjonspunktKodeTilbakekreving.FATTER_VEDTAK;
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

    const kode = erTilbakekreving
      ? (AksjonspunktKodeTilbakekreving.FATTER_VEDTAK as const)
      : (AksjonspunktKode.FATTER_VEDTAK as const);
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
    .some(
      bt =>
        bt === BehandlingArsakTypeEnum.ETTER_KLAGE ||
        bt === BehandlingArsakTypeEnum.KLAGE_U_INNTK ||
        bt === BehandlingArsakTypeEnum.KLAGE_M_INNTK,
    );

  const sorterteTotrinnskontrollSkjermlenkeContext = erTilbakekreving
    ? sorterteSkjermlenkeCodesForTilbakekreving.flatMap(s => {
        const context = behandling.totrinnskontrollÅrsaker.find(el => el.skjermlenkeType === s?.kode);
        return context ? [context] : [];
      })
    : behandling.totrinnskontrollÅrsaker;

  const lagLenke = (skjermlenkeCode: SkjermlenkeType): Location | undefined =>
    createLocationForSkjermlenke(location, skjermlenkeCode);

  const erStatusFatterVedtak = behandling.status === BehandlingStatusEnum.FATTER_VEDTAK;
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
