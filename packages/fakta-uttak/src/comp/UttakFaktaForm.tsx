import React, { FunctionComponent, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '@navikt/ds-react';
import {
  Table, AksjonspunktHelpTextHTML, VerticalSpacer, ExpandableTableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';

import {
  ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personoversikt, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import { AlleKodeverk } from '@navikt/ft-types';

const HEADER_TEXT_CODES = [
  'EMPTY',
  'UttakFaktaForm.Periode',
  'UttakFaktaForm.AntallDager',
  'UttakFaktaForm.Stonadskonto',
  'UttakFaktaForm.Kilde',
];

const getTextId = (weeks?: number, days?: number): string => {
  let id = 'UttakFaktaForm.AntallFlereDagerOgFlereUker';
  if (weeks === undefined && days === undefined) {
    id = 'UttakFaktaForm.TidenesEnde';
  }
  if (days === 0) {
    id = weeks === 1 ? 'UttakFaktaForm.AntallNullDagerOgEnUke' : 'UttakFaktaForm.AntallNullDagerOgFlereUker';
  }
  if (weeks === 0) {
    id = days === 1 ? 'UttakFaktaForm.AntallEnDagOgNullUker' : 'UttakFaktaForm.AntallFlereDagerOgNullUker';
  }
  if (days === 1) {
    id = weeks === 1 ? 'UttakFaktaForm.AntallEnDagOgEnUke' : 'UttakFaktaForm.AntallEnDagOgFlereUker';
  }
  if (weeks === 1) {
    id = 'UttakFaktaForm.AntallFlereDagerOgEnUke';
  }
  return id;
};

const getUttakPeriode = (
  alleKodeverk: AlleKodeverk,
  uttakPeriodeType: string,
  oppholdArsak?: string,
): string => {
  if (oppholdArsak !== oppholdArsakType.UDEFINERT) {
    return alleKodeverk[KodeverkType.OPPHOLD_ARSAK].find((k) => k.kode === KodeverkType.MORS_AKTIVITET)?.navn;
  }

  return alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE].find((k) => k.kode === uttakPeriodeType)?.navn;
};

interface OwnProps {
  ytelsefordeling: Ytelsefordeling;
  personoversikt: Personoversikt;
  familiehendelse: FamilieHendelseSamling;
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioderWrapper;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  kanOverstyre: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  harApneAksjonspunkter: boolean;
  alleKodeverk: AlleKodeverk;
}

const UttakFaktaForm: FunctionComponent<OwnProps> = ({
  harApneAksjonspunkter,
  uttakKontrollerFaktaPerioder,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const tableRef = useRef<HTMLTableElement>(null);

  return (
    <>
      <Heading size="small"><FormattedMessage id="UttakFaktaForm.FaktaUttak" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'AktivitetskravFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <Table ref={tableRef} headerTextCodes={HEADER_TEXT_CODES} noHover hasGrayHeader>
        {uttakKontrollerFaktaPerioder.perioder.map((periode) => {
          const numberOfDaysAndWeeks = calcDaysAndWeeks(periode.fom, periode.tom);
          return (
            <ExpandableTableRow
              key={periode.fom + periode.tom}
              isApLeftBorder={periode.bekreftet === false}
              showContent={false}
              toggleContent={() => undefined}
              content={<div>test</div>}
            >
              <TableColumn>Rediger</TableColumn>
              <TableColumn>{`${dateFormat(periode.fom)} - ${dateFormat(periode.tom)}`}</TableColumn>
              <TableColumn>
                <FormattedMessage
                  id={getTextId(numberOfDaysAndWeeks.weeks, numberOfDaysAndWeeks.days)}
                  values={{
                    weeks: numberOfDaysAndWeeks.weeks,
                    days: numberOfDaysAndWeeks.days,
                  }}
                />
              </TableColumn>
              <TableColumn>{getUttakPeriode(alleKodeverk, periode.uttakPeriodeType, periode.oppholdÅrsak)}</TableColumn>
              <TableColumn><FormattedMessage id={periode.begrunnelse ? 'UttakFaktaForm.Redigert' : 'UttakFaktaForm.FraSøknad'} /></TableColumn>
            </ExpandableTableRow>
          );
        })}
      </Table>
    </>
  );
};

export default UttakFaktaForm;
