import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

type Props = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const InntektsmeldingerFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps();

  const api = useBehandlingApi(behandling);

  const { data: inntektsmeldinger } = useQuery(api.inntektsmeldingerOptions(behandling));

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
