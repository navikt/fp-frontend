import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  change as reduxFormChange, FieldArray, getFormInitialValues, reset as reduxFormReset,
} from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Element } from 'nav-frontend-typografi';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';

import {
  Aksjonspunkt, FaktaArbeidsforhold, FamilieHendelseSamling, Kodeverk, KodeverkMedNavn, Personopplysninger,
} from '@fpsak-frontend/types';
import { getBehandlingFormPrefix, behandlingFormValueSelector, CheckboxField } from '@fpsak-frontend/form';
import uttakPeriodeVurdering from '@fpsak-frontend/kodeverk/src/uttakPeriodeVurdering';
import { ariaCheck, DDMMYYYY_DATE_FORMAT } from '@fpsak-frontend/utils';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import {
  AksjonspunktHelpText,
  FlexColumn,
  FlexContainer,
  FlexRow,
  VerticalSpacer,
} from '@fpsak-frontend/shared-components';

import UttakPeriode from './UttakPeriode';
import UttakNyPeriode from './UttakNyPeriode';
import UttakSlettPeriodeModal from './UttakSlettPeriodeModal';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const createNewPerioder = (perioder: any, id: number, values: any) => {
  const updatedIndex = perioder.findIndex((p: any) => p.id === id);
  const updatedPeriode = perioder.find((p: any) => p.id === id);

  return [
    ...perioder.slice(0, updatedIndex),
    {
      ...updatedPeriode,
      ...values,
    },
    ...perioder.slice(updatedIndex + 1),
  ];
};

export const findFamiliehendelseDato = (gjeldendeFamiliehendelse: any) => {
  const { termindato, avklartBarn } = gjeldendeFamiliehendelse;

  if (avklartBarn && avklartBarn.length > 0) {
    return avklartBarn[0].fodselsdato;
  }

  return termindato;
};

interface OwnProps {
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  behandlingFormPrefix: string;
  perioder?: CustomUttakKontrollerFaktaPerioder[];
  openForms: boolean;
  reduxFormChange: (...args: any[]) => any;
  reduxFormReset: (...args: any[]) => any;
  submitting: boolean;
  initialValues: {};
  personopplysninger: Personopplysninger;
  uttakPeriodeVurderingTyper: {
    kode?: string;
    name?: string;
  }[];
  aksjonspunkter: Aksjonspunkt[];
  hasRevurderingOvertyringAp: boolean;
  kanOverstyre: boolean;
  getKodeverknavn: (...args: any[]) => any;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  behandlingId: number;
  behandlingVersjon: number;
  behandlingStatus: Kodeverk;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  familiehendelse: FamilieHendelseSamling;
  førsteUttaksdato?: string;
  slettedePerioder?: {}[];
  endringsdato?: string;
  isManuellOverstyring?: boolean;
  vilkarForSykdomExists?: boolean;
}

interface OwnState {
  isNyPeriodeFormOpen: boolean;
  showModalSlettPeriode: boolean;
  periodeSlett: CustomUttakKontrollerFaktaPerioder;
}

export class UttakPerioder extends PureComponent<OwnProps, OwnState> {
  static defaultProps: any;

  constructor(props: OwnProps) {
    super(props);

    const { perioder } = props;

    this.state = {
      isNyPeriodeFormOpen: false,
      showModalSlettPeriode: false,
      periodeSlett: {},
    };

    this.newPeriodeCallback = this.newPeriodeCallback.bind(this);
    this.addNewPeriod = this.addNewPeriod.bind(this);
    this.openSlettPeriodeModalCallback = this.openSlettPeriodeModalCallback.bind(this);
    this.newPeriodeResetCallback = this.newPeriodeResetCallback.bind(this);
    this.removePeriode = this.removePeriode.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.cleaningUpForm = this.cleaningUpForm.bind(this);
    this.updatePeriode = this.updatePeriode.bind(this);
    this.editPeriode = this.editPeriode.bind(this);
    this.cancelEditPeriode = this.cancelEditPeriode.bind(this);
    this.isAnyFormOpen = this.isAnyFormOpen.bind(this);
    this.setNyPeriodeFormRef = this.setNyPeriodeFormRef.bind(this);
  }

