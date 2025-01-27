import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_VERGE];

export const VergeFaktaInitPanel = ({ valgtFaktaSteg, behandling, registrerFaktaPanel }: FaktaPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(standardPanelProps.behandling);

  const skalPanelVisesIMeny = harLenke(behandling, 'VERGE');

  const { data: verge, isFetching } = useQuery(api.vergeOptions(standardPanelProps.behandling, skalPanelVisesIMeny));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      valgtFaktaSteg={valgtFaktaSteg}
      behandling={behandling}
      registrerFaktaPanel={registrerFaktaPanel}
      faktaPanelKode={FaktaPanelCode.VERGE}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Verge' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {!isFetching ? <VergeFaktaIndex verge={verge} {...standardPanelProps} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
