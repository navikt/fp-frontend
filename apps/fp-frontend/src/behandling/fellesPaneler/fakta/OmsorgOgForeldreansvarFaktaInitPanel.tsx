import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { OmsorgOgForeldreansvarFaktaIndex } from '@navikt/fp-fakta-omsorg-og-foreldreansvar';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { Personoversikt } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.OMSORGSOVERTAKELSE, AksjonspunktKode.AVKLAR_VILKAR_FOR_FORELDREANSVAR];

interface Props {
  personoversikt: Personoversikt;
}

export const OmsorgOgForeldreansvarFaktaInitPanel = ({ personoversikt }: Props) => {
  const intl = useIntl();
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const skalPanelVisesIMeny = AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, behandling.aksjonspunkt));

  const api = useBehandlingApi(behandling);

  const { data: søknad } = useQuery(api.søknadOptions(behandling));
  const { data: familiehendelse } = useQuery(api.familiehendelseOptions(behandling, skalPanelVisesIMeny));
  const { data: inntektArbeidYtelse } = useQuery(api.inntektArbeidYtelseOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.OMSORGSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.OmsorgOgForeldreansvar' })}
      skalPanelVisesIMeny={skalPanelVisesIMeny}
    >
      {søknad && familiehendelse?.adopsjon && inntektArbeidYtelse ? (
        <OmsorgOgForeldreansvarFaktaIndex
          søknad={søknad}
          adopsjon={familiehendelse.adopsjon}
          innvilgetRelatertTilgrensendeYtelserForAnnenForelder={
            inntektArbeidYtelse.innvilgetRelatertTilgrensendeYtelserForAnnenForelder
          }
          personoversikt={personoversikt}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
