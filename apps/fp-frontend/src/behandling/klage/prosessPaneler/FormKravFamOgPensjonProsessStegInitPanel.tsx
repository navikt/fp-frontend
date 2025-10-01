import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { type FormkravMellomlagretDataType, FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';
import { isKlageAvvist } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDERING_AV_FORMKRAV_KLAGE_NFP];

export const FormKravFamOgPensjonProsessStegInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, alleBehandlinger, hentOgSettBehandling } = use(BehandlingDataContext);

  const avsluttedeBehandlinger = alleBehandlinger
    .filter(b => b.status === 'AVSLU')
    .filter(b => (b.type !== 'BT-003' || isKlageAvvist(b.behandlingsresultat?.type)) && b.type !== 'BT-008')
    .map(b => ({
      uuid: b.uuid,
      type: b.type,
      avsluttet: b.avsluttet ?? undefined,
    }));

  const api = useBehandlingApi(behandling);

  const { data: klageVurdering, isFetching } = useQuery(api.klage.klageVurderingOptions(behandling));

  const { mutate: lagreFormkravVurdering } = useMutation({
    mutationFn: (values: FormkravMellomlagretDataType) => api.klage.mellomlagreFormkravVurdering(values),
    onSuccess: () => hentOgSettBehandling(),
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageNFP' })}
      skalPanelVisesIMeny
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <FormkravProsessIndex
          klageVurdering={klageVurdering}
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          lagreFormkravVurdering={lagreFormkravVurdering}
        />
      )}
    </ProsessDefaultInitPanel>
  );
};
