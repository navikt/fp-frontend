import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import klageBehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  BehandlingAppKontekst, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import TotrinnskontrollPanel from './components/TotrinnskontrollPanel';
import { TotrinnskontrollAksjonspunktMedFaktaValg } from './TotrinnContextTsType';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const getArsaker = (totrinnskontrollAksjonspunkt: TotrinnskontrollAksjonspunktMedFaktaValg) => ([{
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
  behandling: BehandlingAppKontekst;
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  location: Location;
  fagsakYtelseType: Kodeverk;
  behandlingKlageVurdering?: TotrinnsKlageVurdering;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  readOnly: boolean;
  onSubmit: (...args: any[]) => any;
  forhandsvisVedtaksbrev: () => void;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
}

type Values = {
  approvals: {
    aksjonspunkter: TotrinnskontrollAksjonspunktMedFaktaValg[];
  }[];
  erAlleAksjonspunktGodkjent: boolean
};

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
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandling?.type.kode || BehandlingType.TILBAKEKREVING_REVURDERING === behandling?.type.kode;

  const submitHandler = useCallback((values: Values) => {
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
  }, [erTilbakekreving]);

  const erBehandlingEtterKlage = useMemo(() => (behandling ? behandling.behandlingArsaker
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some((bt: Kodeverk) => bt.kode === klageBehandlingArsakType.ETTER_KLAGE || bt.kode === klageBehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === klageBehandlingArsakType.KLAGE_M_INNTK) : false),
  [behandling]);

  return (
    <RawIntlProvider value={intl}>
      <TotrinnskontrollPanel
        behandling={behandling}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        location={location}
        readOnly={readOnly}
        onSubmit={submitHandler}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        isForeldrepengerFagsak={fagsakYtelseType.kode === FagsakYtelseType.FORELDREPENGER}
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
