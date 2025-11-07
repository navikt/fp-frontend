import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { MedlemskapFaktaIndex } from '@navikt/fp-fakta-medlemskap';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = [
  AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
  AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,

  AksjonspunktKode.UTGÅTT_5019,
  AksjonspunktKode.UTGÅTT_5020,
  AksjonspunktKode.UTGÅTT_5021,
  AksjonspunktKode.UTGÅTT_5023,
  AksjonspunktKode.UTGÅTT_5053,
  AksjonspunktKode.UTGÅTT_6012,
];

export const MedlemskapsvilkaretFaktaInitPanel = () => {
  const intl = useIntl();

  const { behandling } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: medlemskap } = useQuery(api.medlemskapOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.MEDLEMSKAPSVILKARET}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Medlemskap' })}
      skalPanelVisesIMeny={behandling.harSøknad}
    >
      {medlemskap ? <MedlemskapFaktaIndex medlemskap={medlemskap} /> : <LoadingPanel />}
    </FaktaDefaultInitPanel>
  );
};
