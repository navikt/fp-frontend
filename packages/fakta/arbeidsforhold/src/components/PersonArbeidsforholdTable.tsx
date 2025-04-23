import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { StarFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Table } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type { AoIArbeidsforhold, ArbeidsgiverOpplysningerPerId, Inntektsmelding } from '@navikt/fp-types';

import { ArbeidsforholdDetail } from './ArbeidsforholdDetail';

interface Props {
  alleArbeidsforhold: AoIArbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  inntektsmeldinger: Inntektsmelding[];
}

export const PersonArbeidsforholdTable = ({
  alleArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  inntektsmeldinger,
}: Props) => {
  const intl = useIntl();

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" />
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
        {alleArbeidsforhold.map(arbeidsforhold => {
          const stillingsprosent =
            arbeidsforhold.stillingsprosent !== undefined && arbeidsforhold.stillingsprosent !== null
              ? `${arbeidsforhold.stillingsprosent.toFixed(2)} %`
              : '';
          const navn = utledNavn(arbeidsforhold, alleArbeidsforhold, arbeidsgiverOpplysningerPerId);
          const mottattDato = inntektsmeldinger.find(im => erMatch(arbeidsforhold, im))?.motattDato;
          return (
            <Table.ExpandableRow
              key={utledNøkkel(arbeidsforhold, arbeidsgiverOpplysningerPerId)}
              content={
                arbeidsforhold.saksbehandlersVurdering ? (
                  <ArbeidsforholdDetail valgtArbeidsforhold={arbeidsforhold} />
                ) : null
              }
              expandOnRowClick
              expansionDisabled={!arbeidsforhold.saksbehandlersVurdering}
            >
              <Table.DataCell>
                <BodyShort size="small">{decodeHtmlEntity(navn)}</BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">
                  <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom} />
                </BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <BodyShort size="small">{finnKilde(arbeidsforhold, intl)}</BodyShort>
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
                {(arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK ||
                  arbeidsforhold.saksbehandlersVurdering ===
                    ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING) && (
                  <StarFillIcon
                    color="var(--a-orange-600)"
                    height="20px"
                    width="25px"
                    title={intl.formatMessage({ id: 'PersonArbeidsforholdTable.ErIBruk' })}
                  />
                )}
              </Table.DataCell>
            </Table.ExpandableRow>
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
