import React, { ReactElement, FunctionComponent, useCallback, useState } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  AksjonspunktHelpTextHTML,
  EditedIcon,
  FlexColumn,
  FlexContainer,
  FlexRow,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Button, Label, Panel } from '@navikt/ds-react';
import { behandlingType as BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';
import { calcDays } from '@navikt/ft-utils';

import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  PeriodeSoker,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  PeriodeSokerAktivitet,
  Behandling,
  Ytelsefordeling,
} from '@navikt/fp-types';

import { ArrowLeftIcon, ArrowRightIcon, ScissorsIcon, XMarkIcon } from '@navikt/aksel-icons';
import SplittPeriodeModal from './splitt/SplittPeriodeModal';
import UttakPeriodeForm from './UttakPeriodeForm';

import styles from './uttakPeriodePanel.module.css';

const getCorrectEmptyArbeidsForhold = (
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode?: string,
  stonadskonto?: UttakStonadskontoer,
): string[] => {
  const arbeidsForholdMedNullDagerIgjenArray: string[] = [];

  let arbeidsforholdMedPositivSaldoFinnes = false;

  if (stonadskonto?.stonadskontoer[periodeTypeKode]?.aktivitetSaldoDtoList) {
    stonadskonto.stonadskontoer[periodeTypeKode].aktivitetSaldoDtoList.forEach(item => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiverReferanse) {
          const arbeidsgiverOpplysninger =
            arbeidsgiverOpplysningerPerId[item.aktivitetIdentifikator.arbeidsgiverReferanse];
          arbeidsForholdMedNullDagerIgjenArray.push(arbeidsgiverOpplysninger.navn);
        } else {
          const navn = alleKodeverk[KodeverkType.UTTAK_ARBEID_TYPE].find(
            k => k.kode === item.aktivitetIdentifikator.uttakArbeidType,
          )?.navn;
          arbeidsForholdMedNullDagerIgjenArray.push(navn);
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
  stonadskonto?: UttakStonadskontoer,
  periodeTypeKode?: string,
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
  let uttaksgrad = aktivitet.gradering ? (100 - aktivitet.prosentArbeid) / 100 : 1;
  uttaksgrad = samtidigUttak ? samtidigUttaksprosent / 100 : uttaksgrad;
  const trekkdager = uttaksgrad * virkedager;
  return parseFloat(trekkdager.toFixed(1));
};

const lagPeriode = (valgtPeriode: PeriodeSoker, fom: string, tom: string): PeriodeSoker => {
  const { aktiviteter, samtidigUttak, samtidigUttaksprosent } = valgtPeriode;

  const virkedager = calcDays(fom, tom);
  const oppdaterteAktiviteter = aktiviteter.map(aktivitet =>
    aktivitet.trekkdagerDesimaler > 0
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

interface OwnProps {
  perioderSøker: PeriodeSoker[];
  behandling: Behandling;
  ytelsefordeling: Ytelsefordeling;
  uttaksresultatPeriode: UttaksresultatPeriode;
  valgtPeriodeIndex: number | undefined;
  oppdaterPeriode: (perioder: PeriodeSoker[]) => void;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakStonadskontoer: UttakStonadskontoer;
  setValgtPeriodeIndex: React.Dispatch<React.SetStateAction<number>>;
  erTilknyttetStortinget: boolean;
  harÅpneAksjonspunkter: boolean;
}

const UttakPeriodePanel: FunctionComponent<OwnProps> = ({
  perioderSøker,
  behandling,
  ytelsefordeling,
  uttaksresultatPeriode,
  valgtPeriodeIndex,
  oppdaterPeriode,
  isReadOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  uttakStonadskontoer,
  setValgtPeriodeIndex,
  erTilknyttetStortinget,
  harÅpneAksjonspunkter,
}) => {
  const intl = useIntl();

  const [visModal, setVisModal] = useState(false);
  const toggleVisningAvModal = useCallback(() => setVisModal(verdi => !verdi), []);

  const { perioderAnnenpart } = uttaksresultatPeriode;

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
    ? perioderSøker.some(p => p.flerbarnsdager === true)
    : perioderAnnenpart.some(p => p.flerbarnsdager === true);

  const erRevurderingFørEndringsdato =
    ytelsefordeling.endringsdato &&
    behandling.type === BehandlingType.REVURDERING &&
    valgtPeriode.tom < ytelsefordeling.endringsdato;

  const visForrigePeriode = useCallback(() => {
    setValgtPeriodeIndex(index => (index === 0 ? index : index - 1));
  }, []);
  const visNestePeriode = useCallback(() => {
    setValgtPeriodeIndex(index => (index === allePerioder.length - 1 ? index : index + 1));
  }, [allePerioder.length]);

  return (
    <>
      <div className={styles.space} />
      <Panel border>
        <FlexContainer>
          <FlexRow spaceBetween>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
                {!!valgtPeriode.begrunnelse && !harÅpneAksjonspunkter && <EditedIcon />}
              </Label>
            </FlexColumn>
            {!isReadOnly && erHovedsøkersPeriode && !erRevurderingFørEndringsdato && (
              <FlexColumn>
                <Button
                  className={styles.margin}
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
              </FlexColumn>
            )}
            <FlexColumn className={styles.fix}>
              <Button
                className={styles.margin}
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
                className={styles.margin}
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
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer sixteenPx />
        {valgtPeriode.manuellBehandlingÅrsak && valgtPeriode.manuellBehandlingÅrsak !== '-' && (
          <>
            <AksjonspunktHelpTextHTML>
              {hentApTekst(
                valgtPeriode.manuellBehandlingÅrsak,
                alleKodeverk,
                arbeidsgiverOpplysningerPerId,
                uttakStonadskontoer,
                valgtPeriode.periodeType,
              )}
            </AksjonspunktHelpTextHTML>
            <VerticalSpacer twentyPx />
          </>
        )}
        <UttakPeriodeForm
          valgtPeriode={valgtPeriode}
          oppdaterPeriode={oppdaterPeriode}
          isReadOnly={isReadOnly || !erHovedsøkersPeriode || erRevurderingFørEndringsdato}
          erHovedsøkersPeriode={erHovedsøkersPeriode}
          lukkPeriodeVisning={lukkPeriode}
          alleKodeverk={alleKodeverk}
          årsakFilter={uttaksresultatPeriode.årsakFilter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
          erTilknyttetStortinget={erTilknyttetStortinget}
        />
      </Panel>
    </>
  );
};

export default UttakPeriodePanel;
