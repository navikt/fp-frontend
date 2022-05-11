import React, {
  Component, MouseEvent, KeyboardEvent, ReactElement,
} from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';

import { calcDays, getKodeverknavnFn } from '@navikt/ft-utils';
import {
  AksjonspunktHelpTextTemp, VerticalSpacer, FloatRight, EditedIcon, Image,
} from '@navikt/ft-ui-komponenter';
import splitPeriodImageHoverUrl from '@fpsak-frontend/assets/images/splitt_hover.svg';
import splitPeriodImageUrl from '@fpsak-frontend/assets/images/splitt.svg';
import { TimeLineButton, TimeLineDataContainer } from '@navikt/ft-tidslinje';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ArbeidsgiverOpplysningerPerId, Behandling, AlleKodeverk, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import UttakActivity from './UttakActivity';
import DelOppPeriodeModal, { DeltPeriodeData } from './DelOppPeriodeModal';
import { PeriodeMedClassName, UttaksresultatActivity } from './Uttak';

import styles from './uttakTimeLineData.less';
import { AktivitetFieldArray } from './RenderUttakTable';

const getCorrectEmptyArbeidsForhold = (
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode?: string,
  stonadskonto?: UttakStonadskontoer,
): string[] => {
  const arbeidsForholdMedNullDagerIgjenArray: string[] = [];
  let arbeidsforholdMedPositivSaldoFinnes = false;
  if (stonadskonto && stonadskonto.stonadskontoer[periodeTypeKode] && stonadskonto.stonadskontoer[periodeTypeKode].aktivitetSaldoDtoList) {
    stonadskonto.stonadskontoer[periodeTypeKode].aktivitetSaldoDtoList.forEach((item) => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiverReferanse) {
          const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[item.aktivitetIdentifikator.arbeidsgiverReferanse];
          arbeidsForholdMedNullDagerIgjenArray.push(arbeidsgiverOpplysninger.navn);
        } else {
          arbeidsForholdMedNullDagerIgjenArray.push(getKodeverknavn(item.aktivitetIdentifikator.uttakArbeidType, KodeverkType.UTTAK_ARBEID_TYPE));
        }
      } else {
        arbeidsforholdMedPositivSaldoFinnes = true;
      }
    });
  }
  if (arbeidsforholdMedPositivSaldoFinnes) {
    return arbeidsForholdMedNullDagerIgjenArray;
  }
  return [];
};

const hentApTekst = (
  manuellBehandlingÅrsak: string,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  stonadskonto?: UttakStonadskontoer,
  periodeTypeKode?: string,
): ReactElement[] => {
  const texts = [];

  // Fix - ta bort 5001 med verdi fra kodeverk
  if (manuellBehandlingÅrsak === '5001') {
    const arbeidsForhold = getCorrectEmptyArbeidsForhold(getKodeverknavn, arbeidsgiverOpplysningerPerId, periodeTypeKode, stonadskonto);
    const arbeidsForholdMedNullDagerIgjen = arbeidsForhold.join();
    if (arbeidsForhold.length > 1) {
      texts.push(
        <FormattedMessage
          key="manuellÅrsak"
          id="UttakPanel.manuellBehandlingÅrsakArbeidsforhold"
          values={{ arbeidsforhold: arbeidsForholdMedNullDagerIgjen }}
        />,
      );
    } else if (arbeidsForhold.length === 1) {
      texts.push(
        <FormattedMessage
          key="manuellÅrsak"
          id="UttakPanel.manuellBehandlingÅrsakEnskiltArbeidsforhold"
          values={{ arbeidsforhold: arbeidsForhold }}
        />,
      );
    } else {
      texts.push(
        <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
          {getKodeverknavn(manuellBehandlingÅrsak, KodeverkType.MANUELL_BEHANDLING_AARSAK)}
        </React.Fragment>,
      );
    }
  } else {
    texts.push(
      <React.Fragment key={`kode-${manuellBehandlingÅrsak}`}>
        {getKodeverknavn(manuellBehandlingÅrsak, KodeverkType.MANUELL_BEHANDLING_AARSAK)}
      </React.Fragment>);
  }

  return texts;
};

