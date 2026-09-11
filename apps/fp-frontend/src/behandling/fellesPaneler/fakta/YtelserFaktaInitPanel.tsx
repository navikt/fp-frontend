import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { YtelserFaktaIndex } from '@navikt/fp-fakta-ytelser';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { useFaktaPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';

export const YtelserFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling } = useBehandlingDataContext();
  const standardPanelProps = useStandardFaktaPanelProps();

  const prioriter = useFaktaPanelPrioritet({
    panelKode: FaktaPanelCode.YTELSER,
    skalVisesIMeny: true,
    harÅpentAksjonspunkt: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: inntektArbeidYtelse } = useQuery(prioriter(api.inntektArbeidYtelseOptions(behandling)));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.YTELSER}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Ytelser' })}
      skalPanelVisesIMeny
    >
      {inntektArbeidYtelse ? <YtelserFaktaIndex inntektArbeidYtelse={inntektArbeidYtelse} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
