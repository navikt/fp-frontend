import { FormattedMessage } from 'react-intl';

import { BodyLong, Label, Table } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';

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
    return kodeverkNavn.find(it => it.kode === verdi.type)?.navn ?? `Ukjent region: ${verdi?.type.toLowerCase()}`;
  };

  const sortertRegion = regioner.toSorted(sorterPerioder);

  const rowStyle = (index: number) => (index + 1 === sortertRegion.length ? { border: '0px' } : {});

  if (sortertRegion.length === 0)
    return (
      <>
        <Label size="small">
          <FormattedMessage id="OpplysningerOmPersonstatus.RegionLabel" />
        </Label>
        <BodyLong textColor="subtle">
          <FormattedMessage
            id="OpplysningerOmPersonstatus.RegionIngen"
            values={{ type: 'Region' satisfies KodeverkType, erAnnenpart }}
          />
        </BodyLong>
      </>
    );
  return (
    <Table style={{ tableLayout: 'fixed' }} aria-label={`Region for ${erAnnenpart ? 'annenpart' : 'bruker'}`}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <FormattedMessage id="OpplysningerOmPersonstatus.RegionLabel" />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <FormattedMessage id="OpplysningerOmPersonstatus.Fom" />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <FormattedMessage id="OpplysningerOmPersonstatus.Tom" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortertRegion.map((r, index) => (
          <Table.Row key={`${r.fom}-${r.tom}-${r.type}`}>
            <Table.DataCell style={rowStyle(index)}>{getRegion(r)}</Table.DataCell>
            <Table.DataCell style={rowStyle(index)}>
              <DateLabel dateString={r.fom} />
            </Table.DataCell>
            <Table.DataCell style={rowStyle(index)}>
              {!(r.tom === null || r.tom === TIDENES_ENDE) && <DateLabel dateString={r.tom} />}
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
