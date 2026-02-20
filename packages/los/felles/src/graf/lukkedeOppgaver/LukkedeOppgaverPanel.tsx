import { useMemo, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { Label, ToggleGroup, VStack } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

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

// TODO: tekst på linje for forrige uke (ukenummer?), commit signatur, diverse fikser, sjekke mulighet for null horisontal avstand mellom bokser., popup labels

export const LukkedeOppgaverPanel = ({ køStatistikk, height = 400 }: Props) => {
  const [valgtUke, setValgtUke] = useState<UkeValg>(UkeValg.DENNE_UKEN);

  const { denneUken, forrigeUke } = useMemo(() => mapLukkedeOppgaver(køStatistikk), [køStatistikk]);

  const yMax = beregnFellesYMax(denneUken, forrigeUke);
  const valgtData = valgtUke === UkeValg.DENNE_UKEN ? denneUken : forrigeUke;

  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16">
        <Label size="small">
          <FormattedMessage id="LukkedeOppgaverPanel.Tittel" />
        </Label>
        <ToggleGroup size="small" value={valgtUke} onChange={value => setValgtUke(value as UkeValg)}>
          <ToggleGroup.Item value={UkeValg.FORRIGE_UKE}>
            {intl.formatMessage({ id: 'LukkedeOppgaverPanel.ForrigeUke' })}
          </ToggleGroup.Item>
          <ToggleGroup.Item value={UkeValg.DENNE_UKEN}>
            {intl.formatMessage({ id: 'LukkedeOppgaverPanel.DenneUken' })}
          </ToggleGroup.Item>
        </ToggleGroup>
        <LukkedeOppgaverGraf height={height} lukkedeOppgaver={valgtData} yMax={yMax} />
      </VStack>
    </RawIntlProvider>
  );
};
