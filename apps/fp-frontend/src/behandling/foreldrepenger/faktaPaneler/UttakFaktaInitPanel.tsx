import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakFaktaIndex } from '@navikt/fp-fakta-uttak';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { AksjonspunktKode, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER: AksjonspunktKode[] = ['5065', '5064', '5063', '5066', '6065'];

const OVERSTYRING_AP_CODES: AksjonspunktKode[] = ['6065'];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const UttakFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(behandling);

  const { data: ytelsefordeling } = useQuery(api.ytelsefordelingOptions(behandling));
  const { data: uttakKontrollerFaktaPerioder } = useQuery(api.uttakKontrollerFaktaPerioderOptions(behandling));
  const { data: faktaArbeidsforhold } = useQuery(api.faktaArbeidsforholdOptions(behandling));

  return (
    <FaktaDefaultInitPanel
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.UTTAK}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Uttak' })}
      skalPanelVisesIMeny={harLenke(behandling, 'UTTAK_KONTROLLER_FAKTA_PERIODER_V2')}
    >
      {ytelsefordeling && uttakKontrollerFaktaPerioder ? (
        <UttakFaktaIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled && behandling.harSattEndringsdato}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
          ytelsefordeling={ytelsefordeling}
          faktaArbeidsforhold={faktaArbeidsforhold}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
