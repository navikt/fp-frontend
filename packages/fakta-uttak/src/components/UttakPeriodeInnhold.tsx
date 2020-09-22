import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { FamilieHendelse, FamilieHendelseSamling, Kodeverk } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import utsettelseArsakCodes from '@fpsak-frontend/kodeverk/src/utsettelseArsakCodes';
import overforingArsakCodes from '@fpsak-frontend/kodeverk/src/overforingArsakCodes';
import FerieOgArbeidsPeriode from './perioder/FerieOgArbeidsPeriode';
import SykdomOgSkadePeriode from './perioder/SykdomOgSkadePeriode';
import InnleggelsePeriode from './perioder/InnleggelsePeriode';
import ForeldreAnsvarPeriode from './perioder/ForeldreAnsvarPeriode';

import styles from './uttakPeriodeInnhold.less';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

export const renderPeriode = (
  fieldId: string,
  id: string,
  updatePeriode: (...args: any[]) => any,
  cancelEditPeriode: (...args: any[]) => any,
  arbeidstidprosent: number,
  readOnly: boolean,
  fraDato: string,
  tilDato: string,
  utsettelseArsak: Kodeverk,
  overforingArsak: Kodeverk,
  bekreftet: boolean,
  uttakPeriodeType: Kodeverk,
  arbeidsgiver: CustomUttakKontrollerFaktaPerioder['arbeidsgiver'],
  behandlingStatusKode: string,
  farSøkerFør6Uker: boolean,
  behandlingId: number,
  behandlingVersjon: number,
  gjeldendeFamiliehendelse: FamilieHendelse,
  vilkarForSykdomExists: boolean,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  sisteUttakdatoFørsteSeksUker: moment.Moment,
) => {
  const utsettelseSwitch = utsettelseArsak ? utsettelseArsak.kode : utsettelseArsakCodes.UDEFINERT;
  const overforingSwitch = overforingArsak ? overforingArsak.kode : overforingArsakCodes.UDEFINERT;
  const farHarSøktFørsteSeksUkerOgPeriodeFomErInnenfor = farSøkerFør6Uker && moment(fraDato).isBefore(sisteUttakdatoFørsteSeksUker);

  switch (utsettelseSwitch) {
    case utsettelseArsakCodes.ARBEID:
    case utsettelseArsakCodes.LOVBESTEMT_FERIE:
      return (
        <FerieOgArbeidsPeriode
          fieldId={fieldId}
          id={id}
          updatePeriode={updatePeriode}
          cancelEditPeriode={cancelEditPeriode}
          readOnly={readOnly}
          arbeidstidprosent={arbeidstidprosent}
          fraDato={fraDato}
          tilDato={tilDato}
          bekreftet={bekreftet}
          uttakPeriodeType={uttakPeriodeType}
          arbeidsgiver={arbeidsgiver}
          behandlingStatusKode={behandlingStatusKode}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          getKodeverknavn={getKodeverknavn}
        />
      );
    case utsettelseArsakCodes.SYKDOM:
    case utsettelseArsakCodes.HV_OVELSE:
    case utsettelseArsakCodes.NAV_TILTAK:
      return (
        <SykdomOgSkadePeriode
          fieldId={fieldId}
          id={id}
          updatePeriode={updatePeriode}
          cancelEditPeriode={cancelEditPeriode}
          readOnly={readOnly}
          fraDato={fraDato}
          tilDato={tilDato}
          overforingArsak={overforingArsak}
          utsettelseArsak={utsettelseArsak}
          bekreftet={bekreftet}
          behandlingStatusKode={behandlingStatusKode}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
          vilkarForSykdomExists={vilkarForSykdomExists}
          erHeimevern={utsettelseSwitch === utsettelseArsakCodes.HV_OVELSE}
          erNavTiltak={utsettelseSwitch === utsettelseArsakCodes.NAV_TILTAK}
        />
      );
    case utsettelseArsakCodes.INSTITUSJONSOPPHOLD_SØKER:
    case utsettelseArsakCodes.INSTITUSJONSOPPHOLD_BARNET:
      return (
        <InnleggelsePeriode
          fieldId={fieldId}
          id={id}
          updatePeriode={updatePeriode}
          cancelEditPeriode={cancelEditPeriode}
          overforingArsak={overforingArsak}
          readOnly={readOnly}
          fraDato={fraDato}
          tilDato={tilDato}
          bekreftet={bekreftet}
          behandlingStatusKode={behandlingStatusKode}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
      );
    case utsettelseArsakCodes.UDEFINERT:
      if (overforingSwitch === overforingArsakCodes.SYKDOM_ANNEN_FORELDER || farHarSøktFørsteSeksUkerOgPeriodeFomErInnenfor) {
        return (
          <SykdomOgSkadePeriode
            fieldId={fieldId}
            id={id}
            updatePeriode={updatePeriode}
            cancelEditPeriode={cancelEditPeriode}
            readOnly={readOnly}
            fraDato={fraDato}
            tilDato={tilDato}
            utsettelseArsak={utsettelseArsak}
            overforingArsak={overforingArsak}
            bekreftet={bekreftet}
            behandlingStatusKode={behandlingStatusKode}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
            vilkarForSykdomExists={vilkarForSykdomExists}
          />
        );
      }

      if (overforingSwitch === overforingArsakCodes.IKKE_RETT_ANNEN_FORELDER
        || overforingSwitch === overforingArsakCodes.ALENEOMSORG) {
        return (
          <ForeldreAnsvarPeriode
            fieldId={fieldId}
            id={id}
            updatePeriode={updatePeriode}
            cancelEditPeriode={cancelEditPeriode}
            overforingArsak={overforingArsak}
            readOnly={readOnly}
            fraDato={fraDato}
            tilDato={tilDato}
            bekreftet={bekreftet}
            behandlingStatusKode={behandlingStatusKode}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
          />
        );
      }

      if (overforingSwitch === overforingArsakCodes.INSTITUSJONSOPPHOLD_ANNEN_FORELDER) {
        return (
          <InnleggelsePeriode
            fieldId={fieldId}
            id={id}
            updatePeriode={updatePeriode}
            cancelEditPeriode={cancelEditPeriode}
            overforingArsak={overforingArsak}
            readOnly={readOnly}
            fraDato={fraDato}
            tilDato={tilDato}
            bekreftet={bekreftet}
            behandlingStatusKode={behandlingStatusKode}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
          />
        );
      }

      return (
        <FerieOgArbeidsPeriode
          fieldId={fieldId}
          id={id}
          updatePeriode={updatePeriode}
          cancelEditPeriode={cancelEditPeriode}
          readOnly={readOnly}
          arbeidstidprosent={arbeidstidprosent}
          fraDato={fraDato}
          tilDato={tilDato}
          inntektsmeldingInfo={inntektsmeldingInfo}
          bekreftet={bekreftet}
          uttakPeriodeType={uttakPeriodeType}
          arbeidsgiver={arbeidsgiver}
          behandlingStatusKode={behandlingStatusKode}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          getKodeverknavn={getKodeverknavn}
        />
      );
    default:
      return null;
  }
};

