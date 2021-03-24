import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import kontrollresultatKode from './kodeverk/kontrollresultatKode';
import ManglendeKlassifiseringPanel from './components/ManglendeKlassifiseringPanel';
import IngenRisikoPanel from './components/IngenRisikoPanel';
import HoyRisikoTittel from './components/HoyRisikoTittel';
import { VuderFaresignalerAp } from './components/AvklarFaresignalerForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const harResultatkode = (resultatkode: string, risikoklassifisering?: Risikoklassifisering): boolean => {
  if (!risikoklassifisering || !risikoklassifisering.kontrollresultat) {
    return false;
  }
  return risikoklassifisering.kontrollresultat.kode === resultatkode;
};

interface OwnProps {
  behandlingId?: number;
  behandlingVersjon?: number;
  aksjonspunkt?: Aksjonspunkt;
  risikoklassifisering?: Risikoklassifisering;
  isPanelOpen: boolean;
  readOnly: boolean;
  submitAksjonspunkt: (verdier: VuderFaresignalerAp) => Promise<any>;
  toggleRiskPanel: () => void;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

/**
 * RisikoklassifiseringSakIndex
 *
 * Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
const RisikoklassifiseringSakIndex: FunctionComponent<OwnProps> = ({
  behandlingId,
  behandlingVersjon,
  aksjonspunkt,
  risikoklassifisering,
  isPanelOpen,
  readOnly,
  submitAksjonspunkt,
  toggleRiskPanel,
  alleKodeverk,
}) => {
  const harIkkeHoyRisikoklassifisering = harResultatkode(kontrollresultatKode.IKKE_HOY, risikoklassifisering);
  const harHoyRisikoklassifisering = harResultatkode(kontrollresultatKode.HOY, risikoklassifisering);
  const faresignalVurderinger = alleKodeverk[kodeverkTyper.FARESIGNAL_VURDERING];

  return (
    <RawIntlProvider value={intl}>
      { harIkkeHoyRisikoklassifisering && (
        <IngenRisikoPanel />
      )}
      { harHoyRisikoklassifisering && (
        <HoyRisikoTittel
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          risikoklassifisering={risikoklassifisering}
          aksjonspunkt={aksjonspunkt}
          readOnly={readOnly}
          isRiskPanelOpen={isPanelOpen}
          submitCallback={submitAksjonspunkt}
          toggleRiskPanel={toggleRiskPanel}
          faresignalVurderinger={faresignalVurderinger}
        />
      )}
      {(!harIkkeHoyRisikoklassifisering && !harHoyRisikoklassifisering) && (
        <ManglendeKlassifiseringPanel />
      )}
    </RawIntlProvider>
  );
};

export default RisikoklassifiseringSakIndex;
