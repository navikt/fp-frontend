import React, { FunctionComponent } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { VilkarType, AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ForeldreansvarVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-foreldreansvar';
import { Aksjonspunkt } from '@navikt/fp-types';

import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
  AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.2LeddParagrafEngangsStonad',
  [AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD]:
    'ErForeldreansvarVilkaarOppfyltForm.4LeddParagraf',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
    : '';

const VILKAR_KODER = [VilkarType.FORELDREANSVARSVILKARET_2_LEDD, VilkarType.FORELDREANSVARSVILKARET_4_LEDD];

interface OwnProps {
  behandlingVersjon: number;
}

const ForeldreansvarInngangsvilkarInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
  behandlingVersjon,
  ...props
}) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandlingVersjon}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="FORELDREANSVARSVILKARET"
      hentInngangsvilkarPanelTekst={data => hentAksjonspunktTekst(intl, data?.aksjonspunkter)}
      renderPanel={data => (
        <ForeldreansvarVilkarProsessIndex
          isEngangsstonad
          isForeldreansvar2Ledd={data.vilkar.some(v => v.vilkarType === VilkarType.FORELDREANSVARSVILKARET_2_LEDD)}
          {...data}
        />
      )}
    />
  );
};

export default ForeldreansvarInngangsvilkarInitPanel;
