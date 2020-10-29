import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import klageBehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import {
  BehandlingAppKontekst, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';

import TotrinnskontrollPanel from './components/TotrinnskontrollPanel';
import { AksjonspunktGodkjenningData, FormValues } from './components/TotrinnskontrollBeslutterForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const getArsaker = (apData: AksjonspunktGodkjenningData) => {
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

  const submitHandler = useCallback((values: FormValues) => {
    const aksjonspunktGodkjenningDtos = values.aksjonspunktGodkjenning
      .map((apData) => ({
        aksjonspunktKode: apData.aksjonspunktKode,
        godkjent: apData.totrinnskontrollGodkjent,
        begrunnelse: apData.besluttersBegrunnelse,
        arsaker: getArsaker(apData),
      }));

    const fatterVedtakAksjonspunktDto = {
      '@type': erTilbakekreving ? aksjonspunktCodesTilbakekreving.FATTER_VEDTAK : aksjonspunktCodes.FATTER_VEDTAK,
      begrunnelse: null,
      aksjonspunktGodkjenningDtos,
    };

    return onSubmit({
      fatterVedtakAksjonspunktDto,
      erAlleAksjonspunktGodkjent: values.aksjonspunktGodkjenning.every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true),
    });
  }, [erTilbakekreving]);

  const erBehandlingEtterKlage = useMemo(() => (behandling ? behandling.behandlingArsaker
    .map(({ behandlingArsakType }) => behandlingArsakType)
    .some((bt: Kodeverk) => bt.kode === klageBehandlingArsakType.ETTER_KLAGE || bt.kode === klageBehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === klageBehandlingArsakType.KLAGE_M_INNTK) : false),
  [behandling]);

  const lagLenke = useCallback((skjermlenkeCode: string) => createLocationForSkjermlenke(location, skjermlenkeCode), [location]);

  return (
    <RawIntlProvider value={intl}>
      <TotrinnskontrollPanel
        behandling={behandling}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        readOnly={readOnly}
        onSubmit={submitHandler}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        erForeldrepengerFagsak={fagsakYtelseType.kode === FagsakYtelseType.FORELDREPENGER}
        behandlingKlageVurdering={behandlingKlageVurdering}
        alleKodeverk={alleKodeverk}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        erTilbakekreving={erTilbakekreving}
        lagLenke={lagLenke}
      />
    </RawIntlProvider>
  );
};

export default TotrinnskontrollSakIndex;
