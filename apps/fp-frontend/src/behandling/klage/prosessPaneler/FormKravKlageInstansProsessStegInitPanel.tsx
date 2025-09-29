import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, BehandlingStatusEnum, isKlageAvvist } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { type FormkravMellomlagretDataType, FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_FORMKRAV_NK];

export const FormKravKlageInstansProsessStegInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, alleBehandlinger, hentOgSettBehandling } = use(BehandlingDataContext);

  const alleIkkeHenlagteBehandlinger = alleBehandlinger.filter(b => !b.behandlingHenlagt);

  const avsluttedeBehandlinger = alleIkkeHenlagteBehandlinger
    .filter(b => b.status === BehandlingStatusEnum.AVSLUTTET)
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
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageKA' })}
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
