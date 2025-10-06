import { use, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { type VedtakKlageForhandsvisData, VedtakKlageProsessIndex } from '@navikt/fp-prosess-vedtak-klage';
import type { Aksjonspunkt, Behandlingsresultat, VilkarUtfallType } from '@navikt/fp-types';
import { erAksjonspunktÅpent } from '@navikt/fp-utils';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FORESLA_VEDTAK,
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
];

export const KlageresultatProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, setSkalOppdatereEtterBekreftelseAvAp } = use(BehandlingDataContext);

  const { aksjonspunkt: aksjonspunkter } = behandling;

  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const lagringSideEffekter = getLagringSideeffekter(toggleFatterVedtakModal, setSkalOppdatereEtterBekreftelseAvAp);
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const vedtakStatus = getVedtakStatus(behandling.behandlingsresultat, aksjonspunkter);

  const api = useBehandlingApi(behandling);

  const navigate = useNavigate();

  const { data: klageVurdering } = useQuery(api.klage.klageVurderingOptions(behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: VedtakKlageForhandsvisData) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <>
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal}
        lukkModal={() => {
          toggleFatterVedtakModal(false);
          void navigate('/');
        }}
        tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.KlagenErFerdigbehandlet' })}
      />
      <ProsessDefaultInitPanel
        skalPanelVisesIMeny
        prosessPanelKode={ProsessStegCode.KLAGE_RESULTAT}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.ResultatKlage' })}
        standardPanelProps={standardPanelProps}
        overstyrtStatus={vedtakStatus}
        skalMarkeresSomAktiv={vedtakStatus !== 'IKKE_VURDERT'}
      >
        {klageVurdering ? (
          <VedtakKlageProsessIndex klageVurdering={klageVurdering} previewVedtakCallback={forhåndsvis} />
        ) : (
          <LoadingPanel />
        )}
      </ProsessDefaultInitPanel>
    </>
  );
};

const getVedtakStatus = (
  behandlingsresultat?: Behandlingsresultat,
  aksjonspunkter: Aksjonspunkt[] = [],
): VilkarUtfallType => {
  const harÅpentAksjonspunkt = aksjonspunkter.some(erAksjonspunktÅpent);
  if (aksjonspunkter.length === 0 || harÅpentAksjonspunkt) {
    return 'IKKE_VURDERT';
  }

  const resultatTypeCode = behandlingsresultat?.type;
  if (resultatTypeCode === 'HENLAGT_KLAGE_TRUKKET' || resultatTypeCode === 'HENLAGT_FEILOPPRETTET') {
    return 'IKKE_VURDERT';
  }
  if (resultatTypeCode === 'KLAGE_AVVIST' || resultatTypeCode === 'KLAGE_YTELSESVEDTAK_OPPHEVET') {
    return 'IKKE_OPPFYLT';
  }
  return 'OPPFYLT';
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
