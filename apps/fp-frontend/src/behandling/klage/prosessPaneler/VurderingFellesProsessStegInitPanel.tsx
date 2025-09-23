import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, KlageVurdering as KlageVurderingKodeverk } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  type AksjonspunktVerdier,
  type KlagevurderingForhåndsvisData,
  KlagevurderingProsessIndex,
} from '@navikt/fp-prosess-klagevurdering';
import type { Aksjonspunkt } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { KlageBehandlingModal } from '../modaler/KlageBehandlingModal';

interface Props {
  aksjonspunktKoder?: Aksjonspunkt['definisjon'][];
  prosessPanelKode: ProsessStegCode;
  prosessPanelMenyTekst: string;
}

export const VurderingFellesProsessStegInitPanel = ({
  aksjonspunktKoder,
  prosessPanelKode,
  prosessPanelMenyTekst,
}: Props) => {
  const [visModalKlageBehandling, toggleKlageModal] = useState(false);

  const {
    behandling,
    hentOgSettBehandling,
    setSkalOppdatereEtterBekreftelseAvAp,
    oppdaterProsessStegOgFaktaPanelIUrl,
  } = use(BehandlingDataContext);

  const lagringSideEffekter = getLagringSideeffekter(
    toggleKlageModal,
    setSkalOppdatereEtterBekreftelseAvAp,
    oppdaterProsessStegOgFaktaPanelIUrl,
  );

  const standardPanelProps = useStandardProsessPanelProps(aksjonspunktKoder, [], lagringSideEffekter);

  const api = useBehandlingApi(behandling);

  const navigate = useNavigate();

  const { data: klageVurdering } = useQuery(api.klage.klageVurderingOptions(behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: KlagevurderingForhåndsvisData) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
      }),
    onSuccess: forhandsvisDokument,
  });

  const { mutate: lagreKlageVurdering } = useMutation({
    mutationFn: (aksjonspunktModel: AksjonspunktVerdier) =>
      api.klage.mellomlagreKlageVurdering({
        behandlingUuid: behandling.uuid,
        ...aksjonspunktModel,
      }),
    onSuccess: () => hentOgSettBehandling(),
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={prosessPanelKode}
      prosessPanelMenyTekst={prosessPanelMenyTekst}
      skalPanelVisesIMeny
    >
      <>
        <KlageBehandlingModal
          visModal={visModalKlageBehandling}
          lukkModal={() => {
            toggleKlageModal(false);
            void navigate('/');
          }}
        />
        {klageVurdering ? (
          <KlagevurderingProsessIndex
            klageVurdering={klageVurdering}
            previewCallback={forhåndsvis}
            saveKlage={lagreKlageVurdering}
          />
        ) : (
          <LoadingPanel />
        )}
      </>
    </ProsessDefaultInitPanel>
  );
};

const getLagringSideeffekter =
  (
    toggleKlageModal: (skalViseModal: boolean) => void,
    setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void,
    oppdaterProsessStegOgFaktaPanelIUrl?: (punktnavn?: string, faktanavn?: string) => void,
  ) =>
  (aksjonspunkter: ProsessAksjonspunkt[]) => {
    const skalByttTilKlageinstans = aksjonspunkter.some(
      apValue =>
        apValue.kode === AksjonspunktKode.BEHANDLE_KLAGE_NFP &&
        'klageVurdering' in apValue &&
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
