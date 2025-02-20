import { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { BodyShort, Label, Link } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, FloatRight } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { Inntektspost } from '@navikt/fp-types';

import styles from './inntektsposterPanel.module.css';

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

interface Props {
  inntektsposter: Inntektspost[];
  skjæringstidspunkt: string;
}

export const InntektsposterPanel = ({ inntektsposter, skjæringstidspunkt }: Props) => {
  const [visAlleMåneder, setVisAlleMåneder] = useState(false);

  const sorterteInntektsposter = useMemo(
    () => behandleInntektsposter(skjæringstidspunkt, inntektsposter),
    [inntektsposter],
  );

  return (
    <>
      {inntektsposter.length > 0 && (
        <>
          <Label size="small">
            <FormattedMessage id="InntektsposterPanel.Inntekter" />
          </Label>
          <FlexContainer>
            {sorterteInntektsposter
              .filter((_inntekt, index) => (visAlleMåneder ? true : index < 3))
              .map(inntekt => (
                <FlexRow key={inntekt.fom}>
                  <FlexColumn className={styles.maanedBredde}>
                    <BodyShort size="small">
                      <FormattedMessage id={`InntektsposterPanel.${dayjs(inntekt.fom).month() + 1}`} />
                    </BodyShort>
                  </FlexColumn>
                  <FlexColumn className={styles.aarBredde}>
                    <BodyShort size="small">{dayjs(inntekt.fom).year()}</BodyShort>
                  </FlexColumn>
                  <FlexColumn className={styles.belopBredde}>
                    <FloatRight>
                      <BodyShort size="small">{formatCurrencyNoKr(inntekt.beløp)}</BodyShort>
                    </FloatRight>
                  </FlexColumn>
                </FlexRow>
              ))}
          </FlexContainer>
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
        </>
      )}
      {inntektsposter.length === 0 && (
        <Label size="small">
          <FormattedMessage id="InntektsposterPanel.IngenInntekt" />
        </Label>
      )}
    </>
  );
};
