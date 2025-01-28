import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { MedlemskapFaktaIndex } from '@navikt/fp-fakta-medlemskap';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = [
  AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
];

export const MedlemskapsvilkaretFaktaInitPanel = (props: FaktaPanelInitProps) => {
  const intl = useIntl();

  const { behandling, fagsak } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: medlemskap } = useQuery(api.medlemskapOptions(behandling));
  const { data: søknad } = useQuery(api.søknadOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Medlemskap' })}
      skalPanelVisesIMeny={behandling.harSøknad}
    >
      {medlemskap && søknad ? (
        <MedlemskapFaktaIndex medlemskap={medlemskap} soknad={søknad} fagsak={fagsak} {...standardPanelProps} />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
