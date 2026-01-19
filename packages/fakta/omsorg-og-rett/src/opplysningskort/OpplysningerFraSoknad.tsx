import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label, Table } from '@navikt/ds-react';
import { capitalizeFirstLetter } from '@navikt/ft-utils';

import { type AlleKodeverk, type OmsorgOgRett } from '@navikt/fp-types';

import { EkspansjonsKort } from '../components/ekspansjonsKort/EkspansjonsKort';

interface Props {
  omsorgOgRett: OmsorgOgRett;
  alleKodeverk: AlleKodeverk;
}

export const OpplysningerFraSoknad = ({ omsorgOgRett, alleKodeverk }: Props) => {
  const intl = useIntl();

  const annenpartRettighet = omsorgOgRett.søknad.annenpartRettighet;
  const harRettNorge = annenpartRettighet?.harRettNorge ?? 'IKKE_RELEVANT';
  const harUføretrygd = annenpartRettighet?.harUføretrygd ?? 'IKKE_RELEVANT';
  const harOppholdEØS = annenpartRettighet?.harOppholdEØS ?? 'IKKE_RELEVANT';
  const harRettEØS = annenpartRettighet?.harRettEØS ?? 'IKKE_RELEVANT';
  const harSøkerAleneOmsorg = omsorgOgRett.søknad.søkerHarAleneomsorg;
  const { annenpartIdent, annenpartBostedsland } = omsorgOgRett.søknad;
  const bostedsland = alleKodeverk.Landkoder.find(land => land.kode === annenpartBostedsland)?.navn;
  const formattedBostedsland = bostedsland ? capitalizeFirstLetter(bostedsland.toLowerCase()) : null;

  return (
    <EkspansjonsKort
      tittel={intl.formatMessage({ id: 'OpplysningsKort.OpplysningerFraSøknadTittel' })}
      kilde="SØKNAD"
      defaultOpen
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
          {annenpartIdent !== undefined && (
            <Table.Row>
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
            </Table.Row>
          )}
          {annenpartBostedsland !== undefined && (
            <Table.Row>
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
            </Table.Row>
          )}
          {harSøkerAleneOmsorg !== 'IKKE_RELEVANT' && (
            <Table.Row>
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
            </Table.Row>
          )}
          {harRettNorge !== 'IKKE_RELEVANT' && (
            <Table.Row>
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
            </Table.Row>
          )}
          {harOppholdEØS !== 'IKKE_RELEVANT' && (
            <Table.Row>
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
            </Table.Row>
          )}
          {harRettEØS !== 'IKKE_RELEVANT' && (
            <Table.Row>
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
            </Table.Row>
          )}
          {harUføretrygd !== 'IKKE_RELEVANT' && (
            <Table.Row>
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
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </EkspansjonsKort>
  );
};
