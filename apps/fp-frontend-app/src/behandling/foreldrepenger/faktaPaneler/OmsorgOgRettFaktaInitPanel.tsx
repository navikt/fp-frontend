import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgOgRettFaktaIndex } from '@navikt/fp-fakta-omsorg-og-rett';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { Personoversikt } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
];

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgOgRettFaktaInitPanel = ({ personoversikt }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

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
          submittable={standardPanelProps.submittable}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
