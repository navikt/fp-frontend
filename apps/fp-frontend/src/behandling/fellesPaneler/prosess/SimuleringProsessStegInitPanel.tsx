import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { SimuleringProsessIndex } from '@navikt/fp-prosess-simulering';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { forhåndsvisTilbakekrevingMelding, getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessMenyContext } from '../../felles/prosess/ProsessMeny';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
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
  const { behandling, fagsak } = useBehandlingDataContext();
  const { prosessPanelMenyData } = use(ProsessMenyContext);

  const harVedtakspanel = prosessPanelMenyData.some(
    d => d.id === ProsessStegCode.VEDTAK && (d.status !== 'IKKE_VURDERT' || d.harÅpentAksjonspunkt),
  );
  const skalPanelVisesIMeny = harLenke(behandling, 'SIMULERING_RESULTAT') || !harVedtakspanel;
  const erAktiv = useErProsessPanelAktiv(
    ProsessStegCode.SIMULERING,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(ProsessStegCode.SIMULERING, erAktiv, 'prosess');

  const api = getBehandlingApi(behandling);

  const { data: tilbakekrevingValg, isFetching } = useQuery(
    medPrioritet(api.tilbakekrevingValgOptions(behandling), skalHenteData),
  );
  const { data: simuleringResultat } = useQuery(medPrioritet(api.simuleringResultatOptions(behandling), skalHenteData));

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: { mottaker: string; fritekst: string }) =>
      forhåndsvisTilbakekrevingMelding({
        behandlingUuid: standardPanelProps.behandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
        varseltekst: values.fritekst,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.SIMULERING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Avregning' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
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
