import React, { type ReactElement, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Box, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, EditedIcon } from '@navikt/ft-ui-komponenter';
import { calcDays } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { BehandlingType, KodeverkType, StonadskontoType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  PeriodeSoker,
  PeriodeSokerAktivitet,
  Uttaksresultat,
  UttakStonadskontoer,
} from '@navikt/fp-types';

import { SplittPeriodeModal } from './splitt/SplittPeriodeModal';
import { UttakPeriodeForm } from './UttakPeriodeForm';

const getCorrectEmptyArbeidsForhold = (
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode: string,
  stonadskonto: UttakStonadskontoer,
): string[] => {
  const arbeidsForholdMedNullDagerIgjenArray: string[] = [];

  let arbeidsforholdMedPositivSaldoFinnes = false;

  const konto = stonadskonto?.stonadskontoer
    ? stonadskonto?.stonadskontoer[periodeTypeKode as StonadskontoType]
    : undefined;
  if (konto?.aktivitetSaldoDtoList) {
    konto.aktivitetSaldoDtoList.forEach(item => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiverReferanse) {
          const arbeidsgiverOpplysninger =
            arbeidsgiverOpplysningerPerId[item.aktivitetIdentifikator.arbeidsgiverReferanse];
          arbeidsForholdMedNullDagerIgjenArray.push(arbeidsgiverOpplysninger.navn);
        } else {
          const navn = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE].find(
            k => k.kode === item.aktivitetIdentifikator.uttakArbeidType,
          )?.navn;
          if (navn) {
            arbeidsForholdMedNullDagerIgjenArray.push(navn);
          }
        }
      } else {
        arbeidsforholdMedPositivSaldoFinnes = true;
      }
    });
  }

  return arbeidsforholdMedPositivSaldoFinnes ? arbeidsForholdMedNullDagerIgjenArray : [];
};

const hentApTekst = (
  manuellBehandlingÅrsak: string,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  stonadskonto: UttakStonadskontoer,
  periodeTypeKode: string,
): ReactElement[] => {
  const aksjonspunktTekster = [];

  // Fix - ta bort 5001 med verdi fra kodeverk
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
          {alleKodeverk[KodeverkType.MANUELL_BEHANDLING_AARSAK].find(k => k.kode === manuellBehandlingÅrsak)?.navn}
        </React.Fragment>,
      );
    }
  } else {
    aksjonspunktTekster.push(
      <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
        {alleKodeverk[KodeverkType.MANUELL_BEHANDLING_AARSAK].find(k => k.kode === manuellBehandlingÅrsak)?.navn}
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
  return parseFloat(trekkdager.toFixed(1));
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
  behandling: Behandling;
  uttaksresultat: Uttaksresultat;
  valgtPeriodeIndex: number;
  oppdaterPeriode: (perioder: PeriodeSoker[]) => void;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakStonadskontoer: UttakStonadskontoer;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  erTilknyttetStortinget: boolean;
  harÅpneAksjonspunkter: boolean;
  endringsdato: string;
}

export const UttakPeriodePanel = ({
  perioderSøker,
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
  harÅpneAksjonspunkter,
  endringsdato,
}: Props) => {
  const intl = useIntl();

  const [visModal, setVisModal] = useState(false);
  const toggleVisningAvModal = useCallback(() => setVisModal(verdi => !verdi), []);

  const { perioderAnnenpart } = uttaksresultat;

  const allePerioder = perioderAnnenpart.concat(perioderSøker);
  const valgtPeriode = allePerioder[valgtPeriodeIndex];

  const erHovedsøkersPeriode = valgtPeriodeIndex + 1 > perioderAnnenpart.length;

  const splittPeriode = useCallback(
    (dato: string) => {
      const periode1 = lagPeriode(valgtPeriode, valgtPeriode.fom, dato);
      const periode2 = lagPeriode(valgtPeriode, dayjs(dato).add(1, 'days').format('YYYY-MM-DD'), valgtPeriode.tom);
      oppdaterPeriode([periode1, periode2]);
      toggleVisningAvModal();
    },
    [valgtPeriodeIndex],
  );

  const lukkPeriode = useCallback(() => setValgtPeriodeIndex(undefined), []);

  const harSoktOmFlerbarnsdager = erHovedsøkersPeriode
    ? perioderSøker.some(p => p.flerbarnsdager)
    : perioderAnnenpart.some(p => p.flerbarnsdager);

  const erRevurderingFørEndringsdato =
    behandling.type === BehandlingType.REVURDERING && valgtPeriode.tom < endringsdato;

  const visForrigePeriode = useCallback(() => {
    setValgtPeriodeIndex(index => (index === 0 || index === undefined ? index : index - 1));
  }, []);
  const visNestePeriode = useCallback(() => {
    setValgtPeriodeIndex(index => (index === allePerioder.length - 1 || index === undefined ? index : index + 1));
  }, [allePerioder.length]);

  return (
    <>
      <Box borderWidth="1" padding="4">
        <VStack gap="4">
          <HStack align="center" justify="space-between">
            <Label size="small">
              <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
              {!!valgtPeriode.begrunnelse && !harÅpneAksjonspunkter && <EditedIcon />}
            </Label>
            {!isReadOnly && erHovedsøkersPeriode && !erRevurderingFørEndringsdato && (
              <>
                <Button
                  size="xsmall"
                  icon={<ScissorsIcon aria-hidden />}
                  onClick={toggleVisningAvModal}
                  variant="tertiary-neutral"
                  type="button"
                  title={intl.formatMessage({ id: 'UttakTimeLineData.PeriodeData.DelOppPerioden' })}
                >
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

            <HStack gap="2">
              <Button
                size="xsmall"
                icon={<ArrowLeftIcon aria-hidden />}
                onClick={visForrigePeriode}
                variant="secondary-neutral"
                type="button"
                title={intl.formatMessage({ id: 'UttakPeriodePanel.prevPeriod' })}
              >
                <FormattedMessage id="UttakPeriodePanel.prevPeriodShort" />
              </Button>
              <Button
                size="xsmall"
                icon={<ArrowRightIcon aria-hidden />}
                onClick={visNestePeriode}
                variant="secondary-neutral"
                type="button"
                title={intl.formatMessage({ id: 'UttakPeriodePanel.nextPeriod' })}
                iconPosition="right"
              >
                <FormattedMessage id="UttakPeriodePanel.nextPeriodShort" />
              </Button>
              <Button
                size="xsmall"
                icon={<XMarkIcon aria-hidden />}
                onClick={lukkPeriode}
                variant="tertiary-neutral"
                type="button"
                title={intl.formatMessage({ id: 'UttakPeriodePanel.LukkPeriode' })}
              />
            </HStack>
          </HStack>
          {valgtPeriode.manuellBehandlingÅrsak && valgtPeriode.manuellBehandlingÅrsak !== '-' && (
            <AksjonspunktHelpTextHTML>
              {hentApTekst(
                valgtPeriode.manuellBehandlingÅrsak,
                alleKodeverk,
                arbeidsgiverOpplysningerPerId,
                uttakStonadskontoer,
                valgtPeriode.periodeType,
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
            årsakFilter={uttaksresultat.årsakFilter}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
            erTilknyttetStortinget={erTilknyttetStortinget}
          />
        </VStack>
      </Box>
    </>
  );
};
