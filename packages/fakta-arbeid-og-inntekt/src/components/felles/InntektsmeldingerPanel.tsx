import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, Label, BodyShort, HStack, VStack, Spacer, Tooltip, Detail } from '@navikt/ds-react';
import { VerticalSpacer, PeriodLabel, AvsnittSkiller, DateLabel } from '@navikt/ft-ui-komponenter';
import { ChevronDownIcon, ChevronUpIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';
import { TIDENES_ENDE } from '@navikt/ft-utils';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';

import styles from './inntektsmeldingerPanel.module.css';

const erMatch = (arbeidsforhold: AoIArbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent &&
  (!inntektsmelding.internArbeidsforholdId ||
    inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const finnInntektsmelding = (inntektsmeldinger: Inntektsmelding[], internArbeidsforholdId?: string) => {
  const harImMedId = inntektsmeldinger.some(i => i.internArbeidsforholdId);
  const harImUtenId = inntektsmeldinger.some(i => !i.internArbeidsforholdId);
  if (harImMedId && harImUtenId) {
    throw Error('Har inntektsmelding både med og uten id');
  }

  return inntektsmeldinger.find(i => !i.internArbeidsforholdId || i.internArbeidsforholdId === internArbeidsforholdId);
};

const delOppAId = (eksternArbeidsforholdId: string): string => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, i * 25 + 25));
  return oppdeltId.join('-');
};

