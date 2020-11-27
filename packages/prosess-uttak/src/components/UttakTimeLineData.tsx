import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';

import { calcDays, getKodeverknavnFn } from '@fpsak-frontend/utils';
import {
  AksjonspunktHelpTextTemp, EditedIcon, Image, VerticalSpacer, FloatRight,
} from '@fpsak-frontend/shared-components';
import splitPeriodImageHoverUrl from '@fpsak-frontend/assets/images/splitt_hover.svg';
import splitPeriodImageUrl from '@fpsak-frontend/assets/images/splitt.svg';
import { TimeLineButton, TimeLineDataContainer } from '@fpsak-frontend/tidslinje';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  ArbeidsgiverOpplysningerPerId,
  Behandling, Kodeverk, KodeverkMedNavn, UttakStonadskontoer,
} from '@fpsak-frontend/types';
import UttakActivity from './UttakActivity';
import DelOppPeriodeModal, { DeltPeriodeData } from './DelOppPeriodeModal';
import { PeriodeMedClassName, UttaksresultatActivity } from './Uttak';

import styles from './uttakTimeLineData.less';
import { AktivitetFieldArray } from './RenderUttakTable';

const getCorrectEmptyArbeidsForhold = (
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  periodeTypeKode?: string,
  stonadskonto?: UttakStonadskontoer,
) => {
  const arbeidsForholdMedNullDagerIgjenArray: string[] = [];
  let arbeidsforholdMedPositivSaldoFinnes = false;
  if (stonadskonto && stonadskonto.stonadskontoer[periodeTypeKode] && stonadskonto.stonadskontoer[periodeTypeKode].aktivitetSaldoDtoList) {
    stonadskonto.stonadskontoer[periodeTypeKode].aktivitetSaldoDtoList.forEach((item) => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiverReferanse) {
          const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[item.aktivitetIdentifikator.arbeidsgiverReferanse];
          arbeidsForholdMedNullDagerIgjenArray.push(arbeidsgiverOpplysninger.navn);
        } else {
          arbeidsForholdMedNullDagerIgjenArray.push(getKodeverknavn(item.aktivitetIdentifikator.uttakArbeidType));
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
  manuellBehandlingÅrsak: Kodeverk,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  stonadskonto?: UttakStonadskontoer,
  periodeTypeKode?: string,
) => {
  const texts = [];

  // TODO: Fix - ta bort 5001 med verdi fra kodeverk
  if (manuellBehandlingÅrsak.kode === '5001') {
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
        <React.Fragment key={`kode-${manuellBehandlingÅrsak.kode}`}>
          {getKodeverknavn(manuellBehandlingÅrsak)}
        </React.Fragment>,
      );
    }
  } else {
    texts.push(<React.Fragment key={`kode-${manuellBehandlingÅrsak.kode}`}>{getKodeverknavn(manuellBehandlingÅrsak)}</React.Fragment>);
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
  behandlingFormPrefix: string;
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
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  behandlingVersjon: number;
  behandlingId: number;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
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

  setFormField(fieldName: string, fieldValue: UttaksresultatActivity[]) {
    const { behandlingFormPrefix, formName, reduxFormChange: formChange } = this.props;
    formChange(`${behandlingFormPrefix}.${formName}`, fieldName, fieldValue);
  }

  showModal(event: MouseEvent | KeyboardEvent) {
    event.preventDefault();
    this.setState({
      showDelPeriodeModal: true,
    });
    const { behandlingFormPrefix, reduxFormChange: formChange } = this.props;
    formChange(`${behandlingFormPrefix}.${'DelOppPeriode'}`, 'ForstePeriodeTomDato', null);
  }

  hideModal() {
    this.setState({
      showDelPeriodeModal: false,
    });
  }

  splitPeriod(formValues: DeltPeriodeData) {
    const { uttaksresultatActivity, activityPanelName, callbackSetSelected: setSelected } = this.props;
    const {
      periodeId, forstePeriode, andrePeriode, hovedsoker,
    } = formValues;

    const periodeSomSkalSplittes = uttaksresultatActivity.find((o) => o.id === periodeId);
    const alleAndrePerioder = uttaksresultatActivity.filter((o) => o.id !== periodeId);
    const nyId = periodeId + 1;

    const virkedagerForPeriode1 = calcDays(forstePeriode.fom, forstePeriode.tom);
    const virkedagerForPeriode2 = calcDays(andrePeriode.fom, andrePeriode.tom);

    const { samtidigUttak, samtidigUttaksprosent } = periodeSomSkalSplittes;
    const oppdaterteAktiviteterPeriode1 = periodeSomSkalSplittes.aktiviteter
      .map((aktivitet) => ({
        ...aktivitet,
        ...kalkulerTrekkdager(aktivitet, virkedagerForPeriode1, samtidigUttak, samtidigUttaksprosent),
      }));
    const oppdaterteAktiviteterPeriode2 = periodeSomSkalSplittes.aktiviteter
      .map((aktivitet) => ({
        ...aktivitet,
        ...kalkulerTrekkdager(aktivitet, virkedagerForPeriode2, samtidigUttak, samtidigUttaksprosent),
      }));

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
      behandlingId,
      behandlingVersjon,
      behandlingsresultat,
      intl,
      isApOpen = false,
      readOnly,
      selectedItemData,
      stonadskonto,
      arbeidsgiverOpplysningerPerId,
    } = this.props;
    const { showDelPeriodeModal } = this.state;
    const isEdited = !!selectedItemData.begrunnelse && !isApOpen;
    const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);

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
                      onKeyDown={(e) => (e.keyCode === 13 ? this.showModal(e) : null)}
                    />
                    <FormattedMessage id="UttakTimeLineData.PeriodeData.DelOppPerioden" />
                  </span>
                )}
            {showDelPeriodeModal
                && (
                  <DelOppPeriodeModal
                    cancelEvent={this.hideModal}
                    showModal={showDelPeriodeModal}
                    periodeData={selectedItemData}
                    splitPeriod={this.splitPeriod}
                    behandlingId={behandlingId}
                    behandlingVersjon={behandlingVersjon}
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
        {selectedItemData.manuellBehandlingÅrsak && selectedItemData.manuellBehandlingÅrsak.kode !== '-' && (
        <>
          <AksjonspunktHelpTextTemp isAksjonspunktOpen={selectedItemData.manuellBehandlingÅrsak !== null}>
            {selectedItemData.periodeType
              ? hentApTekst(selectedItemData.manuellBehandlingÅrsak, getKodeverknavn, arbeidsgiverOpplysningerPerId, stonadskonto,
                selectedItemData.periodeType.kode)
              : hentApTekst(selectedItemData.manuellBehandlingÅrsak, getKodeverknavn, arbeidsgiverOpplysningerPerId, stonadskonto)}
          </AksjonspunktHelpTextTemp>
          <VerticalSpacer twentyPx />
        </>
        )}
        <UttakActivity
          cancelSelectedActivity={callbackCancelSelectedActivity}
          updateActivity={callbackUpdateActivity}
          selectedItemData={selectedItemData}
          readOnly={readOnly}
          harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
          alleKodeverk={alleKodeverk}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          behandlingsresultat={behandlingsresultat}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      </TimeLineDataContainer>
    );
  }
}

export default injectIntl(UttakTimeLineData);