  setNyPeriodeFormRef(element: any) {
    if (element) {
      this.nyPeriodeFormRef = element;
      this.nyPeriodeFormRef.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  overrideResultat = (resultat: any) => {
    if (
      [uttakPeriodeVurdering.PERIODE_KAN_IKKE_AVKLARES, uttakPeriodeVurdering.PERIODE_OK].some(
        (type) => type === resultat,
      )
    ) {
      return resultat;
    }
    return uttakPeriodeVurdering.PERIODE_IKKE_VURDERT;
  };

  newPeriodeResetCallback() {
    const { behandlingFormPrefix, reduxFormReset: formReset } = this.props;
    const { isNyPeriodeFormOpen } = this.state;
    formReset(`${behandlingFormPrefix}.nyPeriodeForm`);
    this.setState({ isNyPeriodeFormOpen: !isNyPeriodeFormOpen });
  }

  newPeriodeCallback(nyPeriode: any) {
    const {
      behandlingFormPrefix, perioder, reduxFormChange: formChange,
    } = this.props;
    const { isNyPeriodeFormOpen } = this.state;

    const newPerioder = perioder.concat(nyPeriode).sort((a: any, b: any) => a.fom.localeCompare(b.fom));

    formChange(`${behandlingFormPrefix}.UttakFaktaForm`, 'perioder', newPerioder);

    this.setState({
      isNyPeriodeFormOpen: !isNyPeriodeFormOpen,
    });
  }

  openSlettPeriodeModalCallback(id: any) {
    const { showModalSlettPeriode } = this.state;
    const { perioder } = this.props;
    const periodeSlett = perioder.filter((periode: any) => periode.id === id);
    this.setState({
      showModalSlettPeriode: !showModalSlettPeriode,
      periodeSlett: periodeSlett[0],
    });
  }

  manuellOverstyringResetCallback() {
    const { behandlingFormPrefix, reduxFormReset: formReset } = this.props;
    formReset(`${behandlingFormPrefix}.UttakFaktaForm`);
  }

  removePeriode(values: any) {
    const {
      behandlingFormPrefix,
      perioder,
      slettedePerioder,
      initialValues,
      reduxFormChange: formChange,
    } = this.props;
    const { periodeSlett } = this.state;

    const hasOriginalPeriode = initialValues.perioder.find((p: any) => p.id === periodeSlett.id);

    if (hasOriginalPeriode) {
      formChange(
        `${behandlingFormPrefix}.UttakFaktaForm`,
        'slettedePerioder',
        slettedePerioder.concat([
          {
            ...periodeSlett,
            begrunnelse: values.begrunnelse,
          },
        ]),
      );
    }

    const newPerioder = perioder.filter((periode: any) => periode.id !== periodeSlett.id);

    formChange(`${behandlingFormPrefix}.UttakFaktaForm`, 'perioder', newPerioder);

    this.hideModal();
  }

  hideModal() {
    this.setState({
      showModalSlettPeriode: false,
    });
  }

  cleaningUpForm(id: any) {
    const { behandlingFormPrefix, perioder, reduxFormChange: formChange } = this.props;

    formChange(
      `${behandlingFormPrefix}.UttakFaktaForm`,
      'perioder',
      perioder
        .map((periode: any) => {
          if (periode.id === id) {
            return {
              ...periode,
              begrunnelse: undefined,
              resultat: undefined,
            };
          }
          return { ...periode };
        })
        .sort((a: any, b: any) => a.fom.localeCompare(b.fom)),
    );
  }

  editPeriode(id: any) {
    const { perioder, behandlingFormPrefix, reduxFormChange: formChange } = this.props;

    const newPerioder = createNewPerioder(perioder, id, { openForm: true });

    formChange(`${behandlingFormPrefix}.UttakFaktaForm`, 'perioder', newPerioder);
  }

  cancelEditPeriode(id: any) {
    const { perioder, behandlingFormPrefix, reduxFormChange: formChange } = this.props;

    const newPerioder = createNewPerioder(perioder, id, { openForm: false });

    formChange(`${behandlingFormPrefix}.UttakFaktaForm`, 'perioder', newPerioder);
  }

  async updatePeriode(values: any) {
    const {
      behandlingFormPrefix,
      perioder,
      uttakPeriodeVurderingTyper,
      reduxFormChange: formChange,
      getKodeverknavn,
    } = this.props;
    const {
      resultat, dokumentertePerioder, id, kontoType, nyFom, nyTom, nyArbeidstidsprosent, oppholdArsak,
    } = values;
    const updatedPeriode = perioder.find((p: any) => p.id === id);
    const updatedPeriodeIndex = perioder.findIndex((p: any) => p.id === id);
    const tom = nyTom || updatedPeriode.tom;
    const fom = nyFom || updatedPeriode.fom;
    const newPeriodeObject = {
      id,
      tom,
      fom,
      kontoType,
      resultat: uttakPeriodeVurderingTyper.find((type: any) => type.kode === this.overrideResultat(resultat)),
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
      flerBarnsDager: updatedPeriode.flerBarnsDager,
      morsAktivitet: updatedPeriode.morsAktivitet,
      arbeidsgiver: updatedPeriode.arbeidsgiver,
      isFromSøknad: updatedPeriode.isFromSøknad,
      updated: true,
      bekreftet: updatedPeriode.bekreftet,
      originalResultat: updatedPeriode.resultat,
    };

    if (kontoType) {
      newPeriodeObject.uttakPeriodeType = {
        kode: kontoType,
        navn: uttakPeriodeNavn[kontoType],
        kodeverk: 'UTTAK_PERIODE_TYPE',
      };
    }

    if (oppholdArsak) {
      newPeriodeObject.oppholdÅrsak = {
        kode: oppholdArsak,
        navn: getKodeverknavn(updatedPeriode.oppholdÅrsak),
        kodeverk: updatedPeriode.oppholdÅrsak.kodeverk,
      };
    }

    const newPerioder = await createNewPerioder(perioder, id, newPeriodeObject);

    await formChange(
      `${behandlingFormPrefix}.UttakFaktaForm`,
      'perioder',
      newPerioder.sort((a, b) => a.fom.localeCompare(b.fom)),
    );
  }

  isAnyFormOpen() {
    const { perioder } = this.props;

    return perioder.some((p: any) => p.openForm);
  }

  addNewPeriod() {
    this.newPeriodeResetCallback();
  }

  disableButtons() {
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
      submitting,
      hasOpenAksjonspunkter,
      kanOverstyre,
      hasRevurderingOvertyringAp,
      isManuellOverstyring,
      uttakPeriodeVurderingTyper,
      getKodeverknavn,
      faktaArbeidsforhold,
      behandlingId,
      behandlingVersjon,
      behandlingStatus,
      personopplysninger,
      familiehendelse,
      alleKodeverk,
      vilkarForSykdomExists,
    } = this.props;
    const {
      periodeSlett, isNyPeriodeFormOpen, showModalSlettPeriode,
    } = this.state;
    const nyPeriodeDisabledDaysFom = førsteUttaksdato || (perioder[0] || []).fom;
    const sisteUttakdatoFørsteSeksUker = moment(findFamiliehendelseDato(familiehendelse.gjeldende)).add(6, 'weeks');
    const farSøkerFør6Uker = (perioder[0] || {}).uttakPeriodeType
      && (perioder[0] || {}).uttakPeriodeType.kode === 'FEDREKVOTE'
      && moment((perioder[0] || {}).fom).isBefore(sisteUttakdatoFørsteSeksUker);

    return (
      <>
        {!readOnly && (
          <AksjonspunktHelpText isAksjonspunktOpen={hasOpenAksjonspunkter}>
            {aksjonspunkter.map((ap: any) => {
              const førsteUttak = {
                value: moment(førsteUttaksdato).format(DDMMYYYY_DATE_FORMAT),
              };

              return (
                <FormattedMessage
                  key={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon.kode}`}
                  id={`UttakInfoPanel.Aksjonspunkt.${ap.definisjon.kode}`}
                  values={førsteUttak}
                />
              );
            })}
            <VerticalSpacer eightPx />
            {farSøkerFør6Uker && <FormattedMessage id="UttakInfoPanel.Aksjonspunkt.FarSøkerFør6Uker" />}
          </AksjonspunktHelpText>
        )}
        <VerticalSpacer twentyPx />

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
          cleaningUpForm={this.cleaningUpForm}
          cancelEditPeriode={this.cancelEditPeriode}
          isAnyFormOpen={this.isAnyFormOpen}
          isNyPeriodeFormOpen={isNyPeriodeFormOpen}
          perioder={perioder}
          readOnly={readOnly && !isManuellOverstyring}
          endringsdato={endringsdato}
          farSøkerFør6Uker={farSøkerFør6Uker}
          getKodeverknavn={getKodeverknavn}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          alleKodeverk={alleKodeverk}
          behandlingStatus={behandlingStatus}
          familiehendelse={familiehendelse}
          vilkarForSykdomExists={vilkarForSykdomExists}
          sisteUttakdatoFørsteSeksUker={sisteUttakdatoFørsteSeksUker}
        />
        <VerticalSpacer twentyPx />
        <FlexContainer wrap>
          <FlexRow>
            <FlexColumn>
              <Hovedknapp mini disabled={this.disableButtons()} onClick={ariaCheck} spinner={submitting}>
                <FormattedMessage id="UttakInfoPanel.BekreftOgFortsett" />
              </Hovedknapp>
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
          <div ref={this.setNyPeriodeFormRef}>
            <UttakNyPeriode
              newPeriodeCallback={this.newPeriodeCallback}
              newPeriodeResetCallback={this.newPeriodeResetCallback}
              nyPeriodeDisabledDaysFom={nyPeriodeDisabledDaysFom}
              uttakPeriodeVurderingTyper={uttakPeriodeVurderingTyper}
              getKodeverknavn={getKodeverknavn}
              faktaArbeidsforhold={faktaArbeidsforhold}
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              personopplysninger={personopplysninger}
              alleKodeverk={alleKodeverk}
            />
          </div>
        )}
        <UttakSlettPeriodeModal
          showModal={showModalSlettPeriode}
          periode={periodeSlett}
          cancelEvent={this.hideModal}
          closeEvent={this.removePeriode}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          getKodeverknavn={getKodeverknavn}
        />
      </>
    );
  }
}

UttakPerioder.defaultProps = {
  isManuellOverstyring: false,
  slettedePerioder: [],
  perioder: [],
};

const getFørsteUttaksdato = (state: any, behandlingId: number, behandlingVersjon: number) => behandlingFormValueSelector(
  'UttakFaktaForm', behandlingId, behandlingVersjon,
)(state, 'førsteUttaksdato') || undefined;
const getEndringsdato = (state: any, behandlingId: number, behandlingVersjon: number) => behandlingFormValueSelector(
  'UttakFaktaForm', behandlingId, behandlingVersjon,
)(state, 'endringsdato') || undefined;
const slettedePerioder = (state: any, behandlingId: number, behandlingVersjon: number) => behandlingFormValueSelector(
  'UttakFaktaForm', behandlingId, behandlingVersjon,
)(state, 'slettedePerioder');
const perioder = (state: any, behandlingId: number, behandlingVersjon: number) => behandlingFormValueSelector('UttakFaktaForm',
  behandlingId, behandlingVersjon)(state, 'perioder');
const manuellOverstyring = (state: any, behandlingId: number, behandlingVersjon: number) => behandlingFormValueSelector(
  'UttakFaktaForm',
  behandlingId,
  behandlingVersjon,
)(state, 'faktaUttakManuellOverstyring') || false;

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const mapStateToProps = (state: any, props: PureOwnProps) => {
  const { behandlingId, behandlingVersjon, alleKodeverk } = props;
  const behandlingFormPrefix = getBehandlingFormPrefix(behandlingId, behandlingVersjon);

  return {
    behandlingFormPrefix,
    isManuellOverstyring: manuellOverstyring(state, behandlingId, behandlingVersjon),
    openForms: !!perioder(state, behandlingId, behandlingVersjon).find((periode: CustomUttakKontrollerFaktaPerioder) => periode.openForm === true),
    førsteUttaksdato: getFørsteUttaksdato(state, behandlingId, behandlingVersjon),
    endringsdato: getEndringsdato(state, behandlingId, behandlingVersjon),
    uttakPeriodeVurderingTyper: alleKodeverk[kodeverkTyper.UTTAK_PERIODE_VURDERING_TYPE],
    initialValues: getFormInitialValues(`${behandlingFormPrefix}.UttakFaktaForm`)(state),
    slettedePerioder: slettedePerioder(state, behandlingId, behandlingVersjon),
    perioder: perioder(state, behandlingId, behandlingVersjon),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      reduxFormChange,
      reduxFormReset,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(UttakPerioder);
