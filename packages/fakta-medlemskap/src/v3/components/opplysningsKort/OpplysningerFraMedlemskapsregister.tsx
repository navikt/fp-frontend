import React from 'react';
import { AlleKodeverk, MedlemskapAvvik, MedlemskapPeriodeV3 } from '@navikt/fp-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyLong, BodyShort, Box, Table } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/fp-kodeverk';

import EkspansjonsKort from '../ekspansjonsKort/EkspansjonsKort';
import { FaktaKilde } from '../../faktaKilde';
import { sorterPerioder } from '../../utils/periodeUtils';
import { relevantForMedl } from '../ekspansjonsKort/medlemsAvvik';
import { getLandnavnFraLandkode } from '../../utils/landUtils';

interface Props {
  medlemskapsperioder: MedlemskapPeriodeV3[];
  avvik: MedlemskapAvvik[] | undefined;
  alleKodeverk: AlleKodeverk;
}

const OpplysningerFraMedlemskapsregister = ({ medlemskapsperioder, avvik = [], alleKodeverk }: Props) => {
  const intl = useIntl();

  const medlemskapTypeKodeverk = alleKodeverk[KodeverkType.MEDLEMSKAP_TYPE];
  const dekningTypeKodeverk = alleKodeverk[KodeverkType.MEDLEMSKAP_DEKNING];

  const skalViseStudieland = medlemskapsperioder.find(mp => mp.studieland !== null);
  const skalViseLovvalgtland = medlemskapsperioder.find(mp => mp.lovvalgsland !== null);

  return (
    <EkspansjonsKort
      kilde={FaktaKilde.FREG}
      tittel={intl.formatMessage(
        { id: 'OpplysningsKort.MedlemskapsperiodeTittel' },
        { count: medlemskapsperioder.length },
      )}
      relevanteAvvik={avvik.filter(a => relevantForMedl.includes(a))}
    >
      <>
        <BodyShort size="small">
          <FormattedMessage id="OpplysningerFraMedlemskapsregister.Beskrivelse" />
        </BodyShort>

        {medlemskapsperioder.length === 0 && (
          <Box padding="4">
            <BodyLong textColor="subtle">
              <FormattedMessage id="OpplysningerFraMedlemskapsregister.Tabell.Ingen" />
            </BodyLong>
          </Box>
        )}
        {medlemskapsperioder.length > 0 && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.Periode" />
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.ErMedlem" />
                </Table.HeaderCell>
                {skalViseLovvalgtland && (
                  <Table.HeaderCell>
                    <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.LovvalgLand" />
                  </Table.HeaderCell>
                )}
                {skalViseStudieland && (
                  <Table.HeaderCell>
                    <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.Studieland" />
                  </Table.HeaderCell>
                )}
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.MedlType" />
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.Dekningtype" />
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <FormattedMessage id="OpplysningerFraMedlemskapsregister.TabellHeader.Beslutningsdato" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {medlemskapsperioder
                .sort(sorterPerioder)
                .map(
                  ({ fom, tom, medlemskapType, dekningType, beslutningsdato, studieland, lovvalgsland, erMedlem }) => {
                    const lovvalgtLandString = getLandnavnFraLandkode(lovvalgsland, alleKodeverk);
                    const studielandString = getLandnavnFraLandkode(studieland, alleKodeverk);

                    const dekningTypeString = dekningTypeKodeverk.find(kv => kv.kode === dekningType)?.navn;
                    const medlemskapTypeString = medlemskapTypeKodeverk.find(kv => kv.kode === medlemskapType)?.navn;

                    return (
                      <Table.Row key={fom + tom + medlemskapTypeString}>
                        <Table.DataCell>
                          <PeriodLabel dateStringFom={fom} dateStringTom={tom} />
                        </Table.DataCell>
                        <Table.DataCell>
                          <FormattedMessage
                            id="OpplysningerFraMedlemskapsregister.TabellCell.ErMedlem"
                            values={{ erMedlem }}
                          />
                        </Table.DataCell>
                        {skalViseLovvalgtland && <Table.DataCell>{lovvalgtLandString}</Table.DataCell>}
                        {skalViseStudieland && <Table.DataCell>{studielandString}</Table.DataCell>}
                        <Table.DataCell>{medlemskapTypeString}</Table.DataCell>
                        <Table.DataCell>{dekningTypeString}</Table.DataCell>
                        <Table.DataCell>
                          {beslutningsdato ? <DateLabel dateString={beslutningsdato} /> : null}
                        </Table.DataCell>
                      </Table.Row>
                    );
                  },
                )}
            </Table.Body>
          </Table>
        )}
      </>
    </EkspansjonsKort>
  );
};

export default OpplysningerFraMedlemskapsregister;
