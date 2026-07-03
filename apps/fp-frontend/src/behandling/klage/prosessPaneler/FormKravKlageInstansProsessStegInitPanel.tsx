import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { type FormkravMellomlagretDataType, FormkravProsessIndex } from '@navikt/fp-prosess-formkrav';
import { isKlageAvvist } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.UTGÅTT_5083];

export const FormKravKlageInstansProsessStegInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, alleBehandlinger, hentOgSettBehandling } = useBehandlingDataContext();

  const alleIkkeHenlagteBehandlinger = alleBehandlinger.filter(b => !b.behandlingHenlagt);

  const avsluttedeBehandlinger = alleIkkeHenlagteBehandlinger
    .filter(b => b.status === 'AVSLU')
    .filter(b => (b.type !== 'BT-003' || isKlageAvvist(b.behandlingsresultat?.type)) && b.type !== 'BT-008')
    .map(b => ({
      uuid: b.uuid,
      type: b.type,
      avsluttet: b.avsluttet ?? undefined,
    }));

  const erAktiv = useErProsessPanelAktiv(
    ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,
    true,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS, erAktiv, 'prosess', true);

  const api = getBehandlingApi(behandling);

  const { data: klageVurdering, isFetching } = useQuery(
    medPrioritet(api.klage.klageVurderingOptions(behandling), skalHenteData),
  );

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
