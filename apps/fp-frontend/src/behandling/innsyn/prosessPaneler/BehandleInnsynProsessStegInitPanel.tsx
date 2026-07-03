import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { InnsynProsessIndex } from '@navikt/fp-prosess-innsyn';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_INNSYN];

export const BehandleInnsynProsessStegInitPanel = () => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const erAktiv = useErProsessPanelAktiv(
    ProsessStegCode.BEHANDLE_INNSYN,
    true,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(ProsessStegCode.BEHANDLE_INNSYN, erAktiv, 'prosess');

  const api = getBehandlingApi(behandling);

  const { data: innsynDokumenter } = useQuery(
    medPrioritet(api.innsyn.innsynDokumenterOptions(behandling), skalHenteData),
  );
  const { data: innsyn, isFetching } = useQuery(medPrioritet(api.innsyn.innsynOptions(behandling), skalHenteData));

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
