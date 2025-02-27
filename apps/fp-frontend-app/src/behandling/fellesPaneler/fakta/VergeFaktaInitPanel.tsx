import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_VERGE];

export const VergeFaktaInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const skalPanelVisesIMeny = harLenke(behandling, 'VERGE');

  const { data: verge, isFetching } = useQuery(api.vergeOptions(behandling, skalPanelVisesIMeny));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.VERGE}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Verge' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {!isFetching ? (
        <VergeFaktaIndex
          verge={verge}
          alleKodeverk={standardPanelProps.alleKodeverk}
          submittable={standardPanelProps.submittable}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
