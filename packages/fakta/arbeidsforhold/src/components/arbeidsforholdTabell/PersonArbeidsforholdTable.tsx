import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { StarFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Table } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity, TIDENES_ENDE } from '@navikt/ft-utils';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type { AoIArbeidsforhold, ArbeidsgiverOpplysningerPerId, Inntektsmelding } from '@navikt/fp-types';

import { IngenArbeidsforholdRegistrert } from './IngenArbeidsforholdRegistrert';

import styles from './personArbeidsforholdTable.module.css';

interface Props {
  alleArbeidsforhold: AoIArbeidsforhold[];
  selectedId?: string;
  selectArbeidsforholdCallback: (arbeidsforhold: AoIArbeidsforhold) => void;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  inntektsmeldinger: Inntektsmelding[];
}

export const PersonArbeidsforholdTable = ({
  alleArbeidsforhold,
  selectedId,
  selectArbeidsforholdCallback,
  arbeidsgiverOpplysningerPerId,
  inntektsmeldinger,
}: Props) => {
  const intl = useIntl();

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonArbeidsforholdTable.Arbeidsforhold" values={{ br: Br }} />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonArbeidsforholdTable.Periode" values={{ br: Br }} />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonArbeidsforholdTable.Kilde" values={{ br: Br }} />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonArbeidsforholdTable.Stillingsprosent" values={{ br: Br }} />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="PersonArbeidsforholdTable.MottattDato" values={{ br: Br }} />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {alleArbeidsforhold.length === 0 && <IngenArbeidsforholdRegistrert />}
        {alleArbeidsforhold.map(a => {
          const stillingsprosent =
            a.stillingsprosent !== undefined && a.stillingsprosent !== null ? `${a.stillingsprosent.toFixed(2)} %` : '';
          const navn = utledNavn(a, alleArbeidsforhold, arbeidsgiverOpplysningerPerId);
          const mottattDato = inntektsmeldinger.find(im => erMatch(a, im))?.motattDato;
          return (
            <Table.Row
              key={utledNøkkel(a, arbeidsgiverOpplysningerPerId)}
              onMouseDown={() => selectArbeidsforholdCallback(a)}
              onKeyDown={() => selectArbeidsforholdCallback(a)}
              selected={a.arbeidsgiverIdent === selectedId}
            >
              <Table.DataCell>
                <BodyShort size="small">{decodeHtmlEntity(navn)}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <PeriodLabel
                  size="small"
                  dateStringFom={a.fom}
                  dateStringTom={a.tom !== TIDENES_ENDE ? a.tom : undefined}
                />
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{finnKilde(a, intl)}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{stillingsprosent}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                {mottattDato && (
                  <BodyShort size="small">
                    <DateLabel dateString={mottattDato} />
                  </BodyShort>
                )}
              </Table.DataCell>
              <Table.DataCell>
                {(a.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK ||
                  a.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING) && (
                  <StarFillIcon
                    className={styles.image}
                    title={intl.formatMessage({ id: 'PersonArbeidsforholdTable.ErIBruk' })}
                  />
                )}
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

const Br = <br key="break-line" />;

const finnKilde = (arbeidsforhold: AoIArbeidsforhold, intl: IntlShape) => {
  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)
    return intl.formatMessage({ id: 'PersonArbeidsforholdTable.Inntektsmelding' });

  if (arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER)
    return intl.formatMessage({ id: 'PersonArbeidsforholdTable.Saksbehandler' });

  return intl.formatMessage({ id: 'PersonArbeidsforholdTable.AaRegisteret' });
};

export const erMatch = (arbeidsforhold: AoIArbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent &&
  (!inntektsmelding.internArbeidsforholdId ||
    inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const getEndCharFromId = (id?: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const utledNavn = (
  arbeidsforhold: AoIArbeidsforhold,
  alleArbeidsforhold: AoIArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  const navn = arbeidsgiverOpplysninger?.navn;
  if (
    arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER
  ) {
    return navn;
  }

  const skalViseEksternId =
    alleArbeidsforhold.filter(a => a.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent).length > 1;

  return skalViseEksternId
    ? `${navn}(${arbeidsgiverOpplysninger.identifikator})${getEndCharFromId(arbeidsforhold.eksternArbeidsforholdId)}`
    : `${navn}(${arbeidsgiverOpplysninger.identifikator})`;
};

const utledNøkkel = (
  arbeidsforhold: AoIArbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  return `${arbeidsforhold.eksternArbeidsforholdId}${arbeidsforhold.arbeidsgiverIdent}${arbeidsgiverOpplysninger.identifikator}`;
};
