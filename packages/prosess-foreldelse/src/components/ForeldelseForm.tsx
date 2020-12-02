import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { change as reduxFormChange, initialize as reduxFormInitialize, InjectedFormProps } from 'redux-form';
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
import {
  getBehandlingFormPrefix, behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import foreldelseVurderingType from '@fpsak-frontend/kodeverk/src/foreldelseVurderingType';
import { KodeverkMedNavn, FeilutbetalingPeriode, FeilutbetalingPerioderWrapper } from '@fpsak-frontend/types';

import ForeldelsePeriodeForm, { FORELDELSE_PERIODE_FORM_NAME } from './ForeldelsePeriodeForm';
import TilbakekrevingTimelinePanel from './timeline/TilbakekrevingTimelinePanel';
import ForeldelseTidslinjeHjelpetekster from './ForeldelseTidslinjeHjelpetekster';
import ForeldelsesresultatActivity from '../types/foreldelsesresultatActivitytsType';
import TidslinjePeriode from '../types/tidslinjePeriodeTsType';

import styles from './foreldelseForm.less';

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
  behandlingId: number;
  behandlingVersjon: number;
  apCodes: string[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: { kode: string }[]) => Promise<any>;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  navBrukerKjonn: string;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  beregnBelop: (data: any) => Promise<any>;
}

type FormValues = {
  foreldelsesresultatActivity: ForeldelsesresultatActivity[]
};
interface MappedOwnProps {
  foreldelsesresultatActivity?: ForeldelsesresultatActivity[];
  behandlingFormPrefix: string;
  merknaderFraBeslutter?: { notAccepted?: boolean };
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => void;
}

interface DispatchProps {
  reduxFormChange: (...args: any[]) => any;
  reduxFormInitialize: (...args: any[]) => any;
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
  }

  togglePeriode = (): void => {
    const { foreldelsesresultatActivity } = this.props;
    const { valgtPeriode } = this.state;
    const periode = valgtPeriode ? undefined : foreldelsesresultatActivity[0];
    this.setPeriode(periode);
  }

  setNestePeriode = (): void => {
    const { foreldelsesresultatActivity } = this.props;
    const { valgtPeriode } = this.state;
    const index = foreldelsesresultatActivity
      .findIndex((p: ForeldelsesresultatActivity) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    this.setPeriode(foreldelsesresultatActivity[index + 1]);
  }

  setForrigePeriode = (): void => {
    const { foreldelsesresultatActivity } = this.props;
    const { valgtPeriode } = this.state;
    const index = foreldelsesresultatActivity
      .findIndex((p: ForeldelsesresultatActivity) => p.fom === valgtPeriode.fom && p.tom === valgtPeriode.tom);
    this.setPeriode(foreldelsesresultatActivity[index - 1]);
  }

  oppdaterPeriode = (values: any): void => {
    const {
      foreldelsesresultatActivity, reduxFormChange: formChange, behandlingFormPrefix,
    } = this.props;
    const { ...verdier } = omit(values, 'erSplittet') as ForeldelsesresultatActivity;

    const otherThanUpdated = foreldelsesresultatActivity.filter((o: ForeldelsesresultatActivity) => o.fom !== verdier.fom && o.tom !== verdier.tom);
    const sortedActivities = otherThanUpdated.concat(verdier).sort(sortPeriods);
    formChange(`${behandlingFormPrefix}.${FORELDELSE_FORM_NAME}`, 'foreldelsesresultatActivity', sortedActivities);
    this.togglePeriode();

    const periodeMedApenAksjonspunkt = sortedActivities.find(harApentAksjonspunkt);
    if (periodeMedApenAksjonspunkt) {
      this.setPeriode(periodeMedApenAksjonspunkt);
    }
  }

  initializeValgtPeriodeForm = (valgtPeriode: ForeldelsesresultatActivity): void => {
    const { reduxFormInitialize: formInitialize, behandlingFormPrefix } = this.props;
    formInitialize(`${behandlingFormPrefix}.${FORELDELSE_PERIODE_FORM_NAME}`, valgtPeriode);
  }

  oppdaterSplittedePerioder = (perioder: ForeldelsesresultatActivity[]): void => {
    const {
      foreldelsesresultatActivity, reduxFormChange: formChange, behandlingFormPrefix,
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
    formChange(`${behandlingFormPrefix}.${FORELDELSE_FORM_NAME}`, 'foreldelsesresultatActivity', sortedActivities);
    this.setPeriode(nyePerioder[0]);
  }

  render() {
    const {
      foreldelsesresultatActivity,
      behandlingFormPrefix,
      navBrukerKjonn,
      apCodes = [],
      readOnlySubmitButton,
      readOnly,
      merknaderFraBeslutter,
      alleKodeverk,
      beregnBelop,
      behandlingId,
      behandlingVersjon,
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
                    periode={valgtPeriode}
                    behandlingFormPrefix={behandlingFormPrefix}
                    setNestePeriode={this.setNestePeriode}
                    setForrigePeriode={this.setForrigePeriode}
                    oppdaterPeriode={this.oppdaterPeriode}
                    oppdaterSplittedePerioder={this.oppdaterSplittedePerioder}
                    skjulPeriode={this.togglePeriode}
                    readOnly={readOnly}
                    behandlingId={behandlingId}
                    behandlingVersjon={behandlingVersjon}
                    alleKodeverk={alleKodeverk}
                    beregnBelop={beregnBelop}
                  />
                )}
              <VerticalSpacer twentyPx />
              <ProsessStegSubmitButton
                formName={FORELDELSE_FORM_NAME}
                behandlingId={behandlingId}
                behandlingVersjon={behandlingVersjon}
                isReadOnly={readOnly}
                isDirty={(isApOpen && valgtPeriode) || formProps.error ? false : undefined}
                isSubmittable={!isApOpen && !valgtPeriode && !readOnlySubmitButton && !formProps.error}
                isBehandlingFormSubmitting={isBehandlingFormSubmitting}
                isBehandlingFormDirty={isBehandlingFormDirty}
                hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
              />
            </>
          )}
        </FaktaGruppe>
      </form>
    );
  }
}

export const transformValues = (values: FormValues, apCode: string): any => {
  const foreldelsePerioder = values.foreldelsesresultatActivity.map((period) => ({
    fraDato: period.fom,
    tilDato: period.tom,
    begrunnelse: period.begrunnelse,
    foreldelseVurderingType: period.foreldet,
    foreldelsesfrist: period.foreldelsesfrist,
    oppdagelsesDato: period.oppdagelsesDato,
  }));
  return [{
    foreldelsePerioder,
    kode: apCode,
  }];
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
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.apCodes],
(submitCallback, apCodes) => (values: FormValues) => submitCallback(transformValues(values, apCodes[0])));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps.perioderForeldelse.perioder),
  foreldelsesresultatActivity: behandlingFormValueSelector(FORELDELSE_FORM_NAME,
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'foreldelsesresultatActivity'),
  behandlingFormPrefix: getBehandlingFormPrefix(ownProps.behandlingId, ownProps.behandlingVersjon),
  merknaderFraBeslutter: ownProps.alleMerknaderFraBeslutter[aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE],
  onSubmit: lagSubmitFn(ownProps),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormInitialize,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(behandlingForm({
  form: FORELDELSE_FORM_NAME,
})(ForeldelseForm));
