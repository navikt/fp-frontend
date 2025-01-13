import { useIntl } from 'react-intl';

import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SimuleringProsessIndex } from '@navikt/fp-prosess-simulering';
import { ArbeidsgiverOpplysningerPerId, Fagsak } from '@navikt/fp-types';

import { forhåndsvisTilbakekrevingMelding, harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { ProsessPanelMenyData } from '../../felles/typer/prosessPanelMenyData';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FEILUTBETALING,
  AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
];

interface Props {
  menyData: ProsessPanelMenyData[];
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const SimuleringProsessStegInitPanel = ({
  menyData,
  fagsak,
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & ProsessPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: tilbakekrevingValg } = useQuery(api.tilbakekrevingValgOptions(props.behandling));
  const { data: simuleringResultat } = useQuery(api.simuleringResultatOptions(props.behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: { mottaker: string; fritekst: string }) =>
      forhåndsvisTilbakekrevingMelding({
        behandlingUuid: standardPanelProps.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
        varseltekst: values.fritekst,
      }),
    onSuccess: forhandsvisDokument,
  });

  const harVedtakspanel = menyData.some(
    d => d.id === ProsessStegCode.VEDTAK && (d.status !== VilkarUtfallType.IKKE_VURDERT || d.harApentAksjonspunkt),
  );

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.SIMULERING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' })}
      skalPanelVisesIMeny={harLenke(props.behandling, 'SIMULERING_RESULTAT') || !harVedtakspanel}
      hentOverstyrtStatus={
        harLenke(props.behandling, 'SIMULERING_RESULTAT') ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT
      }
    >
      <SimuleringProsessIndex
        tilbakekrevingvalg={tilbakekrevingValg}
        simuleringResultat={simuleringResultat}
        previewFptilbakeCallback={forhåndsvis}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...standardPanelProps}
      />
    </ProsessDefaultInitPanel>
  );
};
