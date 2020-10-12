import React, { Component } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';

import { calcDays, getKodeverknavnFn } from '@fpsak-frontend/utils';
import {
  AksjonspunktHelpText, EditedIcon, Image, VerticalSpacer, FloatRight,
} from '@fpsak-frontend/shared-components';
import splitPeriodImageHoverUrl from '@fpsak-frontend/assets/images/splitt_hover.svg';
import splitPeriodImageUrl from '@fpsak-frontend/assets/images/splitt.svg';
import { TimeLineButton, TimeLineDataContainer } from '@fpsak-frontend/tidslinje';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { Behandling, KodeverkMedNavn, UttakStonadskontoer } from '@fpsak-frontend/types';
import UttakActivity from './UttakActivity';
import DelOppPeriodeModal from './DelOppPeriodeModal';

import styles from './uttakTimeLineData.less';
import { PeriodeMedClassName, UttaksresultatActivity } from './Uttak';

const getCorrectEmptyArbeidsForhold = (preiodeTypeKode: any, arbeidsForhold: any, getKodeverknavn: any) => {
  const arbeidsForholdMedNullDagerIgjenArray: any = [];
  let arbeidsforholdMedPositivSaldoFinnes = false;
  if (arbeidsForhold.stonadskontoer[preiodeTypeKode] && arbeidsForhold.stonadskontoer[preiodeTypeKode].aktivitetSaldoDtoList) {
    arbeidsForhold.stonadskontoer[preiodeTypeKode].aktivitetSaldoDtoList.forEach((item: any) => {
      if (item.saldo === 0) {
        if (item.aktivitetIdentifikator.arbeidsgiver) {
          arbeidsForholdMedNullDagerIgjenArray.push(item.aktivitetIdentifikator.arbeidsgiver.navn);
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

const hentApTekst = (manuellBehandlingÅrsak: any, stonadskonto: any, getKodeverknavn: any, aktiviteter: any) => {
  const texts = [];

  // TODO: Fix - ta bort 5001 med verdi fra kodeverk
  if (manuellBehandlingÅrsak.kode === '5001') {
    const arbeidsForhold = getCorrectEmptyArbeidsForhold(aktiviteter, stonadskonto, getKodeverknavn);
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

export const kalkulerTrekkdager = (aktivitet: any, samtidigUttak: any, samtidigUttaksprosent: any, virkedager: any) => {
  let uttaksgrad = aktivitet.gradering ? (100 - aktivitet.prosentArbeid) / 100 : 1;
  uttaksgrad = samtidigUttak ? samtidigUttaksprosent / 100 : uttaksgrad;

  const trekkdager = uttaksgrad * virkedager;

  return {
    weeks: Math.trunc(trekkdager / 5),
    days: (trekkdager % 5).toFixed(1),
    trekkdagerDesimaler: trekkdager,
  };
};

interface OwnProps {
  activityPanelName: string;
  behandlingFormPrefix: string;
  callbackBackward: (event: any) => void;
  callbackCancelSelectedActivity: () => void;
  callbackForward: (event: any) => void;
  callbackSetSelected: (uttakActivity: any, isMounting: boolean) => void;
  callbackUpdateActivity: (values: any) => void;
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
  behandlingsresultat: Behandling['behandlingsresultat'];
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

  setFormField(fieldName: any, fieldValue: any) {
    const { behandlingFormPrefix, formName, reduxFormChange: formChange } = this.props;
    formChange(`${behandlingFormPrefix}.${formName}`, fieldName, fieldValue);
  }

  showModal(event: any) {
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

  splitPeriod(formValues: any) {
    const { uttaksresultatActivity, activityPanelName, callbackSetSelected: setSelected } = this.props;
    const {
      periodeId, forstePeriode, andrePeriode, hovedsoker,
    } = formValues;

    const periodeSomSkalSplittes = uttaksresultatActivity.find((o: any) => o.id === periodeId);
    const alleAndrePerioder = uttaksresultatActivity.filter((o: any) => o.id !== periodeId);
    const nyId = periodeId + 1;

    const virkedagerForPeriode1 = calcDays(forstePeriode.fom, forstePeriode.tom);
    const virkedagerForPeriode2 = calcDays(andrePeriode.fom, andrePeriode.tom);

    const { samtidigUttak, samtidigUttaksprosent } = periodeSomSkalSplittes;
    const oppdaterteAktiviteterPeriode1 = periodeSomSkalSplittes.aktiviteter
      .map((aktivitet: any) => ({
        ...aktivitet,
        ...kalkulerTrekkdager(aktivitet, samtidigUttak, samtidigUttaksprosent, virkedagerForPeriode1),
      }));
    const oppdaterteAktiviteterPeriode2 = periodeSomSkalSplittes.aktiviteter
      .map((aktivitet: any) => ({
        ...aktivitet,
        ...kalkulerTrekkdager(aktivitet, samtidigUttak, samtidigUttaksprosent, virkedagerForPeriode2),
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

    alleAndrePerioder.forEach((p: any) => {
      if (p.id >= nyId) {
        // eslint-disable-next-line no-param-reassign
        p.id += 1;
      }
    });

    const sorterteAktiviteter = alleAndrePerioder.concat(nyPeriode1, nyPeriode2);
    sorterteAktiviteter.sort((a: any, b: any) => a.id - b.id);

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
      isApOpen,
      readOnly,
      selectedItemData,
      stonadskonto,
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
          <AksjonspunktHelpText isAksjonspunktOpen={selectedItemData.manuellBehandlingÅrsak !== null}>
            {selectedItemData.periodeType
              ? hentApTekst(selectedItemData.manuellBehandlingÅrsak, stonadskonto, getKodeverknavn, selectedItemData.periodeType.kode)
              : hentApTekst(selectedItemData.manuellBehandlingÅrsak, stonadskonto, getKodeverknavn)}
          </AksjonspunktHelpText>
          <VerticalSpacer twentyPx />
        </>
        )}
        <UttakActivity
          cancelSelectedActivity={callbackCancelSelectedActivity}
          updateActivity={callbackUpdateActivity}
          selectedItemData={selectedItemData}
          readOnly={readOnly}
          isApOpen={isApOpen}
          harSoktOmFlerbarnsdager={harSoktOmFlerbarnsdager}
          alleKodeverk={alleKodeverk}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          behandlingsresultat={behandlingsresultat}
        />
      </TimeLineDataContainer>
    );
  }
}

UttakTimeLineData.defaultProps = {
  isApOpen: false,
  stonadskonto: {},
};

export default injectIntl(UttakTimeLineData);
