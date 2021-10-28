import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { createSelector } from 'reselect';
import {
  change as reduxFormChange, formValueSelector, getFormValues, initialize as reduxFormInitialize, InjectedFormProps, reduxForm,
} from 'redux-form';
import { bindActionCreators, Dispatch } from 'redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertittel } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';

import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import { FaktaGruppe, AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { omit } from '@fpsak-frontend/utils';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import tilbakekrevingKodeverkTyper from '@fpsak-frontend/kodeverk/src/tilbakekrevingKodeverkTyper';
import {
  FeilutbetalingPerioderWrapper, KodeverkMedNavn, VilkarsVurdertePerioderWrapper, VilkarsVurdertPeriode,
  DetaljerteFeilutbetalingsperioder, DetaljertFeilutbetalingPeriode, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';
import { VilkarsVurderingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import TilbakekrevingTimelinePanel from './timeline/TilbakekrevingTimelinePanel';
import TilbakekrevingPeriodeForm, {
  CustomPeriode, CustomPerioder, TILBAKEKREVING_PERIODE_FORM_NAME,
  periodeFormTransformValues, periodeFormBuildInitialValues, CustomVilkarsVurdertePeriode,
} from './TilbakekrevingPeriodeForm';
import TilbakekrevingTidslinjeHjelpetekster from './TilbakekrevingTidslinjeHjelpetekster';
import TidslinjePeriode from '../types/tidslinjePeriodeTsType';
import DataForPeriode from '../types/dataForPeriodeTsType';

const TILBAKEKREVING_FORM_NAME = 'TilbakekrevingForm';

const sortPeriods = (periode1: CustomVilkarsVurdertePeriode, periode2: CustomVilkarsVurdertePeriode) => moment(periode1.fom).diff(moment(periode2.fom));

const harApentAksjonspunkt = (periode: CustomVilkarsVurdertePeriode) => !periode.erForeldet && (periode.begrunnelse === undefined || periode.erSplittet);

const emptyFeltverdiOmFinnes = (periode: CustomVilkarsVurdertePeriode) => {
  const valgtVilkarResultatType = periode[periode.valgtVilkarResultatType];
  const handletUaktsomhetGrad = valgtVilkarResultatType[valgtVilkarResultatType.handletUaktsomhetGrad];

  if (valgtVilkarResultatType.tilbakekrevdBelop) {
    return {
      ...periode,
      [periode.valgtVilkarResultatType]: {
        ...omit(valgtVilkarResultatType, 'tilbakekrevdBelop'),
      },
    };
  }
  if (handletUaktsomhetGrad && handletUaktsomhetGrad.belopSomSkalTilbakekreves) {
    return {
      ...periode,
      [periode.valgtVilkarResultatType]: {
        ...valgtVilkarResultatType,
        [valgtVilkarResultatType.handletUaktsomhetGrad]: {
          ...omit(handletUaktsomhetGrad, 'belopSomSkalTilbakekreves'),
        },
      },
    };
  }
  return periode;
};

const formaterPerioderForTidslinje = (vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[], perioder: DataForPeriode[] = []) => perioder
  .map((periode: DataForPeriode, index: number): TidslinjePeriode => {
    const per = vilkarsVurdertePerioder.find((p: CustomVilkarsVurdertePeriode) => p.fom === periode.fom && p.tom === periode.tom);
    const erBelopetIBehold = per && per[per.valgtVilkarResultatType] ? per[per.valgtVilkarResultatType].erBelopetIBehold : undefined;
    const erSplittet = per ? !!per.erSplittet : false;
    return {
      fom: periode.fom,
      tom: periode.tom,
      isAksjonspunktOpen: !periode.erForeldet && (per.begrunnelse === undefined || erSplittet),
      isGodkjent: !(periode.erForeldet || erBelopetIBehold === false),
      id: index,
    };
  });

interface PureOwnProps {
  behandlingVersjon: number;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  alleKodeverk: AlleKodeverkTilbakekreving;
  submitCallback: (aksjonspunktData: VilkarsVurderingAp) => Promise<void>;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  perioder: DetaljertFeilutbetalingPeriode[];
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
  rettsgebyr: DetaljerteFeilutbetalingsperioder['rettsgebyr'];
  readOnlySubmitButton: boolean;
  navBrukerKjonn: string;
  beregnBelop: (data: any) => Promise<any>;
  behandlingUuid: string;
}

interface MappedOwnProps {
  dataForDetailForm?: DataForPeriode[];
  vilkarsVurdertePerioder?: CustomVilkarsVurdertePeriode[];
  readOnly: boolean;
  antallPerioderMedAksjonspunkt: number;
  merknaderFraBeslutter: {
    notAccepted?: boolean;
  };
  initialValues: { vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[] };
  onSubmit: any;
}

interface DispatchProps {
  reduxFormChange: (...args: any[]) => any;
  reduxFormInitialize: (...args: any[]) => any;
}

interface StateProps {
  valgtPeriode?: CustomVilkarsVurdertePeriode;
}

type Props = PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps & WrappedComponentProps;

/**
 * TilbakekrevingForm
 *
 * Behandlingspunkt Tilbakekreving. Setter opp en tidslinje som lar en velge periode. Ved valg blir et detaljevindu vist.
 */
export class TilbakekrevingFormImpl extends Component<Props, StateProps> {
  constructor(props: Props) {
    super(props);
    this.state = {
      valgtPeriode: null,
    };
  }

  componentDidMount() {
    const { vilkarsVurdertePerioder } = this.props;
    if (vilkarsVurdertePerioder) {
      this.setPeriode(vilkarsVurdertePerioder.find(harApentAksjonspunkt));
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { vilkarsVurdertePerioder } = this.props;
    if (!prevProps.vilkarsVurdertePerioder && vilkarsVurdertePerioder) {
      this.setPeriode(vilkarsVurdertePerioder.find(harApentAksjonspunkt));
    }
  }

  setPeriode = (periode: CustomVilkarsVurdertePeriode | TidslinjePeriode) => {
    const { vilkarsVurdertePerioder } = this.props;
    const valgt = periode ? vilkarsVurdertePerioder.find((p) => p.fom === periode.fom && p.tom === periode.tom) : undefined;
    this.setState((state: any) => ({
      ...state,
      valgtPeriode: valgt,
    }));
    this.initializeValgtPeriodeForm(valgt);
  };

  setNestePeriode = () => {
    const { vilkarsVurdertePerioder } = this.props;
    const { valgtPeriode } = this.state;
    const index = vilkarsVurdertePerioder.findIndex((p) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    this.setPeriode(vilkarsVurdertePerioder[index + 1]);
  };

  setForrigePeriode = () => {
    const { vilkarsVurdertePerioder } = this.props;
    const { valgtPeriode } = this.state;
    const index = vilkarsVurdertePerioder.findIndex((p) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    this.setPeriode(vilkarsVurdertePerioder[index - 1]);
  };

  togglePeriode = () => {
    const { vilkarsVurdertePerioder } = this.props;
    const { valgtPeriode } = this.state;
    const periode = valgtPeriode ? undefined : vilkarsVurdertePerioder[0];
    this.setPeriode(periode);
  };

  oppdaterPeriode = (values: any) => {
    const {
      vilkarsVurdertePerioder, reduxFormChange: formChange,
    } = this.props;
    const { ...verdier } = omit(values, 'erSplittet') as CustomVilkarsVurdertePeriode;

    const otherThanUpdated = vilkarsVurdertePerioder.filter((o) => o.fom !== verdier.fom && o.tom !== verdier.tom);
    const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
    formChange(TILBAKEKREVING_FORM_NAME, 'vilkarsVurdertePerioder', sortedActivities);
    this.togglePeriode();

    const periodeMedApenAksjonspunkt = sortedActivities.find(harApentAksjonspunkt);
    if (periodeMedApenAksjonspunkt) {
      this.setPeriode(periodeMedApenAksjonspunkt);
    }
  };

  initializeValgtPeriodeForm = (valgtPeriode: CustomVilkarsVurdertePeriode) => {
    const { reduxFormInitialize: formInitialize } = this.props;
    formInitialize(TILBAKEKREVING_PERIODE_FORM_NAME, valgtPeriode);
  };

  oppdaterSplittedePerioder = (perioder: any) => {
    const {
      vilkarsVurdertePerioder, reduxFormChange: formChange,
    } = this.props;
    const { valgtPeriode } = this.state;

    const periode = vilkarsVurdertePerioder.find((p) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    const nyePerioder = perioder.map((p: CustomVilkarsVurdertePeriode) => ({
      ...emptyFeltverdiOmFinnes(periode),
      ...p,
      erSplittet: true,
    }));

    const otherThanUpdated = vilkarsVurdertePerioder.filter((o) => o.fom !== valgtPeriode.fom && o.tom !== valgtPeriode.tom);
    const sortedActivities = otherThanUpdated.concat(nyePerioder).sort(sortPeriods);

    this.togglePeriode();
    formChange(TILBAKEKREVING_FORM_NAME, 'vilkarsVurdertePerioder', sortedActivities);
    this.setPeriode(nyePerioder[0]);
  };

  render() {
    const {
      readOnly,
      readOnlySubmitButton,
      antallPerioderMedAksjonspunkt,
      merknaderFraBeslutter,
      vilkarsVurdertePerioder,
      dataForDetailForm,
      navBrukerKjonn,
      behandlingVersjon,
      alleKodeverk,
      beregnBelop,
      intl,
      behandlingUuid,
      ...formProps
    } = this.props;
    const {
      valgtPeriode,
    } = this.state;

    const perioderFormatertForTidslinje = formaterPerioderForTidslinje(vilkarsVurdertePerioder, dataForDetailForm);
    const isApOpen = perioderFormatertForTidslinje.some((p) => p.isAksjonspunktOpen);
    const valgtPeriodeFormatertForTidslinje = valgtPeriode
      ? perioderFormatertForTidslinje.find((p: TidslinjePeriode) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom)
      : undefined;

    return (
      <form onSubmit={formProps.handleSubmit}>
        <FaktaGruppe
          merknaderFraBeslutter={merknaderFraBeslutter}
          withoutBorder
        >
          <Undertittel>
            <FormattedMessage id="Behandlingspunkt.Tilbakekreving" />
          </Undertittel>
          <VerticalSpacer twentyPx />
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
            {[<FormattedMessage key="AksjonspunktHjelpetekst" id="TilbakekrevingForm.AksjonspunktHjelpetekst" />] }
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
          {vilkarsVurdertePerioder && (
            <>
              <TilbakekrevingTimelinePanel
                perioder={perioderFormatertForTidslinje}
                valgtPeriode={valgtPeriodeFormatertForTidslinje}
                setPeriode={this.setPeriode}
                toggleDetaljevindu={this.togglePeriode}
                hjelpetekstKomponent={<TilbakekrevingTidslinjeHjelpetekster />}
                kjonn={navBrukerKjonn}
              />
                {valgtPeriode && (
                  <TilbakekrevingPeriodeForm
                    key={valgtPeriodeFormatertForTidslinje.id}
                    periode={valgtPeriode}
                    data={dataForDetailForm.find((p) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom)}
                    // @ts-ignore Fiks
                    antallPerioderMedAksjonspunkt={antallPerioderMedAksjonspunkt}
                    readOnly={readOnly}
                    setNestePeriode={this.setNestePeriode}
                    setForrigePeriode={this.setForrigePeriode}
                    skjulPeriode={this.togglePeriode}
                    oppdaterPeriode={this.oppdaterPeriode}
                    oppdaterSplittedePerioder={this.oppdaterSplittedePerioder}
                    behandlingVersjon={behandlingVersjon}
                    behandlingUuid={behandlingUuid}
                    alleKodeverk={alleKodeverk}
                    beregnBelop={beregnBelop}
                    vilkarsVurdertePerioder={vilkarsVurdertePerioder}
                    intl={intl}
                  />
                )}
            </>
          )}
          <VerticalSpacer twentyPx />
          {formProps.error && (
            <>
              <AlertStripe type="feil">
                <FormattedMessage id={formProps.error} />
              </AlertStripe>
              <VerticalSpacer twentyPx />
            </>
          )}
          <ProsessStegSubmitButton
            formName={TILBAKEKREVING_FORM_NAME}
            isReadOnly={readOnly}
            isDirty={(isApOpen && valgtPeriode) || formProps.error ? false : undefined}
            isSubmittable={!isApOpen && !valgtPeriode && !readOnlySubmitButton && !formProps.error}
          />
        </FaktaGruppe>
      </form>
    );
  }
}

export const transformValues = (
  values: { vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[] },
  sarligGrunnTyper: KodeverkMedNavn[],
): VilkarsVurderingAp => ({
  kode: aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING,
  vilkarsVurdertePerioder: values.vilkarsVurdertePerioder
    .filter((p: CustomVilkarsVurdertePeriode) => !p.erForeldet)
    .map((p: CustomVilkarsVurdertePeriode) => periodeFormTransformValues(p, sarligGrunnTyper)),
});

const finnOriginalPeriode = (lagretPeriode: CustomVilkarsVurdertePeriode | VilkarsVurdertPeriode,
  perioder: DetaljertFeilutbetalingPeriode[] | CustomPeriode[]) => perioder
  .find((periode: CustomPeriode) => !moment(lagretPeriode.fom).isBefore(moment(periode.fom))
  && !moment(lagretPeriode.tom).isAfter(moment(periode.tom)));

const erIkkeLagret = (periode: DetaljertFeilutbetalingPeriode, lagredePerioder: { tom: string; fom: string }[]) => lagredePerioder
  .every((lagretPeriode) => {
    const isOverlapping = moment(periode.fom).isSameOrBefore(moment(lagretPeriode.tom)) && moment(lagretPeriode.fom).isSameOrBefore(moment(periode.tom));
    return !isOverlapping;
  });

export const slaSammenOriginaleOgLagredePeriode = createSelector([
  (_state, ownProps: PureOwnProps) => ownProps.perioder,
  (_state, ownProps: PureOwnProps) => ownProps.vilkarvurdering,
  (_state, ownProps: PureOwnProps) => ownProps.rettsgebyr,
], (perioder, vilkarsvurdering, rettsgebyr): CustomPerioder => {
  const totalbelop = perioder.reduce((acc: number, periode: DetaljertFeilutbetalingPeriode) => acc + periode.feilutbetaling, 0);
  const erTotalBelopUnder4Rettsgebyr = totalbelop < (rettsgebyr * 4);
  const lagredeVilkarsvurdertePerioder = vilkarsvurdering.vilkarsVurdertePerioder;

  const lagredePerioder = lagredeVilkarsvurdertePerioder
    .map((lagretPeriode: VilkarsVurdertPeriode) => {
      const originalPeriode = finnOriginalPeriode(lagretPeriode, perioder);
      return ({
        ...originalPeriode,
        harMerEnnEnYtelse: originalPeriode.ytelser.length > 1,
        ...omit(lagretPeriode, 'feilutbetalingBelop'),
        feilutbetaling: lagretPeriode.feilutbetalingBelop,
        erTotalBelopUnder4Rettsgebyr,
      });
    });

  const originaleUrortePerioder = perioder
    .filter((periode: DetaljertFeilutbetalingPeriode) => erIkkeLagret(periode, lagredePerioder))
    .map((periode: DetaljertFeilutbetalingPeriode): CustomPeriode => ({
      ...periode,
      harMerEnnEnYtelse: periode.ytelser.length > 1,
      erTotalBelopUnder4Rettsgebyr,
    }));

  return {
    perioder: originaleUrortePerioder.concat(lagredePerioder),
  };
});

export const buildInitialValues = createSelector([
  slaSammenOriginaleOgLagredePeriode,
  (_state, ownProps: PureOwnProps) => ownProps.perioderForeldelse],
(perioder, foreldelsePerioder): { vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[] } => ({
  vilkarsVurdertePerioder: perioder.perioder.map((p: CustomPeriode) => ({
    ...periodeFormBuildInitialValues(p, foreldelsePerioder),
    fom: p.fom,
    tom: p.tom,
  })).sort(sortPeriods),
}));

const settOppPeriodeDataForDetailForm = createSelector<any, any>([
  slaSammenOriginaleOgLagredePeriode,
  (state) => formValueSelector(TILBAKEKREVING_FORM_NAME)(state,
    'vilkarsVurdertePerioder')], (perioder: CustomPerioder, perioderFormState: CustomVilkarsVurdertePeriode[]): DataForPeriode[] => {
  if (!perioder || !perioderFormState) {
    return undefined;
  }

  return perioderFormState.map((periodeFormState: CustomVilkarsVurdertePeriode) => {
    const periode = finnOriginalPeriode(periodeFormState, perioder.perioder) as CustomPeriode; // NOSONAR
    const erForeldet = periode.foreldelseVurderingType
      ? periode.foreldelseVurderingType.kode === foreldelseVurderingType.FORELDET : periode.foreldet;
    return {
      redusertBeloper: periode.redusertBeloper,
      ytelser: periode.ytelser,
      feilutbetaling: periodeFormState.feilutbetaling ? periodeFormState.feilutbetaling : periode.feilutbetaling,
      erTotalBelopUnder4Rettsgebyr: periode.erTotalBelopUnder4Rettsgebyr,
      fom: periodeFormState.fom,
      tom: periodeFormState.tom,
      årsak: periode.årsak,
      begrunnelse: periode.begrunnelse,
      erForeldet,
    };
  });
});

const getAntallPerioderMedAksjonspunkt = createSelector([(state: any) => formValueSelector(
  TILBAKEKREVING_FORM_NAME,
)(state, 'vilkarsVurdertePerioder')],
(perioder: CustomVilkarsVurdertePeriode[] = []) => perioder.reduce((sum: number, periode) => (!periode.erForeldet ? sum + 1 : sum), 0));

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.alleKodeverk],
(submitCallback, alleKodeverk) => (values: any) => submitCallback(transformValues(values, alleKodeverk[tilbakekrevingKodeverkTyper.SARLIG_GRUNN])));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const periodFormValues = getFormValues(TILBAKEKREVING_PERIODE_FORM_NAME)(state) as { erForeldet: boolean }
    || { erForeldet: false };
  return {
    initialValues: buildInitialValues(state, ownProps),
    // @ts-ignore FIX reselect
    dataForDetailForm: settOppPeriodeDataForDetailForm(state, ownProps),
    vilkarsVurdertePerioder: formValueSelector(TILBAKEKREVING_FORM_NAME)(state, 'vilkarsVurdertePerioder'),
    readOnly: ownProps.readOnly || periodFormValues.erForeldet === true,
    antallPerioderMedAksjonspunkt: getAntallPerioderMedAksjonspunkt(state),
    merknaderFraBeslutter: ownProps.alleMerknaderFraBeslutter[aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING],
    onSubmit: lagSubmitFn(ownProps),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormInitialize,
  }, dispatch),
});

const validateForm = (values: { vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[] }) => {
  const errors = {};
  if (!values.vilkarsVurdertePerioder) {
    return errors;
  }
  const perioder = values.vilkarsVurdertePerioder;
  const antallPerioderMedAksjonspunkt = perioder.reduce((sum: number, periode) => (!periode.erForeldet ? sum + 1 : sum), 0);
  if (antallPerioderMedAksjonspunkt < 2) {
    return errors;
  }

  const antallValgt = perioder.reduce((sum: number, periode: CustomVilkarsVurdertePeriode) => {
    const { valgtVilkarResultatType } = periode;
    const vilkarResultatInfo = periode[valgtVilkarResultatType];
    const { handletUaktsomhetGrad } = vilkarResultatInfo;
    const info = vilkarResultatInfo[handletUaktsomhetGrad];
    if (info) {
      return info.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr === false ? sum + 1 : sum;
    }
    return sum;
  }, 0);
  if (antallValgt > 0 && antallValgt !== perioder.length) {
    // eslint-disable-next-line no-underscore-dangle
    return {
      _error: 'TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr',
    };
  }
  return errors;
};

const TilbakekrevingForm = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: TILBAKEKREVING_FORM_NAME,
  validate: validateForm,
  destroyOnUnmount: false,
  // @ts-ignore FIks
})(injectIntl(TilbakekrevingFormImpl)));

export default TilbakekrevingForm;
