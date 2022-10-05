import React, {
  useRef, FunctionComponent,
} from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import NyeOgFerdigstilteOppgaver from '../../../typer/nyeOgFerdigstilteOppgaverTsType';
import NyeOgFerdigstilteOppgaverForIdagPanel from './nyeOgFerdigstilteOppgaverForIdag/NyeOgFerdigstilteOppgaverForIdagPanel';
import NyeOgFerdigstilteOppgaverForSisteSyvPanel from './nyeOgFerdigstilteOppgaverForSisteSyv/NyeOgFerdigstilteOppgaverForSisteSyvPanel';

interface OwnProps {
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

/**
 * SaksbehandlerNokkeltallPanel.
 */
const SaksbehandlerNokkeltallPanel: FunctionComponent<OwnProps> = ({
  nyeOgFerdigstilteOppgaver,
}) => {
  const HEIGHT = 200;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <NyeOgFerdigstilteOppgaverForIdagPanel
        height={HEIGHT}
        nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver}
      />
      <VerticalSpacer sixteenPx />
      <NyeOgFerdigstilteOppgaverForSisteSyvPanel
        height={HEIGHT}
        nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver}
      />
    </div>
  );
};

export default SaksbehandlerNokkeltallPanel;
