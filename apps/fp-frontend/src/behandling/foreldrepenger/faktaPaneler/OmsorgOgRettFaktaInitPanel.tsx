import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgOgRettFaktaIndex } from '@navikt/fp-fakta-omsorg-og-rett';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode, Personoversikt } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5060', '5086', '6018'];

const OVERSTYRING_AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['6018'];

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgOgRettFaktaInitPanel = ({ personoversikt }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AKSJONSPUNKT_KODER);

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: omsorgOgRett } = useQuery(api.omsorgOgRettOptions(behandling));

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
