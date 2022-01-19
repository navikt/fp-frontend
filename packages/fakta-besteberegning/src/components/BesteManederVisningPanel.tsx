import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import {
  Element, Normaltekst,
} from 'nav-frontend-typografi';
import { Row, Column } from 'nav-frontend-grid';
import {
  Table, TableColumn, TableRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, formatCurrencyNoKr } from '@fpsak-frontend/utils';
import {
  BesteberegningInntekt,
  Månedsgrunnlag,
  ArbeidsgiverOpplysningerPerId,
} from '@fpsak-frontend/types';

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
  getKodeverkNavn: (kodeverk: string) => string;
}

const headerColumnContent = [
  <Element key="AktivitetNøkkel">
    {' '}
    <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Aktivitet" />
    {' '}
  </Element>,
  <Element key="InntektNøkkel">
    {' '}
    <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Inntekt" />
    {' '}
  </Element>,
];

interface InntekttabellProps {
    inntekter: BesteberegningInntekt[];
    arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
    getKodeverkNavn: (kodeverk: string) => string;
}

const createKey = (inntekt: BesteberegningInntekt): string => {
  const { opptjeningAktivitetType, arbeidsgiverId, arbeidsforholdId } = inntekt;
  if (arbeidsgiverId != null) {
    return `${arbeidsgiverId} ${arbeidsforholdId}`;
  }
  return opptjeningAktivitetType;
};

const lagVisningsNavn = (inntekt: BesteberegningInntekt, arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string) => string): string => {
  const agOpplysning = arbeidsgiverOpplysninger[inntekt.arbeidsgiverId];
  if (!agOpplysning) {
    return getKodeverkNavn(inntekt.opptjeningAktivitetType);
  }
  if (agOpplysning.erPrivatPerson) {
    return agOpplysning.fødselsdato
      ? `${agOpplysning.navn} (${moment(agOpplysning.fødselsdato).format(DDMMYYYY_DATE_FORMAT)})`
      : agOpplysning.navn;
  }
  return `${agOpplysning.navn} (${agOpplysning.identifikator})`;
};

const lagInntektRader = (inntekter: BesteberegningInntekt[], arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string) => string): ReactElement[] => (
  inntekter.map((inntekt: BesteberegningInntekt) => (
    <TableRow key={createKey(inntekt)}>
      <TableColumn>
        <Normaltekst>
          {lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, getKodeverkNavn)}
        </Normaltekst>
      </TableColumn>
      <TableColumn>
        <Normaltekst>
          {formatCurrencyNoKr(inntekt.inntekt)}
        </Normaltekst>
      </TableColumn>
    </TableRow>
  ))
);

const lagSummeringsRad = (inntekter: BesteberegningInntekt[], labelId: string): ReactElement => (inntekter.length === 0 ? <div /> : (
  <TableRow key="sum">
    <TableColumn>
      <Element>
        <FormattedMessage id={labelId} />
      </Element>
    </TableColumn>
    <TableColumn>
      <Element>
        {formatCurrencyNoKr(inntekter.map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0)) }
      </Element>
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
  getKodeverkNavn: (kodeverk: string) => string): ReactElement => (
    <Row>
      {måneder.map((månedsgrunnlag: Månedsgrunnlag) => {
        const key = månedsgrunnlag.fom;
        return (
          <Column key={key} xs="6">
            <Normaltekst>
              {formatDate(månedsgrunnlag.fom)}
            </Normaltekst>
            <Inntekttabell
              inntekter={månedsgrunnlag.inntekter}
              arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
              getKodeverkNavn={getKodeverkNavn}
            />
          </Column>
        );
      })}
    </Row>
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
}) => (
  <div>
    <Row>
      <Column>
        <Element>
          {' '}
          <FormattedMessage id="Inntekttabell.Tittel" />
          {' '}
        </Element>
      </Column>
    </Row>
    <VerticalSpacer twentyPx />
    {lagRadMedMåneder(sorterEtterMåned(besteMåneder).slice(0, 2), arbeidsgiverOpplysninger, getKodeverkNavn)}
    <VerticalSpacer twentyPx />
    {lagRadMedMåneder(sorterEtterMåned(besteMåneder).slice(2, 4), arbeidsgiverOpplysninger, getKodeverkNavn)}
    <VerticalSpacer twentyPx />
    {lagRadMedMåneder(sorterEtterMåned(besteMåneder).slice(4, 6), arbeidsgiverOpplysninger, getKodeverkNavn)}
    <VerticalSpacer twentyPx />
    <Row>
      <Column xs="6">
        <Table noHover>
          <TableRow>
            <TableColumn>
              <Normaltekst>
                <FormattedMessage id="Inntekttabell.BeregnetÅrsinntekt" />
              </Normaltekst>
            </TableColumn>
            <TableColumn>
              <Normaltekst>
                {formatCurrencyNoKr(finnÅrsinntekt(besteMåneder))}
              </Normaltekst>
            </TableColumn>
          </TableRow>
        </Table>
      </Column>
    </Row>
  </div>
);

export default BesteManederVisningPanel;
