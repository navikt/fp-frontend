import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  change as reduxFormChange, FormAction, formValueSelector, initialize as reduxFormInitialize, InitializeOptions, InjectedFormProps, reduxForm,
} from 'redux-form';
import { bindActionCreators, Dispatch } from 'redux';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { Undertittel } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity, omit } from '@fpsak-frontend/utils';
import {
  AksjonspunktHelpTextTemp, FlexColumn, FlexRow, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import { FeilutbetalingPeriode, FeilutbetalingPerioderWrapper, AlleKodeverkTilbakekreving } from '@fpsak-frontend/types';
import { VurderForeldelseAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import ForeldelsePeriodeForm, { FORELDELSE_PERIODE_FORM_NAME, FormValues as PeriodeFormValues } from './ForeldelsePeriodeForm';
import TilbakekrevingTimelinePanel from './timeline/TilbakekrevingTimelinePanel';
import ForeldelseTidslinjeHjelpetekster from './ForeldelseTidslinjeHjelpetekster';
import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';
import TidslinjePeriode from '../types/tidslinjePeriodeTsType';

import styles from './foreldelseForm.less';
import { PeriodeMedBelop } from './splittePerioder/PeriodeController';

const FORELDELSE_FORM_NAME = 'ForeldelseForm';

const sortPeriods = (periode1: ForeldelsesresultatActivity, periode2: ForeldelsesresultatActivity): number => moment(periode1.fom).diff(moment(periode2.fom));

const getDate = (): string => moment().subtract(30, 'months').format(DDMMYYYY_DATE_FORMAT);
const getApTekst = (apCode: string): ReactElement[] => (apCode
  ? [<FormattedMessage id={`ForeldelseForm.AksjonspunktHelpText.${apCode}`} key="vurderForeldelse" values={{ dato: getDate() }} />]
  : []);

const harApentAksjonspunkt = (periode: ForeldelsesresultatActivity): boolean => ((!periode.foreldelseVurderingType
  || periode.foreldelseVurderingType.kode === foreldelseVurderingType.UDEFINERT)
  && (!periode.begrunnelse || !!periode.erSplittet));

const formaterPerioderForTidslinje = (perioder: ForeldelsesresultatActivity[] = []): TidslinjePeriode[] => perioder
  .map((periode: ForeldelsesresultatActivity, index: number) => ({
    fom: periode.fom,
    tom: periode.tom,
    isAksjonspunktOpen: harApentAksjonspunkt(periode),
    isGodkjent: foreldelseVurderingType.FORELDET !== periode.foreldet && foreldelseVurderingType.UDEFINERT !== periode.foreldet,
    id: index,
  }));

interface PureOwnProps {
  behandlingUuid: string;
  apCodes: string[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: VurderForeldelseAp) => Promise<void>;
  alleKodeverk: AlleKodeverkTilbakekreving;
  navBrukerKjonn: string;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  beregnBelop: (data: { behandlingUuid: string; perioder: PeriodeMedBelop[]}) => Promise<any>;
}

type FormValues = {
  foreldelsesresultatActivity: ForeldelsesresultatActivity[]
};
interface MappedOwnProps {
  foreldelsesresultatActivity?: ForeldelsesresultatActivity[];
  merknaderFraBeslutter?: { notAccepted?: boolean };
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => void;
}

interface DispatchProps {
  reduxFormChange: (form: string, field: string, value: any, touch?: boolean, persistentSubmitErrors?: boolean) => FormAction;
  reduxFormInitialize: (form: string, data: any, keepDirty?: boolean, options?: Partial<InitializeOptions>) => FormAction;
}

interface OwnState {
  valgtPeriode?: ForeldelsesresultatActivity;
}

export class ForeldelseForm extends Component<PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps, OwnState> {
  constructor(props: PureOwnProps & MappedOwnProps & DispatchProps & InjectedFormProps) {
    super(props);
    this.state = {
      valgtPeriode: null,
    };
  }

  componentDidMount(): void {
    const { foreldelsesresultatActivity } = this.props;
    if (foreldelsesresultatActivity) {
      this.setPeriode(foreldelsesresultatActivity.find(harApentAksjonspunkt));
    }
  }

  componentDidUpdate(prevProps: PureOwnProps & MappedOwnProps & InjectedFormProps): void {
    const { foreldelsesresultatActivity } = this.props;
    if (!prevProps.foreldelsesresultatActivity && foreldelsesresultatActivity) {
      this.setPeriode(foreldelsesresultatActivity.find(harApentAksjonspunkt));
    }
  }

  setPeriode = (periode: TidslinjePeriode | ForeldelsesresultatActivity): void => {
    const { foreldelsesresultatActivity } = this.props;
    const valgt = periode ? foreldelsesresultatActivity
      .find((p: ForeldelsesresultatActivity) => p.fom === periode.fom && p.tom === periode.tom) : undefined;
    this.setState((state: OwnState) => ({
      ...state,
      valgtPeriode: valgt,
    }));
    this.initializeValgtPeriodeForm(valgt);
  };

  setNestePeriode = (): void => {
    const { foreldelsesresultatActivity } = this.props;
    const { valgtPeriode } = this.state;
    const index = foreldelsesresultatActivity
      .findIndex((p: ForeldelsesresultatActivity) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    this.setPeriode(foreldelsesresultatActivity[index + 1]);
  };

  setForrigePeriode = (): void => {
    const { foreldelsesresultatActivity } = this.props;
    const { valgtPeriode } = this.state;
    const index = foreldelsesresultatActivity
      .findIndex((p: ForeldelsesresultatActivity) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    this.setPeriode(foreldelsesresultatActivity[index - 1]);
  };

  togglePeriode = (): void => {
    const { foreldelsesresultatActivity } = this.props;
    const { valgtPeriode } = this.state;
    const periode = valgtPeriode ? undefined : foreldelsesresultatActivity[0];
    this.setPeriode(periode);
  };

  oppdaterPeriode = (values: PeriodeFormValues): void => {
    const {
      foreldelsesresultatActivity, reduxFormChange: formChange,
    } = this.props;
    const { ...verdier } = omit(values, 'erSplittet') as ForeldelsesresultatActivity;

    const otherThanUpdated = foreldelsesresultatActivity.filter((o: ForeldelsesresultatActivity) => o.fom !== verdier.fom && o.tom !== verdier.tom);
    const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
    formChange(FORELDELSE_FORM_NAME, 'foreldelsesresultatActivity', sortedActivities);
    this.togglePeriode();

    const periodeMedApenAksjonspunkt = sortedActivities.find(harApentAksjonspunkt);
    if (periodeMedApenAksjonspunkt) {
      this.setPeriode(periodeMedApenAksjonspunkt);
    }
  };

  initializeValgtPeriodeForm = (valgtPeriode: ForeldelsesresultatActivity): void => {
    const { reduxFormInitialize: formInitialize } = this.props;
    formInitialize(FORELDELSE_PERIODE_FORM_NAME, valgtPeriode);
  };

  oppdaterSplittedePerioder = (perioder: ForeldelsesresultatActivity[]): void => {
    const {
      foreldelsesresultatActivity, reduxFormChange: formChange,
    } = this.props;
    const { valgtPeriode } = this.state;

    const periode = foreldelsesresultatActivity.find((p: ForeldelsesresultatActivity) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    const nyePerioder = perioder.map((p: ForeldelsesresultatActivity) => ({
      ...periode,
      ...p,
      erSplittet: true,
    }));

    const otherThanUpdated = foreldelsesresultatActivity.filter((o: ForeldelsesresultatActivity) => o.fom !== valgtPeriode.fom && o.tom !== valgtPeriode.tom);
    const sortedActivities = otherThanUpdated.concat(nyePerioder).sort(sortPeriods);

    this.togglePeriode();
    formChange(FORELDELSE_FORM_NAME, 'foreldelsesresultatActivity', sortedActivities);
    this.setPeriode(nyePerioder[0]);
  };

  render() {
    const {
      foreldelsesresultatActivity,
      navBrukerKjonn,
      apCodes = [],
      readOnlySubmitButton,
      readOnly,
      merknaderFraBeslutter,
      alleKodeverk,
      beregnBelop,
      behandlingUuid,
      ...formProps
    } = this.props;
    const {
      valgtPeriode,
    } = this.state;

    const perioderFormatertForTidslinje = formaterPerioderForTidslinje(foreldelsesresultatActivity);
    const isApOpen = perioderFormatertForTidslinje.some((p) => p.isAksjonspunktOpen);
    const valgtPeriodeFormatertForTidslinje = valgtPeriode
      ? perioderFormatertForTidslinje.find((p) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom)
      : undefined;

    return (
      <form onSubmit={formProps.handleSubmit}>
        <FaktaGruppe
          merknaderFraBeslutter={merknaderFraBeslutter}
          withoutBorder
        >
          <Undertittel>
            <FormattedMessage id="ForeldelseForm.Foreldelse" />
          </Undertittel>
          <VerticalSpacer twentyPx />
          {!apCodes[0] && (
          <div className={styles.bold}>
            <FlexRow>
              <FlexColumn>
                <FormattedMessage id="ForeldelseForm.Foreldelsesloven" />
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer eightPx />
            <FlexRow>
              <FlexColumn>
                <FormattedMessage id="ForeldelseForm.AutomatiskVurdert" />
              </FlexColumn>
            </FlexRow>
          </div>
          )}
          {foreldelsesresultatActivity && apCodes[0] && (
            <>
              <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
                { getApTekst(apCodes[0]) }
              </AksjonspunktHelpTextTemp>
              <VerticalSpacer twentyPx />
              <TilbakekrevingTimelinePanel
                perioder={perioderFormatertForTidslinje}
                valgtPeriode={valgtPeriodeFormatertForTidslinje}
                setPeriode={this.setPeriode}
                toggleDetaljevindu={this.togglePeriode}
                hjelpetekstKomponent={<ForeldelseTidslinjeHjelpetekster />}
                kjonn={navBrukerKjonn}
              />
                {valgtPeriode && (
                  <ForeldelsePeriodeForm
                    key={valgtPeriode.fom}
                    periode={valgtPeriode}
                    setNestePeriode={this.setNestePeriode}
                    setForrigePeriode={this.setForrigePeriode}
                    oppdaterPeriode={this.oppdaterPeriode}
                    oppdaterSplittedePerioder={this.oppdaterSplittedePerioder}
                    skjulPeriode={this.togglePeriode}
                    readOnly={readOnly}
                    behandlingUuid={behandlingUuid}
                    alleKodeverk={alleKodeverk}
                    beregnBelop={beregnBelop}
                  />
                )}
              <VerticalSpacer twentyPx />
              <ProsessStegSubmitButton
                formName={FORELDELSE_FORM_NAME}
                isReadOnly={readOnly}
                isDirty={(isApOpen && valgtPeriode) || formProps.error ? false : undefined}
                isSubmittable={!isApOpen && !valgtPeriode && !readOnlySubmitButton && !formProps.error}
              />
            </>
          )}
        </FaktaGruppe>
      </form>
    );
  }
}

export const transformValues = (values: FormValues): VurderForeldelseAp => {
  const foreldelsePerioder = values.foreldelsesresultatActivity.map((period) => ({
    fraDato: period.fom,
    tilDato: period.tom,
    begrunnelse: period.begrunnelse,
    foreldelseVurderingType: period.foreldet,
    foreldelsesfrist: period.foreldelsesfrist,
    oppdagelsesDato: period.oppdagelsesDato,
  }));
  return {
    foreldelsePerioder,
    kode: aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE,
  };
};
export const buildInitialValues = (foreldelsePerioder: FeilutbetalingPeriode[]): FormValues => ({
  foreldelsesresultatActivity: foreldelsePerioder.map((p) => ({
    ...p,
    feilutbetaling: p.belop,
    foreldet: p.foreldelseVurderingType.kode === foreldelseVurderingType.UDEFINERT ? null : p.foreldelseVurderingType.kode,
    begrunnelse: decodeHtmlEntity(p.begrunnelse),
  })),
});

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps.perioderForeldelse.perioder),
  foreldelsesresultatActivity: formValueSelector(FORELDELSE_FORM_NAME)(state, 'foreldelsesresultatActivity'),
  merknaderFraBeslutter: ownProps.alleMerknaderFraBeslutter[aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE],
  onSubmit: lagSubmitFn(ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormInitialize,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: FORELDELSE_FORM_NAME,
  destroyOnUnmount: false,
})(ForeldelseForm));
