import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
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

import styles from './besteManederVisningPanel.less';

const månedsnavn = {
  0: 'Januar',
  1: 'Februar',
  2: 'Mars',
  3: 'April',
  4: 'Mai',
  5: 'Juni',
  6: 'Juli',
  7: 'August',
  8: 'September',
  9: 'Oktober',
  10: 'November',
  11: 'Desember',
};

const lagMånedVisning = (dato: moment.Moment): string => {
  const år = dato.year();
  const måned = dato.month();
  return `${månedsnavn[måned]} - ${år}`;
};

const formatDate = (date: string): string => (date ? lagMånedVisning(moment(date, ISO_DATE_FORMAT)) : '-');

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
  const agOpplysning = arbeidsgiverOpplysninger[inntekt.arbeidsgiverId];
  if (!agOpplysning) {
    return getKodeverkNavn(inntekt.opptjeningAktivitetType, KodeverkType.OPPTJENING_AKTIVITET_TYPE);
  }
  if (agOpplysning.erPrivatPerson) {
    return agOpplysning.fødselsdato
      ? `${agOpplysning.navn} (${moment(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})`
      : agOpplysning.navn;
  }
  return `${agOpplysning.navn} (${agOpplysning.identifikator})`;
};

const lagInntektRader = (inntekter: BesteberegningInntekt[], arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string): ReactElement[] => (
  inntekter.map((inntekt: BesteberegningInntekt, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <TableRow key={index}>
      <TableColumn>
        <BodyShort size="small">
          {lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, getKodeverkNavn)}
        </BodyShort>
      </TableColumn>
      <TableColumn>
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
  const rows = [];
  rows.push(lagInntektRader(inntekter, arbeidsgiverOpplysninger, getKodeverkNavn));
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

const sorterEtterMåned = (besteMåneder : Månedsgrunnlag[]) => [...besteMåneder].sort((a, b) => moment(a.fom).diff(moment(b.fom)));

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
