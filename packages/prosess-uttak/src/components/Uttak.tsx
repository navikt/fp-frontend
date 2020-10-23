import React, { Component, MouseEvent } from 'react';
import moment from 'moment';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { change as reduxFormChange, initialize as reduxFormInitialize } from 'redux-form';
import { bindActionCreators } from 'redux';
import { FormattedMessage, IntlShape, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';

import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import oppholdArsakType, { oppholdArsakMapper } from '@fpsak-frontend/kodeverk/src/oppholdArsakType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import navBrukerKjonn from '@fpsak-frontend/kodeverk/src/navBrukerKjonn';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  ISO_DATE_FORMAT, getKodeverknavnFn, calcDays, calcDaysAndWeeks, DDMMYY_DATE_FORMAT,
} from '@fpsak-frontend/utils';
import { CheckboxField, getBehandlingFormPrefix, behandlingFormValueSelector } from '@fpsak-frontend/form';
import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import soknadType from '@fpsak-frontend/kodeverk/src/soknadType';
import { Tidslinje, EventProps } from '@fpsak-frontend/tidslinje';
import {
  Aksjonspunkt, Behandling, Fagsak, FamilieHendelseSamling, Kodeverk, KodeverkMedNavn,
  Personopplysninger, Soknad, UttakPeriodeGrense, UttaksresultatPeriode, Ytelsefordeling, AvklartBarn, UttakStonadskontoer, PeriodeSoker,
} from '@fpsak-frontend/types';
import Kjønnkode from '@fpsak-frontend/types/src/Kjønnkode';
import { TidslinjeTimes } from '@fpsak-frontend/tidslinje/src/Tidslinje';

import TimeLineInfo from './stonadkonto/TimeLineInfo';
import UttakTimeLineData from './UttakTimeLineData';
import UttakMedsokerReadOnly from './UttakMedsokerReadOnly';
import UttakTidslinjeHjelpetekster from './UttakTidslinjeHjelpetekster';
import { AktivitetFieldArray } from './RenderUttakTable';

import styles from './uttak.less';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export type UttaksresultatActivity = Overwrite<PeriodeSoker, {
  id: number;
  tilknyttetStortinget?: boolean;
  erOppfylt?: boolean;
  aktiviteter: AktivitetFieldArray[];
 }>

export type PeriodeMedClassName = {
  tomMoment: moment.Moment;
  className: string;
  hovedsoker: boolean;
  group: number;
  title: string;
} & UttaksresultatActivity

const godkjentKlassenavn = 'godkjentPeriode';
const avvistKlassenavn = 'avvistPeriode';
const endretClassnavn = 'endretPeriode';
const ACTIVITY_PANEL_NAME = 'uttaksresultatActivity';
const STONADSKONTOER_TEMP = 'stonadskonto';
const parseDateString = (dateString: string) => moment(dateString, ISO_DATE_FORMAT).toDate();

const fodselsdato = (soknadsType: string, omsorgsOvertagelseDato: string, endredFodselsDato?: string, familiehendelseDate?: string) => {
  if (soknadsType === soknadType.FODSEL) {
    return (endredFodselsDato || familiehendelseDate);
  }
  return omsorgsOvertagelseDato;
};

const getCustomTimes = (
  barnFraTps: AvklartBarn[],
  familiehendelse: FamilieHendelseSamling,
  isRevurdering: boolean,
  person: Personopplysninger,
  soknadDate: string,
  soknadsType: string,
  endredFodselsDato?: string,
  endringsdato?: string,
  familiehendelseDate?: string,
  omsorgsOvertagelseDato?: string,
): TidslinjeTimes => {
  // TODO: trumfa tps med avklartebarn fra lösningen - blir TPS-barn en del av dem?

  const gjeldendeFamiliehendelse = familiehendelse?.gjeldende;

  const dodeBarn = gjeldendeFamiliehendelse
    && !gjeldendeFamiliehendelse.brukAntallBarnFraTps
    && gjeldendeFamiliehendelse.avklartBarn
    && gjeldendeFamiliehendelse.avklartBarn.length > 0
    ? gjeldendeFamiliehendelse.avklartBarn.filter((barn) => barn.dodsdato) : barnFraTps.filter((barn) => barn.dodsdato);

  const customTimesBuilder = {
    soknad: soknadDate,
    fodsel: fodselsdato(soknadsType, omsorgsOvertagelseDato, endredFodselsDato, familiehendelseDate),
    revurdering: isRevurdering ? endringsdato : '1950-01-01',
    dodSoker: person && person.dodsdato ? person.dodsdato : '1950-01-01',
  };

  dodeBarn.forEach((barn, index: number) => {
    Object.defineProperty(customTimesBuilder, `${`barndod${index}`}`, {
      value: parseDateString(barn.dodsdato), enumerable: true,
    });
  });
  return customTimesBuilder;
};

