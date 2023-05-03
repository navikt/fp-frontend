import React, { FunctionComponent, useState, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Timeline } from '@navikt/ds-react-internal';
import {
  FigureOutwardIcon,
  SilhouetteIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import { BodyShort, Button } from '@navikt/ds-react';
import { DateLabel, FloatRight, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { soknadType } from '@navikt/fp-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  AlleKodeverk,
  Kjønnkode,
  BeregningsresultatPeriode,
  KjønnkodeEnum,
  FamilieHendelseSamling,
} from '@navikt/fp-types';

import TilkjentYtelseTimelineData from './TilkjentYtelseTimelineData';

import styles from './tilkjentYtelse.module.css';

type Periode = {
  id: number;
  status: 'success' | 'neutral';
  start: Date;
  end: Date;
};

const gradertKlassenavn = 'neutral';
const innvilgetKlassenavn = 'success';

const getStatusForPeriode = (periode: BeregningsresultatPeriode): 'neutral' | 'success' => {
  const graderteAndeler = periode.andeler.filter(andel => andel.uttak && andel.uttak.gradering === true);
  return graderteAndeler.length === 0 ? innvilgetKlassenavn : gradertKlassenavn;
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
      status: getStatusForPeriode(periode),
      start: dayjs(periode.fom).toDate(),
      end: dayjs(periode.tom).add(1, 'days').toDate(),
      id: index,
    }));

interface OwnProps {
  beregningsresultatPeriode?: BeregningsresultatPeriode[];
  soknadDate: string;
  familieHendelseSamling: FamilieHendelseSamling;
  hovedsokerKjonnKode: Kjønnkode;
  isSoknadSvangerskapspenger: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
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
  isSoknadSvangerskapspenger,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const [valgtPeriode, setValgtPeriode] = useState<Periode | null>();

  const perioder = formatPerioder(beregningsresultatPeriode);

  const openPeriodInfo = (): void => {
    if (valgtPeriode) {
      setValgtPeriode(null);
    } else {
      setValgtPeriode(perioder[0]);
    }
  };

  const nextPeriod = (): void => {
    const newIndex = perioder.findIndex(periode => periode.id === valgtPeriode.id) + 1;
    if (newIndex < perioder.length) {
      setValgtPeriode(perioder[newIndex]);
    }
  };

  const prevPeriod = (): void => {
    const newIndex = perioder.findIndex(periode => periode.id === valgtPeriode.id) - 1;
    if (newIndex >= 0) {
      setValgtPeriode(perioder[newIndex]);
    }
  };

  const selectHandler = (id: number): void => {
    setValgtPeriode(perioder.find(periode => periode.id === id));
  };

  const [startDato, setStartDato] = useState(perioder[0].start);
  const [endDato, setEndDato] = useState(perioder[perioder.length - 1].end);

  const goBackward = () => {
    setStartDato(dayjs(startDato).subtract(1, 'month').toDate());
    setEndDato(dayjs(endDato).subtract(1, 'month').toDate());
  };
  const goForward = () => {
    setStartDato(oldStart => dayjs(oldStart).add(1, 'month').toDate());
    setEndDato(oldEnd => dayjs(oldEnd).add(1, 'month').toDate());
  };

  const familiehendelseData = useMemo(() => getFamilieHendelseData(familieHendelseSamling), [familieHendelseSamling]);

  return (
    <>
      <Timeline
        startDate={dayjs(startDato).subtract(1, 'days').toDate()}
        endDate={dayjs(endDato).add(2, 'days').toDate()}
      >
        <Timeline.Pin date={dayjs(soknadDate).toDate()}>
          <BodyShort>
            <FormattedMessage id="TilkjentYtelse.Soknadsdato" />
          </BodyShort>
          <BodyShort>
            <DateLabel dateString={soknadDate} />
          </BodyShort>
        </Timeline.Pin>
        <Timeline.Pin date={dayjs(familiehendelseData.dato).toDate()}>
          <BodyShort>
            <FormattedMessage id={familiehendelseData.textId} />
          </BodyShort>
          <BodyShort>
            <DateLabel dateString={familiehendelseData.dato} />
          </BodyShort>
        </Timeline.Pin>
        <Timeline.Row
          label={hovedsokerKjonnKode === KjønnkodeEnum.KVINNE ? 'Kvinne' : 'Annen part'}
          icon={
            hovedsokerKjonnKode === KjønnkodeEnum.KVINNE ? (
              <FigureOutwardIcon width={20} height={20} />
            ) : (
              <SilhouetteIcon width={20} height={20} />
            )
          }
        >
          {perioder.map(periode => (
            <Timeline.Period
              key={periode.id}
              start={periode.start}
              end={periode.end}
              status={periode.status}
              onSelectPeriod={() => selectHandler(periode.id)}
              isActive={valgtPeriode?.id === periode.id}
            />
          ))}
        </Timeline.Row>
        <Timeline.Zoom>
          <Timeline.Zoom.Button label="6 mnd" interval="month" count={6} />
          <Timeline.Zoom.Button label="9 mnd" interval="month" count={9} />
        </Timeline.Zoom>
      </Timeline>
      <div className={styles.space} />
      <FloatRight>
        <Button
          size="small"
          icon={valgtPeriode ? <ArrowUpIcon aria-hidden /> : <ArrowDownIcon aria-hidden />}
          onClick={openPeriodInfo}
          variant="secondary-neutral"
          title="Åpne info om første periode"
        />
        <Button size="small" icon={<ArrowLeftIcon aria-hidden />} onClick={goBackward} variant="secondary-neutral" />
        <Button size="small" icon={<ArrowRightIcon aria-hidden />} onClick={goForward} variant="secondary-neutral" />
      </FloatRight>
      {valgtPeriode && (
        <>
          <VerticalSpacer eightPx />
          <TilkjentYtelseTimelineData
            alleKodeverk={alleKodeverk}
            selectedItemData={beregningsresultatPeriode[valgtPeriode.id]}
            callbackForward={nextPeriod}
            callbackBackward={prevPeriod}
            isSoknadSvangerskapspenger={isSoknadSvangerskapspenger}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </>
      )}
    </>
  );
};

export default TilkjentYtelse;
