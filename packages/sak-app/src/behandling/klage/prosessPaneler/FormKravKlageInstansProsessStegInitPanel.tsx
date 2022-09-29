import React, {
  FunctionComponent, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { BehandlingStatus, BehandlingType, VilkarUtfallType } from '@navikt/ft-kodeverk';

import FormkravProsessIndex from '@fpsak-frontend/prosess-formkrav';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { KlageVurdering } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { KlageBehandlingApiKeys, requestKlageApi } from '../data/klageBehandlingApi';

const ENDEPUNKTER_INIT_DATA = [KlageBehandlingApiKeys.KLAGE_VURDERING];
type EndepunktInitData = {
  klageVurdering?: KlageVurdering;
}

interface OwnProps {
  alleBehandlinger: {
    uuid: string;
    type: string;
    status: string;
    opprettet: string;
    avsluttet?: string;
  }[];
}

const FormKravKlageInstansProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
  const intl = useIntl();
  const avsluttedeBehandlinger = useMemo(() => alleBehandlinger
    .filter((b) => b.status === BehandlingStatus.AVSLUTTET)
    .filter((b) => b.type !== BehandlingType.KLAGE && b.type !== BehandlingType.ANKE), [alleBehandlinger]);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestKlageApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      prosessPanelKode={ProsessStegCode.FORMKRAV_KLAGE_NAV_KLAGEINSTANS}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.FormkravKlageKA' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(data) => (data.klageVurdering?.klageFormkravResultatKA ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT)}
      renderPanel={(data) => (
        <FormkravProsessIndex
          avsluttedeBehandlinger={avsluttedeBehandlinger}
          // @ts-ignore fiks
          {...data}
        />
      )}
    />
  );
};

export default FormKravKlageInstansProsessStegInitPanel;
