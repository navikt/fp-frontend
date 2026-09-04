import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { TilretteleggingFaktaIndex } from '@navikt/fp-fakta-tilrettelegging';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { useFaktaPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_SVP_TILRETTELEGGING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FodselOgTilretteleggingFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const prioriter = useFaktaPanelPrioritet({
    panelKode: FaktaPanelCode.FODSELTILRETTELEGGING,
    skalVisesIMeny: true,
    harÅpentAksjonspunkt: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: arbeidOgInntekt } = useQuery(prioriter(api.arbeidOgInntektOptions(behandling)));
  const { data: svangerskapspengerTilrettelegging } = useQuery(
    prioriter(api.svp.svangerskapspengerTilretteleggingOptions(behandling)),
  );

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.FODSELTILRETTELEGGING}
      faktaPanelMenyTekst={useIntl().formatMessage({
        id: 'FaktaInitPanel.Title.FodselOgTilrettelegging',
      })}
      skalPanelVisesIMeny
    >
      {svangerskapspengerTilrettelegging ? (
        <TilretteleggingFaktaIndex
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          arbeidOgInntekt={arbeidOgInntekt}
          svangerskapspengerTilrettelegging={svangerskapspengerTilrettelegging}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
