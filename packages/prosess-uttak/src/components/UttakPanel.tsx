import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { Undertittel } from 'nav-frontend-typografi';

import { omit } from '@fpsak-frontend/utils';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AlertStripe from 'nav-frontend-alertstriper';
import { stonadskontoType, uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, Fagsak, FamilieHendelseSamling, Kodeverk, KodeverkMedNavn, Personopplysninger,
  Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling, Stonadskonto,
} from '@fpsak-frontend/types';

import Uttak, { UttaksresultatActivity } from './Uttak';
import styles from './uttakPanel.less';

const formName = 'UttakForm';

const hentApTekst = (uttaksresultat: UttaksresultatPeriode, isApOpen: boolean, aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helptTextAksjonspunkter = aksjonspunkter.filter((ap) => ap.definisjon.kode !== aksjonspunktCodes.FASTSETT_UTTAKPERIODER
    && ap.definisjon.kode !== aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER);

  const uttakPanelAksjonsPunktKoder = {
    5072: 'UttakPanel.Aksjonspunkt.5072',
    5073: 'UttakPanel.Aksjonspunkt.5073',
    5074: 'UttakPanel.Aksjonspunkt.5074',
    5075: 'UttakPanel.Aksjonspunkt.5075',
    5076: 'UttakPanel.Aksjonspunkt.5076',
    5077: 'UttakPanel.Aksjonspunkt.5077',
    5078: 'UttakPanel.Aksjonspunkt.5078',
    5079: 'UttakPanel.Aksjonspunkt.5079',
    5098: 'UttakPanel.Aksjonspunkt.5098',
  };

  const texts = [];
  const helpText = uttaksresultat.perioderSøker.find((p) => p.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING);

  const overstyrApHelpTextOpen = aksjonspunkter.length === 1
    && aksjonspunkter[0].definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER
    && aksjonspunkter[0].status.kode !== 'UTFO';

  const overstyrApHelpTextUtfort = aksjonspunkter.length === 1
    && aksjonspunkter[0].definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER
    && aksjonspunkter[0].status.kode === 'UTFO';

  helptTextAksjonspunkter.forEach((ap) => {
    const tekstkode = uttakPanelAksjonsPunktKoder[ap.definisjon.kode];
    if (tekstkode) {
      texts.push(<FormattedMessage key="aksjonspunktTekst" id={tekstkode} />);
    }
  });

  if (helpText) {
    texts.push(<FormattedMessage key="generellTekst" id="UttakPanel.Aksjonspunkt.Generell" />);
  }

  if (overstyrApHelpTextOpen) {
    texts.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.KontrollerPaNytt" />);
  }
  if (overstyrApHelpTextUtfort) {
    texts.push(<FormattedMessage key="aksjonspunktTekst" id="UttakPanel.Overstyrt.Utfort" />);
  }

  if (!isApOpen) {
    texts.push(<FormattedMessage key="behandlet" id="UttakPanel.Aksjonspunkt.Behandlet" />);
  }
  return texts;
};

interface FormValues {
  uttaksresultatActivity?: UttaksresultatActivity[];
  stonadskonto?: UttakStonadskontoer;
  manuellOverstyring?: boolean;
}

interface PureOwnProps {
  fagsak: Fagsak;
  behandlingId: number;
  behandlingVersjon: number;
  behandlingType: Kodeverk;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  behandlingStatus: Kodeverk;
  sprakkode: Kodeverk;
  uttaksresultat: UttaksresultatPeriode;
  stonadskonto: UttakStonadskontoer;
  aksjonspunkter: Aksjonspunkt[];
  employeeHasAccess: boolean;
  soknad: Soknad;
  person: Personopplysninger;
  familiehendelse: FamilieHendelseSamling;
  uttakPeriodeGrense: UttakPeriodeGrense;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  ytelsefordeling: Ytelsefordeling;
  tempUpdateStonadskontoer: (...args: any[]) => any;
  submitCallback: (...args: any[]) => any;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  apCodes: string[];
  isApOpen: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  manuellOverstyring?: boolean;
  validate: (formValues: FormValues) => any;
  onSubmit: (formValues: FormValues) => any;
  initialValues: FormValues;
}

