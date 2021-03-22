import React, { Component } from 'react';
import { FormattedMessage, WrappedComponentProps } from 'react-intl';
import { change as reduxFormChange, FormAction, initialize as reduxFormInitialize } from 'redux-form';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { getBehandlingFormPrefix, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { VerticalSpacer, FaktaGruppe } from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Arbeidsforhold, ArbeidsgiverOpplysningerPerId, KodeverkMedNavn } from '@fpsak-frontend/types';

import ArbeidsforholdHandling from '../kodeverk/arbeidsforholdHandling';
import AktivtArbeidsforholdHandling from '../kodeverk/aktivtArbeidsforholdHandling';
import ArbeidsforholdKilder from '../kodeverk/arbeidsforholdKilder';
import PersonArbeidsforholdTable from './arbeidsforholdTabell/PersonArbeidsforholdTable';
import PersonArbeidsforholdDetailForm, { PERSON_ARBEIDSFORHOLD_DETAIL_FORM } from './arbeidsforholdDetaljer/PersonArbeidsforholdDetailForm';
import CustomArbeidsforhold from '../typer/CustomArbeidsforholdTsType';

import styles from './personArbeidsforholdPanel.less';

// -------------------------------------------------------------------------------------------------------------
// Methods
// -------------------------------------------------------------------------------------------------------------

const removeDeleted = (arbeidsforhold: CustomArbeidsforhold[]): CustomArbeidsforhold[] => arbeidsforhold.filter((a) => !a.erSlettet);

const cleanUpArbeidsforhold = (newValues: CustomArbeidsforhold, originalValues: CustomArbeidsforhold): CustomArbeidsforhold => {
  if (!newValues.brukArbeidsforholdet) {
    return {
      ...newValues,
      erNyttArbeidsforhold: undefined,
      erstatterArbeidsforholdId: undefined,
      tomDato: originalValues.tomDato,
    };
  }
  if (newValues.erNyttArbeidsforhold) {
    return {
      ...newValues,
      erstatterArbeidsforholdId: undefined,
    };
  }
  return newValues;
};

const findFomDato = (arbeidsforhold: CustomArbeidsforhold, replacedArbeidsforhold: CustomArbeidsforhold): string => (arbeidsforhold.erstatterArbeidsforholdId
  ? replacedArbeidsforhold.fomDato : arbeidsforhold.originalFomDato);

const getUnresolvedArbeidsforhold = (arbeidsforholdList: CustomArbeidsforhold[]): CustomArbeidsforhold => arbeidsforholdList
  .find((a) => a.tilVurdering && !a.erEndret);

const hasArbeidsforholdAksjonspunkt = (arbeidsforhold: Arbeidsforhold): boolean => arbeidsforhold && (arbeidsforhold.tilVurdering || arbeidsforhold.erEndret);

export const getSortArbeidsforholdFn = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => (
  a1: CustomArbeidsforhold,
  a2: CustomArbeidsforhold,
): number => {
  const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a1.arbeidsgiverReferanse];
  const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[a2.arbeidsgiverReferanse];
  if (arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2) {
    const i = arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn);
    if (i !== 0) {
      return i;
    }
  }

  if (a1.mottattDatoInntektsmelding && a2.mottattDatoInntektsmelding) {
    return moment(a2.mottattDatoInntektsmelding, ISO_DATE_FORMAT).diff(moment(a1.mottattDatoInntektsmelding, ISO_DATE_FORMAT));
  }
  if (a1.mottattDatoInntektsmelding) {
    return -1;
  }
  if (a2.mottattDatoInntektsmelding) {
    return 1;
  }
  return a1.id.localeCompare(a2.id);
};

export const erDetTillattMedFortsettingAvAktivtArbeidsforholdUtenIM = (arbeidsforhold: Arbeidsforhold[], arbeidsgiverIdentifikator: string): boolean => {
  let isAllowed = true;
  const arbeidsforholdUtenInntektsmeldingTilVurdering = arbeidsforhold
    .filter((a: Arbeidsforhold) => (a.tilVurdering || a.erEndret) && !a.mottattDatoInntektsmelding);
  arbeidsforholdUtenInntektsmeldingTilVurdering.forEach((a: Arbeidsforhold) => {
    const arbeidsforholdFraSammeArbeidsgiverMedInntekstmelding = arbeidsforhold
      .filter((b: Arbeidsforhold) => a.id !== b.id && a.arbeidsgiverReferanse === b.arbeidsgiverReferanse && b.mottattDatoInntektsmelding
        && a.arbeidsgiverReferanse === arbeidsgiverIdentifikator);
    if (arbeidsforholdFraSammeArbeidsgiverMedInntekstmelding.length > 0) {
      isAllowed = false;
    }
  });
  return isAllowed;
};

