import React, { FunctionComponent, useState, useMemo, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Timeline } from '@navikt/ds-react-internal';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  MinusIcon,
  PercentIcon,
  CheckmarkCircleIcon,
  SilhouetteFillIcon,
  FigureOutwardFillIcon,
} from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import { BodyShort, Button } from '@navikt/ds-react';
import { DateLabel, FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KodeverkType, fagsakYtelseType, soknadType } from '@navikt/fp-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  AlleKodeverk,
  Kjønnkode,
  BeregningsresultatPeriode,
  KjønnkodeEnum,
  FamilieHendelseSamling,
  Fagsak,
} from '@navikt/fp-types';

import TilkjentYtelseTimelineData from './TilkjentYtelseTimelineData';

import styles from './tilkjentYtelse.module.css';

type Periode = {
  id: number;
  start: Date;
  end: Date;
  erGradert: boolean;
  periode: BeregningsresultatPeriode;
};

const sjekkOmGradert = (periode: BeregningsresultatPeriode): boolean => {
  const graderteAndeler = periode.andeler.filter(andel => andel.uttak && andel.uttak.gradering === true);
  return graderteAndeler.length > 0;
};

const getFamilieHendelseData = (familieHendelseSamling: FamilieHendelseSamling): { dato: string; textId: string } => {
  const familieHendelse = familieHendelseSamling.gjeldende || familieHendelseSamling.oppgitt;
  if (familieHendelse.soknadType === soknadType.FODSEL) {
    if (familieHendelse.avklartBarn && familieHendelse.avklartBarn.length > 0) {
      return { dato: familieHendelse.avklartBarn[0].fodselsdato, textId: 'TilkjentYtelse.Fodselsdato' };
    }
    return { dato: familieHendelse.termindato, textId: 'TilkjentYtelse.Termindato' };
  }

  if (familieHendelse.omsorgsovertakelseDato) {
    return { dato: familieHendelse.omsorgsovertakelseDato, textId: 'TilkjentYtelse.Omsorgsovertakelsesdato' };
  }

  return { dato: familieHendelse.adopsjonFodelsedatoer[0], textId: 'TilkjentYtelse.Fodselsdato' };
};

const formatPerioder = (perioder: BeregningsresultatPeriode[]): Periode[] =>
  perioder
    .filter(periode => periode.andeler[0] && periode.dagsats)
    .map<Periode>((periode, index: number) => ({
      erGradert: sjekkOmGradert(periode),
      start: dayjs(periode.fom).toDate(),
      end: dayjs(periode.tom).add(1, 'days').toDate(),
      id: index,
      periode,
    }));

const finnRolle = (fagsak: Fagsak, alleKodeverk: AlleKodeverk): string | undefined => {
  const kodeverk = alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE];
  return kodeverk.find(k => k.kode === fagsak.relasjonsRolleType)?.navn;
};

