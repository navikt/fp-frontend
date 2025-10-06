import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode } from '@navikt/fp-types';

import { VurderingFellesProsessStegInitPanel } from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5036'];

export const VurderingKlageInstansProsessStegInitPanel = () => (
  <VurderingFellesProsessStegInitPanel
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_KLAGEINSTANS}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNK' })}
  />
);