const addReplaceableArbeidsforhold = (arbeidsforholdList: Arbeidsforhold[]): CustomArbeidsforhold[] => arbeidsforholdList
  .map((a1: Arbeidsforhold) => {
    const matches = arbeidsforholdList.filter((a2: Arbeidsforhold) => a2.arbeidsgiverReferanse === a1.arbeidsgiverReferanse
      && a2.arbeidsforholdId && a1.arbeidsforholdId && a2.arbeidsforholdId !== a1.arbeidsforholdId);
    const hasSomeNewer = matches.some((m: Arbeidsforhold) => moment(m.mottattDatoInntektsmelding).isAfter(a1.mottattDatoInntektsmelding));
    return {
      ...a1,
      replaceOptions: hasSomeNewer ? [] : matches,
    };
  });

const utledAktivtArbeidsforholdHandling = (arbeidsforhold: CustomArbeidsforhold, arbeidsforholdHandlingField: string): string | undefined => {
  if (arbeidsforholdHandlingField === ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD
    && (arbeidsforhold.mottattDatoInntektsmelding === undefined || arbeidsforhold.mottattDatoInntektsmelding === null)) {
    if (arbeidsforhold.inntektMedTilBeregningsgrunnlag === false) {
      return AktivtArbeidsforholdHandling.INNTEKT_IKKE_MED_I_BG;
    }
    if (arbeidsforhold.fortsettBehandlingUtenInntektsmelding === true) {
      return AktivtArbeidsforholdHandling.BENYTT_A_INNTEKT_I_BG;
    }
    if (arbeidsforhold.fortsettBehandlingUtenInntektsmelding === false) {
      return AktivtArbeidsforholdHandling.AVSLA_YTELSE;
    }
  }
  return undefined;
};

const utledArbeidsforholdHandling = (arbeidsforhold: CustomArbeidsforhold): string | undefined => {
  if (arbeidsforhold.tilVurdering === false && arbeidsforhold.erEndret === false) {
    return undefined;
  }

  if (arbeidsforhold.brukArbeidsforholdet === true && arbeidsforhold.brukMedJustertPeriode === true) {
    return ArbeidsforholdHandling.OVERSTYR_TOM;
  }

  const soekerErIPermisjon = arbeidsforhold.brukArbeidsforholdet === true
    && arbeidsforhold.permisjoner
    && arbeidsforhold.permisjoner.length > 0
    && arbeidsforhold.brukPermisjon === true;
  if (soekerErIPermisjon) {
    return ArbeidsforholdHandling.SOKER_ER_I_PERMISJON;
  }

  const harIkkeOverstyrtTom = arbeidsforhold.brukArbeidsforholdet === true && arbeidsforhold.brukMedJustertPeriode === false;
  const soekerErIkkeIPermisjon = arbeidsforhold.brukArbeidsforholdet === true
    && arbeidsforhold.permisjoner
    && arbeidsforhold.permisjoner.length > 0
    && arbeidsforhold.brukPermisjon === false;
  if (harIkkeOverstyrtTom || soekerErIkkeIPermisjon) {
    return ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD;
  }

  if (arbeidsforhold.brukArbeidsforholdet === false) {
    return ArbeidsforholdHandling.FJERN_ARBEIDSFORHOLD;
  }

  return undefined;
};

const finnOverstyrtTom = (arbeidsforhold: CustomArbeidsforhold): string | undefined => {
  if (arbeidsforhold.overstyrtTom) {
    return arbeidsforhold.overstyrtTom;
  }
  return arbeidsforhold.brukMedJustertPeriode ? arbeidsforhold.tomDato : undefined;
};

