import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HGrid, VStack } from '@navikt/ds-react';

import {
  Arbeidsgiver,
  InfoBlokk,
  KontaktPerson,
  LastNedPdfKnapp,
  Månedsinntekt,
  PermisjonOgMangel,
  Refusjon,
  Stillingsprosent,
} from '@navikt/fp-fakta-felles';
import { AlleKodeverk, AoIArbeidsforhold, Inntektsmelding } from '@navikt/fp-types';

interface Props {
  saksnummer: string;
  arbeidsforhold?: AoIArbeidsforhold;
  inntektsmelding: Inntektsmelding;
  skalViseArbeidsforholdId: boolean;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverNavn: string;
  arbeidsgiverFødselsdato?: string;
  ikkeVisInfo?: boolean;
}

export const InntektsmeldingOpplysningerPanel = ({
  saksnummer,
  arbeidsforhold,
  inntektsmelding,
  skalViseArbeidsforholdId,
  alleKodeverk,
  arbeidsgiverNavn,
  arbeidsgiverFødselsdato,
  ikkeVisInfo,
}: Props) => (
  <VStack gap="2">
    <HGrid columns={3} gap="2">
      {!ikkeVisInfo && (
        <Arbeidsgiver
          arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
          arbeidsgiverNavn={arbeidsgiverNavn}
          arbeidsgiverIdent={inntektsmelding.arbeidsgiverIdent}
        />
      )}

      <KontaktPerson inntektsmelding={inntektsmelding} />

      {skalViseArbeidsforholdId && (
        <InfoBlokk tittel={<FormattedMessage id="InntektsmeldingOpplysningerPanel.ArbeidsforholdId" />}>
          <BodyShort>{inntektsmelding.eksternArbeidsforholdId}</BodyShort>
        </InfoBlokk>
      )}

      {arbeidsforhold && <Stillingsprosent stillingsprosent={arbeidsforhold.stillingsprosent} />}

      {arbeidsforhold?.permisjonOgMangel && (
        <PermisjonOgMangel
          type={arbeidsforhold.permisjonOgMangel.type}
          alleKodeverk={alleKodeverk}
          fom={arbeidsforhold.permisjonOgMangel.permisjonFom}
          tom={arbeidsforhold.permisjonOgMangel.permisjonTom}
        />
      )}

      <Månedsinntekt inntektsmelding={inntektsmelding} />

      <Refusjon inntektsmelding={inntektsmelding} />
    </HGrid>

    <div>
      <LastNedPdfKnapp saksnummer={saksnummer} inntektsmelding={inntektsmelding} />
    </div>
  </VStack>
);
