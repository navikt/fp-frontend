import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { UttakFaktaIndex } from '@navikt/fp-fakta-uttak';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, ArbeidsgiverOpplysningerPerId, Fagsak } from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
  AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
  AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
  AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
  AksjonspunktKode.OVERSTYR_FAKTA_UTTAK,
];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_FAKTA_UTTAK];

interface Props {
  rettigheter: AksessRettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

export const UttakFaktaInitPanel = ({
  rettigheter,
  arbeidsgiverOpplysningerPerId,
  fagsak,
  ...props
}: Props & FaktaPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER, OVERSTYRING_AP_CODES);

  const api = useBehandlingApi(props.behandling);

  const { data: ytelsefordeling } = useQuery(api.ytelsefordelingOptions(props.behandling));
  const { data: uttakKontrollerFaktaPerioder } = useQuery(api.uttakKontrollerFaktaPerioderOptions(props.behandling));
  const { data: faktaArbeidsforhold } = useQuery(api.faktaArbeidsforholdOptions(props.behandling));

  return (
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.UTTAK}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.Uttak' })}
      skalPanelVisesIMeny={harLenke(props.behandling, 'UTTAK_KONTROLLER_FAKTA_PERIODER_V2')}
    >
      {ytelsefordeling && uttakKontrollerFaktaPerioder ? (
        <UttakFaktaIndex
          fagsak={fagsak}
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled && props.behandling.harSattEndringsdato}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          uttakKontrollerFaktaPerioder={uttakKontrollerFaktaPerioder}
          ytelsefordeling={ytelsefordeling}
          faktaArbeidsforhold={faktaArbeidsforhold}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
