import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { KodeverkMedNavn, Personadresse } from '@navikt/fp-types';

import { formaterAdresse } from '../../utils/adresseUtils';
import { sorterPerioder } from '../../utils/periodeUtils';

interface AdresseTabellProps {
  adresser: Personadresse[];
  erAnnenpart?: boolean;
  harSammeAdresser?: boolean;
  adresseKodeverk: KodeverkMedNavn<'AdresseType'>[];
}

export const AdresseTabell = ({
  adresser,
  erAnnenpart = false,
  harSammeAdresser = false,
  adresseKodeverk,
}: AdresseTabellProps) => {
  if (harSammeAdresser) {
    return (
      <BodyShort className="pt-2" textColor="subtle">
        <FormattedMessage id="AdresseTabell.SammeAdresse" />
      </BodyShort>
    );
  }

  return (
    <>
      {adresser.length === 0 && (
        <BodyShort className="pt-2" textColor="subtle">
          <FormattedMessage id="AdresseTabell.IngenAdresse" values={{ erAnnenpart }} />
        </BodyShort>
      )}
      {adresser.length > 0 && (
        <Table className="[&>tbody>tr:last-child>td]:border-0">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="w-54">
                <FormattedMessage id="AdresseTabell.PeriodeLabel" />
              </Table.HeaderCell>
              <Table.HeaderCell className="w-100">
                <FormattedMessage id="AdresseTabell.AdresseLabel" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="AdresseTabell.TypeLabel" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {adresser.toSorted(sorterPerioder).map(adresse => {
              return (
                <Table.Row key={adresse.adresseType + adresse.fom + adresse.tom}>
                  <Table.DataCell>
                    <PeriodLabel dateStringFom={adresse.fom} dateStringTom={adresse.tom} />
                  </Table.DataCell>
                  <Table.DataCell className="text-pretty">{formaterAdresse(adresse)}</Table.DataCell>
                  <Table.DataCell>{adresseKodeverk.find(k => k.kode === adresse.adresseType)?.navn}</Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </>
  );
};
