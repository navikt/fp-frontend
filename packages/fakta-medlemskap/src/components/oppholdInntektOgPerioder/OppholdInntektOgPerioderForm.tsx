import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  change as reduxFormChange, FormAction, formValueSelector, InjectedFormProps, reduxForm, reset as reduxFormReset,
} from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { bindActionCreators, Dispatch } from 'redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { guid, omitMany } from '@navikt/ft-utils';
import {
  Aksjonspunkt, AlleKodeverk, Medlemskap, MedlemPeriode, Soknad, MedlemskapPeriode,
} from '@fpsak-frontend/types';
import {
  AvklarFortsattMedlemskapAp,
  BekreftBosattVurderingAp, BekreftErMedlemVurderingAp, BekreftLovligOppholdVurderingAp, BekreftOppholdsrettVurderingAp,
} from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OppholdInntektOgPeriodeForm, { FormValues as OppholdFormValues } from './OppholdInntektOgPeriodeForm';
import MedlemskapEndringerTabell from './MedlemskapEndringerTabell';

const {
  AVKLAR_OM_BRUKER_ER_BOSATT,
  AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  AVKLAR_OPPHOLDSRETT,
  AVKLAR_LOVLIG_OPPHOLD,
  AVKLAR_FORTSATT_MEDLEMSKAP,
} = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]): ReactElement[] => {
  const helpTexts = [];
  if (hasAksjonspunkt(AVKLAR_FORTSATT_MEDLEMSKAP, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="HarFortsattMedlemskap" id="MedlemskapInfoPanel.HarFortsattMedlemskap" />);
  }
  if (hasAksjonspunkt(AVKLAR_OM_BRUKER_ER_BOSATT, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="ErSokerBosattINorge" id="MedlemskapInfoPanel.ErSokerBosattINorge" />);
  }
  if (hasAksjonspunkt(AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="GyldigMedlemFolketrygden" id="MedlemskapInfoPanel.GyldigMedlemFolketrygden" />);
  }
  if (hasAksjonspunkt(AVKLAR_OPPHOLDSRETT, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="EOSBorgerMedOppholdsrett1" id="MedlemskapInfoPanel.EOSBorgerMedOppholdsrett" />);
  }
  if (hasAksjonspunkt(AVKLAR_LOVLIG_OPPHOLD, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="IkkeEOSBorgerMedLovligOpphold" id="MedlemskapInfoPanel.IkkeEOSBorgerMedLovligOpphold" />);
  }
  return helpTexts;
};

type PeriodeMedId = MedlemPeriode & { id: string; }

const createNewPerioder = (perioder: PeriodeMedId[], id: string, values: OppholdFormValues) => {
  const updatedIndex = perioder.findIndex((p: PeriodeMedId) => p.id === id);
  const updatedPeriode = perioder.find((p: PeriodeMedId) => p.id === id);

  return [
    ...perioder.slice(0, updatedIndex),
    {
      ...updatedPeriode,
      ...values,
    },
    ...perioder.slice(updatedIndex + 1),
  ];
};

export type FormValues = {
  soknad: Soknad;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: PeriodeMedId[];
}

type AksjonspunktData = Array<BekreftBosattVurderingAp
  | BekreftErMedlemVurderingAp
  | BekreftOppholdsrettVurderingAp
  | BekreftLovligOppholdVurderingAp
  | AvklarFortsattMedlemskapAp>;

interface PureOwnProps {
  soknad: Soknad;
  medlemskap: Medlemskap;
  aksjonspunkter: Aksjonspunkt[];
  behandlingType: string;
  submitCallback: (data: AksjonspunktData) => Promise<void>;
  submittable: boolean;
  readOnly: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: AlleKodeverk;
}

interface MappedOwnProps {
  hasOpenAksjonspunkter: boolean;
  onSubmit: (values: any) => any;
  initialValues: FormValues;
  perioder?: PeriodeMedId[];
}

interface OwnState {
  valgtPeriode?: PeriodeMedId;
}

interface DispatchProps {
  reduxFormReset: (form: string) => FormAction;
  reduxFormChange: (form: string, field: string, value: any, touch?: boolean, persistentSubmitErrors?: boolean) => FormAction;
}

type Props = PureOwnProps & MappedOwnProps & DispatchProps & WrappedComponentProps & InjectedFormProps

/**
 * OppholdInntektOgPerioderForm
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for faktapenelet til Medlemskapsvilkåret.
 */
