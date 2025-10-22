import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FagsakBehandlingDto } from '@navikt/fp-types';
import { erTilbakekrevingBehandling } from '@navikt/fp-utils';

import { FatterVedtakApprovalModal } from './components/modal/FatterVedtakApprovalModal';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandling: FagsakBehandlingDto;
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
}

export const FatterVedtakTotrinnskontrollModalSakIndex = ({
  behandling,
  closeEvent,
  allAksjonspunktApproved,
}: Props) => (
  <RawIntlProvider value={intl}>
    <FatterVedtakApprovalModal
      closeEvent={closeEvent}
      allAksjonspunktApproved={allAksjonspunktApproved}
      behandlingsresultat={behandling.behandlingsresultat ?? undefined}
      behandlingStatusKode={behandling.status}
      behandlingTypeKode={behandling.type}
      harSammeResultatSomOriginalBehandling={
        erTilbakekrevingBehandling(behandling) ? false : behandling.behandlingsresultat?.erRevurderingMedUendretUtfall
      }
    />
  </RawIntlProvider>
);
