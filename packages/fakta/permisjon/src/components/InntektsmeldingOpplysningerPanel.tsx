import { FormattedMessage } from 'react-intl';

import { FileFillIcon, PhoneFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import type { Inntektsmelding } from '@navikt/fp-types';

import { DokumentLink } from '../../../../ui-komponenter';

import styles from './inntektsmeldingOpplysningerPanel.module.css';

interface Props {
  saksnummer: string;
  inntektsmelding: Inntektsmelding;
}

export const InntektsmeldingOpplysningerPanel = ({ saksnummer, inntektsmelding }: Props) => (
  <VStack gap="4">
    <HStack gap="4">
      <Label size="small">
        <FormattedMessage id="InntektsmeldingOpplysningerPanel.Inntektsmelding" />
      </Label>
      <BodyShort size="small">
        <BeløpLabel beløp={inntektsmelding.inntektPrMnd} />
      </BodyShort>
    </HStack>
    <HStack gap="4">
      <Label size="small">
        <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjon" />
      </Label>
      <BodyShort size="small">
        <FormattedMessage
          id={
            inntektsmelding.refusjonPrMnd
              ? 'InntektsmeldingOpplysningerPanel.Ja'
              : 'InntektsmeldingOpplysningerPanel.Nei'
          }
        />
      </BodyShort>
    </HStack>
    {inntektsmelding.refusjonPrMnd && (
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Refusjonsbeløp" />
        </Label>
        <BodyShort size="small">
          <BeløpLabel beløp={inntektsmelding.refusjonPrMnd} />
        </BodyShort>
      </HStack>
    )}
    <DokumentLink
      saksnummer={saksnummer}
      journalpostId={inntektsmelding.journalpostId}
      dokumentId={inntektsmelding.dokumentId}
    >
      <HStack gap="1">
        <BodyShort size="small" className={styles.inline}>
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding" />
        </BodyShort>
        <FileFillIcon className={styles.docIcon} />
      </HStack>
    </DokumentLink>
    <HStack gap="4" align="center">
      <PhoneFillIcon className={styles.phoneIcon} />
      <VStack gap="1">
        <Label size="small">
          <FormattedMessage id="InntektsmeldingOpplysningerPanel.Kontaktinfo" />
        </Label>
        <Detail>{inntektsmelding.kontaktpersonNavn}</Detail>
        <Detail>
          <FormattedMessage
            id="InntektsmeldingOpplysningerPanel.Tlf"
            values={{ nr: inntektsmelding.kontaktpersonNummer }}
          />
        </Detail>
      </VStack>
    </HStack>
  </VStack>
);
