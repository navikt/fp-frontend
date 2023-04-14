import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { PeriodLabel, DateLabel, Table, TableColumn, TableRow, FaktaGruppe } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk, Oppholdstillatelse } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

const headerTextCodes = ['OppholdstillatelseTabell.Periode', 'OppholdstillatelseTabell.Type'];

interface OwnProps {
  oppholdstillatelse: Oppholdstillatelse[];
  alleKodeverk: AlleKodeverk;
}

const OppholdstillatelseTabell: FunctionComponent<OwnProps> = ({ oppholdstillatelse, alleKodeverk }) => (
  <FaktaGruppe title={useIntl().formatMessage({ id: 'OppholdstillatelseTabell.Overskrift' })}>
    <Table headerTextCodes={headerTextCodes} noHover>
      {oppholdstillatelse.map(opphold => (
        <TableRow key={opphold.fom + opphold.tom}>
          <TableColumn>
            {opphold.fom && <PeriodLabel dateStringFom={opphold.fom} dateStringTom={opphold.tom} />}
            {!opphold.fom && (
              <span>
                <FormattedMessage id="OppholdstillatelseTabell.Ukjent" />
                -
                <DateLabel dateString={opphold.tom} />
              </span>
            )}
          </TableColumn>
          <TableColumn>
            {
              alleKodeverk[KodeverkType.OPPHOLDSTILLATELSE_TYPE].find(k => k.kode === opphold.oppholdstillatelseType)
                ?.navn
            }
          </TableColumn>
        </TableRow>
      ))}
    </Table>
  </FaktaGruppe>
);

export default OppholdstillatelseTabell;
