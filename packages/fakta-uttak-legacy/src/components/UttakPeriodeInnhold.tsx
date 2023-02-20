import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { IntlShape, useIntl } from 'react-intl';

import { FamilieHendelse, FamilieHendelseSamling } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { utsettelseArsakCodes, overforingArsakCodes } from '@navikt/fp-kodeverk';
import FerieOgArbeidsPeriode from './perioder/FerieOgArbeidsPeriode';
import SykdomOgSkadePeriode from './perioder/SykdomOgSkadePeriode';
import InnleggelsePeriode from './perioder/InnleggelsePeriode';
import ForeldreAnsvarPeriode from './perioder/ForeldreAnsvarPeriode';

import styles from './uttakPeriodeInnhold.less';

export const renderPeriode = (
  fieldId: string,
  id: string,
  updatePeriode: (...args: any[]) => any,
  cancelEditPeriode: (...args: any[]) => any,
  arbeidstidprosent: number,
  readOnly: boolean,
  fraDato: string,
  tilDato: string,
  utsettelseArsak: string,
  overforingArsak: string,
  bekreftet: boolean,
  uttakPeriodeType: string,
  behandlingStatusKode: string,
  farSøkerFør6Uker: boolean,
  gjeldendeFamiliehendelse: FamilieHendelse,
  vilkarForSykdomExists: boolean,
  sisteUttakdatoFørsteSeksUker: moment.Moment,
  intl: IntlShape,
) => { // NOSONAR Det er planlagt å laga nye uttakskomponentar
  const utsettelseSwitch = utsettelseArsak || utsettelseArsakCodes.UDEFINERT;
  const overforingSwitch = overforingArsak || overforingArsakCodes.UDEFINERT;
  const farHarSøktFørsteSeksUkerOgPeriodeFomErInnenfor = farSøkerFør6Uker && moment(fraDato).isBefore(sisteUttakdatoFørsteSeksUker);

  switch (utsettelseSwitch) {
    case utsettelseArsakCodes.ARBEID:
    case utsettelseArsakCodes.LOVBESTEMT_FERIE:
      return (
        /* @ts-ignore Fiks cannot be used as a JSX component */
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
          behandlingStatusKode={behandlingStatusKode}
        />
      );
    case utsettelseArsakCodes.SYKDOM:
    case utsettelseArsakCodes.HV_OVELSE:
    case utsettelseArsakCodes.NAV_TILTAK:
      return (
        /* @ts-ignore Fiks cannot be used as a JSX component */
        <SykdomOgSkadePeriode
          fieldId={fieldId}
          id={id}
          updatePeriode={updatePeriode}
          cancelEditPeriode={cancelEditPeriode}
          readOnly={readOnly}
          fraDato={fraDato}
          tilDato={tilDato}
          overforingArsak={overforingArsak}
          bekreftet={bekreftet}
          behandlingStatusKode={behandlingStatusKode}
          gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
          vilkarForSykdomExists={vilkarForSykdomExists}
          erHeimevern={utsettelseSwitch === utsettelseArsakCodes.HV_OVELSE}
          erNavTiltak={utsettelseSwitch === utsettelseArsakCodes.NAV_TILTAK}
          intl={intl}
        />
      );
    case utsettelseArsakCodes.INSTITUSJONSOPPHOLD_SØKER:
    case utsettelseArsakCodes.INSTITUSJONSOPPHOLD_BARNET:
      return (
        /* @ts-ignore Fiks cannot be used as a JSX component */
        <InnleggelsePeriode
          fieldId={fieldId}
          id={id}
          updatePeriode={updatePeriode}
          cancelEditPeriode={cancelEditPeriode}
          readOnly={readOnly}
          fraDato={fraDato}
          tilDato={tilDato}
          behandlingStatusKode={behandlingStatusKode}
        />
      );
    case utsettelseArsakCodes.UDEFINERT:
      if (overforingSwitch === overforingArsakCodes.SYKDOM_ANNEN_FORELDER || farHarSøktFørsteSeksUkerOgPeriodeFomErInnenfor) {
        return (
          /* @ts-ignore Fiks cannot be used as a JSX component */
          <SykdomOgSkadePeriode
            fieldId={fieldId}
            id={id}
            updatePeriode={updatePeriode}
            cancelEditPeriode={cancelEditPeriode}
            readOnly={readOnly}
            fraDato={fraDato}
            tilDato={tilDato}
            overforingArsak={overforingArsak}
            bekreftet={bekreftet}
            behandlingStatusKode={behandlingStatusKode}
            gjeldendeFamiliehendelse={gjeldendeFamiliehendelse}
            vilkarForSykdomExists={vilkarForSykdomExists}
            intl={intl}
          />
        );
      }

      if (overforingSwitch === overforingArsakCodes.IKKE_RETT_ANNEN_FORELDER
        || overforingSwitch === overforingArsakCodes.ALENEOMSORG) {
        return (
          /* @ts-ignore Fiks cannot be used as a JSX component */
          <ForeldreAnsvarPeriode
            fieldId={fieldId}
            id={id}
            updatePeriode={updatePeriode}
            cancelEditPeriode={cancelEditPeriode}
            readOnly={readOnly}
            fraDato={fraDato}
            tilDato={tilDato}
            behandlingStatusKode={behandlingStatusKode}
          />
        );
      }

      if (overforingSwitch === overforingArsakCodes.INSTITUSJONSOPPHOLD_ANNEN_FORELDER) {
        return (
          /* @ts-ignore Fiks cannot be used as a JSX component */
          <InnleggelsePeriode
            fieldId={fieldId}
            id={id}
            updatePeriode={updatePeriode}
            cancelEditPeriode={cancelEditPeriode}
            readOnly={readOnly}
            fraDato={fraDato}
            tilDato={tilDato}
            behandlingStatusKode={behandlingStatusKode}
          />
        );
      }

      return (
        /* @ts-ignore Fiks cannot be used as a JSX component */
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
          behandlingStatusKode={behandlingStatusKode}
        />
      );
    default:
      return null;
  }
};

interface OwnProps {
  fieldId: string;
  utsettelseArsak?: string;
  overforingArsak?: string;
  updatePeriode: (...args: any[]) => any;
  id: string;
  cancelEditPeriode: (...args: any[]) => any;
  readOnly: boolean;
  fraDato: string;
  tilDato: string;
  bekreftet: boolean;
  openForm: boolean;
  uttakPeriodeType: string;
  behandlingStatusKode: string;
  farSøkerFør6Uker: boolean;
  familiehendelse: FamilieHendelseSamling;
  vilkarForSykdomExists: boolean;
  arbeidstidprosent?: number;
  sisteUttakdatoFørsteSeksUker: moment.Moment;
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
  behandlingStatusKode,
  farSøkerFør6Uker,
  familiehendelse,
  vilkarForSykdomExists,
  sisteUttakdatoFørsteSeksUker,
}) => {
  const intl = useIntl();
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
        behandlingStatusKode,
        farSøkerFør6Uker,
        familiehendelse.gjeldende,
        vilkarForSykdomExists,
        sisteUttakdatoFørsteSeksUker,
        intl,
      )}
    </div>
  );
};

export default UttakPeriodeInnhold;
