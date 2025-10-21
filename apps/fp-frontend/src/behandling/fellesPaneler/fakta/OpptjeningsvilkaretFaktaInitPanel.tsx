import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OpptjeningFaktaIndex } from '@navikt/fp-fakta-opptjening';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

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

  const api = useBehandlingApi(behandling);

  const { data: opptjening, isFetching } = useQuery(api.opptjeningOptions(behandling, skalPanelVisesIMeny));

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
