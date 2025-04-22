import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { BehandlingType } from '@navikt/fp-kodeverk';
import type {
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Oppgave,
  OppgaveId,
  SimuleringResultat,
  TilbakekrevingValg,
  Vilkar,
} from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { type ForhandsvisData, VedtakForm } from './components/forstegang/VedtakForm';
import { VedtakRevurderingForm } from './components/revurdering/VedtakRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  originaltBeregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  tilbakekrevingvalg?: TilbakekrevingValg;
  simuleringResultat?: SimuleringResultat;
  beregningErManueltFastsatt: boolean;
  vilkar: Vilkar[];
  previewCallback: (data: ForhandsvisData) => void;
  oppgaver?: Oppgave[];
  ferdigstillOppgave: (oppgaveId: OppgaveId) => Promise<void>;
}

export const VedtakProsessIndex = ({
  beregningsresultat,
  originaltBeregningsresultat,
  tilbakekrevingvalg,
  simuleringResultat,
  beregningErManueltFastsatt,
  vilkar,
  previewCallback,
  oppgaver,
  ferdigstillOppgave,
}: Props) => {
  const { behandling } = usePanelDataContext();

  return (
    <RawIntlProvider value={intl}>
      {behandling.type !== BehandlingType.REVURDERING ? (
        <VedtakForm
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          vilkar={vilkar}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          oppgaver={oppgaver}
          ferdigstillOppgave={ferdigstillOppgave}
        />
      ) : (
        <VedtakRevurderingForm
          previewCallback={previewCallback}
          tilbakekrevingvalg={tilbakekrevingvalg}
          simuleringResultat={simuleringResultat}
          beregningsresultat={beregningsresultat}
          vilkar={vilkar}
          beregningErManueltFastsatt={beregningErManueltFastsatt}
          beregningsresultatOriginalBehandling={originaltBeregningsresultat}
          oppgaver={oppgaver}
          ferdigstillOppgave={ferdigstillOppgave}
        />
      )}
    </RawIntlProvider>
  );
};
