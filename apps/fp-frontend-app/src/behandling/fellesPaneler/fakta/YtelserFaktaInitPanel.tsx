import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { YtelserFaktaIndex } from '@navikt/fp-fakta-ytelser';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

export const YtelserFaktaInitPanel = (props: FaktaPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps();

  const api = useBehandlingApi(props.behandling);

  const { data: inntektArbeidYtelse } = useQuery(api.inntektArbeidYtelseOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.YTELSER}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Ytelser' })}
      skalPanelVisesIMeny
    >
      {inntektArbeidYtelse ? (
        <YtelserFaktaIndex inntektArbeidYtelse={inntektArbeidYtelse} {...standardPanelProps} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
