import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OpptjeningFaktaIndex } from '@navikt/fp-fakta-opptjening';
import { AksjonspunktKode, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpptjeningsvilkaretFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const skalPanelVisesIMeny =
    behandling.vilkår.some(v => v.vilkarType === VilkarType.OPPTJENINGSVILKARET) &&
    behandling.vilkår.some(
      v => v.vilkarType === VilkarType.MEDLEMSKAPSVILKARET && v.vilkarStatus === VilkarUtfallType.OPPFYLT,
    );

  const api = useBehandlingApi(behandling);

  const { data: opptjening, isFetching } = useQuery(api.opptjeningOptions(behandling, skalPanelVisesIMeny));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OPPTJENINGSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Opptjening' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {!isFetching ? (
        <OpptjeningFaktaIndex opptjening={opptjening} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
