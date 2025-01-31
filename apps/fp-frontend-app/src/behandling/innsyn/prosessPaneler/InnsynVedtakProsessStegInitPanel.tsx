import { use, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingResultatType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakInnsynProsessIndex } from '@navikt/fp-prosess-vedtak-innsyn';
import { Behandling, ForhåndsvisMeldingParams } from '@navikt/fp-types';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

export const InnsynVedtakProsessStegInitPanel = (props: ProsessPanelInitProps) => {
  const intl = useIntl();

  const { behandling, fagsak, setSkalOppdatereEtterBekreftelseAvAp } = use(BehandlingDataContext);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(
    toggleIverksetterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideeffekterCallback);
  const api = useBehandlingApi(behandling);

  const { data: innsynDokumenter } = useQuery(api.innsyn.innsynDokumenterOptions(fagsak, behandling));
  const { data: innsyn } = useQuery(api.innsyn.innsynOptions(behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  const navigate = useNavigate();

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={getVedtakStatus(behandling)}
      hentSkalMarkeresSomAktiv={getVedtakStatus(behandling) !== VilkarUtfallType.IKKE_VURDERT}
    >
      <>
        <IverksetterVedtakStatusModal
          visModal={visIverksetterVedtakModal}
          lukkModal={() => {
            toggleIverksetterVedtakModal(false);
            navigate('/');
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
