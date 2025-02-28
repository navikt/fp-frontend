import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table } from '@navikt/ds-react';

import { type OmsorgOgRett } from '@navikt/fp-types';

interface Props {
  omsorgOgRett: OmsorgOgRett;
}

export const InformasjonOmAnnenPart = ({ omsorgOgRett }: Props) => {
  const { harAnnenpartUføretrygd, harAnnenpartForeldrepenger, harAnnenpartEngangsstønad } = omsorgOgRett.registerdata;

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="OpplysningsKort.AnnenPartTittel" />
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            {harAnnenpartUføretrygd !== null && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="InformasjonOmAnnenPart.HarAnnenPartUføretrygd" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="InformasjonOmAnnenPart.HarAnnenPartUføretrygd.Svar"
                      values={{ uføretrygd: harAnnenpartUføretrygd }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harAnnenpartForeldrepenger !== null && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="InformasjonOmAnnenPart.Foreldrepenger" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="InformasjonOmAnnenPart.Foreldrepenger.Svar"
                      values={{ foreldrepenger: harAnnenpartForeldrepenger }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harAnnenpartEngangsstønad !== null && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="InformasjonOmAnnenPart.Engangsstønad" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="InformasjonOmAnnenPart.Engangsstønad.Svar"
                      values={{ engangsstønad: harAnnenpartEngangsstønad }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
