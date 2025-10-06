import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { BesteberegningFaktaIndex } from '@navikt/fp-fakta-besteberegning';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5048', '5062'];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BesteberegningFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);
  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);
  const { data: beregningsgrunnlag } = useQuery(api.beregningsgrunnlagOptions(behandling));
  const skalPanelVisesIMeny =
    beregningsgrunnlag?.ytelsesspesifiktGrunnlag?.ytelsetype === 'FP'
      ? !!beregningsgrunnlag.ytelsesspesifiktGrunnlag.besteberegninggrunnlag
      : false;

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.BESTEBEREGNING}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Besteberegning' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {beregningsgrunnlag ? (
        <BesteberegningFaktaIndex
          arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId}
          beregningsgrunnlag={beregningsgrunnlag}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
