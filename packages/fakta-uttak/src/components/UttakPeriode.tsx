import React, { FunctionComponent, ReactElement } from 'react';
import {
  FormattedMessage, injectIntl, IntlShape, WrappedComponentProps,
} from 'react-intl';
import moment from 'moment';
import classnames from 'classnames/bind';
import { FieldArrayFieldsProps, FieldArrayMetaProps } from 'redux-form';
import { Normaltekst } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import { ArbeidsgiverOpplysningerPerId, FamilieHendelseSamling } from '@fpsak-frontend/types';
import { calcDays } from '@fpsak-frontend/utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import overlapp from '@fpsak-frontend/assets/images/overlapp.svg';
import tomPeriode from '@fpsak-frontend/assets/images/tom_periode.svg';
import UttakPeriodeType from './UttakPeriodeType';
import UttakPeriodeInnhold from './UttakPeriodeInnhold';

import styles from './uttakPeriode.less';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const classNames = classnames.bind(styles);

const renderTomPeriode = (intl: IntlShape): ReactElement => (
  <div className={styles.periodeIconWrapper}>
    <Image src={tomPeriode} alt={intl.formatMessage({ id: 'UttakInfoPanel.PeriodenharTommeDagerFremTilNestePeriode' })} />
    <Normaltekst><FormattedMessage id="UttakInfoPanel.TomPeriode" /></Normaltekst>
  </div>
);

const renderOverlappendePeriode = (intl: IntlShape): ReactElement => (
  <div className={styles.periodeIconWrapper}>
    <Image src={overlapp} alt={intl.formatMessage({ id: 'UttakInfoPanel.PeriodenErOverlappende' })} />
    <Normaltekst><FormattedMessage id="UttakInfoPanel.OverlappendePeriode" /></Normaltekst>
  </div>
);

const renderValidationGraphic = (perioder: CustomUttakKontrollerFaktaPerioder[], index: number, isLastIndex: boolean, intl: IntlShape): ReactElement | null => {
  if (!isLastIndex) {
    const periode = perioder[index];
    const nextPeriode = perioder[index + 1];
    const diff = calcDays(periode.tom, nextPeriode.fom);

    if (moment(periode.tom) >= moment(nextPeriode.fom)) {
      return renderOverlappendePeriode(intl);
    }

    if (moment(periode.tom) < moment(nextPeriode.fom) && diff > 2) {
      return renderTomPeriode(intl);
    }
  }

  return null;
};

const getClassName = (periode: CustomUttakKontrollerFaktaPerioder, readOnly: boolean): string => {
  if (periode.oppholdÅrsak && periode.oppholdÅrsak !== '-') {
    return classNames('oppholdPeriodeContainer', { active: !periode.bekreftet && !readOnly });
  }
  return classNames('periodeContainer', { active: !periode.bekreftet && !readOnly });
};

