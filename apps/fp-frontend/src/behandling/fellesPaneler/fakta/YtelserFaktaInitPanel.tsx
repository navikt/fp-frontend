import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { YtelserFaktaIndex } from '@navikt/fp-fakta-ytelser';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

export const YtelserFaktaInitPanel = () => {
  const { behandling } = useBehandlingDataContext();
  const standardPanelProps = useStandardFaktaPanelProps(FaktaPanelCode.YTELSER);

  const api = getBehandlingApi(behandling);

  const { data: inntektArbeidYtelse } = useQuery(api.inntektArbeidYtelseOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.YTELSER}
      skalPanelVisesIMeny
    >
      {inntektArbeidYtelse ? <YtelserFaktaIndex inntektArbeidYtelse={inntektArbeidYtelse} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