export const kalkulerTrekkdager = (aktivitet: AktivitetFieldArray, virkedager: number, samtidigUttak?: boolean, samtidigUttaksprosent?: number) => {
  let uttaksgrad = aktivitet.gradering ? (100 - aktivitet.prosentArbeid) / 100 : 1;
  uttaksgrad = samtidigUttak ? samtidigUttaksprosent / 100 : uttaksgrad;

  const trekkdager = uttaksgrad * virkedager;

  return {
    weeks: Math.trunc(trekkdager / 5),
    days: parseFloat((trekkdager % 5).toFixed(1)),
    trekkdagerDesimaler: trekkdager,
  };
};

interface OwnProps {
  activityPanelName: string;
  callbackBackward: (event: MouseEvent) => void;
  callbackCancelSelectedActivity: () => void;
  callbackForward: (event: MouseEvent) => void;
  callbackSetSelected: (uttakActivity: UttaksresultatActivity, isMounting?: boolean) => void;
  callbackUpdateActivity: (data: PeriodeMedClassName) => void;
  formName: string;
  harSoktOmFlerbarnsdager: boolean;
  isApOpen?: boolean;
  readOnly: boolean;
  reduxFormChange: (...args: any[]) => any;
  selectedItemData?: PeriodeMedClassName;
  stonadskonto?: UttakStonadskontoer;
  uttaksresultatActivity: UttaksresultatActivity[];
  alleKodeverk: AlleKodeverk;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kreverSammenhengendeUttak: boolean;
}

interface OwnState {
  showDelPeriodeModal: boolean;
}

export class UttakTimeLineData extends Component<OwnProps & WrappedComponentProps, OwnState> {
  constructor(props: OwnProps & WrappedComponentProps) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.splitPeriod = this.splitPeriod.bind(this);

