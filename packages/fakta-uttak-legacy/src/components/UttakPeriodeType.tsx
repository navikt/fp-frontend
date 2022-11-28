import React, { FunctionComponent, ReactElement } from 'react';
import { Label, BodyShort, Detail } from '@navikt/ds-react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Image } from '@navikt/ft-ui-komponenter';

import overforingArsakCodes from '@fpsak-frontend/kodeverk/src/overforingArsakCodes';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import editPeriodeIcon from '@fpsak-frontend/assets/images/endre.svg';
import editPeriodeDisabledIcon from '@fpsak-frontend/assets/images/endre_disablet.svg';
import removePeriod from '@fpsak-frontend/assets/images/remove.svg';
import removePeriodDisabled from '@fpsak-frontend/assets/images/remove_disabled.svg';
import { ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import lagVisningsNavn from './utils/lagVisningsNavn';

import styles from './uttakPeriodeType.less';

const formatProsent = (prosent: string | number): string => `${prosent}%`;

// Dette burde ikkje vera hardkoda, men la dette ligga til heile fakta uttak blir refaktorert
export const overforingArsakTexts = {
  [overforingArsakCodes.INSTITUSJONSOPPHOLD_ANNEN_FORELDER]: 'Innlagt i helseinstitusjon',
  [overforingArsakCodes.SYKDOM_ANNEN_FORELDER]: 'Avhengig av hjelp grunnet sykdom',
  [overforingArsakCodes.IKKE_RETT_ANNEN_FORELDER]: 'Den andre foreldren har ikke rett',
  [overforingArsakCodes.ALENEOMSORG]: 'Søker har aleneomsorg',
  [overforingArsakCodes.UDEFINERT]: '-',
};

const getUttakTypeTitle = (
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
  utsettelseArsak?: string,
  overforingArsak?: string,
  arbeidstidprosent?: number,
  oppholdArsak?: string,
): ReactElement => {
  if (overforingArsak !== overforingArsakCodes.UDEFINERT && overforingArsak !== undefined) {
    return (
      <FormattedMessage
        id="UttakInfoPanel.OverføringMedÅrsak"
        values={{ årsak: overforingArsakTexts[overforingArsak] }}
      />
    );
  }

  if (utsettelseArsak !== utsettelseArsakCodes.UDEFINERT && utsettelseArsak !== undefined) {
    return (
      <FormattedMessage
        id="UttakInfoPanel.UtsettelseMedÅrsak"
        values={{ årsak: getKodeverknavn(utsettelseArsak, KodeverkType.UTSETTELSE_AARSAK_TYPE) }}
      />
    );
  }

  if (oppholdArsak !== oppholdArsakType.UDEFINERT && oppholdArsakType !== undefined) {
    return (
      <FormattedMessage id="UttakInfoPanel.OppholdMedÅrsak" />
    );
  }

  if (arbeidstidprosent !== null && arbeidstidprosent !== undefined) {
    return <FormattedMessage id="UttakInfoPanel.UttakMedGradering" />;
  }

  return <FormattedMessage id="UttakInfoPanel.Uttak" />;
};

const getUttakPeriode = (
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string,
  uttakPeriodeType: string,
  oppholdArsak?: string,
): string => {
  if (oppholdArsak !== oppholdArsakType.UDEFINERT) {
    return getKodeverknavn(oppholdArsak, KodeverkType.OPPHOLD_ARSAK);
  }

  return getKodeverknavn(uttakPeriodeType, KodeverkType.UTTAK_PERIODE_TYPE);
};

const finnesArbeidstidsprosent = (arbeidstidprosent?: number) => arbeidstidprosent === 0 || arbeidstidprosent;

const harArbeidsgiverOpplysninger = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  arbeidsgiverReferanse?: string,
): boolean => !!arbeidsgiverReferanse && !!arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

const erGradering = (arbeidstidprosent: number): boolean => arbeidstidprosent !== null && arbeidstidprosent !== undefined;

