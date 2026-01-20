import React, { type ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Box, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, EditedIcon } from '@navikt/ft-ui-komponenter';
import { calcDays } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  AlleKodeverk,
  AnnenforelderUttakEøsPeriode,
  ArbeidsgiverOpplysningerPerId,
  BehandlingFpSak,
  ManuellBehandlingÅrsak,
  PeriodeSoker,
  PeriodeSokerAktivitet,
  UttakPeriodeType,
  Uttaksresultat,
  UttakStonadskontoer,
} from '@navikt/fp-types';

import { SplittPeriodeModal } from './splitt/SplittPeriodeModal';
import { UttakPeriodeForm } from './UttakPeriodeForm';
import { UttakPeriodeInfoEØS } from './UttakPeriodeinfoEøs';

const getCorrectEmptyArbeidsForhold = (
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode: UttakPeriodeType,
  stonadskonto: UttakStonadskontoer,
): string[] => {
  const konto = stonadskonto.stonadskontoer[periodeTypeKode];
  const aktiviteter = konto?.aktivitetSaldoDtoList ?? [];

  if (aktiviteter.length === 0) return [];

  const arbeidsforholdMedNullDager = aktiviteter
    .filter(item => item.saldo === 0)
    .map(item => {
      const { arbeidsgiverReferanse, uttakArbeidType } = item.aktivitetIdentifikator;

      if (arbeidsgiverReferanse) {
        return arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse]?.navn ?? 'Fant ikke navn';
      }

      const navn = alleKodeverk['UttakArbeidType'].find(k => k.kode === uttakArbeidType)?.navn;
      return navn ?? null;
    })
    .filter((navn): navn is string => !!navn);

  const harPositivSaldo = aktiviteter.some(item => item.saldo > 0);

  return harPositivSaldo ? arbeidsforholdMedNullDager : [];
};

const erEøsPeriode = (
  periode: PeriodeSoker | AnnenforelderUttakEøsPeriode,
): periode is AnnenforelderUttakEøsPeriode => {
  // Adjust this based on a property unique to AnnenforelderUttakEøsPeriode
  return 'trekkdager' in periode;
};

const hentApTekst = (
  manuellBehandlingÅrsak: ManuellBehandlingÅrsak,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  stonadskonto: UttakStonadskontoer,
  periodeTypeKode: UttakPeriodeType,
): ReactElement[] => {
  const aksjonspunktTekster = [];

  if (manuellBehandlingÅrsak === '5001') {
    const arbeidsForhold = getCorrectEmptyArbeidsForhold(
      alleKodeverk,
      arbeidsgiverOpplysningerPerId,
      periodeTypeKode,
      stonadskonto,
    );
    const arbeidsForholdMedNullDagerIgjen = arbeidsForhold.join();
    if (arbeidsForhold.length > 1) {
      aksjonspunktTekster.push(
        <FormattedMessage
          key="manuellÅrsak"
          id="UttakPanel.manuellBehandlingÅrsakArbeidsforhold"
          values={{ arbeidsforhold: arbeidsForholdMedNullDagerIgjen }}
        />,
      );
    } else if (arbeidsForhold.length === 1) {
      aksjonspunktTekster.push(
        <FormattedMessage
          key="manuellÅrsak"
          id="UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold"
          values={{ arbeidsforhold: arbeidsForhold }}
        />,
      );
    } else {
      aksjonspunktTekster.push(
        <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
          {alleKodeverk['ManuellBehandlingÅrsak'].find(k => k.kode === manuellBehandlingÅrsak)?.navn}
        </React.Fragment>,
      );
    }
  } else {
    aksjonspunktTekster.push(
      <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
        {alleKodeverk['ManuellBehandlingÅrsak'].find(k => k.kode === manuellBehandlingÅrsak)?.navn}
      </React.Fragment>,
    );
  }

  return aksjonspunktTekster;
};

