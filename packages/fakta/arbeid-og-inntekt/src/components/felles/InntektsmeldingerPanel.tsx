import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, Spacer, Tooltip, VStack } from '@navikt/ds-react';
import { AvsnittSkiller, DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';
import { grupperArbeidsforholdMedInntektsmelding } from '../../utils/inntektsmeldingUtils';
import { InntektsmeldingOpplysningerPanel } from './InntektsmeldingOpplysningerPanel';

import styles from './inntektsmeldingerPanel.module.css';

interface Props {
  saksnummer: string;
  alleKodeverk: AlleKodeverk;
  radData: ArbeidsforholdOgInntektRadData;
}

export const InntektsmeldingerPanel = ({ saksnummer, alleKodeverk, radData }: Props) => {
  const intl = useIntl();
  const [visInfoOmIm, setVisInfoOmIm] = useState<Record<string, boolean>>({});

  const { arbeidsforholdForRad, inntektsmeldingerForRad, arbeidsgiverIdent, erPrivatPerson } = radData;
  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const inntektsmeldingForArbeidsforhold = grupperArbeidsforholdMedInntektsmelding(
    inntektsmeldingerForRad,
    arbeidsforholdForRad,
  );
  return (
    <VStack gap="space-16">
      <HStack gap="space-16">
        <Label size="small">
          <FormattedMessage
            id={erPrivatPerson ? 'ArbeidsforholdInformasjonPanel.Fodselsdato' : 'ArbeidsforholdInformasjonPanel.Orgnr'}
          />
        </Label>
        <BodyShort size="small">
          {erPrivatPerson ? <DateLabel dateString={radData.arbeidsgiverFødselsdato} /> : arbeidsgiverIdent}
        </BodyShort>
      </HStack>
      {!harEttArbeidsforhold && (
        <>
          <AvsnittSkiller dividerParagraf className={styles['skiller']} />
          {inntektsmeldingForArbeidsforhold.map(({ arbeidsforhold: a, inntektsmelding: im }) => {
            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <VStack gap="space-8">
                  <HStack gap="space-16">
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
                            className={styles['aksjonpunktImage']}
                            title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
                          />
                          <div className={styles['ikkeMottatt']}>
                            <Label size="small">
                              <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" />
                            </Label>
                          </div>
                        </div>
                      </>
                    )}
                  </HStack>
                  <HStack gap="space-16">
                    <Label size="small">
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" />
                    </Label>
                    <BodyShort size="small">
                      <PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom} />
                    </BodyShort>
                    {im && (
                      <>
                        <Spacer />
                        <BodyShort size="small">
                          <DateLabel dateString={im.motattDato} />
                        </BodyShort>
                      </>
                    )}
                  </HStack>
                  <HStack gap="space-16">
                    <Label size="small">
                      <FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" />
                    </Label>
                    <BodyShort size="small">{`${a.stillingsprosent}%`}</BodyShort>
                  </HStack>
                  {a.permisjonOgMangel && (
                    <HStack gap="space-16">
                      <Label size="small">
                        {alleKodeverk['PermisjonsbeskrivelseType'].find(k => k.kode === a.permisjonOgMangel?.type)
                          ?.navn ?? ''}
                      </Label>
                      <BodyShort size="small">
                        <PeriodLabel
                          dateStringFom={a.permisjonOgMangel.permisjonFom}
                          dateStringTom={a.permisjonOgMangel.permisjonTom}
                        />
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
                          alleKodeverk={alleKodeverk}
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
                          <BodyShort size="small" className={styles['inline']}>
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
                          <ChevronUpIcon className={styles['arrow']} />
                        ) : (
                          <ChevronDownIcon className={styles['arrow']} />
                        )}
                      </Link>
                    </>
                  )}
                </VStack>
                <AvsnittSkiller dividerParagraf className={styles['skiller']} />
              </React.Fragment>
            );
          })}
        </>
      )}
      {harEttArbeidsforhold &&
        inntektsmeldingForArbeidsforhold.length > 0 &&
        inntektsmeldingForArbeidsforhold[0]!.inntektsmelding && (
          <InntektsmeldingOpplysningerPanel
            saksnummer={saksnummer}
            radData={radData}
            arbeidsforhold={arbeidsforholdForRad[0]}
            inntektsmelding={inntektsmeldingForArbeidsforhold[0]!.inntektsmelding}
            skalViseArbeidsforholdId={inntektsmeldingerForRad.length > 1}
            alleKodeverk={alleKodeverk}
            ikkeVisInfo
          />
        )}
      {harEttArbeidsforhold && inntektsmeldingerForRad.length === 0 && (
        <>
          <HStack gap="space-16">
            <Label size="small">
              <FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" />
            </Label>
            <BodyShort size="small">{`${arbeidsforholdForRad[0]!.stillingsprosent}%`}</BodyShort>
          </HStack>
          {arbeidsforholdForRad[0]!.permisjonOgMangel && (
            <HStack gap="space-16">
              <Label size="small">
                {alleKodeverk['PermisjonsbeskrivelseType'].find(
                  k => k.kode === arbeidsforholdForRad[0]!.permisjonOgMangel?.type,
                )?.navn ?? ''}
              </Label>
              <BodyShort size="small">
                <PeriodLabel
                  dateStringFom={arbeidsforholdForRad[0]!.permisjonOgMangel.permisjonFom}
                  dateStringTom={arbeidsforholdForRad[0]!.permisjonOgMangel.permisjonTom}
                />
              </BodyShort>
            </HStack>
          )}
        </>
      )}
    </VStack>
  );
};

const delOppAId = (eksternArbeidsforholdId: string): string => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, i * 25 + 25));
  return oppdeltId.join('-');
};
