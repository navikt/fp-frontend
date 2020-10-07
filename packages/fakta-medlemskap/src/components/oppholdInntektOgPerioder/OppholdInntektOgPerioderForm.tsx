import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  change as reduxFormChange, FormAction, InjectedFormProps, reset as reduxFormReset,
} from 'redux-form';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { bindActionCreators } from 'redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { guid } from '@fpsak-frontend/utils';
import { getBehandlingFormPrefix, behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import {
  Aksjonspunkt, FagsakPerson, Kodeverk, KodeverkMedNavn, Medlemskap, MedlemPeriode, Soknad,
} from '@fpsak-frontend/types';

import OppholdInntektOgPeriodeForm from './OppholdInntektOgPeriodeForm';
import MedlemskapEndringerTabell from './MedlemskapEndringerTabell';

const {
  AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN, AVKLAR_OM_BRUKER_ER_BOSATT,
  AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE, AVKLAR_OPPHOLDSRETT, AVKLAR_LOVLIG_OPPHOLD, AVKLAR_FORTSATT_MEDLEMSKAP,
} = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: Aksjonspunkt[]) => {
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

type PeriodeMedId = MedlemPeriode & { id: number; }

const createNewPerioder = (perioder: PeriodeMedId[], id: number, values: any) => {
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

interface OwnProps {
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submitting: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  behandlingId: number;
  behandlingVersjon: number;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  initialValues: {
    perioder: PeriodeMedId[];
  }
  perioder: PeriodeMedId[];
  behandlingFormPrefix: string;
}

interface OwnState {
  valgtPeriode?: PeriodeMedId;
}

interface DispatchProps {
  reduxFormReset: (form: string) => FormAction;
  reduxFormChange: (form: string, field: string, value: any, touch?: boolean, persistentSubmitErrors?: boolean) => FormAction;
}

type Props = OwnProps & DispatchProps & WrappedComponentProps & InjectedFormProps

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
  UNSAFE_componentWillMount() {
    const { initialValues } = this.props;
    const defaultPeriode = initialValues.perioder ? initialValues.perioder[0] : undefined;
    this.setValgtPeriode(defaultPeriode);
  }

  setValgtPeriode(valgtPeriode: PeriodeMedId) {
    if (!valgtPeriode) {
      const { initialValues } = this.props;
      const defaultPeriode = initialValues.perioder ? initialValues.perioder[0] : undefined;
      this.setState({ valgtPeriode: defaultPeriode });
    }
    this.setState({ valgtPeriode });
  }

  periodeResetCallback() {
    const { behandlingFormPrefix, reduxFormReset: formReset } = this.props;
    const { valgtPeriode } = this.state;
    if (valgtPeriode) {
      formReset(`${behandlingFormPrefix}.OppholdInntektOgPeriodeForm-${valgtPeriode.id}`);
    }
  }

  velgPeriodeCallback(_p, id: number, periode: MedlemPeriode) {
    const valgtPeriode = {
      id,
      ...periode,
    };
    this.setState({ valgtPeriode });
  }

  updateOppholdInntektPeriode(values: any) {
    const {
      behandlingFormPrefix, perioder, reduxFormChange: formChange,
    } = this.props;

    const updatedPeriode = perioder.find((p: PeriodeMedId) => p.id === values.id);

    const newPeriodeObject = {
      ...updatedPeriode,
      ...values,
    };

    const newPerioder = createNewPerioder(perioder, values.id, newPeriodeObject);

    formChange(`${behandlingFormPrefix}.OppholdInntektOgPerioderForm`, 'perioder', newPerioder);
  }

  isConfirmButtonDisabled() {
    const {
      perioder, readOnly, submitting, dirty,
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

    return submitting || readOnly;
  }

  render() {
    const {
      hasOpenAksjonspunkter,
      submittable,
      aksjonspunkter,
      readOnly,
      submitting,
      behandlingId,
      behandlingVersjon,
      alleKodeverk,
      alleMerknaderFraBeslutter,
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
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
        />
        )}

        {valgtPeriode && (
        <OppholdInntektOgPeriodeForm
          readOnly={readOnly}
          valgtPeriode={valgtPeriode}
          aksjonspunkter={aksjonspunkter}
          submittable={submittable}
          updateOppholdInntektPeriode={this.updateOppholdInntektPeriode}
          periodeResetCallback={this.periodeResetCallback}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          alleKodeverk={alleKodeverk}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
        )}

        <VerticalSpacer twentyPx />
        <Hovedknapp
          mini
          disabled={this.isConfirmButtonDisabled()}
          spinner={submitting}
        >
          <FormattedMessage id="OppholdInntektOgPerioder.Bekreft" />
        </Hovedknapp>
      </form>
    );
  }
}

