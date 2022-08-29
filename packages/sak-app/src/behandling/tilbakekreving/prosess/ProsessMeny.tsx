import React, { FunctionComponent, useMemo } from 'react';
import { ProcessMenuStepType, ProcessMenu } from '@navikt/ft-plattform-komponenter';

import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import '@fpsak-frontend/assets/styles/arrowForProcessMenu.less';

export type ProsessPanelMenyData = {
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}

const finnProsessmenyType = (
  status: string,
  harApentAksjonspunkt: boolean,
): ProcessMenuStepType => {
  if (harApentAksjonspunkt) {
    return ProcessMenuStepType.warning;
  }
  if (status === VilkarUtfallType.OPPFYLT) {
    return ProcessMenuStepType.success;
  }
  if (status === VilkarUtfallType.IKKE_OPPFYLT) {
    return ProcessMenuStepType.danger;
  }
  return ProcessMenuStepType.default;
};

interface OwnProps {
  menyData: ProsessPanelMenyData[];
  oppdaterProsessPanelIUrl: (index: number) => void;
}

const ProsessMeny: FunctionComponent<OwnProps> = ({
  menyData,
  oppdaterProsessPanelIUrl,
}) => {
  const steg = useMemo(() => menyData.map((data) => {
    const type = finnProsessmenyType(data.status, data.harApentAksjonspunkt);
    return {
      label: data.tekst,
      isActive: data.erAktiv,
      isDisabled: false,
      isFinished: type === ProcessMenuStepType.success,
      type,
    };
  }), [menyData]);

  return (
    <ProcessMenu steps={steg} onClick={oppdaterProsessPanelIUrl} />
  );
};

export default ProsessMeny;
