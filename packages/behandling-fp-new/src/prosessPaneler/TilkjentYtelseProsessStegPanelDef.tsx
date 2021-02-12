import React, {
  FunctionComponent, useEffect, useState,
} from 'react';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import { FadingPanel, LoadingPanel } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, BeregningsresultatFp, BeregningsresultatPeriode,
  Fagsak, FamilieHendelseSamling, Feriepengegrunnlag, Personopplysninger, Soknad, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, MargMarkering, ProsessStegIkkeBehandletPanel } from '@fpsak-frontend/behandling-felles-ny';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const harPeriodeMedUtbetaling = (perioder: BeregningsresultatPeriode[]): boolean => {
  const periode = perioder.find((p) => p.dagsats > 0);
  return !!periode;
};

const getStatusFromResultatstruktur = (resultatstruktur: BeregningsresultatFp, uttaksresultat: UttaksresultatPeriode): string => {
  if (resultatstruktur && resultatstruktur.perioder.length > 0) {
    if (!harPeriodeMedUtbetaling(resultatstruktur.perioder)) {
      return vilkarUtfallType.IKKE_VURDERT;
    }
    if (uttaksresultat && uttaksresultat.perioderSøker.length > 0) {
      const oppfylt = uttaksresultat.perioderSøker.some((p) => (
        p.periodeResultatType.kode !== periodeResultatType.AVSLATT
      ));
      if (oppfylt) {
        return vilkarUtfallType.OPPFYLT;
      }
    }
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

const aksjonspunktKoder = [
  aksjonspunktCodes.VURDER_TILBAKETREKK,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER },
  { key: FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE },
  { key: FpBehandlingApiKeys.PERSONOPPLYSNINGER },
  { key: FpBehandlingApiKeys.SOKNAD },
  { key: FpBehandlingApiKeys.FERIEPENGEGRUNNLAG },
];

type EndepunktData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningresultatForeldrepenger: BeregningsresultatFp;
  uttaksresultatPerioder: UttaksresultatPeriode;
}

type EndepunktDataVedVisning = {
  familiehendelse: FamilieHendelseSamling;
  personopplysninger: Personopplysninger;
  soknad: Soknad;
  feriepengegrunnlag: Feriepengegrunnlag;
}

interface OwnProps {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harApentAksjonspunkt?: boolean;
    status?: string;
  }) => void;
  oppdaterBehandlingVersjon: (versjon: number) => void;
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

const TilkjentYtelseProsessStegPanelDef: FunctionComponent<OwnProps> = ({
  behandling,
  valgtProsessSteg,
  registrerFaktaPanel,
  apentFaktaPanelInfo,
  oppdaterBehandlingVersjon,
  arbeidsgiverOpplysningerPerId,
  fagsak,
}) => {
  const [erPanelValgt, setPanelValgt] = useState(false);

  useEffect(() => {
    registrerFaktaPanel({
      id: prosessStegCodes.TILKJENT_YTELSE,
    });
  }, []);

  useEffect(() => {
    oppdaterBehandlingVersjon(behandling.versjon);
  }, [behandling.versjon]);

  const { data, state } = restApiFpHooks.useMultipleRestApi<EndepunktData>(endepunkter, {
    keepData: true,
    updateTriggers: [behandling?.versjon],
    isCachingOn: true,
  });

  const { data: dataEtterVisning, state: stateEtterVisning } = restApiFpHooks.useMultipleRestApi<EndepunktDataVedVisning>(endepunkterVedVisning, {
    keepData: true,
    updateTriggers: [erPanelValgt, behandling?.versjon],
    suspendRequest: !erPanelValgt,
    isCachingOn: true,
  });

  const filtrerteAksjonspunkter = data ? data.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardProsessPanelProps(filtrerteAksjonspunkter);

  const skalVises = state === RestApiState.SUCCESS;
  const status = getStatusFromResultatstruktur(data?.beregningresultatForeldrepenger, data?.uttaksresultatPerioder);

  useEffect(() => {
    if (skalVises) {
      const erValgt = !apentFaktaPanelInfo
        && (valgtProsessSteg === prosessStegCodes.TILKJENT_YTELSE || (standardProps.isAksjonspunktOpen && valgtProsessSteg === 'default'));
      registrerFaktaPanel({
        id: prosessStegCodes.TILKJENT_YTELSE,
        tekst: getPackageIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' }),
        erAktiv: erValgt,
        harApentAksjonspunkt: standardProps.isAksjonspunktOpen,
        status,
      });
      setPanelValgt(erValgt);
    }
  }, [valgtProsessSteg, standardProps.isAksjonspunktOpen, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (status === vilkarUtfallType.IKKE_VURDERT && !standardProps.isAksjonspunktOpen) {
    // FIXME Lag ein wrapper med style rundt denne. Samme som MargMarkering?
    return <ProsessStegIkkeBehandletPanel />;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <MargMarkering
      aksjonspunkter={filtrerteAksjonspunkter}
      isReadOnly={standardProps.isReadOnly}
      visAksjonspunktMarkering
    >
      <FadingPanel>
        <TilkjentYtelseProsessIndex
          behandling={behandling}
          fagsak={fagsak}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          beregningresultat={data.beregningresultatForeldrepenger}
          {...dataEtterVisning}
          {...standardProps}
        />
      </FadingPanel>
    </MargMarkering>
  );
};

export default TilkjentYtelseProsessStegPanelDef;
