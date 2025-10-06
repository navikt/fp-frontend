import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { InnsynProsessIndex } from '@navikt/fp-prosess-innsyn';
import type { AksjonspunktKode } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5037'];

export const BehandleInnsynProsessStegInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: innsynDokumenter } = useQuery(api.innsyn.innsynDokumenterOptions(behandling));
  const { data: innsyn, isFetching } = useQuery(api.innsyn.innsynOptions(behandling));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.BEHANDLE_INNSYN}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Innsyn' })}
      skalPanelVisesIMeny
    >
      {isFetching ? <LoadingPanel /> : <InnsynProsessIndex innsyn={innsyn} alleDokumenter={innsynDokumenter} />}
    </ProsessDefaultInitPanel>
  );
};
