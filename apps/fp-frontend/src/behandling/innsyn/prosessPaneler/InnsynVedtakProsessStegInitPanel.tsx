import { use, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { type VedtakInnsynForhandsvisData, VedtakInnsynProsessIndex } from '@navikt/fp-prosess-vedtak-innsyn';
import type { Behandling, VilkarUtfallType } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { IverksetterVedtakStatusModal } from '../../felles/modaler/vedtak/IverksetterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

export const InnsynVedtakProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, setSkalOppdatereEtterBekreftelseAvAp } = use(BehandlingDataContext);

  const [visIverksetterVedtakModal, toggleIverksetterVedtakModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(
    toggleIverksetterVedtakModal,
    setSkalOppdatereEtterBekreftelseAvAp,
  );

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideeffekterCallback);
  const api = useBehandlingApi(behandling);

  const { data: innsynDokumenter } = useQuery(api.innsyn.innsynDokumenterOptions(behandling));
  const { data: innsyn } = useQuery(api.innsyn.innsynOptions(behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: VedtakInnsynForhandsvisData) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
      }),
    onSuccess: forhandsvisDokument,
  });

  const navigate = useNavigate();

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VEDTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Vedtak' })}
      skalPanelVisesIMeny
      overstyrtStatus={getVedtakStatus(behandling)}
      skalMarkeresSomAktiv={getVedtakStatus(behandling) !== 'IKKE_VURDERT'}
    >
      <>
        <IverksetterVedtakStatusModal
          visModal={visIverksetterVedtakModal}
          lukkModal={() => {
            toggleIverksetterVedtakModal(false);
            void navigate('/');
          }}
          behandlingsresultat={standardPanelProps.behandling.behandlingsresultat}
        />
        {innsyn ? (
          <VedtakInnsynProsessIndex innsyn={innsyn} alleDokumenter={innsynDokumenter} previewCallback={forhåndsvis} />
        ) : (
          <LoadingPanel />
        )}
      </>
    </ProsessDefaultInitPanel>
  );
};

const getVedtakStatus = (behandling: Behandling): VilkarUtfallType => {
  const { aksjonspunkt, behandlingsresultat } = behandling;
  const harÅpentAksjonspunkt = aksjonspunkt.some(erAksjonspunktÅpent);
  if (aksjonspunkt.length === 0 || harÅpentAksjonspunkt) {
    return 'IKKE_VURDERT';
  }
  return behandlingsresultat?.type === 'INNSYN_INNVILGET' || behandlingsresultat?.type === 'INNSYN_DELVIS_INNVILGET'
    ? 'OPPFYLT'
    : 'IKKE_OPPFYLT';
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
