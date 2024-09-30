import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode, vilkarUtfallType } from '@navikt/fp-kodeverk';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  AksessRettigheter,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  FamilieHendelseSamling,
  Personoversikt,
  Soknad,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  Ytelsefordeling,
} from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const getStatusFromUttakresultat = (behandling: Behandling): string => {
  const harLenke = requestBehandlingApi.hasPath(BehandlingApiKeys.UTTAKSRESULTAT_PERIODER.name);
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
  BehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.UTTAK_STONADSKONTOER,
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.YTELSEFORDELING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  ytelsefordeling: Ytelsefordeling;
  uttaksresultatPerioder: UttaksresultatPeriode;
};

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
  const { startRequest: oppdaterStønadskontoer } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER,
  );
  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.UTTAK}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Uttak' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() => getStatusFromUttakresultat(props.behandling)}
      renderPanel={data => (
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
