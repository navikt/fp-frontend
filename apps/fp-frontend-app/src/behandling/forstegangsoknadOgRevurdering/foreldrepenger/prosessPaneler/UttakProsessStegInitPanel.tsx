import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode, vilkarUtfallType } from '@navikt/fp-kodeverk';
import UttakProsessIndex from '@navikt/fp-prosess-uttak';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { RequestApi } from '@navikt/fp-rest-api';
import {
  AksessRettigheter, ArbeidsgiverOpplysningerPerId, Behandling, FamilieHendelseSamling,
  Personoversikt, Soknad, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling,
} from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const getStatusFromUttakresultat = (behandling: Behandling, requestApi: RequestApi): string => {
  const harLenke = requestApi.hasPath(FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER.name);
  if (!harLenke) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  return behandling.alleUttaksperioderAvslått ? vilkarUtfallType.IKKE_OPPFYLT : vilkarUtfallType.OPPFYLT;
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktCode.FASTSETT_UTTAKPERIODER,
  AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER,
  AksjonspunktCode.TILKNYTTET_STORTINGET,
  AksjonspunktCode.ANNENPART_EØS,
  AksjonspunktCode.TETTE_SAKER,
  AksjonspunktCode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
  AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,
  AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_DØD,
  AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
  AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,
  AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT,
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
  const { startRequest: oppdaterStønadskontoer } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER);
  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.UTTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Uttak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() => getStatusFromUttakresultat(props.behandling, props.requestApi)}
      renderPanel={(data) => (
        <UttakProsessIndex
          kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          personoversikt={personoversikt}
          oppdaterStønadskontoer={oppdaterStønadskontoer}
          {...data}
        />
      )}
    />
  );
};

export default UttakProsessStegInitPanel;
