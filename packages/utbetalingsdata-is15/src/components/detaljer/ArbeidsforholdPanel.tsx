import React, { FunctionComponent } from 'react';

import { VedtakArbeidsforhold } from '@navikt/fp-types';
import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

interface OwnProps {
  alleArbeidsforhold?: VedtakArbeidsforhold[];
}

const ArbeidsforholdPanel: FunctionComponent<OwnProps> = ({ alleArbeidsforhold }) => (
  <VStack gap="4">
    <div />
    {!alleArbeidsforhold && (
      <BodyShort size="small">
        <FormattedMessage id="ArbeidsforholdPanel.IngenArbeidsforhold" />
      </BodyShort>
    )}
    {alleArbeidsforhold && (
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidsforholdPanel.Arbeidsgiver" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidsforholdPanel.Inntekt" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidsforholdPanel.Inntektsperiode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="ArbeidsforholdPanel.Refusjon" />
            </Table.HeaderCell>
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
  </VStack>
);

export default ArbeidsforholdPanel;
