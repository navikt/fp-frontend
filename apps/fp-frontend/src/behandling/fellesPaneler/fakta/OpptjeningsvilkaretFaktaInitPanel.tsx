import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OpptjeningFaktaIndex } from '@navikt/fp-fakta-opptjening';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useErFaktaPanelAktiv } from '../../felles/fakta/useFaktaMenyRegistrerer';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpptjeningsvilkaretFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const skalPanelVisesIMeny =
    behandling.vilkår.some(v => v.vilkarType === 'FP_VK_23') &&
    behandling.vilkår.some(v => v.vilkarType === 'FP_VK_2' && v.vilkarStatus === 'OPPFYLT');

  const erAktiv = useErFaktaPanelAktiv(
    FaktaPanelCode.OPPTJENINGSVILKARET,
    skalPanelVisesIMeny,
    standardPanelProps.harÅpentAksjonspunkt,
  );
  const skalHenteData = useSkalHenteData(FaktaPanelCode.OPPTJENINGSVILKARET, erAktiv, 'fakta');

  const api = getBehandlingApi(behandling);

  const { data: opptjening, isFetching } = useQuery(
    medPrioritet(api.opptjeningOptions(behandling, skalPanelVisesIMeny), skalHenteData),
  );

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OPPTJENINGSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Opptjening' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <OpptjeningFaktaIndex opptjening={opptjening} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
      )}
    </FaktaDefaultInitPanel>
  );
};
