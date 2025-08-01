import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Aksjonspunkt, KodeverkMedNavn, Risikoklassifisering } from '@navikt/fp-types';

import { HoyRisikoTittel } from './components/HoyRisikoTittel';
import { IngenRisikoPanel } from './components/IngenRisikoPanel';
import { ManglendeKlassifiseringPanel } from './components/ManglendeKlassifiseringPanel';
import type { KontrollresultatKode } from './kodeverk/kontrollresultatKode';
import type { AvklartRisikoklassifiseringAp } from './types/AvklartRisikoklassifiseringAp';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const harResultatkode = (resultatkode: KontrollresultatKode, risikoklassifisering?: Risikoklassifisering): boolean => {
  if (!risikoklassifisering?.kontrollresultat) {
    return false;
  }
  return risikoklassifisering.kontrollresultat === resultatkode;
};

interface Props {
  aksjonspunkt?: Aksjonspunkt;
  risikoklassifisering?: Risikoklassifisering;
  isPanelOpen: boolean;
  readOnly: boolean;
  submitAksjonspunkt?: (data: AvklartRisikoklassifiseringAp) => void;
  toggleRiskPanel: () => void;
  faresignalVurderinger: KodeverkMedNavn<'FaresignalVurdering'>[];
}

/**
 * RisikoklassifiseringSakIndex
 *
 * Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
export const RisikoklassifiseringSakIndex = ({
  aksjonspunkt,
  risikoklassifisering,
  isPanelOpen,
  readOnly,
  submitAksjonspunkt,
  toggleRiskPanel,
  faresignalVurderinger,
}: Props) => {
  const harIkkeHoyRisikoklassifisering = harResultatkode('IKKE_HOY', risikoklassifisering);
  const harHoyRisikoklassifisering = harResultatkode('HOY', risikoklassifisering);

  return (
    <RawIntlProvider value={intl}>
      {harIkkeHoyRisikoklassifisering && <IngenRisikoPanel />}
      {risikoklassifisering && harHoyRisikoklassifisering && (
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
      {!harIkkeHoyRisikoklassifisering && !harHoyRisikoklassifisering && <ManglendeKlassifiseringPanel />}
    </RawIntlProvider>
  );
};
