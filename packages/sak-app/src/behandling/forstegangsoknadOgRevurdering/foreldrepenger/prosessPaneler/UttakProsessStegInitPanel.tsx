import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, ArbeidsgiverOpplysningerPerId, FamilieHendelseSamling,
  Personoversikt, Soknad, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const getStatusFromUttakresultat = (uttaksresultat?: UttaksresultatPeriode): string => {
  if (!uttaksresultat) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  if (uttaksresultat.perioderSøker && uttaksresultat.perioderSøker.length > 0) {
    const oppfylt = uttaksresultat.perioderSøker.some((p) => (
      p.periodeResultatType !== periodeResultatType.AVSLATT
    ));
    if (oppfylt) {
      return vilkarUtfallType.OPPFYLT;
    }
  }
  return vilkarUtfallType.IKKE_OPPFYLT;
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

const ENDEPUNKTER_INIT_DATA = [
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktInitData = {
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const ENDEPUNKTER_PANEL_DATA = [
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
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.UTTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Uttak' })}
      skalPanelVisesIMeny={(_data, initState) => initState === RestApiState.SUCCESS}
      hentOverstyrtStatus={(initData) => getStatusFromUttakresultat(initData.uttaksresultatPerioder)}
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
