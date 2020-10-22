import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import ApprovalPanel from './components/ApprovalPanel';
import messages from '../i18n/nb_NO.json';
import { Behandling, Kodeverk, KodeverkMedNavn, TotrinnsKlageVurdering, TotrinnskontrollSkjermlenkeContext } from '@fpsak-frontend/types';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

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
}) => (
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
      onSubmit={onSubmit}
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

export default TotrinnskontrollSakIndex;
