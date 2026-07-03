import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeResultatProsessIndex } from '@navikt/fp-prosess-anke-resultat';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FORESLÅ_VEDTAK,
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLÅ_VEDTAK_MANUELT,
];

export const AnkeResultatProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling } = useBehandlingDataContext();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const erAktiv = useErProsessPanelAktiv(ProsessStegCode.ANKE_RESULTAT, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(ProsessStegCode.ANKE_RESULTAT, erAktiv, 'prosess');

  const api = getBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(medPrioritet(api.anke.ankeVurderingOptions(behandling), skalHenteData));

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
