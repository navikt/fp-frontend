import { use } from 'react';
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
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { skalViseProsessPanel } from '../../felles/prosess/skalViseProsessPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const getLagringSideeffekter =
  (setSkalOppdatereEtterBekreftelseAvAp: (skalHenteFagsak: boolean) => void, opneSokeside: () => void) =>
  (aksjonspunkter: ProsessAksjonspunkt[]) => {
    const skalÅpneSøkeside =
      aksjonspunkter.length > 0 && 'sendVarsel' in aksjonspunkter[0] && aksjonspunkter[0].sendVarsel;

    setSkalOppdatereEtterBekreftelseAvAp(!skalÅpneSøkeside);

    // Returner funksjon som blir kjørt etter lagring av aksjonspunkt
    return () => {
      if (skalÅpneSøkeside) {
        opneSokeside();
      }
    };
  };

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.VARSEL_REVURDERING_MANUELL,
  AksjonspunktKode.VARSEL_REVURDERING_ETTERKONTROLL,
];

export const VarselProsessStegInitPanel = () => {
  const intl = useIntl();

  const { setSkalOppdatereEtterBekreftelseAvAp, behandling } = use(BehandlingDataContext);

  const navigate = useNavigate();

  const lagringSideEffekter = getLagringSideeffekter(setSkalOppdatereEtterBekreftelseAvAp, () => {
    navigate('/');
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