export const UttakPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  uttaksresultat,
  aksjonspunkter,
  soknad,
  person,
  familiehendelse,
  uttakPeriodeGrense,
  ytelsefordeling,
  behandlingId,
  behandlingType,
  behandlingStatus,
  alleKodeverk,
  behandlingVersjon,
  employeeHasAccess,
  behandlingsresultat,
  tempUpdateStonadskontoer,
  readOnly,
  manuellOverstyring,
  fagsak,
  isApOpen,
  intl,
  arbeidsgiverOpplysningerPerId,
  ...formProps
}) => (
  <>
    <Undertittel>
      <FormattedMessage id="UttakPanel.Title" />
    </Undertittel>
    <VerticalSpacer twentyPx />
    {aksjonspunkter.length > 0 && (
      <>
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
          {hentApTekst(uttaksresultat, isApOpen, aksjonspunkter)}
        </AksjonspunktHelpTextTemp>
        <VerticalSpacer twentyPx />
      </>
    )}
    {uttaksresultat && (
      <form onSubmit={formProps.handleSubmit}>
        <Uttak
          intl={intl}
          submitting={formProps.submitting}
          isDirty={formProps.dirty}
          formName={formName}
          manuellOverstyring={manuellOverstyring}
          person={person}
          familiehendelse={familiehendelse}
          uttakPeriodeGrense={uttakPeriodeGrense}
          ytelsefordeling={ytelsefordeling}
          behandlingId={behandlingId}
          behandlingType={behandlingType}
          behandlingVersjon={behandlingVersjon}
          behandlingStatus={behandlingStatus}
          fagsak={fagsak}
          alleKodeverk={alleKodeverk}
          readOnly={readOnly}
          isApOpen={isApOpen}
          aksjonspunkter={aksjonspunkter}
          employeeHasAccess={employeeHasAccess}
          uttaksresultat={uttaksresultat}
          behandlingsresultat={behandlingsresultat}
          mottattDato={soknad.mottattDato}
          fodselsdatoer={soknad.fodselsdatoer}
          termindato={soknad.termindato}
          adopsjonFodelsedatoer={soknad.adopsjonFodelsedatoer}
          soknadsType={soknad.soknadType.kode}
          omsorgsovertakelseDato={soknad.omsorgsovertakelseDato}
          tempUpdateStonadskontoer={tempUpdateStonadskontoer}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      </form>
    )}
    {formProps.error && formProps.submitFailed
        && formProps.error}
  </>
);

type UttakResultat = { [key: string]: {
    trekkdagerDesimaler: number;
    konto: string;
  }
}

const getResult = (uttaksresultatActivity: UttaksresultatActivity[]): UttakResultat => {
  const uttakResult = {};
  uttaksresultatActivity.forEach((uttak) => {
    uttak.aktiviteter.forEach((a, index: number) => {
      const aktivitetDays = (typeof a.days !== 'undefined' && typeof a.weeks !== 'undefined')
        ? ((a.weeks * 5) + a.days)
        : a.trekkdagerDesimaler;

      if ((`${a.stønadskontoType.kode}_${index}`) in uttakResult) {
        const trekkdagerDesimaler = uttakResult[`${a.stønadskontoType.kode}_${index}`].trekkdagerDesimaler + aktivitetDays;
        uttakResult[`${a.stønadskontoType.kode}_${index}`] = {
          trekkdagerDesimaler,
          konto: a.stønadskontoType.kode,
        };
      } else {
        uttakResult[`${a.stønadskontoType.kode}_${index}`] = {
          trekkdagerDesimaler: aktivitetDays,
          konto: a.stønadskontoType.kode,
        };
      }
    });
  });
  return uttakResult;
};

const getGjeldendeStønadskonto = (stonadskontoTypeKode: string, stonadskontoer: UttakStonadskontoer['stonadskontoer']): Stonadskonto | undefined => {
  switch (stonadskontoTypeKode) {
    case stonadskontoType.FORELDREPENGER_FØR_FØDSEL:
      return stonadskontoer.FORELDREPENGER_FØR_FØDSEL;
    case stonadskontoType.FORELDREPENGER:
      return stonadskontoer.FORELDREPENGER;
    case stonadskontoType.FELLESPERIODE:
      return stonadskontoer.FELLESPERIODE;
    case stonadskontoType.MØDREKVOTE:
      return stonadskontoer.MØDREKVOTE;
    case stonadskontoType.FEDREKVOTE:
      return stonadskontoer.FEDREKVOTE;
    default:
      return undefined;
  }
};

type FormError = {
  _error?: ReactElement;
}

const checkMaxDager = (uttaksresultatActivity: UttaksresultatActivity[], stonadskonto: UttakStonadskontoer): FormError => {
  let errors = null;
  const uttakResult = getResult(uttaksresultatActivity);
  const uttakResultArray = Object.values(uttakResult).map((value) => ({ ...value }));

  uttakResultArray
    .filter((res) => !(res.konto === stonadskontoType.UDEFINERT && res.trekkdagerDesimaler === 0))
    .forEach((value) => {
      const gjeldendeStønadskonto = getGjeldendeStønadskonto(value.konto, stonadskonto.stonadskontoer);
      if (gjeldendeStønadskonto && !gjeldendeStønadskonto.gyldigForbruk) {
        const minsteSaldo = gjeldendeStønadskonto.aktivitetSaldoDtoList.reduce((min: number, akt) => {
          if (akt.saldo < min) {
            return akt.saldo;
          }

          return min;
        }, 0);

        errors = {
          _error: (
            <AlertStripe type="advarsel" className={styles.marginTop}>
              <FormattedMessage
                id="UttakPanel.NegativeSaldo"
                values={{
                  periode: uttakPeriodeNavn[value.konto],
                  days: minsteSaldo * -1,
                }}
              />
            </AlertStripe>
          ),
        };
      }
    });
  return errors;
};