interface OwnProps {
  saksnummer: string;
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsmeldingerForRad: Inntektsmelding[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverFødselsdato?: string;
}

const InntektsmeldingerPanel: FunctionComponent<OwnProps> = ({
  saksnummer,
  arbeidsforholdForRad,
  inntektsmeldingerForRad,
  alleKodeverk,
  arbeidsgiverFødselsdato,
}) => {
  const intl = useIntl();
  const [visInfoOmIm, toggleInfoOmIm] = useState<Record<string, boolean>>({});

  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const inntektsmeldingForArbeidsforhold = harEttArbeidsforhold
    ? finnInntektsmelding(inntektsmeldingerForRad, arbeidsforholdForRad[0].internArbeidsforholdId)
    : undefined;

  return (
    <>
      {arbeidsgiverFødselsdato && (
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="ArbeidsforholdInformasjonPanel.Fodselsdato" />
          </Label>
          <Detail>
            <DateLabel dateString={arbeidsgiverFødselsdato} />
          </Detail>
        </HStack>
      )}
      {!arbeidsgiverFødselsdato && arbeidsforholdForRad.length > 0 && (
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="ArbeidsforholdInformasjonPanel.Orgnr" />
          </Label>
          <Detail>{arbeidsforholdForRad[0].arbeidsgiverIdent}</Detail>
        </HStack>
      )}
      {!harEttArbeidsforhold && (
        <>
          <VerticalSpacer eightPx />
          <AvsnittSkiller dividerParagraf className={styles.skiller} />
          <VerticalSpacer sixteenPx />
          {arbeidsforholdForRad.map(a => {
            const inntektsmelding = inntektsmeldingerForRad.find(i => erMatch(a, i));
            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <VStack gap="2">
                  <HStack gap="4">
                    <Label size="small">
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" />
                    </Label>
                    <div>
                      {a.eksternArbeidsforholdId && a.eksternArbeidsforholdId.length < 50 && (
                        <div>
                          <BodyShort size="small">{a.eksternArbeidsforholdId}</BodyShort>
                        </div>
                      )}
                      {a.eksternArbeidsforholdId && a.eksternArbeidsforholdId.length >= 50 && (
                        <Tooltip content={delOppAId(a.eksternArbeidsforholdId)}>
                          <BodyShort size="small">{`${a.eksternArbeidsforholdId.substring(0, 50)}...`}</BodyShort>
                        </Tooltip>
                      )}
                      {!a.eksternArbeidsforholdId && <BodyShort size="small">-</BodyShort>}
                    </div>
                    {inntektsmelding && (
                      <>
                        <Spacer />
                        <Label size="small">
                          <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" />
                        </Label>
                      </>
                    )}
                    {!inntektsmelding && (
                      <>
                        <Spacer />
                        <div>
                          <ExclamationmarkTriangleFillIcon
                            className={styles.aksjonpunktImage}
                            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
                          />
                          <div className={styles.ikkeMottatt}>
                            <Label size="small">
                              <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" />
                            </Label>
                          </div>
                        </div>
                      </>
                    )}
                  </HStack>
                  <HStack gap="4">
                    <Label size="small">
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" />
                    </Label>
                    <BodyShort size="small">
                      <PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom !== TIDENES_ENDE ? a.tom : undefined} />
                    </BodyShort>
                    {inntektsmelding && (
                      <>
                        <Spacer />
                        <BodyShort size="small">
                          <DateLabel dateString={inntektsmelding.motattDato} />
                        </BodyShort>
                      </>
                    )}
                  </HStack>
                  <HStack gap="4">
                    <Label size="small">
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" />
                    </Label>
                    <BodyShort size="small">{`${a.stillingsprosent}%`}</BodyShort>
                  </HStack>
                  {a.permisjonOgMangel && (
                    <HStack gap="4">
                      <Label size="small">
                        {getKodeverknavnFraKode(
                          alleKodeverk,
                          KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
                          a.permisjonOgMangel.type,
                        )}
                      </Label>
                      <BodyShort size="small">
                        <PeriodLabel
                          dateStringFom={a.permisjonOgMangel.permisjonFom}
                          dateStringTom={a.permisjonOgMangel.permisjonTom}
                        />
                      </BodyShort>
                    </HStack>
                  )}
                  {inntektsmelding && (
                    <>
                      {a.internArbeidsforholdId && visInfoOmIm[a.internArbeidsforholdId] && (
                        <InntektsmeldingOpplysningerPanel
                          saksnummer={saksnummer}
                          inntektsmelding={inntektsmelding}
                          skalViseArbeidsforholdId={false}
                        />
                      )}
                      <VerticalSpacer fourPx />
                      <Link
                        onClick={e => {
                          e.preventDefault();
                          toggleInfoOmIm(info => {
                            if (!a.internArbeidsforholdId) {
                              return info;
                            }
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
                              id={
                                !a.internArbeidsforholdId || !visInfoOmIm[a.internArbeidsforholdId]
                                  ? 'ArbeidsforholdInformasjonPanel.ApneImInfo'
                                  : 'ArbeidsforholdInformasjonPanel.LukkeImInfo'
                              }
                            />
                          </BodyShort>
                        </span>
                        {a.internArbeidsforholdId && visInfoOmIm[a.internArbeidsforholdId] ? (
                          <ChevronUpIcon className={styles.arrow} />
                        ) : (
                          <ChevronDownIcon className={styles.arrow} />
                        )}
                      </Link>
                    </>
                  )}
                </VStack>
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
          ikkeVisInfo
        />
      )}
      {harEttArbeidsforhold && inntektsmeldingerForRad.length === 0 && (
        <>
          <HStack gap="4">
            <Label size="small">
              <FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" />
            </Label>
            <BodyShort size="small">{`${arbeidsforholdForRad[0].stillingsprosent}%`}</BodyShort>
          </HStack>
          {arbeidsforholdForRad[0].permisjonOgMangel && (
            <>
              <VerticalSpacer eightPx />
              <HStack gap="4">
                <Label size="small">
                  {getKodeverknavnFraKode(
                    alleKodeverk,
                    KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
                    arbeidsforholdForRad[0].permisjonOgMangel.type,
                  )}
                </Label>
                <BodyShort size="small">
                  <PeriodLabel
                    dateStringFom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonFom}
                    dateStringTom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonTom}
                  />
                </BodyShort>
              </HStack>
            </>
          )}
        </>
      )}
    </>
  );
};

export default InntektsmeldingerPanel;
