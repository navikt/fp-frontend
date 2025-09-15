import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { VurderingFellesProsessStegInitPanel } from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.BEHANDLE_KLAGE_NFP];

export const VurderingFamOgPensjonProsessStegInitPanel = () => (
  <VurderingFellesProsessStegInitPanel
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNFP' })}
  />
);
