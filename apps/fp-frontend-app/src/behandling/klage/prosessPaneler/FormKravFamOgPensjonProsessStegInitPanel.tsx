import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, BehandlingStatus, BehandlingType, isKlageAvvist } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { FormkravMellomlagretDataType, FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP];

interface Props {
  alleBehandlinger: BehandlingAppKontekst[];
  hentOgSettBehandling: () => void;
}

export const FormKravFamOgPensjonProsessStegInitPanel = ({
  alleBehandlinger,
  hentOgSettBehandling,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const avsluttedeBehandlinger = alleBehandlinger
    .filter(b => b.status === BehandlingStatus.AVSLUTTET)
    .filter(
      b =>
        (b.type !== BehandlingType.KLAGE || isKlageAvvist(b.behandlingsresultat?.type)) &&
        b.type !== BehandlingType.ANKE,
    );

  const api = useBehandlingApi(props.behandling);

  const { data: klageVurdering, isSuccess } = useQuery(api.klage.klageVurderingOptions(props.behandling));

  const { mutate: lagreFormkravVurdering } = useMutation({
    mutationFn: (values: FormkravMellomlagretDataType) => api.klage.mellomlagreFormkravVurdering(values),
    onSuccess: () => hentOgSettBehandling(),
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageNFP' })}
      skalPanelVisesIMeny
    >
      {isSuccess ? (
        <FormkravProsessIndex
          klageVurdering={klageVurdering}
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          lagreFormkravVurdering={lagreFormkravVurdering}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
