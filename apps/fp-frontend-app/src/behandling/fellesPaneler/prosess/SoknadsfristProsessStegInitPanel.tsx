import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VurderSoknadsfristForeldrepengerIndex } from '@navikt/fp-prosess-soknadsfrist';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER];

export const SoknadsfristProsessStegInitPanel = (props: ProsessPanelInitProps) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);
  const { data: søknad } = useQuery(api.søknadOptions(props.behandling));

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
      skalPanelVisesIMeny={skalViseProsessPanel(standardPanelProps.aksjonspunkter)}
    >
      {søknad ? <VurderSoknadsfristForeldrepengerIndex soknad={søknad} {...standardPanelProps} /> : <LoadingPanel />}
    </ProsessDefaultInitPanel>
  );
};
