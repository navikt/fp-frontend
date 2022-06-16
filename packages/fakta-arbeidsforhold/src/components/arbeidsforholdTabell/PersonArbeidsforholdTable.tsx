import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import {
  DateLabel, PeriodLabel, Table, TableColumn, TableRow, Image,
} from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import erIBrukImageUrl from '@fpsak-frontend/assets/images/stjerne.svg';
import { ArbeidsgiverOpplysningerPerId, AoIArbeidsforhold, Inntektsmelding } from '@fpsak-frontend/types';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';

import IngenArbeidsforholdRegistrert from './IngenArbeidsforholdRegistrert';

import styles from './personArbeidsforholdTable.less';

const headerColumnContent = [
  <FormattedMessage key={1} id="PersonArbeidsforholdTable.Arbeidsforhold" values={{ br: <br /> }} />,
  <FormattedMessage key={2} id="PersonArbeidsforholdTable.Periode" values={{ br: <br /> }} />,
  <FormattedMessage key={3} id="PersonArbeidsforholdTable.Kilde" values={{ br: <br /> }} />,
  <FormattedMessage key={4} id="PersonArbeidsforholdTable.Stillingsprosent" values={{ br: <br /> }} />,
  <FormattedMessage key={5} id="PersonArbeidsforholdTable.MottattDato" values={{ br: <br /> }} />,
  <div />,
];

const finnKilde = (arbeidsforhold: AoIArbeidsforhold, intl: IntlShape) => {
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING) {
    return intl.formatMessage({ id: 'PersonArbeidsforholdTable.Inntektsmelding' });
  }
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER) {
    return intl.formatMessage({ id: 'PersonArbeidsforholdTable.Saksbehandler' });
  }
  return intl.formatMessage({ id: 'PersonArbeidsforholdTable.AaRegisteret' });
};

export const erMatch = (
  arbeidsforhold: AoIArbeidsforhold,
  inntektsmelding: Inntektsmelding,
): boolean => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
  && (!inntektsmelding.internArbeidsforholdId || inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const utledNavn = (
  arbeidsforhold: AoIArbeidsforhold,
  alleArbeidsforhold: AoIArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  const navn = arbeidsgiverOpplysninger?.navn;
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER) {
    return navn;
  }

  const skalViseEksternId = alleArbeidsforhold.filter((a) => a.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent).length > 1;

  return skalViseEksternId
    ? `${navn}(${arbeidsgiverOpplysninger.identifikator})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdId)}`
    : `${navn}(${arbeidsgiverOpplysninger.identifikator})`;
};

export const utledNøkkel = (arbeidsforhold: AoIArbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  return `${arbeidsforhold.eksternArbeidsforholdId}${arbeidsforhold.arbeidsgiverIdent}${arbeidsgiverOpplysninger.identifikator}`;
};

interface OwnProps {
  alleArbeidsforhold: AoIArbeidsforhold[];
  selectedId?: string;
  selectArbeidsforholdCallback: (event: React.MouseEvent | React.KeyboardEvent, id: void, model: AoIArbeidsforhold) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  inntektsmeldinger: Inntektsmelding[];
}

const PersonArbeidsforholdTable: FunctionComponent<OwnProps> = ({
  alleArbeidsforhold,
  selectedId,
  selectArbeidsforholdCallback,
  arbeidsgiverOpplysningerPerId,
  inntektsmeldinger,
}) => {
  const intl = useIntl();

  if (alleArbeidsforhold.length === 0) {
    return <IngenArbeidsforholdRegistrert headerColumnContent={headerColumnContent} />;
  }

  return (
    <Table headerColumnContent={headerColumnContent}>
      {alleArbeidsforhold && alleArbeidsforhold.map((a) => {
        const stillingsprosent = a.stillingsprosent !== undefined && a.stillingsprosent !== null ? `${a.stillingsprosent.toFixed(2)} %` : '';
        const navn = utledNavn(a, alleArbeidsforhold, arbeidsgiverOpplysningerPerId);
        const mottattDato = inntektsmeldinger.find((im) => erMatch(a, im))?.motattDato;
        return (
          <TableRow<void, AoIArbeidsforhold>
            key={utledNøkkel(a, arbeidsgiverOpplysningerPerId)}
            model={a}
            onMouseDown={selectArbeidsforholdCallback}
            onKeyDown={selectArbeidsforholdCallback}
            isSelected={a.arbeidsgiverIdent === selectedId}
          >
            <TableColumn><Normaltekst>{decodeHtmlEntity(navn)}</Normaltekst></TableColumn>
            <TableColumn>
              <Normaltekst>
                <PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom} />
              </Normaltekst>
            </TableColumn>
            <TableColumn><Normaltekst>{finnKilde(a, intl)}</Normaltekst></TableColumn>
            <TableColumn><Normaltekst>{stillingsprosent}</Normaltekst></TableColumn>
            <TableColumn>
              {mottattDato && (
                <Normaltekst>
                  <DateLabel dateString={mottattDato} />
                </Normaltekst>
              )}
            </TableColumn>
            <TableColumn>
              {a.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK && (
                <Image
                  className={styles.image}
                  src={erIBrukImageUrl}
                  alt={intl.formatMessage({ id: 'PersonArbeidsforholdTable.ErIBruk' })}
                  tooltip={<FormattedMessage id="PersonArbeidsforholdTable.ErIBruk" />}
                  tabIndex={0}
                  alignTooltipLeft
                />
              )}
            </TableColumn>
          </TableRow>
        );
      })}
    </Table>
  );
};

export default PersonArbeidsforholdTable;
