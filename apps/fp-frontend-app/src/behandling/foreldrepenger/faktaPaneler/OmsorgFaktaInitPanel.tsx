import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgFaktaIndex } from '@navikt/fp-fakta-omsorg';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Personoversikt } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG];

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgFaktaInitPanel = ({ personoversikt, ...props }: Props & FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: ytelsefordeling } = useQuery(api.ytelsefordelingOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORG}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Omsorg' })}
      skalPanelVisesIMeny={AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, behandling.aksjonspunkt))}
    >
      {ytelsefordeling ? (
        <OmsorgFaktaIndex ytelsefordeling={ytelsefordeling} personoversikt={personoversikt} {...standardPanelProps} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
