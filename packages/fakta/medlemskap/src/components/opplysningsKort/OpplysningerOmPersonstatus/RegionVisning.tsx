import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';
import { LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { sorterPerioder } from '@navikt/fp-fakta-felles';
import type { AlleKodeverk, KodeverkType, RegionPeriode } from '@navikt/fp-types';

interface Props {
  regioner: RegionPeriode[];
  alleKodeverk: AlleKodeverk;
  erAnnenpart?: boolean;
}

export const RegionVisning = ({ regioner, erAnnenpart = false, alleKodeverk }: Props) => {
  const kodeverkNavn = alleKodeverk['Region'];

  const getRegion = (verdi: RegionPeriode): string => {
    return kodeverkNavn.find(it => it.kode === verdi.type)?.navn ?? `Ukjent region: ${verdi.type.toLowerCase()}`;
  };

  const sortertRegion = regioner.toSorted(sorterPerioder);

  if (sortertRegion.length === 0)
    return (
      <LabeledValue
        size="medium"
        label={<FormattedMessage id="OpplysningerOmPersonstatus.RegionLabel" />}
        value={
          <BodyShort size="small" textColor="subtle">
            <FormattedMessage
              id="OpplysningerOmPersonstatus.RegionIngen"
              values={{ type: 'Region' satisfies KodeverkType, erAnnenpart }}
            />
          </BodyShort>
        }
      />
    );
  return (
    <Table
      aria-label={`Region for ${erAnnenpart ? 'annenpart' : 'bruker'}`}
      className="[&>tbody>tr:last-child>td]:border-0"
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="w-60">
            <FormattedMessage id="OpplysningerOmPersonstatus.RegionLabel" />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <FormattedMessage id="OpplysningerOmPersonstatus.Periode" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortertRegion.map(r => (
          <Table.Row key={`${r.fom}-${r.tom}-${r.type}`}>
            <Table.DataCell>{getRegion(r)}</Table.DataCell>
            <Table.DataCell>
              <PeriodLabel dateStringFom={r.fom} dateStringTom={r.tom} />
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
