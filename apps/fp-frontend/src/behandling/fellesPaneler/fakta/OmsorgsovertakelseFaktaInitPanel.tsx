import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgsovertakelseFaktaIndex } from '@navikt/fp-fakta-omsorgsovertakelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET, // Aktivt aksjonspunkt
  // Legacy-aksjonspunkt
  AksjonspunktKode.UTGÅTT_5008,
  AksjonspunktKode.UTGÅTT_5054,
  AksjonspunktKode.UTGÅTT_5006,
  AksjonspunktKode.UTGÅTT_5004,
  AksjonspunktKode.UTGÅTT_5005,
  AksjonspunktKode.UTGÅTT_5013,
  AksjonspunktKode.UTGÅTT_5014,
  AksjonspunktKode.UTGÅTT_5011,
  AksjonspunktKode.UTGÅTT_6004,
  AksjonspunktKode.UTGÅTT_6010,
];

export const OmsorgsovertakelseFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const skalPanelVisesIMeny = harLenke(behandling, 'FAKTA_OMSORGSOVERTAKELSE');

  const api = useBehandlingApi(behandling);

  const { data: omsorgsovertakelse } = useQuery(api.faktaOmsorgsovertakelseOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORGSOVERTAKELSE}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Omsorgsovertakelse' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {omsorgsovertakelse ? <OmsorgsovertakelseFaktaIndex omsorgsovertakelse={omsorgsovertakelse} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