const medlemAksjonspunkter = [AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN, AVKLAR_OM_BRUKER_ER_BOSATT, AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
  AVKLAR_OPPHOLDSRETT, AVKLAR_LOVLIG_OPPHOLD, AVKLAR_FORTSATT_MEDLEMSKAP];

export const transformValues = (values: any, aksjonspunkter: Aksjonspunkt[]) => {
  const aktiveMedlemAksjonspunkter = aksjonspunkter
    .filter((ap: Aksjonspunkt) => medlemAksjonspunkter.includes(ap.definisjon.kode))
    .filter((ap: Aksjonspunkt) => ap.erAktivt)
    .filter((ap: Aksjonspunkt) => ap.definisjon.kode !== aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN);

  return aktiveMedlemAksjonspunkter.map((ap: Aksjonspunkt) => ({
    kode: ap.definisjon.kode,
    begrunnelse: '',

    // TODO Kva ligg i periode eigentleg? Dette er mykje meir enn i PeriodeMedId iallfall
    bekreftedePerioder: values.perioder.map((periode: any) => {
      // TODO Kor mange felt er det i bekreftetPeriode? Kan ein heller laga nytt objekt med det ein treng?
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id, fixedMedlemskapPerioder, foreldre, inntekter, manuellVurderingType, hasBosattAksjonspunkt, hasPeriodeAksjonspunkt,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isBosattAksjonspunktClosed, isPeriodAksjonspunktClosed, opphold, personopplysninger, fom, termindato, årsaker,
        ...bekreftetPeriode
      } = periode;
      return bekreftetPeriode;
    }).filter((periode: PeriodeMedId) => periode.aksjonspunkter.includes(ap.definisjon.kode)
      || (periode.aksjonspunkter.length > 0 && ap.definisjon.kode === aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP)),
  }));
};

interface PureOwnProps {
  soknad: Soknad;
  fagsakPerson: FagsakPerson;
  medlemskap: Medlemskap;
  aksjonspunkter: Aksjonspunkt[];
  behandlingType: Kodeverk;
  behandlingId: number;
  behandlingVersjon: number;
  submitCallback: (...args: any[]) => any;
}

const buildInitalValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.soknad,
  (ownProps: PureOwnProps) => ownProps.fagsakPerson,
  (ownProps: PureOwnProps) => ownProps.medlemskap],
(soknad, person, medlem = {} as Medlemskap) => ({
  soknad,
  person,
  gjeldendeFom: medlem.fom,
  medlemskapPerioder: medlem.medlemskapPerioder || [],
  inntekter: medlem.inntekt,
  perioder: (medlem.perioder || []).map((periode: MedlemPeriode) => ({
    ...periode,
    id: guid(),
  })),
}));

const EMPTY_ARRAY = [];

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.aksjonspunkter],
(submitCallback, aksjonspunkter) => (values: any) => submitCallback(transformValues(values, aksjonspunkter)));

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
  const hasOpenAksjonspunkter = ownProps.aksjonspunkter.some((ap: Aksjonspunkt) => isAksjonspunktOpen(ap.status.kode));
  const { behandlingId, behandlingVersjon } = ownProps;
  const behandlingFormPrefix = getBehandlingFormPrefix(behandlingId, behandlingVersjon);
  return {
    behandlingFormPrefix,
    hasOpenAksjonspunkter,
    onSubmit: lagSubmitFn(ownProps),
    initialValues: buildInitalValues(ownProps),
    perioder: behandlingFormValueSelector('OppholdInntektOgPerioderForm', behandlingId, behandlingVersjon)(state, 'perioder') || EMPTY_ARRAY,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormReset,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(behandlingForm({
  form: 'OppholdInntektOgPerioderForm',
})(injectIntl(OppholdInntektOgPerioderForm)));
