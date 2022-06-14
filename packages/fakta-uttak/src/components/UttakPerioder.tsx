import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  change as reduxFormChange, FieldArray, formValueSelector, getFormInitialValues, reset as reduxFormReset,
} from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { bindActionCreators, Dispatch } from 'redux';
import moment from 'moment';
import { Element } from 'nav-frontend-typografi';
import { Knapp } from 'nav-frontend-knapper';

import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold, FamilieHendelse,
  FamilieHendelseSamling, KodeverkMedNavn, Personoversikt, AlleKodeverk,
} from '@fpsak-frontend/types';
import { CheckboxField } from '@fpsak-frontend/form';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, AksjonspunktHelpTextHTML,
} from '@navikt/ft-ui-komponenter';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import UttakPeriode from './UttakPeriode';
import UttakNyPeriode from './UttakNyPeriode';
import UttakSlettPeriodeModal from './UttakSlettPeriodeModal';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const createNewPerioder = (perioder: CustomUttakKontrollerFaktaPerioder[], id: string, values: any) => {
  const updatedIndex = perioder.findIndex((p: CustomUttakKontrollerFaktaPerioder) => p.id === id);
  const updatedPeriode = perioder.find((p: CustomUttakKontrollerFaktaPerioder) => p.id === id);

  return [
    ...perioder.slice(0, updatedIndex),
    {
      ...updatedPeriode,
      ...values,
    },
    ...perioder.slice(updatedIndex + 1),
  ];
};

export const findFamiliehendelseDato = (gjeldendeFamiliehendelse: FamilieHendelse): string => {
  const { termindato, avklartBarn } = gjeldendeFamiliehendelse;

  if (avklartBarn && avklartBarn.length > 0) {
    return avklartBarn[0].fodselsdato;
  }

  return termindato;
};

interface PureOwnProps {
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  submitting: boolean;
  personoversikt: Personoversikt;
  aksjonspunkter: Aksjonspunkt[];
  hasRevurderingOvertyringAp: boolean;
  kanOverstyre: boolean;
  getKodeverknavn: (kode: string, kodeverkType: KodeverkType) => string;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  behandlingStatus: string;
  familiehendelse: FamilieHendelseSamling;
  vilkarForSykdomExists?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  submittable: boolean;
}

interface MappedOwnProps {
  openForms: boolean;
  isManuellOverstyring?: boolean;
  førsteUttaksdato?: string;
  endringsdato?: string;
  uttakPeriodeVurderingTyper: KodeverkMedNavn[];
  initialValues: {
    perioder?: CustomUttakKontrollerFaktaPerioder[];
  };
  slettedePerioder?: CustomUttakKontrollerFaktaPerioder[];
  perioder?: CustomUttakKontrollerFaktaPerioder[];
}

interface DispatchProps {
  reduxFormChange: (...args: any[]) => any;
  reduxFormReset: (...args: any[]) => any;
}

interface OwnState {
  isNyPeriodeFormOpen: boolean;
  showModalSlettPeriode: boolean;
  periodeSlett: CustomUttakKontrollerFaktaPerioder;
}

