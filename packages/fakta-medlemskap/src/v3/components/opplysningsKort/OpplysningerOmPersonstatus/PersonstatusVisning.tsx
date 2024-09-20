import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { AlleKodeverk, PersonstatusPeriode } from '@navikt/fp-types';
import { Table, BodyLong, Label } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/fp-kodeverk';

import { sorterPerioder } from '../../../utils/periodeUtils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

interface Props {
  personstatuser: PersonstatusPeriode[];
  erAnnenpart?: boolean;
  alleKodeverk: AlleKodeverk;
}

const PersonstatusVisning: FC<Props> = ({ personstatuser, erAnnenpart = false, alleKodeverk }) => {
  const kodeverkNavn = alleKodeverk[KodeverkType.PERSONSTATUS_TYPE];

  const getPersonstatus = (verdi: PersonstatusPeriode): string => {
    const kodeverk = kodeverkNavn.find(it => it.kode === verdi.type);
    return kodeverk?.navn ?? `Ukjent personstatus: ${verdi?.type.toLowerCase()}`;
  };

  const sortertPersonstatus = personstatuser.sort(sorterPerioder);

  const rowStyle = (index: number) => (index + 1 === sortertPersonstatus.length ? { border: '0px' } : {});

  if (sortertPersonstatus.length === 0)
    return (
      <>
        <Label size="small">
          <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusLabel" />
        </Label>
        <BodyLong textColor="subtle">
          <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusIngen" values={{ erAnnenpart }} />
        </BodyLong>
      </>
    );
  return (
    <Table style={{ tableLayout: 'fixed' }} aria-label={`Personstatus for ${erAnnenpart ? 'annenpart' : 'bruker'}`}>
      <Table.HeaderCell>
        <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusLabel" />
      </Table.HeaderCell>
      <Table.HeaderCell>
        <FormattedMessage id="OpplysningerOmPersonstatus.Fom" />
      </Table.HeaderCell>
      <Table.HeaderCell>
        <FormattedMessage id="OpplysningerOmPersonstatus.Tom" />
      </Table.HeaderCell>
      <Table.Body>
        {sortertPersonstatus.map((ps, index) => (
          <Table.Row key={`${ps.fom}-${ps.tom}-${ps.type}`}>
            <Table.DataCell style={rowStyle(index)}>{getPersonstatus(ps)}</Table.DataCell>
            <Table.DataCell style={rowStyle(index)}>
              <DateLabel dateString={ps.fom} />
            </Table.DataCell>
            <Table.DataCell style={rowStyle(index)}>
              {!(ps.tom === null || ps.tom === TIDENES_ENDE) && <DateLabel dateString={ps.tom} />}
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default PersonstatusVisning;
