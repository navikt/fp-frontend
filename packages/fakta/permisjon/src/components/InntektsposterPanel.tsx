import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { Inntektspost } from '@navikt/fp-types';

import styles from './inntektsposterPanel.module.css';

interface Props {
  inntektsposter: Inntektspost[];
  skjæringstidspunkt: string;
}

export const InntektsposterPanel = ({ inntektsposter, skjæringstidspunkt }: Props) => {
  const [visAlleMåneder, setVisAlleMåneder] = useState(false);

  const sorterteInntektsposter = behandleInntektsposter(skjæringstidspunkt, inntektsposter);

  return (
    <>
      {inntektsposter.length > 0 && (
        <VStack gap="2">
          <Label size="small">
            <FormattedMessage id="InntektsposterPanel.Inntekter" />
          </Label>
          <VStack gap="1" width="150px">
            {sorterteInntektsposter
              .filter((_inntekt, index) => (visAlleMåneder ? true : index < 3))
              .map(inntekt => (
                <HStack justify="space-between" key={inntekt.fom}>
                  <HStack gap="1" key={inntekt.fom}>
                    <BodyShort size="small">
                      <FormattedMessage id={`InntektsposterPanel.${dayjs(inntekt.fom).month() + 1}`} />
                    </BodyShort>
                    <BodyShort size="small">{dayjs(inntekt.fom).year()}</BodyShort>
                  </HStack>
                  <BodyShort size="small">
                    <BeløpLabel beløp={inntekt.beløp} />
                  </BodyShort>
                </HStack>
              ))}
          </VStack>
          <Link
            onClick={e => {
              e.preventDefault();
              setVisAlleMåneder(!visAlleMåneder);
            }}
            href=""
          >
            <span>
              <BodyShort size="small" className={styles.inline}>
                <FormattedMessage
                  id={visAlleMåneder ? 'InntektsposterPanel.FaerreManeder' : 'InntektsposterPanel.TidligereManeder'}
                />
              </BodyShort>
            </span>
            {visAlleMåneder ? <ChevronUpIcon className={styles.arrow} /> : <ChevronDownIcon className={styles.arrow} />}
          </Link>
        </VStack>
      )}
      {inntektsposter.length === 0 && (
        <Label size="small">
          <FormattedMessage id="InntektsposterPanel.IngenInntekt" />
        </Label>
      )}
    </>
  );
};

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
};

const behandleInntektsposter = (
  skjæringspunktDato: string,
  inntektsposter: Inntektspost[],
): ForenkletInntektspost[] => {
  const skjæringstidspunkt = dayjs(skjæringspunktDato);
  const sluttPeriode = skjæringstidspunkt.startOf('month');
  const startPeriode = sluttPeriode.subtract(12, 'month');

  const poster = [];
  for (let måned = sluttPeriode; måned.isAfter(startPeriode); måned = måned.subtract(1, 'month')) {
    const månedString = måned.format(ISO_DATE_FORMAT);
    const inntekt = inntektsposter.find(inn => dayjs(inn.fom).startOf('month').format(ISO_DATE_FORMAT) === månedString);
    poster.push({
      beløp: inntekt?.beløp || 0,
      fom: månedString,
    });
  }

  return poster;
};
