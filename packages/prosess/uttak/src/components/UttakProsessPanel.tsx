import { type ReactElement, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { Alert, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { validerApKodeOgHentApEnum } from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  AksjonspunktDefinisjon,
  AnnenforelderUttakEøsPeriode,
  ArbeidsgiverOpplysningerPerId,
  FamilieHendelse,
  PeriodeSoker,
  Personoversikt,
  Soknad,
  StønadskontoType,
  Uttaksresultat,
  UttakStonadskontoer,
} from '@navikt/fp-types';
import type { UttakAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { erAksjonspunktÅpent, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { UttakPeriodePanel } from './periodeDetaljer/UttakPeriodePanel';
import { DisponibleStonadskontoerPanel } from './stonadsdagerOversikt/DisponibleStonadskontoerPanel';
import { UttakTidslinjeIndex } from './tidslinje/UttakTidslinjeIndex';

const UTTAK_PANEL_AKSJONSPUNKT_KODER: Partial<Record<AksjonspunktDefinisjon, string>> = {
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
};

// TODO Kva er dette? Kodeverk-navn skal hentast fra databasen!
const UttakPeriodeNavn = {
  MØDREKVOTE: 'Mødrekvote',
  FEDREKVOTE: 'Fedrekvote',
  FELLESPERIODE: 'Fellesperiode',
  FORELDREPENGER_FØR_FØDSEL: 'Foreldrepenger før fødsel',
  FORELDREPENGER: 'Foreldrepenger',
  FLERBARNSDAGER: 'Flerbarnsdager',
  UTEN_AKTIVITETSKRAV: 'Uten aktivitetskrav',
  MINSTERETT_NESTE_STØNADSPERIODE: 'Minsterett neste stønadsperiode',
  MINSTERETT: 'minsterett',
  '-': '-',
};

const hentApTekster = (uttaksresultat: Uttaksresultat, aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const filtrerteAksjonspunkter = aksjonspunkter.filter(
    ap =>
      ap.definisjon !== AksjonspunktKode.FASTSETT_UTTAKPERIODER &&
      ap.definisjon !== AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  );

  const aksjonspunktTekster = [];

  for (const ap of filtrerteAksjonspunkter) {
    const tekstkode = UTTAK_PANEL_AKSJONSPUNKT_KODER[ap.definisjon];
    if (tekstkode) {
      aksjonspunktTekster.push(<FormattedMessage key={tekstkode} id={tekstkode} />);
    }
  }

  if (uttaksresultat.perioderSøker.some(p => p.periodeResultatType === 'MANUELL_BEHANDLING')) {
    aksjonspunktTekster.push(<FormattedMessage key="generellTekst" id="UttakPanel.Aksjonspunkt.Generell" />);
  }

  if (aksjonspunkter.length === 1 && aksjonspunkter[0]?.definisjon === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER) {
    if (aksjonspunkter[0].status !== 'UTFO') {
      aksjonspunktTekster.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.KontrollerPaNytt" />);
    } else {
      aksjonspunktTekster.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.Utfort" />);
    }
  }

  return aksjonspunktTekster;
};

const validerPerioder = (perioder: PeriodeSoker[], stønadskonto: UttakStonadskontoer, intl: IntlShape) => {
  const feil = new Array<string>();

  for (const p of perioder) {
    const ikkeGyldigeAktiviteter = p.aktiviteter.filter(
      a =>
        stønadskonto.stonadskontoer[a.stønadskontoType ?? ''] === undefined &&
        !!a.trekkdagerDesimaler &&
        a.trekkdagerDesimaler > 0,
    );

    const ugyldigKontoType = ikkeGyldigeAktiviteter.at(0)?.stønadskontoType;
    if (p.periodeResultatType === 'INNVILGET' && ugyldigKontoType) {
      const feilmelding = intl.formatMessage(
        { id: 'UttakPanel.InvalidStonadskonto' },
        { konto: UttakPeriodeNavn[ugyldigKontoType] },
      );
      if (!feil.includes(feilmelding)) {
        feil.push(feilmelding);
      }
    }
  }

  if (feil.length === 0) {
    const kontoerMedUgyldigForbruk = Object.values(stønadskonto.stonadskontoer).filter(s => !s.gyldigForbruk);
    const kontoMedUgyldigForbruk = kontoerMedUgyldigForbruk.at(0)?.stonadskontotype;
    if (kontoMedUgyldigForbruk) {
      feil.push(
        intl.formatMessage(
          { id: 'UttakPanel.KontoMedUgyldigForbruk' },
          { konto: UttakPeriodeNavn[kontoMedUgyldigForbruk] },
        ),
      );
    }
  }

  // TODO Dette ser feil ut. Burde det vera const konto = stønadskonto.stonadskontoer[StonadskontoType.FLERBARNSDAGER];
  // @ts-expect-error Fiks
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const konto = stønadskonto['FLERBARNSDAGER' satisfies StønadskontoType];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (feil.length === 0 && konto && !konto.gyldigForbruk) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
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
      AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT,
      AksjonspunktKode.UTGÅTT_5069,
      AksjonspunktKode.UTGÅTT_5067,
      AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
      AksjonspunktKode.UTGÅTT_5075,
      AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_DØD,
      AksjonspunktKode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
      AksjonspunktKode.UTGÅTT_5078,
      AksjonspunktKode.UTGÅTT_5079,
    ),
    perioder,
  }));
};

