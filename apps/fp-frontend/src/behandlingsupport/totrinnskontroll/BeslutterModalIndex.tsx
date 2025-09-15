import { FatterVedtakTotrinnskontrollModalSakIndex } from '@navikt/fp-sak-totrinnskontroll';
import type { BehandlingAppKontekst } from '@navikt/fp-types';

interface Props {
  behandling: BehandlingAppKontekst;
  pushLocation: (location: string) => void;
  allAksjonspunktApproved: boolean;
}

export const BeslutterModalIndex = ({ behandling, pushLocation, allAksjonspunktApproved }: Props) => {
  return (
    <FatterVedtakTotrinnskontrollModalSakIndex
      behandling={behandling}
      closeEvent={() => {
        pushLocation('/');
      }}
      allAksjonspunktApproved={allAksjonspunktApproved}
    />
  );
};
