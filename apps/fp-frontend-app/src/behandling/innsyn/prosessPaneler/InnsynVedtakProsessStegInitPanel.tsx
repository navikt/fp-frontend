import { useState } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingResultatType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakInnsynProsessIndex } from '@navikt/fp-prosess-vedtak-innsyn';
import { Behandling, Fagsak, ForhåndsvisMeldingParams } from '@navikt/fp-types';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

interface Props {
  fagsak: Fagsak;
  opneSokeside: () => void;
  setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void;
}

export const InnsynVedtakProsessStegInitPanel = ({
  fagsak,
  opneSokeside,
  setSkalOppdatereEtterBekreftelseAvAp,
  ...props
}: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(
    toggleIverksetterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideeffekterCallback);
  const api = useBehandlingApi(props.behandling);

  const { data: innsynDokumenter } = useQuery(api.innsyn.innsynDokumenterOptions(fagsak, props.behandling));
  const { data: innsyn } = useQuery(api.innsyn.innsynOptions(props.behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: props.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={getVedtakStatus(props.behandling)}
      hentSkalMarkeresSomAktiv={getVedtakStatus(props.behandling) !== VilkarUtfallType.IKKE_VURDERT}
    >
      <>
        <IverksetterVedtakStatusModal
          visModal={visIverksetterVedtakModal}
          lukkModal={() => {
            toggleIverksetterVedtakModal(false);
            opneSokeside();
          }}
          behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
        />
        {innsyn ? (
          <VedtakInnsynProsessIndex
            saksnummer={fagsak.saksnummer}
            innsyn={innsyn}
            alleDokumenter={innsynDokumenter}
            previewCallback={forhåndsvis}
            {...standardPanelProps}
          />
        ) : (
          <LoadingPanel />
        )}
      </>
    </ProsessDefaultInitPanel>
  );
};

const getVedtakStatus = (behandling: Behandling): string => {
  const { aksjonspunkt, behandlingsresultat } = behandling;
  const harApentAksjonpunkt = aksjonspunkt.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  if (aksjonspunkt.length === 0 || harApentAksjonpunkt) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  return behandlingsresultat?.type === BehandlingResultatType.INNSYN_INNVILGET ||
    behandlingsresultat?.type === BehandlingResultatType.INNSYN_DELVIS_INNVILGET
    ? VilkarUtfallType.OPPFYLT
    : VilkarUtfallType.IKKE_OPPFYLT;
};

const getLagringSideeffekter =
  (
    toggleIverksetterVedtakModal: (skalViseModal: boolean) => void,
    setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void,
  ) =>
  () => {
    setSkalOppdatereEtterBekreftelseAvAp(false);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
    return () => {
      toggleIverksetterVedtakModal(true);
    };
  };

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FORESLA_VEDTAK];
