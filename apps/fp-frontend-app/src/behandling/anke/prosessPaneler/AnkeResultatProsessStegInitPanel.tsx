import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeResultatProsessIndex } from '@navikt/fp-prosess-anke-resultat';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanelNew';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FORESLA_VEDTAK,
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
];

export const AnkeResultatProsessStegInitPanel = ({ ...props }: ProsessPanelInitProps) => {
  const intl = useIntl();

  const api = useBehandlingApi(props.behandling);
  const { data: ankeVurdering } = useQuery(api.anke.ankeVurderingOptions(props.behandling));

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeResultat' })}
      skalPanelVisesIMeny
    >
      {ankeVurdering ? (
        <AnkeResultatProsessIndex ankeVurdering={ankeVurdering} alleKodeverk={standardPanelProps.alleKodeverk} />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
