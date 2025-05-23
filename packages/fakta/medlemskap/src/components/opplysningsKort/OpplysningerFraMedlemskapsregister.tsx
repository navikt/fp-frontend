import { FormattedMessage, useIntl } from 'react-intl';

import { BodyLong, BodyShort, Box, Table } from '@navikt/ds-react';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { FaktaKilde, sorterPerioder } from '@navikt/fp-fakta-felles';
import { type AlleKodeverk, MedlemskapAvvik, type MedlemskapPeriode } from '@navikt/fp-types';

import { EkspansjonsKort } from '../ekspansjonsKort/EkspansjonsKort';
import { relevantForMedl } from '../ekspansjonsKort/medlemsAvvik';

interface Props {
  medlemskapsperioder: MedlemskapPeriode[];
  avvik: MedlemskapAvvik[] | undefined;
  alleKodeverk: AlleKodeverk;
  skalViseAvvik: boolean;
}

export const OpplysningerFraMedlemskapsregister = ({
  medlemskapsperioder,
  avvik = [],
  alleKodeverk,
  skalViseAvvik,
}: Props) => {
  const intl = useIntl();

  const medlemskapTypeKodeverk = alleKodeverk['MedlemskapType'];
  const dekningTypeKodeverk = alleKodeverk['MedlemskapDekningType'];

  const skalViseStudieland = medlemskapsperioder.find(mp => !!mp.studieland);
  const skalViseLovvalgtland = medlemskapsperioder.find(mp => !!mp.lovvalgsland);

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      kilde={FaktaKilde.MEDL}
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
                .toSorted(sorterPerioder)
                .map(
                  ({ fom, tom, medlemskapType, dekningType, beslutningsdato, studieland, lovvalgsland, erMedlem }) => {
                    const dekningTypeString = dekningTypeKodeverk.find(kv => kv.kode === dekningType)?.navn;
                    const medlemskapTypeString = medlemskapTypeKodeverk.find(kv => kv.kode === medlemskapType)?.navn;

                    return (
                      <Table.Row key={fom + tom + medlemskapTypeString}>
                        <Table.DataCell>
                          <PeriodLabel dateStringFom={fom} dateStringTom={tom ?? undefined} />
                        </Table.DataCell>
                        <Table.DataCell>
                          <FormattedMessage
                            id="OpplysningerFraMedlemskapsregister.TabellCell.ErMedlem"
                            values={{ erMedlem }}
                          />
                        </Table.DataCell>
                        {skalViseLovvalgtland && <Table.DataCell>{lovvalgsland}</Table.DataCell>}
                        {skalViseStudieland && <Table.DataCell>{studieland}</Table.DataCell>}
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
