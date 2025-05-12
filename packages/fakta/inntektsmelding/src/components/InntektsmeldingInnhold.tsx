import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HGrid, HStack, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { Inntektsmelding } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { InntektsmeldingFaktaProps } from '../InntektsmeldingFaktaIndex';
import { Arbeidsgiver } from './Arbeidsgiver';
import { BehandlingsOversikt } from './BehandlingsOversikt';
import { BortfalteNaturalYtelser } from './BortfalteNaturalYtelser';
import { InntektsmeldingInfoBlokk } from './InntektsmeldingInfoBlokk';
import { KildeSystem } from './KildeSystem';
import { KontaktPerson } from './KontaktPerson';
import { LastNedPdfKnapp } from './LastNedPdf';
import { Refusjon } from './Refusjon';
import { Startdato } from './Startdato';

import styles from '../inntektsmeldingFakta.module.css';

export const InntektsmeldingInnhold = ({
  inntektsmelding,
  arbeidsgiverOpplysningerPerId,
  alleBehandlinger,
}: { inntektsmelding: Inntektsmelding } & InntektsmeldingFaktaProps) => {
  const { alleKodeverk, fagsak, behandling } = usePanelDataContext();
  const intl = useIntl();

  return (
    <VStack gap="4" className={styles.container}>
      <HStack gap="4" justify="space-between" align="start">
        <Heading level="3" size="small">
          <FormattedMessage id="InntektsmeldingFaktaPanel.innsendingstidspunkt" />{' '}
          <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} separator="kl" />
        </Heading>
        <LastNedPdfKnapp
          fagsak={fagsak}
          inntektsmelding={inntektsmelding}
          arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]}
        />
      </HStack>
      <HGrid columns={3} gap="8">
        <Arbeidsgiver
          arbeidsgiverOpplysninger={arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent]}
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
          ytelse={alleKodeverk[KodeverkType.FAGSAK_YTELSE].find(k => k.kode === fagsak.fagsakYtelseType)?.navn ?? ''}
          startDatoPermisjon={inntektsmelding.startDatoPermisjon}
        />

        <KildeSystem kildeSystem={inntektsmelding.kildeSystem} />

        <BortfalteNaturalYtelser inntektsmelding={inntektsmelding} alleKodeverk={alleKodeverk} />

        <Refusjon inntektsmelding={inntektsmelding} />
      </HGrid>
    </VStack>
  );
};
