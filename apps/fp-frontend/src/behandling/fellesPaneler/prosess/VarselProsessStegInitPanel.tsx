import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  type VarselOmRevurderingForhåndsvisData,
  VarselOmRevurderingProsessIndex,
} from '@navikt/fp-prosess-varsel-om-revurdering';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { forhåndsvisMelding } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

const getLagringSideeffekter =
  (setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void, opneSokeside: () => void) =>
  (aksjonspunkter: ProsessAksjonspunkt[]) => {
    const skalÅpneSøkeside =
      aksjonspunkter.length > 0 && 'sendVarsel' in aksjonspunkter[0]! && aksjonspunkter[0].sendVarsel;

    setSkalOppdatereEtterBekreftelseAvAp(!skalÅpneSøkeside);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt
    return () => {
      if (skalÅpneSøkeside) {
        opneSokeside();
      }
    };
  };

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VARSEL_REVURDERING_MANUELL, AksjonspunktKode.UTGÅTT_5025];

export const VarselProsessStegInitPanel = () => {
  const intl = useIntl();

  const { setSkalOppdatereEtterBekreftelseAvAp, behandling } = useBehandlingDataContext();

  const navigate = useNavigate();

  const lagringSideEffekter = getLagringSideeffekter(setSkalOppdatereEtterBekreftelseAvAp, () => {
    void navigate('/');
  });
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER, [], lagringSideEffekter);

  const skalPanelVisesIMeny = skalViseProsessPanel(standardPanelProps.aksjonspunkterForPanel);

  const { mutate: forhåndsvis } = useMutation({
    mutationFn: (values: VarselOmRevurderingForhåndsvisData) =>
      forhåndsvisMelding({
        ...values,
        behandlingUuid: behandling.uuid,
      }),
    onSuccess: forhandsvisDokument,
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.VARSEL}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.CheckVarselRevurdering' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      <VarselOmRevurderingProsessIndex previewCallback={forhåndsvis} />
    </ProsessDefaultInitPanel>
  );
};
