import React from 'react';
import { AlleKodeverk, MedlemskapAvvik, OppholdstillatelsePeriode } from '@navikt/fp-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyLong, BodyShort, Box, ReadMore, Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/fp-kodeverk';

import EkspansjonsKort from '../ekspansjonsKort/EkspansjonsKort';
import { FaktaKilde } from '../../faktaKilde';
import { sorterPerioder } from '../../utils/periodeUtils';
import { relevantForOppholdstillatelser } from '../ekspansjonsKort/medlemsAvvik';

interface Props {
  oppholdstillatelser: OppholdstillatelsePeriode[];
  avvik: MedlemskapAvvik[] | undefined;
  alleKodeverk: AlleKodeverk;
}

const OpplysningerOmOppholdstillatelser = ({ oppholdstillatelser, avvik = [], alleKodeverk }: Props) => {
  const intl = useIntl();

  const oppholdstillatelseTypeKodeverk = alleKodeverk[KodeverkType.OPPHOLDSTILLATELSE_TYPE];

  return (
    <EkspansjonsKort
      kilde={FaktaKilde.FREG}
      tittel={intl.formatMessage(
        { id: 'OpplysningsKort.OppholdstillatelseTittel' },
        { count: oppholdstillatelser.length },
      )}
      relevanteAvvik={avvik.filter(a => relevantForOppholdstillatelser.includes(a))}
    >
      <>
        <BodyShort size="small">
          <FormattedMessage id="OpplysningerOmOppholdstillatelser.Beskrivelse" />
        </BodyShort>

        {oppholdstillatelser.length === 0 && (
          <Box padding="4">
            <BodyLong textColor="subtle">
              <FormattedMessage id="OpplysningerOmOppholdstillatelser.Tabell.Ingen" />
            </BodyLong>
          </Box>
        )}
        {oppholdstillatelser.length > 0 && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerOmOppholdstillatelser.TabellHeader.Periode" />
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerOmOppholdstillatelser.TabellHeader.Type" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {oppholdstillatelser.sort(sorterPerioder).map(({ fom, tom, oppholdstillatelseType }) => {
                return (
                  <Table.Row key={fom + tom}>
                    <Table.DataCell>
                      <PeriodLabel dateStringFom={fom} dateStringTom={tom} />
                    </Table.DataCell>
                    <Table.DataCell>
                      {oppholdstillatelseTypeKodeverk.find(kv => kv.kode === oppholdstillatelseType)?.navn}
                    </Table.DataCell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        )}
        <ReadMore size="small" header={<FormattedMessage id="OpplysningerOmOppholdstillatelser.ReadMore.Tittel" />}>
          <FormattedMessage id="OpplysningerOmOppholdstillatelser.ReadMore.Innhold" />
        </ReadMore>
      </>
    </EkspansjonsKort>
  );
};

export default OpplysningerOmOppholdstillatelser;
