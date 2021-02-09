import React, {
  FunctionComponent, useEffect,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import UttakFaktaIndex from '@fpsak-frontend/fakta-uttak';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import {
  AksessRettigheter, Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personopplysninger, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { useStandardFaktaProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiFpHooks, FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_UTTAK,
  aksjonspunktCodes.AVKLAR_FØRSTE_UTTAKSDATO,
  aksjonspunktCodes.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK,
  aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
  aksjonspunktCodes.MANUELL_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET,
  aksjonspunktCodes.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG,
];

const endepunkter = [
  { key: FpBehandlingApiKeys.PERSONOPPLYSNINGER },
  { key: FpBehandlingApiKeys.YTELSEFORDELING },
];

const endepunkterVedVisning = [
  { key: FpBehandlingApiKeys.AKSJONSPUNKTER },
  { key: FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER },
  { key: FpBehandlingApiKeys.FAKTA_ARBEIDSFORHOLD },
  { key: FpBehandlingApiKeys.FAMILIEHENDELSE },
];

type EndepunktData = {
  personopplysninger: Personopplysninger;
  ytelsefordeling: Ytelsefordeling;
}

type EndepunktDataVedVisning = {
  aksjonspunkter: Aksjonspunkt[];
  familiehendelse: FamilieHendelseSamling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
}

interface OwnProps {
  valgtFaktaSteg: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: {
    id: string;
    tekst?: string;
    erAktiv?: boolean;
    harAksjonspunkt?: boolean;
  }) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

/**
 * UttakFaktaPanelDef
 */
const UttakFaktaPanelDef: FunctionComponent<OwnProps> = ({
  valgtFaktaSteg,
  behandling,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  registrerFaktaPanel,
}) => {
  useEffect(() => {
    registrerFaktaPanel({
      id: faktaPanelCodes.UTTAK,
    });
  }, []);
  const erPanelValgt = valgtFaktaSteg === faktaPanelCodes.UTTAK;

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

  const filtrerteAksjonspunkter = dataEtterVisning ? dataEtterVisning.aksjonspunkter.filter((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)) : [];

  const standardProps = useStandardFaktaProps(filtrerteAksjonspunkter);

  useEffect(() => {
    if (data && data.ytelsefordeling
      && data.ytelsefordeling.endringsdato !== undefined
      && data.personopplysninger !== null
      && data.personopplysninger !== undefined) {
      registrerFaktaPanel({
        id: faktaPanelCodes.UTTAK,
        tekst: getPackageIntl().formatMessage({ id: 'UttakInfoPanel.FaktaUttak' }),
        erAktiv: valgtFaktaSteg === faktaPanelCodes.UTTAK,
        harAksjonspunkt: standardProps.harApneAksjonspunkter,
      });
    }
  }, [valgtFaktaSteg, standardProps.harApneAksjonspunkter, state]);

  if (!erPanelValgt) {
    return null;
  }

  if (stateEtterVisning !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <UttakFaktaIndex
      behandling={behandling}
      kanOverstyre={rettigheter.kanOverstyreAccess.isEnabled}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      {...data}
      {...dataEtterVisning}
      {...standardProps}
    />
  );
};

export default UttakFaktaPanelDef;
