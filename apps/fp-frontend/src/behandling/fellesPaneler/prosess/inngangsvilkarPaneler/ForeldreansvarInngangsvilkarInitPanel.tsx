import { useIntl } from 'react-intl';

import { ForeldreansvarVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-foreldreansvar';
import type { AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5013', '5014', '5031'];

const AKSJONSPUNKT_TEKST_PER_KODE: Record<string, string> = {
  ['5013']: 'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad',
  ['5014']: 'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  ['5031']: 'SRBVilkarForm.VurderSammeBarn',
};

const VILKAR_KODER = ['FP_VK_8', 'FP_VK_33'] satisfies VilkårType[];

export const ForeldreansvarInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  return (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FORELDREANSVARSVILKARET"
      hentInngangsvilkårPanelTekst={
        standardPanelProps.aksjonspunkterForPanel.length > 0
          ? intl.formatMessage({
              id: AKSJONSPUNKT_TEKST_PER_KODE[standardPanelProps.aksjonspunkterForPanel[0]!.definisjon],
            })
          : ''
      }
    >
      <ForeldreansvarVilkarProsessIndex
        isEngangsstonad
        isForeldreansvar2Ledd={standardPanelProps.vilkårForPanel.some(v => v.vilkarType === 'FP_VK_8')}
        status={standardPanelProps.status}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};