const leggTilValuesForRendering = (
  arbeidsforholdList: CustomArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): CustomArbeidsforhold[] => arbeidsforholdList
  .map((arbeidsforhold): CustomArbeidsforhold => {
    const arbeidsforholdHandlingField = utledArbeidsforholdHandling(arbeidsforhold);
    const aktivtArbeidsforholdHandlingField = utledAktivtArbeidsforholdHandling(arbeidsforhold, arbeidsforholdHandlingField);
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
    return {
      ...arbeidsforhold,
      navn: arbeidsgiverOpplysninger?.navn,
      originalFomDato: arbeidsforhold.fomDato,
      overstyrtTom: finnOverstyrtTom(arbeidsforhold), // TODO : Fjern dette når back-end er på plass
      arbeidsforholdHandlingField,
      aktivtArbeidsforholdHandlingField,
    };
  });

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  readOnly: boolean;
  hasAksjonspunkter: boolean;
  hasOpenAksjonspunkter: boolean;
  skalKunneLeggeTilNyeArbeidsforhold: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface MappedOwnProps {
  arbeidsforhold: CustomArbeidsforhold[];
  behandlingFormPrefix: string;
  aktivtArbeidsforholdTillatUtenIM: boolean;
}

interface DispatchProps {
  reduxFormChange: (form: string, field: string, value: any, touch?: boolean, persistentSubmitErrors?: boolean) => FormAction;
  reduxFormInitialize: (form: string, data: any) => FormAction;
}

interface OwnState {
  selectedArbeidsforhold?: CustomArbeidsforhold;
}

interface StaticFunctions {
  buildInitialValues?: (arbeidsforhold: Arbeidsforhold[], arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => {
    arbeidsforhold: CustomArbeidsforhold[];
  },
  isReadOnly?: (state: any, behandlingId: number, behandlingVersjon: number) => boolean,
}

type Props = PureOwnProps & MappedOwnProps & DispatchProps & StaticFunctions & WrappedComponentProps;

/**
 * PersonArbeidsforholdPanelImpl:
 * - Håndterer staten for children-components.
 * - Bygger initialValues til children-components ved hjelp av arbeidsforhold PropType. Verdiene
 * som har samme navn i GUI og PropTypen blir fylt inn 'automatisk', mens andre variabler som
 * ikke er med i PropTypen må håndteres f.eks. i UpdateArbeidsforhold metoden.
 */
export class PersonArbeidsforholdPanelImpl extends Component<Props, OwnState> {
  static buildInitialValues = (arbeidsforhold: Arbeidsforhold[], arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => ({
    arbeidsforhold: leggTilValuesForRendering(addReplaceableArbeidsforhold(arbeidsforhold), arbeidsgiverOpplysningerPerId),
  });

  static isReadOnly = (state: any, behandlingId: number, behandlingVersjon: number): boolean => {
    const isDetailFormOpen = !!behandlingFormValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM, behandlingId, behandlingVersjon)(state, 'navn');
    if (isDetailFormOpen) {
      return true;
    }
    const arbeidsforhold = behandlingFormValueSelector('ArbeidsforholdInfoPanel', behandlingId, behandlingVersjon)(state, 'arbeidsforhold');
    return !arbeidsforhold || !!getUnresolvedArbeidsforhold(arbeidsforhold);
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedArbeidsforhold: undefined,
    };
    this.setSelectedArbeidsforhold = this.setSelectedArbeidsforhold.bind(this);
    this.updateArbeidsforhold = this.updateArbeidsforhold.bind(this);
    this.cancelArbeidsforhold = this.cancelArbeidsforhold.bind(this);
    this.initializeActivityForm = this.initializeActivityForm.bind(this);
    this.leggTilArbeidsforhold = this.leggTilArbeidsforhold.bind(this);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount(): void {
    const { arbeidsforhold } = this.props;
    const selected = getUnresolvedArbeidsforhold(arbeidsforhold) || undefined;
    this.setSelectedArbeidsforhold(undefined, undefined, selected);
  }

  setSelectedArbeidsforhold(_p: React.MouseEvent | React.KeyboardEvent, _id: string, selectedArbeidsforhold: CustomArbeidsforhold): void {
    this.setState({ selectedArbeidsforhold });
    this.initializeActivityForm(selectedArbeidsforhold);
  }

  setFormField(fieldName: string, fieldValue: any): void {
    const { behandlingFormPrefix, reduxFormChange: formChange } = this.props;
    formChange(`${behandlingFormPrefix}.${'ArbeidsforholdInfoPanel'}`, fieldName, fieldValue);
  }

  initializeActivityForm(arbeidsforhold: CustomArbeidsforhold): void {
    const { selectedArbeidsforhold } = this.state;
    if (selectedArbeidsforhold !== arbeidsforhold) {
      const { behandlingFormPrefix, reduxFormInitialize: formInitialize } = this.props;
      formInitialize(`${behandlingFormPrefix}.${PERSON_ARBEIDSFORHOLD_DETAIL_FORM}`, arbeidsforhold);
    }
  }

