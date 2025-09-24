import React, { type ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Box, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, EditedIcon } from '@navikt/ft-ui-komponenter';
import { calcDays } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { BehandlingTypeEnum, ManuellBehandlingÅrsak, StonadskontoType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  AnnenforelderUttakEøsPeriode,
  ArbeidsgiverOpplysningerPerId,
  Behandling,
  foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType,
  foreldrepenger_behandlingslager_uttak_fp_ManuellBehandlingÅrsak,
  PeriodeSoker,
  PeriodeSokerAktivitet,
  Uttaksresultat,
  UttakStonadskontoer,
} from '@navikt/fp-types';

import { SplittPeriodeModal } from './splitt/SplittPeriodeModal';
import { UttakPeriodeForm } from './UttakPeriodeForm';
import { UttakPeriodeInfoEØS } from './UttakPeriodeinfoEøs.tsx';

const getCorrectEmptyArbeidsForhold = (
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode: string,
  stonadskonto: UttakStonadskontoer,
): string[] => {
  const arbeidsForholdMedNullDagerIgjenArray: string[] = [];

  let arbeidsforholdMedPositivSaldoFinnes = false;

  const konto = stonadskonto.stonadskontoer[periodeTypeKode as StonadskontoType];

  if (konto?.aktivitetSaldoDtoList) {
    konto.aktivitetSaldoDtoList.forEach(item => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiverReferanse) {
          const arbeidsgiverOpplysninger =
            arbeidsgiverOpplysningerPerId[item.aktivitetIdentifikator.arbeidsgiverReferanse];
          arbeidsForholdMedNullDagerIgjenArray.push(arbeidsgiverOpplysninger?.navn ?? 'Fant ikke navn');
        } else {
          const navn = alleKodeverk['UttakArbeidType'].find(
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

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] må da være falsk positiv?
  return arbeidsforholdMedPositivSaldoFinnes ? arbeidsForholdMedNullDagerIgjenArray : [];
};

const erEøsPeriode = (
  periode: PeriodeSoker | AnnenforelderUttakEøsPeriode,
): periode is AnnenforelderUttakEøsPeriode => {
  // Adjust this based on a property unique to AnnenforelderUttakEøsPeriode
  return 'trekkdager' in periode;
};

const hentApTekst = (
  manuellBehandlingÅrsak: foreldrepenger_behandlingslager_uttak_fp_ManuellBehandlingÅrsak,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  stonadskonto: UttakStonadskontoer,
  periodeTypeKode: foreldrepenger_behandlingslager_behandling_ytelsefordeling_periode_UttakPeriodeType,
): ReactElement[] => {
  const aksjonspunktTekster = [];

  if (manuellBehandlingÅrsak === ManuellBehandlingÅrsak.STØNADSKONTO_TOM_FOR_STØNADSDAGER) {
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
  perioderAnnenpart: PeriodeSoker[] | AnnenforelderUttakEøsPeriode[];
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

  const erRevurderingFørEndringsdato =
    behandling.type === BehandlingTypeEnum.REVURDERING && valgtPeriode.tom < endringsdato;

  const visForrigePeriode = () => {
    setValgtPeriodeIndex(index => (index === 0 || index === undefined ? index : index - 1));
  };
  const visNestePeriode = () => {
    setValgtPeriodeIndex(index => (index === allePerioder.length - 1 || index === undefined ? index : index + 1));
  };

  return (
    <Box.New borderWidth="1" padding="4">
      <VStack gap="space-16">
        <HStack align="center" justify="space-between">
          <Label size="small">
            <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
            {!erValgtPeriodeEøsPeriode && !!valgtPeriode.begrunnelse && !harÅpentAksjonspunkt && <EditedIcon />}
          </Label>
          {!isReadOnly && erHovedsøkersPeriode && !erValgtPeriodeEøsPeriode && !erRevurderingFørEndringsdato && (
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

          <HStack gap="space-8">
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
              årsakFilter={uttaksresultat.årsakFilter}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
              erTilknyttetStortinget={erTilknyttetStortinget}
            />
          </>
        )}
      </VStack>
    </Box.New>
  );
};