const isInnvilget = (uttaksresultatActivity: UttaksresultatActivity) => uttaksresultatActivity.periodeResultatType.kode === periodeResultatType.INNVILGET;

interface PureOwnProps {
  intl: IntlShape;
  submitting: boolean;
  isDirty: boolean;
  formName: string;
  manuellOverstyring: boolean;
  person: Personopplysninger;
  familiehendelse: FamilieHendelseSamling;
  uttakPeriodeGrense: UttakPeriodeGrense;
  ytelsefordeling: Ytelsefordeling;
  behandlingId: number;
  behandlingVersjon: number;
  behandlingType: Kodeverk;
  behandlingStatus: Kodeverk;
  fagsak: Fagsak;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  readOnly: boolean;
  isApOpen: boolean;
  aksjonspunkter: Aksjonspunkt[];
  employeeHasAccess: boolean;
  uttaksresultat: UttaksresultatPeriode;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  mottattDato: Soknad['mottattDato'];
  fodselsdatoer?: Soknad['fodselsdatoer'];
  termindato?: Soknad['termindato'];
  adopsjonFodelsedatoer?: Soknad['adopsjonFodelsedatoer'];
  soknadsType: string;
  omsorgsovertakelseDato?: string;
  tempUpdateStonadskontoer: (...args: any[]) => any;
}

interface MappedOwnProps {
  annenForelderSoktOmFlerbarnsdager: boolean;
  barnFraTps: AvklartBarn[];
  behandlingFormPrefix: string;
  endredFodselsDato?: string;
  endringsdato?: string;
  familiehendelseDate?: string;
  harSoktOmFlerbarnsdager: boolean;
  hovedsokerKjonnKode?: Kjønnkode;
  isRevurdering: boolean;
  medsokerKjonnKode: Kjønnkode;
  saksnummer: number;
  soknadDate: string;
  stonadskonto: UttakStonadskontoer;
  uttakPerioder: PeriodeMedClassName[];
  uttaksresultatActivity: UttaksresultatActivity[];
}

interface DispatchProps {
  reduxFormChange: (...args: any[]) => any;
  reduxFormInitialize: (...args: any[]) => any;
}

interface OwnState {
  selectedItem?: PeriodeMedClassName;
  stonadskonto: UttakStonadskontoer;
}

/**
 * Uttak
 * Presentationskomponent. Masserer data og populerer felten samt formatterar tidslinjen for uttak
 */
export class Uttak extends Component<PureOwnProps & MappedOwnProps & DispatchProps, OwnState> {
  static defaultProps = {
    aksjonspunkter: [],
    barnFraTps: [],
    isApOpen: false,
    isRevurdering: false,
    manuellOverstyring: false,
  };

