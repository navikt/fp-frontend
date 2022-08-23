import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AksessRettigheter, Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

import skalViseProsessPanel from '../../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import OverstyringPanelDef from '../../../felles/prosess/OverstyringPanelDef';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const AKSJONSPUNKT_KODE = aksjonspunktCodes.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR;

const VILKAR_KODER = [vilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

const FortsattMedlemskapProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  rettigheter,
  ...props
}) => {
  const { behandling } = props;
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);
  useEffect(() => {
    setOverstyrt(false);
  }, [behandling.versjon]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={[AKSJONSPUNKT_KODE]}
      vilkarKoder={VILKAR_KODER}
      prosessPanelKode={ProsessStegCode.FORTSATTMEDLEMSKAP}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
      skalPanelVisesIMeny={(initData) => skalViseProsessPanel(initData.aksjonspunkter, VILKAR_KODER, initData.vilkar)}
      erOverstyrt={erOverstyrt}
      renderPanel={(data) => (
        <OverstyringPanelDef
          aksjonspunkter={data?.aksjonspunkter}
          aksjonspunktKode={AKSJONSPUNKT_KODE}
          vilkar={data.vilkar}
          vilkarKoder={VILKAR_KODER}
          panelTekstKode="Behandlingspunkt.FortsattMedlemskap"
          erMedlemskapsPanel={false}
          toggleOverstyring={toggleOverstyring}
          erOverstyrt={erOverstyrt}
          overrideReadOnly={data.isReadOnly}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
        />
      )}
    />
  );
};

export default FortsattMedlemskapProsessStegInitPanel;
