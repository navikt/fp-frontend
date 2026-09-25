import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakDokumentasjonFaktaIndex } from '@navikt/fp-fakta-uttaksdokumentasjon';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON];

export const UttakDokumentasjonFaktaInitPanel = () => {
  const standardPanelProps = useStandardFaktaPanelProps(FaktaPanelCode.UTTAK_DOKUMENTASJON, AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const api = getBehandlingApi(behandling);
  const { data: dokumentasjonVurderingBehov } = useQuery(api.dokumentasjonVurderingBehovOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      skalPanelVisesIMeny={harLenke(behandling, 'DOKUMENTASJON_VURDERING_BEHOV')}
    >
      {dokumentasjonVurderingBehov ? (
        <UttakDokumentasjonFaktaIndex dokumentasjonVurderingBehov={dokumentasjonVurderingBehov} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
