import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { Inntektspost } from '@navikt/fp-types';

interface Props {
  inntektsposter: Inntektspost[];
  skjæringstidspunkt: string;
}

const MÅNED_IDER = [
  'InntektsposterPanel.1',
  'InntektsposterPanel.2',
  'InntektsposterPanel.3',
  'InntektsposterPanel.4',
  'InntektsposterPanel.5',
  'InntektsposterPanel.6',
  'InntektsposterPanel.7',
  'InntektsposterPanel.8',
  'InntektsposterPanel.9',
  'InntektsposterPanel.10',
  'InntektsposterPanel.11',
  'InntektsposterPanel.12',
] as const;

export const InntektsposterPanel = ({ inntektsposter, skjæringstidspunkt }: Props) => {
  const [visAlleMåneder, setVisAlleMåneder] = useState(false);

  const sorterteInntektsposter = behandleInntektsposter(skjæringstidspunkt, inntektsposter);

  return (
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="InntektsposterPanel.Inntekter" />
      </Label>
      {inntektsposter.length === 0 && (
        <BodyShort size="small" textColor="subtle">
          <FormattedMessage id="InntektsposterPanel.IngenInntekt" />
        </BodyShort>
      )}
      {inntektsposter.length > 0 && (
        <>
          <VStack gap="space-4" width="150px">
            {sorterteInntektsposter
              .filter((_inntekt, index) => (visAlleMåneder ? true : index < 3))
              .map(inntekt => (
                <HStack justify="space-between" asChild key={inntekt.fom}>
                  <BodyShort size="small">
                    <HStack gap="space-4" justify="space-between" className="w-18">
                      <FormattedMessage tagName="span" id={MÅNED_IDER[dayjs(inntekt.fom).month()]} />
                      <span>{dayjs(inntekt.fom).year()}</span>
                    </HStack>
                    <BeløpLabel beløp={inntekt.beløp} kr />
                  </BodyShort>
                </HStack>
              ))}
          </VStack>
          <BodyShort size="small">
            <Link
              onClick={e => {
                e.preventDefault();
                setVisAlleMåneder(!visAlleMåneder);
              }}
              href=""
            >
              <FormattedMessage
                id={visAlleMåneder ? 'InntektsposterPanel.FaerreManeder' : 'InntektsposterPanel.TidligereManeder'}
                tagName="span"
              />
              {visAlleMåneder ? (
                <ChevronUpIcon fontSize="1.5rem" aria-hidden />
              ) : (
                <ChevronDownIcon fontSize="1.5rem" aria-hidden />
              )}
            </Link>
          </BodyShort>
        </>
      )}
    </VStack>
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