  constructor(props: PureOwnProps & MappedOwnProps & DispatchProps & WrappedComponentProps) {
    super(props);
    this.cancelSelectedActivity = this.cancelSelectedActivity.bind(this);
    this.ikkeGyldigForbruk = this.ikkeGyldigForbruk.bind(this);
    this.initializeActivityForm = this.initializeActivityForm.bind(this);
    this.isConfirmButtonDisabled = this.isConfirmButtonDisabled.bind(this);
    this.isReadOnly = this.isReadOnly.bind(this);
    this.nextPeriod = this.nextPeriod.bind(this);
    this.onToggleOverstyring = this.onToggleOverstyring.bind(this);
    this.openPeriodInfo = this.openPeriodInfo.bind(this);
    this.prevPeriod = this.prevPeriod.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.setSelectedDefaultPeriod = this.setSelectedDefaultPeriod.bind(this);
    this.setSelectedUttakActivity = this.setSelectedUttakActivity.bind(this);
    this.skalViseCheckbox = this.skalViseCheckbox.bind(this);
    this.testForReadOnly = this.testForReadOnly.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.updateStonadskontoer = this.updateStonadskontoer.bind(this);

    this.state = {
      selectedItem: undefined,
      stonadskonto: props.stonadskonto,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.setSelectedDefaultPeriod();
  }

  onToggleOverstyring() {
    const { selectedItem } = this.state;
    const { uttakPerioder } = this.props;
    if (!selectedItem) {
      this.setState({
        selectedItem: uttakPerioder[0],
      });
    }
  }

  setSelectedDefaultPeriod() {
    const { selectedItem } = this.state;
    const { uttakPerioder } = this.props;
    const defaultSelectedElement = uttakPerioder.find((period) => period.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING);
    const defaultSelectedElementIfNoAP = uttakPerioder.find((period) => period.hovedsoker);
    if (!selectedItem) {
      this.setState({ selectedItem: defaultSelectedElement || defaultSelectedElementIfNoAP });
    }
  }

  setSelectedUttakActivity(uttakActivity: PeriodeMedClassName, isMounting?: boolean) {
    if (!isMounting) {
      this.initializeActivityForm(uttakActivity);
    }
    this.setState({ selectedItem: uttakActivity });
  }

  setFormField(fieldName: string, fieldValue: PeriodeMedClassName[]) {
    const { reduxFormChange: formChange, behandlingFormPrefix, formName } = this.props;
    formChange(`${behandlingFormPrefix}.${formName}`, fieldName, fieldValue);
  }

  updateStonadskontoer(perioder: PeriodeMedClassName[]) {
    const {
      tempUpdateStonadskontoer: updateKontoer,
      reduxFormChange: formChange,
      behandlingFormPrefix,
      formName,
      behandlingId,
      saksnummer,
    } = this.props;

    const transformedResultat = perioder.map((periode) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { tilknyttetStortinget, ...uta } = periode; // NOSONAR destruct er bedre enn delete, immutable
      const { ...transformActivity } = uta;
      if (uta.oppholdÅrsak.kode !== '-') {
        uta.aktiviteter = [];
      }

      const transformAktiviteter = uta.aktiviteter.map((a) => {
        const { days, weeks, ...transformAktivitet } = a;
        if (typeof days !== 'undefined' && typeof weeks !== 'undefined') {
          const trekkdager = (weeks * 5) + days;
          transformAktivitet.trekkdagerDesimaler = trekkdager; // regner om uker og dager til trekkdager
        }
        return transformAktivitet;
      });
      transformActivity.aktiviteter = transformAktiviteter;
      return transformActivity;
    });

    const params = {
      behandlingId: {
        saksnummer,
        behandlingId,
      },
      perioder: transformedResultat,
    };

    updateKontoer(params).then((response: UttakStonadskontoer) => {
      this.setState({ stonadskonto: response });
      formChange(`${behandlingFormPrefix}.${formName}`, STONADSKONTOER_TEMP, response);
    });
  }

  initializeActivityForm(uttakActivity: PeriodeMedClassName) {
    const { reduxFormInitialize: formInitialize, behandlingFormPrefix } = this.props;
    formInitialize(`${behandlingFormPrefix}.${ACTIVITY_PANEL_NAME}`, uttakActivity);
  }

  updateActivity(values: PeriodeMedClassName) {
    const { uttakPerioder } = this.props;
    const { ...verdier } = values;
    verdier.aktiviteter = verdier.aktiviteter.map((a) => {
      const { ...aktivitet } = a;
      // @ts-ignore utbetalingsgrad må vel konverterast?
      aktivitet.utbetalingsgrad = a.utbetalingsgrad || a.utbetalingsgrad === 0 ? parseFloat(a.utbetalingsgrad) : null;
      return aktivitet;
    });

    const otherThanUpdated = uttakPerioder.filter((o) => o.id !== verdier.id && o.hovedsoker);
    const sortedActivities = otherThanUpdated.concat(verdier);
    sortedActivities.sort((a, b) => a.id - b.id);
    this.updateStonadskontoer(sortedActivities);
    this.setFormField(ACTIVITY_PANEL_NAME, sortedActivities);
    const uttakActivity = otherThanUpdated.find((o) => o.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING
        || (o.tilknyttetStortinget && !Object.prototype.hasOwnProperty.call(o, 'erOppfylt')));
    this.setSelectedUttakActivity(uttakActivity || undefined);
  }

