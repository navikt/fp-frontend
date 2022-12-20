import React, {
  useCallback, useState, FunctionComponent, ReactElement,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { Button, Heading } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { UttakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import {
  ArbeidsgiverOpplysningerPerId, FamilieHendelseSamling, Personoversikt,
  Soknad, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling, Behandling, Aksjonspunkt, AlleKodeverk, PeriodeSoker,
} from '@fpsak-frontend/types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';

import DisponibleStonadskontoerPanel from './stonadsdagerOversikt/DisponibleStonadskontoerPanel';
import UttakTidslinjeIndex from './tidslinje/UttakTidslinjeIndex';
import UttakPeriodePanel from './periodeDetaljer/UttakPeriodePanel';

const UTTAK_PANEL_AKSJONSPUNKT_KODER = {
  5069: 'UttakPanel.Aksjonspunkt.5069',
  5072: 'UttakPanel.Aksjonspunkt.5072',
  5073: 'UttakPanel.Aksjonspunkt.5073',
  5074: 'UttakPanel.Aksjonspunkt.5074',
  5075: 'UttakPanel.Aksjonspunkt.5075',
  5076: 'UttakPanel.Aksjonspunkt.5076',
  5077: 'UttakPanel.Aksjonspunkt.5077',
  5078: 'UttakPanel.Aksjonspunkt.5078',
  5079: 'UttakPanel.Aksjonspunkt.5079',
  5098: 'UttakPanel.Aksjonspunkt.5098',
};

const hentApTekster = (
  uttaksresultat: UttaksresultatPeriode,
  aksjonspunkter: Aksjonspunkt[],
): ReactElement[] => {
  const filtrerteAksjonspunkter = aksjonspunkter.filter((ap) => ap.definisjon !== AksjonspunktCode.FASTSETT_UTTAKPERIODER
    && ap.definisjon !== AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER);

  const aksjonspunktTekster = [];

  filtrerteAksjonspunkter.forEach((ap) => {
    const tekstkode = UTTAK_PANEL_AKSJONSPUNKT_KODER[ap.definisjon];
    if (tekstkode) {
      aksjonspunktTekster.push(<FormattedMessage key={tekstkode} id={tekstkode} />);
    }
  });

  if (uttaksresultat.perioderSøker.some((p) => p.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING)) {
    aksjonspunktTekster.push(<FormattedMessage key="generellTekst" id="UttakPanel.Aksjonspunkt.Generell" />);
  }

  if (aksjonspunkter.length === 1 && aksjonspunkter[0].definisjon === AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER) {
    if (aksjonspunkter[0].status !== 'UTFO') {
      aksjonspunktTekster.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.KontrollerPaNytt" />);
    } else {
      aksjonspunktTekster.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.Utfort" />);
    }
  }

  return aksjonspunktTekster;
};

interface OwnProps {
  behandling: Behandling;
  uttaksresultatPeriode: UttaksresultatPeriode;
  uttakStonadskontoer: UttakStonadskontoer;
  aksjonspunkter: Aksjonspunkt[];
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  personoversikt: Personoversikt;
  ytelsefordeling: Ytelsefordeling;
  alleKodeverk: AlleKodeverk;
  employeeHasAccess: boolean;
  submitCallback: (data: UttakAp[]) => Promise<void>;
  tempUpdateStonadskontoer: (params: {
    behandlingUuid: string;
    perioder: any;
  }) => Promise<any>;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: any;
  setFormData: (data: any) => void;
}

const UttakProsessPanel: FunctionComponent<OwnProps> = ({
  behandling,
  uttaksresultatPeriode,
  uttakStonadskontoer,
  aksjonspunkter,
  familiehendelse,
  soknad,
  personoversikt,
  ytelsefordeling,
  alleKodeverk,
  employeeHasAccess,
  submitCallback,
  tempUpdateStonadskontoer,
  isReadOnly,
  readOnlySubmitButton,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const bekreftAksjonspunkter = (values) => {
    // TODO
    submitCallback(values);
  };

  const [perioder, setPerioder] = useState<PeriodeSoker[]>(uttaksresultatPeriode.perioderSøker);
  const [valgtPeriodeIndex, setValgtPeriodeIndex] = useState<number>();

  const visForrigePeriode = useCallback(() => {
    setValgtPeriodeIndex((index) => index - 1);
  }, []);
  const visNestePeriode = useCallback(() => {
    setValgtPeriodeIndex((index) => index + 1);
  }, []);
  const oppdaterPeriode = useCallback((oppdatertPeriode: PeriodeSoker) => {
    const filtrertePerioder = perioder.filter((p) => p.fom === oppdatertPeriode.fom);
    setPerioder(filtrertePerioder.concat(oppdatertPeriode));
  }, [perioder]);

  const erAksjonspunktÅpent = aksjonspunkter.some((ap) => ap.status === AksjonspunktStatus.OPPRETTET);
  const erTilknyttetStortinget = !!aksjonspunkter.find((ap) => ap.definisjon === AksjonspunktCode.TILKNYTTET_STORTINGET && erAksjonspunktÅpent);

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="UttakPanel.Title" />
      </Heading>
      <VerticalSpacer twentyPx />
      {aksjonspunkter.length > 0 && erAksjonspunktÅpent && (
        <>
          <AksjonspunktHelpTextHTML>
            {hentApTekster(uttaksresultatPeriode, aksjonspunkter)}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer twentyPx />
        </>
      )}
      <DisponibleStonadskontoerPanel
        stønadskontoer={uttakStonadskontoer.stonadskontoer ? Object.values(uttakStonadskontoer.stonadskontoer) : undefined}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <UttakTidslinjeIndex
        perioderSøker={perioder}
        perioderAnnenpart={uttaksresultatPeriode.perioderAnnenpart}
        valgtPeriodeIndex={valgtPeriodeIndex}
        setValgtPeriodeIndex={setValgtPeriodeIndex}
        behandling={behandling}
        søknad={soknad}
        personoversikt={personoversikt}
        familiehendelse={familiehendelse}
        ytelsefordeling={ytelsefordeling}
        alleKodeverk={alleKodeverk}
        tilknyttetStortinget={erTilknyttetStortinget}
      />
      {valgtPeriodeIndex && (
        <UttakPeriodePanel
          perioderSøker={perioder}
          uttaksresultatPeriode={uttaksresultatPeriode}
          valgtPeriodeIndex={valgtPeriodeIndex}
          oppdaterPeriode={oppdaterPeriode}
          isEdited={false}
          isReadOnly={isReadOnly}
          visForrigePeriode={visForrigePeriode}
          visNestePeriode={visNestePeriode}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          uttakStonadskontoer={uttakStonadskontoer}
          setValgtPeriodeIndex={setValgtPeriodeIndex}
          erTilknyttetStortinget={erTilknyttetStortinget}
        />
      )}
      <VerticalSpacer sixteenPx />
      {!isReadOnly && (
        <Button
          size="small"
          variant="primary"
          disabled={false}
          loading={false}
          onClick={bekreftAksjonspunkter}
          role="button"
        >
          <FormattedMessage id="Uttak.Confirm" />
        </Button>
      )}
    </>
  );
};

export default UttakProsessPanel;
