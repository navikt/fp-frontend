import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode } from '@navikt/fp-types';

import { VurderingFellesProsessStegInitPanel } from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5035'];

export const VurderingFamOgPensjonProsessStegInitPanel = () => (
  <VurderingFellesProsessStegInitPanel
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNFP' })}
  />
);