  cancelSelectedActivity() {
    // TODO Bør heller senda med undefined?
    this.initializeActivityForm({} as PeriodeMedClassName);
    this.setState({ selectedItem: undefined });
  }

  openPeriodInfo(event: MouseEvent) {
    const { uttakPerioder } = this.props;
    const { selectedItem: currentSelectedItem } = this.state;
    if (currentSelectedItem) {
      this.setSelectedUttakActivity(undefined);
    } else {
      const activity = uttakPerioder.find((item: PeriodeMedClassName) => item.id === 1);
      this.setSelectedUttakActivity(activity);
    }
    event.preventDefault();
  }

  selectHandler(eventProps: EventProps) {
    const { uttakPerioder } = this.props;
    const { selectedItem: currentSelectedItem } = this.state;
    const selectedItem = uttakPerioder.find((item: PeriodeMedClassName) => item.id === eventProps.items[0]);
    if (currentSelectedItem) {
      this.setState({ selectedItem: undefined });
      this.setSelectedUttakActivity(selectedItem);
    } else {
      this.setSelectedUttakActivity(selectedItem);
    }
    eventProps.event.preventDefault();
  }

  nextPeriod(event: MouseEvent) {
    const { uttakPerioder } = this.props;
    const { selectedItem } = this.state;
    const newIndex = uttakPerioder.findIndex((item) => item.id === selectedItem.id) + 1;
    if (newIndex < uttakPerioder.length) {
      this.setSelectedUttakActivity(uttakPerioder[newIndex]);
    }
    event.preventDefault();
  }

  prevPeriod(event: MouseEvent) {
    const { uttakPerioder } = this.props;
    const { selectedItem } = this.state;
    const newIndex = uttakPerioder.findIndex((item) => item.id === selectedItem.id) - 1;
    if (newIndex >= 0) {
      this.setSelectedUttakActivity(uttakPerioder[newIndex]);
    }
    event.preventDefault();
  }

  testForReadOnly(aksjonspunkter: Aksjonspunkt[], kanOverstyre: boolean) {
    const { manuellOverstyring } = this.props;
    const kunOverStyrAp = aksjonspunkter.length === 1
        && aksjonspunkter[0].definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER
        && aksjonspunkter[0].status.kode === 'OPPR';
    if (kunOverStyrAp && kanOverstyre) {
      return !kunOverStyrAp;
    }

    const activeUttakAp = aksjonspunkter.filter((ap) => ap.definisjon.kode !== aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER);
    return (activeUttakAp.length < 1 || (activeUttakAp[0].toTrinnsBehandlingGodkjent === true && activeUttakAp[0].status.kode === 'UTFO'))
        && !manuellOverstyring;
  }

  ikkeGyldigForbruk() {
    const { stonadskonto } = this.props;
    let validationError = false;
    if (stonadskonto && stonadskonto.stonadskontoer) {
      const kontoer = stonadskonto.stonadskontoer;
      Object.values(kontoer).forEach((periode) => {
        if (!periode.gyldigForbruk) {
          validationError = true;
        }
      });
    }
    return validationError;
  }

  isConfirmButtonDisabled() {
    const {
      uttaksresultatActivity, readOnly, submitting, isDirty,
    } = this.props;

    if (uttaksresultatActivity.every(isInnvilget)) {
      return false;
    }

    if (this.ikkeGyldigForbruk()) {
      return true;
    }

    if (!(uttaksresultatActivity.some((ac) => Object.prototype.hasOwnProperty.call(ac, 'erOppfylt')))) {
      return true;
    }
    const ikkeOppfylt = uttaksresultatActivity.some((ac) => (!Object.prototype.hasOwnProperty.call(ac, 'erOppfylt') && ac.tilknyttetStortinget)
        || ac.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING);

    if (!isDirty || ikkeOppfylt) {
      return true;
    }
    return submitting || readOnly;
  }

  isReadOnly() {
    const {
      readOnly, aksjonspunkter, endringsdato, isRevurdering, employeeHasAccess,
    } = this.props;
    const { selectedItem } = this.state;
    const uttakIsReadOnly = this.testForReadOnly(aksjonspunkter, employeeHasAccess) || (endringsdato && isRevurdering && selectedItem.tom < endringsdato);
    return readOnly || uttakIsReadOnly;
  }

