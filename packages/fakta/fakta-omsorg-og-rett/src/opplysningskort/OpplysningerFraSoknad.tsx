import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label, Table } from '@navikt/ds-react';

import { FaktaKilde } from '@navikt/fp-fakta-felles';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { type AlleKodeverk, type OmsorgOgRett } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort.tsx';

interface Props {
  omsorgOgRett: OmsorgOgRett;
  alleKodeverk: AlleKodeverk;
}

export const OpplysningerFraSoknad = ({ omsorgOgRett }: Props) => {
  const intl = useIntl();

  const { harRettNorge, harOppholdEØS, harRettEØS, harUføretrygd } = omsorgOgRett.søknad.annenpartRettighet ?? {};
  const harSøkerAleneOmsorg = omsorgOgRett.søknad.søkerHarAleneomsorg;
  const { annenpartIdent, annenpartBostedsland } = omsorgOgRett.søknad;
  const bostedsland = alleKodeverk.Landkoder.find(land => land.kode === annenpartBostedsland)?.navn;
  const formattedBostedsland = bostedsland
    ? bostedsland.charAt(0).toUpperCase() + bostedsland.slice(1).toLowerCase()
    : null;

  return (
    <EkspansjonsKort
      tittel={intl.formatMessage({ id: 'OpplysningsKort.OpplysningerFraSøknadTittel' })}
      kilde={FaktaKilde.SOKNAD}
      defaultOpen={true}
    >
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="OpplysningerFraSøknad.Spørsmål" />
            </Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>

            <Table.HeaderCell scope="col">
              <FormattedMessage id="OpplysningerFraSøknad.Svar" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            {annenpartIdent !== null && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.Fødselsnummer" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.Fødselsnummer.Svar" values={{ fnr: annenpartIdent }} />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {annenpartBostedsland !== null && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.Bostedsland" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="OpplysningerFraSøknad.Bostedsland.Svar"
                      values={{ bostedsland: formattedBostedsland }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harSøkerAleneOmsorg !== null && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.HarSøkerAleneOmsorg" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="OpplysningerFraSøknad.HarSøkerAleneOmsorg.Svar"
                      values={{ aleneOmsorg: harSøkerAleneOmsorg }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harRettNorge !== undefined && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="HarAnnenForelderRettFelter.HarAnnenForelderRett" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="OpplysningerFraSøknad.HarAnnenForelderRett.Svar"
                      values={{ iNorge: harRettNorge }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harOppholdEØS !== undefined && (
              <>
                <Table.DataCell textSize="small">
                  <Label size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.HarOppholdIEØS" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="OpplysningerFraSøknad.HarOppholdIEØS.Svar"
                      values={{ oppholdEØS: harOppholdEØS }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harRettEØS !== undefined && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.HarRettEØS" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.HarRettEØS.Svar" values={{ rettEØS: harRettEØS }} />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
          <Table.Row>
            {harUføretrygd !== undefined && (
              <>
                <Table.DataCell>
                  <Label size="small">
                    <FormattedMessage id="OpplysningerFraSøknad.HarUføretrygd" />
                  </Label>
                </Table.DataCell>
                <Table.DataCell></Table.DataCell>
                <Table.DataCell>
                  <BodyShort size="small">
                    <FormattedMessage
                      id="OpplysningerFraSøknad.HarUføretrygd.Svar"
                      values={{ uføretrygd: harUføretrygd }}
                    />
                  </BodyShort>
                </Table.DataCell>
              </>
            )}
          </Table.Row>
        </Table.Body>
      </Table>
    </EkspansjonsKort>
  );
};
