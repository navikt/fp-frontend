import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { VurderingFellesProsessStegInitPanel } from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.BEHANDLE_KLAGE_NK];

export const VurderingKlageInstansProsessStegInitPanel = () => (
  <VurderingFellesProsessStegInitPanel
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_KLAGEINSTANS}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNK' })}
  />
);
