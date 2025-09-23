import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { StarFillIcon } from '@navikt/aksel-icons';
import { Table } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

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
          const stillingsprosent = `${arbeidsforhold.stillingsprosent.toFixed(2)} %`;
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
              <Table.DataCell textSize="small">
                {utledNavn(arbeidsforhold, alleArbeidsforhold, arbeidsgiverOpplysningerPerId)}
              </Table.DataCell>
              <Table.DataCell textSize="small">
                <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom} />
              </Table.DataCell>
              <Table.DataCell textSize="small">{finnKilde(arbeidsforhold, intl)}</Table.DataCell>
              <Table.DataCell textSize="small">{stillingsprosent}</Table.DataCell>
              <Table.DataCell textSize="small">{mottattDato && <DateLabel dateString={mottattDato} />}</Table.DataCell>
              <Table.DataCell textSize="small">
                {(arbeidsforhold.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.BRUK ||
                  arbeidsforhold.saksbehandlersVurdering ===
                    ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING) && (
                  <StarFillIcon
                    color="var(--ax-warning-700)"
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

const utledNavn = (
  { saksbehandlersVurdering, eksternArbeidsforholdId, arbeidsgiverIdent }: AoIArbeidsforhold,
  alleArbeidsforhold: AoIArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverIdent];
  if (saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vent til vi har bestemt strict index access
    return arbeidsgiverOpplysninger?.navn;
  }

  const eksternId =
    alleArbeidsforhold.filter(a => a.arbeidsgiverIdent === arbeidsgiverIdent).length > 1
      ? eksternArbeidsforholdId
      : undefined;

  return formaterArbeidsgiver(arbeidsgiverOpplysninger, eksternId ?? undefined);
};

const utledNøkkel = (
  arbeidsforhold: AoIArbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  return `${arbeidsforhold.eksternArbeidsforholdId}${arbeidsforhold.arbeidsgiverIdent}${arbeidsgiverOpplysninger.identifikator}`;
};
