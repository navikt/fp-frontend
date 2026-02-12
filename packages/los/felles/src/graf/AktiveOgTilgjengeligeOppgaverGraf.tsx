import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ToggleGroup, VStack } from '@navikt/ds-react';
import { ToggleGroupItem } from '@navikt/ds-react/ToggleGroup';
import { capitalizeFirstLetter, createIntl } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { getAkselVariable, getStyle } from '../echartUtils';
import { ReactECharts } from '../ReactECharts';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

enum Tidsintervall {
  DAG = 'dag',
  UKE = 'uke',
  MÅNED = 'måned',
}

interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
}

export const AktiveOgTilgjengeligeOppgaverGraf = ({ aktiveOgLedigeTidslinje }: Props) => {
  const height = 400;

  const [tidsintervall, setTidsintervall] = useState<Tidsintervall>(Tidsintervall.UKE);
  const filtrertTidslinje = filtererTidslinjeBasertPåValgIntervall(aktiveOgLedigeTidslinje, tidsintervall);
  const sortertOgFiltrertTidslinje = filtrertTidslinje.toSorted(
    (a, b) => new Date(a.tidspunkt).getTime() - new Date(b.tidspunkt).getTime(),
  );
  // Bruk sampling på tidspunkter og data
  const granularitet = 40;
  const sampletTidspunkter = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.tidspunkt),
    granularitet,
  );
  const sampletVentendeData = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.ventende),
    granularitet,
  );
  const sampletLedigeData = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.tilgjengelige),
    granularitet,
  );
  const sampletReserverteData = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.aktive - o.tilgjengelige),
    granularitet,
  );
  const { tooltip, ...rest } = getStyle();

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
          height={height}
          option={{
            ...rest,
            grid: {
              ...rest.grid,
              top: '5%',
              left: '0%',
              right: '0%',
            },
            tooltip: {
              ...tooltip,
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  formatter: param => capitalizeFirstLetter(dayjs(param.value).format('dddd MM.DD.YYYY')),
                },
              },
            },
            legend: {
              top: 'top',
              icon: 'roundRect',
            },
            xAxis: {
              name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.xAkse' }),
              type: 'category',
              data: sampletTidspunkter,
              axisLabel: {
                ...rest.textStyle,
                formatter: (value: string) => {
                  const date = new Date(value);
                  if (tidsintervall === 'dag') {
                    return date.toLocaleTimeString('nb-NO', {
                      hour: '2-digit',
                      minute: '2-digit',
                    });
                  } else if (tidsintervall === 'uke') {
                    return date.toLocaleDateString('nb-NO', {
                      weekday: 'short',
                      day: '2-digit',
                      month: '2-digit',
                    });
                  } else {
                    return date.toLocaleDateString('nb-NO', {
                      day: '2-digit',
                      month: 'short',
                    });
                  }
                },
              },
            },
            yAxis: {
              axisLabel: {
                ...rest.textStyle,
              },
              type: 'value',
              name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.yAkse' }),
              scale: true,
            },
            series: [
              {
                name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.PaVent' }),
                type: 'line',
                data: sampletVentendeData,
                stack: 'total',
                areaStyle: {},
                color: getAkselVariable('--ax-bg-accent-moderate-pressed'),
              },
              {
                name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.Reserverte' }),
                type: 'line',
                data: sampletReserverteData,
                stack: 'total',
                areaStyle: {},
                color: getAkselVariable('--ax-bg-warning-moderate-hover'),
              },
              {
                name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.Ledig' }),
                type: 'line',
                data: sampletLedigeData,
                stack: 'total',
                areaStyle: {},
                color: getAkselVariable('--ax-bg-success-moderate-pressed'),
              },
            ],
          }}
        />
      </VStack>
    </RawIntlProvider>
  );
};

const filtererTidslinjeBasertPåValgIntervall = (
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[],
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

const reduserDatapunkterTilSpesifisertMaxAntall = (data: (string | number)[], maxPoints: number) => {
  if (data.length <= maxPoints) {
    return data;
  }

  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};
