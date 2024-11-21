import React, { useCallback, useState } from 'react';

import { KlageVurdering as KlageVurderingKodeverk, AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  KlagevurderingProsessIndex,
  AksjonspunktVerdier,
  KlageVurderingBrevData,
} from '@navikt/fp-prosess-klagevurdering';
import { Behandling, Fagsak, ForhåndsvisMeldingParams, KlageVurdering } from '@navikt/fp-types';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { forhandsvisDokument } from '@navikt/ft-utils';

import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { KlageBehandlingModal } from '../modaler/KlageBehandlingModal';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const lagForhandsvisCallback =
  (
    forhandsvisMelding: (params?: ForhåndsvisMeldingParams, keepData?: boolean) => Promise<any>,
    fagsak: Fagsak,
    behandling: Behandling,
  ) =>
  (data: KlageVurderingBrevData) => {
    const brevData = {
      ...data,
      behandlingUuid: behandling.uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
    };
    return forhandsvisMelding(brevData).then(response => forhandsvisDokument(response));
  };

const lagKlageCallback =
  (
    lagreKlageVurdering: (params?: any, keepData?: boolean) => Promise<any>,
    behandling: Behandling,
    hentOgSettBehandling: (keepData?: boolean) => void,
  ) =>
  (aksjonspunktModel: AksjonspunktVerdier) => {
    const data = {
      behandlingUuid: behandling.uuid,
      ...aksjonspunktModel,
    };

    return lagreKlageVurdering(data).then(() => hentOgSettBehandling(true));
  };

const getLagringSideeffekter =
  (
    toggleKlageModal: (skalViseModal: boolean) => void,
    setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void,
    oppdaterProsessStegOgFaktaPanelIUrl?: (punktnavn?: string, faktanavn?: string) => void,
  ) =>
  (aksjonspunktModels: { kode: string; klageVurdering?: string }[]) => {
    const skalByttTilKlageinstans = aksjonspunktModels.some(
      apValue =>
        apValue.kode === AksjonspunktKode.BEHANDLE_KLAGE_NFP &&
        apValue.klageVurdering === KlageVurderingKodeverk.STADFESTE_YTELSESVEDTAK,
    );

    if (skalByttTilKlageinstans) {
      setSkalOppdatereEtterBekreftelseAvAp(false);
    }

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
    return () => {
      if (skalByttTilKlageinstans) {
        toggleKlageModal(true);
      } else if (oppdaterProsessStegOgFaktaPanelIUrl) {
        oppdaterProsessStegOgFaktaPanelIUrl('default', 'default');
      }
    };
  };

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.KLAGE_VURDERING];
type EndepunktPanelData = {
  klageVurdering: KlageVurdering;
};

interface Props {
  fagsak: Fagsak;
  setSkalOppdatereEtterBekreftelseAvAp?: (skalHenteFagsak: boolean) => void;
  opneSokeside?: () => void;
  oppdaterProsessStegOgFaktaPanelIUrl?: (punktnavn?: string, faktanavn?: string) => void;
  aksjonspunktKoder?: string[];
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
  hentOgSettBehandling: (keepData?: boolean) => void;
}

export const VurderingFellesProsessStegInitPanel = ({
  fagsak,
  setSkalOppdatereEtterBekreftelseAvAp,
  opneSokeside,
  oppdaterProsessStegOgFaktaPanelIUrl,
  aksjonspunktKoder,
  prosessPanelKode,
  prosessPanelMenyTekst,
  hentOgSettBehandling,
  ...props
}: Props & ProsessPanelInitProps) => {
  const [visModalKlageBehandling, toggleKlageModal] = useState(false);

  const standardPanelProps = useStandardProsessPanelProps();

  const lagringSideEffekter = setSkalOppdatereEtterBekreftelseAvAp
    ? getLagringSideeffekter(
        toggleKlageModal,
        setSkalOppdatereEtterBekreftelseAvAp,
        oppdaterProsessStegOgFaktaPanelIUrl,
      )
    : undefined;

  const { startRequest: forhandsvisMelding } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.PREVIEW_MESSAGE,
  );
  const previewCallback = useCallback(
    lagForhandsvisCallback(forhandsvisMelding, fagsak, standardPanelProps.behandling),
    [standardPanelProps.behandling.versjon],
  );

  const { startRequest: lagreKlageVurdering } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_KLAGE_VURDERING,
  );
  const lagreKlage = useCallback(
    lagKlageCallback(lagreKlageVurdering, standardPanelProps.behandling, hentOgSettBehandling),
    [standardPanelProps.behandling.versjon],
  );

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={aksjonspunktKoder}
      prosessPanelKode={prosessPanelKode}
      prosessPanelMenyTekst={prosessPanelMenyTekst}
      skalPanelVisesIMeny={() => true}
      lagringSideEffekter={lagringSideEffekter}
      renderPanel={data => (
        <>
          <KlageBehandlingModal
            visModal={visModalKlageBehandling}
            lukkModal={() => {
              toggleKlageModal(false);
              if (opneSokeside) {
                opneSokeside();
              }
            }}
          />
          <KlagevurderingProsessIndex previewCallback={previewCallback} saveKlage={lagreKlage} {...data} />
        </>
      )}
    />
  );
};
