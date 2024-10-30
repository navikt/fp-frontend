import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { OmsorgVilkarProsessIndex } from '@navikt/fp-prosess-vilkar-omsorg';

import InngangsvilkarPanelInitProps from '../../../felles/typer/inngangsvilkarPanelInitProps';
import InngangsvilkarDefaultInitPanel from '../../../felles/prosess/InngangsvilkarDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  AksjonspunktCode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [VilkarType.OMSORGSVILKARET];

interface OwnProps {
  behandlingVersjon: number;
}

const OmsorgInngangsvilkarFpInitPanel: FunctionComponent<OwnProps & InngangsvilkarPanelInitProps> = ({
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
      inngangsvilkarPanelKode="OMSORG"
      hentInngangsvilkarPanelTekst={() => intl.formatMessage({ id: 'SRBVilkarForm.VurderSammeBarn' })}
      renderPanel={data => <OmsorgVilkarProsessIndex {...data} />}
    />
  );
};

export default OmsorgInngangsvilkarFpInitPanel;
