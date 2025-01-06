import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, Spacer, Tooltip, VStack } from '@navikt/ds-react';
import { AvsnittSkiller, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { formaterPeriode } from '@navikt/fp-fakta-felles';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

import { InntektsmeldingOpplysningerPanel } from './InntektsmeldingOpplysningerPanel';

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

interface Props {
  saksnummer: string;
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsmeldingerForRad: Inntektsmelding[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverFødselsdato?: string;
}

export const InntektsmeldingerPanel = ({
  saksnummer,
  arbeidsforholdForRad,
  inntektsmeldingerForRad,
  alleKodeverk,
  arbeidsgiverFødselsdato,
}: Props) => {
  const intl = useIntl();
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
          <BodyShort size="small">{dateFormat(arbeidsgiverFødselsdato)}</BodyShort>
        </HStack>
      )}

      {!arbeidsgiverFødselsdato && arbeidsforholdForRad.length > 0 && (
        <HStack gap="4">
          <Label size="small">
            <FormattedMessage id="ArbeidsforholdInformasjonPanel.Orgnr" />
          </Label>
          <BodyShort size="small">{arbeidsforholdForRad[0].arbeidsgiverIdent}</BodyShort>
        </HStack>
      )}

      {!harEttArbeidsforhold && (
        <>
          <VerticalSpacer eightPx />
          <AvsnittSkiller dividerParagraf />
          <VerticalSpacer sixteenPx />
          {arbeidsforholdForRad.map(a => {
            const inntektsmelding = inntektsmeldingerForRad.find(i => erMatch(a, i));
            const [visInfoOmIm, setVisInfoOmIm] = useState<boolean>(false);

            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <HStack gap="4" wrap={false} justify="space-between">
                  <VStack gap="2">
                    <HStack gap="4" wrap={false}>
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" />
                      </Label>
                      {a.eksternArbeidsforholdId ? (
                        <Tooltip content={delOppAId(a.eksternArbeidsforholdId)}>
                          <BodyShort size="small">
                            {a.eksternArbeidsforholdId.length > 50
                              ? a.eksternArbeidsforholdId.slice(0, 50).concat('...')
                              : a.eksternArbeidsforholdId}
                          </BodyShort>
                        </Tooltip>
                      ) : (
                        <BodyShort size="small">-</BodyShort>
                      )}
                    </HStack>

                    <HStack gap="4">
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" />
                      </Label>
                      <BodyShort size="small">{formaterPeriode(a)}</BodyShort>
                      {inntektsmelding && (
                        <>
                          <Spacer />
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
                          {formaterPeriode({
                            fom: a.permisjonOgMangel.permisjonFom,
                            tom: a.permisjonOgMangel.permisjonTom,
                          })}
                        </BodyShort>
                      </HStack>
                    )}

                    {inntektsmelding && (
                      <>
                        {visInfoOmIm && (
                          <InntektsmeldingOpplysningerPanel
                            saksnummer={saksnummer}
                            inntektsmelding={inntektsmelding}
                            skalViseArbeidsforholdId={false}
                          />
                        )}
                        <Link
                          href=""
                          onClick={e => {
                            e.preventDefault();
                            setVisInfoOmIm(v => !v);
                          }}
                        >
                          <BodyShort size="small" as="span">
                            <FormattedMessage
                              id={
                                visInfoOmIm
                                  ? 'ArbeidsforholdInformasjonPanel.LukkeImInfo'
                                  : 'ArbeidsforholdInformasjonPanel.ApneImInfo'
                              }
                            />
                          </BodyShort>
                          {visInfoOmIm ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </Link>
                      </>
                    )}
                  </VStack>
                  {inntektsmelding ? (
                    <div>
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImMottatt" />
                      </Label>
                      <BodyShort size="small">{dateFormat(inntektsmelding.motattDato)}</BodyShort>
                    </div>
                  ) : (
                    <HStack gap="4">
                      <ExclamationmarkTriangleFillIcon
                        title={intl.formatMessage({ id: 'ArbeidsforholdRad.Aksjonspunkt' })}
                        width={24}
                        height={24}
                        color="var(--a-icon-warning)"
                      />
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdInformasjonPanel.ImIkkeMottatt" />
                      </Label>
                    </HStack>
                  )}
                </HStack>
                <AvsnittSkiller dividerParagraf spaceAbove spaceUnder />
              </React.Fragment>
            );
          })}
        </>
      )}

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
            <HStack gap="4">
              <Label size="small">
                {
                  alleKodeverk[KodeverkType.PERMISJONSBESKRIVELSE_TYPE].find(
                    k => k.kode === arbeidsforholdForRad[0].permisjonOgMangel?.type,
                  )?.navn
                }
              </Label>
              <BodyShort size="small">
                {formaterPeriode({
                  fom: arbeidsforholdForRad[0].permisjonOgMangel.permisjonFom,
                  tom: arbeidsforholdForRad[0].permisjonOgMangel.permisjonTom,
                })}
              </BodyShort>
            </HStack>
          )}
        </>
      )}
    </>
  );
};
