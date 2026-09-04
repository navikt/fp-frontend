import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakDokumentasjonFaktaIndex } from '@navikt/fp-fakta-uttaksdokumentasjon';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { useFaktaPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON];

export const UttakDokumentasjonFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const skalPanelVisesIMeny = harLenke(behandling, 'DOKUMENTASJON_VURDERING_BEHOV');
  const prioriter = useFaktaPanelPrioritet({
    panelKode: FaktaPanelCode.UTTAK_DOKUMENTASJON,
    skalVisesIMeny: skalPanelVisesIMeny,
    harÅpentAksjonspunkt: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);
  const { data: dokumentasjonVurderingBehov } = useQuery(prioriter(api.dokumentasjonVurderingBehovOptions(behandling)));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.UTTAK_DOKUMENTASJON}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.UttakDokumentasjon' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {dokumentasjonVurderingBehov ? (
        <UttakDokumentasjonFaktaIndex dokumentasjonVurderingBehov={dokumentasjonVurderingBehov} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