interface OwnProps {
  fieldId: string;
  utsettelseArsak?: Kodeverk;
  overforingArsak?: Kodeverk;
  updatePeriode: (...args: any[]) => any;
  id: string;
  cancelEditPeriode: (...args: any[]) => any;
  readOnly: boolean;
  fraDato: string;
  tilDato: string;
  bekreftet: boolean;
  openForm: boolean;
  uttakPeriodeType: Kodeverk;
  behandlingStatusKode: string;
  farSøkerFør6Uker: boolean;
  familiehendelse: FamilieHendelseSamling;
  vilkarForSykdomExists: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  arbeidstidprosent?: number;
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  sisteUttakdatoFørsteSeksUker: moment.Moment;
  arbeidsgiver?: CustomUttakKontrollerFaktaPerioder['arbeidsgiver'];
}

export const UttakPeriodeInnhold: FunctionComponent<OwnProps> = ({
  fieldId,
  utsettelseArsak,
  overforingArsak,
  id,
  updatePeriode,
  cancelEditPeriode,
  readOnly,
  arbeidstidprosent,
  fraDato,
  tilDato,
  bekreftet,
  openForm,
  uttakPeriodeType,
  arbeidsgiver,
  behandlingStatusKode,
  farSøkerFør6Uker,
  behandlingId,
  behandlingVersjon,
  familiehendelse,
  vilkarForSykdomExists,
  getKodeverknavn,
  sisteUttakdatoFørsteSeksUker,
}) => {
  const editable = !(!readOnly && openForm);

  return (
    <div className={styles.periodeInnhold}>
      <VerticalSpacer eightPx />
      {renderPeriode(
        fieldId,
        id,
        updatePeriode,
        cancelEditPeriode,
        arbeidstidprosent,
        editable,
        fraDato,
        tilDato,
        utsettelseArsak,
        overforingArsak,
        bekreftet,
        uttakPeriodeType,
        arbeidsgiver,
        behandlingStatusKode,
        farSøkerFør6Uker,
        behandlingId,
        behandlingVersjon,
        familiehendelse.gjeldende,
        vilkarForSykdomExists,
        getKodeverknavn,
        sisteUttakdatoFørsteSeksUker,
      )}
    </div>
  );
};

UttakPeriodeInnhold.defaultProps = {
  inntektsmeldingInfo: [],
};

export default UttakPeriodeInnhold;