const kalkulerTrekkdager = (
  aktivitet: PeriodeSokerAktivitet,
  virkedager: number,
  samtidigUttak?: boolean,
  samtidigUttaksprosent?: number,
): number => {
  let uttaksgrad = aktivitet.gradering && !!aktivitet.prosentArbeid ? (100 - aktivitet.prosentArbeid) / 100 : 1;
  uttaksgrad = samtidigUttak && !!samtidigUttaksprosent ? samtidigUttaksprosent / 100 : uttaksgrad;
  const trekkdager = uttaksgrad * virkedager;
  return Number.parseFloat(trekkdager.toFixed(1));
};

const lagPeriode = (valgtPeriode: PeriodeSoker, fom: string, tom: string): PeriodeSoker => {
  const { aktiviteter, samtidigUttak, samtidigUttaksprosent } = valgtPeriode;

  const virkedager = calcDays(fom, tom);
  const oppdaterteAktiviteter = aktiviteter.map(aktivitet =>
    aktivitet.trekkdagerDesimaler && aktivitet.trekkdagerDesimaler > 0
      ? {
          ...aktivitet,
          trekkdagerDesimaler: kalkulerTrekkdager(aktivitet, virkedager, samtidigUttak, samtidigUttaksprosent),
        }
      : aktivitet,
  );

  return {
    ...valgtPeriode,
    fom,
    tom,
    begrunnelse: valgtPeriode.begrunnelse || ' ',
    aktiviteter: oppdaterteAktiviteter,
  };
};

interface Props {
  perioderSøker: PeriodeSoker[];
  perioderAnnenpart: PeriodeSoker[] | AnnenforelderUttakEøsPeriode[];
  behandling: BehandlingFpSak;
  uttaksresultat: Uttaksresultat;
  valgtPeriodeIndex: number;
  oppdaterPeriode: (perioder: PeriodeSoker[]) => void;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakStonadskontoer: UttakStonadskontoer;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  erTilknyttetStortinget: boolean;
  harÅpentAksjonspunkt: boolean;
  endringsdato: string;
}

