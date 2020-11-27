import React, { FunctionComponent, ReactElement } from 'react';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import overforingArsakCodes, { overforingArsakTexts } from '@fpsak-frontend/kodeverk/src/overforingArsakCodes';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import { Image } from '@fpsak-frontend/shared-components';
import { calcDaysAndWeeks, dateFormat } from '@fpsak-frontend/utils';
import editPeriodeIcon from '@fpsak-frontend/assets/images/endre.svg';
import editPeriodeDisabledIcon from '@fpsak-frontend/assets/images/endre_disablet.svg';
import removePeriod from '@fpsak-frontend/assets/images/remove.svg';
import removePeriodDisabled from '@fpsak-frontend/assets/images/remove_disabled.svg';
import { ArbeidsgiverOpplysningerPerId, Kodeverk } from '@fpsak-frontend/types';

import lagVisningsNavn from './utils/uttakVisningsnavnHelper';

import styles from './uttakPeriodeType.less';

const formatProsent = (prosent: string | number): string => `${prosent}%`;

const getUttakTypeTitle = (getKodeverknavn: (kodeverk: Kodeverk) => string, utsettelseArsak?: Kodeverk, overforingArsak?: Kodeverk,
  arbeidstidprosent?: number, oppholdArsak?: Kodeverk): ReactElement => {
  if (overforingArsak && overforingArsak.kode !== overforingArsakCodes.UDEFINERT) {
    return (
      <FormattedMessage
        id="UttakInfoPanel.OverføringMedÅrsak"
        values={{ årsak: overforingArsakTexts[overforingArsak.kode] }}
      />
    );
  }

  if (utsettelseArsak && utsettelseArsak.kode !== utsettelseArsakCodes.UDEFINERT) {
    return (
      <FormattedMessage
        id="UttakInfoPanel.UtsettelseMedÅrsak"
        values={{ årsak: getKodeverknavn(utsettelseArsak) }}
      />
    );
  }

  if (oppholdArsak && oppholdArsak.kode !== oppholdArsakType.UDEFINERT) {
    return (
      <FormattedMessage id="UttakInfoPanel.OppholdMedÅrsak" />
    );
  }

  if (arbeidstidprosent !== null && arbeidstidprosent !== undefined) {
    return <FormattedMessage id="UttakInfoPanel.UttakMedGradering" />;
  }

  return <FormattedMessage id="UttakInfoPanel.Uttak" />;
};

const getUttakPeriode = (getKodeverknavn: (kodeverk: Kodeverk) => string, uttakPeriodeType: Kodeverk, oppholdArsak?: Kodeverk): string => {
  if (oppholdArsak && oppholdArsak.kode !== oppholdArsakType.UDEFINERT) {
    return getKodeverknavn(oppholdArsak);
  }

  return getKodeverknavn(uttakPeriodeType);
};

interface OwnProps {
  arbeidsgiverReferanse?: string;
  arbeidstidprosent?: number;
  editPeriode: (...args: any[]) => any;
  erFrilanser?: boolean;
  erSelvstendig?: boolean;
  flerbarnsdager: boolean;
  fraDato: string;
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  id: string;
  isAnyFormOpen: () => boolean;
  isFromSøknad: boolean;
  isNyPeriodeFormOpen: boolean;
  openSlettPeriodeModalCallback: (...args: any[]) => any;
  oppholdArsak?: Kodeverk;
  overforingArsak?: Kodeverk;
  readOnly: boolean;
  samtidigUttak: boolean;
  samtidigUttaksprosent?: string;
  tilDato: string;
  utsettelseArsak?: Kodeverk;
  uttakPeriodeType: Kodeverk;
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
  const isGradering = arbeidstidprosent !== null && arbeidstidprosent !== undefined;
  return (
    <div className={styles.periodeType}>
      <div className={styles.headerWrapper}>
        <div>
          {isFromSøknad && <Undertekst><FormattedMessage id="UttakInfoPanel.FraSøknad" /></Undertekst>}
          <Element>{getUttakTypeTitle(getKodeverknavn, utsettelseArsak, overforingArsak, arbeidstidprosent, oppholdArsak)}</Element>
          <Normaltekst>{getUttakPeriode(getKodeverknavn, uttakPeriodeType, oppholdArsak)}</Normaltekst>
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
        <Element>{`${dateFormat(fraDato)} - ${dateFormat(tilDato)}`}</Element>
        <Undertekst>
          <FormattedMessage
            id={numberOfDaysAndWeeks.id}
            values={{
              weeks: numberOfDaysAndWeeks.weeks,
              days: numberOfDaysAndWeeks.days,
            }}
          />
        </Undertekst>
      </div>

      {samtidigUttak && (
        <div className={styles.textWrapper}>
          <Undertekst><FormattedMessage id="UttakInfoPanel.SamtidigUttak" /></Undertekst>
          {samtidigUttaksprosent && (
            <Normaltekst>{formatProsent(samtidigUttaksprosent)}</Normaltekst>
          )}
        </div>
      )}
      {flerbarnsdager && (
        <div className={styles.textWrapper}>
          <Undertekst><FormattedMessage id="UttakInfoPanel.Flerbarnsdager" /></Undertekst>
        </div>
      )}
      {(arbeidstidprosent === 0 || arbeidstidprosent) && (
        <div className={styles.textWrapper}>
          <Undertekst><FormattedMessage id="UttakInfoPanel.AndelIArbeid" /></Undertekst>
          <Normaltekst>{formatProsent(arbeidstidprosent)}</Normaltekst>
        </div>
      )}
      {isGradering && (
        <>
          {erFrilanser && (
            <div className={styles.textWrapper}>
              <Element><FormattedMessage id="UttakInfoPanel.Frilans" /></Element>
            </div>
          )}
          {erSelvstendig && (
            <div className={styles.textWrapper}>
              <Element><FormattedMessage id="UttakInfoPanel.Selvstendignæringsdrivende" /></Element>
            </div>
          )}
          {arbeidsgiverReferanse && arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse] && (
            <div className={styles.textWrapper}>
              <Element>{lagVisningsNavn(arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse])}</Element>
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
