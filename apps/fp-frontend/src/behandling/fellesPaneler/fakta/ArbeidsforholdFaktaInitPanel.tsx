import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ArbeidsforholdFaktaIndex } from '@navikt/fp-fakta-arbeidsforhold';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';
import { harAksjonspunkt } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.UTGÅTT_5080];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
export const ArbeidsforholdFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = useBehandlingDataContext();

  const api = useBehandlingApi(behandling);

  const { data: arbeidOgInntekt } = useQuery(api.arbeidOgInntektOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ARBEIDSFORHOLD}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Arbeidsforhold' })}
      skalPanelVisesIMeny={AKSJONSPUNKT_KODER.some(kode => harAksjonspunkt(kode, behandling.aksjonspunkt))}
    >
      {arbeidOgInntekt ? (
        <ArbeidsforholdFaktaIndex
          arbeidOgInntekt={arbeidOgInntekt}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
