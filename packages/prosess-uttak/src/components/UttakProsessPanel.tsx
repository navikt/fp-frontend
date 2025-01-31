import React, { FunctionComponent, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { Alert, Button, Heading, HStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, OverstyringKnapp, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, AksjonspunktStatus, PeriodeResultatType, StonadskontoType } from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  Fagsak,
  FamilieHendelseSamling,
  PeriodeSoker,
  Personoversikt,
  Soknad,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  Ytelsefordeling,
} from '@navikt/fp-types';
import { UttakAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

import UttakPeriodePanel from './periodeDetaljer/UttakPeriodePanel';
import DisponibleStonadskontoerPanel from './stonadsdagerOversikt/DisponibleStonadskontoerPanel';
import UttakTidslinjeIndex from './tidslinje/UttakTidslinjeIndex';

const UTTAK_PANEL_AKSJONSPUNKT_KODER = {
  5067: 'UttakPanel.Aksjonspunkt.5067',
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
} as Record<string, string>;

// TODO Kva er dette? Kodeverk-navn skal hentast fra databasen!
const UttakPeriodeNavn = {
  MØDREKVOTE: 'Mødrekvote',
  FEDREKVOTE: 'Fedrekvote',
  FELLESPERIODE: 'Fellesperiode',
  FORELDREPENGER_FØR_FØDSEL: 'Foreldrepenger før fødsel',
  FORELDREPENGER: 'Foreldrepenger',
  FLERBARNSDAGER: 'Flerbarnsdager',
  UDEFINERT: '-',
} as Record<string, string>;

const hentApTekster = (uttaksresultat: UttaksresultatPeriode, aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const filtrerteAksjonspunkter = aksjonspunkter.filter(
    ap =>
      ap.definisjon !== AksjonspunktKode.FASTSETT_UTTAKPERIODER &&
      ap.definisjon !== AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  );

  const aksjonspunktTekster = [];

  filtrerteAksjonspunkter.forEach(ap => {
    const tekstkode = UTTAK_PANEL_AKSJONSPUNKT_KODER[ap.definisjon];
    if (tekstkode) {
      aksjonspunktTekster.push(<FormattedMessage key={tekstkode} id={tekstkode} />);
    }
  });

  if (uttaksresultat.perioderSøker.some(p => p.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING)) {
    aksjonspunktTekster.push(<FormattedMessage key="generellTekst" id="UttakPanel.Aksjonspunkt.Generell" />);
  }

  if (aksjonspunkter.length === 1 && aksjonspunkter[0].definisjon === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER) {
    if (aksjonspunkter[0].status !== 'UTFO') {
      aksjonspunktTekster.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.KontrollerPaNytt" />);
    } else {
      aksjonspunktTekster.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.Utfort" />);
    }
  }

  return aksjonspunktTekster;
};

const validerPerioder = (perioder: PeriodeSoker[], stønadskonto: UttakStonadskontoer, intl: IntlShape) => {
  const feil = [] as string[];

  perioder.forEach(p => {
    const ikkeGyldigeAktiviteter = p.aktiviteter.filter(
      a =>
        stønadskonto.stonadskontoer[a.stønadskontoType as StonadskontoType] === undefined &&
        !!a.trekkdagerDesimaler &&
        a.trekkdagerDesimaler > 0,
    );
    if (p.periodeResultatType === PeriodeResultatType.INNVILGET && ikkeGyldigeAktiviteter.length > 0) {
      const feilmelding = intl.formatMessage(
        { id: 'UttakPanel.InvalidStonadskonto' },
        { konto: UttakPeriodeNavn[ikkeGyldigeAktiviteter[0].stønadskontoType as StonadskontoType] },
      );
      if (!feil.includes(feilmelding)) {
        feil.push(feilmelding);
      }
    }
  });

  if (feil.length === 0) {
    const kontoerMedUgyldigForbruk = Object.values(stønadskonto.stonadskontoer).filter(s => !s.gyldigForbruk);
    if (kontoerMedUgyldigForbruk.length > 0) {
      feil.push(
        intl.formatMessage(
          { id: 'UttakPanel.KontoMedUgyldigForbruk' },
          { konto: UttakPeriodeNavn[kontoerMedUgyldigForbruk[0].stonadskontotype] },
        ),
      );
    }
  }

  // TODO Dette ser feil ut. Burde det vera const konto = stønadskonto.stonadskontoer[StonadskontoType.FLERBARNSDAGER];
  // @ts-expect-error Fiks
  const konto = stønadskonto[StonadskontoType.FLERBARNSDAGER];
  if (feil.length === 0 && konto && !konto.gyldigForbruk) {
    feil.push(intl.formatMessage({ id: 'UttakPanel.InvalidTrekkDagerFlerbarnsdager' }, { maxDays: konto.maxDager }));
  }

  return feil;
};

const transformValues = (perioder: PeriodeSoker[], aksjonspunkter: Aksjonspunkt[]): UttakAp[] => {
  const harOverstyringAp = aksjonspunkter.some(ap => ap.definisjon === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER);
  const skalSendeInnOverstyringAp = aksjonspunkter.length === 0 || (aksjonspunkter.length === 1 && harOverstyringAp);

  const apKoder = skalSendeInnOverstyringAp
    ? [AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER]
    : aksjonspunkter
        .filter(a => a.definisjon !== AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER)
        .map(ap => ap.definisjon);

  return apKoder.map(ap => ({
    kode: validerApKodeOgHentApEnum(
      ap,
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
    ),
    perioder,
  }));
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
  kanOverstyre: boolean;
  submitCallback: (data: UttakAp[]) => Promise<void>;
  oppdaterStønadskontoer: (params: { behandlingUuid: string; perioder: PeriodeSoker[] }) => Promise<any>;
  isReadOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

const sortByDate = (a: PeriodeSoker, b: PeriodeSoker): number => {
  if (a.fom < b.fom) {
    return -1;
  }
  if (a.fom > b.fom) {
    return 1;
  }
  return 0;
};

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
  kanOverstyre,
  submitCallback,
  oppdaterStønadskontoer,
  isReadOnly,
  arbeidsgiverOpplysningerPerId,
  fagsak,
}) => {
  const intl = useIntl();

  const [erOverstyrt, setErOverstyrt] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleOverstyring = useCallback(() => {
    setErOverstyrt(forrigeVerdi => !forrigeVerdi);
  }, []);

  const { formData, setFormData } = useFormData<PeriodeSoker[]>();

  const [perioder, setPerioder] = useState<PeriodeSoker[]>(formData || uttaksresultatPeriode.perioderSøker);
  const [valgtPeriodeIndex, setValgtPeriodeIndex] = useState<number | undefined>();

  const [stønadskonto, setStønadskonto] = useState(uttakStonadskontoer);

  useEffect(() => () => setFormData(perioder), [perioder]);

  const allePerioder = uttaksresultatPeriode.perioderAnnenpart.concat(perioder);

  const visPeriode = useCallback(
    (per: PeriodeSoker[]) => {
      const index = per.findIndex(period => period.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING);
      if (index !== -1) {
        setValgtPeriodeIndex(index);
      } else if (valgtPeriodeIndex !== undefined) {
        setValgtPeriodeIndex(undefined);
      }
    },
    [valgtPeriodeIndex],
  );

  useEffect(() => {
    visPeriode(allePerioder);
  }, []);

  const bekreftAksjonspunkter = useCallback(() => {
    setIsSubmitting(true);
    submitCallback(transformValues(perioder, aksjonspunkter));
  }, [perioder, aksjonspunkter]);

  const oppdaterPeriode = useCallback(
    (oppdatertePerioder: PeriodeSoker[]) => {
      const andrePerioder = perioder.filter(p => p.fom !== oppdatertePerioder[0].fom);
      const nyePerioder = [...andrePerioder.concat(oppdatertePerioder)].sort(sortByDate);
      setPerioder(nyePerioder);
      setIsDirty(true);

      oppdaterStønadskontoer({ behandlingUuid: behandling.uuid, perioder: nyePerioder }).then(
        (oppdatertStønadskonto: UttakStonadskontoer) => {
          setStønadskonto(oppdatertStønadskonto);
          if (oppdatertePerioder.length === 2) {
            const index = nyePerioder.findIndex(p => p.fom === oppdatertePerioder[0].fom);
            setValgtPeriodeIndex(uttaksresultatPeriode.perioderAnnenpart.length + index);
          } else {
            visPeriode(uttaksresultatPeriode.perioderAnnenpart.concat(nyePerioder));
          }
        },
      );
    },
    [perioder, valgtPeriodeIndex],
  );

  const harÅpneAksjonspunkter = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const erTilknyttetStortinget = aksjonspunkter.some(
    ap => ap.definisjon === AksjonspunktKode.TILKNYTTET_STORTINGET && harÅpneAksjonspunkter,
  );

  const erBekreftKnappDisablet = useMemo(() => {
    if (aksjonspunkter.some(ap => ap.definisjon === AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE)) {
      return false;
    }

    if (perioder.some(p => p.periodeResultatType === PeriodeResultatType.MANUELL_BEHANDLING)) {
      return true;
    }
    return valgtPeriodeIndex !== undefined || !isDirty;
  }, [perioder, stønadskonto, valgtPeriodeIndex, isDirty]);

  const feilmeldinger = useMemo(() => {
    if (!isDirty || valgtPeriodeIndex !== undefined) {
      return [];
    }
    return validerPerioder(perioder, stønadskonto, intl);
  }, [perioder, stønadskonto, valgtPeriodeIndex, isDirty]);

  const harIngenEllerLukkedeAksjonspunkt =
    aksjonspunkter.filter(ap => ap.definisjon !== AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER).length === 0 ||
    aksjonspunkter.some(ap => ap.toTrinnsBehandlingGodkjent === true && ap.status === AksjonspunktStatus.UTFORT);

  const harOverstyrAp = aksjonspunkter.some(ap => ap.definisjon === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER);

  return (
    <>
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="UttakPanel.Title" />
        </Heading>
        {!isReadOnly && kanOverstyre && (!harÅpneAksjonspunkter || harOverstyrAp) && (
          <OverstyringKnapp onClick={toggleOverstyring} erOverstyrt={erOverstyrt} />
        )}
      </HStack>
      <VerticalSpacer twentyPx />
      {aksjonspunkter.length > 0 && harÅpneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>{hentApTekster(uttaksresultatPeriode, aksjonspunkter)}</AksjonspunktHelpTextHTML>
          <VerticalSpacer twentyPx />
        </>
      )}
      <DisponibleStonadskontoerPanel
        stønadskontoer={stønadskonto.stonadskontoer ? Object.values(stønadskonto.stonadskontoer) : undefined}
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
        tilknyttetStortinget={erTilknyttetStortinget}
        fagsak={fagsak}
        alleKodeverk={alleKodeverk}
      />
      {valgtPeriodeIndex !== undefined && (
        <>
          <VerticalSpacer sixteenPx />
          <UttakPeriodePanel
            key={valgtPeriodeIndex}
            perioderSøker={perioder}
            behandling={behandling}
            ytelsefordeling={ytelsefordeling}
            uttaksresultatPeriode={uttaksresultatPeriode}
            valgtPeriodeIndex={valgtPeriodeIndex}
            oppdaterPeriode={oppdaterPeriode}
            isReadOnly={(harIngenEllerLukkedeAksjonspunkt || isReadOnly) && !erOverstyrt}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            uttakStonadskontoer={stønadskonto}
            setValgtPeriodeIndex={setValgtPeriodeIndex}
            erTilknyttetStortinget={erTilknyttetStortinget}
            harÅpneAksjonspunkter={harÅpneAksjonspunkter}
          />
        </>
      )}
      <VerticalSpacer sixteenPx />
      {((!harIngenEllerLukkedeAksjonspunkt && !isReadOnly) || erOverstyrt) && (
        <>
          {feilmeldinger.length > 0 && (
            <>
              {feilmeldinger.map(fm => (
                <Alert size="small" variant="error" key={fm}>
                  {fm}
                </Alert>
              ))}
              <VerticalSpacer sixteenPx />
            </>
          )}
          <Button
            size="small"
            variant="primary"
            disabled={feilmeldinger.length > 0 || isSubmitting || erBekreftKnappDisablet}
            loading={isSubmitting}
            onClick={bekreftAksjonspunkter}
            type="button"
          >
            <FormattedMessage id="Uttak.Confirm" />
          </Button>
        </>
      )}
    </>
  );
};

export default UttakProsessPanel;
