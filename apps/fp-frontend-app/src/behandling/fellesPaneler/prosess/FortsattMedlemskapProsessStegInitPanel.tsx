import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { VilkarType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AksessRettigheter } from '@navikt/fp-types';

import skalViseProsessPanel from '../../felles/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import OverstyringPanelDef from '../../felles/prosess/OverstyringPanelDef';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODE = AksjonspunktCode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR;

const VILKAR_KODER = [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE];

type EndepunktPanelData = Record<string, never>;

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
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      aksjonspunktKoder={[AKSJONSPUNKT_KODE]}
      vilkarKoder={VILKAR_KODER}
      prosessPanelKode={ProsessStegCode.FORTSATTMEDLEMSKAP}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.FortsattMedlemskap' })}
      skalPanelVisesIMeny={initData => skalViseProsessPanel(initData.aksjonspunkter, VILKAR_KODER, initData.vilkar)}
      erOverstyrt={erOverstyrt}
      renderPanel={data => (
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
