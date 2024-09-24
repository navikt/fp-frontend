import React, { FC } from 'react';
import { AdressePeriode, AlleKodeverk, KodeverkMedNavn, MedlemskapAvvik, MedlemskapV3 } from '@navikt/fp-types';
import { BodyLong, Box, Detail, Label, Table } from '@navikt/ds-react';
import { FormattedMessage, useIntl } from 'react-intl';
import { AvsnittSkiller, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import EkspansjonsKort from '../ekspansjonsKort/EkspansjonsKort';
import { relevantForAdresser } from '../ekspansjonsKort/medlemsAvvik';
import { FaktaKilde } from '../../faktaKilde';
import { erAdressePerioderLike, formaterAdresse } from '../../utils/adresseUtils';
import { sorterPerioder } from '../../utils/periodeUtils';

interface AdresseTabellProps {
  adresser: AdressePeriode[];
  erAnnenpart?: boolean;
  harSammeAdresser?: boolean;
  adresseKodeverk: KodeverkMedNavn[];
}

const AdresseTabell: FC<AdresseTabellProps> = ({
  adresser,
  erAnnenpart = false,
  harSammeAdresser = false,
  adresseKodeverk,
}) => {
  if (harSammeAdresser) {
    return (
      <Box padding="4">
        <BodyLong textColor="subtle">
          <FormattedMessage id="OpplysningerOmAdresser.Tabell.SammeAdresse" />
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
            <FormattedMessage id="OpplysningerOmAdresser.Tabell.IngenAdresse" values={{ erAnnenpart }} />
          </BodyLong>
        </Box>
      )}
      {adresser.length > 0 && (
        <Table style={{ tableLayout: 'fixed' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <FormattedMessage id="OpplysningerOmAdresser.PeriodeLabel" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="OpplysningerOmAdresser.AdresseLabel" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="OpplysningerOmAdresser.TypeLabel" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {adresser.sort(sorterPerioder).map(({ adresse, fom, tom }, i) => {
              return (
                <Table.Row key={i + fom + tom}>
                  <Table.DataCell style={rowStyle(i)}>
                    <PeriodLabel
                      dateStringFom={fom}
                      dateStringTom={tom === null || tom === TIDENES_ENDE ? undefined : tom}
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

interface Props {
  medlemskap: MedlemskapV3;
  avvik: MedlemskapAvvik[];
  brukerNavn: string;
  annenpartNavn?: string;
  alleKodeverk: AlleKodeverk;
  skalViseAvvik: boolean;
}

const OpplysningerOmAdresser: FC<Props> = ({
  avvik = [],
  medlemskap: { adresser, annenpart },
  brukerNavn,
  annenpartNavn,
  alleKodeverk,
  skalViseAvvik,
}) => {
  const intl = useIntl();

  return (
    <EkspansjonsKort
      skalViseAvvik={skalViseAvvik}
      tittel={intl.formatMessage(
        { id: 'OpplysningsKort.AdresseTittel' },
        {
          adresseCountSoker: adresser.length,
          adresseCountAnnenpart: annenpart?.adresser.length ?? 'none',
        },
      )}
      kilde={FaktaKilde.FREG}
      relevanteAvvik={avvik.filter(a => relevantForAdresser.includes(a))}
    >
      <Label>
        <FormattedMessage id="OpplysningerOmAdresser.Soker" values={{ navn: brukerNavn }} />
      </Label>
      <Detail>
        <FormattedMessage id="OpplysningerOmAdresser.Soker.Beskrivelse" />
      </Detail>
      <AdresseTabell adresser={adresser} adresseKodeverk={alleKodeverk[KodeverkType.ADRESSE_TYPE]} />

      {annenpart && <AvsnittSkiller dividerParagraf />}
      {annenpart && (
        <>
          <Label>
            <FormattedMessage id="OpplysningerOmAdresser.Annenpart" values={{ navn: annenpartNavn }} />
          </Label>
          <Detail>
            <FormattedMessage id="OpplysningerOmAdresser.Annenpart.Beskrivelse" />
          </Detail>
          <AdresseTabell
            adresseKodeverk={alleKodeverk[KodeverkType.ADRESSE_TYPE]}
            adresser={annenpart.adresser}
            erAnnenpart
            harSammeAdresser={annenpart.adresser.length > 0 && erAdressePerioderLike(adresser, annenpart.adresser)}
          />
        </>
      )}
    </EkspansjonsKort>
  );
};

export default OpplysningerOmAdresser;
