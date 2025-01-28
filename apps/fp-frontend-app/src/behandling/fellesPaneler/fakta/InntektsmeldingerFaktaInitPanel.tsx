import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

type Props = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

export const InntektsmeldingerFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: FaktaPanelInitProps & Props) => {
  const intl = useIntl();

  const { behandling, alleBehandlinger, fagsak } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps();

  const api = useBehandlingApi(behandling);

  const { data: inntektsmeldinger } = useQuery(api.inntektsmeldingerOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.INNTEKTSMELDINGER}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Inntektsmelding' })}
      skalPanelVisesIMeny
    >
      {inntektsmeldinger ? (
        <InntektsmeldingFaktaIndex
          {...standardPanelProps}
          inntektsmeldinger={inntektsmeldinger}
          fagsak={fagsak}
          alleBehandlinger={alleBehandlinger}
          behandling={behandling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
