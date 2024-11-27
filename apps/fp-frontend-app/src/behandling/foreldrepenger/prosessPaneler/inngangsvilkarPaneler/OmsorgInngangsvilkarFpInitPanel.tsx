import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode,VilkarType } from '@navikt/fp-kodeverk';
import { OmsorgVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-omsorg';

import { InngangsvilkarDefaultInitPanel } from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';
import { InngangsvilkarPanelInitProps } from '../../../felles/typer/inngangsvilkarPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.OMSORGSVILKARET];

interface Props {
  behandlingVersjon: number;
}

export const OmsorgInngangsvilkarFpInitPanel = ({
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
      hentInngangsvilkarPanelTekst={() => intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      renderPanel={data => <OmsorgVilkarProsessIndex {...data} />}
    />
  );
};
