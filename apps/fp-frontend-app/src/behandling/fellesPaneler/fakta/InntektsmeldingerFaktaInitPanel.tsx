import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidsgiverOpplysningerPerId, Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

type Props = {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  behandling: Behandling;
  alleBehandlinger: BehandlingAppKontekst[];
  fagsak: Fagsak;
};

export const InntektsmeldingerFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  fagsak,
  alleBehandlinger,
  ...props
}: FaktaPanelInitProps & Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps();

  const api = useBehandlingApi(props.behandling);

  const { data: inntektsmeldinger } = useQuery(api.inntektsmeldingerOptions(props.behandling));

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
          behandling={props.behandling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
