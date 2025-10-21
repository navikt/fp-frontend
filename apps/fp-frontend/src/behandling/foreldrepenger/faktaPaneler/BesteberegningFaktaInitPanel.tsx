import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { BesteberegningFaktaIndex } from '@navikt/fp-fakta-besteberegning';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.UTGÅTT_5048, AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const BesteberegningFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);
  const { behandling } = useBehandlingDataContext();

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
