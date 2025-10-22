import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeResultatProsessIndex } from '@navikt/fp-prosess-anke-resultat';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FORESLÅ_VEDTAK,
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT,
];

export const AnkeResultatProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling } = useBehandlingDataContext();

  const api = useBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(api.anke.ankeVurderingOptions(behandling));

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeResultat' })}
      skalPanelVisesIMeny
    >
      {ankeVurdering ? <AnkeResultatProsessIndex ankeVurdering={ankeVurdering} /> : <LoadingPanel />}
    </ProsessDefaultInitPanel>
  );
};
