import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table } from '@navikt/ds-react';

import { type OmsorgOgRett } from '@navikt/fp-types';

interface Props {
  omsorgOgRett: OmsorgOgRett;
}

export const AnnenPartsYtelser = ({ omsorgOgRett }: Props) => {
  const { harAnnenpartUføretrygd, harAnnenpartForeldrepenger, harAnnenpartEngangsstønad } = omsorgOgRett.registerdata;

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="OpplysningsKort.AnnenPartTittel" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {harAnnenpartUføretrygd !== null && (
            <Table.Row>
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="AnnenPartsYtelser.HarAnnenPartUføretrygd" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="AnnenPartsYtelser.HarAnnenPartUføretrygd.Svar"
                      values={{ uføretrygd: harAnnenpartUføretrygd }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            </Table.Row>
          )}

          {harAnnenpartForeldrepenger !== null && (
            <Table.Row>
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="AnnenPartsYtelser.Foreldrepenger" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="AnnenPartsYtelser.Foreldrepenger.Svar"
                      values={{ foreldrepenger: harAnnenpartForeldrepenger }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            </Table.Row>
          )}
          {harAnnenpartEngangsstønad !== null && (
            <Table.Row>
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="AnnenPartsYtelser.Engangsstønad" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="AnnenPartsYtelser.Engangsstønad.Svar"
                      values={{ engangsstønad: harAnnenpartEngangsstønad }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
};
