import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { YtelserFaktaIndex } from '@navikt/fp-fakta-ytelser';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useErFaktaPanelAktiv } from '../../felles/fakta/useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';

export const YtelserFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling } = useBehandlingDataContext();
  const standardPanelProps = useStandardFaktaPanelProps();

  const erAktiv = useErFaktaPanelAktiv(FaktaPanelCode.YTELSER, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(FaktaPanelCode.YTELSER, erAktiv, 'fakta', true);

  const api = getBehandlingApi(behandling);

  const { data: inntektArbeidYtelse } = useQuery(
    medPrioritet(api.inntektArbeidYtelseOptions(behandling), skalHenteData),
  );

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