  skalViseCheckbox() {
    const { aksjonspunkter } = this.props;
    const kunOverStyrAp = aksjonspunkter.length === 1
        && aksjonspunkter[0].definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER
        && aksjonspunkter[0].status.kode === 'OPPR';
    const apUtenOverstyre = aksjonspunkter.filter((a) => a.definisjon.kode !== aksjonspunktCodes.OVERSTYRING_AV_UTTAKPERIODER);
    return apUtenOverstyre.length > 0 || kunOverStyrAp;
  }

  render() {
    const {
      aksjonspunkter,
      annenForelderSoktOmFlerbarnsdager,
      barnFraTps,
      behandlingFormPrefix,
      endredFodselsDato,
      endringsdato,
      familiehendelse,
      familiehendelseDate,
      formName,
      behandlingId,
      behandlingVersjon,
      harSoktOmFlerbarnsdager,
      hovedsokerKjonnKode,
      isApOpen,
      isRevurdering,
      employeeHasAccess,
      medsokerKjonnKode,
      omsorgsovertakelseDato,
      person,
      readOnly,
      reduxFormChange: formChange,
      soknadDate,
      soknadsType,
      submitting,
      uttakPerioder,
      uttaksresultatActivity,
      alleKodeverk,
      behandlingsresultat,
    } = this.props;
    const { selectedItem, stonadskonto } = this.state;
    const customTimes = getCustomTimes(
      barnFraTps,
      familiehendelse,
      isRevurdering,
      person,
      soknadDate,
      soknadsType,
      endredFodselsDato,
      endringsdato,
      familiehendelseDate,
      omsorgsovertakelseDato,
    );
    return (
      <div>
        <Row>
          {employeeHasAccess
              && (
                <div className={styles.manuell}>
                  <CheckboxField
                    key="manuellOverstyring"
                    name="manuellOverstyring"
                    label={{ id: 'Uttak.ManuellOverstyring' }}
                    onChange={this.onToggleOverstyring}
                    readOnly={isApOpen}
                  />
                </div>
              )}
        </Row>
        {this.testForReadOnly(aksjonspunkter, employeeHasAccess)
            && <FormattedMessage id="Uttak.Overstyrt" />}
        <div>
          <Row>
            <TimeLineInfo
              maksDatoUttak={stonadskonto.maksDatoUttak}
              stonadskonto={stonadskonto.stonadskontoer}
            />
          </Row>
          <VerticalSpacer twentyPx />
          <Row>
            <Column xs="12">
              <Tidslinje
                customTimes={customTimes}
                hovedsokerKjonnKode={hovedsokerKjonnKode}
                medsokerKjonnKode={medsokerKjonnKode}
                openPeriodInfo={this.openPeriodInfo}
                selectedPeriod={selectedItem}
                selectPeriodCallback={this.selectHandler}
                uttakPerioder={uttakPerioder}
              >
                <UttakTidslinjeHjelpetekster />
              </Tidslinje>
            </Column>
          </Row>
          {selectedItem
              && (
                <>
                  {selectedItem.hovedsoker
                    && (
                      <UttakTimeLineData
                        activityPanelName={ACTIVITY_PANEL_NAME}
                        behandlingFormPrefix={behandlingFormPrefix}
                        callbackBackward={this.prevPeriod}
                        callbackCancelSelectedActivity={this.cancelSelectedActivity}
                        callbackForward={this.nextPeriod}
                        callbackSetSelected={this.setSelectedUttakActivity}
                        callbackUpdateActivity={this.updateActivity}
                        formName={formName}
                        harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
                        isApOpen={isApOpen}
                        readOnly={this.isReadOnly()}
                        reduxFormChange={formChange}
                        selectedItemData={selectedItem}
                        stonadskonto={stonadskonto}
                        uttaksresultatActivity={uttaksresultatActivity}
                        alleKodeverk={alleKodeverk}
                        behandlingId={behandlingId}
                        behandlingVersjon={behandlingVersjon}
                        behandlingsresultat={behandlingsresultat}
                      />
                    )}
                  {!selectedItem.hovedsoker
                    && (
                      <UttakMedsokerReadOnly
                        readOnly
                        selectedItemData={selectedItem}
                        callbackForward={this.nextPeriod}
                        callbackBackward={this.prevPeriod}
                        callbackUpdateActivity={this.updateActivity}
                        callbackCancelSelectedActivity={this.cancelSelectedActivity}
                        harSoktOmFlerbarnsdager={annenForelderSoktOmFlerbarnsdager}
                        alleKodeverk={alleKodeverk}
                        behandlingId={behandlingId}
                        behandlingVersjon={behandlingVersjon}
                        behandlingsresultat={behandlingsresultat}
                      />
                    )}
                </>
              )}
          {(!readOnly && !(this.testForReadOnly(aksjonspunkter, employeeHasAccess)))
              && (
                <div className={styles.marginTop}>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <Hovedknapp
                          mini
                          disabled={this.isConfirmButtonDisabled() || submitting}
                          spinner={submitting}
                        >
                          <FormattedMessage id="Uttak.Confirm" />
                        </Hovedknapp>
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                </div>
              )}
        </div>
      </div>
    );
  }
}

