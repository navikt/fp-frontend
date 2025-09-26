import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HGrid, HStack, VStack } from '@navikt/ds-react';
import { BeløpLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';

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

  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[inntektsmelding.arbeidsgiverIdent];

  if (!arbeidsgiverOpplysninger) {
    // eslint-disable-next-line no-console
    console.error(`Fant ikke arbeidsgiveropplysninger`);
    return null;
  }

  return (
    <VStack gap="space-16" className={styles['container']}>
      <HStack gap="space-16" justify="space-between" align="start">
        <Heading level="3" size="small">
          <FormattedMessage id="InntektsmeldingFaktaPanel.innsendingstidspunkt" />{' '}
          <DateTimeLabel dateTimeString={inntektsmelding.innsendingstidspunkt} separator="kl" />
        </Heading>
        <LastNedPdfKnapp
          fagsak={fagsak}
          inntektsmelding={inntektsmelding}
          arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        />
      </HStack>
      <HGrid columns={3} gap="space-32">
        <Arbeidsgiver
          arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
          arbeidsgiverIdent={inntektsmelding.arbeidsgiverIdent}
        />

        <InntektsmeldingInfoBlokk
          tittel={intl.formatMessage({ id: 'InntektsmeldingFaktaPanel.månedsinntekt.heading' })}
        >
          <BeløpLabel beløp={inntektsmelding.inntektPrMnd} />
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
          ytelse={alleKodeverk['FagsakYtelseType'].find(k => k.kode === fagsak.fagsakYtelseType)?.navn ?? ''}
          startDatoPermisjon={inntektsmelding.startDatoPermisjon ?? undefined}
        />

        <KildeSystem kildeSystem={inntektsmelding.kildeSystem} />

        <BortfalteNaturalYtelser inntektsmelding={inntektsmelding} alleKodeverk={alleKodeverk} />

        <Refusjon inntektsmelding={inntektsmelding} />
      </HGrid>
    </VStack>
  );
};
