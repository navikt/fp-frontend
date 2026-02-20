import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ToggleGroup, VStack } from '@navikt/ds-react';
import { ToggleGroupItem } from '@navikt/ds-react/ToggleGroup';
import type { AkselColor } from '@navikt/ds-react/types/theme';
import { capitalizeFirstLetter, createIntl, timeFormat } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { createLineSeries, getStyle } from '../../echartUtils';
import { ReactECharts } from '../../ReactECharts';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

enum Tidsintervall {
  DAG = 'dag',
  UKE = 'uke',
  MÅNED = 'måned',
}
type SerieConfig = { akselColor: AkselColor; data: (string | number)[]; name: string };

interface Props {
  aktiveOgLedigeTidslinje: KøStatistikkDto[];
}

export const AktiveOgTilgjengeligeOppgaverGraf = ({ aktiveOgLedigeTidslinje }: Props) => {
  const [tidsintervall, setTidsintervall] = useState(Tidsintervall.UKE);
  const filtrertTidslinje = filtererTidslinjeBasertPåValgIntervall(aktiveOgLedigeTidslinje, tidsintervall);
  const sortertOgFiltrertTidslinje = filtrertTidslinje.toSorted(sorterKøStatistikkPåTidspunkt);

  const sampletTidspunkter = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.tidspunkt),
  );

  const serieConfig: SerieConfig[] = [
    {
      name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.PaVent' }),
      akselColor: 'accent',
      data: reduserDatapunkterTilSpesifisertMaxAntall(sortertOgFiltrertTidslinje.map(o => o.ventende)),
    },
    {
      name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.Reserverte' }),
      akselColor: 'warning',
      data: reduserDatapunkterTilSpesifisertMaxAntall(sortertOgFiltrertTidslinje.map(o => o.aktive - o.tilgjengelige)),
    },
    {
      name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.Ledig' }),
      akselColor: 'success',
      data: reduserDatapunkterTilSpesifisertMaxAntall(sortertOgFiltrertTidslinje.map(o => o.tilgjengelige)),
    },
  ];

  const options = getStyle();

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16">
        <ToggleGroup size="small" value={tidsintervall} onChange={value => setTidsintervall(value as Tidsintervall)}>
          <ToggleGroupItem value="måned">
            <FormattedMessage id="AktiveOgTilgjengeligeOppgaverGraf.SisteMåned" />
          </ToggleGroupItem>
          <ToggleGroupItem value="uke">
            <FormattedMessage id="AktiveOgTilgjengeligeOppgaverGraf.SisteUke" />
          </ToggleGroupItem>
          <ToggleGroupItem value="dag">
            <FormattedMessage id="AktiveOgTilgjengeligeOppgaverGraf.SisteDag" />
          </ToggleGroupItem>
        </ToggleGroup>
        <ReactECharts
          key={`chart-${aktiveOgLedigeTidslinje.length}`}
          height={400}
          option={{
            ...options,
            grid: {
              ...options.grid,
              left: '0%',
              right: '0%',
            },
            tooltip: {
              ...options.tooltip,
              valueFormatter: value => (value as number).toLocaleString('nb-NO'),
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  formatter: param => capitalizeFirstLetter(dayjs(param.value).format('dddd DD.MM.YYYY')),
                },
              },
            },
            xAxis: {
              name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.xAkse' }),
              type: 'category',
              data: sampletTidspunkter,
              axisLabel: {
                ...options.textStyle,
                formatter: (value: string) => {
                  const date = dayjs(value);
                  if (tidsintervall === 'dag') {
                    return timeFormat(value);
                  } else if (tidsintervall === 'uke') {
                    return date.format('ddd DD.MM');
                  } else {
                    return date.format('DD.MM');
                  }
                },
              },
            },
            yAxis: {
              axisLabel: {
                ...options.textStyle,
                formatter: (value: number) => value.toLocaleString('nb-NO'),
              },
              type: 'value',
              name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.yAkse' }),
              scale: true,
            },
            series: serieConfig.map(({ name, akselColor, data }) =>
              createLineSeries(
                {
                  name,
                  data,
                },
                akselColor,
              ),
            ),
          }}
        />
      </VStack>
    </RawIntlProvider>
  );
};

const filtererTidslinjeBasertPåValgIntervall = (
  aktiveOgLedigeTidslinje: KøStatistikkDto[],
  timeRange: Tidsintervall,
) => {
  return aktiveOgLedigeTidslinje.filter(o => {
    const oppgaveDate = new Date(o.tidspunkt);
    const diffMs = Date.now() - oppgaveDate.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    const diffDays = diffHours / 24;

    switch (timeRange) {
      case Tidsintervall.DAG:
        return diffHours <= 24;
      case Tidsintervall.UKE:
        return diffDays <= 7;
      case Tidsintervall.MÅNED:
        return diffDays <= 30;
    }
  });
};

const reduserDatapunkterTilSpesifisertMaxAntall = (data: (string | number)[], maxPoints: number = 40) => {
  if (data.length <= maxPoints) {
    return data;
  }

  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};

const sorterKøStatistikkPåTidspunkt = (a: KøStatistikkDto, b: KøStatistikkDto) =>
  new Date(a.tidspunkt).getTime() - new Date(b.tidspunkt).getTime();
