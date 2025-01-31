import { use, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingResultatType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { VedtakKlageProsessIndex } from '@navikt/fp-prosess-vedtak-klage';
import { Aksjonspunkt, Behandlingsresultat, ForhåndsvisMeldingParams } from '@navikt/fp-types';

import { forhåndsvisMelding, useBehandlingApi } from '../../../data/behandlingApi';
import { FatterVedtakStatusModal } from '../../felles/modaler/vedtak/FatterVedtakStatusModal';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FORESLA_VEDTAK,
  AksjonspunktKode.FATTER_VEDTAK,
  AksjonspunktKode.FORESLA_VEDTAK_MANUELT,
];

export const KlageresultatProsessStegInitPanel = (props: ProsessPanelInitProps) => {
  const intl = useIntl();

  const { behandling, fagsak, setSkalOppdatereEtterBekreftelseAvAp } = use(BehandlingDataContext);

  const { aksjonspunkt: aksjonspunkter } = behandling;

  const [visFatterVedtakModal, toggleFatterVedtakModal] = useState(false);

  const lagringSideEffekter = getLagringSideeffekter(toggleFatterVedtakModal, setSkalOppdatereEtterBekreftelseAvAp);
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const vedtakStatus = getVedtakStatus(behandling.behandlingsresultat, aksjonspunkter);

  const api = useBehandlingApi(behandling);

  const navigate = useNavigate();

  const { data: klageVurdering } = useQuery(api.klage.klageVurderingOptions(behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: ForhåndsvisMeldingParams) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <>
      <FatterVedtakStatusModal
        visModal={visFatterVedtakModal}
        lukkModal={() => {
          toggleFatterVedtakModal(false);
          navigate('/');
        }}
        tekst={intl.formatMessage({ id: 'FatterVedtakStatusModal.KlagenErFerdigbehandlet' })}
      />
      <ProsessDefaultInitPanel
        {...props}
        skalPanelVisesIMeny
        prosessPanelKode={ProsessStegCode.KLAGE_RESULTAT}
        prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.ResultatKlage' })}
        standardPanelProps={standardPanelProps}
        hentOverstyrtStatus={vedtakStatus}
        hentSkalMarkeresSomAktiv={vedtakStatus !== VilkarUtfallType.IKKE_VURDERT}
      >
        {klageVurdering ? (
          <VedtakKlageProsessIndex
            klageVurdering={klageVurdering}
            previewVedtakCallback={forhåndsvis}
            {...standardPanelProps}
          />
        ) : (
          <LoadingPanel />
        )}
      </ProsessDefaultInitPanel>
    </>
  );
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