export class UttakPerioder extends PureComponent<PureOwnProps & MappedOwnProps & DispatchProps, OwnState> {
  constructor(props: PureOwnProps & MappedOwnProps & DispatchProps) {
    super(props);

    this.state = {
      isNyPeriodeFormOpen: false,
      showModalSlettPeriode: false,
      periodeSlett: undefined,
    };

    this.newPeriodeCallback = this.newPeriodeCallback.bind(this);
    this.addNewPeriod = this.addNewPeriod.bind(this);
    this.openSlettPeriodeModalCallback = this.openSlettPeriodeModalCallback.bind(this);
    this.newPeriodeResetCallback = this.newPeriodeResetCallback.bind(this);
    this.removePeriode = this.removePeriode.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.updatePeriode = this.updatePeriode.bind(this);
    this.editPeriode = this.editPeriode.bind(this);
    this.cancelEditPeriode = this.cancelEditPeriode.bind(this);
    this.isAnyFormOpen = this.isAnyFormOpen.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  overrideResultat = (resultat: string): string => {
    if (
      [uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES, uttakPeriodeVurdering.PERIODE_OK].some(
        (type) => type === resultat,
      )
    ) {
      return resultat;
    }
    return uttakPeriodeVurdering.PERIODE_IKKE_VURDERT;
  };

  newPeriodeResetCallback(): void {
    const { reduxFormReset: formReset } = this.props;
    const { isNyPeriodeFormOpen } = this.state;
    formReset('nyPeriodeForm');
    this.setState({ isNyPeriodeFormOpen: !isNyPeriodeFormOpen });
  }

  newPeriodeCallback(nyPeriode: CustomUttakKontrollerFaktaPerioder): void {
    const {
      perioder, reduxFormChange: formChange,
    } = this.props;
    const { isNyPeriodeFormOpen } = this.state;

    const newPerioder = perioder.concat(nyPeriode).sort((a, b) => a.fom.localeCompare(b.fom));

    formChange('UttakFaktaForm', 'perioder', newPerioder);

    this.setState({
      isNyPeriodeFormOpen: !isNyPeriodeFormOpen,
    });
  }

  openSlettPeriodeModalCallback(id: string): void {
    const { showModalSlettPeriode } = this.state;
    const { perioder } = this.props;
    const periodeSlett = perioder.filter((periode) => periode.id === id);
    this.setState({
      showModalSlettPeriode: !showModalSlettPeriode,
      periodeSlett: periodeSlett[0],
    });
  }

  manuellOverstyringResetCallback(): void {
    const { reduxFormReset: formReset } = this.props;
    formReset('UttakFaktaForm');
  }

  removePeriode(values: any) {
    const {
      perioder,
      slettedePerioder,
      initialValues,
      reduxFormChange: formChange,
    } = this.props;
    const { periodeSlett } = this.state;

    const hasOriginalPeriode = initialValues.perioder.find((p) => p.id === periodeSlett.id);

    if (hasOriginalPeriode) {
      formChange(
        'UttakFaktaForm',
        'slettedePerioder',
        slettedePerioder.concat([
          {
            ...periodeSlett,
            begrunnelse: values.begrunnelse,
          },
        ]),
      );
    }

    const newPerioder = perioder.filter((periode) => periode.id !== periodeSlett.id);

    formChange('UttakFaktaForm', 'perioder', newPerioder);

    this.hideModal();
  }

  hideModal(): void {
    this.setState({
      showModalSlettPeriode: false,
    });
  }

  editPeriode(id: string): void {
    const { perioder, reduxFormChange: formChange } = this.props;

    const newPerioder = createNewPerioder(perioder, id, { openForm: true });

    formChange('UttakFaktaForm', 'perioder', newPerioder);
  }

  cancelEditPeriode(id: string): void {
    const { perioder, reduxFormChange: formChange } = this.props;

    const newPerioder = createNewPerioder(perioder, id, { openForm: false });

    formChange('UttakFaktaForm', 'perioder', newPerioder);
  }

  async updatePeriode(values: any) {
    const {
      perioder,
      reduxFormChange: formChange,
    } = this.props;
    const {
      resultat, dokumentertePerioder, id, kontoType, nyFom, nyTom, nyArbeidstidsprosent, oppholdArsak,
    } = values;
    const updatedPeriode = perioder.find((p) => p.id === id);
    const tom = nyTom || updatedPeriode.tom;
    const fom = nyFom || updatedPeriode.fom;
    const newPeriodeObject = {
      id,
      tom,
      fom,
      kontoType,
      resultat: this.overrideResultat(resultat),
      begrunnelse: values.begrunnelse,
      dokumentertePerioder:
        resultat && resultat !== uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES ? dokumentertePerioder : null,
      arbeidstidsprosent: nyArbeidstidsprosent || updatedPeriode.arbeidstidsprosent,
      openForm: !updatedPeriode.openForm,
      utsettelseÅrsak: updatedPeriode.utsettelseÅrsak,
      overføringÅrsak: updatedPeriode.overføringÅrsak,
      erArbeidstaker: updatedPeriode.erArbeidstaker,
      erFrilanser: updatedPeriode.erFrilanser,
      erSelvstendig: updatedPeriode.erSelvstendig,
      samtidigUttak: updatedPeriode.samtidigUttak,
      samtidigUttaksprosent: updatedPeriode.samtidigUttaksprosent,
      flerBarnsDager: updatedPeriode.flerbarnsdager,
      morsAktivitet: updatedPeriode.morsAktivitet,
      arbeidsgiverReferanse: updatedPeriode.arbeidsgiverReferanse,
      isFromSøknad: updatedPeriode.isFromSøknad,
      updated: true,
      bekreftet: updatedPeriode.bekreftet,
      originalResultat: updatedPeriode.resultat,
    };

    if (kontoType) {
      // @ts-ignore Fiks
      newPeriodeObject.uttakPeriodeType = kontoType;
    }

    if (oppholdArsak) {
      // @ts-ignore Fiks
      newPeriodeObject.oppholdÅrsak = oppholdArsak;
    }

    const newPerioder = createNewPerioder(perioder, id, newPeriodeObject);

    await formChange(
      'UttakFaktaForm',
      'perioder',
      [...newPerioder].sort((a, b) => a.fom.localeCompare(b.fom)),
    );
  }

  isAnyFormOpen(): boolean {
    const { perioder } = this.props;

    return perioder.some((p) => p.openForm);
  }

  addNewPeriod(): void {
    this.newPeriodeResetCallback();
  }

  disableButtons(): boolean {
    const {
      readOnly, openForms, isManuellOverstyring, submitting,
    } = this.props;
    const { isNyPeriodeFormOpen } = this.state;
    return submitting || openForms || isNyPeriodeFormOpen || (readOnly && !isManuellOverstyring);
  }

  render() {
    const {
      readOnly,
      perioder,
      aksjonspunkter,
      førsteUttaksdato,
      endringsdato,
      hasOpenAksjonspunkter,
      kanOverstyre,
      hasRevurderingOvertyringAp,
      isManuellOverstyring,
      uttakPeriodeVurderingTyper,
      getKodeverknavn,
      faktaArbeidsforhold,
      behandlingStatus,
      personoversikt,
      familiehendelse,
      alleKodeverk,
      vilkarForSykdomExists,
      arbeidsgiverOpplysningerPerId,
      submittable,
    } = this.props;
    const {
      periodeSlett, isNyPeriodeFormOpen, showModalSlettPeriode,
    } = this.state;

    const { gjeldende: gjeldeneFamiliehendelse } = familiehendelse;

    const nyPeriodeDisabledDaysFom = førsteUttaksdato || (perioder[0] || {}).fom;
    const familiehendelsedato = findFamiliehendelseDato(gjeldeneFamiliehendelse);
    const sisteUttakdatoFørsteSeksUker = moment(familiehendelsedato).add(6, 'weeks');

    const farSøkerFør6Uker = familiehendelsedato && !gjeldeneFamiliehendelse.omsorgsovertakelseDato
      && (perioder[0] || {}).uttakPeriodeType
      && (perioder[0] || {}).uttakPeriodeType === 'FEDREKVOTE'
      && moment((perioder[0] || {}).fom).isBefore(sisteUttakdatoFørsteSeksUker);

    const aksjonspunktTekster = aksjonspunkter
      .filter((ap) => ap.status === aksjonspunktStatus.OPPRETTET)
      .map((ap) => {
        const førsteUttak = {
          value: moment(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT),
        };

        return (
          <FormattedMessage
            key={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
            id={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon}`}
            values={førsteUttak}
          />
        );
      });

    return (
      <>
        <AksjonspunktHelpTextHTML>
          {aksjonspunktTekster}
        </AksjonspunktHelpTextHTML>
        {aksjonspunktTekster.length > 0 && <VerticalSpacer twentyPx />}
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Element>
                <FormattedMessage id="UttakInfoPanel.SoknadsPeriode" />
              </Element>
            </FlexColumn>
            {kanOverstyre && (
              <FlexColumn className="justifyItemsToFlexEnd">
                <CheckboxField
                  name="faktaUttakManuellOverstyring"
                  label={{ id: 'UttakInfoPanel.ManuellOverstyring' }}
                  readOnly={!readOnly || hasRevurderingOvertyringAp || !kanOverstyre}
                  onClick={() => this.manuellOverstyringResetCallback()}
                />
              </FlexColumn>
            )}
          </FlexRow>
        </FlexContainer>

        <FieldArray
          name="perioder"
          component={UttakPeriode}
          openSlettPeriodeModalCallback={this.openSlettPeriodeModalCallback}
          updatePeriode={this.updatePeriode}
          editPeriode={this.editPeriode}
          cancelEditPeriode={this.cancelEditPeriode}
          isAnyFormOpen={this.isAnyFormOpen}
          isNyPeriodeFormOpen={isNyPeriodeFormOpen}
          perioder={perioder}
          readOnly={readOnly && !isManuellOverstyring}
          endringsdato={endringsdato}
          farSøkerFør6Uker={farSøkerFør6Uker}
          getKodeverknavn={getKodeverknavn}
          behandlingStatus={behandlingStatus}
          familiehendelse={familiehendelse}
          vilkarForSykdomExists={vilkarForSykdomExists}
          sisteUttakdatoFørsteSeksUker={sisteUttakdatoFørsteSeksUker}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
        <VerticalSpacer twentyPx />
        <FlexContainer wrap>
          <FlexRow>
            <FlexColumn>
              { /* @ts-ignore Fiks cannot be used as a JSX component */ }
              <FaktaSubmitButton
                formName="UttakFaktaForm"
                isSubmittable={submittable}
                isReadOnly={this.disableButtons()}
                hasOpenAksjonspunkter={hasOpenAksjonspunkter}
              />
            </FlexColumn>
            <FlexColumn>
              <Knapp mini htmlType="button" onClick={this.addNewPeriod} disabled={this.disableButtons()}>
                <FormattedMessage id="UttakInfoPanel.LeggTilPeriode" />
              </Knapp>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer eightPx />

        {isNyPeriodeFormOpen && (
          /* @ts-ignore Fiks cannot be used as a JSX component */
          <UttakNyPeriode
            newPeriodeCallback={this.newPeriodeCallback}
            newPeriodeResetCallback={this.newPeriodeResetCallback}
            nyPeriodeDisabledDaysFom={nyPeriodeDisabledDaysFom}
            uttakPeriodeVurderingTyper={uttakPeriodeVurderingTyper}
            getKodeverknavn={getKodeverknavn}
            faktaArbeidsforhold={faktaArbeidsforhold}
            personoversikt={personoversikt}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
        {periodeSlett && (
          /* @ts-ignore Fiks cannot be used as a JSX component */
          <UttakSlettPeriodeModal
            showModal={showModalSlettPeriode}
            periode={periodeSlett}
            cancelEvent={this.hideModal}
            closeEvent={this.removePeriode}
            getKodeverknavn={getKodeverknavn}
          />
        )}
      </>
    );
  }
}

const getFørsteUttaksdato = (state: any) => formValueSelector('UttakFaktaForm')(state, 'førsteUttaksdato') || undefined;
const getEndringsdato = (state: any) => formValueSelector('UttakFaktaForm')(state, 'endringsdato') || undefined;
const getSlettedePerioder = (state: any) => formValueSelector('UttakFaktaForm')(state, 'slettedePerioder');
const getPerioder = (state: any) => formValueSelector('UttakFaktaForm')(state, 'perioder');
const manuellOverstyring = (state: any) => formValueSelector('UttakFaktaForm')(state, 'faktaUttakManuellOverstyring') || false;

const EMPTY_ARRAY = [];

const mapStateToProps = (state: any, props: PureOwnProps): MappedOwnProps => {
  const { alleKodeverk } = props;

  return {
    isManuellOverstyring: manuellOverstyring(state) || false,
    openForms: !!getPerioder(state).find((periode: CustomUttakKontrollerFaktaPerioder) => periode.openForm === true),
    førsteUttaksdato: getFørsteUttaksdato(state),
    endringsdato: getEndringsdato(state),
    uttakPeriodeVurderingTyper: alleKodeverk[KodeverkType.UTTAK_PERIODE_VURDERING_TYPE],
    initialValues: getFormInitialValues('UttakFaktaForm')(state),
    slettedePerioder: getSlettedePerioder(state) || EMPTY_ARRAY,
    perioder: getPerioder(state) || EMPTY_ARRAY,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators(
    {
      reduxFormChange,
      reduxFormReset,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(UttakPerioder);