const determineMottatDato = (soknadsDato: string, mottatDato: string) => {
  if (moment(mottatDato) < moment(soknadsDato)) {
    return mottatDato;
  }
  return soknadsDato;
};

const getBarnFraTpsRelatertTilSoknad = createSelector([(props: PureOwnProps) => props.familiehendelse.register],
  (register) => (register ? register.avklartBarn : []));

const getFodselTerminDato = createSelector(
  [(props: PureOwnProps) => props.termindato,
    (props: PureOwnProps) => props.fodselsdatoer,
    (props: PureOwnProps) => props.adopsjonFodelsedatoer,
    (props: PureOwnProps) => props.familiehendelse.gjeldende],
  (termindato, fodselsdatoer, adopsjonFodelsedatoer, familiehendelse) => {
    if (familiehendelse && familiehendelse.avklartBarn && familiehendelse.avklartBarn.length > 0) {
      return familiehendelse.avklartBarn[0].fodselsdato;
    }
    if (fodselsdatoer && Object.keys(fodselsdatoer).length > 0) {
      return Object.values(fodselsdatoer)[0];
    }
    if (termindato) {
      return termindato;
    }
    if (adopsjonFodelsedatoer && Object.keys(adopsjonFodelsedatoer).length > 0) {
      return Object.values(adopsjonFodelsedatoer)[0];
    }
    return undefined;
  },
);

const lagUttakMedOpphold = createSelector(
  [(state: any, props: PureOwnProps) => behandlingFormValueSelector(props.formName, props.behandlingId, props.behandlingVersjon)(state, ACTIVITY_PANEL_NAME)],
  (uttaksresultatActivity: UttaksresultatActivity[]) => uttaksresultatActivity.map((uttak): UttaksresultatActivity => {
    const { ...uttakPerioder } = uttak;

    if (uttak.oppholdÅrsak.kode !== oppholdArsakType.UDEFINERT) {
      const stonadskonto = oppholdArsakMapper[uttak.oppholdÅrsak.kode];
      const oppholdInfo = {
        stønadskontoType: {
          kode: stonadskonto,
          kodeverk: uttak.oppholdÅrsak.kodeverk,
          navn: uttakPeriodeNavn[stonadskonto],
        },
        trekkdagerDesimaler: calcDays(uttak.fom, uttak.tom),
      };
      uttakPerioder.aktiviteter = [oppholdInfo];
    }
    return uttakPerioder;
  }),
);

const lagUttaksresultatActivity = createSelector(
  [lagUttakMedOpphold,
    (_state, props: PureOwnProps) => props.aksjonspunkter,
    (_state, props: PureOwnProps) => props.isApOpen],
  (uttakMedOpphold, aksjonspunkter, isApOpen) => {
    const tilknyttetStortinget = !!aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.TILKNYTTET_STORTINGET && isApOpen);
    return uttakMedOpphold.map((periode: UttaksresultatActivity): UttaksresultatActivity => ({
      tilknyttetStortinget,
      ...periode,
    }));
  },
);

const getStatusPeriodeHoved = (periode: UttaksresultatActivity | PeriodeSoker) => {
  if ('erOppfylt' in periode && periode.erOppfylt === false) {
    return avvistKlassenavn;
  }
  if (('erOppfylt' in periode && periode.erOppfylt === true) || (periode.periodeResultatType.kode === periodeResultatType.INNVILGET
    // @ts-ignore Fiks
    && !periode.tilknyttetStortinget)) {
    return godkjentKlassenavn;
  }
  if (periode.periodeResultatType.kode === periodeResultatType.MANUELL_BEHANDLING
    // @ts-ignore Fiks
    || periode.tilknyttetStortinget
  ) {
    return 'undefined';
  }
  return avvistKlassenavn;
};

