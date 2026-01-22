import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ToggleGroup } from '@navikt/ds-react';
import { ToggleGroupItem } from '@navikt/ds-react/ToggleGroup';

import { ReactECharts } from '../ReactECharts';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk';

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
  const intl = useIntl();
  const aktivLabel = intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.Ledig' });
  const reserverteLabel = intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.Reserverte' });

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
  const sampletLedigeData = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.tilgjengelige),
    granularitet,
  );
  const sampletReserverteData = reduserDatapunkterTilSpesifisertMaxAntall(
    sortertOgFiltrertTidslinje.map(o => o.aktive - o.tilgjengelige),
    granularitet,
  );

  return (
    <>
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
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            data: [aktivLabel, reserverteLabel],
          },
          xAxis: {
            name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.xAkse' }),
            type: 'category',
            data: sampletTidspunkter,
            boundaryGap: true,
            axisLabel: {
              formatter: (value: string) => {
                const date = new Date(value);
                if (tidsintervall === 'dag') {
                  return date.toLocaleTimeString('no-NO', {
                    hour: '2-digit',
                    minute: '2-digit',
                  });
                } else if (tidsintervall === 'uke') {
                  return date.toLocaleDateString('no-NO', {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                  });
                } else {
                  return date.toLocaleDateString('no-NO', {
                    day: '2-digit',
                    month: 'short',
                  });
                }
              },
            },
          },
          yAxis: {
            type: 'value',
            name: intl.formatMessage({ id: 'AktiveOgTilgjengeligeOppgaverGraf.yAkse' }),
            scale: true,
          },
          series: [
            {
              name: reserverteLabel,
              type: 'line',
              data: sampletReserverteData,
              stack: 'total',
              areaStyle: {},
            },
            {
              name: aktivLabel,
              type: 'line',
              data: sampletLedigeData,
              stack: 'total',
              areaStyle: {},
            },
          ],
          color: ['#38a161', '#9ad6bd'],
        }}
      />
    </>
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
