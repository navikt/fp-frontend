import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import kontrollresultatKode from './kodeverk/kontrollresultatKode';
import ManglendeKlassifiseringPanel from './components/ManglendeKlassifiseringPanel';
import IngenRisikoPanel from './components/IngenRisikoPanel';
import HoyRisikoTittel from './components/HoyRisikoTittel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const harResultatkode = (resultatkode: string, risikoklassifisering?: Risikoklassifisering): boolean => {
  if (!risikoklassifisering || !risikoklassifisering.kontrollresultat) {
    return false;
  }
  return risikoklassifisering.kontrollresultat.kode === resultatkode;
};

interface OwnProps {
  aksjonspunkt?: Aksjonspunkt;
  risikoklassifisering?: Risikoklassifisering;
  isPanelOpen: boolean;
  readOnly: boolean;
  submitAksjonspunkt: (data: VurderFaresignalerAp) => Promise<void>;
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
