import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';

//TODO (TOR) Denne kan ein vel forenkla ved å fjerna tabell og kun visa tekst?

export const IngenArbeidsforholdRegistrert = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col">
          <FormattedMessage key={1} id="PersonArbeidsforholdTable.Arbeidsforhold" values={{ br: <br /> }} />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col">
          <FormattedMessage key={2} id="PersonArbeidsforholdTable.Periode" values={{ br: <br /> }} />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col">
          <FormattedMessage key={3} id="PersonArbeidsforholdTable.Kilde" values={{ br: <br /> }} />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col">
          <FormattedMessage key={4} id="PersonArbeidsforholdTable.Stillingsprosent" values={{ br: <br /> }} />
        </Table.HeaderCell>
        <Table.HeaderCell scope="col">
          <FormattedMessage key={5} id="PersonArbeidsforholdTable.MottattDato" values={{ br: <br /> }} />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.DataCell>
          <BodyShort size="small">
            <FormattedMessage id="PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert" />
          </BodyShort>
        </Table.DataCell>
        <Table.DataCell />
        <Table.DataCell />
        <Table.DataCell />
        <Table.DataCell />
      </Table.Row>
    </Table.Body>
  </Table>
);
