import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, CheckmarkIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import styles from './timeLineData.module.css';

interface Props {
  fastsattOpptjeningAktivitet: FastsattOpptjeningAktivitet;
  lukkPeriode: () => void;
  velgNestePeriode: () => void;
  velgForrigePeriode: () => void;
}

export const TimeLineData = ({
  fastsattOpptjeningAktivitet: { klasse, fom, tom },
  lukkPeriode,
  velgNestePeriode,
  velgForrigePeriode,
}: Props) => {
  const intl = useIntl();
  return (
    <Box.New borderWidth="1" padding="4">
      <VStack gap="space-16">
        <HStack justify="space-between">
          <Label size="small">
            <FormattedMessage id="OpptjeningVilkarView.DetailsForSelectedPeriod" />
          </Label>
          <HStack gap="space-8">
            <Button
              size="xsmall"
              icon={<ArrowLeftIcon aria-hidden />}
              onClick={velgForrigePeriode}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.prevPeriod' })}
            >
              <FormattedMessage id="TimeLineData.prevPeriodShort" />
            </Button>
            <Button
              size="xsmall"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={velgNestePeriode}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.nextPeriod' })}
              iconPosition="right"
            >
              <FormattedMessage id="TimeLineData.nextPeriodShort" />
            </Button>
            <Button
              size="xsmall"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="tertiary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.lukkPeriode' })}
            />
          </HStack>
        </HStack>
        <BodyShort size="small">
          <PeriodLabel dateStringFom={fom} dateStringTom={tom} />
        </BodyShort>
        <HStack gap="space-4" align="center">
          {erPeriodeGodkjent(klasse) ? (
            <CheckmarkIcon className={styles['godkjentImage']} />
          ) : (
            <XMarkIcon className={styles['avslattImage']} />
          )}
          <BodyShort size="small">
            <FormattedMessage id={hentStatusTekst(klasse)} />
          </BodyShort>
        </HStack>
      </VStack>
    </Box.New>
  );
};

const hentStatusTekst = (klasse: FastsattOpptjeningAktivitet['klasse']): string =>
  klasse === 'BEKREFTET_AVVIST' ? 'OpptjeningVilkarView.Avslatt' : 'OpptjeningVilkarView.Godkjent';

const erPeriodeGodkjent = (klasse: FastsattOpptjeningAktivitet['klasse']): boolean =>
  new Set(['BEKREFTET_GODKJENT', 'ANTATT_GODKJENT', 'MELLOMLIGGENDE_PERIODE']).has(klasse);
