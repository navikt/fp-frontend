import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';

export const IngenArbeidsforholdRegistrert = () => (
  <Table.Row>
    <Table.DataCell colSpan={5}>
      <BodyShort size="small">
        <FormattedMessage id="PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert" />
      </BodyShort>
    </Table.DataCell>
  </Table.Row>
);
