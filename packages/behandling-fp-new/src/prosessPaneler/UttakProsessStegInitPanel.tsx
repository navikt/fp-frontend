import React, {
  FunctionComponent, useMemo,
} from 'react';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakProsessIndex from '@fpsak-frontend/prosess-uttak';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter,
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Fagsak, FamilieHendelseSamling,
  Personoversikt, Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Vilkar, Ytelsefordeling,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, ProsessPanelWrapper, ProsessPanelInitProps, useProsessMenyRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import {
  restApiFpHooks, FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel,
} from '../data/fpBehandlingApi';

// TODO Er dette mogleg å fjerna?
const FAKTA_UTTAK_AP = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
  aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
  aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
];

const getStatusFromUttakresultat = (uttaksresultat: UttaksresultatPeriode, aksjonspunkter: Aksjonspunkt[]): string => {
  if (!uttaksresultat || aksjonspunkter.some((ap) => FAKTA_UTTAK_AP.includes(ap.definisjon.kode) && ap.status.kode === 'OPPR')) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  if (uttaksresultat.perioderSøker && uttaksresultat.perioderSøker.length > 0) {
    const oppfylt = uttaksresultat.perioderSøker.some((p) => (
      p.periodeResultatType.kode !== periodeResultatType.AVSLATT
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
  FpBehandlingApiKeys.AKSJONSPUNKTER,
  FpBehandlingApiKeys.VILKAR,
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.UTTAK_PERIODE_GRENSE,
  FpBehandlingApiKeys.UTTAK_STONADSKONTOER,
  FpBehandlingApiKeys.SOKNAD,
  FpBehandlingApiKeys.YTELSEFORDELING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  uttakPeriodeGrense: UttakPeriodeGrense;
  uttakStonadskontoer: UttakStonadskontoer;
  soknad: Soknad;
  ytelsefordeling: Ytelsefordeling;
}

interface OwnProps {
  rettigheter: AksessRettigheter;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
  personoversikt: Personoversikt;
}

const UttakProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingVersjon,
  valgtProsessSteg,
  registrerProsessPanel,
  rettigheter,
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  fagsak,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = initState === RestApiState.SUCCESS;
  const status = useMemo(() => getStatusFromUttakresultat(initData?.uttaksresultatPerioder, initData?.aksjonspunkter), [
    initData?.uttaksresultatPerioder, initData?.aksjonspunkter,
  ]);

  const erPanelValgt = useProsessMenyRegistrerer(
    registrerProsessPanel,
    prosessStegCodes.UTTAK,
    getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Uttak' }),
    valgtProsessSteg,
    skalVises,
    standardPanelProps.isAksjonspunktOpen,
    status,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  const { startRequest: tempUpdateStonadskontoer } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER);

  return (
    <ProsessPanelWrapper
      erPanelValgt={erPanelValgt}
      erAksjonspunktOpent={standardPanelProps.isAksjonspunktOpen}
      status={status}
      dataState={panelDataState}
    >
      <UttakProsessIndex
        fagsak={fagsak}
        employeeHasAccess={rettigheter.kanOverstyreAccess.isEnabled}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
        tempUpdateStonadskontoer={tempUpdateStonadskontoer}
        uttaksresultatPerioder={initData?.uttaksresultatPerioder}
        {...panelData}
        {...standardPanelProps}
      />
    </ProsessPanelWrapper>
  );
};

export default UttakProsessStegInitPanel;
