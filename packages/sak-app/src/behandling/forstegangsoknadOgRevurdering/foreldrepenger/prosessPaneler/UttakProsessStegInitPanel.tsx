import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, FamilieHendelseSamling,
  Personoversikt, Soknad, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

import { restApiFpHooks, FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const getStatusFromUttakresultat = (behandling: Behandling): string => {
  const harLenke = requestFpApi.hasPath(FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER.name);
  if (!harLenke) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  return behandling.alleUttaksperioderAvslått ? vilkarUtfallType.IKKE_OPPFYLT : vilkarUtfallType.OPPFYLT;
};

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FASTSETT_UTTAKPERIODER,
  aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER,
  aksjonspunktCodes.TILKNYTTET_STORTINGET,
  aksjonspunktCodes.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
  aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,
  aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_DØD,
  aksjonspunktCodes.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
  aksjonspunktCodes.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,
  aksjonspunktCodes.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT,
];

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.UTTAK_STONADSKONTOER,
  BehandlingFellesApiKeys.SOKNAD,
  BehandlingFellesApiKeys.YTELSEFORDELING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  ytelsefordeling: Ytelsefordeling;
  uttaksresultatPerioder: UttaksresultatPeriode;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const UttakProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  rettigheter,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  ...props
}) => {
  const intl = useIntl();
  const { startRequest: tempUpdateStonadskontoer } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER);
  return (
    <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.UTTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Uttak' })}
      skalPanelVisesIMeny={(_data, initState) => initState === RestApiState.SUCCESS}
      hentOverstyrtStatus={() => getStatusFromUttakresultat(props.behandling)}
      renderPanel={(data) => (
        <UttakProsessIndex
          employeeHasAccess={rettigheter.kanOverstyreAccess.isEnabled}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          tempUpdateStonadskontoer={tempUpdateStonadskontoer}
          {...data}
        />
      )}
    />
  );
};

export default UttakProsessStegInitPanel;
