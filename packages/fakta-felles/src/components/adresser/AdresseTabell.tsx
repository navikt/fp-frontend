import { KodeverkMedNavn, Personadresse } from '@navikt/fp-types';
import React, { FC } from 'react';
import { sorterPerioder } from '../../utils/periodeUtils';
import { formaterAdresse } from '../../utils/adresseUtils';
import { BodyLong, Box, Table } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';

interface AdresseTabellProps {
  adresser: Personadresse[];
  erAnnenpart?: boolean;
  harSammeAdresser?: boolean;
  adresseKodeverk: KodeverkMedNavn[];
}

export const AdresseTabell: FC<AdresseTabellProps> = ({
  adresser,
  erAnnenpart = false,
  harSammeAdresser = false,
  adresseKodeverk,
}) => {
  if (harSammeAdresser) {
    return (
      <Box padding="4">
        <BodyLong textColor="subtle">
          <FormattedMessage id="AdresseTabell.SammeAdresse" />
        </BodyLong>
      </Box>
    );
  }

  const rowStyle = (index: number) => (index + 1 === adresser.length ? { border: '0px' } : {});

  return (
    <>
      {adresser.length === 0 && (
        <Box padding="4">
          <BodyLong textColor="subtle">
            <FormattedMessage id="AdresseTabell.IngenAdresse" values={{ erAnnenpart }} />
          </BodyLong>
        </Box>
      )}
      {adresser.length > 0 && (
        <Table style={{ tableLayout: 'fixed' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <FormattedMessage id="AdresseTabell.PeriodeLabel" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="AdresseTabell.AdresseLabel" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="AdresseTabell.TypeLabel" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {adresser.sort(sorterPerioder).map((adresse, i) => {
              return (
                <Table.Row key={adresse.adresseType + adresse.fom + adresse.tom}>
                  <Table.DataCell style={rowStyle(i)}>
                    <PeriodLabel
                      dateStringFom={adresse.fom}
                      dateStringTom={adresse.tom === TIDENES_ENDE ? undefined : adresse.tom}
                    />
                  </Table.DataCell>
                  <Table.DataCell style={rowStyle(i)}>{formaterAdresse(adresse)}</Table.DataCell>
                  <Table.DataCell style={rowStyle(i)}>
                    {adresseKodeverk.find(k => k.kode === adresse.adresseType)?.navn}
                  </Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </>
  );
};
