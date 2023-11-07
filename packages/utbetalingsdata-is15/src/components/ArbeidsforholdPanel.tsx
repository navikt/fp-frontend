import React, { FunctionComponent } from 'react';

import { VedtakArbeidsforhold } from '@navikt/fp-types';
import { Table } from '@navikt/ds-react';

interface OwnProps {
  alleArbeidsforhold?: VedtakArbeidsforhold[];
}

const ArbeidsforholdPanel: FunctionComponent<OwnProps> = ({ alleArbeidsforhold }) => (
  <>
    {!alleArbeidsforhold && <>Ingen arbeidsforhold</>}
    {alleArbeidsforhold && (
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">arbeidsgiver</Table.HeaderCell>
            <Table.HeaderCell scope="col">inntekt</Table.HeaderCell>
            <Table.HeaderCell scope="col">inntektsperiode.termnavn</Table.HeaderCell>
            <Table.HeaderCell scope="col">refusjon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {alleArbeidsforhold.map(arbeidsforhold => (
            <Table.Row key={arbeidsforhold.identdato}>
              <Table.DataCell>{arbeidsforhold.arbeidsgiverOrgnr}</Table.DataCell>
              <Table.DataCell>{arbeidsforhold.inntekt}</Table.DataCell>
              <Table.DataCell>{arbeidsforhold.inntektsperiode.termnavn}</Table.DataCell>
              <Table.DataCell>{arbeidsforhold.refusjon}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )}
  </>
);

export default ArbeidsforholdPanel;
