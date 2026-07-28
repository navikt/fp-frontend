import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { useFaktaPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_VERGE];

export const VergeFaktaInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const skalPanelVisesIMeny = harLenke(behandling, 'VERGE');
  const prioriter = useFaktaPanelPrioritet({
    panelKode: FaktaPanelCode.VERGE,
    skalVisesIMeny: skalPanelVisesIMeny,
    harÅpentAksjonspunkt: standardPanelProps.harÅpentAksjonspunkt,
  });

  const { data: verge, isFetching } = useQuery(prioriter(api.vergeOptions(behandling, skalPanelVisesIMeny)));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.VERGE}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Verge' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {isFetching ? <LoadingPanel /> : <VergeFaktaIndex verge={verge} alleKodeverk={standardPanelProps.alleKodeverk} />}
    </FaktaDefaultInitPanel>
  );
};
