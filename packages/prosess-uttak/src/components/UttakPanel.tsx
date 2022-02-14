import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, InjectedFormProps, reduxForm } from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { Undertittel } from 'nav-frontend-typografi';

import { omitOne } from '@fpsak-frontend/utils';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AlertStripe from 'nav-frontend-alertstriper';
import { stonadskontoType, uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandling, FamilieHendelseSamling, AlleKodeverk,
  Soknad, UttakPeriodeGrense, UttaksresultatPeriode, UttakStonadskontoer, Ytelsefordeling, Stonadskonto, Personoversikt,
} from '@fpsak-frontend/types';
import { UttakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import { validerApKodeOgHentApEnum } from '@fpsak-frontend/prosess-felles';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import Uttak, { UttaksresultatActivity } from './Uttak';
import styles from './uttakPanel.less';

const formName = 'UttakForm';

const hentApTekst = (uttaksresultat: UttaksresultatPeriode, isApOpen: boolean, aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helptTextAksjonspunkter = aksjonspunkter.filter((ap) => ap.definisjon !== AksjonspunktCode.FASTSETT_UTTAKPERIODER
    && ap.definisjon !== AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER);

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
  const helpText = uttaksresultat.perioderSøker.find((p) => p.periodeResultatType === periodeResultatType.MANUELL_BEHANDLING);

  const overstyrApHelpTextOpen = aksjonspunkter.length === 1
    && aksjonspunkter[0].definisjon === AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER
    && aksjonspunkter[0].status !== 'UTFO';

  const overstyrApHelpTextUtfort = aksjonspunkter.length === 1
    && aksjonspunkter[0].definisjon === AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER
    && aksjonspunkter[0].status === 'UTFO';

  helptTextAksjonspunkter.forEach((ap) => {
    const tekstkode = uttakPanelAksjonsPunktKoder[ap.definisjon];
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
  behandlingUuid: string;
  behandlingType: string;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  behandlingStatus: string;
  sprakkode: string;
  uttaksresultat: UttaksresultatPeriode;
  stonadskonto: UttakStonadskontoer;
  aksjonspunkter: Aksjonspunkt[];
  employeeHasAccess: boolean;
  soknad: Soknad;
  person: Personoversikt;
  familiehendelse: FamilieHendelseSamling;
  uttakPeriodeGrense: UttakPeriodeGrense;
  alleKodeverk: AlleKodeverk;
  ytelsefordeling: Ytelsefordeling;
  tempUpdateStonadskontoer: (params: {
    behandlingUuid: string;
    perioder: any;
  }) => Promise<any>;
  submitCallback: (data: UttakAp[]) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  apCodes: string[];
  isApOpen: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kreverSammenhengendeUttak: boolean;
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
  behandlingUuid,
  behandlingType,
  behandlingStatus,
  alleKodeverk,
  employeeHasAccess,
  behandlingsresultat,
  tempUpdateStonadskontoer,
  readOnly,
  manuellOverstyring,
  isApOpen,
  intl,
  arbeidsgiverOpplysningerPerId,
  kreverSammenhengendeUttak,
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
          behandlingUuid={behandlingUuid}
          behandlingType={behandlingType}
          behandlingStatus={behandlingStatus}
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
          soknadsType={soknad.soknadType}
          omsorgsovertakelseDato={soknad.omsorgsovertakelseDato}
          tempUpdateStonadskontoer={tempUpdateStonadskontoer}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          kreverSammenhengendeUttak={kreverSammenhengendeUttak}
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

      if ((`${a.stønadskontoType}_${index}`) in uttakResult) {
        const trekkdagerDesimaler = uttakResult[`${a.stønadskontoType}_${index}`].trekkdagerDesimaler + aktivitetDays;
        uttakResult[`${a.stønadskontoType}_${index}`] = {
          trekkdagerDesimaler,
          konto: a.stønadskontoType,
        };
      } else {
        uttakResult[`${a.stønadskontoType}_${index}`] = {
          trekkdagerDesimaler: aktivitetDays,
          konto: a.stønadskontoType,
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
    const ikkeGyldigKonto = periode.aktiviteter.filter((a) => !(Object.prototype.hasOwnProperty.call(stonadskontoer, a.stønadskontoType))
      && (a.days > 0 || a.weeks > 0));
    if (ikkeGyldigKonto && ikkeGyldigKonto.length > 0) {
      errors = {
        _error:
  <AlertStripe type="advarsel" className={styles.marginTop}>
    <FormattedMessage
      id="UttakPanel.InvalidStonadskonto"
      values={{
        konto: uttakPeriodeNavn[ikkeGyldigKonto[0].stønadskontoType],
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

export const transformValues = (values: FormValues, apCodes: string[], aksjonspunkter: Aksjonspunkt[]): UttakAp[] => {
  const overstyrErOpprettet = aksjonspunkter
    .filter((ap) => ap.status === aksjonspunktStatus.OPPRETTET && ap.definisjon === AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER);
  const removeOverstyrApCode = apCodes.filter((a) => a !== AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER);
  let aksjonspunkt = removeOverstyrApCode;

  const transformedResultat = values.uttaksresultatActivity.map((aktivitet: UttaksresultatActivity) => {
    const uta = omitOne(aktivitet, 'tilknyttetStortinget');
    if (uta.oppholdÅrsak !== '-') {
      return {
        ...uta,
        aktiviteter: [],
        periodeUtfallÅrsak: aktivitet.periodeUtfallÅrsak,
        periodeResultatÅrsak: aktivitet.periodeResultatÅrsak,
        graderingAvslagÅrsak: aktivitet.graderingAvslagÅrsak,
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
      periodeUtfallÅrsak: aktivitet.periodeUtfallÅrsak,
      periodeResultatÅrsak: aktivitet.periodeResultatÅrsak,
      graderingAvslagÅrsak: aktivitet.graderingAvslagÅrsak,
    };
  });

  if (values.manuellOverstyring || (aksjonspunkter.length === 1 && overstyrErOpprettet.length > 0)) {
    aksjonspunkt = [AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER];
  }

  return aksjonspunkt.map((ap) => ({
    kode: validerApKodeOgHentApEnum(ap, AksjonspunktCode.FASTSETT_UTTAKPERIODER,
      AksjonspunktCode.OVERSTYRING_AV_UTTAKPERIODER,
      AksjonspunktCode.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE,
      AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN,
      AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_DØD,
      AksjonspunktCode.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST,
      AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET,
      AksjonspunktCode.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT),
    perioder: transformedResultat,
  }));
};

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback,
  (ownProps: PureOwnProps) => ownProps.apCodes,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, apCodes, aksjonspunkter) => (values: FormValues) => submitCallback(transformValues(values, apCodes, aksjonspunkter)));

const mapStateToPropsFactory = () => {
  const validate = (values: FormValues) => validateUttakPanelForm(values);

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => {
    const initialValues = buildInitialValues(ownProps);

    return {
      validate,
      initialValues,
      onSubmit: lagSubmitFn(ownProps),
      manuellOverstyring: formValueSelector(formName)(state, 'manuellOverstyring'),
    };
  };
};

const UttakPanel = connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(injectIntl(UttakPanelImpl)));

export default UttakPanel;
