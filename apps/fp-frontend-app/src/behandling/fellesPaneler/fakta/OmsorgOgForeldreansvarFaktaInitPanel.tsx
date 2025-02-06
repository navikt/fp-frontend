import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgOgForeldreansvarFaktaIndex } from '@navikt/fp-fakta-omsorg-og-foreldreansvar';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Personoversikt } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.OMSORGSOVERTAKELSE, AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR];

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgOgForeldreansvarFaktaInitPanel = ({ personoversikt, ...props }: Props & FaktaPanelInitProps) => {
  const intl = useIntl();
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling));
  const { data: inntektArbeidYtelse } = useQuery(api.inntektArbeidYtelseOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORGSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.OmsorgOgForeldreansvar' })}
      skalPanelVisesIMeny={AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, behandling.aksjonspunkt))}
    >
      {søknad && familiehendelse && inntektArbeidYtelse ? (
        <OmsorgOgForeldreansvarFaktaIndex
          soknad={søknad}
          familiehendelse={familiehendelse}
          inntektArbeidYtelse={inntektArbeidYtelse}
          personoversikt={personoversikt}
          submittable={standardPanelProps.submittable}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
