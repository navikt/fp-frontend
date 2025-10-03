import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SimuleringProsessIndex } from '@navikt/fp-prosess-simulering';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { forhåndsvisTilbakekrevingMelding, harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessMenyContext } from '../../felles/prosess/ProsessMeny';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VURDER_FEILUTBETALING,
  AksjonspunktKode.KONTROLLER_STOR_ETTERBETALING_SØKER,
];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const SimuleringProsessStegInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);
  const { behandling, fagsak } = use(BehandlingDataContext);
  const { prosessPanelMenyData } = use(ProsessMenyContext);

  const api = useBehandlingApi(behandling);

  const { data: tilbakekrevingValg, isFetching } = useQuery(api.tilbakekrevingValgOptions(behandling));
  const { data: simuleringResultat } = useQuery(api.simuleringResultatOptions(behandling));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: { mottaker: string; fritekst: string }) =>
      forhåndsvisTilbakekrevingMelding({
        behandlingUuid: standardPanelProps.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
        varseltekst: values.fritekst,
      }),
    onSuccess: forhandsvisDokument,
  });

  const harVedtakspanel = prosessPanelMenyData.some(
    d => d.id === ProsessStegCode.VEDTAK && (d.status !== 'IKKE_VURDERT' || d.harÅpentAksjonspunkt),
  );

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.SIMULERING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' })}
      skalPanelVisesIMeny={harLenke(behandling, 'SIMULERING_RESULTAT') || !harVedtakspanel}
      overstyrtStatus={harLenke(behandling, 'SIMULERING_RESULTAT') ? 'OPPFYLT' : 'IKKE_VURDERT'}
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <SimuleringProsessIndex
          tilbakekrevingvalg={tilbakekrevingValg}
          simuleringResultat={simuleringResultat}
          previewFptilbakeCallback={forhåndsvis}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      )}
    </ProsessDefaultInitPanel>
  );
};