export const UttakPeriodePanel = ({
  perioderSøker,
  perioderAnnenpart,
  behandling,
  uttaksresultat,
  valgtPeriodeIndex,
  oppdaterPeriode,
  isReadOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  uttakStonadskontoer,
  setValgtPeriodeIndex,
  erTilknyttetStortinget,
  harÅpentAksjonspunkt,
  endringsdato,
}: Props) => {
  const intl = useIntl();

  const [visModal, setVisModal] = useState(false);
  const toggleVisningAvModal = () => setVisModal(verdi => !verdi);

  const allePerioder = perioderAnnenpart.concat(perioderSøker);
  const valgtPeriode = allePerioder[valgtPeriodeIndex];

  if (!valgtPeriode) {
    throw new Error(`Valgtperiode finnes ikke for index ${valgtPeriodeIndex}`);
  }

  const erHovedsøkersPeriode = valgtPeriodeIndex + 1 > perioderAnnenpart.length;
  const erValgtPeriodeEøsPeriode = erEøsPeriode(valgtPeriode);

  const splittPeriode = (dato: string) => {
    if (erEøsPeriode(valgtPeriode)) {
      return;
    }
    const periode1 = lagPeriode(valgtPeriode, valgtPeriode.fom, dato);
    const periode2 = lagPeriode(valgtPeriode, dayjs(dato).add(1, 'days').format('YYYY-MM-DD'), valgtPeriode.tom);
    oppdaterPeriode([periode1, periode2]);
    toggleVisningAvModal();
  };

  const lukkPeriode = () => setValgtPeriodeIndex(undefined);

  const harSoktOmFlerbarnsdager = erHovedsøkersPeriode
    ? perioderSøker.some(p => p.flerbarnsdager)
    : perioderAnnenpart.some(p => !erEøsPeriode(p) && p.flerbarnsdager);

  const erRevurderingFørEndringsdato = behandling.type === 'BT-004' && valgtPeriode.tom < endringsdato;

  const visForrigePeriode = () => {
    setValgtPeriodeIndex(index => (index === 0 || index === undefined ? index : index - 1));
  };
  const visNestePeriode = () => {
    setValgtPeriodeIndex(index => (index === allePerioder.length - 1 || index === undefined ? index : index + 1));
  };

  return (
    <Box borderWidth="1" padding="space-16">
      <VStack gap="space-16">
        <HStack align="center" justify="space-between">
          <Label size="small">
            <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
            {!erValgtPeriodeEøsPeriode && !!valgtPeriode.begrunnelse && !harÅpentAksjonspunkt && <EditedIcon />}
          </Label>
          {!isReadOnly && erHovedsøkersPeriode && !erValgtPeriodeEøsPeriode && !erRevurderingFørEndringsdato && (
            <>
              <Button
                data-color="neutral"
                size="xsmall"
                icon={<ScissorsIcon aria-hidden />}
                onClick={toggleVisningAvModal}
                variant="tertiary"
                type="button"
                title={intl.formatMessage({ id: 'UttakTimeLineData.PeriodeData.DelOppPerioden' })}>
                <FormattedMessage id="UttakTimeLineData.PeriodeData.DelOppPerioden" />
              </Button>
              {visModal && (
                <SplittPeriodeModal
                  cancel={toggleVisningAvModal}
                  fomDato={valgtPeriode.fom}
                  tomDato={valgtPeriode.tom}
                  submit={splittPeriode}
                />
              )}
            </>
          )}

          <HStack gap="space-8">
            <Button
              data-color="neutral"
              size="xsmall"
              icon={<ArrowLeftIcon aria-hidden />}
              onClick={visForrigePeriode}
              variant="secondary"
              type="button"
              title={intl.formatMessage({ id: 'UttakPeriodePanel.prevPeriod' })}>
              <FormattedMessage id="UttakPeriodePanel.prevPeriodShort" />
            </Button>
            <Button
              data-color="neutral"
              size="xsmall"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={visNestePeriode}
              variant="secondary"
              type="button"
              title={intl.formatMessage({ id: 'UttakPeriodePanel.nextPeriod' })}
              iconPosition="right">
              <FormattedMessage id="UttakPeriodePanel.nextPeriodShort" />
            </Button>
            <Button
              data-color="neutral"
              size="xsmall"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="tertiary"
              type="button"
              title={intl.formatMessage({ id: 'UttakPeriodePanel.LukkPeriode' })} />
          </HStack>
        </HStack>
        {erValgtPeriodeEøsPeriode && <UttakPeriodeInfoEØS valgtPeriode={valgtPeriode} alleKodeverk={alleKodeverk} />}
        {!erValgtPeriodeEøsPeriode && (
          <>
            {valgtPeriode.manuellBehandlingÅrsak && valgtPeriode.manuellBehandlingÅrsak !== '-' && (
              <AksjonspunktHelpTextHTML>
                {hentApTekst(
                  valgtPeriode.manuellBehandlingÅrsak,
                  alleKodeverk,
                  arbeidsgiverOpplysningerPerId,
                  uttakStonadskontoer,
                  valgtPeriode.periodeType ?? '-',
                )}
              </AksjonspunktHelpTextHTML>
            )}
            <UttakPeriodeForm
              valgtPeriode={valgtPeriode}
              oppdaterPeriode={oppdaterPeriode}
              isReadOnly={isReadOnly || !erHovedsøkersPeriode || erRevurderingFørEndringsdato}
              erHovedsøkersPeriode={erHovedsøkersPeriode}
              lukkPeriodeVisning={lukkPeriode}
              alleKodeverk={alleKodeverk}
              muligeÅrsaker={uttaksresultat.muligeÅrsaker}
              årsakFilter={uttaksresultat.årsakFilter}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
              erTilknyttetStortinget={erTilknyttetStortinget}
            />
          </>
        )}
      </VStack>
    </Box>
  );
};