interface OwnProps {
  beregningsresultatPeriode?: BeregningsresultatPeriode[];
  soknadDate: string;
  familieHendelseSamling: FamilieHendelseSamling;
  hovedsokerKjonnKode: Kjønnkode;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

/**
 * TilkjentYtelse
 *
 * Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse
 */
const TilkjentYtelse: FunctionComponent<OwnProps> = ({
  beregningsresultatPeriode,
  soknadDate,
  familieHendelseSamling,
  hovedsokerKjonnKode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fagsak,
}) => {
  const intl = useIntl();
  const [valgtPeriode, setValgtPeriode] = useState<Periode | null>();

  const perioder = useMemo(() => formatPerioder(beregningsresultatPeriode), [beregningsresultatPeriode]);

  const lukkPeriode = useCallback((): void => {
    setValgtPeriode(null);
  }, []);

  const nextPeriod = useCallback((): void => {
    const newIndex = perioder.findIndex(periode => periode.id === valgtPeriode.id) + 1;
    if (newIndex < perioder.length) {
      setValgtPeriode(perioder[newIndex]);
    }
  }, [perioder, valgtPeriode, setValgtPeriode]);

  const prevPeriod = useCallback((): void => {
    const newIndex = perioder.findIndex(periode => periode.id === valgtPeriode.id) - 1;
    if (newIndex >= 0) {
      setValgtPeriode(perioder[newIndex]);
    }
  }, [perioder, valgtPeriode, setValgtPeriode]);

  const selectHandler = useCallback(
    (id: number): void => {
      setValgtPeriode(perioder.find(periode => periode.id === id));
    },
    [setValgtPeriode, perioder],
  );

  const originalStartDato = dayjs(perioder[0].start);
  const originalEndDato = dayjs(perioder[perioder.length - 1].end);

  const [startDato, setStartDato] = useState(originalStartDato);
  const [endDato, setEndDato] = useState(originalEndDato);

  const goBackward = () => {
    if (!startDato.subtract(1, 'month').isBefore(originalStartDato)) {
      setStartDato(startDato.subtract(1, 'month'));
      setEndDato(endDato.subtract(1, 'month'));
    }
  };
  const goForward = () => {
    if (!endDato.add(1, 'month').isAfter(originalEndDato)) {
      setStartDato(startDato.add(1, 'month'));
      setEndDato(endDato.add(1, 'month'));
    }
  };

  const zoomIn = () => {
    if (!startDato.add(3, 'month').isAfter(endDato)) {
      setStartDato(startDato.add(1, 'month'));
      setEndDato(endDato.subtract(1, 'month'));
    }
  };

  const zoomOut = () => {
    if (endDato.add(1, 'month').diff(startDato.subtract(1, 'month'), 'months') < 36) {
      setStartDato(startDato.subtract(1, 'month'));
      setEndDato(endDato.add(1, 'month'));
    }
  };

  const familiehendelseData = useMemo(() => getFamilieHendelseData(familieHendelseSamling), [familieHendelseSamling]);
  return (
    <>
      <Timeline startDate={startDato.subtract(1, 'days').toDate()} endDate={endDato.add(2, 'days').toDate()}>
        <Timeline.Pin date={dayjs(soknadDate).toDate()}>
          <BodyShort>
            <FormattedMessage id="TilkjentYtelse.Soknadsdato" />
          </BodyShort>
          <BodyShort>
            <DateLabel dateString={soknadDate} />
          </BodyShort>
        </Timeline.Pin>
        {familiehendelseData.dato && (
          <Timeline.Pin date={dayjs(familiehendelseData.dato).toDate()}>
            <BodyShort>
              <FormattedMessage id={familiehendelseData.textId} />
            </BodyShort>
            <BodyShort>
              <DateLabel dateString={familiehendelseData.dato} />
            </BodyShort>
          </Timeline.Pin>
        )}
        <Timeline.Row
          label={finnRolle(fagsak, alleKodeverk)}
          icon={
            hovedsokerKjonnKode === KjønnkodeEnum.KVINNE ? (
              <FigureOutwardFillIcon width={20} height={20} color="var(--a-red-200)" />
            ) : (
              <SilhouetteFillIcon width={20} height={20} color="var(--a-blue-600)" />
            )
          }
        >
          {perioder.map(periode => (
            <Timeline.Period
              key={periode.id}
              start={periode.start}
              end={periode.end}
              status="success"
              onSelectPeriod={() => selectHandler(periode.id)}
              isActive={valgtPeriode?.id === periode.id}
              icon={periode.erGradert ? <PercentIcon aria-hidden /> : <CheckmarkCircleIcon aria-hidden />}
              title={periode.erGradert ? intl.formatMessage({ id: 'TilkjentYtelse.GradertPeriode' }) : ''}
            />
          ))}
        </Timeline.Row>
      </Timeline>
      <VerticalSpacer twentyPx />
      <FloatRight>
        <Button
          className={styles.margin}
          size="small"
          icon={<PlusIcon aria-hidden />}
          onClick={zoomIn}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ZoomInn' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<MinusIcon aria-hidden />}
          onClick={zoomOut}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ZoomUt' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowLeftIcon aria-hidden />}
          onClick={goBackward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ScrollTilVenstre' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowRightIcon aria-hidden />}
          onClick={goForward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ScrollTilHogre' })}
        />
      </FloatRight>
      <div className={styles.space} />
      {valgtPeriode && (
        <>
          <VerticalSpacer eightPx />
          <TilkjentYtelseTimelineData
            alleKodeverk={alleKodeverk}
            selectedItemData={valgtPeriode.periode}
            callbackForward={nextPeriod}
            callbackBackward={prevPeriod}
            isSoknadSvangerskapspenger={fagsak.fagsakYtelseType === fagsakYtelseType.SVANGERSKAPSPENGER}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            lukkPeriode={lukkPeriode}
          />
        </>
      )}
    </>
  );
};

export default TilkjentYtelse;