const getStatusPeriodeMed = (periode: UttaksresultatActivity | PeriodeSoker) => {
  // @ts-ignore Fiks
  if (periode.periodeResultatType.kode === periodeResultatType.INNVILGET && !periode.tilknyttetStortinget) {
    return godkjentKlassenavn;
  }
  return avvistKlassenavn;
};

const createTooltipContent = (periodeType: string, intl: IntlShape, item: UttaksresultatActivity | PeriodeSoker) => (`
    <p>
      ${moment(item.fom).format(DDMMYY_DATE_FORMAT)} - ${moment(item.tom).format(DDMMYY_DATE_FORMAT)}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       ${intl.formatMessage({ id: calcDaysAndWeeks(item.fom, item.tom).id },
    {
      weeks: calcDaysAndWeeks(item.fom, item.tom).weeks,
      days: calcDaysAndWeeks(item.fom, item.tom).days,
    })}
      </br>
      ${item.utsettelseType && item.utsettelseType.kode !== '-'
    ? intl.formatMessage({ id: 'Timeline.tooltip.utsettelsePeriode' }) : periodeType}
     </p>
  `);

const getCorrectPeriodName = (item: UttaksresultatActivity | PeriodeSoker, getKodeverknavn: (kodeverk: Kodeverk) => string) => {
  if (item.utsettelseType && item.utsettelseType.kode !== '-') {
    return (<FormattedMessage id="Timeline.tooltip.slutt" />);
  }

  if (item.aktiviteter.length > 0 && item.aktiviteter[0].stønadskontoType) {
    return getKodeverknavn(item.aktiviteter[0].stønadskontoType);
  }

  if (item.oppholdÅrsak !== oppholdArsakType.UDEFINERT) {
    const stonadskonto = oppholdArsakMapper[item.oppholdÅrsak.kode];
    return uttakPeriodeNavn[stonadskonto];
  }

  return '';
};

const addClassNameGroupIdToPerioder = (
  hovedsokerPerioder: UttaksresultatActivity[],
  uttakResultatPerioder: UttaksresultatPeriode,
  intl: IntlShape,
  bStatus: Kodeverk,
  alleKodeverk: {[key: string]: KodeverkMedNavn[]},
  hovedsoker: boolean,
): PeriodeMedClassName[] => {
  const behandlingStatusKode = bStatus.kode;
  const annenForelderPerioder = uttakResultatPerioder.perioderAnnenpart;
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
  const perioderMedClassName: PeriodeMedClassName[] = [];
  const perioder = hovedsoker ? hovedsokerPerioder : annenForelderPerioder;

  perioder.forEach((item: UttaksresultatActivity | PeriodeSoker, index: number) => {
    const stonadskontoType = getCorrectPeriodName(item, getKodeverknavn);
    const opphold = item.oppholdÅrsak.kode !== oppholdArsakType.UDEFINERT;
    const status = hovedsoker ? getStatusPeriodeHoved(item) : getStatusPeriodeMed(item);
    const gradert = (item.gradertAktivitet && item.graderingInnvilget) ? 'gradert' : '';
    const copyOfItem = { ...item } as PeriodeMedClassName;
    const isEndret = item.begrunnelse
      && behandlingStatusKode === behandlingStatus.FATTER_VEDTAK ? endretClassnavn : '';
    const oppholdStatus = status === 'undefined' ? 'opphold-manuell' : 'opphold';
    copyOfItem.id = index + 1 + (hovedsoker ? 0 : hovedsokerPerioder.length);
    copyOfItem.tomMoment = moment(item.tom).add(1, 'days');
    copyOfItem.className = opphold ? oppholdStatus : `${status} ${isEndret} ${gradert}`;
    copyOfItem.hovedsoker = hovedsoker;
    copyOfItem.group = annenForelderPerioder.length > 0 && hovedsoker ? 2 : 1;
    copyOfItem.title = createTooltipContent(stonadskontoType, intl, item);
    perioderMedClassName.push(copyOfItem);
  });
  return perioderMedClassName;
};

