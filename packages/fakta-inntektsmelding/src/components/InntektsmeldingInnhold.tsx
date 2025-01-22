import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HGrid, HStack, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import {
  Arbeidsgiver,
  KildeSystem,
  KontaktPerson,
  LastNedPdfKnapp,
  Månedsinntekt,
  Refusjon,
} from '@navikt/fp-fakta-felles';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { Inntektsmelding } from '@navikt/fp-types';

import { InntektsmeldingFaktaProps } from '../InntektsmeldingFaktaIndex';
import { BehandlingsOversikt } from './BehandlingsOversikt';
import { BortfalteNaturalYtelser } from './BortfalteNaturalYtelser';
import { Startdato } from './Startdato';

import styles from '../inntektsmeldingFakta.module.css';

export const InntektsmeldingInnhold = ({
  inntektsmelding,
  arbeidsgiverOpplysningerPerId,
  fagsak,
  alleBehandlinger,
  behandling,
  alleKodeverk,
}: { inntektsmelding: Inntektsmelding } & InntektsmeldingFaktaProps) => {
  return (
    <VStack gap="4" className={styles.container}>
      <HStack gap="4" justify="space-between" align="start">
        <Heading level="3" size="small">
          <FormattedMessage id="InntektsmeldingFaktaPanel.innsendingstidspunkt" />{' '}
          <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} separator="kl" />
        </Heading>
        <LastNedPdfKnapp saksnummer={fagsak.saksnummer} inntektsmelding={inntektsmelding} />
      </HStack>
      <HGrid columns={3} gap="8">
        <Arbeidsgiver
          arbeidsgiverFødselsdato={arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]?.fødselsdato}
          arbeidsgiverNavn={arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]?.navn}
          arbeidsgiverIdent={inntektsmelding.arbeidsgiverIdent}
        />

        <Månedsinntekt inntektsmelding={inntektsmelding} />

        <BehandlingsOversikt
          alleKodeverk={alleKodeverk}
          inntektsmelding={inntektsmelding}
          alleBehandlinger={alleBehandlinger}
          behandling={behandling}
        />

        <KontaktPerson inntektsmelding={inntektsmelding} />

        <Startdato
          ytelse={getKodeverknavnFraKode(alleKodeverk, KodeverkType.FAGSAK_YTELSE, fagsak.fagsakYtelseType)}
          startDatoPermisjon={inntektsmelding.startDatoPermisjon}
        />

        <KildeSystem kildeSystem={inntektsmelding.kildeSystem} />

        <BortfalteNaturalYtelser inntektsmelding={inntektsmelding} alleKodeverk={alleKodeverk} />

        <Refusjon inntektsmelding={inntektsmelding} />
      </HGrid>
    </VStack>
  );
};
