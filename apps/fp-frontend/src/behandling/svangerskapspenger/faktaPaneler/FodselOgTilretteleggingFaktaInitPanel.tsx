import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { TilretteleggingFaktaIndex } from '@navikt/fp-fakta-tilrettelegging';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import { harAksjonspunkt } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5091'];

const OVERSTYRING_AP_CODES: AksjonspunktKode[] = ['6045'];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const FodselOgTilretteleggingFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: arbeidOgInntekt } = useQuery(api.arbeidOgInntektOptions(behandling));
  const { data: svangerskapspengerTilrettelegging } = useQuery(
    api.svp.svangerskapspengerTilretteleggingOptions(behandling),
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
          readonly={
            standardPanelProps.isReadOnly ||
            !AKSJONSPUNKT_KODER.some(kode => harAksjonspunkt(kode, behandling.aksjonspunkt))
          }
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
