import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakDokumentasjonFaktaIndex } from '@navikt/fp-fakta-uttaksdokumentasjon';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON];

export const UttakDokumentasjonFaktaInitPanel = (props: FaktaPanelInitProps) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);
  const { data: dokumentasjonVurderingBehov } = useQuery(api.dokumentasjonVurderingBehovOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.UTTAK_DOKUMENTASJON}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.UttakDokumentasjon' })}
      skalPanelVisesIMeny={props.behandling.links.some(
        link => link.rel === BehandlingRel.DOKUMENTASJON_VURDERING_BEHOV,
      )}
    >
      {dokumentasjonVurderingBehov ? (
        <UttakDokumentasjonFaktaIndex
          dokumentasjonVurderingBehov={dokumentasjonVurderingBehov}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
