import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { useFaktaPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';

type Props = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const InntektsmeldingerFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps();

  const prioriter = useFaktaPanelPrioritet({
    panelKode: FaktaPanelCode.INNTEKTSMELDINGER,
    skalVisesIMeny: true,
    harÅpentAksjonspunkt: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: inntektsmeldinger } = useQuery(prioriter(api.inntektsmeldingerOptions(behandling)));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.INNTEKTSMELDINGER}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Inntektsmelding' })}
      skalPanelVisesIMeny
    >
      {inntektsmeldinger ? (
        <InntektsmeldingFaktaIndex
          inntektsmeldinger={inntektsmeldinger}
          alleBehandlinger={alleBehandlinger}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
