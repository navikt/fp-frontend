import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { MedlemskapFaktaIndex } from '@navikt/fp-fakta-medlemskap';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5101', '5102'];

export const MedlemskapsvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: medlemskap } = useQuery(api.medlemskapOptions(behandling));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Medlemskap' })}
      skalPanelVisesIMeny={behandling.harSøknad}
    >
      {medlemskap && søknad ? <MedlemskapFaktaIndex medlemskap={medlemskap} soknad={søknad} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
