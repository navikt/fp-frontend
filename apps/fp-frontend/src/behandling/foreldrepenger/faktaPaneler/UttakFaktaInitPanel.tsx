import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakFaktaIndex } from '@navikt/fp-fakta-uttak';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO,
  AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER,
  AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
  AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
  AksjonspunktKode.OVERSTYRING_FAKTA_UTTAK,
];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const UttakFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, rettigheter } = useBehandlingDataContext();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

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
