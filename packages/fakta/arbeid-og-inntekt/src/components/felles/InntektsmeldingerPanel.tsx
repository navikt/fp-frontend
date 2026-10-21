import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, Tooltip, VStack } from '@navikt/ds-react';
import { AvsnittSkiller, DateLabel, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';
import { grupperArbeidsforholdMedInntektsmelding } from '../../utils/inntektsmeldingUtils';
import { InntektsmeldingOpplysningerPanel } from './InntektsmeldingOpplysningerPanel';

interface Props {
  saksnummer: string;
  alleKodeverk: AlleKodeverk;
  radData: ArbeidsforholdOgInntektRadData;
}

export const InntektsmeldingerPanel = ({ saksnummer, alleKodeverk, radData }: Props) => {
  const [visInfoOmIm, setVisInfoOmIm] = useState<Record<string, boolean>>({});

  const { arbeidsforholdForRad, inntektsmeldingerForRad, arbeidsgiverIdent, erPrivatPerson } = radData;
  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const inntektsmeldingForArbeidsforhold = grupperArbeidsforholdMedInntektsmelding(
    inntektsmeldingerForRad,
    arbeidsforholdForRad,
  );
  return (
    <VStack gap="space-16">
      <LabeledValue
        size="small"
        horizontal
        label={
          <FormattedMessage
            id={erPrivatPerson ? 'ArbeidsforholdInformasjonPanel.Fodselsdato' : 'ArbeidsforholdInformasjonPanel.Orgnr'}
          />
        }
        value={erPrivatPerson ? <DateLabel dateString={radData.arbeidsgiverFødselsdato} /> : arbeidsgiverIdent}
      />

      {!harEttArbeidsforhold && (
        <>
          <AvsnittSkiller dividerParagraf />
          {inntektsmeldingForArbeidsforhold.map(({ arbeidsforhold: a, inntektsmelding: im }) => {
            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <HStack justify="space-between">
                  <VStack gap="space-8">
                    <LabeledValue
                      size="small"
                      horizontal
                      label={<FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" />}
                      fieldType="component"
                      value={
                        a.eksternArbeidsforholdId ? (
                          <Tooltip content={delOppAId(a.eksternArbeidsforholdId)} maxChar={100}>
                            <BodyShort size="small">
                              {a.eksternArbeidsforholdId.length > 50
                                ? `${a.eksternArbeidsforholdId.slice(0, 50)}...`
                                : a.eksternArbeidsforholdId}
                            </BodyShort>
                          </Tooltip>
                        ) : (
                          <BodyShort size="small">-</BodyShort>
                        )
                      }
                    />

                    <LabeledValue
                      size="small"
                      horizontal
                      label={<FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" />}
                      value={<PeriodLabel dateStringFom={a.fom} dateStringTom={a.tom} />}
                    />

                    <LabeledValue
                      size="small"
                      horizontal
                      label={<FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" />}
                      value={`${a.stillingsprosent}%`}
                    />

                    {a.permisjonOgMangel && (
                      <LabeledValue
                        size="small"
                        horizontal
                        label={
                          alleKodeverk['PermisjonsbeskrivelseType'].find(k => k.kode === a.permisjonOgMangel?.type)
                            ?.navn ?? ''
                        }
                        value={
                          <PeriodLabel
                            dateStringFom={a.permisjonOgMangel.permisjonFom}
                            dateStringTom={a.permisjonOgMangel.permisjonTom}
                          />
                        }
                      />
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
                        <BodyShort size="small">
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

                                  [a.internArbeidsforholdId]: status === undefined || !status,
                                };
                              });
                            }}
                            href=""
                          >
                            {a.internArbeidsforholdId && visInfoOmIm[a.internArbeidsforholdId] ? (
                              <span>
                                <FormattedMessage id="ArbeidsforholdInformasjonPanel.LukkeImInfo" />
                                <ChevronUpIcon aria-hidden className="inline" />
                              </span>
                            ) : (
                              <span>
                                <FormattedMessage id="ArbeidsforholdInformasjonPanel.ApneImInfo" />
                                <ChevronDownIcon aria-hidden className="inline" />
                              </span>
                            )}
                          </Link>
                        </BodyShort>
                      </>
                    )}
                  </VStack>
                  <div>
                    {im ? (
                      <div className="text-end">
                        <Label size="small">
                          <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" />
                        </Label>
                        <BodyShort size="small">
                          <DateLabel dateString={im.mottattDato} />
                        </BodyShort>
                      </div>
                    ) : (
                      <div>
                        <Label size="small">
                          <ExclamationmarkTriangleFillIcon
                            fontSize="1.5rem"
                            color="var(--ax-text-warning-decoration)"
                            className="mr-2 inline"
                            aria-hidden="true"
                          />
                          <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" />
                        </Label>
                      </div>
                    )}
                  </div>
                </HStack>
                <AvsnittSkiller dividerParagraf />
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
          <LabeledValue
            size="small"
            horizontal
            label={<FormattedMessage id="ArbeidsforholdInformasjonPanel.Stillingsprosent" />}
            value={`${arbeidsforholdForRad[0]!.stillingsprosent}%`}
          />

          {arbeidsforholdForRad[0]!.permisjonOgMangel && (
            <LabeledValue
              size="small"
              horizontal
              label={
                alleKodeverk['PermisjonsbeskrivelseType'].find(
                  k => k.kode === arbeidsforholdForRad[0]!.permisjonOgMangel?.type,
                )?.navn ?? ''
              }
              value={
                <PeriodLabel
                  dateStringFom={arbeidsforholdForRad[0]!.permisjonOgMangel.permisjonFom}
                  dateStringTom={arbeidsforholdForRad[0]!.permisjonOgMangel.permisjonTom}
                />
              }
            />
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
