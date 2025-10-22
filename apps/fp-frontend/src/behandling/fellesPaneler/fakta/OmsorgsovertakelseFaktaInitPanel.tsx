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

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET];

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
