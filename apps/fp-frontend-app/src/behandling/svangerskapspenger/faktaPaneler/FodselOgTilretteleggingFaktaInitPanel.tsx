import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { TilretteleggingFaktaIndex } from '@navikt/fp-fakta-tilrettelegging';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.FODSELTILRETTELEGGING];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_AVKLAR_STARTDATO];

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
          submittable={standardPanelProps.submittable}
          readonly={
            standardPanelProps.readOnly ||
            !AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, behandling.aksjonspunkt))
          }
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
