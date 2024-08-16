import React, { FunctionComponent, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Behandling, Behandlingsresultat, Fagsak, Aksjonspunkt } from '@navikt/ft-types';
import { VilkarUtfallType, AksjonspunktStatus, BehandlingResultatType } from '@navikt/ft-kodeverk';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { VedtakKlageProsessIndex, VedtakKlageBrevData } from '@navikt/fp-prosess-vedtak-klage';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { ForhåndsvisMeldingParams, KlageVurdering } from '@navikt/fp-types';
import { forhandsvisDokument } from '@navikt/ft-utils';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import useStandardProsessPanelProps from '../../felles/prosess/useStandardProsessPanelProps';
import FatterVedtakStatusModal from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const lagForhandsvisCallback =
  (
    forhandsvisMelding: (params: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<any>,
    fagsak: Fagsak,
    behandling: Behandling,
  ) =>
  (data: VedtakKlageBrevData) => {
    const brevData = {
      ...data,
      behandlingUuid: behandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
    };
    return forhandsvisMelding(brevData).then(response => forhandsvisDokument(response));
  };

const getVedtakStatus = (behandlingsresultat?: Behandlingsresultat, aksjonspunkter: Aksjonspunkt[] = []) => {
  const harApentAksjonpunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  if (aksjonspunkter.length === 0 || harApentAksjonpunkt) {
    return VilkarUtfallType.IKKE_VURDERT;
  }

  const resultatTypeCode = behandlingsresultat?.type;
  if (
    resultatTypeCode === BehandlingResultatType.HENLAGT_KLAGE_TRUKKET ||
    resultatTypeCode === BehandlingResultatType.HENLAGT_FEILOPPRETTET
  ) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  if (
    resultatTypeCode === BehandlingResultatType.KLAGE_AVVIST ||
    resultatTypeCode === BehandlingResultatType.KLAGE_YTELSESVEDTAK_OPPHEVET
  ) {
    return VilkarUtfallType.IKKE_OPPFYLT;
  }
  return VilkarUtfallType.OPPFYLT;
};

const getLagringSideeffekter =
  (
    toggleFatterVedtakModal: (skalViseModal: boolean) => void,
    setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void,
  ) =>
  () => {
    setSkalOppdatereEtterBekreftelseAvAp(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
    return () => {
      toggleFatterVedtakModal(true);
    };
  };

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.FORESLA_VEDTAK,
  AksjonspunktCode.FATTER_VEDTAK,
  AksjonspunktCode.FORESLA_VEDTAK_MANUELT,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering: KlageVurdering;
};

interface OwnProps {
  fagsak: Fagsak;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
  opneSokeside: () => void;
}

const KlageresultatProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  setSkalOppdatereEtterBekreftelseAvAp,
  opneSokeside,
  ...props
}) => {
  const intl = useIntl();

  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const lagringSideEffekter = getLagringSideeffekter(toggleFatterVedtakModal, setSkalOppdatereEtterBekreftelseAvAp);

  const { startRequest: forhandsvisMelding } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.PREVIEW_MESSAGE,
  );
  const previewCallback = useCallback(
    lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon],
  );

  const { aksjonspunkt: aksjonspunkter } = props.behandling;

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.KLAGE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.ResultatKlage' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={standardData => getVedtakStatus(standardData.behandling.behandlingsresultat, aksjonspunkter)}
      lagringSideEffekter={lagringSideEffekter}
      hentSkalMarkeresSomAktiv={standardData =>
        getVedtakStatus(standardData.behandling.behandlingsresultat, aksjonspunkter) !== VilkarUtfallType.IKKE_VURDERT
      }
      renderPanel={data => (
        <>
          <FatterVedtakStatusModal
            visModal={visFatterVedtakModal}
            lukkModal={() => {
              toggleFatterVedtakModal(false);
              opneSokeside();
            }}
            tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.KlagenErFerdigbehandlet' })}
          />
          <VedtakKlageProsessIndex previewVedtakCallback={previewCallback} {...data} />
        </>
      )}
    />
  );
};

export default KlageresultatProsessStegInitPanel;
