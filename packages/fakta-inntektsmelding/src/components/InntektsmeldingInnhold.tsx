import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HGrid, HStack, VStack } from '@navikt/ds-react';
import { Inntektsmelding } from '@navikt/fp-types';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import styles from '../inntektsmeldingFakta.module.css';

import { BehandlingsOversikt } from './BehandlingsOversikt';
import { BortfalteNaturalYtelser } from './BortfalteNaturalYtelser';
import { InntektsmeldingFaktaProps } from '../InntektsmeldingFaktaIndex';
import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';
import { KildeSystem } from './KildeSystem';
import { LastNedPdfKnapp } from './LastNedPdf';
import { Refusjon } from './Refusjon';
import { Startdato } from './Startdato';
import { KontaktPerson } from './KontaktPerson';
import { Arbeidsgiver } from './Arbeidsgiver';

export const InntektsmeldingInnhold = ({
  inntektsmelding,
  arbeidsgiverOpplysningerPerId,
  fagsak,
  alleBehandlinger,
  behandling,
  alleKodeverk,
}: { inntektsmelding: Inntektsmelding } & InntektsmeldingFaktaProps) => {
  const intl = useIntl();

  return (
    <VStack gap="4" className={styles.container}>
      <HStack gap="4" justify="space-between" align="start">
        <Heading level="3" size="small">
          <FormattedMessage id="InntektsmeldingFaktaPanel.innsendingstidspunkt" />{' '}
          <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} separator="kl" />
        </Heading>
        <LastNedPdfKnapp fagsak={fagsak} inntektsmelding={inntektsmelding} />
      </HStack>
      <HGrid columns={3} gap="8">
        <Arbeidsgiver
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          arbeidsgiverIdent={inntektsmelding.arbeidsgiverIdent}
        />

        <InntektsmeldingInfoBlokk
          tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.månedsinntekt.heading' })}
        >
          <span>{formatCurrencyNoKr(inntektsmelding.inntektPrMnd)}</span>
          {/*TODO: Få inn endringsgrunn når dette er med i data-modellen*/}
        </InntektsmeldingInfoBlokk>

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