const checkFlerbarnsMaksDager = (stonadskonto: UttakStonadskontoer['stonadskontoer'] = {}): FormError => {
  let errors = null;
  if (stonadskonto.FLERBARNSDAGER && !stonadskonto.FLERBARNSDAGER.gyldigForbruk) {
    errors = {
      _error:
  <AlertStripe type="advarsel" className={styles.marginTop}>
    <FormattedMessage
      id="UttakPanel.InvalidTrekkDagerFlerbarnsdager"
      values={{
        maxDays: stonadskonto.FLERBARNSDAGER.maxDager,
      }}
    />
  </AlertStripe>,
    };
  }
  return errors;
};

const checkValidStonadKonto = (uttakPerioder: UttaksresultatActivity[], stonadskontoer?: UttakStonadskontoer['stonadskontoer']): FormError => {
  let errors = null;
  uttakPerioder.forEach((periode) => {
    const ikkeGyldigKonto = periode.aktiviteter.filter((a) => !(Object.prototype.hasOwnProperty.call(stonadskontoer, a.stønadskontoType.kode))
      && (a.days >= 0 || a.weeks >= 0));
    if (ikkeGyldigKonto && ikkeGyldigKonto.length > 0) {
      errors = {
        _error:
  <AlertStripe type="advarsel" className={styles.marginTop}>
    <FormattedMessage
      id="UttakPanel.InvalidStonadskonto"
      values={{
        konto: uttakPeriodeNavn[ikkeGyldigKonto[0].stønadskontoType.kode],
      }}
    />
  </AlertStripe>,
      };
    }
  });
  return errors;
};

const validateUttakPanelForm = (values: FormValues) => {
  const { uttaksresultatActivity, stonadskonto } = values;
  if (uttaksresultatActivity) {
    const stonadkontoError = checkValidStonadKonto(uttaksresultatActivity, stonadskonto?.stonadskontoer);
    if (stonadkontoError) {
      return stonadkontoError;
    }
    const maxDagerError = checkMaxDager(uttaksresultatActivity, stonadskonto);
    if (maxDagerError) {
      return maxDagerError;
    }
    const flerbarnsMaksDager = checkFlerbarnsMaksDager(stonadskonto?.stonadskontoer);
    if (flerbarnsMaksDager) {
      return flerbarnsMaksDager;
    }
  }
  return null;
};

export const buildInitialValues = createSelector(
  [(props: PureOwnProps) => props.uttaksresultat, (props: PureOwnProps) => props.stonadskonto],
  (uttaksresultat, stonadskonto): FormValues => ({
    uttaksresultatActivity: uttaksresultat.perioderSøker.map((ua, index: number) => ({
      ...ua,
      id: index + 1,
    })),
    stonadskonto,
  }),
);

export const transformValues = (values: FormValues, apCodes: string[], aksjonspunkter: Aksjonspunkt[]): any => {
  const overstyrErOpprettet = aksjonspunkter.filter((ap) => ap.status.kode === 'OPPR' && ap.definisjon.kode === '6008');
  const removeOverstyrApCode = apCodes.filter((a) => a !== '6008');
  let aksjonspunkt = removeOverstyrApCode;

  const transformedResultat = values.uttaksresultatActivity.map((aktivitet: UttaksresultatActivity) => {
    const uta = omit(aktivitet, 'tilknyttetStortinget') as UttaksresultatActivity;
    if (uta.oppholdÅrsak.kode !== '-') {
      return {
        ...uta,
        aktiviteter: [],
      };
    }

    const transformAktiviteter = uta.aktiviteter.map((a) => {
      const { days, weeks, ...transformAktivitet } = a;
      if (typeof days !== 'undefined' && typeof weeks !== 'undefined') {
        // @ts-ignore Fiks dette
        const trekkdager = ((weeks * 5) + parseFloat(days)).toFixed(1);
        return {
          ...transformAktivitet,
          trekkdagerDesimaler: parseFloat(trekkdager), // regner om uker og dager til trekkdager
        };
      }
      return transformAktivitet;
    });

    return {
      ...uta,
      aktiviteter: transformAktiviteter,
    };
  });

  if (values.manuellOverstyring || (aksjonspunkter.length === 1 && overstyrErOpprettet.length > 0)) {
    aksjonspunkt = [aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER];
  }

  return aksjonspunkt.map((ap) => ({
    kode: ap,
    perioder: transformedResultat,
  }));
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback,
  (ownProps: PureOwnProps) => ownProps.apCodes,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, apCodes, aksjonspunkter) => (values: FormValues) => submitCallback(transformValues(values, apCodes, aksjonspunkter)));

const mapStateToPropsFactory = (_initialState, initOwnProps: PureOwnProps) => {
  const { behandlingId, behandlingVersjon } = initOwnProps;
  const validate = (values: FormValues) => validateUttakPanelForm(values);

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const initialValues = buildInitialValues(ownProps);

    return {
      validate,
      initialValues,
      onSubmit: lagSubmitFn(ownProps),
      manuellOverstyring: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'manuellOverstyring'),
    };
  };
};

const UttakPanel = connect(mapStateToPropsFactory)(injectIntl(behandlingForm({
  form: formName,
  enableReinitialize: false,
})(UttakPanelImpl)));

export default UttakPanel;