export class OppholdInntektOgPerioderForm extends Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      valgtPeriode: undefined,
    };

    this.velgPeriodeCallback = this.velgPeriodeCallback.bind(this);
    this.updateOppholdInntektPeriode = this.updateOppholdInntektPeriode.bind(this);
    this.isConfirmButtonDisabled = this.isConfirmButtonDisabled.bind(this);
    this.periodeResetCallback = this.periodeResetCallback.bind(this);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount(): void {
    const { initialValues } = this.props;
    const defaultPeriode = initialValues.perioder ? initialValues.perioder[0] : undefined;
    this.setValgtPeriode(defaultPeriode);
  }

  setValgtPeriode(valgtPeriode: PeriodeMedId): void {
    if (!valgtPeriode) {
      const { initialValues } = this.props;
      const defaultPeriode = initialValues.perioder ? initialValues.perioder[0] : undefined;
      this.setState({ valgtPeriode: defaultPeriode });
    }
    this.setState({ valgtPeriode });
  }

  periodeResetCallback(): void {
    const { reduxFormReset: formReset } = this.props;
    const { valgtPeriode } = this.state;
    if (valgtPeriode) {
      formReset(`OppholdInntektOgPeriodeForm-${valgtPeriode.id}`);
    }
  }

  velgPeriodeCallback(_p, id: string, periode: MedlemPeriode): void {
    const valgtPeriode = {
      id,
      ...periode,
    };
    this.setState({ valgtPeriode });
  }

  updateOppholdInntektPeriode(values: OppholdFormValues): void {
    const {
      perioder, reduxFormChange: formChange,
    } = this.props;

    const updatedPeriode = perioder.find((p) => p.id === values.id);

    const newPeriodeObject = {
      ...updatedPeriode,
      ...values,
    };

    const newPerioder = createNewPerioder(perioder, values.id, newPeriodeObject);

    formChange('OppholdInntektOgPerioderForm', 'perioder', newPerioder);
  }

  isConfirmButtonDisabled(): boolean {
    const {
      perioder, readOnly, dirty,
    } = this.props;

    if (!dirty) {
      return true;
    }

    if (perioder && perioder.length > 0) {
      const ubekreftPerioder = perioder.filter((periode: PeriodeMedId) => periode.aksjonspunkter.length > 0 && periode.begrunnelse === null);

      if (ubekreftPerioder.length > 0) {
        return true;
      }
    }

    return readOnly;
  }

  render() {
    const {
      hasOpenAksjonspunkter,
      submittable,
      aksjonspunkter,
      readOnly,
      alleKodeverk,
      alleMerknaderFraBeslutter,
      medlemskap,
      ...formProps
    } = this.props;

    const { valgtPeriode } = this.state;
    const isApOpen = hasOpenAksjonspunkter || !submittable;

    return (
      <form onSubmit={formProps.handleSubmit}>
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={isApOpen}>
          {getHelpTexts(aksjonspunkter)}
        </AksjonspunktHelpTextTemp>
        { hasAksjonspunkt(AVKLAR_FORTSATT_MEDLEMSKAP, aksjonspunkter) && (
        <MedlemskapEndringerTabell
          selectedId={valgtPeriode ? valgtPeriode.id : undefined}
          velgPeriodeCallback={this.velgPeriodeCallback}
        />
        )}
        {valgtPeriode && (
        <OppholdInntektOgPeriodeForm
          key={valgtPeriode.id}
          readOnly={readOnly}
          valgtPeriode={valgtPeriode}
          aksjonspunkter={aksjonspunkter}
          submittable={submittable}
          updateOppholdInntektPeriode={this.updateOppholdInntektPeriode}
          periodeResetCallback={this.periodeResetCallback}
          alleKodeverk={alleKodeverk}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          medlemskap={medlemskap}
        />
        )}

        <VerticalSpacer twentyPx />
        <Hovedknapp
          mini
          disabled={formProps.submitting || this.isConfirmButtonDisabled()}
          spinner={formProps.submitting}
        >
          <FormattedMessage id="OppholdInntektOgPerioder.Bekreft" />
        </Hovedknapp>
      </form>
    );
  }
}

const medlemAksjonspunkter = [
  AVKLAR_OM_BRUKER_ER_BOSATT,
  AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  AVKLAR_OPPHOLDSRETT,
  AVKLAR_LOVLIG_OPPHOLD,
  AVKLAR_FORTSATT_MEDLEMSKAP,
];

const mapOgFiltrerPerioder = (ap: Aksjonspunkt, perioder: OppholdFormValues[]) => {
  const perioderTilLagring = perioder.map((periode) => omitMany(periode, [
    'id',
    'fixedMedlemskapPerioder',
    'foreldre',
    'hasBosattAksjonspunkt',
    'hasPeriodeAksjonspunkt',
    'isBosattAksjonspunktClosed',
    'isPeriodAksjonspunktClosed',
    'opphold',
    'termindato',
    'årsaker']));

  return perioderTilLagring.filter((periode: PeriodeMedId) => periode.aksjonspunkter.includes(ap.definisjon)
    || (periode.aksjonspunkter.length > 0 && ap.definisjon === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP));
};

export const transformValues = (perioder: OppholdFormValues[], aksjonspunkter: Aksjonspunkt[]): AksjonspunktData => {
  const aktiveMedlemAksjonspunkter = aksjonspunkter
    .filter((ap) => medlemAksjonspunkter.some((kode) => kode === ap.definisjon))
    .filter((ap) => ap.erAktivt);

  // @ts-ignore Fiks
  return aktiveMedlemAksjonspunkter.map((ap) => ({
    kode: ap.definisjon,
    begrunnelse: '',
    bekreftedePerioder: mapOgFiltrerPerioder(ap, perioder),
  }));
};

const buildInitalValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.medlemskap],
(soknad, medlem = {} as Medlemskap): FormValues => ({
  soknad,
  medlemskapPerioder: medlem.medlemskapPerioder || [],
  perioder: (medlem.perioder || []).map((periode) => ({
    ...periode,
    id: guid(),
  })),
}));

const EMPTY_ARRAY = [];

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: any) => submitCallback(transformValues(values.perioder, aksjonspunkter)));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const hasOpenAksjonspunkter = ownProps.aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  return {
    hasOpenAksjonspunkter,
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitalValues(ownProps),
    perioder: formValueSelector('OppholdInntektOgPerioderForm')(state, 'perioder') || EMPTY_ARRAY,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormReset,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'OppholdInntektOgPerioderForm',
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
})(injectIntl(OppholdInntektOgPerioderForm)));