interface OwnProps {
  fields: FieldArrayFieldsProps<CustomUttakKontrollerFaktaPerioder>;
  meta: FieldArrayMetaProps;
  openSlettPeriodeModalCallback: (...args: any[]) => any;
  updatePeriode: (...args: any[]) => any;
  editPeriode: (...args: any[]) => any;
  cancelEditPeriode: (...args: any[]) => any;
  isAnyFormOpen: (...args: any[]) => any;
  readOnly: boolean;
  perioder: CustomUttakKontrollerFaktaPerioder[];
  isNyPeriodeFormOpen: boolean;
  vilkarForSykdomExists: boolean;
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string;
  behandlingStatus: string;
  familiehendelse: FamilieHendelseSamling;
  sisteUttakdatoFørsteSeksUker: moment.Moment;
  endringsdato?: string;
  farSøkerFør6Uker?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const UttakPeriode: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  cancelEditPeriode,
  editPeriode,
  endringsdato,
  farSøkerFør6Uker,
  sisteUttakdatoFørsteSeksUker,
  fields,
  intl,
  isAnyFormOpen,
  isNyPeriodeFormOpen,
  meta,
  openSlettPeriodeModalCallback,
  perioder,
  getKodeverknavn,
  behandlingStatus,
  familiehendelse,
  vilkarForSykdomExists,
  readOnly,
  updatePeriode,
  arbeidsgiverOpplysningerPerId,
}) => (
  <div>
    {meta.error && <AlertStripe className={styles.fullWidth} type="feil">{meta.error}</AlertStripe>}
    {meta.warning && <AlertStripe className={styles.fullWidth} type="info">{meta.warning}</AlertStripe>}

    <FlexContainer wrap>
      {fields.map((fieldId: string, index: number, field: FieldArrayFieldsProps<CustomUttakKontrollerFaktaPerioder>) => {
        const periode = field.get(index);
        const harEndringsdatoSomErFørFørsteUttaksperiode = endringsdato ? moment(periode.fom).isAfter(endringsdato) : false;
        return (
          <React.Fragment key={fieldId}>
            <FlexRow>
              <FlexColumn className={styles.fullWidth}>
                {index === 0 && harEndringsdatoSomErFørFørsteUttaksperiode && renderTomPeriode(intl)}
                <div className={getClassName(periode, readOnly)}>
                  <UttakPeriodeType
                    tilDato={periode.tom}
                    fraDato={periode.fom}
                    uttakPeriodeType={periode.uttakPeriodeType}
                    id={periode.id}
                    arbeidstidprosent={periode.arbeidstidsprosent}
                    arbeidsgiverReferanse={periode.arbeidsgiverReferanse}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    utsettelseArsak={periode.utsettelseÅrsak}
                    overforingArsak={periode.overføringÅrsak}
                    isFromSøknad={periode.isFromSøknad}
                    erSelvstendig={periode.erSelvstendig}
                    erFrilanser={periode.erFrilanser}
                    openSlettPeriodeModalCallback={openSlettPeriodeModalCallback}
                    editPeriode={editPeriode}
                    isAnyFormOpen={isAnyFormOpen}
                    isNyPeriodeFormOpen={isNyPeriodeFormOpen}
                    readOnly={readOnly}
                    getKodeverknavn={getKodeverknavn}
                    flerbarnsdager={periode.flerbarnsdager}
                    samtidigUttak={periode.samtidigUttak}
                    samtidigUttaksprosent={periode.samtidigUttaksprosent}
                    oppholdArsak={periode.oppholdÅrsak}
                  />
                  <UttakPeriodeInnhold
                    fieldId={fieldId}
                    bekreftet={periode.bekreftet}
                    utsettelseArsak={periode.utsettelseÅrsak}
                    openForm={periode.openForm}
                    arbeidstidprosent={periode.arbeidstidsprosent}
                    id={periode.id}
                    tilDato={periode.tom}
                    fraDato={periode.fom}
                    uttakPeriodeType={periode.uttakPeriodeType}
                    overforingArsak={periode.overføringÅrsak}
                    updatePeriode={updatePeriode}
                    cancelEditPeriode={cancelEditPeriode}
                    readOnly={readOnly}
                    behandlingStatusKode={behandlingStatus}
                    farSøkerFør6Uker={farSøkerFør6Uker}
                    sisteUttakdatoFørsteSeksUker={sisteUttakdatoFørsteSeksUker}
                    familiehendelse={familiehendelse}
                    vilkarForSykdomExists={vilkarForSykdomExists}
                  />
                </div>
                {perioder.length === fields.length
                    && renderValidationGraphic(perioder, index, index === (fields.length - 1), intl)}
              </FlexColumn>
            </FlexRow>
          </React.Fragment>
        );
      })}
    </FlexContainer>
  </div>
);

UttakPeriode.defaultProps = {
  farSøkerFør6Uker: false,
};

export default injectIntl(UttakPeriode);