  updateArbeidsforhold(values: CustomArbeidsforhold): void {
    const { selectedArbeidsforhold } = this.state;
    const { arbeidsforhold } = this.props;

    const brukMedJustertPeriode = values.arbeidsforholdHandlingField === ArbeidsforholdHandling.OVERSTYR_TOM;

    const brukArbeidsforholdet = values.arbeidsforholdHandlingField !== ArbeidsforholdHandling.FJERN_ARBEIDSFORHOLD;

    let fortsettBehandlingUtenInntektsmelding;
    if (values.mottattDatoInntektsmelding === undefined || values.mottattDatoInntektsmelding === null) {
      fortsettBehandlingUtenInntektsmelding = (values.arbeidsforholdHandlingField === ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD
        && values.aktivtArbeidsforholdHandlingField !== AktivtArbeidsforholdHandling.AVSLA_YTELSE)
        || values.arbeidsforholdHandlingField === ArbeidsforholdHandling.OVERSTYR_TOM
        || values.arbeidsforholdHandlingField === ArbeidsforholdHandling.SOKER_ER_I_PERMISJON;
    }

    const brukPermisjon = values.permisjoner && values.permisjoner.length > 0
      ? values.arbeidsforholdHandlingField === ArbeidsforholdHandling.SOKER_ER_I_PERMISJON
      : undefined;

    const inntektMedTilBeregningsgrunnlag = values.aktivtArbeidsforholdHandlingField === AktivtArbeidsforholdHandling.INNTEKT_IKKE_MED_I_BG
      ? false
      : undefined;

    const newValues = {
      ...values,
      brukMedJustertPeriode,
      brukArbeidsforholdet,
      fortsettBehandlingUtenInntektsmelding,
      inntektMedTilBeregningsgrunnlag,
      brukPermisjon,
      basertPaInntektsmelding: !!selectedArbeidsforhold.kanOppretteNyttArbforFraIM,
    };

    const cleanedValues = cleanUpArbeidsforhold(newValues, selectedArbeidsforhold);

    let other = arbeidsforhold.filter((o) => o.id !== cleanedValues.id);
    const oldState = arbeidsforhold.find((a) => a.id === cleanedValues.id);
    let { fomDato } = cleanedValues;
    if (oldState !== undefined && oldState !== null && cleanedValues.erstatterArbeidsforholdId !== oldState.erstatterArbeidsforholdId) {
      if (oldState.erstatterArbeidsforholdId) {
        other = other.map((o) => (o.id === oldState.erstatterArbeidsforholdId ? { ...o, erSlettet: false } : o));
      }
      if (cleanedValues.erstatterArbeidsforholdId) {
        other = other.map((o) => (o.id === cleanedValues.erstatterArbeidsforholdId ? { ...o, erSlettet: true } : o));
      }
      fomDato = findFomDato(cleanedValues, arbeidsforhold.find((a) => a.id === cleanedValues.erstatterArbeidsforholdId));
    }

    this.setFormField('arbeidsforhold', other.concat({
      ...cleanedValues,
      fomDato,
      erEndret: true,
    }));

    const unresolvedArbeidsforhold = getUnresolvedArbeidsforhold(removeDeleted(other));
    this.setSelectedArbeidsforhold(undefined, undefined, unresolvedArbeidsforhold);
  }

  cancelArbeidsforhold(): void {
    this.setState({ selectedArbeidsforhold: undefined });
    this.initializeActivityForm({} as CustomArbeidsforhold);
  }

  leggTilArbeidsforhold(): void {
    const lagtTilArbeidsforhold = {
      id: `${(new Date()).getTime()}_${Math.floor(Math.random() * 1000000000)}`,
      navn: undefined,
      arbeidsgiverReferanse: undefined,
      arbeidsforholdId: undefined,
      fomDato: undefined,
      tomDato: undefined,
      kilde: {
        navn: ArbeidsforholdKilder.SAKSBEHANDLER,
      },
      mottattDatoInntektsmelding: undefined,
      begrunnelse: undefined,
      stillingsprosent: undefined,
      brukArbeidsforholdet: true,
      fortsettBehandlingUtenInntektsmelding: undefined,
      erNyttArbeidsforhold: undefined,
      erSlettet: undefined,
      erstatterArbeidsforholdId: undefined,
      harErsattetEttEllerFlere: undefined,
      ikkeRegistrertIAaRegister: undefined,
      tilVurdering: true,
      vurderOmSkalErstattes: undefined,
      erEndret: undefined,
      overstyrtTom: undefined,
      brukMedJustertPeriode: false,
      lagtTilAvSaksbehandler: true,
      inntektMedTilBeregningsgrunnlag: true,
      arbeidsforholdHandlingField: ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD,
      aktivtArbeidsforholdHandlingField: AktivtArbeidsforholdHandling.BENYTT_A_INNTEKT_I_BG,
    };
    this.setState({ selectedArbeidsforhold: lagtTilArbeidsforhold });
    this.initializeActivityForm(lagtTilArbeidsforhold);
  }

