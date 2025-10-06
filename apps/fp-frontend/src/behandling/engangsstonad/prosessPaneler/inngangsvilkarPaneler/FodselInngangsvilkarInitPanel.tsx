import { type IntlShape, useIntl } from 'react-intl';

import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import type { Aksjonspunkt, AksjonspunktKode, VilkårType } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5031'];

const VILKAR_KODER: VilkårType[] = ['FP_VK_1'];

export const FodselInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const paneltekst = hentAksjonspunktTekst(intl, standardPanelProps.aksjonspunkterForPanel);

  return standardPanelProps.aksjonspunkterForPanel.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FODSEL"
      hentInngangsvilkårPanelTekst={paneltekst}
      overstyringApKode="6003"
    >
      <OverstyringPanelDef
        vilkår={standardPanelProps.vilkårForPanel}
        vilkårKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkårKoder={VILKAR_KODER}
      inngangsvilkårPanelKode="FODSEL"
      hentInngangsvilkårPanelTekst={paneltekst}
    >
      <FodselVilkarProsessIndex
        ytelseTypeKode="ES"
        status={standardPanelProps.status}
        vilkår={standardPanelProps.vilkårForPanel}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};

const AKSJONSPUNKT_TEKST_PER_KODE: Partial<Record<AksjonspunktKode, string>> = {
  ['5031']: 'SRBVilkarForm.VurderSammeBarn',
};

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0]!.definisjon] })
    : '';