interface Props {
  uttaksresultat: Uttaksresultat;
  uttakStonadskontoer: UttakStonadskontoer;
  familiehendelse: FamilieHendelse;
  soknad: Soknad;
  personoversikt: Personoversikt;
  kanOverstyre: boolean;
  oppdaterStønadskontoer: (params: {
    behandlingUuid: string;
    perioder: PeriodeSoker[];
  }) => Promise<UttakStonadskontoer>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  annenForelderUttakEøs: AnnenforelderUttakEøsPeriode[] | undefined;
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

const erOrdinærPeriode = (periode: PeriodeSoker | AnnenforelderUttakEøsPeriode): periode is PeriodeSoker => {
  return 'periodeResultatType' in periode;
};

const getPerioderAnnenpart = (
  uttaksresultat: Uttaksresultat,
  annenForelderUttakEøs: AnnenforelderUttakEøsPeriode[] | undefined,
) => {
  if (uttaksresultat.perioderAnnenpart.length > 0) {
    return uttaksresultat.perioderAnnenpart;
  }
  if (annenForelderUttakEøs) {
    return annenForelderUttakEøs;
  }
  return [];
};

export const UttakProsessPanel = ({
  uttaksresultat,
  uttakStonadskontoer,
  familiehendelse,
  soknad,
  personoversikt,
  kanOverstyre,
  oppdaterStønadskontoer,
  arbeidsgiverOpplysningerPerId,
  annenForelderUttakEøs,
}: Props) => {
  const intl = useIntl();

  const { fagsak, behandling, submitCallback, alleKodeverk, isReadOnly, aksjonspunkterForPanel } =
    usePanelDataContext<UttakAp[]>();

  const [erOverstyrt, setErOverstyrt] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleOverstyring = () => {
    setErOverstyrt(forrigeVerdi => !forrigeVerdi);
  };

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<PeriodeSoker[]>();

  const [perioder, setPerioder] = useState<PeriodeSoker[]>(mellomlagretFormData ?? uttaksresultat.perioderSøker);
  const [valgtPeriodeIndex, setValgtPeriodeIndex] = useState<number | undefined>();
  const [stønadskonto, setStønadskonto] = useState(uttakStonadskontoer);

  useEffect(() => () => setMellomlagretFormData(perioder), [perioder]);

  const perioderAnnenpart = getPerioderAnnenpart(uttaksresultat, annenForelderUttakEøs);
  const allePerioder = perioderAnnenpart.concat(perioder);

  const visPeriode = (per: (PeriodeSoker | AnnenforelderUttakEøsPeriode)[]) => {
    const index = per.findIndex(
      period => erOrdinærPeriode(period) && period.periodeResultatType === 'MANUELL_BEHANDLING',
    );
    if (index !== -1) {
      setValgtPeriodeIndex(index);
    } else if (valgtPeriodeIndex !== undefined) {
      setValgtPeriodeIndex(undefined);
    }
  };

  useEffect(() => {
    visPeriode(allePerioder);
  }, []);

  const bekreftAksjonspunkter = () => {
    setIsSubmitting(true);
    void submitCallback(transformValues(perioder, aksjonspunkterForPanel));
  };

  const oppdaterPeriode = (oppdatertePerioder: PeriodeSoker[]) => {
    const andrePerioder = perioder.filter(p => p.fom !== oppdatertePerioder[0]?.fom);
    const nyePerioder = [...andrePerioder.concat(oppdatertePerioder)].sort(sortByDate);
    setPerioder(nyePerioder);
    setIsDirty(true);

    void oppdaterStønadskontoer({ behandlingUuid: behandling.uuid, perioder: nyePerioder }).then(
      oppdatertStønadskonto => {
        setStønadskonto(oppdatertStønadskonto);
        if (oppdatertePerioder.length === 2) {
          const index = nyePerioder.findIndex(p => p.fom === oppdatertePerioder[0]?.fom);
          setValgtPeriodeIndex(perioderAnnenpart.length + index);
        } else {
          visPeriode(perioderAnnenpart.concat(nyePerioder));
        }
      },
    );
  };

  const harÅpentAksjonspunkt = aksjonspunkterForPanel.some(erAksjonspunktÅpent);
  const erTilknyttetStortinget = aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.FASTSETT_UTTAK_STORTINGSREPRESENTANT && harÅpentAksjonspunkt,
  );

