import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgOgRettFaktaIndex } from '@navikt/fp-fakta-omsorg-og-rett';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT,
  AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG,
];

export const OmsorgOgRettFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, rettigheter } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);

  const { data: omsorgOgRett } = useQuery(api.omsorgOgRettOptions(behandling));
  const { data: personoversikt } = useQuery(api.behandlingPersonoversiktOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORG_OG_RETT}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.OmsorgOgRett' })}
      skalPanelVisesIMeny
    >
      {omsorgOgRett ? (
        <OmsorgOgRettFaktaIndex
          omsorgOgRett={omsorgOgRett}
          personoversikt={personoversikt}
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
