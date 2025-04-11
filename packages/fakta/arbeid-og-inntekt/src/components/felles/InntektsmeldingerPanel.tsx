import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, Spacer, Tooltip, VStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import { dateFormat, periodFormat, TIDENES_ENDE } from '@navikt/ft-utils';

import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt.ts';
import { grupperArbeidsforholdMedInntektsmelding } from '../inntektsmeldingUtils';
import { InntektsmeldingOpplysningerPanel } from './InntektsmeldingOpplysningerPanel';

import styles from './inntektsmeldingerPanel.module.css';

const delOppAId = (eksternArbeidsforholdId: string): string => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, i * 25 + 25));
  return oppdeltId.join('-');
};

interface Props {
  saksnummer: string;
  alleKodeverk: AlleKodeverk;
  radData: ArbeidsforholdOgInntektRadData;
}

export const InntektsmeldingerPanel = ({ saksnummer, alleKodeverk, radData }: Props) => {
  const intl = useIntl();
  const [visInfoOmIm, setVisInfoOmIm] = useState<Record<string, boolean>>({});

  const { arbeidsforholdForRad, inntektsmeldingerForRad } = radData;
  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const inntektsmeldingForArbeidsforhold = grupperArbeidsforholdMedInntektsmelding(
    inntektsmeldingerForRad,
    arbeidsforholdForRad,
  );
  return (
    <VStack gap="4">
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage
            id={
              radData.erPrivatPerson
                ? 'ArbeidsforholdInformasjonPanel.Fodselsdato'
                : 'ArbeidsforholdInformasjonPanel.Orgnr'
            }
          />
        </Label>
        <BodyShort size="small">
          {radData.erPrivatPerson ? dateFormat(radData.arbeidsgiverFødselsdato) : radData.arbeidsgiverIdent}
        </BodyShort>
      </HStack>
      {!harEttArbeidsforhold && (
        <>
          <AvsnittSkiller dividerParagraf className={styles.skiller} />
          {inntektsmeldingForArbeidsforhold.map(({ arbeidsforhold: a, inntektsmelding: im }) => {
            return (
              <React.Fragment key={`${a?.arbeidsgiverIdent}${a?.internArbeidsforholdId}`}>
                <VStack gap="2">
                  <HStack gap="4">
                    <Label size="small">
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" />
                    </Label>
                    <div>
                      {a?.eksternArbeidsforholdId && a.eksternArbeidsforholdId.length < 50 && (
                        <div>
                          <BodyShort size="small">{a.eksternArbeidsforholdId}</BodyShort>
                        </div>
                      )}
                      {a?.eksternArbeidsforholdId && a.eksternArbeidsforholdId.length >= 50 && (
                        <Tooltip content={delOppAId(a.eksternArbeidsforholdId)}>
                          <BodyShort size="small">{`${a.eksternArbeidsforholdId.substring(0, 50)}...`}</BodyShort>
                        </Tooltip>
                      )}
                      {!a.eksternArbeidsforholdId && <BodyShort size="small">-</BodyShort>}
                    </div>
                    {im && (
                      <>
                        <Spacer />
                        <Label size="small">
                          <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" />
                        </Label>
                      </>
                    )}
                    {!im && (
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
                      {periodFormat(a.fom, a.tom !== TIDENES_ENDE ? a.tom : undefined)}
                    </BodyShort>
                    {im && (
                      <>
                        <Spacer />
                        <BodyShort size="small">{dateFormat(im.motattDato)}</BodyShort>
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
                        {periodFormat(a.permisjonOgMangel.permisjonFom, a.permisjonOgMangel.permisjonTom)}
                      </BodyShort>
                    </HStack>
                  )}
                  {im && (
                    <>
                      {a.internArbeidsforholdId && visInfoOmIm[a.internArbeidsforholdId] && (
                        <InntektsmeldingOpplysningerPanel
                          saksnummer={saksnummer}
                          inntektsmelding={im}
                          skalViseArbeidsforholdId={false}
                          radData={radData}
                        />
                      )}
                      <Link
                        onClick={e => {
                          e.preventDefault();
                          setVisInfoOmIm(info => {
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
                <AvsnittSkiller dividerParagraf className={styles.skiller} />
              </React.Fragment>
            );
          })}
        </>
      )}
      {harEttArbeidsforhold &&
        inntektsmeldingForArbeidsforhold.length > 0 &&
        inntektsmeldingForArbeidsforhold[0].inntektsmelding && (
          <InntektsmeldingOpplysningerPanel
            saksnummer={saksnummer}
            radData={radData}
            arbeidsforhold={arbeidsforholdForRad[0]}
            inntektsmelding={inntektsmeldingForArbeidsforhold[0].inntektsmelding}
            skalViseArbeidsforholdId={radData.inntektsmeldingerForRad.length > 1}
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
            <BodyShort size="small">{`${radData.arbeidsforholdForRad[0].stillingsprosent}%`}</BodyShort>
          </HStack>
          {radData.arbeidsforholdForRad[0].permisjonOgMangel && (
            <HStack gap="4">
              <Label size="small">
                {getKodeverknavnFraKode(
                  alleKodeverk,
                  KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
                  radData.arbeidsforholdForRad[0].permisjonOgMangel.type,
                )}
              </Label>
              <BodyShort size="small">
                {periodFormat(
                  radData.arbeidsforholdForRad[0].permisjonOgMangel.permisjonFom,
                  radData.arbeidsforholdForRad[0].permisjonOgMangel.permisjonTom,
                )}
              </BodyShort>
            </HStack>
          )}
        </>
      )}
    </VStack>
  );
};