  const erBekreftKnappDisablet = useMemo(() => {
    if (
      aksjonspunkterForPanel.some(ap => ap.definisjon === AksjonspunktKode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE)
    ) {
      return false;
    }

    if (perioder.some(p => p.periodeResultatType === 'MANUELL_BEHANDLING')) {
      return true;
    }
    return valgtPeriodeIndex !== undefined || !isDirty;
  }, [perioder, stønadskonto, valgtPeriodeIndex, isDirty]);

  const feilmeldinger =
    !isDirty || valgtPeriodeIndex !== undefined ? [] : validerPerioder(perioder, stønadskonto, intl);

  const harIngenEllerLukkedeAksjonspunkt =
    aksjonspunkterForPanel.filter(ap => ap.definisjon !== AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER).length === 0 ||
    aksjonspunkterForPanel.some(ap => ap.toTrinnsBehandlingGodkjent === true && ap.status === 'UTFO');

  const harOverstyrAp = aksjonspunkterForPanel.some(
    ap => ap.definisjon === AksjonspunktKode.OVERSTYRING_AV_UTTAKPERIODER,
  );

  return (
    <VStack gap="space-24">
      <HStack gap="space-16">
        <Heading size="small" level="2">
          <FormattedMessage id="UttakPanel.Title" />
        </Heading>
        {!isReadOnly && kanOverstyre && (!harÅpentAksjonspunkt || harOverstyrAp) && (
          <OverstyringKnapp onClick={toggleOverstyring} erOverstyrt={erOverstyrt} />
        )}
      </HStack>
      {aksjonspunkterForPanel.length > 0 && harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>{hentApTekster(uttaksresultat, aksjonspunkterForPanel)}</AksjonspunktHelpTextHTML>
      )}
      <DisponibleStonadskontoerPanel
        stønadskontoer={Object.values(stønadskonto.stonadskontoer)}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      <UttakTidslinjeIndex
        perioderSøker={perioder}
        perioderAnnenpart={perioderAnnenpart}
        valgtPeriodeIndex={valgtPeriodeIndex}
        setValgtPeriodeIndex={setValgtPeriodeIndex}
        behandling={behandling}
        søknad={soknad}
        personoversikt={personoversikt}
        familiehendelse={familiehendelse}
        endringsdato={uttaksresultat.endringsdato}
        tilknyttetStortinget={erTilknyttetStortinget}
        fagsak={fagsak}
        alleKodeverk={alleKodeverk}
      />
      {valgtPeriodeIndex !== undefined && (
        <UttakPeriodePanel
          key={valgtPeriodeIndex}
          perioderSøker={perioder}
          perioderAnnenpart={perioderAnnenpart}
          behandling={behandling}
          uttaksresultat={uttaksresultat}
          valgtPeriodeIndex={valgtPeriodeIndex}
          oppdaterPeriode={oppdaterPeriode}
          isReadOnly={(harIngenEllerLukkedeAksjonspunkt || isReadOnly) && !erOverstyrt}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          uttakStonadskontoer={stønadskonto}
          setValgtPeriodeIndex={setValgtPeriodeIndex}
          erTilknyttetStortinget={erTilknyttetStortinget}
          harÅpentAksjonspunkt={harÅpentAksjonspunkt}
          endringsdato={uttaksresultat.endringsdato}
        />
      )}
      {((!harIngenEllerLukkedeAksjonspunkt && !isReadOnly) || erOverstyrt) && (
        <>
          {feilmeldinger.length > 0 && (
            <>
              {feilmeldinger.map(fm => (
                <Alert size="small" variant="error" key={fm}>
                  {fm}
                </Alert>
              ))}
            </>
          )}
          <div>
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
          </div>
        </>
      )}
    </VStack>
  );
};
