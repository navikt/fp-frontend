import { useMemo, useState } from 'react';
import { RawIntlProvider } from 'react-intl';

import { BodyShort, HStack, ToggleGroup, VStack } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { type KøStatistikkDto } from '@navikt/fp-types';

import { LukkedeOppgaverGraf } from './LukkedeOppgaverGraf';
import { type LukkedeOppgaverData, mapLukkedeOppgaver } from './lukkedeOppgaverMapper';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

enum UkeValg {
  DENNE_UKEN = 'denneUken',
  FORRIGE_UKE = 'forrigeUke',
}

interface Props {
  køStatistikk: KøStatistikkDto[];
  height?: number;
}

export const LukkedeOppgaverPanel = ({ køStatistikk, height = 400 }: Props) => {
  const [valgtUke, setValgtUke] = useState<UkeValg>(UkeValg.DENNE_UKEN);

  const { denneUken, forrigeUke } = useMemo(() => mapLukkedeOppgaver(køStatistikk), [køStatistikk]);

  const yMax = beregnFellesYMax(denneUken, forrigeUke);
  const valgtData = valgtUke === UkeValg.DENNE_UKEN ? denneUken : forrigeUke;

  const sistOppdatert = useMemo(() => {
    if (køStatistikk.length === 0) return undefined;
    const nyeste = køStatistikk.reduce((a, b) => (a.tidspunkt > b.tidspunkt ? a : b));
    return dayjs(nyeste.tidspunkt).format('DD.MM.YYYY HH:mm');
  }, [køStatistikk]);

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16">
        <BodyShort size="small">{intl.formatMessage({ id: 'LukkedeOppgaverPanel.Beskrivelse' })}</BodyShort>
        <BodyShort size="small">{intl.formatMessage({ id: 'LukkedeOppgaverPanel.GrafBeskrivelse' })}</BodyShort>
        <HStack justify="space-between" align="end">
          <ToggleGroup size="small" value={valgtUke} onChange={value => setValgtUke(value as UkeValg)}>
            <ToggleGroup.Item value={UkeValg.FORRIGE_UKE}>
              {intl.formatMessage({ id: 'LukkedeOppgaverPanel.ForrigeUke' })}
            </ToggleGroup.Item>
            <ToggleGroup.Item value={UkeValg.DENNE_UKEN}>
              {intl.formatMessage({ id: 'LukkedeOppgaverPanel.DenneUken' })}
            </ToggleGroup.Item>
          </ToggleGroup>
          {sistOppdatert && (
            <BodyShort size="small" textColor="subtle">
              {intl.formatMessage({ id: 'LukkedeOppgaverPanel.SistOppdatert' }, { tidspunkt: sistOppdatert })}
            </BodyShort>
          )}
        </HStack>
        <LukkedeOppgaverGraf height={height} lukkedeOppgaver={valgtData} yMax={yMax} />
      </VStack>
    </RawIntlProvider>
  );
};

/**
 * Beregner felles yMax for begge uker for å unngå endring i y-akse ved ukebytte.
 */
const beregnFellesYMax = (denneUken: LukkedeOppgaverData, forrigeUke: LukkedeOppgaverData): number => {
  const totalDenneUken = denneUken.antallPerDag.reduce((sum, v) => sum + v, 0);
  const maksVerdi = Math.max(totalDenneUken, denneUken.forrigeUkeTotal, forrigeUke.forrigeUkeTotal);

  if (maksVerdi === 0) return 50;

  const maksMedMargin = maksVerdi * 1.1;

  let steg = 200;
  if (maksMedMargin <= 1200) steg = 100;
  if (maksMedMargin <= 500) steg = 50;

  return Math.ceil(maksMedMargin / steg) * steg;
};
