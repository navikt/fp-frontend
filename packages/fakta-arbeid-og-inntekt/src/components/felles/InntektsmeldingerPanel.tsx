import React, {
  FunctionComponent, useState,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, Label, BodyShort } from '@navikt/ds-react';
import {
  Image, FlexColumn, FlexRow, Tooltip, VerticalSpacer, FloatRight, PeriodLabel, AvsnittSkiller, DateLabel,
} from '@navikt/ft-ui-komponenter';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import { TIDENES_ENDE, getKodeverknavnFraKode } from '@navikt/ft-utils';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@fpsak-frontend/types';

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

  const inntektsmeldingForArbeidsforhold = harEttArbeidsforhold
    ? finnInntektsmelding(inntektsmeldingerForRad, arbeidsforholdForRad[0].internArbeidsforholdId) : undefined;

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
                        <Label size="small"><FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" /></Label>
                      </FlexColumn>
                      <FlexColumn>
                        {a.eksternArbeidsforholdId && a.eksternArbeidsforholdId.length < 50 && (
                          <BodyShort size="small">{a.eksternArbeidsforholdId}</BodyShort>
                        )}
                        {a.eksternArbeidsforholdId && a.eksternArbeidsforholdId.length >= 50 && (
                          <Tooltip
                            content={delOppAId(a.eksternArbeidsforholdId)}
                            alignBottom
                          >
                            <BodyShort size="small">{`${a.eksternArbeidsforholdId.substring(0, 50)}...`}</BodyShort>
                          </Tooltip>
                        )}
                        {!a.eksternArbeidsforholdId && (
                          <BodyShort size="small">-</BodyShort>
                        )}
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer fourPx />
                    <FlexRow>
                      <FlexColumn>
                        <Label size="small"><FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" /></Label>
                      </FlexColumn>
                      <FlexColumn>
                        <BodyShort size="small">
                          <PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom !== TIDENES_ENDE ? a.tom : undefined} />
                        </BodyShort>
                      </FlexColumn>
                    </FlexRow>
                    <VerticalSpacer fourPx />
                    <FlexRow>
                      <FlexColumn>
                        <Label size="small"><FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" /></Label>
                      </FlexColumn>
                      <FlexColumn>
                        <BodyShort size="small">{`${a.stillingsprosent}%`}</BodyShort>
                      </FlexColumn>
                    </FlexRow>
                    {a.permisjonOgMangel && (
                      <>
                        <VerticalSpacer fourPx />
                        <FlexRow>
                          <FlexColumn>
                            <Label size="small">
                              {getKodeverknavnFraKode(alleKodeverk, KodeverkType.PERMISJONSBESKRIVELSE_TYPE, a.permisjonOgMangel.type)}
                            </Label>
                          </FlexColumn>
                          <FlexColumn>
                            <BodyShort size="small">
                              <PeriodLabel dateStringFom={a.permisjonOgMangel.permisjonFom} dateStringTom={a.permisjonOgMangel.permisjonTom} />
                            </BodyShort>
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
                        <Link
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
                            <BodyShort size="small" className={styles.inline}>
                              <FormattedMessage
                                id={!visInfoOmIm[a.internArbeidsforholdId]
                                  ? 'ArbeidsforholdInformasjonPanel.ApneImInfo' : 'ArbeidsforholdInformasjonPanel.LukkeImInfo'}
                              />
                            </BodyShort>
                          </span>
                          <Image className={styles.arrow} src={visInfoOmIm[a.internArbeidsforholdId] ? pilOppIkonUrl : pilNedIkonUrl} />
                        </Link>
                      </>
                    )}
                  </Column>
                  {inntektsmelding && (
                    <Column xs="5" className={styles.sisteKolonne}>
                      <FloatRight>
                        <Label size="small"><FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" /></Label>
                        <FloatRight>
                          <BodyShort size="small"><DateLabel dateString={inntektsmelding.motattDato} /></BodyShort>
                        </FloatRight>
                      </FloatRight>
                    </Column>
                  )}
                  {!inntektsmelding && (
                    <Column xs="5" className={styles.sisteKolonne}>
                      <FloatRight>
                        <Image className={styles.aksjonpunktImage} alt={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })} src={advarselIkonUrl} />
                        <div className={styles.ikkeMottatt}>
                          <Label size="small"><FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" /></Label>
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
      {harEttArbeidsforhold && !!inntektsmeldingForArbeidsforhold && (
        <InntektsmeldingOpplysningerPanel
          saksnummer={saksnummer}
          arbeidsforhold={arbeidsforholdForRad[0]}
          inntektsmelding={inntektsmeldingForArbeidsforhold}
          skalViseArbeidsforholdId={inntektsmeldingerForRad.length > 1}
          alleKodeverk={alleKodeverk}
        />
      )}
      {harEttArbeidsforhold && inntektsmeldingerForRad.length === 0 && (
        <>
          <FlexRow>
            <FlexColumn>
              <Label size="small"><FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" /></Label>
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{`${arbeidsforholdForRad[0].stillingsprosent}%`}</BodyShort>
            </FlexColumn>
          </FlexRow>
          {arbeidsforholdForRad[0].permisjonOgMangel && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Label size="small">
                    {getKodeverknavnFraKode(alleKodeverk,
                      KodeverkType.PERMISJONSBESKRIVELSE_TYPE, arbeidsforholdForRad[0].permisjonOgMangel.type)}
                  </Label>
                </FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">
                    <PeriodLabel
                      dateStringFom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonFom}
                      dateStringTom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonTom}
                    />
                  </BodyShort>
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
