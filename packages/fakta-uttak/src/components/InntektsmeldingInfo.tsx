import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import classnames from 'classnames/bind';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  calcDaysAndWeeks, dateFormat, flatten, guid, TIDENES_ENDE,
} from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexRow, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel.svg';
import { Kodeverk } from '@fpsak-frontend/types';

import styles from './uttakPeriode.less';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const classNames = classnames.bind(styles);
/**
 * @TODO Denne komponenten MÅ refaktoreres...
 */

const renderAvvikContentGraderingFraSøknad = () => {
  const intl = useIntl();
  return (
    <React.Fragment key={guid()}>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Image src={advarselIkonUrl} alt={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })} />
        </FlexColumn>
        <FlexColumn>
          <Normaltekst className={classNames('avvik', 'hasAvvik')}>
            <b><FormattedMessage id="UttakInfoPanel.Gradering" /></b>
            :

            <FormattedMessage id="UttakInfoPanel.IkkeOppgittGradering" />
          </Normaltekst>
        </FlexColumn>
      </FlexRow>
    </React.Fragment>
  );
};

const renderAvvikContentUtsettelseFraSøknad = (utsettelseArsak: any, getKodeverknavn: any) => {
  const intl = useIntl();
  return (
    <React.Fragment key={guid()}>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Image src={advarselIkonUrl} alt={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })} />
        </FlexColumn>
        <FlexColumn>
          <Normaltekst className={classNames('avvik', 'hasAvvik')}>
            <FormattedMessage
              id="UttakInfoPanel.IkkeOppgittUtsettelse"
              values={{
                b: (chunks: any) => <b>{chunks}</b>,
                årsak: getKodeverknavn(utsettelseArsak),
                årsakLowerCase: getKodeverknavn(utsettelseArsak).toLowerCase(),
              }}
            />
          </Normaltekst>
        </FlexColumn>
      </FlexRow>
    </React.Fragment>
  );
};

const renderAvvikContent = (periode: any, avvik: any, getKodeverknavn: any) => {
  const {
    fom, tom, arbeidsprosent,
  } = periode;
  const { isAvvikPeriode, isAvvikArbeidsprosent, isAvvikUtsettelse } = avvik;
  const numberOfDaysAndWeeks = calcDaysAndWeeks(fom, tom);
  const isGradering = arbeidsprosent !== undefined && arbeidsprosent !== null;
  const tidenesEnde = tom === TIDENES_ENDE;
  const intl = useIntl();
  return (
    <>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Image src={advarselIkonUrl} alt={intl.formatMessage({ id: 'HelpText.Aksjonspunkt' })} />
        </FlexColumn>
        <FlexColumn>
          {!isGradering && (
            <Normaltekst className={classNames('avvik', { hasAvvik: isAvvikUtsettelse })}>
              {`${getKodeverknavn(periode.utsettelseArsak)}:`}
            </Normaltekst>
          )}
          {isGradering && (
            <Element>
              <FormattedMessage id="UttakInfoPanel.Gradering" />
              :
            </Element>
          )}
        </FlexColumn>
        <FlexColumn>
          <Normaltekst className={classNames('avvik', { hasAvvik: isAvvikPeriode })}>
            {`${dateFormat(fom)} - ${tidenesEnde ? '' : dateFormat(tom)}`}
          </Normaltekst>
          <Undertekst>
            <FormattedMessage
              id={numberOfDaysAndWeeks.id}
              values={{
                weeks: numberOfDaysAndWeeks.weeks,
                days: numberOfDaysAndWeeks.days,
              }}
            />
          </Undertekst>
          {isGradering
          && (
            <>
              <VerticalSpacer eightPx />
              <Normaltekst><FormattedMessage id="UttakInfoPanel.AndelIArbeid" /></Normaltekst>
              <Undertekst className={classNames('avvik', { hasAvvik: isAvvikArbeidsprosent })}>
                {`${periode.arbeidsprosent}%`}
              </Undertekst>
            </>
          )}
        </FlexColumn>
      </FlexRow>
    </>
  );
};

const renderAvvik = (innmldInfo: any, getKodeverknavn: any) => {
  const {
    isManglendeInntektsmelding, avvik, graderingPerioder, utsettelsePerioder,
  } = innmldInfo;
  const inntektsmeldingInfoPerioder = graderingPerioder.concat(utsettelsePerioder);

  if (isManglendeInntektsmelding) {
    if (avvik.utsettelseÅrsak) {
      return [renderAvvikContentUtsettelseFraSøknad(avvik.utsettelseÅrsak, getKodeverknavn)];
    }
    return [renderAvvikContentGraderingFraSøknad()];
  }

  return inntektsmeldingInfoPerioder.map((periode: any) => renderAvvikContent(periode, avvik, getKodeverknavn));
};

const shouldRender = (inntektsmeldingInfo: any, getKodeverknavn: any) => {
  const avvik = flatten(inntektsmeldingInfo.map((innmldInfo: any) => renderAvvik(innmldInfo, getKodeverknavn)));
  const filteredAvvik = avvik.filter((av: any) => av);

  return filteredAvvik.length > 0;
};

interface OwnProps {
  inntektsmeldingInfo: {}[];
  getKodeverknavn: (kodeverk: Kodeverk) => string;
  arbeidsgiver?: CustomUttakKontrollerFaktaPerioder['arbeidsgiver'];
}

export const InntektsmeldingInfo: FunctionComponent<OwnProps> = ({
  inntektsmeldingInfo,
  arbeidsgiver,
  getKodeverknavn,
}) => {
  const shouldRenderAvvik = shouldRender(inntektsmeldingInfo, getKodeverknavn);
  return (
    <>
      {shouldRenderAvvik && (
        <>
          <Undertekst><FormattedMessage id="UttakInfoPanel.AvvikiInntektsmelding" /></Undertekst>
          <VerticalSpacer eightPx />
          {inntektsmeldingInfo.map((innmldInfo: any) => {
            const renderContent = renderAvvik(innmldInfo, getKodeverknavn).filter((rc: any) => rc);
            const avvikArbeidforhold = innmldInfo.arbeidsgiver !== arbeidsgiver || {}.navn || innmldInfo.arbeidsgiverOrgnr !== arbeidsgiver || {}.identifikator;
            return (
              renderContent.length > 0 && (
              <React.Fragment key={guid()}>
                <Element className={classNames('avvik', { hasAvvik: avvikArbeidforhold })}>
                  {`${innmldInfo.arbeidsgiver} ${innmldInfo.arbeidsgiverOrgnr}`}
                </Element>
                {renderContent}
                <VerticalSpacer twentyPx />
              </React.Fragment>
              ));
          })}
        </>
      )}
    </>
  );
};

InntektsmeldingInfo.defaultProps = {
  arbeidsgiver: {},
};

export default InntektsmeldingInfo;
