import { useIntl } from 'react-intl';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { ReactECharts } from '@navikt/fp-los-felles';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import type { NyeOgFerdigstilteOppgaver } from '../../../typer/nyeOgFerdigstilteOppgaverTsType';

const behandlingstypeOrder = [
  BehandlingTypeEnum.TILBAKEKREVING_REVURDERING,
  BehandlingTypeEnum.TILBAKEKREVING,
  BehandlingTypeEnum.DOKUMENTINNSYN,
  BehandlingTypeEnum.KLAGE,
  BehandlingTypeEnum.REVURDERING,
  BehandlingTypeEnum.FORSTEGANGSSOKNAD,
];

interface Props {
  height: number;
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[];
  nyeOgFerdigstilteOppgaver: NyeOgFerdigstilteOppgaver[];
}

export const NyeOgFerdigstilteOppgaverForIdagGraf = ({ height, nyeOgFerdigstilteOppgaver, behandlingTyper }: Props) => {
  const intl = useIntl();
  const behandlingTypeNavnForYAkse = behandlingstypeOrder.map(bType => {
    if (bType === BehandlingTypeEnum.FORSTEGANGSSOKNAD) {
      return intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling' });
    }

    const type = behandlingTyper.find(bt => bt.kode === bType);
    return type ? type.navn : '';
  });

  const ferdigLabel = intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte' });
  const nyLabel = intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForIdagGraf.Nye' });

  const dataFerdigstilte = behandlingstypeOrder.map(type => {
    const oppgave = nyeOgFerdigstilteOppgaver.find(o => o.behandlingType === type);
    if (oppgave) {
      return oppgave.antallFerdigstilte;
    }
    return 0;
  });
  const dataNye = behandlingstypeOrder.map(type => {
    const oppgave = nyeOgFerdigstilteOppgaver.find(o => o.behandlingType === type);
    if (oppgave) {
      return oppgave.antallNye;
    }
    return 0;
  });

  return (
    <ReactECharts
      height={height}
      option={{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: [ferdigLabel, nyLabel],
          top: 'bottom',
        },
        grid: {
          top: '5%',
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: behandlingTypeNavnForYAkse,
        },
        series: [
          {
            name: ferdigLabel,
            type: 'bar',
            data: dataFerdigstilte,
          },
          {
            name: nyLabel,
            type: 'bar',
            data: dataNye,
          },
        ],
        color: ['#38a161', '#337c9b'],
      }}
    />
  );
};
