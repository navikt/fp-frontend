import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { UttakProsessIndex } from '@navikt/fp-prosess-uttak';
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

import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const getStatusFromUttakresultat = (behandling: Behandling): string => {
  const harLenke = requestBehandlingApi.hasPath(BehandlingApiKeys.UTTAKSRESULTAT_PERIODER.name);
  if (!harLenke) {
    return VilkarUtfallType.IKKE_VURDERT;
  }
  return behandling.alleUttaksperioderAvslått ? VilkarUtfallType.IKKE_OPPFYLT : VilkarUtfallType.OPPFYLT;
};

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.FASTSETT_UTTAKPERIODER,
  AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  AksjonspunktKode.TILKNYTTET_STORTINGET,
  AksjonspunktKode.ANNENPART_EØS,
  AksjonspunktKode.TETTE_SAKER,
  AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD,
  AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
  AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,
  AksjonspunktKode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT,
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

interface Props {
  rettigheter: AksessRettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const UttakProsessStegInitPanel = ({
  rettigheter,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  ...props
}: Props & ProsessPanelInitProps) => {
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
