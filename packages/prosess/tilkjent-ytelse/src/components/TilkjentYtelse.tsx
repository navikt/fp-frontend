import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckmarkCircleIcon,
  FigureOutwardFillIcon,
  MinusIcon,
  PercentIcon,
  PlusIcon,
  SilhouetteFillIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Timeline, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { FagsakYtelseType, KodeverkType, SoknadType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatPeriode,
  Fagsak,
  FamilieHendelseSamling,
  Kjønnkode,
} from '@navikt/fp-types';
import { KjønnkodeEnum } from '@navikt/fp-types';

import { TilkjentYtelseTimelineData } from './TilkjentYtelseTimelineData';

type Periode = {
  id: number;
  start: Date;
  end: Date;
  erGradert: boolean;
  periode: BeregningsresultatPeriode;
};

interface Props {
  beregningsresultatPeriode?: BeregningsresultatPeriode[];
  søknadsdato: string;
  familiehendelseSamling: FamilieHendelseSamling;
  hovedsøkerKjønnKode?: Kjønnkode;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
}

/**
 * TilkjentYtelse
 *
 * Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse
 */
export const TilkjentYtelse = ({
  beregningsresultatPeriode,
  søknadsdato,
  familiehendelseSamling,
  hovedsøkerKjønnKode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fagsak,
}: Props) => {
  const intl = useIntl();
  const [valgtPeriode, setValgtPeriode] = useState<Periode | null>();

  const perioder = formatPerioder(beregningsresultatPeriode);

  const lukkPeriode = (): void => {
    setValgtPeriode(null);
  };

  const velgNestePeriode = (): void => {
    const newIndex = perioder.findIndex(periode => periode.id === valgtPeriode?.id) + 1;
    if (newIndex < perioder.length) {
      setValgtPeriode(perioder[newIndex]);
    }
  };

  const velgForrigePeriode = (): void => {
    const newIndex = perioder.findIndex(periode => periode.id === valgtPeriode?.id) - 1;
    if (newIndex >= 0) {
      setValgtPeriode(perioder[newIndex]);
    }
  };

  const velgPeriode = (id: number): void => {
    setValgtPeriode(perioder.find(periode => periode.id === id));
  };

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

  const familiehendelseData = getFamiliehendelseData(familiehendelseSamling);

  return (
    <VStack gap="4">
      <Timeline startDate={startDato.toDate()} endDate={endDato.add(1, 'days').toDate()}>
        <Timeline.Pin date={finnSøknadsdatoPinDato(søknadsdato, startDato).toDate()}>
          <BodyShort>
            <FormattedMessage id="TilkjentYtelse.Soknadsdato" />
          </BodyShort>
          <BodyShort>
            <DateLabel dateString={søknadsdato} />
          </BodyShort>
        </Timeline.Pin>
        {familiehendelseData.dato && (
          <Timeline.Pin date={finnFamiliehendelsePinDato(familiehendelseData.dato, startDato).toDate()}>
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
            hovedsøkerKjønnKode === KjønnkodeEnum.KVINNE ? (
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
              onSelectPeriod={() => velgPeriode(periode.id)}
              isActive={valgtPeriode?.id === periode.id}
              icon={periode.erGradert ? <PercentIcon aria-hidden /> : <CheckmarkCircleIcon aria-hidden />}
              title={periode.erGradert ? intl.formatMessage({ id: 'TilkjentYtelse.GradertPeriode' }) : ''}
            />
          ))}
        </Timeline.Row>
      </Timeline>
      <HStack gap="2" justify="end">
        <Button
          size="small"
          icon={<PlusIcon aria-hidden />}
          onClick={zoomIn}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ZoomInn' })}
        />
        <Button
          size="small"
          icon={<MinusIcon aria-hidden />}
          onClick={zoomOut}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ZoomUt' })}
        />
        <Button
          size="small"
          icon={<ArrowLeftIcon aria-hidden />}
          onClick={goBackward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ScrollTilVenstre' })}
        />
        <Button
          size="small"
          icon={<ArrowRightIcon aria-hidden />}
          onClick={goForward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilkjentYtelse.ScrollTilHogre' })}
        />
      </HStack>
      {valgtPeriode && (
        <TilkjentYtelseTimelineData
          alleKodeverk={alleKodeverk}
          valgtBeregningsresultatPeriode={valgtPeriode.periode}
          velgNestePeriode={velgNestePeriode}
          velgForrigePeriode={velgForrigePeriode}
          erSøknadSvangerskapspenger={fagsak.fagsakYtelseType === FagsakYtelseType.SVANGERSKAPSPENGER}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          lukkPeriode={lukkPeriode}
        />
      )}
    </VStack>
  );
};

const sjekkOmGradert = (periode: BeregningsresultatPeriode): boolean => {
  const graderteAndeler = (periode.andeler ?? []).filter(andel => andel.uttak && andel.uttak.gradering === true);
  return graderteAndeler.length > 0;
};

const getFamiliehendelseData = (familieHendelseSamling: FamilieHendelseSamling): { dato?: string; textId: string } => {
  const familieHendelse = familieHendelseSamling.gjeldende ?? familieHendelseSamling.oppgitt;
  if (familieHendelse.soknadType === SoknadType.FODSEL) {
    if (familieHendelse.avklartBarn && familieHendelse.avklartBarn.length > 0) {
      return { dato: familieHendelse.avklartBarn[0].fodselsdato, textId: 'TilkjentYtelse.Fodselsdato' };
    }
    return { dato: familieHendelse.termindato, textId: 'TilkjentYtelse.Termindato' };
  }
  if (familieHendelse.omsorgsovertakelseDato) {
    return { dato: familieHendelse.omsorgsovertakelseDato, textId: 'TilkjentYtelse.Omsorgsovertakelsesdato' };
  }

  return {
    dato: familieHendelse.adopsjonFodelsedatoer ? familieHendelse.adopsjonFodelsedatoer[0] : undefined,
    textId: 'TilkjentYtelse.Fodselsdato',
  };
};

const formatPerioder = (perioder: BeregningsresultatPeriode[] = []): Periode[] =>
  perioder
    .filter(periode => periode.andeler?.[0] && periode.dagsats)
    .map((periode, index: number) => ({
      erGradert: sjekkOmGradert(periode),
      start: dayjs(periode.fom).toDate(),
      end: dayjs(periode.tom).add(1, 'days').toDate(),
      id: index,
      periode,
    }));

const finnRolle = (fagsak: Fagsak, alleKodeverk: AlleKodeverk): string => {
  const kodeverk = alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE];
  return kodeverk.find(k => k.kode === fagsak.relasjonsRolleType)?.navn ?? '';
};

const finnFamiliehendelsePinDato = (familiehendelsedato: string, førstePeriodeFom: dayjs.Dayjs): dayjs.Dayjs => {
  const dato = dayjs(familiehendelsedato);
  return dato.isBefore(førstePeriodeFom) ? førstePeriodeFom.subtract(5, 'days') : dato;
};

const finnSøknadsdatoPinDato = (søknadsdato: string, førstePeriodeFom: dayjs.Dayjs): dayjs.Dayjs => {
  const dato = dayjs(søknadsdato);
  return dato.isBefore(førstePeriodeFom) ? førstePeriodeFom.subtract(15, 'days') : dato;
};
