import { type IntlShape, useIntl } from 'react-intl';

import { AksjonspunktKode, FagsakYtelseType, VilkarType } from '@navikt/fp-kodeverk';
import { FodselVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-fodsel';
import type { Aksjonspunkt } from '@navikt/fp-types';

import {
  InngangsvilkarDefaultInitPanel,
  InngangsvilkarOverstyringDefaultInitPanel,
} from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { OverstyringPanelDef } from '../../../felles/prosess/OverstyringPanelDef';
import { useStandardProsessPanelProps } from '../../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.FODSELSVILKARET_MOR];

export const FodselInngangsvilkarInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, VILKAR_KODER);

  const paneltekst = hentAksjonspunktTekst(intl, standardPanelProps.aksjonspunkter);

  return standardPanelProps.aksjonspunkter.length === 0 ? (
    <InngangsvilkarOverstyringDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FODSEL"
      hentInngangsvilkarPanelTekst={paneltekst}
      overstyringApKode={AksjonspunktKode.OVERSTYR_FODSELSVILKAR}
    >
      <OverstyringPanelDef
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Fodselsvilkaret"
      />
    </InngangsvilkarOverstyringDefaultInitPanel>
  ) : (
    <InngangsvilkarDefaultInitPanel
      standardPanelProps={standardPanelProps}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FODSEL"
      hentInngangsvilkarPanelTekst={paneltekst}
    >
      <FodselVilkarProsessIndex
        ytelseTypeKode={FagsakYtelseType.ENGANGSSTONAD}
        readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
        status={standardPanelProps.status}
        vilkar={standardPanelProps.vilkar}
      />
    </InngangsvilkarDefaultInitPanel>
  );
};

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
    : '';
