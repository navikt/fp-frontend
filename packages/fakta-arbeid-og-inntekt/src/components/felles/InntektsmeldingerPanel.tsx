import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HGrid, HStack, Label, Tooltip, VStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import { dateFormat } from '@navikt/ft-utils';

import { Arbeidsgiver, formaterPeriode, InfoBlokk, PermisjonOgMangel, Stillingsprosent } from '@navikt/fp-fakta-felles';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

import { ExpandableContent } from './ExpandableContent';
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
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
}

export const InntektsmeldingerPanel = ({
  saksnummer,
  arbeidsforholdForRad,
  inntektsmeldingerForRad,
  alleKodeverk,
  arbeidsgiverNavn,
  arbeidsgiverFødselsdato,
}: Props) => {
  const intl = useIntl();
  const harEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const inntektsmeldingForArbeidsforhold = harEttArbeidsforhold
    ? finnInntektsmelding(inntektsmeldingerForRad, arbeidsforholdForRad[0].internArbeidsforholdId)
    : undefined;

  return (
    <HGrid columns={3} gap="6">
      <Arbeidsgiver
        arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
        arbeidsgiverNavn={arbeidsgiverNavn}
        arbeidsgiverIdent={arbeidsforholdForRad[0].arbeidsgiverIdent}
      />

      {!harEttArbeidsforhold && (
        <>
          <AvsnittSkiller dividerParagraf spaceAbove spaceUnder />
          {arbeidsforholdForRad.map(a => {
            const inntektsmelding = inntektsmeldingerForRad.find(i => erMatch(a, i));

            return (
              <React.Fragment key={`${a.arbeidsgiverIdent}${a.internArbeidsforholdId}`}>
                <HStack wrap={false} gap="4" justify="space-between">
                  <VStack gap="2">
                    <div>
                      <Label>
                        <FormattedMessage id="ArbeidsforholdInformasjonPanel.ArbeidsforholdId" />
                      </Label>
                      <span>
                        {a.eksternArbeidsforholdId ? (
                          <Tooltip content={delOppAId(a.eksternArbeidsforholdId)}>
                            <BodyShort size="small">
                              {a.eksternArbeidsforholdId.length > 50
                                ? a.eksternArbeidsforholdId.slice(0, 50).concat('...')
                                : a.eksternArbeidsforholdId}
                            </BodyShort>
                          </Tooltip>
                        ) : (
                          '-'
                        )}
                      </span>

                      <InfoBlokk tittel={<FormattedMessage id="ArbeidsforholdInformasjonPanel.Periode" />}>
                        <BodyShort>{formaterPeriode(a)}</BodyShort>
                      </InfoBlokk>

                      <Stillingsprosent stillingsprosent={a.stillingsprosent} />

                      {a.permisjonOgMangel && (
                        <PermisjonOgMangel
                          type={a.permisjonOgMangel.type}
                          alleKodeverk={alleKodeverk}
                          fom={a.permisjonOgMangel.permisjonFom}
                          tom={a.permisjonOgMangel.permisjonTom}
                        />
                      )}
                    </div>

                    {inntektsmelding && (
                      <ExpandableContent
                        linkTextClosed={<FormattedMessage id="ArbeidsforholdInformasjonPanel.ApneImInfo" />}
                        linkTextExpanded={<FormattedMessage id="ArbeidsforholdInformasjonPanel.LukkeImInfo" />}
                        renderContent={isExpanded =>
                          isExpanded ? (
                            <InntektsmeldingOpplysningerPanel
                              saksnummer={saksnummer}
                              inntektsmelding={inntektsmelding}
                              skalViseArbeidsforholdId={false}
                              arbeidsgiverNavn={arbeidsgiverNavn}
                              alleKodeverk={alleKodeverk}
                            />
                          ) : (
                            <> </>
                          )
                        }
                      />
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
          arbeidsgiverNavn={arbeidsgiverNavn}
          arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
          alleKodeverk={alleKodeverk}
        />
      )}

      {harEttArbeidsforhold && inntektsmeldingerForRad.length === 0 && (
        <>
          <Stillingsprosent stillingsprosent={arbeidsforholdForRad[0].stillingsprosent} />

          {arbeidsforholdForRad[0].permisjonOgMangel && (
            <PermisjonOgMangel
              type={arbeidsforholdForRad[0].permisjonOgMangel.type}
              alleKodeverk={alleKodeverk}
              fom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonFom}
              tom={arbeidsforholdForRad[0].permisjonOgMangel.permisjonTom}
            />
          )}
        </>
      )}
    </HGrid>
  );
};
