import React, { FunctionComponent, ReactElement } from 'react';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import overforingArsakCodes from '@fpsak-frontend/kodeverk/src/overforingArsakCodes';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import { Image } from '@fpsak-frontend/shared-components';
import { calcDaysAndWeeks, dateFormat } from '@fpsak-frontend/utils';
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
  if (overforingArsak !== overforingArsakCodes.UDEFINERT) {
    return (
      <FormattedMessage
        id="UttakInfoPanel.OverføringMedÅrsak"
        values={{ årsak: overforingArsakTexts[overforingArsak] }}
      />
    );
  }

  if (utsettelseArsak !== utsettelseArsakCodes.UDEFINERT) {
    return (
      <FormattedMessage
        id="UttakInfoPanel.UtsettelseMedÅrsak"
        values={{ årsak: getKodeverknavn(utsettelseArsak, KodeverkType.UTSETTELSE_AARSAK_TYPE) }}
      />
    );
  }

  if (oppholdArsak !== oppholdArsakType.UDEFINERT) {
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
      {finnesArbeidstidsprosent(arbeidstidprosent) && (
        <div className={styles.textWrapper}>
          <Undertekst><FormattedMessage id="UttakInfoPanel.AndelIArbeid" /></Undertekst>
          <Normaltekst>{formatProsent(arbeidstidprosent)}</Normaltekst>
        </div>
      )}
      {erGradering(arbeidstidprosent) && (
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
          {harArbeidsgiverOpplysninger(arbeidsgiverOpplysningerPerId, arbeidsgiverReferanse) && (
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
