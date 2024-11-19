import React from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { VilkarType, AksjonspunktKode } from '@navikt/fp-kodeverk';
import { OmsorgVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-omsorg';
import { Aksjonspunkt } from '@navikt/fp-types';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';
import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';

const AKSJONSPUNKT_TEKST_PER_KODE = {
  [AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET]: 'ErOmsorgVilkaarOppfyltForm.Paragraf',
  [AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]: 'SRBVilkarForm.VurderSammeBarn',
  [AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:
    'SRBVilkarForm.VurderAnnenForelderSammeBarn',
} as Record<string, string>;

const hentAksjonspunktTekst = (intl: IntlShape, aksjonspunkter: Aksjonspunkt[] = []): string =>
  aksjonspunkter.length > 0
    ? intl.formatMessage({ id: AKSJONSPUNKT_TEKST_PER_KODE[aksjonspunkter[0].definisjon] })
    : '';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET,
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.OMSORGSVILKARET];

interface Props {
  behandlingVersjon: number;
}

export const OmsorgInngangsvilkarInitPanel = ({
  behandlingVersjon,
  ...props
}: Props & InngangsvilkarPanelInitProps) => {
  const intl = useIntl();
  return (
    <InngangsvilkarDefaultInitPanel
      {...props}
      behandlingVersjon={behandlingVersjon}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      vilkarKoder={VILKAR_KODER}
      inngangsvilkarPanelKode="OMSORG"
      hentInngangsvilkarPanelTekst={data => hentAksjonspunktTekst(intl, data.aksjonspunkter)}
      renderPanel={data => <OmsorgVilkarProsessIndex {...data} />}
    />
  );
};