    this.state = {
      showDelPeriodeModal: false,
    };
  }

  setFormField(fieldName: string, fieldValue: UttaksresultatActivity[]): void {
    const { formName, reduxFormChange: formChange } = this.props;
    formChange(formName, fieldName, fieldValue);
  }

  showModal(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    this.setState({
      showDelPeriodeModal: true,
    });
    const { reduxFormChange: formChange } = this.props;
    formChange('DelOppPeriode', 'ForstePeriodeTomDato', null);
  }

  hideModal(): void {
    this.setState({
      showDelPeriodeModal: false,
    });
  }

  splitPeriod(formValues: DeltPeriodeData): void {
    const { uttaksresultatActivity, activityPanelName, callbackSetSelected: setSelected } = this.props;
    const {
      periodeId, forstePeriode, andrePeriode, hovedsoker,
    } = formValues;

    const periodeSomSkalSplittes = uttaksresultatActivity.find((o) => o.id === periodeId);
    const alleAndrePerioder = uttaksresultatActivity.filter((o) => o.id !== periodeId);
    const nyId = periodeId + 1;

    const virkedagerForPeriode1 = calcDays(forstePeriode.fom, forstePeriode.tom);
    const virkedagerForPeriode2 = calcDays(andrePeriode.fom, andrePeriode.tom);

    const { samtidigUttak, samtidigUttaksprosent, aktiviteter } = periodeSomSkalSplittes;
    const oppdaterteAktiviteterPeriode1 = aktiviteter
      .map((aktivitet) => (aktivitet.trekkdagerDesimaler > 0 ? {
        ...aktivitet,
        ...kalkulerTrekkdager(aktivitet, virkedagerForPeriode1, samtidigUttak, samtidigUttaksprosent),
      } : aktivitet));
    const oppdaterteAktiviteterPeriode2 = aktiviteter
      .map((aktivitet) => (aktivitet.trekkdagerDesimaler > 0 ? {
        ...aktivitet,
        ...kalkulerTrekkdager(aktivitet, virkedagerForPeriode2, samtidigUttak, samtidigUttaksprosent),
      } : aktivitet));

    const nyPeriode1 = {
      ...periodeSomSkalSplittes,
      fom: forstePeriode.fom,
      tom: forstePeriode.tom,
      begrunnelse: periodeSomSkalSplittes.begrunnelse ? periodeSomSkalSplittes.begrunnelse : ' ',
      aktiviteter: oppdaterteAktiviteterPeriode1,
      hovedsoker,
    };
    const nyPeriode2 = {
      ...periodeSomSkalSplittes,
      id: nyId,
      fom: andrePeriode.fom,
      tom: andrePeriode.tom,
      begrunnelse: periodeSomSkalSplittes.begrunnelse ? periodeSomSkalSplittes.begrunnelse : ' ',
      aktiviteter: oppdaterteAktiviteterPeriode2,
      hovedsoker,
    };

    alleAndrePerioder.forEach((p) => {
      if (p.id >= nyId) {
        // eslint-disable-next-line no-param-reassign
        p.id += 1;
      }
    });

    const sorterteAktiviteter = alleAndrePerioder.concat(nyPeriode1, nyPeriode2);
    sorterteAktiviteter.sort((a, b) => a.id - b.id);

    this.setFormField(activityPanelName, sorterteAktiviteter);
    this.hideModal();
    setSelected(nyPeriode1);
  }

  render() {
    const {
      callbackBackward,
      callbackCancelSelectedActivity,
      callbackForward,
      callbackUpdateActivity,
      harSoktOmFlerbarnsdager,
      alleKodeverk,
      behandlingsresultat,
      intl,
      isApOpen = false,
      readOnly,
      selectedItemData,
      stonadskonto,
      arbeidsgiverOpplysningerPerId,
      kreverSammenhengendeUttak,
    } = this.props;
    const { showDelPeriodeModal } = this.state;
    const isEdited = !!selectedItemData.begrunnelse && !isApOpen;
    const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

    return (
      <TimeLineDataContainer key={`selectedItemData_${selectedItemData.id}`}>
        <Row>
          <Column xs="3">
            <Element>
              <FormattedMessage id="UttakTimeLineData.PeriodeData.Detaljer" />
              {isEdited && <EditedIcon />}
            </Element>
          </Column>
          <Column xs="7">
            {!readOnly
                && (
                  <span className={styles.splitPeriodPosition}>
                    <Image
                      tabIndex={0}
                      className={styles.splitPeriodImage}
                      src={splitPeriodImageUrl}
                      srcHover={splitPeriodImageHoverUrl}
                      alt={intl.formatMessage({ id: 'UttakTimeLineData.PeriodeData.DelOppPerioden' })}
                      onMouseDown={this.showModal}
                      onKeyDown={(e) => (e.key === 'Enter' ? this.showModal(e) : null)}
                    />
                    <FormattedMessage id="UttakTimeLineData.PeriodeData.DelOppPerioden" />
                  </span>
                )}
            {showDelPeriodeModal
                && (
                  /* @ts-ignore Fiks cannot be used as a JSX component */
                  <DelOppPeriodeModal
                    cancelEvent={this.hideModal}
                    showModal={showDelPeriodeModal}
                    periodeData={selectedItemData}
                    splitPeriod={this.splitPeriod}
                    intl={intl}
                  />
                )}
          </Column>
          <Column xs="2">
            <FloatRight>
              <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={callbackBackward} />
              <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={callbackForward} />
            </FloatRight>
          </Column>
        </Row>
        {selectedItemData.manuellBehandlingÅrsak && selectedItemData.manuellBehandlingÅrsak !== '-' && (
        <>
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={selectedItemData.manuellBehandlingÅrsak !== null}>
            {selectedItemData.periodeType
              ? hentApTekst(selectedItemData.manuellBehandlingÅrsak, getKodeverknavn, arbeidsgiverOpplysningerPerId, stonadskonto,
                selectedItemData.periodeType)
              : hentApTekst(selectedItemData.manuellBehandlingÅrsak, getKodeverknavn, arbeidsgiverOpplysningerPerId, stonadskonto)}
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
        </>
        )}
        { /* @ts-ignore Fiks cannot be used as a JSX component */ }
        <UttakActivity
          cancelSelectedActivity={callbackCancelSelectedActivity}
          updateActivity={callbackUpdateActivity}
          selectedItemData={selectedItemData}
          readOnly={readOnly}
          harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
          alleKodeverk={alleKodeverk}
          behandlingsresultat={behandlingsresultat}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          kreverSammenhengendeUttak={kreverSammenhengendeUttak}
        />
      </TimeLineDataContainer>
    );
  }
}

export default injectIntl(UttakTimeLineData);