interface OwnProps {
  arbeidsgiverReferanse?: string;
  arbeidstidprosent?: number;
  editPeriode: (...args: any[]) => any;
  erFrilanser?: boolean;
  erSelvstendig?: boolean;
  flerbarnsdager: boolean;
  fraDato: string;
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string;
  id: string;
  isAnyFormOpen: () => boolean;
  isFromSøknad: boolean;
  isNyPeriodeFormOpen: boolean;
  openSlettPeriodeModalCallback: (...args: any[]) => any;
  oppholdArsak?: string;
  overforingArsak?: string;
  readOnly: boolean;
  samtidigUttak: boolean;
  samtidigUttaksprosent?: string;
  tilDato: string;
  utsettelseArsak?: string;
  uttakPeriodeType: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const UttakPeriodeType: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  arbeidsgiverReferanse,
  arbeidstidprosent,
  editPeriode,
  erFrilanser,
  erSelvstendig,
  flerbarnsdager,
  fraDato,
  getKodeverknavn,
  id,
  intl,
  isAnyFormOpen,
  isFromSøknad,
  isNyPeriodeFormOpen,
  openSlettPeriodeModalCallback,
  oppholdArsak,
  overforingArsak,
  readOnly,
  samtidigUttak,
  samtidigUttaksprosent,
  tilDato,
  utsettelseArsak,
  uttakPeriodeType,
  arbeidsgiverOpplysningerPerId,
}) => {
  const isAnyFormOrNyPeriodeOpen = isAnyFormOpen() || isNyPeriodeFormOpen;
  const numberOfDaysAndWeeks = calcDaysAndWeeks(fraDato, tilDato);
  return (
    <div className={styles.periodeType}>
      <div className={styles.headerWrapper}>
        <div>
          {isFromSøknad && <Detail size="small"><FormattedMessage id="UttakInfoPanel.FraSøknad" /></Detail>}
          <Label size="small">{getUttakTypeTitle(getKodeverknavn, utsettelseArsak, overforingArsak, arbeidstidprosent, oppholdArsak)}</Label>
          <BodyShort size="small">{getUttakPeriode(getKodeverknavn, uttakPeriodeType, oppholdArsak)}</BodyShort>
        </div>
        {!readOnly && (
          <div className={styles.iconContainer}>
            <Image
              className={styles.editIcon}
              src={isAnyFormOrNyPeriodeOpen ? editPeriodeDisabledIcon : editPeriodeIcon}
              onClick={isAnyFormOrNyPeriodeOpen ? () => undefined : () => editPeriode(id)}
              alt={intl.formatMessage({ id: 'UttakInfoPanel.EndrePerioden' })}
            />
            <Image
              className={styles.removeIcon}
              src={isAnyFormOrNyPeriodeOpen ? removePeriodDisabled : removePeriod}
              onClick={isAnyFormOrNyPeriodeOpen ? () => undefined : () => openSlettPeriodeModalCallback(id)}
              alt={intl.formatMessage({ id: 'UttakInfoPanel.SlettPerioden' })}
            />
          </div>
        )}
      </div>
      <div className={styles.textWrapper}>
        <Label size="small">{`${dateFormat(fraDato)} - ${dateFormat(tilDato)}`}</Label>
        <Detail size="small">
          <FormattedMessage
            id={numberOfDaysAndWeeks.id}
            values={{
              weeks: numberOfDaysAndWeeks.weeks,
              days: numberOfDaysAndWeeks.days,
            }}
          />
        </Detail>
      </div>

      {samtidigUttak && (
        <div className={styles.textWrapper}>
          <Detail size="small"><FormattedMessage id="UttakInfoPanel.SamtidigUttak" /></Detail>
          {samtidigUttaksprosent && (
            <BodyShort size="small">{formatProsent(samtidigUttaksprosent)}</BodyShort>
          )}
        </div>
      )}
      {flerbarnsdager && (
        <div className={styles.textWrapper}>
          <Detail size="small"><FormattedMessage id="UttakInfoPanel.Flerbarnsdager" /></Detail>
        </div>
      )}
      {finnesArbeidstidsprosent(arbeidstidprosent) && (
        <div className={styles.textWrapper}>
          <Detail size="small"><FormattedMessage id="UttakInfoPanel.AndelIArbeid" /></Detail>
          <BodyShort size="small">{formatProsent(arbeidstidprosent)}</BodyShort>
        </div>
      )}
      {erGradering(arbeidstidprosent) && (
        <>
          {erFrilanser && (
            <div className={styles.textWrapper}>
              <Label size="small"><FormattedMessage id="UttakInfoPanel.Frilans" /></Label>
            </div>
          )}
          {erSelvstendig && (
            <div className={styles.textWrapper}>
              <Label size="small"><FormattedMessage id="UttakInfoPanel.Selvstendignæringsdrivende" /></Label>
            </div>
          )}
          {harArbeidsgiverOpplysninger(arbeidsgiverOpplysningerPerId, arbeidsgiverReferanse) && (
            <div className={styles.textWrapper}>
              <Label size="small">{lagVisningsNavn(arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse])}</Label>
            </div>
          )}
        </>
      )}
    </div>
  );
};

UttakPeriodeType.defaultProps = {
  erFrilanser: false,
  erSelvstendig: false,
};

export default injectIntl(UttakPeriodeType);
