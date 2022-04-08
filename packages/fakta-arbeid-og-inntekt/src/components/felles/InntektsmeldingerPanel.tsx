import React, {
  FunctionComponent, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Lenke from 'nav-frontend-lenker';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import {
  Image, FlexColumn, FlexRow, Tooltip,
} from '@navikt/ft-ui-komponenter';

import { getKodeverknavnFraKode } from '@fpsak-frontend/utils/src/kodeverkUtils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { TIDENES_ENDE } from '@fpsak-frontend/utils';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FloatRight, PeriodLabel, AvsnittSkiller, DateLabel,
} from '@fpsak-frontend/shared-components';

import { Column, Row } from 'nav-frontend-grid';
import styles from './inntektsmeldingerPanel.less';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';

const erMatch = (
  arbeidsforhold: AoIArbeidsforhold,
  inntektsmelding: Inntektsmelding,
): boolean => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
  && (!inntektsmelding.internArbeidsforholdId || inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const finnInntektsmelding = (
  inntektsmeldinger: Inntektsmelding[],
  internArbeidsforholdId?: string,
) => {
  const harImMedId = inntektsmeldinger.some((i) => i.internArbeidsforholdId);
  const harImUtenId = inntektsmeldinger.some((i) => !i.internArbeidsforholdId);
  if (harImMedId && harImUtenId) {
    throw Error('Har inntektsmelding både med og uten id');
  }

  return inntektsmeldinger.find((i) => !i.internArbeidsforholdId || i.internArbeidsforholdId === internArbeidsforholdId);
};

const delOppAId = (eksternArbeidsforholdId: string) => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, (i * 25) + 25));
  return <p>{oppdeltId.join('-')}</p>;
};

interface OwnProps {
  saksnummer: string;
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsmeldingerForRad: Inntektsmelding[];
  alleKodeverk: AlleKodeverk;
}

const InntektsmeldingerPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  arbeidsforholdForRad,
  inntektsmeldingerForRad,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const [visInfoOmIm, toggleInfoOmIm] = useState({});

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  return (
    <>
      {!harEttArbeidsforhold && (
        <>
          <VerticalSpacer eightPx />
          <AvsnittSkiller dividerParagraf className={styles.skiller} />
          <VerticalSpacer sixteenPx />
          {arbeidsforholdForRad.map((a) => {
            const inntektsmelding = inntektsmeldingerForRad.find((i) => erMatch(a, i));
            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <Row>
                  <Column xs="7" className={styles.forsteKolonne}>
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        {a.eksternArbeidsforholdId.length < 50 && (
                          <Normaltekst>{a.eksternArbeidsforholdId}</Normaltekst>
                        )}
                        {a.eksternArbeidsforholdId.length >= 50 && (
                          <Tooltip
                            content={delOppAId(a.eksternArbeidsforholdId)}
                            alignBottom
                          >
                            <Normaltekst>{`${a.eksternArbeidsforholdId.substring(0, 50)}...`}</Normaltekst>
                          </Tooltip>
                        )}
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer fourPx />
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        <Normaltekst>
                          <PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom !== TIDENES_ENDE ? a.tom : undefined} />
                        </Normaltekst>
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer fourPx />
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        <Normaltekst>{`${a.stillingsprosent}%`}</Normaltekst>
                      </FlexColumn>
                    </FlexRow>
                    {a.permisjonOgMangel && (
                      <>
                        <VerticalSpacer fourPx />
                        <FlexRow>
                          <FlexColumn>
                            <Element>
                              {getKodeverknavnFraKode(alleKodeverk, KodeverkType.PERMISJONSBESKRIVELSE_TYPE, a.permisjonOgMangel.type)}
                            </Element>
                          </FlexColumn>
                          <FlexColumn>
                            <Normaltekst>
                              <PeriodLabel dateStringFom={a.permisjonOgMangel.permisjonFom} dateStringTom={a.permisjonOgMangel.permisjonTom} />
                            </Normaltekst>
                          </FlexColumn>
                        </FlexRow>
                      </>
                    )}
                    {inntektsmelding && (
                      <>
                        {visInfoOmIm[a.internArbeidsforholdId] && (
                          <InntektsmeldingOpplysningerPanel
                            saksnummer={saksnummer}
                            inntektsmelding={inntektsmelding}
                            skalViseArbeidsforholdId={false}
                          />
                        )}
                        <VerticalSpacer fourPx />
                        <Lenke
                          onClick={(e) => {
                            e.preventDefault();
                            toggleInfoOmIm((info) => {
                              const status = info[a.internArbeidsforholdId];
                              return {
                                ...info,
                                [a.internArbeidsforholdId]: status === undefined || status === false,
                              };
                            });
                          }}
                          href=""
                        >
                          <span>
                            <Normaltekst className={styles.inline}>
                              <FormattedMessage
                                id={!visInfoOmIm[a.internArbeidsforholdId]
                                  ? 'ArbeidsforholdInformasjonPanel.ApneImInfo' : 'ArbeidsforholdInformasjonPanel.LukkeImInfo'}
                              />
                            </Normaltekst>
                          </span>
                          <Image className={styles.arrow} src={visInfoOmIm[a.internArbeidsforholdId] ? pilOppIkonUrl : pilNedIkonUrl} />
                        </Lenke>
                      </>
                    )}
                  </Column>
                  {inntektsmelding && (
                    <Column xs="5" className={styles.sisteKolonne}>
                      <FloatRight>
                        <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" /></Element>
                        <FloatRight>
                          <Normaltekst><DateLabel dateString={inntektsmelding.motattDato} /></Normaltekst>
                        </FloatRight>
                      </FloatRight>
                    </Column>
                  )}
                  {!inntektsmelding && (
                    <Column xs="5" className={styles.sisteKolonne}>
                      <FloatRight>
                        <Image className={styles.aksjonpunktImage} alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={advarselIkonUrl} />
                        <div className={styles.ikkeMottatt}>
                          <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" /></Element>
                        </div>
                      </FloatRight>
                    </Column>
                  )}
                </Row>
                <VerticalSpacer sixteenPx />
                <AvsnittSkiller dividerParagraf className={styles.skiller} />
                <VerticalSpacer sixteenPx />
              </React.Fragment>
            );
          })}
        </>
      )}
      <VerticalSpacer eightPx />
      {harEttArbeidsforhold && inntektsmeldingerForRad.length > 0 && (
        <InntektsmeldingOpplysningerPanel
          saksnummer={saksnummer}
          arbeidsforhold={arbeidsforholdForRad[0]}
          inntektsmelding={finnInntektsmelding(inntektsmeldingerForRad, arbeidsforholdForRad[0].internArbeidsforholdId)}
          skalViseArbeidsforholdId={inntektsmeldingerForRad.length > 1}
          alleKodeverk={alleKodeverk}
        />
      )}
      {harEttArbeidsforhold && inntektsmeldingerForRad.length === 0 && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{`${arbeidsforholdForRad[0].stillingsprosent}%`}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          {arbeidsforholdForRad[0].permisjonOgMangel && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Element>
                    {getKodeverknavnFraKode(alleKodeverk,
                      KodeverkType.PERMISJONSBESKRIVELSE_TYPE, arbeidsforholdForRad[0].permisjonOgMangel.type)}
                  </Element>
                </FlexColumn>
                <FlexColumn>
                  <Normaltekst>
                    <PeriodLabel
                      dateStringFom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonFom}
                      dateStringTom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonTom}
                    />
                  </Normaltekst>
                </FlexColumn>
              </FlexRow>
            </>
          )}
        </>
      )}
    </>
  );
};

export default InntektsmeldingerPanel;
