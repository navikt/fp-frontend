import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { AksessRettigheter, KontrollerFaktaPeriode, Ytelsefordeling } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';
import { FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE,
  aksjonspunktCodes.FAKTA_UTTAK_INGEN_PERIODER_KODE,
  aksjonspunktCodes.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE,
  aksjonspunktCodes.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK];

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2,
  BehandlingFellesApiKeys.YTELSEFORDELING,
];
type EndepunktPanelData = {
  uttakKontrollerFaktaPerioderV2: KontrollerFaktaPeriode[];
  ytelsefordeling: Ytelsefordeling;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
}

/**
 * UttakFaktaInitPanel
 */
const UttakFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  rettigheter,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.UTTAK}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' })}
    skalPanelVisesIMeny={() => props.behandling.harSattEndringsdato}
    renderPanel={(data) => (
      <UttakFaktaIndex
        kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
        {...data}
        uttakKontrollerFaktaPerioder={data.uttakKontrollerFaktaPerioderV2}
      />
    )}
  />
);

export default UttakFaktaInitPanel;
