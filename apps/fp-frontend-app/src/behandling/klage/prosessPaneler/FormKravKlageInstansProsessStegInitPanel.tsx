import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, BehandlingStatus, BehandlingType, isKlageAvvist } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { type FormkravMellomlagretDataType, FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_FORMKRAV_NK];

export const FormKravKlageInstansProsessStegInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, alleBehandlinger, hentOgSettBehandling } = use(BehandlingDataContext);

  const alleIkkeHenlagteBehandlinger = alleBehandlinger.filter(b => !b.behandlingHenlagt);

  const avsluttedeBehandlinger = alleIkkeHenlagteBehandlinger
    .filter(b => b.status === BehandlingStatus.AVSLUTTET)
    .filter(
      b =>
        (b.type !== BehandlingType.KLAGE || isKlageAvvist(b.behandlingsresultat?.type)) &&
        b.type !== BehandlingType.ANKE,
    )
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
      {!isFetching ? (
        <FormkravProsessIndex
          klageVurdering={klageVurdering}
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          lagreFormkravVurdering={lagreFormkravVurdering}
          readOnlySubmitButton={standardPanelProps.readOnlySubmitButton}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
