import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgFaktaIndex } from '@navikt/fp-fakta-omsorg';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { harAksjonspunkt } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { useFaktaPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_LØPENDE_OMSORG];

export const OmsorgFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const skalPanelVisesIMeny = AKSJONSPUNKT_KODER.some(kode => harAksjonspunkt(kode, behandling.aksjonspunkt));
  const prioriter = useFaktaPanelPrioritet({
    panelKode: FaktaPanelCode.OMSORG,
    skalVisesIMeny: skalPanelVisesIMeny,
    harÅpentAksjonspunkt: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: ytelsefordeling } = useQuery(prioriter(api.ytelsefordelingOptions(behandling)));
  const { data: personoversikt } = useQuery(prioriter(api.behandlingPersonoversiktOptions(behandling)));
  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORG}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Omsorg' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {ytelsefordeling ? (
        <OmsorgFaktaIndex ytelsefordeling={ytelsefordeling} personoversikt={personoversikt} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
