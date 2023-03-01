import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';
import { Label, BodyShort } from '@navikt/ds-react';
import {
  FlexColumn,
  FlexContainer,
  FlexRow,
  Table, TableColumn, TableRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';
import {
  BesteberegningInntekt,
  Månedsgrunnlag,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import styles from './besteManederVisningPanel.module.css';

const lagMånedVisning = (dato: dayjs.Dayjs): string => {
  const år = dato.year();
  const maanedNavn = dato.locale(norskFormat).format('MMMM');
  const formattedMaaned = maanedNavn.charAt(0).toUpperCase() + maanedNavn.slice(1);
  return `${formattedMaaned} - ${år}`;
};

const formatDate = (date: string): string => (date ? lagMånedVisning(dayjs(date, ISO_DATE_FORMAT)) : '-');

interface BesteMånederProps {
  besteMåneder: Månedsgrunnlag[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string;
}

const headerColumnContent = [
  <Label size="small" key="AktivitetNøkkel">
    {' '}
    <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Aktivitet" />
    {' '}
  </Label>,
  <Label size="small" key="InntektNøkkel">
    {' '}
    <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Inntekt" />
    {' '}
  </Label>,
];

interface InntekttabellProps {
    inntekter: BesteberegningInntekt[];
    arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
    getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string;
}

const lagVisningsNavn = (inntekt: BesteberegningInntekt, arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string): string => {
  const agOpplysning = inntekt.arbeidsgiverId ? arbeidsgiverOpplysninger[inntekt.arbeidsgiverId] : undefined;
  if (!agOpplysning) {
    return getKodeverkNavn(inntekt.opptjeningAktivitetType, KodeverkType.OPPTJENING_AKTIVITET_TYPE);
  }
  if (agOpplysning.erPrivatPerson) {
    return agOpplysning.fødselsdato
      ? `${agOpplysning.navn} (${dayjs(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})`
      : agOpplysning.navn;
  }
  return `${agOpplysning.navn} (${agOpplysning.identifikator})`;
};

const lagInntektRader = (inntekter: BesteberegningInntekt[], arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string): ReactElement[] => (
  inntekter.map((inntekt: BesteberegningInntekt, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <TableRow key={index} className={styles.månedRad}>
      <TableColumn className={styles.månedAktivitet}>
        <BodyShort size="small">
          {lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, getKodeverkNavn)}
        </BodyShort>
      </TableColumn>
      <TableColumn className={styles.månedInntekt}>
        <BodyShort size="small">
          {formatCurrencyNoKr(inntekt.inntekt)}
        </BodyShort>
      </TableColumn>
    </TableRow>
  ))
);

const lagSummeringsRad = (inntekter: BesteberegningInntekt[], labelId: string): ReactElement => (inntekter.length === 0 ? <div /> : (
  <TableRow key="sum">
    <TableColumn>
      <Label size="small">
        <FormattedMessage id={labelId} />
      </Label>
    </TableColumn>
    <TableColumn>
      <Label size="small">
        {formatCurrencyNoKr(inntekter.map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0)) }
      </Label>
    </TableColumn>
  </TableRow>
));

const Inntekttabell: FunctionComponent<InntekttabellProps> = ({
  inntekter,
  arbeidsgiverOpplysninger,
  getKodeverkNavn,
}) => {
  const rows: ReactElement[] = [];
  lagInntektRader(inntekter, arbeidsgiverOpplysninger, getKodeverkNavn).forEach((rad) => rows.push(rad));
  rows.push(lagSummeringsRad(inntekter, 'Inntekttabell.Sum'));
  return (
    <div>
      <Table headerColumnContent={headerColumnContent} noHover>
        {rows}
      </Table>
    </div>
  );
};

const lagRadMedMåneder = (måneder: Månedsgrunnlag[],
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string): ReactElement => (
    <FlexContainer>
      <FlexRow>
        {måneder.map((månedsgrunnlag: Månedsgrunnlag) => {
          const key = månedsgrunnlag.fom;
          return (
            <FlexColumn className={styles.colWidth} key={key}>
              <BodyShort size="small">
                {formatDate(månedsgrunnlag.fom)}
              </BodyShort>
              <Inntekttabell
                inntekter={månedsgrunnlag.inntekter}
                arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
                getKodeverkNavn={getKodeverkNavn}
              />
            </FlexColumn>
          );
        })}
      </FlexRow>
    </FlexContainer>
);

const finnÅrsinntekt = (besteMåneder : Månedsgrunnlag[]): number => {
  const snittPrMnd = besteMåneder.flatMap((måned) => måned.inntekter).map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0) / 6;
  return snittPrMnd * 12;
};

const sorterEtterMåned = (besteMåneder : Månedsgrunnlag[]) => [...besteMåneder].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));

/**
 * BesteManederVisningPanel
 *
 * Presentasjonskomponent. Viser månedene som brukes i beregning etter §14-7, tredje ledd
 */
const BesteManederVisningPanel: FunctionComponent<BesteMånederProps> = ({
  besteMåneder,
  arbeidsgiverOpplysninger,
  getKodeverkNavn,
}) => {
  const sorterteMåneder = useMemo(() => sorterEtterMåned(besteMåneder), [besteMåneder]);
  return (
    <>
      <Label size="small">
        {' '}
        <FormattedMessage id="Inntekttabell.Tittel" />
        {' '}
      </Label>
      <VerticalSpacer twentyPx />
      {lagRadMedMåneder(sorterteMåneder.slice(0, 2), arbeidsgiverOpplysninger, getKodeverkNavn)}
      <VerticalSpacer twentyPx />
      {lagRadMedMåneder(sorterteMåneder.slice(2, 4), arbeidsgiverOpplysninger, getKodeverkNavn)}
      <VerticalSpacer twentyPx />
      {lagRadMedMåneder(sorterteMåneder.slice(4, 6), arbeidsgiverOpplysninger, getKodeverkNavn)}
      <VerticalSpacer twentyPx />
      <Table noHover>
        <TableRow>
          <TableColumn>
            <BodyShort size="small">
              <FormattedMessage id="Inntekttabell.BeregnetÅrsinntekt" />
            </BodyShort>
          </TableColumn>
          <TableColumn>
            <BodyShort size="small">
              {formatCurrencyNoKr(finnÅrsinntekt(besteMåneder))}
            </BodyShort>
          </TableColumn>
        </TableRow>
      </Table>
    </>
  );
};

export default BesteManederVisningPanel;
