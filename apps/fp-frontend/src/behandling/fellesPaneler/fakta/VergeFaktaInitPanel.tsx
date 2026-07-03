import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useErFaktaPanelAktiv } from '../../felles/fakta/useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_VERGE];

export const VergeFaktaInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const skalPanelVisesIMeny = harLenke(behandling, 'VERGE');
  const erAktiv = useErFaktaPanelAktiv(
    FaktaPanelCode.VERGE,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(FaktaPanelCode.VERGE, erAktiv, 'fakta');

  const { data: verge, isFetching } = useQuery(
    medPrioritet(api.vergeOptions(behandling, skalPanelVisesIMeny), skalHenteData),
  );

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
