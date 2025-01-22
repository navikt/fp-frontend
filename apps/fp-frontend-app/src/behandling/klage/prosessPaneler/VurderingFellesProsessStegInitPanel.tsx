import { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, KlageVurdering as KlageVurderingKodeverk } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AksjonspunktVerdier, KlagevurderingProsessIndex } from '@navikt/fp-prosess-klagevurdering';
import { Fagsak, ForhåndsvisMeldingParams } from '@navikt/fp-types';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { KlageBehandlingModal } from '../modaler/KlageBehandlingModal';

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

  const lagringSideEffekter = setSkalOppdatereEtterBekreftelseAvAp
    ? getLagringSideeffekter(
        toggleKlageModal,
        setSkalOppdatereEtterBekreftelseAvAp,
        oppdaterProsessStegOgFaktaPanelIUrl,
      )
    : undefined;

  const standardPanelProps = useStandardProsessPanelProps(aksjonspunktKoder, [], lagringSideEffekter);

  const api = useBehandlingApi(props.behandling);

  const { data: klageVurdering } = useQuery(api.klage.klageVurderingOptions(props.behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: props.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  const { mutate: lagreKlageVurdering } = useMutation({
    mutationFn: (aksjonspunktModel: AksjonspunktVerdier) =>
      api.klage.mellomlagreKlageVurdering({
        behandlingUuid: props.behandling.uuid,
        ...aksjonspunktModel,
      }),
    onSuccess: () => hentOgSettBehandling(),
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
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
            if (opneSokeside) {
              opneSokeside();
            }
          }}
        />
        {klageVurdering ? (
          <KlagevurderingProsessIndex
            klageVurdering={klageVurdering}
            previewCallback={forhåndsvis}
            saveKlage={lagreKlageVurdering}
            {...standardPanelProps}
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
