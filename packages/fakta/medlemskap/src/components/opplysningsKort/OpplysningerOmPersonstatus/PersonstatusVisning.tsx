import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';
import { LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { sorterPerioder } from '@navikt/fp-fakta-felles';
import type { AlleKodeverk, PersonstatusPeriode } from '@navikt/fp-types';

interface Props {
  personstatuser: PersonstatusPeriode[];
  erAnnenpart?: boolean;
  alleKodeverk: AlleKodeverk;
}

export const PersonstatusVisning = ({ personstatuser, erAnnenpart = false, alleKodeverk }: Props) => {
  const kodeverkNavn = alleKodeverk['PersonstatusType'];

  const getPersonstatus = (verdi: PersonstatusPeriode): string => {
    const kodeverk = kodeverkNavn.find(it => it.kode === verdi.type);
    return kodeverk?.navn ?? `Ukjent personstatus: ${verdi.type.toLowerCase()}`;
  };

  const sortertPersonstatus = personstatuser.toSorted(sorterPerioder);

  if (sortertPersonstatus.length === 0)
    return (
      <LabeledValue
        size="medium"
        label={<FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusLabel" />}
        value={
          <BodyShort size="small" textColor="subtle">
            <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusIngen" values={{ erAnnenpart }} />
          </BodyShort>
        }
      />
    );
  return (
    <Table
      aria-label={`Personstatus for ${erAnnenpart ? 'annenpart' : 'bruker'}`}
      className="[&>tbody>tr:last-child>td]:border-0"
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="w-60">
            <FormattedMessage id="OpplysningerOmPersonstatus.PersonstatusLabel" />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <FormattedMessage id="OpplysningerOmPersonstatus.Periode" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortertPersonstatus.map(ps => (
          <Table.Row key={`${ps.fom}-${ps.tom}-${ps.type}`}>
            <Table.DataCell>{getPersonstatus(ps)}</Table.DataCell>
            <Table.DataCell>
              <PeriodLabel dateStringFom={ps.fom} dateStringTom={ps.tom === TIDENES_ENDE ? undefined : ps.tom} />
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