  render() {
    const {
      readOnly,
      hasAksjonspunkter,
      hasOpenAksjonspunkter,
      arbeidsforhold,
      aktivtArbeidsforholdTillatUtenIM,
      skalKunneLeggeTilNyeArbeidsforhold,
      alleMerknaderFraBeslutter,
      behandlingId,
      behandlingVersjon,
      alleKodeverk,
      arbeidsgiverOpplysningerPerId,
      intl,
    } = this.props;

    const {
      selectedArbeidsforhold,
    } = this.state;

    return (
      <>
        <FaktaGruppe
          title={intl.formatMessage({ id: 'PersonArbeidsforholdPanel.ArbeidsforholdHeader' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD]}
        >
          <PersonArbeidsforholdTable
            selectedId={selectedArbeidsforhold ? selectedArbeidsforhold.id : undefined}
            alleArbeidsforhold={removeDeleted(arbeidsforhold)}
            selectArbeidsforholdCallback={this.setSelectedArbeidsforhold}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          { !readOnly && skalKunneLeggeTilNyeArbeidsforhold && selectedArbeidsforhold === undefined && arbeidsforhold.length === 0 && (
            <button
              type="button"
              className={styles.leggTilArbeidsforholdButton}
              onClick={this.leggTilArbeidsforhold}
              disabled={readOnly}
            >
              <FormattedMessage id="PersonArbeidsforholdTable.LeggTilArbeidsforhold" />
            </button>
          )}
          { hasArbeidsforholdAksjonspunkt(selectedArbeidsforhold) && (
            <PersonArbeidsforholdDetailForm
              key={selectedArbeidsforhold.id}
              intl={intl}
              arbeidsforhold={selectedArbeidsforhold}
              readOnly={readOnly}
              hasAksjonspunkter={hasAksjonspunkter}
              hasOpenAksjonspunkter={hasOpenAksjonspunkter}
              updateArbeidsforhold={this.updateArbeidsforhold}
              cancelArbeidsforhold={this.cancelArbeidsforhold}
              aktivtArbeidsforholdTillatUtenIM={aktivtArbeidsforholdTillatUtenIM}
              skalKunneLeggeTilNyeArbeidsforhold={skalKunneLeggeTilNyeArbeidsforhold}
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              alleKodeverk={alleKodeverk}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          )}
        </FaktaGruppe>
        <VerticalSpacer twentyPx />
      </>
    );
  }
}

const FORM_NAVN = 'ArbeidsforholdInfoPanel';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const arbeidsforhold = behandlingFormValueSelector(FORM_NAVN, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'arbeidsforhold');
  const sorterteArbeidsforhold = arbeidsforhold.sort(getSortArbeidsforholdFn(ownProps.arbeidsgiverOpplysningerPerId));
  const arbeidsgiverIdentifikator = behandlingFormValueSelector(PERSON_ARBEIDSFORHOLD_DETAIL_FORM, ownProps.behandlingId,
    ownProps.behandlingVersjon)(state, 'arbeidsgiverIdentifikator');
  return {
    arbeidsforhold: sorterteArbeidsforhold,
    behandlingFormPrefix: getBehandlingFormPrefix(ownProps.behandlingId, ownProps.behandlingVersjon),
    aktivtArbeidsforholdTillatUtenIM: erDetTillattMedFortsettingAvAktivtArbeidsforholdUtenIM(sorterteArbeidsforhold, arbeidsgiverIdentifikator),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormInitialize,
  }, dispatch),
});

const PersonArbeidsforholdPanel = connect(mapStateToProps, mapDispatchToProps)(PersonArbeidsforholdPanelImpl);

export default PersonArbeidsforholdPanel;
