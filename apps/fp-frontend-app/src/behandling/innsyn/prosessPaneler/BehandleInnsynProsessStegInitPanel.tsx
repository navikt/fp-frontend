import { useIntl } from 'react-intl';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { InnsynProsessIndex } from '@navikt/fp-prosess-innsyn';
import { Fagsak } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanelNew';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_INNSYN];

interface Props {
  fagsak: Fagsak;
}

export const BehandleInnsynProsessStegInitPanel = ({ fagsak, ...props }: Props & ProsessPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);
  const api = useBehandlingApi(props.behandling);

  const { data: innsynDokumenter } = useQuery(api.innsyn.innsynDokumenterOptions(fagsak, props.behandling));
  const { data: innsyn } = useQuery(api.innsyn.innsynOptions(props.behandling));

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.BEHANDLE_INNSYN}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Innsyn' })}
      skalPanelVisesIMeny
    >
      <InnsynProsessIndex
        innsyn={innsyn}
        saksnummer={fagsak.saksnummer}
        alleDokumenter={innsynDokumenter}
        {...standardPanelProps}
      />
    </ProsessDefaultInitPanel>
  );
};
