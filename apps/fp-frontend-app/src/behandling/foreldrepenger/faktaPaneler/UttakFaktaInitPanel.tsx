import React from 'react';
import { useIntl } from 'react-intl';

import { UttakFaktaIndex } from '@navikt/fp-fakta-uttak';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  AksessRettigheter,
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  FaktaArbeidsforhold,
  KontrollerFaktaPeriode,
  Ytelsefordeling,
} from '@navikt/fp-types';

import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
  AksjonspunktKode.FAKTA_UTTAK_INGEN_PERIODER_KODE,
  AksjonspunktKode.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
  AksjonspunktKode.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
  AksjonspunktKode.OVERSTYR_FAKTA_UTTAK,
];

const OVERSTYRING_AP_CODES = [AksjonspunktKode.OVERSTYR_FAKTA_UTTAK];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2,
  BehandlingApiKeys.FAKTA_ARBEIDSFORHOLD,
  BehandlingApiKeys.YTELSEFORDELING,
];

type EndepunktPanelData = {
  uttakKontrollerFaktaPerioderV2: KontrollerFaktaPeriode[];
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  ytelsefordeling: Ytelsefordeling;
};

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
}: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.UTTAK}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' })}
    skalPanelVisesIMeny={() =>
      props.behandling.harSattEndringsdato &&
      requestBehandlingApi.hasPath(BehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2.name)
    }
    renderPanel={data => (
      <UttakFaktaIndex
        fagsak={fagsak}
        kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
        uttakKontrollerFaktaPerioder={data.uttakKontrollerFaktaPerioderV2}
      />
    )}
  />
);
