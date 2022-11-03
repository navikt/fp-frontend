import React, {
  useCallback, FunctionComponent, useRef, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { Heading } from '@navikt/ds-react';
import {
  Table, AksjonspunktHelpTextHTML, VerticalSpacer, ExpandableTableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, dateFormat, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { AksjonspunktStatus, isAksjonspunktOpen, KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';

import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, FamilieHendelseSamling,
  Personoversikt, UttakKontrollerFaktaPerioderWrapper, Ytelsefordeling,
} from '@fpsak-frontend/types';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';

import UttakFaktaDetailForm from './UttakFaktaDetailForm';

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
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
}

const UttakFaktaForm: FunctionComponent<OwnProps> = ({
  uttakKontrollerFaktaPerioder,
  ytelsefordeling,
  alleKodeverk,
  aksjonspunkter,
  readOnly,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const harApneAksjonspunkter = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));

  const aksjonspunktTekster = aksjonspunkter
    .filter((ap) => ap.status === AksjonspunktStatus.OPPRETTET)
    .map((ap) => {
      const førsteUttaksdato = ytelsefordeling && ytelsefordeling.førsteUttaksdato ? ytelsefordeling.førsteUttaksdato : undefined;
      const førsteUttak = {
        value: dayjs(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT),
      };

      return (
        <FormattedMessage
          key={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
          id={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
          values={førsteUttak}
        />
      );
    });

  const [valgteFoms, setValgteFoms] = useState<string[]>([]);
  const velgPeriodeFom = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgteFoms.includes(fom)) {
      setValgteFoms((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setValgteFoms((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
    tableRef?.current?.scrollIntoView();
  }, [valgteFoms, setValgteFoms]);

  return (
    <>
      <Heading size="small"><FormattedMessage id="UttakFaktaForm.FaktaUttak" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {aksjonspunktTekster}
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
              showContent={valgteFoms.includes(periode.fom)}
              toggleContent={() => velgPeriodeFom(periode.fom)}
              content={valgteFoms.includes(periode.fom) && (<UttakFaktaDetailForm valgtPeriode={periode} readOnly={readOnly} />)}
            >
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
