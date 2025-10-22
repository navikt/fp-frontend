import { FatterVedtakTotrinnskontrollModalSakIndex } from '@navikt/fp-sak-totrinnskontroll';
import type { FagsakBehandlingDto } from '@navikt/fp-types';

interface Props {
  behandling: FagsakBehandlingDto;
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