const addClassNameGroupIdToPerioderHovedsoker = createSelector(
  [lagUttakMedOpphold,
    (_state, props: PureOwnProps) => props.uttaksresultat,
    (_state, props: PureOwnProps) => props.intl,
    (_state, props: PureOwnProps) => props.behandlingStatus,
    (_state, props: PureOwnProps) => props.alleKodeverk],
  (hovedsokerPerioder, uttakResultatPerioder, intl, bStatus, alleKodeverk) => addClassNameGroupIdToPerioder(
    hovedsokerPerioder, uttakResultatPerioder, intl, bStatus, alleKodeverk, true,
  ),
);

const addClassNameGroupIdToPerioderAnnenForelder = createSelector(
  [lagUttakMedOpphold,
    (_state, props: PureOwnProps) => props.uttaksresultat,
    (_state, props: PureOwnProps) => props.intl,
    (_state, props: PureOwnProps) => props.behandlingStatus,
    (_state, props: PureOwnProps) => props.alleKodeverk],
  (hovedsokerPerioder, uttakResultatPerioder, intl, bStatus, alleKodeverk) => addClassNameGroupIdToPerioder(
    hovedsokerPerioder, uttakResultatPerioder, intl, bStatus, alleKodeverk, false,
  ),
);

const slaSammenHovedsokerOgAnnenForelder = createSelector(
  [addClassNameGroupIdToPerioderHovedsoker, addClassNameGroupIdToPerioderAnnenForelder],
  (hovedsokerPerioder, annenForelderPerioder) => hovedsokerPerioder.concat(annenForelderPerioder),
);

const mapStateToProps = (state: any, props: PureOwnProps) => {
  const {
    person,
    mottattDato,
    formName,
    familiehendelse,
    uttaksresultat,
    uttakPeriodeGrense,
    ytelsefordeling,
    behandlingId,
    behandlingVersjon,
    fagsak,
  } = props;
  const periodeGrenseMottatDato = uttakPeriodeGrense.mottattDato;
  const hovedsokerKjonnKode = person ? person.navBrukerKjonn.kode : undefined;
  const annenForelderUttak = uttaksresultat.perioderAnnenpart;
  const viseUttakMedsoker = annenForelderUttak.length > 0;
  const getMedsokerKjonnKode = (viseUttakMedsoker && person && person.annenPart) ? person.annenPart.navBrukerKjonn.kode : undefined;
  // hvis ukjent annenpart og annenpart uttak, vis ukjent ikon
  const medsokerKjonnKode = viseUttakMedsoker && getMedsokerKjonnKode === undefined ? navBrukerKjonn.UDEFINERT : getMedsokerKjonnKode;
  const hovedsokerPerioder = addClassNameGroupIdToPerioderHovedsoker(state, props);
  const annenForelderPerioder = addClassNameGroupIdToPerioderAnnenForelder(state, props);

  /*
  @TODO clean up interface
  const personer = [person];
  if (viseUttakMedsoker && person && person.annenPart) {
    personer.push(person.annenPart.navBrukerKjonn);
  }
  */
  const { gjeldende } = familiehendelse;

  return {
    annenForelderSoktOmFlerbarnsdager: annenForelderPerioder.filter((p) => p.flerbarnsdager === true).length > 0,
    barnFraTps: getBarnFraTpsRelatertTilSoknad(props),
    behandlingFormPrefix: getBehandlingFormPrefix(behandlingId, behandlingVersjon),
    endredFodselsDato: gjeldende && gjeldende.avklartBarn && gjeldende.avklartBarn.length > 0 ? gjeldende.avklartBarn[0].fodselsdato : undefined,
    endringsdato: ytelsefordeling.endringsdato ? ytelsefordeling.endringsdato : undefined,
    familiehendelse,
    familiehendelseDate: getFodselTerminDato(props),
    harSoktOmFlerbarnsdager: hovedsokerPerioder.filter((p) => p.flerbarnsdager === true).length > 0,
    hovedsokerKjonnKode,
    isRevurdering: props.behandlingType === behandlingType.REVURDERING,
    medsokerKjonnKode,
    person,
    saksnummer: fagsak.saksnummer,
    soknadDate: determineMottatDato(periodeGrenseMottatDato, mottattDato),
    stonadskonto: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'stonadskonto'),
    uttakPerioder: slaSammenHovedsokerOgAnnenForelder(state, props),
    uttaksresultatActivity: lagUttaksresultatActivity(state, props),
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  ...bindActionCreators({
    reduxFormChange,
    reduxFormInitialize,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Uttak);
