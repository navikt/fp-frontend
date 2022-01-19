import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import {
  PeriodLabel, DateLabel, Table, TableColumn, TableRow, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import { AlleKodeverk, Oppholdstillatelse } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

const headerTextCodes = [
  'OppholdstillatelseTabell.Periode',
  'OppholdstillatelseTabell.Type',
];

interface OwnProps {
  oppholdstillatelse: Oppholdstillatelse[];
  alleKodeverk: AlleKodeverk;
}

const OppholdstillatelseTabell: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  oppholdstillatelse,
  alleKodeverk,
}) => (
  <FaktaGruppe
    title={intl.formatMessage({ id: 'OppholdstillatelseTabell.Overskrift' })}
  >
    <Table headerTextCodes={headerTextCodes}>
      {oppholdstillatelse.map((opphold) => (
        <TableRow key={opphold.fom + opphold.tom}>
          <TableColumn>
            {opphold.fom && (
              <PeriodLabel dateStringFom={opphold.fom} dateStringTom={opphold.tom} />
            )}
            {!opphold.fom && (
              <span>
                <FormattedMessage id="OppholdstillatelseTabell.Ukjent" />
                -
                <DateLabel dateString={opphold.tom} />
              </span>
            )}
          </TableColumn>
          <TableColumn>
            {alleKodeverk[kodeverkTyper.OPPHOLDSTILLATELSE_TYPE].find((k) => k.kode === opphold.oppholdstillatelseType)?.navn}
          </TableColumn>
        </TableRow>
      ))}
    </Table>
  </FaktaGruppe>
);

export default injectIntl(OppholdstillatelseTabell);
